import useStore from '@/store/index.jsx'
import { useThree } from '@react-three/fiber'
import { StatsGl } from '@react-three/drei'
import { logDebugReport } from '@/utils/debugReport.js'

export default function Debug() {
  const [isDebuggerUIOpen, isWaitingForDebugReport, stopWaitingForDebugReport] =
    useStore((state) => [
      state.isDebuggerUIOpen,
      state.isWaitingForDebugReport,
      state.stopWaitingForDebugReport,
    ])
  const { camera, controls, scene } = useThree()

  if (!isDebuggerUIOpen) return <></>

  if (isWaitingForDebugReport) {
    logDebugReport({ camera, controls, scene })
    stopWaitingForDebugReport()
  }

  return <StatsGl className='!absolute !top-12' />
}
