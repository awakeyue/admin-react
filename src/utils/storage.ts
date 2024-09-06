import { StroageEnum } from '#/enum'

export const setItem = <T>(key: StroageEnum, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error setting item: ${error}`)
  }
}
export const getItem = <T>(key: StroageEnum): T | null => {
  const result = localStorage.getItem(key)
  if (result === null) return null
  try {
    return JSON.parse(result) as T
  } catch (error) {
    console.error(`Error getting item: ${error}`)
    return null
  }
}
export const removeItem = (key: StroageEnum) => {
  localStorage.removeItem(key)
}
export const clear = () => {
  localStorage.clear()
}
