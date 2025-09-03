"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import { Home } from "lucide-react"

interface GalleryContentProps {
  images: {
    mediaItemUrl?: string | null
    __typename?: string | null
  }[]
}

export default function GalleryContent({ images }: GalleryContentProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const validImages = images.filter(img => img.mediaItemUrl) as { mediaItemUrl: string }[]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImage(prev => (prev === 0 ? validImages.length - 1 : prev - 1))
    } else {
      setSelectedImage(prev => (prev === validImages.length - 1 ? 0 : prev + 1))
    }
  }

  if (!validImages || validImages.length === 0) {
    return (
      <div className="aspect-[16/10] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
        <Home className="h-16 w-16 text-muted-foreground" />
      </div>
    )
  }

  return (
    <>
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {validImages.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.mediaItemUrl}
                    alt={`Imagem do imóvel ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {validImages.length > 1 && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>

        {validImages.length > 1 && (
          <div className="mt-4">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {validImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div 
                      className="relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image.mediaItemUrl}
                        alt={`Miniatura ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80px, 100px"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {validImages.length > 5 && (
                <>
                  <CarouselPrevious className="left-0 transform -translate-y-1/2" />
                  <CarouselNext className="right-0 transform -translate-y-1/2" />
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-60"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-60"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-60"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center">
            <Image
              src={validImages[selectedImage].mediaItemUrl}
              alt={`Imagem do imóvel ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          
          <div className="absolute bottom-4 text-white z-60">
            {selectedImage + 1} / {validImages.length}
          </div>
        </div>
      )}
    </>
  )
}