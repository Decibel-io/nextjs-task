export interface BarChartProps {
  data: {
    labels: string[]
    datasets: Array<{
      data: number[]
      backgroundColor?: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
    }>
  }
  options: {
    [x: string]: unknown
  }
  width?: number
  height?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins?: any | undefined
}

export interface LineChartProps {
  data: {
    labels: string[]
    datasets: Array<{
      data: number[]
      backgroundColor?: string[] | undefined
      borderColor?: string[] | undefined
      borderWidth?: number | undefined
    }>
  }
  options: {
    [x: string]: unknown
  }
  width?: number
  height?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins?: any | undefined
}

export type ChartTypes = 'bar-chart' | 'vertical-bar-chart' | 'area-chart' | 'line-chart'

export interface AdminChartProps {
  kind: ChartTypes
}
