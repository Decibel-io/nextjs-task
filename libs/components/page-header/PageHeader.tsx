import { PageHeader as AntPageHeader } from '@ant-design/pro-components'
import { PageHeaderProps } from '@app/types'
import { toTitleCase } from '@app/utils'
import { useRouter } from 'next/router'

import { Breadcrumb } from '../breadcrumb'
import { Title } from '../title'

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const router = useRouter()

  const getTitleFromRouter = () => {
    const pathsItems = router.pathname.split('/')

    let index = pathsItems.length - 1
    let extra = ''

    if (pathsItems[index].includes('[')) {
      index = index - 1
      extra = 'Details'
    }

    const lastPathItem = toTitleCase(pathsItems[index]).replace(/-/g, ' ') + ' ' + extra

    return lastPathItem
  }

  const style = {
    ...(!props.isNavbar && { paddingInline: 0 }),
  }

  const getBreadcrumb = () => {
    if (props.isNavbar) return null
    if (props.disableBreadcrumb) return null
    return <Breadcrumb />
  }

  return (
    <AntPageHeader
      breadcrumb={getBreadcrumb()}
      style={style}
      {...props}
      title={<Title>{props.title || getTitleFromRouter()}</Title>}
    />
  )
}
