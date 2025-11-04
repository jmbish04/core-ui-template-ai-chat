"use client";
import {
  AppShell,
  Container,
  Title,
  Text,
  Button,
  Grid,
  Card,
  Accordion,
  Box,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCircleCheck, IconQuestionMark } from "@tabler/icons-react";

export default function InterviewPrepPage() {
  return (
    <AppShell>
    <Container size="lg" py="lg">
      <Box
        style={{
          background: "linear-gradient(to right, #ffdde1, #ee9ca7)",
          padding: "50px",
          borderRadius: "8px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Title order={1} size="40px">
          Google Interview Warmup
        </Title>
        <Text size="lg" mt="md">
          Practice for your interviews and get feedback on your answers.
        </Text>
        <Button mt="lg" size="lg">
          Start Practicing Now
        </Button>
      </Box>

      <Grid mt="xl">
        <Grid.Col span={6}>
          <video width="100%" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Text align="center" mt="sm">Real-time practice demo</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <video width="100%" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Text align="center" mt="sm">AI insights & feedback demo</Text>
        </Grid.Col>
      </Grid>

      <Box mt="xl">
        <Title order={2} align="center" mb="lg">
          What It Does
        </Title>
        <Grid>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>Practice Speaking</Text>
              <Text size="sm" mt="sm">Practice answering questions out loud.</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>Get Hints</Text>
              <Text size="sm" mt="sm">Get hints if you're stuck.</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>AI Insights</Text>
              <Text size="sm" mt="sm">Get feedback on your answers.</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>

      <Box mt="xl">
        <Title order={2} align="center" mb="lg">
          Frequently Asked Questions
        </Title>
        <Accordion>
          <Accordion.Item value="faq1">
            <Accordion.Control>
              Is this tool free?
            </Accordion.Control>
            <Accordion.Panel>
              Yes, the Google Interview Warmup tool is free to use.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="faq2">
            <Accordion.Control>
              What kind of questions will I be asked?
            </Accordion.Control>
            <Accordion.Panel>
              The tool covers background, situational, and technical questions.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </Container>
    </AppShell>
  );
}