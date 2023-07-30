"use client";
import { useRouter, usePathname } from "next/navigation";
import { FC, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Header as MHeader,
  Title,
  Tabs,
} from "@mantine/core";

export const Header: FC = () => {
  const router = useRouter();
  const path = usePathname();
  const [currentPage, setCurrentPage] = useState<string>("");
  const tabValue = [
    { value: "", path: "" },
    { value: "スケジュール", path: "schedule" },
    { value: "順位表", path: "rank" },
    { value: "お気に入り", path: "favorite" },
  ];
  const handleTabChange = (value: string) => {
    setCurrentPage(value);
    router.push(`/${value}`);
  };

  return (
    <MHeader sx={() => ({ position: "fixed" })} height={80}>
      <Flex align="center" justify="space-between" style={{ height: "100%" }}>
        <Title
          style={{ cursor: "pointer" }}
          ml={40}
          onClick={() => {
            router.push("/");
            setCurrentPage("");
          }}
        >
          GoalTime!
        </Title>
        <Box mr="lg">
          {path !== "/signup" && (
            <Button
              size="md"
              m="md"
              onClick={() => {
                router.push("/signup");
                setCurrentPage("");
              }}
              variant="outline"
            >
              新規登録
            </Button>
          )}
          {path !== "/signin" && (
            <Button
              size="md"
              m="md"
              variant="outline"
              onClick={() => {
                router.push("/signin");
                setCurrentPage("");
              }}
            >
              ログイン
            </Button>
          )}
        </Box>
      </Flex>
      <Tabs value={currentPage} onTabChange={handleTabChange}>
        <Tabs.List bg="white" h={60}>
          {tabValue
            .filter((_, i) => i !== 0)
            .map((tab, i) => {
              return (
                <Tabs.Tab ml={i === 0 ? 40 : 0} key={tab.path} value={tab.path}>
                  {tab.value}
                </Tabs.Tab>
              );
            })}
        </Tabs.List>
      </Tabs>
    </MHeader>
  );
};
Header.displayName = "Header";
