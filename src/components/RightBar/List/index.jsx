import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import Title from '../Title.jsx'
import { GiMeshBall } from 'react-icons/gi'
import MeshInList from './MeshInList.jsx'

export default function SceneCompositionList() {
  const [sceneMeshes] = useStore(useShallow((state) => [state.sceneMeshes]))
  const [setMeshListState] = useStore((state) => [state.setMeshListState])

  if (sceneMeshes.length === 0) {
    return (
      <div onClick={() => setMeshListState(true)}>
        <Title title='Add meshes with A or by clicking here' />
      </div>
    )
  }

  return (
    <div className='border-b border-b-white'>
      <Title title='Scene Composition' Icon={GiMeshBall} />
      <ul className='px-5 py-3 leading-8 max-h-32 overflow-y-scroll'>
        {sceneMeshes.map((mesh) => {
          if (!mesh.uuid) return
          return <MeshInList key={mesh.uuid} mesh={mesh} />
        })}
      </ul>
    </div>
  )
}
