import SceneOpt from './SceneOpt.jsx'
import ControlsOpt from './ControlsOpt.jsx'
import useStore from '@/store/index.jsx'
import { shallow } from 'zustand/shallow'

export default function QuickOptions() {
  const [focusedMeshUUID] = useStore(
    (state) => [state.focusedMeshUUID],
    shallow,
  )

  return (
    <div className='absolute z-10 right-4 top-4 flex flex-col gap-y-3'>
      <SceneOpt />
      {focusedMeshUUID && <ControlsOpt />}
    </div>
  )
}
