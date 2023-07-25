import { toTitleCase } from '@app/utils'
import { Breadcrumb as AntBreadcrumb } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { If } from '../if'

export const Breadcrumb = () => {
  const router = useRouter()
  const { pathname } = router
  const pathSnippets = pathname.split('/').filter((i) => i)

  const breadcrumbs = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const isLast = index === pathSnippets.length - 1

    // If breadcrumb contains [id] then show detail instead
    if (snippet.includes('[')) snippet = 'Detail'
    else snippet = toTitleCase(snippet.replace(/-/g, ' '))

    return (
      <AntBreadcrumb.Item key={snippet}>
        <If condition={isLast}>
          <>{snippet}</>
        </If>
        <If condition={!isLast}>
          <Link href={url}>{snippet}</Link>
        </If>
      </AntBreadcrumb.Item>
    )
  })

  if (pathSnippets[0] === '_error') return null
  return <AntBreadcrumb>{breadcrumbs}</AntBreadcrumb>
}
