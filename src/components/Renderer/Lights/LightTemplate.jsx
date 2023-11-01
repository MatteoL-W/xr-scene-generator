import { Fragment, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { getLightComponent } from '@/utils/getComponents.js'
import DirectionalLightWrapper from '@/components/Renderer/Lights/DirectionalLightWrapper.jsx'
import SpotLightWrapper from '@/components/Renderer/Lights/SpotLightWrapper.jsx'
import PointLightWrapper from '@/components/Renderer/Lights/PointLightWrapper.jsx'

export default function LightTemplate({ light }) {
  const [modifyLightUUID] = useStore((state) => [state.modifyLightUUID])
  const LightComponent = useMemo(
    () => getLightComponent(light.component),
    [light.component],
  )
  const lightComponentRef = useRef(null)

  useEffect(() => {
    modifyLightUUID(light, lightComponentRef?.current?.uuid)
  }, [])

  const LightWrapper =
    {
      DirectionalLight: DirectionalLightWrapper,
      SpotLight: SpotLightWrapper,
      PointLight: PointLightWrapper,
    }[light.component] || Fragment

  return (
    <LightWrapper lightRef={lightComponentRef}>
      <LightComponent
        ref={lightComponentRef}
        {...light.args}
        {...light.material}
        {...light.transformations}
      />
    </LightWrapper>
  )
}

LightTemplate.propTypes = {
  light: PropTypes.object.isRequired,
}
