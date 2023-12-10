import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'

// ToDo: Optimize ?
export function useFocusedObjectData() {
  const [sceneObjects] = useStore(useShallow((state) => [state.sceneObjects]))
  const [focusedObjectUUID, resetFocusedObject] = useStore((state) => [
    state.focusedObjectUUID,
    state.resetFocusedObject,
  ])

  if (!sceneObjects || !focusedObjectUUID) return

  const focusedObject = sceneObjects.find(
    (object) => object.uuid === focusedObjectUUID,
  )
  if (!focusedObject) resetFocusedObject()

  return focusedObject
}

// ToDo: Remove ?
export function useFocusedObjectTransformationsData() {
  const focusedObject = useFocusedObjectData()
  if (focusedObject?.transformations) return focusedObject.transformations
}
