import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ActionIcon,
  Select,
  useMantineColorScheme,
  Stack,
  Group,
  Box,
} from "@mantine/core";
import { ChevronDown, MoonStars, Sun, World } from "tabler-icons-react";
import { useRouter } from "next/router";
import { TableOfContentsFloating } from "components/ui/TableOfContent";
import MinskyPartnersLogotype from "components/ui/Logotype";
import QuotationDocument from "components/quotation/Quotation";

const navbarData = {
  active: "#overlays",
  links: [
    {
      label: "General Information",
      link: "#general_information",
      order: 1,
    },
    {
      label: "Client",
      link: "#client",
      order: 2,
    },
    {
      label: "Provider",
      link: "#provider",
      order: 2,
    },
    {
      label: "Resources",
      link: "#resources",
      order: 1,
    },
    {
      label: "Services",
      link: "#services",
      order: 1,
    },
    {
      label: "Time Strategy",
      link: "#focus",
      order: 1,
    },
    {
      label: "Main Tasks",
      link: "#main_tasks",
      order: 2,
    },
    {
      label: "Timeline Chart",
      link: "#timeline_chart",
      order: 2,
    },
    {
      label: "Task Distribution",
      link: "#task_distribution",
      order: 2,
    },
    {
      label: "Payment",
      link: "#payment",
      order: 1,
    },
    {
      label: "Services Costs",
      link: "#services_costs",
      order: 2,
    },
    {
      label: "Payment Structure",
      link: "#payment_structure",
      order: 2,
    },
    {
      label: "Scope",
      link: "#scope",
      order: 1,
    },
    {
      label: "Overview",
      link: "#overview",
      order: 2,
    },
    {
      label: "Terms and conditions",
      link: "#scope",
      order: 1,
    },
  ],
};

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const handleChangeLanguage = (lng: string) => {
    router.locale = lng === "en" ? "en" : "es";
    router.locale === "en" ? router.push("/", "/", { locale: "en" }) : router.push("/es");
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, md: 250, lg: 300 }}
          pl={32}
        >
          {/* <Text>Application navbar</Text> */}
          <TableOfContentsFloating {...navbarData} />
        </Navbar>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={
        <Footer height={60} p="md">
          Minsky Partners Program 2022
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(o => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <MinskyPartnersLogotype scale={0.6} />
            <Group position="right" spacing="sm" sx={{ width: "100%" }}>
              <ActionIcon onClick={() => toggleColorScheme()} size="lg" variant="default">
                {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
              </ActionIcon>
              <Select
                defaultValue={router.locale}
                onChange={(lng: string) => {
                  handleChangeLanguage(lng);
                }}
                data={[
                  { value: "en", label: "English" },
                  { value: "es", label: "Español" },
                ]}
                icon={<World size={18} />}
                rightSection={<ChevronDown size={18} />}
                styles={{ rightSection: { pointerEvents: "none" } }}
                style={{ width: 130 }}
              />
            </Group>
          </div>
        </Header>
      }
    >
      <QuotationDocument />
    </AppShell>
  );
}
