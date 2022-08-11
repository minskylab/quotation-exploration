import { Paper, Text, Grid, Box } from "@mantine/core";

type TaskKind =
  | "design"
  | "development"
  | "testing"
  | "maintenance"
  | "research"
  | "meets"
  | "other";

type Task = {
  task: string;
  kind: TaskKind;
  start: Date;
  duration: number;
};

type PositionedTask = {
  task: Task;
  row: number;

  start: number;
  end: number;
};

type TimeAxisKind = "days" | "weeks" | "months" | "quarters" | "years";

const tasksToPositionedTasks = (
  tasks: Task[],
  subDivisions: number = 24,
  scale: TimeAxisKind = "days"
): PositionedTask[] => {
  const lowerBound = new Date(2020, 0, 1);
  const upperBound = new Date(2022, 0, 1);

  const lowerStartTask = tasks.reduce((previousLower, current) => {
    if (current.start < previousLower.start) {
      return current;
    }

    return previousLower;
  }, tasks[0]);

  const upperStartTask = tasks.reduce((previousUpper, current) => {
    if (current.start > previousUpper.start) {
      return current;
    }

    return previousUpper;
  }, tasks[0]);

  console.log(`lowerStartTask: ${lowerStartTask?.start}`);
  console.log(`upperStartTask: ${upperStartTask?.start}`);

  const sortedTasks = tasks.sort((a, b) => a.start.getTime() - b.start.getTime());

  console.log(`sortedTasks: ${sortedTasks.map(task => task.start)}`);

  return sortedTasks.map((task, i) => {
    const posTask: PositionedTask = {
      task,
      row: i,
      start: 0,
      end: 3,
    };
    return posTask;
  });

  // return [];
};

type TimelineChartProps = {
  timeAxis: TimeAxisKind;
  tasks?: Task[];
  subDivisions?: number;
};

function TimelineChart({ tasks, subDivisions = 24 }: TimelineChartProps) {
  const positionedTasks = tasksToPositionedTasks(tasks ?? []);

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
          gridTemplateColumns: `repeat(${subDivisions}, 1fr)`,
          gridTemplateRows: `repeat(${tasks?.length ?? 1}, 1fr)`,
        }}
      >
        {positionedTasks.map(({ task, row, start, end }) => (
          <Paper
            key={task.task}
            shadow={"md"}
            p="sm"
            sx={{
              gridColumn: "span 4",
            }}
          >
            <Text>{task.task}</Text>
          </Paper>
        ))}
      </Box>
      {/* </Paper> */}
    </div>
  );
}

export default TimelineChart;
