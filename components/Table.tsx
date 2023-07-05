import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table"; // If using TypeScript (optional, but recommended)

//If using TypeScript, define the shape of your data (optional, but recommended)
interface Person {
  name: string;
  age: number;
}

//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const data: Person[] = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 25,
  },
];

export default function Table() {
  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
      },
      {
        accessorFn: (originalRow) => originalRow.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection //enable some features
      enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
    />
  );
}
