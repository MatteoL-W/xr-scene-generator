import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import useStore from '@/store/index.jsx'

/**
 * This hook is used to get the function modifying transform controls mode
 * @returns {function(string): void}
 */
export default function useTransformControlsHandler() {
  const [setStoreMode] = useStore((state) => [state.setTransformControlsMode])

  const focusedObjectData = useFocusedObjectData()
  const transformations = focusedObjectData?.transformations

  function setNewTransformControlMode(newMode) {
    if (
      (newMode === 'translate' && transformations?.position) ||
      (newMode === 'rotate' && transformations?.rotation) ||
      (newMode === 'scale' && transformations?.scale)
    ) {
      setStoreMode(newMode)
    }
  }

  return setNewTransformControlMode
}
