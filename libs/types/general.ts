import { RadioChangeEvent } from 'antd/lib/radio'
import { ChangeEvent, DragEvent } from 'react'

/**
 * These types may need to be refactored and can be deleted if not used anywhere.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any

export type EventType = ChangeEvent | DragEvent | RadioChangeEvent

export interface File {
  name: string
  type: string
  size: string
}

export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export interface AddressProps {
  city: string
  country: string
  lineAddress1: string
  lineAddress2: string
  state: string
  zipCode: string
}
