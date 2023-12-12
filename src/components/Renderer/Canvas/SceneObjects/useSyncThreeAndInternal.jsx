import useStore from '@/store/index.jsx'
import useThreeObject from '@/hooks/useThreeObject.jsx'
import { useEffect } from 'react'

export default function useSyncThreeAndInternal(object, objectComponentRef) {
  const [modifyObjectUUID, changeFocusedObjectByUUID] = useStore((state) => [
    state.modifyObjectUUID,
    state.changeFocusedObjectByUUID,
  ])
  const threeObject = useThreeObject(object.uuid)

  useEffect(() => {
    // Attach the three.js object to this object template if it's imported
    if (object.isImported && threeObject) {
      objectComponentRef?.current?.attach(threeObject)
      changeFocusedObjectByUUID(threeObject.uuid)
      return
    }

    // Else set the object uuid the same as R3F Object uuid
    modifyObjectUUID(object, objectComponentRef?.current?.uuid)

    changeFocusedObjectByUUID(objectComponentRef?.current?.uuid)
  }, []) // (do not add more dependencies)
}
