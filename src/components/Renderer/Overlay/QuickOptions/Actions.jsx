import { CgRedo, CgUndo } from 'react-icons/cg'
import useStore from '@/store/index.jsx'

export default function Actions() {
  const [undo, redo] = useStore((state) => [state.undo, state.redo])

  return (
    <div className='bg-coalblue text-white flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
      <CgUndo className='h-6 w-6 cursor-pointer' onClick={undo} />
      <CgRedo className='h-6 w-6 cursor-pointer' onClick={redo} />
    </div>
  )
}
