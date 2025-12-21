'use client'

import { useState } from 'react'
import AboutVariation1 from '@/components/about-variations/AboutVariation1'
import AboutVariation2 from '@/components/about-variations/AboutVariation2'
import AboutVariation3 from '@/components/about-variations/AboutVariation3'
import AboutVariation4 from '@/components/about-variations/AboutVariation4'
import AboutVariation5 from '@/components/about-variations/AboutVariation5'

export default function AboutDemo() {
  const [selectedVariation, setSelectedVariation] = useState<number | null>(null)

  const variations = [
    { id: 1, name: 'Variation 1: Scroll-Revealed Reading', component: AboutVariation1 },
    { id: 2, name: 'Variation 2: Left Border Cards', component: AboutVariation2 },
    { id: 3, name: 'Variation 3: Split Layout with Tech Stack', component: AboutVariation3 },
    { id: 4, name: 'Variation 4: Interests Grid', component: AboutVariation4 },
    { id: 5, name: 'Variation 5: Timeline Style', component: AboutVariation5 },
  ]

  if (selectedVariation) {
    const Variation = variations[selectedVariation - 1].component
    return (
      <div>
        <button
          onClick={() => setSelectedVariation(null)}
          className="fixed top-4 right-4 z-[100] px-4 py-2 bg-dark text-white rounded-sm hover:bg-dark/90 transition-colors"
        >
          ← Back to Selection
        </button>
        <Variation />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-dark mb-4" style={{ fontFamily: 'Calluna, serif' }}>
          About Me Section Variations
        </h1>
        <p className="text-lg text-dark/70 mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
          Select a variation to view it in full screen. Each design follows the minimal, professional aesthetic with the specified design system.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variations.map((variation) => (
            <button
              key={variation.id}
              onClick={() => setSelectedVariation(variation.id)}
              className="p-6 border-2 border-secondary/30 rounded-sm hover:border-accent hover:bg-primary/10 transition-all text-left"
            >
              <div className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Calluna, serif' }}>
                {variation.name}
              </div>
              <div className="text-sm text-dark/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Click to preview
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/10 rounded-sm">
          <h2 className="text-xl font-bold text-dark mb-4" style={{ fontFamily: 'Calluna, serif' }}>
            Design System Used
          </h2>
          <ul className="space-y-2 text-dark/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            <li>• Fonts: Calluna (headings) + Inter (body)</li>
            <li>• Colors: #F0DCDC, #C0B6B6, #424242, #93A091</li>
            <li>• Style: Minimal, professional, clean</li>
            <li>• Variation 1 uses ScrollReveal component for immersive reading</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

