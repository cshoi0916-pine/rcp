import {Dispatch} from "redux"
import {setLoading} from "./actions"

export const doTimeLoading =
  (duration: number = 3 * 1000) =>
  (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    const timeId = setTimeout(() => {
      clearTimeout(timeId)
      dispatch(setLoading(false))
    }, duration)
  }
