import { AttendeeResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

/**
 * Fetch attendee data by code
 * @param code - Unique attendee code
 * @returns Promise resolving to attendee data
 */
export async function fetchAttendeeByCode(code: string): Promise<AttendeeResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/attendees/${code}`);
    const data = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'Failed to fetch attendee data'
      };
    }

    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Error fetching attendee:', error);
    return {
      success: false,
      error: 'Failed to fetch attendee data'
    };
  }
} 