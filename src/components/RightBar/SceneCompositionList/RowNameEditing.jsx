import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { useRef } from 'react'

RowNameEditing.propTypes = {
  object: PropTypes.object.isRequired,
  editing: PropTypes.bool.isRequired,
  resetEditingState: PropTypes.func.isRequired,
}

export default function RowNameEditing({ object, editing, resetEditingState }) {
  const [focusedObjectUUID, changeFocusedObjectUUID, modifyObjectName] =
    useStore((state) => [
      state.focusedObjectUUID,
      state.changeFocusedObjectUUID,
      state.modifyObjectName,
    ])
  const newNameInput = useRef()

  function toggleItem(uuid) {
    if (object.args.visible)
      changeFocusedObjectUUID(focusedObjectUUID === uuid ? '' : uuid)
  }

  function saveName(e) {
    e.preventDefault()
    modifyObjectName(object.uuid, newNameInput.current.value)
    resetEditingState()
  }

  return (
    <>
      <span
        onClick={() => toggleItem(object.uuid)}
        className={editing ? 'hidden' : 'block'}
      >
        {object.userSetName}
      </span>

      <form onSubmit={saveName}>
        <input
          type='text'
          name='editobjectName'
          defaultValue={object.userSetName}
          className={editing ? 'block' : 'hidden'}
          ref={newNameInput}
        />
      </form>
    </>
  )
}
