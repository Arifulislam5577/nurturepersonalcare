import { BestSellers } from '@/components/home/best-sellers'
import { Collections } from '@/components/home/collections'
import { Contact } from '@/components/home/contact'
import { Faq } from '@/components/home/faq'
import { Formulation } from '@/components/home/formulation'
import { Hero } from '@/components/home/hero'
import { Introduction } from '@/components/home/introduction'
import { Journal } from '@/components/home/journal'
import { MarqueeBand } from '@/components/home/marquee-band'
import { Pillars } from '@/components/home/pillars'
import { Purpose } from '@/components/home/purpose'
import { Range } from '@/components/home/range'
import { Statement } from '@/components/home/statement'
import { Story } from '@/components/home/story'
import { Team } from '@/components/home/team'
import { Testimonial } from '@/components/home/testimonial'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Introduction />
      <Collections />
      <BestSellers />
      <Statement />
      <Pillars />
      <Purpose />
      <Range />
      <Formulation />
      <Story />
      <Team />
      <Testimonial />
      <Journal />
      <Faq />
      <Contact />
    </>
  )
}
