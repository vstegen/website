import { type Metadata } from 'next'

import { ArticlesWithFilter } from '@/components/ArticlesWithFilter'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles, getAllTags } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, living abroad, building in public, and more, collected in chronological order.',
}

function WritingIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <WritingIcon className="h-8 w-8 text-zinc-400 dark:text-zinc-500" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        Articles Coming Soon
      </h3>
      <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
        I&apos;m working on sharing my thoughts on software development, life in
        Japan, and building in public as we speak.
      </p>
    </div>
  )
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()
  let tags = await getAllTags()

  return (
    <SimpleLayout
      title="Writing on software development, life in Japan, and whatever comes to mind."
      intro="All of my long-form thoughts on programming, living abroad, building in public, and more, collected in chronological order."
    >
      {articles.length === 0 ? (
        <EmptyState />
      ) : (
        <ArticlesWithFilter articles={articles} tags={tags} />
      )}
    </SimpleLayout>
  )
}
