import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { PropsWithChildren } from 'react'

interface ConfigProps {}

export default function AntdConfig(props: PropsWithChildren<ConfigProps>) {
  const { children } = props
  return (
    <ConfigProvider>
      <StyleProvider layer>{children}</StyleProvider>
    </ConfigProvider>
  )
}
