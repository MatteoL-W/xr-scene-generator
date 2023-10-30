import Actions from '@/components/Renderer/Overlay/QuickOptions/Actions.jsx'
import SceneOpt from './SceneOpt.jsx'
import ControlsOpt from './ControlsOpt.jsx'
import useStore from '@/store/index.jsx'

export default function QuickOptions() {
  const [focusedMeshUUID] = useStore((state) => [state.focusedMeshUUID])

  return (
    <div className='absolute z-10 right-4 top-4 flex flex-col gap-y-3'>
      <Actions />
      <SceneOpt />
      {focusedMeshUUID && <ControlsOpt />}
    </div>
  )
}
