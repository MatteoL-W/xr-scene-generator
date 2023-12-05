import { Environment as EnvironmentDrei } from '@react-three/drei'
import useImmersiveExperienceHandler from '@/hooks/useImmersiveExperienceHandler.jsx'
import useStore from '@/store/index.jsx'

export default function Environment() {
  const [skyboxPreset, skyboxFilesPreset] = useStore((state) => [
    state.skyboxPreset,
    state.skyboxFilesPreset,
  ])
  const { getImmersiveMode } = useImmersiveExperienceHandler()
  const immersiveMode = getImmersiveMode()
  const isBackgroundActivated = immersiveMode !== 'ar'

  if (!skyboxPreset && !skyboxFilesPreset) return

  return (
    <EnvironmentDrei
      preset={!skyboxFilesPreset ? skyboxPreset : ''}
      files={skyboxFilesPreset}
      ground={
        isBackgroundActivated && {
          height: 15, // Height of the camera that was used to create the env map (Default: 15)
          radius: 60, // Radius of the world. (Default 60)
          scale: 100, // Scale of the backside projected sphere that holds the env texture (Default: 100)
        }
      }
    />
  )
}
