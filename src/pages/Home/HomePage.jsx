import React from 'react'
import {Hero} from './components/Hero'
import {Testimonials} from './components/Testimonials'
import {Faq} from './components/Faq'
import { FeaturedProducts } from './components/FeacturedProduct'
import { useTitle } from '../../hooks/useTitle'



export const HomePage = () => {
  useTitle('Access Latest Computer Science eBooks')
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}

