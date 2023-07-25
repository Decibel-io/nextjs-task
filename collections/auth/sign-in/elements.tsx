import { Col, Row, Title } from '@app/components'
import { maxComputer, maxMobile, maxSmall, maxTablet } from '@app/styles'
import { ColProps, RowProps } from '@app/types'
import { TitleProps } from 'antd/es/typography/Title'
import styled from 'styled-components'

export const StyledRow = styled((props: RowProps) => <Row {...props} />)`
  align-items: center;
  justify-content: center;
`

export const StyledEmptyBoxRow = styled(StyledRow)`
  height: 100%;
  width: 100%;
`

export const StyledTitle = styled((props: TitleProps) => <Title {...props} />)`
  @media only screen and (max-width: ${maxMobile}) {
    text-align: center;
  }
`

export const StyledContainer = styled((props: RowProps) => <Row {...props} />)`
  background: ${(props) => props.theme.color.background};
  height: 100%;
  overflow: auto;
  justify-content: center;
  align-items: center;
`

export const StyledLeftCol = styled((props: ColProps) => <Col {...props} />)`
  border-right: 0.2px solid ${(props) => props.theme.color.grey2};
`

export const StyledEmptyBox = styled((props: ColProps) => <Col {...props} />)`
  background: ${(props) => props.theme.color.grey3};
  height: 400px;
  width: 400px;
`

export const StyledFieldsCol = styled((props: ColProps) => <Col {...props} />)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 150px;

  @media only screen and (max-width: ${maxComputer}) {
    padding: 50px 50px;
  }
  @media only screen and (max-width: ${maxTablet}) {
    padding: 50px 150px;
  }
  @media only screen and (max-width: ${maxMobile}) {
    padding: 15px;
  }
`

export const StyledCol = styled((props: ColProps) => <Col {...props} />)`
  text-align: right;
  width: 100%;
`

export const StyledLinkRow = styled((props: ColProps) => <Col {...props} />)`
  padding: 25px 25px 0px;
  width: 100%;
  @media only screen and (max-width: ${maxSmall}) {
    padding: 0px;
  }
`
