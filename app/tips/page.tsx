"use client";
import {
  AppShell,
  Container,
  Title,
  Text,
  Accordion,
  Box,
  Card,
} from "@mantine/core";

export default function InterviewTipsPage() {
  return (
    <AppShell>
    <Container size="lg" py="lg">
      <Box
        style={{
          background: "linear-gradient(to right, #ff8177, #ff867a, #ff8c7f, #f99185, #cf556c)",
          padding: "50px",
          borderRadius: "8px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Title order={1} size="40px">
          Interview Tips
        </Title>
        <Text size="lg" mt="md">
          Expert advice for before, during, and after your interview.
        </Text>
      </Box>

      <Accordion defaultValue="before" mt="xl">
        <Accordion.Item value="before">
          <Accordion.Control>Before the Interview</Accordion.Control>
          <Accordion.Panel>
            <Text>Practice common questions.</Text>
            <Text>Research the company.</Text>
            <Text>Prepare your own questions.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="during">
          <Accordion.Control>During the Interview</Accordion.Control>
          <Accordion.Panel>
            <Text>Be confident and authentic.</Text>
            <Text>Listen carefully to the questions.</Text>
            <Text>Use the STAR method for behavioral questions.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="after">
          <Accordion.Control>After the Interview</Accordion.Control>
          <Accordion.Panel>
            <Text>Send a thank-you note.</Text>
            <Text>Follow up if you haven't heard back.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Box mt="xl">
        <Title order={2} align="center" mb="lg">
          Question Types
        </Title>
        <Card shadow="sm" padding="lg">
          <Text weight={500}>Behavioral Questions</Text>
          <Text size="sm" mt="sm">
            Use the STAR method (Situation, Task, Action, Result) to structure your answers.
          </Text>
        </Card>
      </Box>
    </Container>
    </AppShell>
  );
}