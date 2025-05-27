# Wedding Photos Integration Guide

## Overview
All mockup images have been successfully replaced with real wedding photos from Eci & Sho's wedding. This document outlines the changes made and optimization strategies implemented.

## Photos Used

### Couple Individual Photos
- **Eci (Bride)**: `/IMG_0419.JPG` - Used in CoupleIntro section
- **Sho (Groom)**: `/IMG_0417.JPG` - Used in CoupleIntro section

### Background Images
- **Hero Section**: `/IMG_0288.JPG` - Main landing background
- **Save The Date Background**: `/IMG_0448.JPG` - Background pattern
- **Thank You Section**: `/IMG_0491.JPG` - Background image

### Love Story Timeline
- **Meeting (2022)**: `/IMG_9263.JPG` - First meeting in Osaka
- **Commitment (2023)**: `/IMG_9516.JPG` - Relationship milestone
- **Engagement (2024)**: `/IMG_9790.JPG` - Engagement moment
- **Wedding (2025)**: `/IMG_0432.JPG` - Wedding celebration

### Save The Date Feature Image
- **Main Photo**: `/IMG_0454.JPG` - Featured save the date image

### Gallery Collection (15 Photos)
1. `/IMG_0195.JPG` - Wedding ceremony
2. `/IMG_0211.JPG` - Couple portrait
3. `/IMG_0234.JPG` - Reception moment
4. `/IMG_0237.JPG` - Celebration
5. `/IMG_0307.JPG` - Wedding party
6. `/IMG_0321.JPG` - Romantic moment
7. `/IMG_0338.JPG` - Group photo
8. `/IMG_0380.JPG` - Wedding details
9. `/IMG_0427.JPG` - Ceremony moment
10. `/IMG_8700.JPG` - Reception celebration
11. `/IMG_9223.JPG` - Candid moment
12. `/IMG_9226.JPG` - Wedding party
13. `/IMG_9798.JPG` - Couple portrait
14. `/IMG_9823.JPG` - Wedding ceremony
15. `/Gress-518.jpg` - Professional portrait

## Optimizations Implemented

### 1. Custom OptimizedImage Component
Created `/src/components/ui/ImageOptimized.tsx` with features:
- Progressive loading with loading states
- Error handling for missing images
- Automatic quality optimization (85%)
- Responsive sizing based on viewport
- Smooth animations for image loading

### 2. Responsive Sizing
- **Gallery**: Grid layout from 2 columns (mobile) to 4 columns (desktop)
- **Couple Photos**: Responsive circular frames (160px to 224px)
- **Background Images**: Optimized for different screen sizes

### 3. Loading Performance
- Priority loading for above-the-fold images (Hero section)
- Lazy loading for gallery images
- Optimized image sizes based on display context
- Progressive enhancement with loading states

### 4. File Size Considerations
Original photo sizes range from 8MB to 16MB each. Optimizations include:
- Next.js automatic image optimization
- Quality setting at 85% (good balance of quality/size)
- Responsive serving of appropriate sizes
- WebP conversion when supported by browser

## Technical Implementation

### Components Updated
1. **Hero.tsx** - Background image updated
2. **CoupleIntro.tsx** - Individual couple photos with OptimizedImage
3. **Gallery.tsx** - Complete gallery overhaul with 15 real photos
4. **LoveStory.tsx** - Timeline photos updated to match story
5. **SaveTheDate.tsx** - Background and feature image updated
6. **ThankYou.tsx** - Background image updated
7. **wedding-data.ts** - Photo paths updated in data configuration

### Performance Tips
1. **Preload Critical Images**: Hero background uses `priority={true}`
2. **Responsive Images**: Proper `sizes` attribute for optimal loading
3. **Progressive Loading**: Loading states prevent layout shift
4. **Error Handling**: Graceful fallbacks for failed image loads

## Future Considerations

### Image Compression
Consider using tools like:
- ImageOptim (Mac)
- TinyPNG (Online)
- Next.js native optimization (already implemented)

### CDN Integration
For production deployment, consider:
- Cloudinary for advanced image optimization
- AWS CloudFront for global distribution
- Vercel image optimization (if deploying on Vercel)

### Alternative Formats
- WebP for modern browsers (handled automatically by Next.js)
- AVIF for even better compression (Next.js support)

## Usage Instructions

### Adding New Photos
1. Place photos in `/public/` directory
2. Update relevant component with new path
3. Use OptimizedImage component for best performance
4. Add appropriate `sizes` attribute for responsive loading

### Customizing Loading States
Modify the OptimizedImage component to:
- Change loading animation style
- Adjust loading placeholder design
- Customize error state appearance

## Browser Compatibility
- All modern browsers supported
- Progressive enhancement for older browsers
- Fallback to standard images if optimization fails

---

All mockup images have been successfully replaced with authentic wedding photos from Eci & Sho's special day, creating a personalized and meaningful wedding invitation experience. 