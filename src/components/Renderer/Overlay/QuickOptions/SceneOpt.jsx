import useStore from '@/store/index.jsx'
import { Vector3 } from 'three'
import { TbGizmo } from 'react-icons/tb'
import { BiGrid } from 'react-icons/bi'
import { PiFinnTheHumanFill } from 'react-icons/pi'
import { useMemo } from 'react'
import FocusControlsOpt from '@/components/Renderer/Overlay/QuickOptions/ControlsOpt/FocusControlsOpt.jsx'

export default function SceneOpt() {
  const [
    isGridOpen,
    setGridState,
    isAxesHelperOpen,
    isHumanSilhouetteAppearing,
    setAxisHelperState,
    setHumanSilhouetteState,
  ] = useStore((state) => [
    state.isGridOpen,
    state.setGridState,
    state.isAxesHelperOpen,
    state.isHumanSilhouetteAppearing,
    state.setAxisHelperState,
    state.setHumanSilhouetteState,
  ])
  const origin = useMemo(() => new Vector3(0, 0, 0), [])

  return (
    <div className='bg-jean text-white flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
      <BiGrid
        className='h-6 w-6 cursor-pointer'
        onClick={() => setGridState(!isGridOpen)}
      />
      <TbGizmo
        className='h-6 w-6 cursor-pointer'
        onClick={() => setAxisHelperState(!isAxesHelperOpen)}
      />
      <FocusControlsOpt position={origin} />
      <PiFinnTheHumanFill
        className='h-6 w-6 cursor-pointer'
        onClick={() => setHumanSilhouetteState(!isHumanSilhouetteAppearing)}
      />
    </div>
  )
}
