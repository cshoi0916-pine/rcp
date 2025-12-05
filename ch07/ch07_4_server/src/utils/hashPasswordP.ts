import {rejects} from "assert"
import bcrypt from "bcrypt"
import {resolve} from "path"
const saltRounds = 10

export const hashPasswordP = (password: string) =>
  new Promise<string>(async (resolve, reject) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hash = await bcrypt.hash(password, salt)
      resolve(hash)
    } catch (e) {
      reject(e)
    }
  })

export const comparePasswordP = (password: string, hashPasswordP: string) =>
  new Promise<boolean>(async (resolve, reject) => {
    try {
      const result = await bcrypt.compare(password, hashPasswordP)
      resolve(result)
    } catch (e) {
      reject(e)
    }
  })
