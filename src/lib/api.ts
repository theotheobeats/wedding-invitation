import { AttendeeResponse } from './types';


// Type for the comment data
export interface Comment {
  id: string;
  content: string;
  author: string;
  isPresent: 'PRESENT' | 'NOT_PRESENT' | 'MAYBE';
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

// Type for the comment submission form
export interface CommentSubmission {
  content: string;
  author: string;
  isPresent: 'PRESENT' | 'NOT_PRESENT' | 'MAYBE';
  authorId: string;
}

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


// Function to fetch all comments
export async function fetchComments(): Promise<Comment[]> {
  try {
    const response = await fetch(`https://j8wow48gsgwwg4soggskc0kc.theoprathama.com/api/comments`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
}

// Function to submit a new comment
export async function submitComment(comment: CommentSubmission): Promise<Comment> {
  try {
    const response = await fetch(`https://j8wow48gsgwwg4soggskc0kc.theoprathama.com/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit comment');
    }

    return response.json();
  } catch (error) {
    console.error('Error submitting comment:', error);
    throw error;
  }
} 