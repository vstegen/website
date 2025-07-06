import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout title="Software I use, gadgets I love, and other things I recommend.">
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Max, 32GB RAM (2021)">
            Love this machine and even after 4 years, it's still running
            everything I throw at it. Wish I would have picked a 16” version for
            when I'm out and about, though.
          </Tool>
          <Tool title="ZSA Voyager Keyboard">
            Big fan of ZSA keyboard. Had 2 Ergodox and 2 Moonlander Mark I over
            the years and finally settled on the Voyager. Initially, because the
            size is more convenient for traveling, but together with the Ambient
            Nocturnal switches, it's an amazing and customizable typing
            experience.
          </Tool>
          <Tool title="Logitech MX Master 3S">
            Ergonomic and silent. No issues so far. Unfortunately, the Master 2S
            ended up having scrolling issues which is why I was forced to buy
            something new. Don't regret this purchase at all. It's a bit
            inconvenient to carry around due to its size.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Neovim">TBD</Tool>
          <Tool title="Ghostty">TBD</Tool>
        </ToolsSection>
        <ToolsSection title="Programming Languages">
          <Tool title="Go">TBD</Tool>
          <Tool title="Typescript">TBD</Tool>
          <Tool title="Rust">TBD</Tool>
          <Tool title="Elixir">TBD</Tool>
          <Tool title="Python">TBD</Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">TBD</Tool>
          <Tool title="Zen">TBD</Tool>
          <Tool title="Aerospace">TBD</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
