import { cn } from '@/lib/cn'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

const eyebrowTones = {
  light: 'text-slate',
  dark: 'text-mist',
  brand: 'text-ink/75',
} as const

const descriptionTones = {
  light: 'text-slate',
  dark: 'text-paper/70',
  brand: 'text-ink/80',
} as const

type SectionIntroProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  tone?: keyof typeof eyebrowTones
  isCentered?: boolean
  className?: string
}

export function SectionIntro({
  id,
  eyebrow,
  title,
  description,
  tone = 'light',
  isCentered = false,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn('max-w-3xl', isCentered && 'mx-auto text-center', className)}>
      <p className={cn('flex items-center gap-3 eyebrow', isCentered && 'justify-center')}>
        <span
          className={cn('size-2 rounded-full', tone === 'brand' ? 'bg-ink' : 'bg-leaf')}
          aria-hidden="true"
        />
        <span className={eyebrowTones[tone]}>{eyebrow}</span>
      </p>
      <LinesReveal id={id} className="mt-5 text-headline font-semibold">
        {title}
      </LinesReveal>
      {description ? (
        <Reveal delay={0.15}>
          <p className={cn('mt-6 text-lead', descriptionTones[tone])}>{description}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
