import { CollapsePanelProps as AntCollapsePanelProps, CollapseProps as AntCollapseProps } from 'antd/lib/collapse'

type DivElProps = Omit<JSX.IntrinsicElements['div'], 'ref'>

export type CollapseProps = DivElProps & AntCollapseProps

export type CollapsePanelProps = DivElProps & AntCollapsePanelProps
