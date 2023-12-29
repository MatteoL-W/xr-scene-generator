import useStore from '@/store/index.jsx'
import { useXR } from '@react-three/xr'

/**
 * This hook is used to get the current immersive experience mode
 * @returns {{getImmersiveMode}}
 */
export default function useImmersiveExperienceHandler() {
  const { isPresenting } = useXR()
  const [immersiveMode] = useStore((state) => [state.immersiveExperienceMode])

  function get() {
    return isPresenting ? immersiveMode : null
  }

  return { getImmersiveMode: get }
}
