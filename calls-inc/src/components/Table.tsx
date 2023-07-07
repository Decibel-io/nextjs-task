"use client";
import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import CallService from "../lib/CallService";
import { useRouter } from "next/navigation";
import { formatDate, formatTime } from "@/lib/utils";

interface Props {
  data: App.CallResponse;
  limit: number;
  offset: number;
  loading: boolean;
  handleTableChange: (props: any) => void;
  onClickNote: (id: string) => void;
}

export default ({
  data,
  limit,
  offset,
  loading,
  handleTableChange,
  onClickNote,
}: Props) => {
  const handleAddNote = (id: string) => {
    onClickNote(id);
  };

  const columns: ColumnsType<App.Call> = [
    {
      title: "CALL TYPE",
      dataIndex: "call_type",
      key: "call_type",
      render: (call_type) => (
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {call_type}
        </span>
      ),
    },
    {
      title: "DIRECTION",
      dataIndex: "direction",
      key: "direction",
      render: (direction) => (
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {direction}
        </span>
      ),
    },
    {
      title: "DURATION",
      dataIndex: "duration",
      key: "duration",
      render: (duration) => (
        <>
          <span>{formatTime(duration)}`</span>
          <br />
          <span>({duration} seconds)</span>
        </>
      ),
    },
    {
      title: "FROM",
      dataIndex: "from",
      key: "from",
      render: (from) => `${from}`,
    },
    {
      title: "TO",
      dataIndex: "to",
      key: "to",
      render: (to) => `${to}`,
    },
    {
      title: "VIA",
      dataIndex: "via",
      key: "via",
      render: (via) => `${via}`,
    },

    {
      title: "CREATED AT",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => `${formatDate(created_at)}`,
    },
    {
      title: "STATUS",
      key: "is_archived",
      dataIndex: "is_archived",
      render: (is_archived) => (
        <Tag color={is_archived ? "green-inverse" : "green"}>
          {is_archived ? "Archived" : "Unarchived"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, { id }) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleAddNote(id)}>
            Add Note
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data.nodes}
        pagination={{
          total: data.totalCount,
          pageSize: limit,
          current: offset,
          size: "default",
        }}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};
