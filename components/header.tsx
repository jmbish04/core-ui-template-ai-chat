"use client";
import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <NavLink
            component={Link}
            href="/"
            label="Career Search Assistant"
            style={{ fontWeight: "bold" }}
          />
          <Group ml="xl" gap={8} visibleFrom="sm">
            <NavLink
              component={Link}
              href="/"
              label="Home"
              active={pathname === "/"}
            />
            <NavLink
              component={Link}
              href="/chat"
              label="Chat"
              active={pathname === "/chat"}
            />
            <NavLink
              component={Link}
              href="/jobs"
              label="Jobs"
              active={pathname === "/jobs"}
            />
            <NavLink
              component={Link}
              href="/tools"
              label="Tools"
              active={pathname === "/tools"}
            />
            <NavLink
              component={Link}
              href="/tips"
              label="Tips"
              active={pathname === "/tips"}
            />
            <NavLink
              component={Link}
              href="/resume"
              label="Resume"
              active={pathname === "/resume"}
            />
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}