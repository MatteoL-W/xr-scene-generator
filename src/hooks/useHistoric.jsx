import useStore from '@/store/index.jsx'
import { useFocusedObjectTransformationsData } from '@/hooks/useFocusedObjectData.jsx'

export function useHistoric() {
  const [
    undo,
    redo,
    saveActionInHistoric,
    hasSynchronousHistoric,
    modifyObject,
    focusedObjectUUID,
  ] = useStore((state) => [
    state.undo,
    state.redo,
    state.saveActionInHistoric,
    state.hasSynchronousHistoric,
    state.modifyObject,
    state.focusedObjectUUID,
  ])
  const focusedObjectTransformations = useFocusedObjectTransformationsData()

  function saveFocusedObjectTransformations() {
    saveActionInHistoric(() => {
      modifyObject(
        { transformations: focusedObjectTransformations },
        focusedObjectUUID,
      )
    })
  }

  function undoAction() {
    if (hasSynchronousHistoric()) {
      saveFocusedObjectTransformations()
      undo()
    }
    undo()
  }

  function redoAction() {
    redo()
  }

  return {
    saveFocusedObjectTransformations,
    undo: undoAction,
    redo: redoAction,
  }
}
