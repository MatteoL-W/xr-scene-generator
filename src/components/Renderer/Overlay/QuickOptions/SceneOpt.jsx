import { TbFocusCentered, TbGizmo } from 'react-icons/tb'
import { BiGrid } from 'react-icons/bi'
import useStore from '@/store/index.jsx'
import { shallow } from 'zustand/shallow'
import { Vector3 } from 'three'

export default function SceneOpt() {
  const [
    isGridOpen,
    setGridState,
    isAxesHelperOpen,
    setAxisHelperState,
    setNewCameraDirectionInstruction,
  ] = useStore(
    (state) => [
      state.isGridOpen,
      state.setGridState,
      state.isAxesHelperOpen,
      state.setAxisHelperState,
      state.setNewCameraDirectionInstruction,
    ],
    shallow,
  )

  return (
    <div className='bg-coalblue text-white flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
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
    </div>
  )
}
