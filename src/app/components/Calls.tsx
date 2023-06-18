"use client";
import React, { useEffect, useState } from 'react';
import { Table, Typography, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Pusher from 'pusher-js';
import { ColumnType } from 'antd/es/table/interface';
import { archive, getCalls, getGefreshToken, login } from '@/api';

const { Title } = Typography;

const Wrapper = styled("div")`
    padding: 10px 50px;
`;

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #333!important;
    color: #eaeaea;
    border-bottom: none;
  }
  .ant-table-thead > tr > td {
    background-color: #333!important;
    border-bottom: none;
    color: #eaeaea;
  }
  .ant-table-cell-fix-right {
    background: transparent;
    color: #eaeaea;
  }
  .ant-table-tbody > tr > td {
    border-bottom-color: #666;
  }
  .ant-table-thead > tr > td {
    border-bottom: none;
  }

  tbody > tr:hover > td {
    background-color: inherit !important;
  }

  .ant-table {
    background: transparent!important;
    color: #eaeaea!important;
  }

  .ant-pagination li a {
    color: #eaeaea;
  }

  .ant-pagination li button {
    border: none!important;
    color: #eaeaea!important;
  }
  
  .ant-pagination-total-text {
    border: none!important;
    color: #eaeaea;
  }

  .ant-table-row-expand-icon {
    background: black;
  }
  .ant-table-column-sort, .ant-table-column-has-sorters {
    background: #333!important;
  }


  .ant-table-cell {
    background: black!important;
  } 

  .ant-checkbox-inner {
    background: black;
  }

  .ant-table-row-expand-icon-cell {
    background-color: #333;
  }

  .ant-pagination-item-active a{
    color: black!important;
  }
  
  .ant-table-wrapper .ant-table-thead th.ant-table-column-sorter {
    background: none;
  }
  
  .ant-pagination-item-ellipsis {
    border: none!important;
    color: #eaeaea!important;
  }
  .ant-table-row-selected {
    background: black;
  }
`;

const Header = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 15px 0 20px 0;
`;

const Action = styled("a")`
  cursor: pointer;
`;

const Loader = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  color: #fff;
`;

const ArchiveButton = styled(Button)`
    background: black;
    color: white;
`;

type Note = {
    id: String
    content: String
}

interface DataItem {
    id: String
    direction: String
    from: String
    to: String
    duration: number
    is_archived: Boolean
    call_type: String
    via: String
    created_at: String
    notes: Note[]
}

// on row expand showing call details
const defaultExpandable = {
    expandedRowRender: (record: DataItem) => <div>
        <div><b>Date: </b><>{record.created_at}</></div>
        <div><b>Direction: </b><>{record.direction}</></div>
        <div><b>From: </b><>{record.from}</></div>
        <div><b>To: </b><>{record.to}</></div>
        <div><b>Duration: </b><>{record.duration}</></div>
        <div><b>Is Archived: </b><>{record.is_archived.toString()}</></div>
        <div><b>Call Type: </b><>{record.call_type}</></div>
        <div><b>Via: </b><>{record.via}</></div>
        <div><b>Notes: </b>{record.notes.length == 0 ? <>No Notes</> : record.notes.map((note) => <p>{note.content}</p>)}</div>
    </div>
};


const Calls = () => {
    const [loading, setLoading] = useState(true);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [total, setTotal] = useState();
    const [page, setPage] = useState(1);
    const [data, setData] = useState<DataItem[]>([]);
    const [isRefreshToken, setIsRefreshToken] = useState<Boolean>(false);
    const [isLogin, setIsLogin] = useState<Boolean>(false);
    const [selectedCalls, setSelectedCalls] = useState<String[]>([]);
    const [updatedCall, setUpdatedCall] = useState<DataItem>();


    // Pusher SDK for real time update 
    useEffect(() => {
        const pusher = new Pusher("d44e3d910d38a928e0be", {
            cluster: "eu",
            channelAuthorization: {
                endpoint: "https://frontend-test-api.aircall.io/pusher/auth",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        });

        const channel = pusher.subscribe('private-aircall');
        channel.bind('update-call', (response: DataItem) => {
            setUpdatedCall(response);
        });
        return () => {
            channel.unbind('update-call');
            pusher.unsubscribe('private-aircall');
        };
    }, []);


    useEffect(() => {
        if (data) {
            const newCalls = data.map(nc => {
                if (nc.id === updatedCall?.id) {
                    return updatedCall;
                }
                return nc;
            });
            setData(newCalls);
        }
    }, [updatedCall])

    useEffect(() => {
        fetchCalls();
    }, [page, recordsPerPage]);


    // login logic
    useEffect(() => {
        if (isLogin) {
            loginUser();
        }
    }, [isLogin]);


    const loginUser = async () => {
        const res = await login({ username: "milan", password: "milan" });
        localStorage.setItem('token', res.data.access_token);
        setIsLogin(false);
        fetchCalls();
        setTimeout(() => {
            setIsRefreshToken(true);
        }, 8000);
    }

    // refresh Token logic
    const refreshToken = async () => {
        try {
            const res = await getGefreshToken();
            localStorage.setItem('token', res.data.access_token);
            setIsRefreshToken(false);
        } catch (error) {
            console.log("error", error);
            setIsLogin(true);
        }
    }

    useEffect(() => {
        if (isRefreshToken) {
            refreshToken();
        }
    }, [isRefreshToken]);

    const fetchCalls = async () => {
        try {
            setLoading(true);
            const offset = ((page - 1) * recordsPerPage);
            const res = await getCalls(offset, recordsPerPage);
            const calls = res.data.nodes;
            setData(calls);
            setTotal(res.data.totalCount);
            setLoading(false);
        } catch (error: any) {
            console.log('Error fetching calls:', error.message);
            if (error.response.data.message == "Unauthorized") {
                setIsRefreshToken(true);
            }
        }
    };

    // pagination logic
    const onPageChange = (page: number) => {
        setPage(page);
    };

    const onShowSizeChange = (current: number, pageSize: number) => {
        setRecordsPerPage(pageSize);
    };


    // multiple call selection
    const onSelectChange = (newSelectedRowKeys: String[]) => {
        setSelectedCalls(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys: selectedCalls,
        preserveSelectedRowKeys: true,
        onChange: onSelectChange,
    };

    const handleSingleArchive = async (id: String) => {
        try {
            setLoading(true);
            await archive(id);
            setLoading(false);
        } catch (error: any) {
            console.log('Error while Archiving call:', error.message);
        }
    };

    const handleMultipleArchive = async () => {
        selectedCalls.forEach(async (sc) => {
            await handleSingleArchive(sc);
            await fetchCalls();
            setSelectedCalls([]);
        });
    };

    const columns: ColumnType<DataItem>[] = [
        {
            title: 'Date', dataIndex: 'created_at', key: 'created_at', sorter: (a: any, b: any) => {
                const dateA = new Date(a.created_at);
                const dateB = new Date(b.created_at);
                return dateA.getTime() - dateB.getTime();
            },
        },
        { title: 'Direction', dataIndex: 'direction', key: 'direction' },
        { title: 'Duration', dataIndex: 'duration', key: 'duration' },
        {
            title: 'Is Archived',
            key: 'is_archived',
            render: (record: DataItem) => <p>{record.is_archived.toString()}</p>
        },
        { title: 'From', dataIndex: 'from', key: 'from' },
        { title: 'To', dataIndex: 'to', key: 'to' },
        { title: 'Via', dataIndex: 'via', key: 'via' },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (record: DataItem) => <Action onClick={() => { handleSingleArchive(record.id) }}>{record.is_archived ? "Unarchive" : "Archive"}</Action>,
        },
    ];

    return <Wrapper>
        {loading ? <Loader indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> :
            <>
                <Header style={{}}>
                    <Title level={3} style={{ marginBottom: 5, fontSize: '1.5em', fontWeight: 'normal', color: "#fafafa" }}>Calls</Title>
                    {selectedCalls.length > 0 && <ArchiveButton disabled={selectedCalls.length == 0} onClick={handleMultipleArchive}>Archieve</ArchiveButton>}
                </Header>
                <StyledTable<any>
                    rowKey="id"
                    dataSource={data}
                    sticky
                    pagination={{ current: page, showSizeChanger: true, onChange: onPageChange, pageSizeOptions: [5, 10, 20, 50], onShowSizeChange: onShowSizeChange, pageSize: recordsPerPage, total: total, showTotal: () => `Total: ${total}` }}
                    columns={columns}
                    expandable={defaultExpandable}
                    rowSelection={rowSelection}
                />
            </>}
    </Wrapper>
};

export default Calls;