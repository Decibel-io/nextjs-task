import { Button, Checkbox, Form as AppForm, FormItem, Input, InputPassword } from '@app/components'
import React from 'react'

export default {
  component: AppForm,
  title: 'components/Form',
}

export const Form = (args: any) => (
  <AppForm
    {...args}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
  >
    <FormItem label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
      <Input />
    </FormItem>

    <FormItem label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
      <InputPassword />
    </FormItem>

    <FormItem name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </FormItem>

    <FormItem wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </FormItem>
  </AppForm>
)
