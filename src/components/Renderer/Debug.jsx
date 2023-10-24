import { StatsGl } from '@react-three/drei'
import useStore from '@/store/index.jsx'

export default function Debug() {
  const [isDebuggerUIOpen] = useStore((state) => [state.isDebuggerUIOpen])

  if (isDebuggerUIOpen)
    return (
      <>
        <StatsGl className='!absolute !top-12' />
      </>
    )
}
