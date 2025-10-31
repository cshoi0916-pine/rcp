import {useMemo} from "react"
import

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
