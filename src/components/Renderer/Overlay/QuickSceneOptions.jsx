import { TbGizmo } from 'react-icons/tb'
import { BiGrid } from 'react-icons/bi'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'

export default function QuickSceneOptions() {
  const [isGridOpen, setGridState, isAxesHelperOpen, setAxisHelperState] =
    useStore(
      (state) => [
        state.isGridOpen,
        state.setGridState,
        state.isAxesHelperOpen,
        state.setAxisHelperState,
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
    </div>
  )
}