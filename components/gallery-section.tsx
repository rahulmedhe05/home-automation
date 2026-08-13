"use client"

import { useState } from "react"

const galleryItems = [
  { id: 1, type: "image", src: "/1.png", title: "Modern Living Room" },
  { id: 2, type: "image", src: "/2.png", title: "Luxury Bedroom Suite" },
  { id: 3, type: "image", src: "/3.png", title: "Contemporary Kitchen" },
  { id: 4, type: "image", src: "/4.png", title: "Office Space Design" },
  { id: 5, type: "image", src: "/5.png", title: "Minimalist Home" },
  { id: 6, type: "image", src: "/6.png", title: "Commercial Space" },
  { id: 7, type: "image", src: "/7.png", title: "Elegant Dining Area" },
  { id: 8, type: "image", src: "/8.png", title: "Luxury Home Spa" },
  { id: 9, type: "image", src: "/9.png", title: "Kids Room Design" },
  { id: 10, type: "image", src: "/10.png", title: "Master Bedroom" },
  { id: 11, type: "image", src: "/11.png", title: "Modular Kitchen" },
  { id: 12, type: "image", src: "/12.png", title: "Living Room Decor" },
  { id: 13, type: "image", src: "/13.png", title: "Wardrobe Design" },
  { id: 14, type: "image", src: "/14.png", title: "Study Room" },
  { id: 15, type: "image", src: "/15.png", title: "Pooja Room" },
  { id: 16, type: "image", src: "/16.png", title: "Balcony Design" },
  { id: 17, type: "image", src: "/17.png", title: "Foyer Entrance" },
  { id: 18, type: "image", src: "/18.png", title: "TV Unit Design" },
  { id: 19, type: "image", src: "/19.png", title: "Bathroom Interior" },
  { id: 20, type: "image", src: "/20.png", title: "Guest Bedroom" },
  { id: 21, type: "image", src: "/21.png", title: "False Ceiling" },
  { id: 22, type: "image", src: "/22.png", title: "Wall Paneling" },
  { id: 23, type: "image", src: "/23.png", title: "Home Office" },
  { id: 24, type: "image", src: "/24.png", title: "Dining Table Setup" },
  { id: 25, type: "image", src: "/25.png", title: "Crockery Unit" },
  { id: 26, type: "image", src: "/26.png", title: "Bar Counter" },
  { id: 27, type: "image", src: "/27.png", title: "Shoe Rack Design" },
  { id: 28, type: "image", src: "/28.png", title: "Partition Design" },
  { id: 29, type: "image", src: "/29.png", title: "Window Treatments" },
  { id: 30, type: "image", src: "/30.png", title: "Lighting Design" },
  { id: 31, type: "image", src: "/31.png", title: "Flooring Patterns" },
  { id: 32, type: "image", src: "/32.png", title: "Open Kitchen" },
  { id: 33, type: "image", src: "/33.png", title: "L-Shape Kitchen" },
  { id: 34, type: "image", src: "/34.png", title: "U-Shape Kitchen" },
  { id: 35, type: "image", src: "/35.png", title: "Island Kitchen" },
  { id: 36, type: "image", src: "/36.png", title: "Compact Kitchen" },
  { id: 37, type: "image", src: "/37.png", title: "Premium Bedroom" },
  { id: 38, type: "image", src: "/38.png", title: "Teen Room Design" },
  { id: 39, type: "image", src: "/39.png", title: "Nursery Room" },
  { id: 40, type: "image", src: "/40.png", title: "Walk-in Closet" },
  { id: 41, type: "image", src: "/41.png", title: "Dressing Area" },
  { id: 42, type: "image", src: "/42.png", title: "Reading Corner" },
  { id: 43, type: "image", src: "/43.png", title: "Entertainment Room" },
  { id: 44, type: "image", src: "/44.png", title: "Home Theater" },
  { id: 45, type: "image", src: "/45.png", title: "Gym Room Design" },
  { id: 46, type: "image", src: "/46.png", title: "Utility Room" },
  { id: 47, type: "image", src: "/47.png", title: "Terrace Garden" },
  { id: 48, type: "image", src: "/48.png", title: "Indoor Plants" },
  { id: 49, type: "image", src: "/49.png", title: "Accent Walls" },
  { id: 50, type: "image", src: "/50.png", title: "Bookshelf Design" },
  { id: 51, type: "image", src: "/51.png", title: "Console Table" },
  { id: 52, type: "image", src: "/52.png", title: "Coffee Table Setup" },
  { id: 53, type: "image", src: "/53.png", title: "Sofa Design" },
  { id: 54, type: "image", src: "/54.png", title: "Bed Design" },
  { id: 55, type: "image", src: "/55.png", title: "Mirror Design" },
  { id: 56, type: "image", src: "/56.png", title: "Art & Decor" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image">("all")
  const [showAll, setShowAll] = useState(false)

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === selectedFilter)
  
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Gallery of Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our stunning collection of interior designs - from modern living rooms to luxurious bedrooms"
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-bold text-sm md:text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredItems.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              {showAll ? "Show Less" : `View All ${filteredItems.length} Photos`}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            {"Want to transform your space? Contact us today for a free consultation"}
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors inline-block"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
