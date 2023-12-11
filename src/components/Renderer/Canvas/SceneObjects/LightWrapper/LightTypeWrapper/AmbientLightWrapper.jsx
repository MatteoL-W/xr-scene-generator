import PropTypes from 'prop-types'

AmbientLightWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  lightRef: PropTypes.object.isRequired,
}

export default function AmbientLightWrapper({ children, lightRef }) {
  return <>{children}</>
}
