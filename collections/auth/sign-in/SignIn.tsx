import { Col, Spacer, useForm, Notification } from '@app/components'
import { SIGN_IN_FORM } from '@app/forms'
import { DynamicForm } from '@app/modules'
import { login, refresh } from '@app/redux'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { API } from 'libs/apis'

import { CompanyLogo } from '~public'

import {
  StyledContainer,
  StyledFieldsCol,
  StyledLeftCol,
  StyledRow,
  StyledTitle,
} from './elements'
import { AxiosResponse } from 'axios'

export const SignIn: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const timeOut = parseInt(process.env.TIME_OUT || '0')

  const [form] = useForm()

  const refreshToken = async (token?: string) => {
    const response = await API.AUTH.REFRESH_TOKEN(token)
    dispatch(
      refresh({
        accessToken: response.data.access_token,
        userName: response.data.user.username,
        uid: response.data.user.id,
      }),
    )
    return response
  }

  const startRefreshTokenInterval = async (response: AxiosResponse<any, any>) => {
    setInterval(async () => {
      response = await refreshToken(response.data.access_token)
    }, timeOut)
  }

  const handleFormSubmit = async (type?: string) => {
    try {
      switch (type) {
        default: {
          const data = await form.validateFields()
          let response = await API.AUTH.LOGIN(data.email, data.password)
          dispatch(
            login({
              accessToken: response.data.access_token,
              userName: response.data.user.username,
              uid: response.data.user.id,
            }),
          )
          Notification({
            message: 'Logging in!',
            type: 'success',
          })
          startRefreshTokenInterval(response)

          redirect()
          break
        }
      }
    } catch (error) {
    } finally {
    }
  }

  const redirect = () => {
    router.replace('/dashboard-3')
  }

  return (
    <StyledContainer align={'middle'}>
      <Col span={12} xs={24} lg={12}>
        <StyledFieldsCol>
          <CompanyLogo />
          <Spacer value={35} />
          <StyledRow>
            <StyledTitle level={2}>Sign in to your Account</StyledTitle>
          </StyledRow>
          <Spacer value={35} />
          <DynamicForm fields={SIGN_IN_FORM} form={form} onSubmit={handleFormSubmit} />
        </StyledFieldsCol>
      </Col>
    </StyledContainer>
  )
}
