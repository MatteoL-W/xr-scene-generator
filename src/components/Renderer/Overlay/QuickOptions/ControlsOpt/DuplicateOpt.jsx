import { IoDuplicate } from 'react-icons/io5'
import useDuplicate from '@/hooks/useDuplicate.jsx'

export default function DuplicateOpt() {
  const { duplicateCurrentObject } = useDuplicate()

  return (
    <IoDuplicate
      className='h-6 w-6 cursor-pointer'
      onClick={() => {
        duplicateCurrentObject()
      }}
    />
  )
}
