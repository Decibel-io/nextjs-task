import { Any } from '@app/types'
import { useState } from 'react'

export default function useMultiState(initialState: Any) {
  const [state, setState] = useState(initialState)

  /* It takes a value and a key, and if the key is present, it sets the state to the value of the key,
   * otherwise it sets the state to the value */
  const setMultiState = (value: Any, key?: string) => {
    if (key) {
      setState((prev: Any) => ({ ...prev, [key]: value }))
    } else {
      setState(value)
    }
  }

  const resetState = () => {
    setState(initialState)
  }

  return {
    multiState: state,
    resetState,
    setMultiState,
  }
}
