import useStore from '@/store/index.jsx'
import { Vector3 } from 'three'
import { TbFocusCentered, TbGizmo } from 'react-icons/tb'
import { BiGrid } from 'react-icons/bi'
import { MdOutlineFlipCameraIos } from 'react-icons/md'
import { PiFinnTheHumanFill } from 'react-icons/pi'

export default function SceneOpt() {
  const [
    isGridOpen,
    setGridState,
    isAxesHelperOpen,
    isHumanSilhouetteAppearing,
    setAxisHelperState,
    setNewCameraDirectionInstruction,
    setHumanSilhouetteState,
  ] = useStore((state) => [
    state.isGridOpen,
    state.setGridState,
    state.isAxesHelperOpen,
    state.isHumanSilhouetteAppearing,
    state.setAxisHelperState,
    state.setNewCameraDirectionInstruction,
    state.setHumanSilhouetteState,
  ])

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
      <TbFocusCentered
        className='h-6 w-6 cursor-pointer'
        onClick={() => setNewCameraDirectionInstruction(new Vector3(0, 0, 0))}
      />
      <PiFinnTheHumanFill
        className='h-6 w-6 cursor-pointer'
        onClick={() => setHumanSilhouetteState(!isHumanSilhouetteAppearing)}
      />
    </div>
  )
}
