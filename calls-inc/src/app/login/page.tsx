"use client";
import React from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";
import CallService from "../../lib/CallService";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const response = await CallService.login(values);
    console.log(response);
    CallService.setTokens(response);
    console.log('p');
    router.push("/calls");
    console.log('l');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card
      style={{
        marginTop: "6rem",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
