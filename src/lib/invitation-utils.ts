/**
 * Utility functions for generating custom wedding invitation URLs
 */
import QRCode from 'qrcode';

export interface InvitationParams {
  guestName: string;
  baseUrl?: string;
  includeQR?: boolean;
  qrBase64?: string;
}

/**
 * Generate QR code as base64 string
 * @param url - URL to encode in QR code
 * @returns Promise resolving to base64 string
 */
export async function generateQRCode(url: string): Promise<string> {
  try {
    const qrOptions: QRCode.QRCodeToDataURLOptions = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    };
    
    return await QRCode.toDataURL(url, qrOptions);
  } catch (err) {
    console.error('Error generating QR code:', err);
    throw err;
  }
}

/**
 * Generate a custom invitation URL with guest name and optional QR code
 * @param params - Object containing guest name, optional base URL, and QR options
 * @returns Custom invitation URL
 */
export function generateInvitationUrl({ guestName, baseUrl, includeQR = false, qrBase64 }: InvitationParams): string {
  const baseHost = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  const encodedName = encodeURIComponent(guestName);
  let inviteUrl = `${baseHost}?to=${encodedName}`;
  
  if (qrBase64) {
    inviteUrl += `&qr64=${encodeURIComponent(qrBase64)}`;
  } else if (includeQR) {
    inviteUrl += `&qr=true`;
  }
  
  return inviteUrl;
}

/**
 * Generate multiple invitation URLs for a list of guests
 * @param guestNames - Array of guest names
 * @param baseUrl - Optional base URL
 * @returns Array of objects with guest name and their custom URL
 */
export function generateBulkInvitationUrls(
  guestNames: string[], 
  baseUrl?: string
): Array<{ name: string; url: string }> {
  return guestNames.map(name => ({
    name,
    url: generateInvitationUrl({ guestName: name, baseUrl })
  }));
}

/**
 * Extract guest name, QR preference, and base64 QR code from current URL
 * @returns Object containing guest name, QR flag, and base64 QR code
 */
export function getInvitationParams(): { 
  guestName: string | null; 
  showQR: boolean; 
  qrBase64: string | null;
} {
  if (typeof window === 'undefined') return { guestName: null, showQR: false, qrBase64: null };
  
  const params = new URLSearchParams(window.location.search);
  const nameFromUrl = params.get('to') || params.get('name') || params.get('guest');
  const showQR = params.get('qr') === 'true';
  const qrBase64 = params.get('qr64');
  
  return {
    guestName: nameFromUrl ? decodeURIComponent(nameFromUrl) : null,
    showQR: showQR || !!qrBase64, // Show QR if either qr=true or qr64 is provided
    qrBase64: qrBase64 ? decodeURIComponent(qrBase64) : null
  };
}

/**
 * Format guest name for display (capitalize first letters)
 * @param name - Raw guest name
 * @returns Formatted guest name
 */
export function formatGuestName(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Example guest list for testing
 */
export const sampleGuestList = [
  'John Doe',
  'Jane Smith',
  'Mr. & Mrs. Johnson',
  'The Anderson Family',
  'Dr. Michael Brown',
  'Sarah Wilson',
  'David & Lisa Chen',
  'The Rodriguez Family'
];

/**
 * Generate sample invitation URLs for testing
 */
export function generateSampleInvitations(baseUrl?: string) {
  return generateBulkInvitationUrls(sampleGuestList, baseUrl);
} 