/* eslint-disable @typescript-eslint/no-explicit-any */
import { Any } from '@app/types'

export const getURLWithQueryParams = (base: Any, params: Any) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
    .join('&')

  return `${base}?${query}`
}

export const toSlug = (text: string, id: number): string => {
  if (text !== '') {
    return `${text
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/--+/g, '-')
      .replace(/(?:^-|-$)/, '')}-${id}`
  }
  return `${id}`
}

export const getIdFromSlug = (slug: string) => {
  const strArray = slug.split('-')
  return strArray[strArray.length - 1]
}

export const generateFiltersFromQuery = (query: any) => {
  const parameters: any = { ...{} }

  const extractParameter = (parameter: string) => {
    if (query[parameter] instanceof Array) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      parameters[parameter] = query[parameter]
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      parameters[parameter] = [query[parameter]]
    }
  }

  if (query.keyword) parameters.keyword = query.keyword
  if (query.sort && query.sort !== 'best-match') parameters.sort = query.sort
  if (query.page) parameters.page = query.page
  if (query.categories) extractParameter('categories')
  if (query.featured) parameters.featured = query.featured
  if (query.themes) extractParameter('themes')
  if (query.services) extractParameter('services')
  if (query.eventTypes) extractParameter('eventTypes')
  if (query.locations) extractParameter('locations')
  if (query.hourlyRate) parameters.hourlyRate = query.hourlyRate
  if (query.minPrice) parameters.minPrice = query.minPrice
  if (query.maxPrice) parameters.maxPrice = query.maxPrice

  return parameters
}
