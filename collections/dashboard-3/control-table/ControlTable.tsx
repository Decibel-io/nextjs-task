import { Col, Row, Table, CheckableTag, Modal, Notification, Select, Option, Tag, Image, Badge } from '@app/components'
import { IStore } from '@app/redux'
import { ColumnsType, Call } from '@app/types'
import { TablePaginationConfig } from 'antd'
import { PhysicalCardOrder } from '../CallDetails'
import { API } from 'libs/apis'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Input from 'react-phone-number-input/input'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PhoneInput from 'react-phone-number-input'
import { BASE_COLORS } from '@app/theme'

export const ControlTable: React.FC = () => {
  const { user } = useSelector((state: IStore) => state)
  const accessToken = user.accessToken
  //state variables
  const rowsPerPage: number = 6
  const [filter, setFilter] = useState<string>('Select Filter')
  const [page, setPage] = useState<number>(1)
  const [calls, setCalls] = useState<Call[]>([])
  const [filteredcalls, setfilteredCalls] = useState<Call[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [totalcount, setTotalCount] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState<Call | null>(null)

  //setting the call record when modal opened
  const changeModalState = (record: Call) => {
    setIsModalOpen(true)
    setSelectedRecord(record)
  }

  const handleOnCloseModal = () => {
    setIsModalOpen(false)
  }

  //fetch calls for new offset and limit on page change
  const handlePaginationChange = (newPage: number) => {
    if (newPage === page) return;
    setPage(newPage)
    setLoading(true)
    const offset: number = (newPage - 1) * rowsPerPage
    const limit: number = (newPage - 1) * rowsPerPage + rowsPerPage
    fetchData(offset, limit)
  }

  // Configuration for pagination
  const paginationConfig: TablePaginationConfig = {
    total: totalcount,
    pageSize: rowsPerPage,
    defaultCurrent: 1,
    current: page,
    onChange: handlePaginationChange,
    showSizeChanger: false,
    showQuickJumper: false,
  }

  //Updating calls based on filter
  const handleUpdateCall = (record: Call): void => {
    setfilteredCalls((prevCalls) => {
      return prevCalls.map((call) => {
        if (call.id === record.id) {
          call.is_archived = record.is_archived
        }

        return call
      })
    })
  }
  // Options for filter select
  const options: {
    value: string
    label: string
  }[] = [
    { value: 'All', label: 'All' },
    { value: 'Archived', label: 'Archived' },
    { value: 'Unarchived', label: 'Unarchived' },
  ]

  const handleArchiveCallback = async (record: Call): Promise<void> => {
    // Handle archiving/unarchiving of the call

    const updatedIsArchived = await API.CALL_REQUESTS.ARCHIVE(record.id, accessToken)
    const call = updatedIsArchived.data
    handleUpdateCall(call)
    switch (call.is_archived) {
      case true:
        Notification({
          message: 'Call archived!',
          type: 'success',
        })
        break
      default:
        Notification({
          message: 'Call unarchived!',
          type: 'success',
        })
    }
  }


  //to display any phone number in E.164 format
  const formatPhoneNumber = (phoneNumber: string) => {
    const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
    const number = parsedPhoneNumber?.formatInternational();//visually looks better
    //const number2 = parsedPhoneNumber?.format('E.164'); //this also works but without spacing
  
    return !phoneNumber.startsWith('+')
      ? (
        <Input
          value={phoneNumber}
          onChange={(newPhoneNumber) => {
            phoneNumber = newPhoneNumber
          }}
        />
      )
      : number;
  };
  //table column
  const columnsdata: ColumnsType = [
    {
      dataIndex: 'call_type',
      title: 'Call Type',
      render: (_: Call, record: Call) => {
        let callType: string = ''
        let tagColor: string = ''

        switch (record.call_type) {
          case 'voicemail':
            callType = 'Voicemail'
            tagColor = 'geekblue'
            break
          case 'answered':
            callType = 'Answered'
            tagColor = 'cyan'
            break
          case 'missed':
            callType = 'Missed'
            tagColor = 'red'
            break
        }

        return <Tag color={tagColor}>{callType}</Tag>
      },
    },
    {
      dataIndex: 'direction',
      title: 'Direction',
      render: (_: Call, record: Call) => {
        const direction = record.direction === 'inbound' ? 'Inbound' : 'Outbound'
        return <Tag color='blue'>{direction}</Tag>
      },
    },
    {
      dataIndex: 'duration',
      title: 'Duration',
      render: (duration: number) => {
        const seconds = Math.floor(duration / 1000)
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60

        return `${minutes} minutes ${remainingSeconds} seconds`
      },
    },
    {
      dataIndex: 'from',
      title: 'From',
      render: (from: string) => formatPhoneNumber(from),
    },
    {
      dataIndex: 'to',
      title: 'To',
      render: (to: string) => formatPhoneNumber(to),
    },
    { dataIndex: 'via', title: 'Via', render: (via: string) => formatPhoneNumber(via) },
    {
      dataIndex: 'created_at',
      title: 'Created At',
      render: (created_at: string) => {
        return created_at.slice(0, 10)
      },
    },
    {
      dataIndex: 'status',
      title: 'Status',
      render: (_: Call, record: Call) => (
        <CheckableTag onClick={() => handleArchiveCallback(record)} checked={record.is_archived}>
          {record.is_archived ? 'Archived' : 'Unarchived'}
        </CheckableTag>
      ),
    },
    {
      dataIndex: 'actions',
      title: 'Actions',
      render: (_: Call, record: Call) => (
        <CheckableTag onClick={() => changeModalState(record)} checked>
          Add Note
        </CheckableTag>
      ),
    },
  ]

  useEffect(() => {
    //for the loading the initial page
    const offset: number = (page - 1) * rowsPerPage
    const limit: number = (page - 1) * rowsPerPage + rowsPerPage
    fetchData(offset, limit)
  }, [])

  //function to fetch data based on offset and limit
  const fetchData = async (offset: number, limit: number): Promise<void> => {
    const response = await API.CALL_REQUESTS.GET(offset, limit, accessToken)
    if (response) {
      setFilter('Select Filter')
      setTotalCount(response.data.totalCount)
      setCalls(response.data.nodes)
      setfilteredCalls(response.data.nodes)
    }
  }

  //filter calls based on chosen filter value
  const handleFilterChange = (selectedValue: string): void => {
    try {
      let filterCalls
      setFilter(selectedValue)

      switch (selectedValue) {
        case 'All':
          filterCalls = calls
          break
        case 'Archived':
          filterCalls = calls.filter((call) => call.is_archived)
          break
        case 'Unarchived':
          filterCalls = calls.filter((call) => !call.is_archived)
          break
        default:
          filterCalls = calls
          break
      }
      setfilteredCalls(filterCalls)
    } catch (error) {
      Notification({
        message: 'Error fetching data',
        description: `Error: ${error}`,
        type: 'error',
      })
    }
  }

  return (
    <Row>
      <Col span={24}>
        <Select value={filter} onChange={(value: string) => handleFilterChange(value)}>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Col>
      <Col span={24}>
        <Table columns={columnsdata} dataSource={filteredcalls} scroll={{ x: true }} pagination={paginationConfig} />
        <Modal title="Call" visible={isModalOpen} onCancel={handleOnCloseModal} footer={false}>
          {selectedRecord && <PhysicalCardOrder call={selectedRecord} accessToken={accessToken} />}
        </Modal>
      </Col>
    </Row>
  )
}
