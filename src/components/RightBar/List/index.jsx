import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import Title from '../Title.jsx'
import { GiMeshBall } from 'react-icons/gi'
import ObjectRow from './ObjectRow.jsx'

export default function SceneCompositionList() {
  const [sceneObjects] = useStore(useShallow((state) => [state.sceneObjects]))
  const [setMenuState] = useStore((state) => [state.setMenuState])

  if (sceneObjects.length === 0) {
    return (
      <div onClick={() => setMenuState(true)}>
        <Title title='Add objects with A or by clicking here' />
      </div>
    )
  }

  return (
    <div className='border-b border-b-white'>
      <Title
        title='Scene Composition'
        Icon={GiMeshBall}
        onClick={() => setMenuState(true)}
      />

      <ul className='px-5 py-3 leading-8 max-h-32 overflow-y-scroll'>
        {sceneObjects.map((object) => {
          if (!object.uuid) return
          return <ObjectRow key={object.uuid} object={object} />
        })}
      </ul>
    </div>
  )
}
