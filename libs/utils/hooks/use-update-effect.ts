import { useEffect, useRef } from 'react'

/**
 *
 * @returns useUpdateEffect Hook, uses the useEffect and useRef hook and ignores the first invocation (e.g. on mount).
 * The signature is exactly the same as the useEffect hook.
 */

function useFirstMountState(): boolean {
  const isFirst = useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState()

  useEffect(() => {
    if (!isFirstMount) {
      return effect()
    }
  }, deps)
}

export default useUpdateEffect
