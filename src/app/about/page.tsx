import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MastodonIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/image-6.jpg'
import { EMAIL, FIRST_NAME, NAME } from '@/lib/constants'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: `I’m ${NAME}. I live in Tokyo, Japan, where I work as a software engineer.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I’m {FIRST_NAME} — a software engineer and hobby photographer
            living in Tokyo.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Originally from Germany, I&apos;ve recently made the jump and
              moved to Tokyo, Japan.
            </p>
            <p>
              The dream, my goal, as a few people will share, is freedom. Being
              able to work from anywhere. Whether it&apos;s in a Ger in
              Mongolia, a hotel room, or simply a nice café in the neighborhood.
              Being able to work on things that matter to me.
            </p>
            <p>
              For me, software engineering is the perfect blend of problem
              solving, creativity, never-ending learning, and typing. Yes,
              you&apos;ve read that correctly. Color me weird, but I absolutely
              love typing on a keyboard. So this profession seems like the ideal
              fit, doesn&apos;t it? On top of all that, the high I get when
              creating something from scratch is addicting. Be it a website, a
              personal tool, or something else.
            </p>
            <p>
              My journey into photography started, as for many, with my phone —
              on a trip to Singapore in 2021. Primarily taking photos to show
              this city to my family, I quickly realized that I enjoyed the
              process of capturing what I&apos;m seeing. And lo and behold, a
              few more trips later, the decision to buy an actual camera was
              formed. This hobby, taking photos, pulls me into the present,
              makes me more aware, allows me to notice all the small things, and
              makes each trip I take even more fulfilling.
            </p>
            <p>
              This page, my personal outlet, is where I will document my journey
              toward freedom, share the things I love, or write about anything
              that itches that part of my mind. Probably mostly topics about
              software engineering, projects I&apos;m building, photography, and
              travel. But who knows, inspiration could strike at any time and
              the topic could be anything...
            </p>
          </div>
        </div>
        {/* TODO: add more socials */}
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/vinmarcodes" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://mastodon.social/@vinmar"
              icon={MastodonIcon}
              className="mt-4"
            >
              Follow on Mastodon
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/marste.snap/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/vstegen"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/mvstegen/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={`mailto:${EMAIL}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {EMAIL}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
