import { useEffect, useRef } from 'react'

/**
 * Returns a ref that can be used to execute callback on outside clicks
 * @param callback
 * @returns {React.MutableRefObject<undefined>}
 */
export default function useOutsideClick(callback) {
  const ref = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current?.contains(event.target)) callback()
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [callback, ref])

  return ref
}
