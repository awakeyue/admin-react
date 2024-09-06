import { ConfigProvider, theme, ThemeConfig } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { PropsWithChildren } from 'react'
import useThemeStore from '@/store'
import { ThemeMode } from '#/enum'
import { themeColorPresets } from '../theme'

interface ConfigProps {}

export default function AntdConfig(props: PropsWithChildren<ConfigProps>) {
  const { children } = props
  const {
    settings: { themeMode, themeColorPreset },
  } = useThemeStore()
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeColorPresets[themeColorPreset],
        },
        algorithm: themeMode === ThemeMode.Dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <StyleProvider layer>{children}</StyleProvider>
    </ConfigProvider>
  )
}
