import PropTypes from 'prop-types'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { useRef } from 'react'

NameDisplay.propTypes = {
  mesh: PropTypes.object.isRequired,
  editing: PropTypes.bool.isRequired,
  resetEditingState: PropTypes.func.isRequired,
}

export default function NameDisplay({ mesh, editing, resetEditingState }) {
  const [focusedMeshUUID, changeFocusedMeshUUID, modifyMeshName] = useStore(
    (state) => [
      state.focusedMeshUUID,
      state.changeFocusedMeshUUID,
      state.modifyMeshName,
    ],
    shallow,
  )
  const newNameInput = useRef()

  function toggleItem(uuid) {
    if (mesh.args.visible)
      changeFocusedMeshUUID(focusedMeshUUID === uuid ? '' : uuid)
  }

  function saveName(e) {
    e.preventDefault()
    modifyMeshName(mesh.uuid, newNameInput.current.value)
    resetEditingState()
  }

  return (
    <>
      <span
        onClick={() => toggleItem(mesh.uuid)}
        className={editing ? 'hidden' : 'block'}
      >
        {mesh.userSetName}
      </span>

      <form onSubmit={saveName}>
        <input
          type='text'
          defaultValue={mesh.userSetName}
          className={editing ? 'block' : 'hidden'}
          ref={newNameInput}
        />
      </form>
    </>
  )
}
