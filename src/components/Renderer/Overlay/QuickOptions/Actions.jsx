import { CgRedo, CgUndo } from 'react-icons/cg'
import { useHistoric } from '@/hooks/useHistoric.jsx'

export default function Actions() {
  const { undo, redo } = useHistoric()

  return (
    <div className='bg-jean text-white flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
      <CgUndo className='h-6 w-6 cursor-pointer' onClick={undo} />
      <CgRedo className='h-6 w-6 cursor-pointer' onClick={redo} />
    </div>
  )
}
