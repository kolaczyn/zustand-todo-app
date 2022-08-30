import { ReactNode } from "react";
import { Anchor, AppShell, Grid, Header, Navbar, NavLink } from "@mantine/core";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

export const CustomAppShell = ({ children }: Props) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Grid justify="space-between" align="center">
            <Grid.Col span={1}>
              <Link href="/">
                <Anchor>
                  <span>todo.app</span>
                </Anchor>
              </Link>
            </Grid.Col>
            <Grid.Col span={3}>
              <Anchor href="/example">
                <a>example</a>
              </Anchor>
            </Grid.Col>
          </Grid>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
