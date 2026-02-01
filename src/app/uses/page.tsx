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
            everything I throw at it. At times, I&apos;m certainly missing a
            slightly larger screen.
          </Tool>
          <Tool title="Corne v4.1">
            The Corne with HMX Xinhai switches is the most recent addition. I
            missed the feeling and variety of MX switches after using choc
            switches with the ZSA Voyager for a while. The Xinhai are light
            enough to comfortable type on without getting exhausted and I&apos;m
            exicted by their sound whenever I type.
          </Tool>
          <Tool title="Logitech MX Master 3S">
            Ergonomic and silent. Nothing more to say. I can&apos;t use
            trackpads, so a good mouse is non-negotiable.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Neovim">
            No contest. Fell in love with vim bindings and tried neovim as the
            more &quot;modern&quot; version. I&apos;m immediately happy whenever
            I use it.
          </Tool>
          <Tool title="Ghostty">
            Great native and fast terminal emulator with easy configuration and
            all the features I need.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Programming Languages">
          <Tool title="Go">
            Amazingly productive language. Although a bit boring to use (and
            where are my enums?)
          </Tool>
          <Tool title="Typescript">
            Your standard language that anyone working in any kind of web
            development should know.
          </Tool>
          <Tool title="Python">
            I&apos;ve mostly used Python for my work around Data Science and
            small scripts.
          </Tool>
          <Tool title="Rust">
            Rust&apos;s syntax fascinated me from the first moment I saw it on
            Jon Gjengset&apos;s stream. Learning Rust is currently a work in
            progress.
          </Tool>
          <Tool title="Elixir">
            Another work in progress. I was interested in learning a functional
            language and users of Elixir raved about the developer experience.
            How could I not try it? Phoenix and Liveview look very interesting
            as well, so let&apos;s see how this one goes.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Other">
          <Tool title="Monarch">
            Using this all the time! Search, custom search engines, integrated
            clipboard history and more. Don&apos;t want to miss this and
            it&apos;s one of the first things I install on a new Mac. I&apos;ve
            previously used Alfred instead, but on my work machine the search
            started up slowly which caused issue. Haven&apos;t experienced this
            with Monarch yet.
          </Tool>
          <Tool title="Little Snitch">
            The first thing I install on any new machine. Monitoring and
            controlling network traffic with the option of having multiple
            profiles for home or travel is something I never want to miss again!
          </Tool>
          <Tool title="Zen">
            Great browser based on Firefox. I&apos;m a big fan of the split
            screen.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
