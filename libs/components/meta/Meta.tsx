import { IStore } from '@app/redux'
import { IMetaData } from '@app/types'
import Head from 'next/head'
import { useSelector } from 'react-redux'

export const MetaData: React.FC<IMetaData> = ({
  imageHeight = '435',
  imageWidth = '774',
  type = 'website',
  ...metaData
}) => {
  const stripHTMLTags = (text: string): string => text.replace(/(<([^>]+)>)|(&[a-z]*;)/gi, '')
  const { theme } = useSelector((state: IStore) => state)
  return (
    <Head>
      <title>
        {metaData.title} | {theme.dynamicTheme.companyName}
      </title>
      <meta property="og:url" content={process.env.BASE_URL} />
      <meta property="og:type" content={type} />
      <meta name="title" property="og:title" content={`${metaData.title} | ${theme.dynamicTheme.companyName}`} />
      <meta name="description" property="og:description" content={stripHTMLTags(metaData.description)} />
      <meta name="image" property="og:image" content={''} />
      <meta name="twitter:title" content={`${metaData.title} | ${theme.dynamicTheme.companyName}`} />
      <meta name="twitter:description" content={stripHTMLTags(metaData.description)} />
      <meta name="twitter:description" content={stripHTMLTags(metaData.description)} />
      <meta name="twitter:card" content="summary_large_image" />
      {metaData.alt && <meta property="og:image:alt" content={metaData.alt} />}
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
    </Head>
  )
}
