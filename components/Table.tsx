import React, { useEffect, useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table"; // If using TypeScript (optional, but recommended)
import { Call } from "../interfaces/call";
// import { accessToken } from "../interfaces/newToken";
import { Typography, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import CallDetailsModal from "./CallDetails";

function convertSecondsToMinutes(seconds: any) {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingSeconds = seconds % 60;
  return `${hours} h ${
    minutes % hours
  } m ${remainingSeconds} s \n(${seconds} s)`;
}

export default function Table() {
  const [accessToken, setAccessToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXZ4cGVydCIsInVzZXJuYW1lIjoiZGV2eHBlcnQiLCJpYXQiOjE2ODg1NzI5MDIsImV4cCI6MTY4ODU3MzUwMn0.NRS1JwOn7pKOJVSqbOwH8ExT8kS90DurHtLXTcvvbH8"
  );
  const [openCallDetails, setOpenCallDetails] = useState(false);
  const [row, setRow] = useState<Call | null>(null);
  const [status, setStatus] = React.useState("");
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [calls, setCalls] = useState<Call[]>([]);
  const [filteredCalls, setFilterdCalls] = useState<Call[]>([]);

  const login = async () => {
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
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await login();
        const response = await fetch(
          `https://frontend-test-api.aircall.io/calls?0=0&limit=25`,
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
          obj.duration = convertSecondsToMinutes(obj.duration);
          let utcDate: Date = new Date(obj.created_at);
          let localDateString: String = utcDate.toLocaleDateString();

          obj.created_at = localDateString;
          return obj;
        });
        setCalls(temp);
        setFilterdCalls(temp);
        setIsLoadingData(false);
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
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  useEffect(() => {
    const filteredArray = calls.filter((obj) => {
      if (status !== "all") {
        return obj.is_archived === status;
      }
      return obj;
    });
    setFilterdCalls(filteredArray);
  }, [status]);
  const handleRowClick = (row: Call) => {
    setRow(row);
    setOpenCallDetails(true);
  };

  const handleClose = () => {
    setOpenCallDetails(false);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Table of all calls
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Box sx={{ pt: 2 }}> Filter By: </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Archived">Archived</MenuItem>
              <MenuItem value="Unarchived">Unarchived</MenuItem>
            </Select>
          </FormControl>
        </Box>{" "}
      </Box>
      {filteredCalls && (
        <MaterialReactTable
          columns={columns}
          data={filteredCalls}
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => handleRowClick(row.original),
            sx: { cursor: "pointer" },
          })}
          enableColumnActions={false}
          state={{
            isLoading: isLoadingData,
          }}
          enableTopToolbar={false}
        />
      )}
      <CallDetailsModal
        open={openCallDetails}
        onClose={handleClose}
        row={row}
        token={accessToken}
      />
    </>
  );
}
