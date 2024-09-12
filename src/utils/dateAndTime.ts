import dayjs from "dayjs"

export const weekDay = (date: string) => {
  return dayjs(date).format("dddd")
}

export const dateInFull = (date: string) => {
  return dayjs(date).format("D [de] MMMM")
}

export const time = (date: string) => {
  return dayjs(date).format("HH:mm")
}
