import {getServerUrl} from "./getServerUrl"

const getAndDel =
  (methodName: string, jwt?: string | null | undefined) =>
  (path: string, jwt?: string | null | undefined) => {
    let headers = {"Content-Type": "application/json"}
    let init: RequestInit = {
      method: methodName
    }
    if (jwt) {
      init = {
        ...init,
        headers: {...headers, Authorization: `Bearer ${jwt}`}
      }
    } else init = {...init, headers}
    return fetch(getServerUrl(path), init)
  }

export const get = (path: string) => fetch(getServerUrl(path))
export const del = (path: string) => fetch(getServerUrl(path), {method: "DELETE"})
