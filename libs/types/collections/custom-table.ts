export type Note = {
    id: string; // Unique ID of the note
    content: string; // Content of the note
  };
  
export type Call = {
    id: string; // Unique ID of the call
    direction: string; // Direction of the call (inbound or outbound)
    from: string; // Caller's number
    to: string; // Callee's number
    duration: number; // Duration of the call in seconds
    is_archived: boolean; // Boolean indicating if the call is archived or not
    call_type: string; // Type of the call (missed, answered, or voicemail)
    via: string; // Aircall number used for the call
    created_at: string; // Timestamp when the call was made
    notes: Note[]; // Array of notes related to the call
  };
  