import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import { Vector3 } from 'three'

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

export function useFocusedObjectPosition() {
  const focusedObject = useFocusedObjectData()
  if (focusedObject)
    return new Vector3(...focusedObject.transformations.position)
}
