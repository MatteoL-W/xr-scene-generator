import PropTypes from 'prop-types'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import Title from '../Title.jsx'
import { GiMeshBall } from 'react-icons/gi'
import { BsFillBoxFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'

export default function SceneCompositionList() {
  const [sceneMeshes] = useStore((state) => [state.sceneMeshes], shallow)

  if (sceneMeshes.length === 0) {
    return <Title title='Try adding components with A' />
  }

  return (
    <div className='border-b border-b-white'>
      <Title title='Scene Composition' Icon={GiMeshBall} />
      <ul className='px-5 py-3 leading-8'>
        {sceneMeshes.map((mesh) => {
          if (!mesh.uuid) return
          return <MeshInList key={mesh.uuid} mesh={mesh} />
        })}
      </ul>
    </div>
  )
}

MeshInList.propTypes = {
  mesh: PropTypes.object.isRequired,
}

function MeshInList({ mesh }) {
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
      <div className='flex items-center'>
        <MdOutlineDriveFileRenameOutline />
        <AiFillDelete
          className='cursor-pointer'
          onClick={() => removeContentFromScene(mesh)}
        />
      </div>
    </li>
  )
}
