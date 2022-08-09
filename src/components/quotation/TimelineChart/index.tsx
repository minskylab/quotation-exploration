import { Paper, Text, Grid, Box } from "@mantine/core";

type TaskKind = "development" | "design" | "testing" | "maintenance" | "other";

type Task = {
  task: string;
  kind: TaskKind;
  start: Date;
  duration: number;
};

type TimelineChartProps = {
  timeAxis: "days" | "weeks" | "months" | "quarters" | "years";
  tasks: Task[];
};

function TimelineChart() {
  return (
    <div>
      {/* <Paper shadow="sm" p="md"> */}
      {/* <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background with
        shadow
      </Text>
      <Grid columns={32}>
        <Grid.Col span={2}>
          <Paper shadow={"md"} p="sm">
            <Text >Foo</Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper shadow={"md"} p="sm">
            <Text>Bar</Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={2}>
          <Paper shadow={"md"} p="sm">
            <Text>Faz</Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Paper shadow={"md"} p="sm">
            <Text>Qua</Text>
          </Paper>
        </Grid.Col>
      </Grid> */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gridTemplateRows: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        <Paper shadow={"md"} p="sm">
          <Text>Faz</Text>
        </Paper>
        <Paper shadow={"md"} p="sm">
          <Text>Faz</Text>
        </Paper>
        <Paper shadow={"md"} p="sm">
          <Text>Faz</Text>
        </Paper>
        <Paper shadow={"md"} p="sm">
          <Text>Faz</Text>
        </Paper>
      </Box>
      {/* </Paper> */}
    </div>
  );
}

export default TimelineChart;
