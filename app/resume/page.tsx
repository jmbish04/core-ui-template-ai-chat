"use client";
import {
  Grid,
  TextInput,
  ActionIcon,
  Paper,
  Text,
  Box,
  Badge,
  Textarea,
  Group,
} from "@mantine/core";
import { IconSend } from "@tabler/icons-react";

import { AppShell } from "@mantine/core";

export default function ResumePage() {
  return (
    <AppShell>
      <Grid>
        <Grid.Col span={6}>
          <Box p="md">
            <TextInput
            placeholder="Enter job posting URL"
            label="Job URL"
            description="Enter the URL of the job posting to get started."
          />
          <Box style={{ height: "calc(100vh - 250px)", overflowY: "auto", marginTop: "20px" }}>
            <Paper shadow="xs" p="xs" m="xs" style={{ textAlign: "left" }}>
              <Badge>AI Recruiter</Badge>
              <Text size="sm">
                Job posting analyzed. Fit score: 85%. I recommend highlighting your procurement skills.
              </Text>
            </Paper>
            <Paper
              shadow="xs"
              p="xs"
              m="xs"
              style={{ textAlign: "right", background: "#eef" }}
            >
              <Badge>You</Badge>
              <Text size="sm">Great, let's start with the summary.</Text>
            </Paper>
          </Box>
          <Group>
            <Textarea
              style={{ flex: 1 }}
              placeholder="Type your message..."
            />
            <ActionIcon size="lg">
              <IconSend size={18} />
            </ActionIcon>
          </Group>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box p="md" style={{ background: "#f9f9f9", height: "100vh" }}>
          <Paper withBorder shadow="md" p="lg" style={{ height: "100%" }}>
            <Text>Resume Preview</Text>
            {/* Placeholder for resume */}
          </Paper>
        </Box>
      </Grid.Col>
    </Grid>
    </AppShell>
  );
}