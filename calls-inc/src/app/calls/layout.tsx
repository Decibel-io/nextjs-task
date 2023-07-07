"use client";
import CallService from "@/lib/CallService";
import { Button, Layout, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { Header, Content } = Layout;

export default (props: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleLogout = () => {
    CallService.logout();
    router.push("/login");
  };

  useEffect(() => {
    if (!CallService.isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  if (!CallService.isAuthenticated()) {
    return (
      <div>
        <Spin />
      </div>
    );
  } else
    return (
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            Calls Inc
          </h1>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ padding: "0 50px" }}>{props.children}</Content>
      </Layout>
    );
};
