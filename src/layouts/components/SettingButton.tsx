import { ThemeColorPresets, ThemeLayout, ThemeMode } from '#/enum'
import useThemeStore from '@/store'
import { themeColorPresets } from '@/theme/theme'
import { Icon } from '@iconify-icon/react'
import { Card, Drawer, Skeleton, Switch, theme } from 'antd'
import { useState } from 'react'
export default function SettingButton() {
  const [open, setOpen] = useState(false)
  const { colorPrimary, colorTextTertiary, colorBgLayout, colorTextQuaternary } =
    theme.useToken().token
  const { settings, setSetings } = useThemeStore()

  const handleClick = () => {
    setOpen(true)
  }
  const setThemeMode = (mode: ThemeMode) => {
    setSetings({
      ...settings,
      themeMode: mode,
    })
  }
  const setThemeColorPresets = (preset: ThemeColorPresets) => {
    setSetings({
      ...settings,
      themeColorPreset: preset,
    })
  }
  const setLayout = (layout: ThemeLayout) => {
    setSetings({
      ...settings,
      layout: layout,
    })
  }
  const setShowBreadcrumb = (show: boolean) => {
    setSetings({
      ...settings,
      showBreadcrumb: show,
    })
  }
  const setShowHistoryPage = (show: boolean) => {
    setSetings({
      ...settings,
      showHistoryPage: show,
    })
  }

  const getLayoutBg = (layout: ThemeLayout, isBorderStyle?: boolean) => {
    if (layout === settings.layout) {
      return !isBorderStyle
        ? `linear-gradient(45deg, ${colorBgLayout} 0%, ${colorPrimary} 100%)`
        : colorPrimary
    }
    return colorTextQuaternary
  }
  return (
    <>
      <Icon
        onClick={handleClick}
        icon="ic:round-settings"
        className="cursor-pointer"
        style={{ fontSize: '30px', color: 'skyblue' }}
      />
      <Drawer title="设置" open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col p-4">
          <div className="mb-3">
            <div className="mb-2 text-base">亮暗模式</div>
            <div className="mb-2 flex gap-4">
              <Card
                onClick={() => setThemeMode(ThemeMode.Light)}
                className="cursor-pointer"
                style={{
                  background: settings.themeMode === ThemeMode.Light ? colorPrimary : '',
                }}
              >
                <div className="flex size-10 flex-col items-center">
                  <Icon icon="ic:round-light-mode" className="mb-2 text-xl" />
                  <div>明亮</div>
                </div>
              </Card>
              <Card
                onClick={() => setThemeMode(ThemeMode.Dark)}
                className="cursor-pointer"
                style={{
                  background: settings.themeMode === ThemeMode.Dark ? colorPrimary : '',
                }}
              >
                <div className="flex size-10 flex-col items-center">
                  <Icon icon="ic:round-dark-mode" className="mb-2 text-xl" />
                  <div>暗黑</div>
                </div>
              </Card>
            </div>
          </div>
          <div>
            <div className="mb-2 text-base">主题预设</div>
            <div className="mb-2 flex flex-wrap gap-4">
              {Object.entries(themeColorPresets).map(([key, value]) => {
                return (
                  <div
                    onClick={() => setThemeColorPresets(key as ThemeColorPresets)}
                    className="flex cursor-pointer flex-col items-center rounded-lg p-2"
                    key={key}
                    style={{
                      background: settings.themeColorPreset === key ? colorTextTertiary : '',
                    }}
                  >
                    <div
                      className="flex size-6 items-center justify-center rounded-full"
                      style={{
                        background: value,
                      }}
                    ></div>
                    {/* <div>{key}</div> */}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <div className="mb-2 text-base">布局</div>
            <div className="mb-2 flex flex-wrap gap-4">
              <div
                className="w-13 flex cursor-pointer gap-2 rounded-lg border-4 p-1"
                style={{ borderColor: getLayoutBg(ThemeLayout.Horizontal, true) }}
                onClick={() => setLayout(ThemeLayout.Horizontal)}
              >
                <div>
                  <p
                    className="mb-1 h-3 w-4 rounded-full"
                    style={{ background: getLayoutBg(ThemeLayout.Horizontal) }}
                  ></p>
                  <p
                    className="mb-1 h-2 w-3 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Horizontal) }}
                  ></p>
                  <p
                    className="mb-1 h-2 w-4 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Horizontal) }}
                  ></p>
                  <p
                    className="h-2 w-4 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Horizontal) }}
                  ></p>
                </div>
                <div>
                  <p
                    className="mb-1 h-2 w-12 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Horizontal) }}
                  ></p>
                  <p
                    className="h-9 w-12 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Horizontal) }}
                  ></p>
                </div>
              </div>
              <div
                className="w-13 cursor-pointer gap-2 rounded-lg border-4 p-1"
                style={{ borderColor: getLayoutBg(ThemeLayout.Vertical, true) }}
                onClick={() => setLayout(ThemeLayout.Vertical)}
              >
                <div className="mb-1 flex items-center">
                  <p
                    className="mr-1 h-3 w-4 rounded-full"
                    style={{ background: getLayoutBg(ThemeLayout.Vertical) }}
                  ></p>
                  <p
                    className="mr-1 h-2 w-6 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Vertical) }}
                  ></p>
                  <p
                    className="h-2 w-6 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Vertical) }}
                  ></p>
                </div>
                <div>
                  <p
                    className="w-18 h-8 rounded"
                    style={{ background: getLayoutBg(ThemeLayout.Vertical) }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 text-base">显示面包屑</div>
          <div className="mb-2">
            <Switch
              checked={settings.showBreadcrumb}
              onChange={(checked) => setShowBreadcrumb(checked)}
            />
          </div>
          <div className="mb-2 text-base">显示浏览历史</div>
          <div className="mb-2">
            <Switch
              checked={settings.showHistoryPage}
              onChange={(checked) => setShowHistoryPage(checked)}
            />
          </div>
        </div>
      </Drawer>
    </>
  )
}
