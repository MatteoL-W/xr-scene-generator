import { useEffect, useState } from 'react'

/**
 * Returns a value debounced by the given delay
 * @param value
 * @param delay
 * @returns {any}
 */
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
