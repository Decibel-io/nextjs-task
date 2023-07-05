import React, { useEffect, useState } from "react";

interface Call {
  id: string;
  direction: string;
  // Add other properties of the Call type here
}

const CallsList: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://frontend-test-api.aircall.io/calls?offset=0&limit=10",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXZ4cGVydCIsInVzZXJuYW1lIjoiZGV2eHBlcnQiLCJpYXQiOjE2ODg1NTI3MzcsImV4cCI6MTY4ODU1MzMzN30.3mqfNJB-Ow0c8Z01Y3nt12T9rtEPTO6K4pAEHh97vTc",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch calls");
        }

        const data = await response.json();
        setCalls(data.nodes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(calls);

  return (
    <div>
      <h1>Calls</h1>
      <ul>
        {calls.map((call) => (
          <li key={call.id}>{call.direction}</li>
        ))}
      </ul>
    </div>
  );
};

export default CallsList;
