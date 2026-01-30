'use client'

import { useCallback, useState } from 'react'

import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export function ArticlesWithFilter({
  articles,
  tags,
}: {
  articles: ArticleWithSlug[]
  tags: string[]
}) {
  let [selectedTags, setSelectedTags] = useState<string[]>([])

  let toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }, [])

  let clearTags = useCallback(() => setSelectedTags([]), [])

  let filteredArticles =
    selectedTags.length === 0
      ? articles
      : articles.filter((article) =>
          selectedTags.some((tag) =>
            article.tags?.some((t) => t.toLowerCase() === tag),
          ),
        )

  return (
    <>
      {tags.length > 0 && (
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Filter:
          </span>
          {tags.map((tag) => {
            let isSelected = selectedTags.includes(tag)
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                  isSelected
                    ? 'bg-teal-500 text-white dark:bg-teal-400 dark:text-zinc-900'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                }`}
              >
                {tag}
              </button>
            )
          })}
          {selectedTags.length > 0 && (
            <button
              onClick={clearTags}
              className="ml-1 text-sm text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              Clear
            </button>
          )}
        </div>
      )}

      {filteredArticles.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            No articles match the selected tags.
          </p>
          <button
            onClick={clearTags}
            className="mt-2 text-sm text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {filteredArticles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
