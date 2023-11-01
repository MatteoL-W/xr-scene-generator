import NameDisplay from './NameDisplay.jsx'
import { useState } from 'react'
import useStore from '@/store/index.jsx'
import { BsFillBoxFill } from 'react-icons/bs'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import PropTypes from 'prop-types'

MeshInList.propTypes = {
  mesh: PropTypes.object.isRequired,
}

export default function MeshInList({ mesh }) {
  const [
    removeMeshFromScene,
    focusedMeshUUID,
    changeFocusedMeshUUID,
    modifyMeshArgs,
  ] = useStore((state) => [
    state.removeMeshFromScene,
    state.focusedMeshUUID,
    state.changeFocusedMeshUUID,
    state.modifyMeshArgs,
  ])
  const [isRenaming, setIsRenaming] = useState(false)
  const meshIsVisible = mesh.args.visible

  function toggleMeshVisibility() {
    // Reset focused mesh when it's set on invisible
    if (meshIsVisible && focusedMeshUUID === mesh.uuid)
      changeFocusedMeshUUID('')

    modifyMeshArgs(mesh.uuid, {
      visible: !meshIsVisible,
    })
  }

  function activateRenaming() {
    setIsRenaming(true)
  }

  return (
    <li className='flex items-center gap-3'>
      <BsFillBoxFill
        className={`cursor-pointer text-lg ${
          meshIsVisible ? 'text-white' : 'text-gray-400'
        }`}
        onClick={toggleMeshVisibility}
      />

      <NameDisplay
        mesh={mesh}
        editing={isRenaming}
        resetEditingState={() => setIsRenaming(false)}
      />

      <div className='flex items-center text-xl gap-x-2'>
        <MdOutlineDriveFileRenameOutline onClick={activateRenaming} />

        <AiFillDelete
          className='cursor-pointer'
          onClick={() => removeMeshFromScene(mesh)}
        />
      </div>
    </li>
  )
}
