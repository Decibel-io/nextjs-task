/* eslint-disable @typescript-eslint/no-var-requires */
const withAntdLess = require('next-plugin-antd-less')
const { parsed: env } = require('dotenv').config();

module.exports = withAntdLess({
  webpack(config) {
    return config
  },
  env,
})
