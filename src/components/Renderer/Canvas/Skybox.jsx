import { Environment } from '@react-three/drei'
import useImmersiveExperienceHandler from '@/hooks/useImmersiveExperienceHandler.jsx'
import useStore from '@/store/index.jsx'

export default function Skybox() {
  const [skyboxPreset, skyboxFilesPreset, hasEnvironmentLight] = useStore(
    (state) => [
      state.skyboxPreset,
      state.skyboxFilesPreset,
      state.hasEnvironmentLight,
    ],
  )
  const { getImmersiveMode } = useImmersiveExperienceHandler()
  const immersiveMode = getImmersiveMode()
  const isBackgroundActivated = immersiveMode !== 'ar'

  if (!skyboxPreset && !skyboxFilesPreset) return

  const backgroundValue = hasEnvironmentLight ? true : 'only'
  const presetValue = !skyboxFilesPreset ? skyboxPreset : ''

  return (
    <Environment
      preset={presetValue}
      files={skyboxFilesPreset}
      background={backgroundValue}
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
