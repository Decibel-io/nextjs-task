export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

export type TextAlign = 'center' | 'left' | 'right'

export type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-evenly' | 'space-between'

export type AlignItems = JustifyContent | 'stretch' | 'baseline'

export type Position = 'relative' | 'static' | 'fixed' | 'sticky' | 'absolute'

export type Display = 'flex !important' | 'block' | 'inline' | 'flex' | 'inline-flex' | 'inline-block' | 'none'

export type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap'

export interface BoxModelProperties {
  display?: Display
  displayMobile?: Display
  displayTablet?: Display
  displayComputer?: Display
  margin?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
  border?: string
  borderTop?: string
  borderBottom?: string
  borderLeft?: string
  borderRight?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  width?: string
  minWidth?: string
  maxWidth?: string
  transform?: string
}

export interface BoxPositionProperties {
  position?: Position
  left?: string
  top?: string
  right?: string
  bottom?: string
  zIndex?: number
}

export interface FlexBoxProperties {
  flex?: string
  flexDirection?: FlexDirection
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string
  flexWrap?: FlexWrap
  justifyContent?: JustifyContent
  alignSelf?: AlignItems
  alignContent?: JustifyContent
  alignItems?: AlignItems
  gap?: string

  flexMobile?: string
  flexDirectionMobile?: FlexDirection
  flexGrowMobile?: number
  flexShrinkMobile?: number
  flexBasisMobile?: string
  flexWrapMobile?: FlexWrap
  justifyContentMobile?: JustifyContent
  alignSelfMobile?: AlignItems
  alignContentMobile?: JustifyContent
  alignItemsMobile?: AlignItems

  flexTablet?: string
  flexDirectionTablet?: FlexDirection
  flexGrowTablet?: number
  flexShrinkTablet?: number
  flexBasisTablet?: string
  flexWrapTablet?: FlexWrap
  justifyContentTablet?: JustifyContent
  alignSelfTablet?: AlignItems
  alignContentTablet?: JustifyContent
  alignItemsTablet?: AlignItems

  flexComputer?: string
  flexDirectionComputer?: FlexDirection
  flexGrowComputer?: number
  flexShrinkComputer?: number
  flexBasisComputer?: string
  flexWrapComputer?: FlexWrap
  justifyContentComputer?: JustifyContent
  alignSelfComputer?: AlignItems
  alignContentComputer?: JustifyContent
  alignItemsComputer?: AlignItems
}

export interface TextProperties {
  color?: string
  textDecoration?: string
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 900
  fontSize?: string
  verticalAlign?: string
  textAlign?: TextAlign
  cursor?: string
  letterSpacing?: string
  wordSpacing?: string
  lineHeight?: string
  backgroundColor?: string
  background?: string
}

/* Custom properties that can be used to apply specific styles. */
export interface CustomProperties {
  fluid?: boolean
}

export type BoxProperties = BoxModelProperties &
  BoxPositionProperties &
  FlexBoxProperties &
  TextProperties &
  CustomProperties
