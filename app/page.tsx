"use client";
import {
  Title,
  Text,
  Button,
  Container,
  Grid,
  Card,
  Image,
  Accordion,
  Collapse,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Container size="lg">
      <Box style={{ textAlign: "center", padding: "50px 0" }}>
        <Title order={1} size="50px">
          Turn 30 Years of Experience Into Your Next Big Thing
        </Title>
        <Text size="xl" mt="md">
          Google's Career Dreamer Tool + Your Personal AI Recruiter
        </Text>
      </Box>

      <Grid gutter="lg">
        <Grid.Col span={4}>
          <Card shadow="sm" padding="lg">
            <Text weight={500} size="lg">
              Stand Out from the Crowd
            </Text>
            <Text mt="xs" size="sm">
              Learn how 30+ years of experience translates to modern keywords.
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="lg">
            <Text weight={500} size="lg">
              Build an Impressive Resume (with AI)
            </Text>
            <Text mt="xs" size="sm">
              Create a resume that highlights your skills with AI assistance.
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="lg">
            <Text weight={500} size="lg">
              Discover Jobs You Haven't Thought Of
            </Text>
            <Text mt="xs" size="sm">
              Explore new career paths with the "Dream Career Graph" feature.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>

      <Box style={{ padding: "50px 0" }}>
        <Title order={2} align="center" mb="lg">
          Explore Paths
        </Title>
        <video width="100%" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Image
          src="https://placehold.co/800x400"
          alt="Career Graph"
          mt="lg"
        />
        <Text align="center" mt="sm">
          Blue dots represent database careers, and green dots are AI-generated ideas.
        </Text>
      </Box>

      <Box style={{ textAlign: "center", padding: "50px 0" }}>
        <Button onClick={toggle} size="lg">
          Show Me How to Use It!
        </Button>
      </Box>

      <Collapse in={opened}>
        <Grid gutter="lg">
          {Array.from({ length: 7 }).map((_, index) => (
            <Grid.Col span={4} key={index}>
              <Card shadow="sm" padding="sm">
                <Image
                  src={`https://placehold.co/300x200?text=Step+${index + 1}`}
                  alt={`Step ${index + 1}`}
                />
                <Text mt="sm" align="center">
                  Step {index + 1}: Description
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Collapse>

      <Box style={{ padding: "50px 0" }}>
        <Title order={2} align="center" mb="lg">
          Frequently Asked Questions
        </Title>
        <Accordion>
          <Accordion.Item value="faq1">
            <Accordion.Control>What is Career Dreamer?</Accordion.Control>
            <Accordion.Panel>
              Career Dreamer is a tool that helps you explore new career paths.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="faq2">
            <Accordion.Control>How does the AI recruiter work?</Accordion.Control>
            <Accordion.Panel>
              The AI recruiter provides personalized job recommendations and resume advice.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </Container>
  );
}