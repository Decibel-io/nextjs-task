import { AddressProps, Any } from '@app/types'
import axios from 'axios'
import fileDownload from 'js-file-download'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'

export { isEqual } from 'lodash'

export const isValidPhoneNumber = (number: string) => {
  if (number && number.length > 0) {
    return /[+]1[2-9]{1}[0-9]{9}/.test(number.replace(/\(|\)|\s|\\-/g, ''))
  } else {
    return false
  }
}

export const isValidEmail = (email: string) => {
  return /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase(),
  )
}

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const stripHTMLTags = (text: string): string => {
  return text.replace(/(<([^>]+)>)|(&[a-z]*;)/gi, '')
}

export const toCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: 'currency',
  })

  return formatter.format(amount).replace(/^(\D+)/, '$1 ')
}

export const youtubeToEmbeddedUrl = (url: string) => {
  const getId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return match && match[2].length === 11 ? match[2] : null
  }
  const videoId = getId(url)
  return `https://www.youtube.com/embed/${videoId}`
}

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const formatEnumToString = (enumString: string) => {
  if (typeof enumString === 'string' || (enumString as any) instanceof String)
    return enumString
      .replace(/_/g, ' ')
      .replace(/AND/g, '&')
      .replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      })
  else return ''
}

export const formatStringToEnum = (string: string) => {
  if (string) {
    return string.trim().replace(/ /g, '_').replace(/&/g, 'AND').toLocaleUpperCase()
  }
}

export const getRandomUUID = () => {
  return uuidv4()
}

export const downloadFile = (url: string, filename: string) => {
  axios
    .get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
    .catch(() => null)
}

export const copyTextToClipBoard = (text: string) => {
  navigator.clipboard.writeText(text)
}

export const toTitleCase = (text: string) => {
  return _.startCase(_.toLower(text))
}

export const addressToString = (address: AddressProps) => {
  if (!address || !Object.keys(address).length) return 'N/A'
  return `${address.lineAddress1}${address.city}${address.country}${address.state}${address.zipCode}`
}

export const getEllipsesText = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 1) + '&hellip;' : str
}

export const convertToRoman = (num: number) => {
  const numeralCodes = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // Ones
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // Tens
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // Hundred
  ]
  let numeral = ''
  const digits = num.toString().split('').reverse()
  for (let i = 0; i < digits.length; i++) {
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral
  }
  return numeral
}

// Deep copies an object or an array
export const deepCopy = (value: Any) => {
  const isArray = Array.isArray(value)
  if (isArray) {
    const deepCopiedObject = JSON.parse(JSON.stringify({ key: value }))
    return deepCopiedObject.key
  } else return JSON.parse(JSON.stringify(value))
}
