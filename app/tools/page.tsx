"use client";
import {
  AppShell,
  Container,
  Title,
  Card,
  Text,
  Badge,
  Button,
  Grid,
  Group,
  Box,
} from "@mantine/core";

export default function ToolsPage() {
  return (
    <AppShell>
    <Container size="lg" py="lg">
      <Box mb="lg">
        <Title order={2} style={{ color: "#1a73e8" }}>
          Search for a Job
        </Title>
        <Grid mt="md">
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Group position="apart">
                <Text weight={500}>Career Dreamer</Text>
                <Badge color="blue">Aspirational</Badge>
              </Group>
              <Text size="sm" mt="sm">
                Explore new career paths based on your experience.
              </Text>
              <Button mt="md">Explore</Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Group position="apart">
                <Text weight={500}>Job Feed</Text>
                <Badge color="gray">Coming Soon</Badge>
              </Group>
              <Text size="sm" mt="sm">
                A personalized feed of job openings.
              </Text>
              <Button mt="md" disabled>
                View
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>

      <Box mb="lg">
        <Title order={2} style={{ color: "green" }}>
          Apply for a Job
        </Title>
        <Grid mt="md">
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>AI Resume & Cover Letter</Text>
              <Text size="sm" mt="sm">
                Generate a resume and cover letter with AI.
              </Text>
              <Button mt="md">Create</Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>AI Proofreading</Text>
              <Text size="sm" mt="sm">
                Get your application materials proofread by AI.
              </Text>
              <Button mt="md">Proofread</Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>

      <Box>
        <Title order={2} style={{ color: "orange" }}>
          Prepare for an Interview
        </Title>
        <Grid mt="md">
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>Interview Tips</Text>
              <Text size="sm" mt="sm">
                Get tips and advice for your upcoming interview.
              </Text>
              <Button mt="md">Learn</Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>Google Interview Warmup</Text>
              <Text size="sm" mt="sm">
                Practice your interview skills with Google's tool.
              </Text>
              <Button mt="md">Practice</Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
    </AppShell>
  );
}