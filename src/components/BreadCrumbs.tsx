'use client'

import { BreadCrumbItem } from '@/lib/types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
import clsx from 'clsx'
import Link from 'next/link'
import { Fragment } from 'react'

type Props = {
  breadCrumbs: BreadCrumbItem[]
}

export function BreadCrumbsSection({ breadCrumbs }: Props) {
  return (
    <section className="max-w-screen-1.5xl mx-auto">
      <div className="flex w-full items-center py-6">
        <div className="flex items-center justify-center space-x-2">
          {breadCrumbs.map((breadCrumb, index) => {
            const isLastItem = index === breadCrumbs.length - 1
            return (
              <Fragment key={index}>
                <Typography
                  as={Link}
                  href={breadCrumb.link ?? '#'}
                  className={clsx(
                    'text-sm font-bold',
                    isLastItem ? 'text-muted' : 'text-main',
                  )}
                >
                  {breadCrumb.label}
                </Typography>
                {!isLastItem && (
                  <ChevronRightIcon className="h-4 w-4 text-muted" />
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
