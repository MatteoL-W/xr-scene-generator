import { StatsGl } from '@react-three/drei'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'

export default function Debug() {
  const [isDebuggerUIOpen] = useStore(
    useShallow((state) => [state.isDebuggerUIOpen]),
  )

  if (isDebuggerUIOpen)
    return (
      <>
        <StatsGl className='!absolute !top-12' />
      </>
    )
}
