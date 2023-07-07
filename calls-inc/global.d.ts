namespace App {
  interface Call {
    id: string; // Unique ID of the call
    direction: "inbound" | "outbound"; // "inbound" or "outbound" call
    from: string; // Caller's number
    to: string; // Callee's number
    duration: number; // Duration of a call (in seconds)
    is_archived: boolean; // Boolean that indicates if the call is archived or not
    call_type: "missed" | "answered" | "voicemail"; // The type of the call
    via: string; // Aircall number used for the call
    created_at: string; // When the call has been made
    notes: Note[]; // Notes related to a given call
  }

  interface Note {
    id: string; // Unique ID of the note
    content: string; // Content of the note
  }

  interface CallResponse {
    hasNextPage: boolean;
    nodes: Call[];
    totalCount: number;
  }

  interface AuthResponse {
    access_token: string;
    refresh_token: string;
    user: {
      id: string;
      username: string;
    };
  }
}
