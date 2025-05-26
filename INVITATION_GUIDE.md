# Wedding Invitation - Attendee Code Guide

This wedding invitation website uses a simple code-based system to fetch personalized invitations from a backend API.

## URL Format

The invitation URL uses a single parameter:

```
https://eci-sho-wedding.com?code=ATTENDEE_CODE
```

Where `ATTENDEE_CODE` is a unique identifier for each guest that corresponds to their record in the backend database.

## Examples

```
https://eci-sho-wedding.com?code=ABC123
https://eci-sho-wedding.com?code=XYZ789
```

## Backend API Integration

### API Endpoint

The system expects a REST API endpoint at:
```
GET /api/attendees/{code}
```

### Expected Response Format

```typescript
interface AttendeeResponse {
  success: boolean;
  data?: {
    id: string;
    name: string;
    qrCode: string;  // Base64 encoded QR code
  };
  error?: string;
}
```

Example successful response:
```json
{
  "success": true,
  "data": {
    "id": "ABC123",
    "name": "John Doe",
    "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }
}
```

Example error response:
```json
{
  "success": false,
  "error": "Invalid invitation code"
}
```

## Features

### Automatic Data Loading
- System automatically fetches attendee data when the page loads
- Shows loading state while data is being retrieved
- Handles errors gracefully with user-friendly messages

### QR Code Display
- QR code is fetched from the backend (no client-side generation)
- Displayed at the bottom of the invitation when available
- Supports both base64 encoded images and data URLs

### Fallback Behavior
- Shows "Guest" if name data is unavailable
- Gracefully handles missing QR codes
- Displays error messages for invalid codes

## Implementation Notes

### Environment Configuration

Set up your API base URL in your environment:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.your-domain.com
```

### Error States

The system handles several error cases:
- Missing invitation code
- Invalid invitation code
- Network errors
- API errors

### Security Considerations

- Use HTTPS for all API calls
- Validate invitation codes on the backend
- Consider rate limiting to prevent abuse
- Keep invitation codes private and secure

## For Wedding Planners

### Managing Invitations

1. Create attendee records in your backend system
2. Generate unique codes for each attendee
3. Store attendee details and QR codes in the database
4. Share the unique invitation URLs with guests

### Example Backend Schema

```sql
CREATE TABLE attendees (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  qr_code TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Distribution Methods

Share invitation URLs via:
- WhatsApp messages
- Email invitations
- SMS
- Physical cards with QR codes
- Social media direct messages

## Testing

You can test the system by:

1. Creating test attendee records in your backend
2. Accessing the invitation with different codes
3. Testing error cases with invalid codes
4. Verifying loading states and error messages

---

**Note**: Replace `https://eci-sho-wedding.com` with your actual wedding website domain when implementing this system. 