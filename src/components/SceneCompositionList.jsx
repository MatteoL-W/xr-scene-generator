import PropTypes from 'prop-types'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import ModifiersTitle from './ModifiersTitle.jsx'
import { GiMeshBall } from 'react-icons/gi'
import { BsFillBoxFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'

export default function SceneCompositionList() {
  const [sceneMeshes] = useSceneStore((state) => [state.sceneMeshes], shallow)

  if (sceneMeshes.length === 0) {
    return <ModifiersTitle title='Try adding components with A' />
  }

  return (
    <div className='border-b border-b-white'>
      <ModifiersTitle title='Scene Composition' Icon={GiMeshBall} />
      <ul className='px-5 py-3 leading-8'>
        {sceneMeshes.map((scenePiece) => {
          if (!scenePiece.uuid) return
          return <MeshInList key={scenePiece.uuid} mesh={scenePiece} />
        })}
      </ul>
    </div>
  )
}

MeshInList.propTypes = {
  mesh: PropTypes.object.isRequired,
}

function MeshInList({ mesh }) {
  const [removeContentFromScene, focusedMeshUUID, changeFocusedMesh] =
    useSceneStore(
      (state) => [
        state.removeMeshFromScene,
        state.focusedMeshUUID,
        state.changeFocusedMesh,
      ],
      shallow,
    )

  function toggleItem(uuid) {
    changeFocusedMesh(focusedMeshUUID === uuid ? '' : uuid)
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
