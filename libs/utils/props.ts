/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { BoxProperties } from '@app/types'

export const omitProps = <T, B extends keyof BoxProperties>(
  props: T & BoxProperties,
  componentSpecificNonDOMProps: Array<
    keyof Omit<
      T,
      B | keyof JSX.IntrinsicElements['div'] | keyof JSX.IntrinsicElements['a'] | keyof JSX.IntrinsicElements['img']
    >
  > = [],
): BoxProperties => {
  for (const key in componentSpecificNonDOMProps) {
    // @ts-ignore
    delete props[key]
  }
  return props
}

export const omitCSSProps = <T, B extends keyof BoxProperties>(props: T & BoxProperties): Omit<T, B> => {
  const {
    color,
    textDecoration,
    fontWeight,
    fontSize,
    verticalAlign,
    textAlign,
    cursor,
    letterSpacing,
    wordSpacing,
    lineHeight,

    position,
    left,
    top,
    right,
    bottom,
    zIndex,

    display,
    displayComputer,
    displayTablet,
    displayMobile,

    margin,
    marginLeft,
    marginBottom,
    marginRight,
    marginTop,

    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,

    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,

    flex,
    flexDirection,
    flexGrow,
    flexShrink,
    flexBasis,
    flexWrap,

    flexComputer,
    flexDirectionComputer,
    flexGrowComputer,
    flexShrinkComputer,
    flexBasisComputer,
    flexWrapComputer,

    flexTablet,
    flexDirectionTablet,
    flexGrowTablet,
    flexShrinkTablet,
    flexBasisTablet,
    flexWrapTablet,

    flexMobile,
    flexDirectionMobile,
    flexGrowMobile,
    flexShrinkMobile,
    flexBasisMobile,
    flexWrapMobile,

    justifyContent,
    justifyContentComputer,
    justifyContentTablet,
    justifyContentMobile,

    alignContent,
    alignContentComputer,
    alignContentTablet,
    alignContentMobile,

    alignItems,
    alignItemsComputer,
    alignItemsTablet,
    alignItemsMobile,

    alignSelf,
    alignSelfComputer,
    alignSelfTablet,
    alignSelfMobile,

    height,
    minHeight,
    maxHeight,

    width,
    minWidth,
    maxWidth,
    ...restProps
  } = props

  // @ts-ignore
  return restProps
}
