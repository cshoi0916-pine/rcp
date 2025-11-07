import * as L from "./listEntities"
import * as LO from "./listidOrders"
import * as LC from "./listidCardOrders"
import * as C from "./cardEntities"

export type AppState = {
  listEntities: L.State
  listidOrders: LO.State
  listidCardidOrder: LC.State
  cardEntities: C.State
}
