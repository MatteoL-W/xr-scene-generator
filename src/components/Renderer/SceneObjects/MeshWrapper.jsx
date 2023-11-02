import PropTypes from 'prop-types'

MeshWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line no-unused-vars
export default function MeshWrapper({ object, objectRef, children }) {
  return <>{children}</>
}
