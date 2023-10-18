import { StatsGl } from '@react-three/drei'
import useStore from '@/store/index.jsx'
import { shallow } from 'zustand/shallow'

export default function Debug() {
  const [isDebuggerUIOpen] = useStore(
    (state) => [state.isDebuggerUIOpen],
    shallow,
  )

  if (isDebuggerUIOpen)
    return (
      <>
        <StatsGl className='!absolute !top-12' />
      </>
    )
}
