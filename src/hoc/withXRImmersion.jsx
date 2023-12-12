import { useXR } from '@react-three/xr'
import PropTypes from 'prop-types'

export function withXRImmersion({
  Component,
  insideXR,
  returnChildrenElse = false,
}) {
  WithXRImmersionHOC.propTypes = {
    children: PropTypes.node,
  }

  function WithXRImmersionHOC(props) {
    const { isPresenting } = useXR()
    const returnedValueOutsideXR = returnChildrenElse ? props.children : null

    return isPresenting === insideXR ? (
      <Component {...props} />
    ) : (
      returnedValueOutsideXR
    )
  }

  return WithXRImmersionHOC
}
