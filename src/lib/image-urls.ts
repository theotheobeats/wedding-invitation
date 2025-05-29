// Image URL mappings from UploadThing
// This file maps local image paths to their UploadThing URLs

export const imageUrls = {
  // From selected-rows(5).json
  '/IMG_0491.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbThibf49mxsjAhVcWMKYR2npEbzBU7fv89qG4',
  '/IMG_0427.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb6SORMH1lLCHBIuoynfra1WU4bOcJNki3SeKY',
  '/IMG_9263.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb2FNo0ZC3pjtkRMyqlSWPYgVhLiKNsI0Je9Dx',
  '/IMG_0448.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb9PoITsHeOalHmg4Rnyt6Whs1UXrLdiEPMK3D',
  '/IMG_0195.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXqf6wvgDL7tpu5Zbrw18K2ojNhVncqIzeF6S',
  '/IMG_9823.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbTIXKZxR9mxsjAhVcWMKYR2npEbzBU7fv89qG',
  '/IMG_9223.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbGshH14OCfFdA9jbwVolHW4nXs8pSuROYk06e',
  '/IMG_9226.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbIQBtJjXaKL9NjAoB0Z6CYvwbuVFQWUXzxqIe',

  // From selected-rows(3).json
  '/IMG_0338.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbhXWHyLQzkVC1iSYKf8Z5RXnErvwO2aAx6mMU',
  '/Gress-518.jpg': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt',
  '/IMG_9798.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbrPcgnueJMC1D4ZGeypxH9Et8vfPNuwAVXncB',
  '/IMG_9516.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbLVL5SS3Aw08W2p3ymD7SOME1tFndlXzCor4L',
  '/IMG_0432.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXerHo9ugDL7tpu5Zbrw18K2ojNhVncqIzeF6',
  '/IMG_8700.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbfjDn622cDTkzlAW62qsMLYewuH5NCUx7mFXE',
  '/IMG_9790.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbTjPdo39mxsjAhVcWMKYR2npEbzBU7fv89qG4',
  '/IMG_0307.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb1R0sC67wJ6qlUnQodXTDOF3CVNWcZxgpuGHY',
  '/IMG_0234.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbPqTfVnaKYEQifNSdbP93UCpFHJz8qLxrV6kw',

  // Additional images that might be needed (creating placeholders for common patterns)
  '/IMG_0211.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt', // Fallback to Gress-518
  '/IMG_0237.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbhXWHyLQzkVC1iSYKf8Z5RXnErvwO2aAx6mMU', // Fallback to IMG_0338
  '/IMG_0321.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbrPcgnueJMC1D4ZGeypxH9Et8vfPNuwAVXncB', // Fallback to IMG_9798
  '/IMG_0380.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbLVL5SS3Aw08W2p3ymD7SOME1tFndlXzCor4L', // Fallback to IMG_9516
  '/IMG_0454.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb9PoITsHeOalHmg4Rnyt6Whs1UXrLdiEPMK3D', // Fallback to IMG_0448
  '/IMG_0288.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXqf6wvgDL7tpu5Zbrw18K2ojNhVncqIzeF6S', // Fallback to IMG_0195
  '/IMG_0419.JPG': 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXerHo9ugDL7tpu5Zbrw18K2ojNhVncqIzeF6', // Fallback to IMG_0432
};

// Helper function to get UploadThing URL for a local path
export function getImageUrl(localPath: string): string {
  return imageUrls[localPath as keyof typeof imageUrls] || localPath;
}

// Helper function to get all available image URLs
export function getAllImageUrls(): string[] {
  return Object.values(imageUrls);
}

// Helper function to check if an image exists in our mapping
export function hasImageUrl(localPath: string): boolean {
  return localPath in imageUrls;
} 