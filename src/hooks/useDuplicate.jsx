import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import useStore from '@/store/index.jsx'

/**
 * This hook is used to duplicate the focused object in the scene
 * @returns {{duplicateFocusedObject}}
 */
export default function useDuplicate() {
  const [addObjectToScene] = useStore((state) => [state.addObjectToScene])
  const focusedObject = useFocusedObjectData()

  function duplicateFocusedObject() {
    if (!focusedObject) return

    const focusedObjectCopy = { ...focusedObject }
    delete focusedObjectCopy.uuid
    addObjectToScene(focusedObjectCopy)
  }

  return {
    duplicateFocusedObject,
  }
}
