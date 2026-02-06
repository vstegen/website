import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
  tags?: string[]
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export async function getArticlesByTag(tag: string) {
  let articles = await getAllArticles()
  return articles.filter(
    (article) =>
      article.tags?.some(
        (t) => t.toLowerCase() === tag.toLowerCase(),
      ),
  )
}

export async function getArticlesByTags(tags: string[]) {
  let articles = await getAllArticles()
  let lowerTags = tags.map((t) => t.toLowerCase())
  return articles.filter((article) =>
    article.tags?.some((t) => lowerTags.includes(t.toLowerCase())),
  )
}

export async function getAllTags(): Promise<string[]> {
  let articles = await getAllArticles()
  let tagSet = new Set<string>()
  for (let article of articles) {
    if (article.tags) {
      for (let tag of article.tags) {
        tagSet.add(tag.toLowerCase())
      }
    }
  }
  return Array.from(tagSet).sort((a, b) => a.localeCompare(b))
}
