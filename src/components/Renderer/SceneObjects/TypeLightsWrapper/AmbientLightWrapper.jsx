import PropTypes from 'prop-types'

AmbientLightWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  lightRef: PropTypes.object.isRequired,
}

// eslint-disable-next-line no-unused-vars
export default function AmbientLightWrapper({ children, lightRef }) {
  return <>{children}</>
}
