export interface Attendee {
  id: string;
  name: string;
  qrCodeBase64: string;
}

export interface AttendeeResponse {
  success: boolean;
  data?: Attendee;
  error?: string;
} 