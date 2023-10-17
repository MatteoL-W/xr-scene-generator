import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { BsFillBoxFill } from 'react-icons/bs'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import PropTypes from 'prop-types'

MeshInList.propTypes = {
  mesh: PropTypes.object.isRequired,
}

export default function MeshInList({ mesh }) {
  const [
    removeContentFromScene,
    focusedMeshUUID,
    changeFocusedMeshUUID,
    modifyMeshArgs,
  ] = useStore(
    (state) => [
      state.removeMeshFromScene,
      state.focusedMeshUUID,
      state.changeFocusedMeshUUID,
      state.modifyMeshArgs,
    ],
    shallow,
  )
  const meshIsVisible = mesh.args.visible

  function toggleItem(uuid) {
    if (meshIsVisible)
      changeFocusedMeshUUID(focusedMeshUUID === uuid ? '' : uuid)
  }

  function toggleMeshVisibility() {
    // Reset focused mesh when it's set on invisible
    if (meshIsVisible && focusedMeshUUID === mesh.uuid)
      changeFocusedMeshUUID('')

    modifyMeshArgs(mesh.uuid, {
      visible: !meshIsVisible,
    })
  }

  return (
    <li className='flex items-center gap-3'>
      <BsFillBoxFill
        className={`cursor-pointer text-lg ${
          meshIsVisible ? 'text-white' : 'text-gray-400'
        }`}
        onClick={toggleMeshVisibility}
      />
      <span onClick={() => toggleItem(mesh.uuid)}>{mesh.name}</span>
      <div className='flex items-center text-xl gap-x-2'>
        <MdOutlineDriveFileRenameOutline />
        <AiFillDelete
          className='cursor-pointer'
          onClick={() => removeContentFromScene(mesh)}
        />
      </div>
    </li>
  )
}
