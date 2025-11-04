"use client";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  TextInput,
  ActionIcon,
  Paper,
  Text,
  Box,
  Badge,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMicrophone, IconSend } from "@tabler/icons-react";

export default function ChatPage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Navbar p="md">
        <NavLink href="#" label="New Thread" />
        <NavLink href="#" label="Thread 1" active />
        <NavLink href="#" label="Thread 2" />
      </AppShell.Navbar>

      <AppShell.Main>
        <Box style={{ height: "calc(100vh - 180px)", overflowY: "auto" }}>
          <Paper shadow="xs" p="md" m="sm" style={{ textAlign: "left" }}>
            <Badge>AI Recruiter</Badge>
            <Text>Welcome! How can I help you with your job search today?</Text>
          </Paper>
          <Paper
            shadow="xs"
            p="md"
            m="sm"
            style={{ textAlign: "right", background: "#eef" }}
          >
            <Badge>You</Badge>
            <Text>I need help with my resume.</Text>
          </Paper>
        </Box>
        <Group>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Type your message..."
            rightSection={
              <ActionIcon>
                <IconMicrophone size={18} />
              </ActionIcon>
            }
          />
          <ActionIcon size="lg">
            <IconSend size={18} />
          </ActionIcon>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}