import { StepProps } from '@app/types'
import { Steps as AntSteps } from 'antd'

export const Step: React.FC<StepProps> = (props) => <AntSteps.Step {...props} />
