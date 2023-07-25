import { Col, Row, Table, CheckableTag, Modal, Notification, Select, Option, Tag , Image} from '@app/components'
import { IStore } from '@app/redux'
import { ColumnsType, Call } from '@app/types'
import { TablePaginationConfig } from 'antd'
import { PhysicalCardOrder } from '../CallDetails'
import { API } from 'libs/apis'
import { NextRouter, useRouter } from 'next/router'
import { parsePhoneNumberFromString, PhoneNumber, format, AsYouType, CountryCode } from 'libphonenumber-js'
import { formatPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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

  const handlePaginationChange = (newPage: number) => {
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

  const formatDate = (Date: string): string => {
    const formattedDate = Date.slice(0, 10)
    return formattedDate
  }

  const formatToE164 = (phoneNumber: string) => {
    return phoneNumber
  }

  const columnsdata: ColumnsType = [
    {
      dataIndex: 'call_type',
      title: 'Call Type',
      render: (_: Call, record: Call) => {
        let callType: string = ''

        switch (record.call_type) {
          case 'voicemail':
            callType = 'Voicemail'
            break
          case 'answered':
            callType = 'Answered'
            break
          case 'missed':
            callType = 'Missed'
            break
        }

        return <Tag>{callType}</Tag>
      },
    },
    {
      dataIndex: 'direction',
      title: 'Direction',
      render: (_: Call, record: Call) => {
        const direction = record.direction === 'inbound' ? 'Inbound' : 'Outbound'
        return <Tag>{direction}</Tag>
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
    },
    {
      dataIndex: 'to',
      title: 'To',
    },
    { dataIndex: 'via', title: 'Via', render: (via: string) => formatToE164(via) },
    {
      dataIndex: 'created_at',
      title: 'Created At',
      render: (created_at: string) => formatDate(created_at),
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
      console.log(response.data.nodes)
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
    <Row justify="center">
      <Col span={22}>
        <Select value={filter} onChange={(value: string) => handleFilterChange(value)}>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Col>
      <Col span={22}>
        <Table columns={columnsdata} dataSource={filteredcalls} scroll={{ x: true }} pagination={paginationConfig} />
        <Modal title="Call" visible={isModalOpen} onCancel={handleOnCloseModal} footer={false}>
          {selectedRecord && <PhysicalCardOrder call={selectedRecord} accessToken={accessToken} />}
        </Modal>
      </Col>
    </Row>
  )
}
