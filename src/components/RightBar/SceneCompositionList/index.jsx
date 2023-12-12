import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import { useTranslation } from 'react-i18next'
import Title from '../Title.jsx'
import { GiMeshBall } from 'react-icons/gi'
import ObjectRow from './ObjectRow.jsx'
import { AiFillDelete } from 'react-icons/ai'

export default function SceneCompositionList() {
  const { t } = useTranslation()
  const [sceneObjects] = useStore(useShallow((state) => [state.sceneObjects]))
  const [setMenuState, resetScene] = useStore((state) => [
    state.setMenuState,
    state.resetScene,
  ])

  if (sceneObjects.length === 0)
    return <Title title={t('right.list.addToStart')} />

  return (
    <div className='border-b border-b-white'>
      <div className='relative'>
        <Title
          title={t('right.list.title')}
          Icon={GiMeshBall}
          onClick={() => setMenuState(true)}
        />

        <div className='absolute top-0 right-2 h-full flex items-center text-xl'>
          <AiFillDelete
            className='cursor-pointer'
            onClick={() => resetScene()}
          />
        </div>
      </div>

      <ul className='px-5 py-3 leading-8 max-h-32 overflow-y-scroll'>
        {sceneObjects.map((object) => {
          if (!object.uuid) return
          return <ObjectRow key={object.uuid} object={object} />
        })}
      </ul>
    </div>
  )
}
