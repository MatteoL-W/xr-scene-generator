import { IoDuplicate } from 'react-icons/io5'
import useDuplicate from '@/hooks/useDuplicate.jsx'

export default function DuplicateOpt() {
  const { duplicateFocusedObject } = useDuplicate()

  return (
    <IoDuplicate
      className='h-6 w-6 cursor-pointer'
      onClick={() => {
        duplicateFocusedObject()
      }}
    />
  )
}
