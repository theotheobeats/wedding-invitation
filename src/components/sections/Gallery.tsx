'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';

const galleryImages = [
  { id: 1, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071550.jpg', alt: 'Wedding photo 1' },
  { id: 2, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071543.jpg', alt: 'Wedding photo 2' },
  { id: 3, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071547.jpg', alt: 'Wedding photo 3' },
  { id: 4, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071556.jpg', alt: 'Wedding photo 4' },
  { id: 5, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071557.jpg', alt: 'Wedding photo 5' },
  { id: 6, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071540.jpg', alt: 'Wedding photo 6' },
  { id: 7, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071541.jpg', alt: 'Wedding photo 7' },
  { id: 8, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071554.jpg', alt: 'Wedding photo 8' },
  { id: 9, src: 'https://truelove.my.id/wp-content/uploads/2024/05/pexels-cottonbro-studio-10071555.jpg', alt: 'Wedding photo 9' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding py-20 bg-muted">
      <div className="container-wedding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://ext.same-assets.com/1904390701/1875536406.svg"
            alt="Gallery"
            width={80}
            height={30}
            className="mx-auto mb-6"
          />
          <h2 className="section-title">Mini Gallery</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-1 bg-transparent border-none">
            {selectedImage && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Gallery preview"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
