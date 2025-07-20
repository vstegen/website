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
            Love this machine and even after 4 years, it&apos;s still running
            everything I throw at it. Might pick a 16&quot; for the larger
            screen next time.
          </Tool>
          <Tool title="ZSA Voyager Keyboard">
            Big fan of ZSA keyboards. Had 2 Ergodox and 2 Moonlander Mark I over
            the years and finally settled on the Voyager. Initially, because the
            size is more convenient for traveling, but together with the Ambient
            Nocturnal switches, it&apos;s an amazing and customizable typing
            experience.
          </Tool>
          <Tool title="Logitech MX Master 3S">
            Ergonomic and silent. It&apos;s a bit inconvenient to carry around
            due to its size.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Neovim">
            No contest. Fell in love with vim bindings and tried neovim as the
            more &quot;modern&quot; version. I&apos;m immediately happy whenever
            I use it.
          </Tool>
          <Tool title="Ghostty">
            Previously used kitty but, after hearing about Ghostty, tried it and
            have no complains. Easy configuration, fast, native, and has all
            features I want out of the box.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Programming Languages">
          <Tool title="Go">Amazingly productive language.</Tool>
          <Tool title="Typescript">
            Your standard language that anyone working in any kind of web
            development should know.
          </Tool>
          <Tool title="Rust">
            I was immediately fascinated by the syntax when I first saw the
            language on a stream. Currently a work in progress learning Rust.
          </Tool>
          <Tool title="Elixir">
            Was interested in learning a functional language and the developer
            satisfaction seemed to be particularly high for Elixir. Phoenix and
            Liveview look very interesting as well, so let&apos;s see how this
            one goes.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Other">
          <Tool title="Alfred">
            Using this all the time! Search, custom search engines, workflows,
            integrated clipboard history and more. Don&apos;t want to miss this
            and it&apos;s one of the first things I install on a new Mac.
          </Tool>
          <Tool title="Zen">
            Recently found this browser. A fan of the vertical tabs and the
            split screen.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
