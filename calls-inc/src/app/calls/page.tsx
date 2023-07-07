"use client";
import { DownOutlined } from "@ant-design/icons";
import { Card, Dropdown, Modal, Space, Typography, Input, Form } from "antd";
import { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import Table from "../../components/Table";
import { formatDate, formatTime } from "@/lib/utils";
import CallService from "@/lib/CallService";
import { useRouter } from "next/navigation";

const { TextArea } = Input;

const items: MenuProps["items"] = [
  {
    key: "all",
    label: "All",
  },
  {
    key: "archived",
    label: "Archived",
  },
  {
    key: "unarchived",
    label: "Unarchived",
  },
];

export default function Home() {
  const [data, setData] = useState<App.CallResponse>({
    hasNextPage: false,
    nodes: [],
    totalCount: 0,
  });
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"all" | "archived" | "unarchived">(
    "all"
  );
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [editCall, setEditCall] = useState<App.Call | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSave = async ({ id, notes }: { id: string; notes: string }) => {
    try {
      console.log(id, notes);
      setLoading(true);
      await CallService.editNote({ id, content: notes });
      await getCalls();
      setLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChangeStatus = (e: any) => {
    setStatus(e.key);
    console.log(e.key);
  };

  const handleCancel = () => {
    setEditCall(null);
    setIsModalOpen(false);
  };

  const handleTableChange = (params: any) => {
    const { current, pageSize } = params;
    setLimit(pageSize);
    setOffset(current);
  };

  const getCalls = async () => {
    try {
      setLoading(true);
      const response = await CallService.getCalls({
        offset,
        limit,
      });

      setData(response);

      console.log(response);
      setLoading(false);
    } catch (error) {
      // await CallService.refreshAccessToken();
      CallService.logout();
      router.push("/login");
      setLoading(false);
    }
  };

  const handleNoteClick = (id: string) => {
    console.log(id);
    setEditCall(data.nodes.find((e) => e.id == id) || null);
    setIsModalOpen(true);
  };

  useEffect(() => {
    getCalls();
  }, [limit, offset]);

  return (
    <main>
      <br />
      <span>Filter By: </span>
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ["3"],
          onClick: handleChangeStatus,
        }}
      >
        <Typography.Link>
          <Space>
            <span
              style={{
                textTransform: "capitalize",
              }}
            >
              <strong>Status: </strong>
              {status}
            </span>
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
      <Table
        loading={loading}
        limit={limit}
        offset={offset}
        data={{
          ...data,
          nodes:
            status === "archived"
              ? data.nodes.filter((e) => e.is_archived)
              : status === "unarchived"
              ? data.nodes.filter((e) => !e.is_archived)
              : data.nodes,
        }}
        handleTableChange={handleTableChange}
        onClickNote={handleNoteClick}
      />
      {editCall && (
        <NoteModal
          call={editCall}
          loading={loading}
          isModalOpen={isModalOpen}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      )}
    </main>
  );
}

const NoteModal = ({
  call,
  isModalOpen,
  handleSave,
  handleCancel,
  loading,
}: {
  call: App.Call;
  isModalOpen: boolean;
  handleSave: (props: { id: string; notes: string }) => void;
  handleCancel: () => void;
  loading: boolean;
}) => {
  const [notes, setNotes] = useState("");
  const handleNote = (e: any) => {
    setNotes(e.target.value);
  };
  return (
    <>
      <Modal
        title="Add Note"
        open={isModalOpen}
        onOk={() => handleSave({ id: call?.id || "", notes: notes })}
        okButtonProps={{
          title: "Save",
          type: "primary",
        }}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          <strong>Call ID: </strong>
          {call?.id}
        </span>

        <br />
        <br />
        <br />
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          <strong>Call Type </strong>
          {call?.call_type}
        </span>
        <br />
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          <strong>Duration </strong>
          {formatTime(call?.duration || 0)}
        </span>
        <br />
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          <strong>From </strong>
          {call?.from}
        </span>
        <br />
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          <strong>To </strong>
          {call?.to}
        </span>
        <br />
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          <strong>Via </strong>
          {call?.via}
        </span>
        <br />
        <br />
        <span>Notes</span>
        <TextArea
          onChange={handleNote}
          defaultValue={call.notes.pop()?.content || ""}
          placeholder="Add Notes"
        ></TextArea>
      </Modal>
    </>
  );
};
