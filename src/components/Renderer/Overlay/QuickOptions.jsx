import { TbGizmo } from 'react-icons/tb'
import { BiGrid } from 'react-icons/bi'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'

export default function QuickOptions() {
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
    <div className='absolute z-10 bg-coalblue text-white right-4 top-4 flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
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
