import { BestSellers } from '@/components/home/best-sellers'
import { Collections } from '@/components/home/collections'
import { Contact } from '@/components/home/contact'
import { Faq } from '@/components/home/faq'
import { Hero } from '@/components/home/hero'
import { Journal } from '@/components/home/journal'
import { Mission } from '@/components/home/mission'
import { Promises } from '@/components/home/promises'
import { Statement } from '@/components/home/statement'
import { Story } from '@/components/home/story'
import { Team } from '@/components/home/team'
import { Testimonial } from '@/components/home/testimonial'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Mission />
      <Collections />
      <Promises />
      <Statement />
      <Story />
      <Team />
      <Testimonial />
      <Journal />
      <Faq />
      <Contact />
    </>
  )
}
