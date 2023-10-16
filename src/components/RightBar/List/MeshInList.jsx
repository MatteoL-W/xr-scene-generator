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
  const [removeContentFromScene, focusedMeshUUID, changeFocusedMeshUUID] =
    useStore(
      (state) => [
        state.removeMeshFromScene,
        state.focusedMeshUUID,
        state.changeFocusedMeshUUID,
      ],
      shallow,
    )

  function toggleItem(uuid) {
    changeFocusedMeshUUID(focusedMeshUUID === uuid ? '' : uuid)
  }

  return (
    <li className='flex items-center gap-3'>
      <BsFillBoxFill className='text-lg' />
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
