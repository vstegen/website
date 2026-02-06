'use client'

import { useRouter, usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 6.5 5 8.5 9 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TagFilter({
  allTags,
  selectedTags,
}: {
  allTags: string[]
  selectedTags: string[]
}) {
  let router = useRouter()
  let pathname = usePathname()

  function toggleTag(tag: string) {
    let newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]

    let params = new URLSearchParams()
    for (let t of newTags) {
      params.append('tag', t)
    }

    let query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname)
  }

  function clearAll() {
    router.replace(pathname)
  }

  if (allTags.length === 0) {
    return null
  }

  return (
    <div className="mb-10 flex items-center gap-3">
      <Popover className="relative">
        <PopoverButton className="group flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Filter by tags
          {selectedTags.length > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-teal-500 px-1.5 text-xs font-semibold text-white dark:bg-teal-400 dark:text-zinc-900">
              {selectedTags.length}
            </span>
          )}
          <ChevronDownIcon className="h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </PopoverButton>
        <PopoverPanel
          transition
          className="absolute left-0 top-full z-10 mt-3 w-52 origin-top-left rounded-xl bg-white p-2 shadow-lg ring-1 ring-zinc-900/5 transition duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
        >
          <div className="space-y-0.5">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={clsx(
                  'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition',
                  selectedTags.includes(tag)
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200',
                  'hover:bg-zinc-50 dark:hover:bg-zinc-800/50',
                )}
              >
                <span
                  className={clsx(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded border transition',
                    selectedTags.includes(tag)
                      ? 'border-teal-500 bg-teal-500 dark:border-teal-400 dark:bg-teal-400'
                      : 'border-zinc-300 dark:border-zinc-600',
                  )}
                >
                  {selectedTags.includes(tag) && (
                    <CheckIcon className="h-3 w-3 text-white dark:text-zinc-900" />
                  )}
                </span>
                {tag}
              </button>
            ))}
          </div>
        </PopoverPanel>
      </Popover>
      {selectedTags.length > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-sm text-zinc-400 transition hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}
