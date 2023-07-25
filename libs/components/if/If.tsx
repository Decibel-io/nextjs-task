import React, { ReactElement } from 'react'

export const If: React.FC<{
  children: ReactElement<any, any>
  condition: any
}> = ({ children, condition }) => {
  if (Boolean(condition)) return children
  else return null
}
