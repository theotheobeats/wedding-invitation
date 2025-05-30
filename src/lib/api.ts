import { AttendeeResponse } from './types';

/**
 * Fetch attendee data by code
 * @param code - Unique attendee code
 * @returns Promise resolving to attendee data
 */
export async function fetchAttendeeByCode(code: string): Promise<AttendeeResponse> {
  try {
    const response = await fetch(`https://j8wow48gsgwwg4soggskc0kc.theoprathama.com/api/attendees/${code}`);
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