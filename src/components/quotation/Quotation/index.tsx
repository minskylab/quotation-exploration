import { Box, Container, SimpleGrid, Stack, Text, TextInput, Title } from "@mantine/core";
import { Mail, World } from "tabler-icons-react";
import { TableScrollArea } from "../Table";

type ResourceKind = "development" | "design" | "testing" | "maintenance" | "other";

type Resource = {
  name: string;
  kind: ResourceKind;
  description: string;
  cost: number;
  hours: number;
};

type Service = {
  name: string;
  description: string;
  resources: string;
};

function QuotationDocument() {
  return (
    <Container>
      <Box mt={4}>
        <Title order={1}>Technology Quotation</Title>
        <Text size={"sm"}>Emitted at Thu 4, Aug 2022</Text>
        <Text size={"sm"}>Valid until Mon 20, Aug 2022</Text>
      </Box>

      <Box mt={16}>
        <Text>
          This document is a part of Minsky internal procedure and negotation with XXXX XXX and it’s
          only valid during this process execution. After such process, Minsky works only with the
          negotation agreement.
        </Text>
      </Box>

      <Stack spacing={"md"} mt={"xl"}>
        <Box mt={16}>
          <Title order={2}>General Information</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis
            id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet
            felis sed.
          </Text>
        </Box>

        <Box>
          <Title order={3}>Client</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis
            id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet
            felis sed.
          </Text>
          <SimpleGrid cols={2} mt={16}>
            <TextInput value={"XXXXXXXXXXXXXXXXXXX XXX"} label="Social name" disabled />
            <TextInput value={"YYYYYYY"} label="RUC number" disabled />
            <TextInput
              value={"hello@example.com"}
              label="Contact"
              disabled
              icon={<Mail size={18} />}
            />
            <TextInput
              value={"https://example.com"}
              label="Reference"
              disabled
              icon={<World size={18} />}
            />
          </SimpleGrid>
        </Box>
        <Box>
          <Title order={3}>Provider</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis
            id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet
            felis sed.
          </Text>
          <SimpleGrid cols={2} mt={16}>
            <TextInput value={"MINSKY SAC"} label="Social name" disabled />
            <TextInput value={"20605790934"} label="RUC number" disabled />
            <TextInput
              value={"bregy@minsky.cc"}
              label="Contact"
              disabled
              icon={<Mail size={18} />}
            />
            <TextInput
              value={"https://minsky.cc"}
              label="Reference"
              disabled
              icon={<World size={18} />}
            />
          </SimpleGrid>
        </Box>
      </Stack>
      <Stack spacing={"md"} mt={"xl"}>
        <Box mt={16}>
          <Title order={2}>Resources</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis
            id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet
            felis sed.
          </Text>
        </Box>
        <TableScrollArea<Resource>
          keyName="name"
          data={[
            {
              name: "Example",
              kind: "development",
              cost: 10,
              hours: 10,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet felis sed.",
            },
            {
              name: "Example",
              kind: "development",
              cost: 10,
              hours: 10,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet felis sed.",
            },
            {
              name: "Example",
              kind: "development",
              cost: 10,
              hours: 10,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet felis sed.",
            },
          ]}
        />
      </Stack>
      <Stack spacing={"md"} mt={"xl"}>
        <Box mt={16}>
          <Title order={2}>Services</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis
            id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet
            felis sed.
          </Text>
        </Box>
        <TableScrollArea<Service>
          keyName="name"
          data={[
            {
              name: "Example",
              // TODO: Improve resources rendering
              resources: ["development"].toString(),
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet felis sed.",
            },
            {
              name: "Example",
              // TODO: Improve resources rendering
              resources: ["development"].toString(),
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet felis sed.",
            },
            {
              name: "Example",
              // TODO: Improve resources rendering
              resources: ["development"].toString(),
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sagittis, tristique mattis id dui dui fringilla convallis. Aliquet enim orci, vitae adipiscing velit donec amet felis sed.",
            },
          ]}
        />
      </Stack>
      <Stack spacing={"md"} mt={"xl"}></Stack>
    </Container>
  );
}

export default QuotationDocument;
