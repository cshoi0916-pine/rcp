import type {Action} from "redux"
import type {UUID} from "../commonTypes"
export * from "../commonTypes"

export type State = UUID[]

export type SetListidOrders = Action<"@listidOrders/set"> & {
  payload: State
}
export type AddListidOrders = Action<"@listidOrders/add"> & {
  payload: UUID
}
export type RemoveListidOrders = Action<"@listidOrders/remove"> & {
  payload: UUID
}

export type Actions = SetListidOrders | AddListidOrders | RemoveListidOrders
