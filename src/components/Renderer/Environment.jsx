import { Environment as EnvironmentDrei } from '@react-three/drei'
import useImmersiveExperienceHandler from '@/hooks/useImmersiveExperienceHandler.jsx'
import useStore from '@/store/index.jsx'

export default function Environment() {
  const [skyboxPreset, skyboxFilesPreset, appearsAtTheGround] = useStore(
    (state) => [
      state.skyboxPreset,
      state.skyboxFilesPreset,
      state.appearsAtTheGround,
    ],
  )
  const { getImmersiveMode } = useImmersiveExperienceHandler()
  const immersiveMode = getImmersiveMode()
  const isBackgroundActivated = immersiveMode !== 'ar'

  if (!skyboxPreset && !skyboxFilesPreset) return

  return (
    <EnvironmentDrei
      background
      preset={!skyboxFilesPreset ? skyboxPreset : ''}
      files={skyboxFilesPreset}
      ground={appearsAtTheGround && isBackgroundActivated}
    />
  )
}
