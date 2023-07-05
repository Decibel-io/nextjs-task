import React, { useEffect, useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table"; // If using TypeScript (optional, but recommended)
import { Call } from "../interfaces/call";
// import { accessToken } from "../interfaces/newToken";
import { Typography } from "@mui/material";

export default function Table() {
  const [accessToken, setAccessToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXZ4cGVydCIsInVzZXJuYW1lIjoiZGV2eHBlcnQiLCJpYXQiOjE2ODg1NzI5MDIsImV4cCI6MTY4ODU3MzUwMn0.NRS1JwOn7pKOJVSqbOwH8ExT8kS90DurHtLXTcvvbH8"
  );

  const [calls, setCalls] = useState<Call[]>([]);
  useEffect(() => {
    setInterval(async () => {
      try {
        const response = await fetch(
          "https://frontend-test-api.aircall.io/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: "abc", password: "abc" }),
          }
        );

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        const token: string = data.access_token;
        setAccessToken(token);
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    }, 9 * 60 * 1000);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://frontend-test-api.aircall.io/calls?offset=0&limit=25",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch calls");
        }

        const data = await response.json();
        let temp = data.nodes.map((obj: any) => {
          if (obj.is_archived) {
            obj = {
              ...obj,
              is_archived: "Archived",
            };
          } else {
            obj = {
              ...obj,
              is_archived: "Unarchived",
            };
          }
          let utcDate: Date = new Date(obj.created_at);
          let localDateString: String = utcDate.toLocaleDateString();

          obj.created_at = localDateString;
          return obj;
        });
        setCalls(temp);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [accessToken]);
  const columns = useMemo<MRT_ColumnDef<Call>[]>(
    () => [
      {
        accessorKey: "call_type",
        header: "CALL TYPE",
        size: 40,
      },
      {
        accessorKey: "direction",
        header: "DIRECTION",
        size: 40,
      },
      {
        accessorKey: "duration",
        header: "DURATION",
        size: 40,
      },
      {
        accessorKey: "from",
        header: "FROM",
        size: 40,
      },
      {
        accessorKey: "to",
        header: "TO",
        size: 40,
      },
      {
        accessorKey: "via",
        header: "VIA",
        size: 40,
      },
      {
        accessorKey: "created_at",
        header: "CREATED AT",
        size: 40,
      },
      {
        accessorKey: "is_archived",
        header: "STATUS",
        size: 40,
      },
    ],
    []
  );
  console.log("fghjkl", calls);

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Table of all calls
      </Typography>
      {calls && (
        <MaterialReactTable
          columns={columns}
          data={calls}
          enableRowSelection={false} //enable some features
          enableColumnOrdering={false}
          enableGlobalFilter={false} //turn off a feature
          enableColumnActions={false}
          enableColumnFilters={false}
          // enablePagination={false}
          enableSorting={false}
          // enableBottomToolbar={false}
          enableTopToolbar={false}
          muiTableBodyRowProps={{ hover: false }}
        />
      )}
    </>
  );
}
