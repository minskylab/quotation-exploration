import { useState } from "react";
import { createStyles, Table, ScrollArea } from "@mantine/core";

const useStyles = createStyles(theme => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

type ColumnType = { [key: string]: string | number };

interface TableScrollAreaProps<T extends ColumnType> {
  data: T[];
  keyName: keyof T;
  keyMap?: { [key: string]: string };
  // cellRenderer: (key: keyof T) => React.ReactNode;
}

export function TableScrollArea<T extends ColumnType>({
  data,
  keyName,
  keyMap = {},
}: TableScrollAreaProps<T>) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map(row => (
    <tr key={row[keyName]}>
      {Object.keys(row).map(key => (
        <td key={key}>{row[key]}</td>
      ))}
    </tr>
  ));

  return (
    <ScrollArea onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      {/* sx={{ height: 300 }} */}
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            {Object.keys(data[0]).map(key => (
              // <td key={key}>{rows[0][key]}</td>

              <th key={key}>{key in keyMap ? keyMap[key] : key.toLocaleUpperCase()}</th>
            ))}
            {/* <th>Name</th>
            <th>Email</th>
            <th>Company</th> */}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
