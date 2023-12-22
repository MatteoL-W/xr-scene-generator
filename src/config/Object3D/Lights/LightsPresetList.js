import { AmbientLightPreset } from './AmbientLight/AmbientLightPreset.jsx'
import { DirectionalLightPreset } from './DirectionalLight/DirectionalLightPreset.jsx'
import { PointLightPreset } from './PointLight/PointLightPreset.jsx'
import { SpotLightPreset } from './SpotLight/SpotLightPreset.jsx'

const lightsPresetList = [
  AmbientLightPreset,
  DirectionalLightPreset,
  PointLightPreset,
  SpotLightPreset,
]

export default lightsPresetList
