import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ContentModifier() {
  const { focusedScenePiece } = useSceneStore(
    (state) => ({
      focusedScenePiece: state.focusedScenePiece,
    }),
    shallow,
  )

  if (!focusedScenePiece) return <></>

  return (
    <div className='pt-2'>
      Focused scene piece:{' '}
      <span className='font-bold'>{focusedScenePiece.name}</span>
    </div>
  )
}
