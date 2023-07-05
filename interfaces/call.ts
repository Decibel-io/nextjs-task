import { Note } from "./note"
export interface Call {
    id: String // "unique ID of call"
    direction: String // "inbound" or "outbound" call
    from: String // Caller's number
    to: String // Callee's number
    duration: number // Duration of a call (in seconds)
    is_archived: Boolean| String // Boolean that indicates if the call is archived or not
    call_type: String // The type of the call, it can be a missed, answered or voicemail.
    via: String // Aircall number used for the call.
    created_at: any // When the call has been made.
    notes: Note[] // Notes related to a given call
  }