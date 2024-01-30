'use server'
import { log } from '@logtail/next'

export const error = async (message: string, stack: any) => {
  log.error(message, stack)
}
