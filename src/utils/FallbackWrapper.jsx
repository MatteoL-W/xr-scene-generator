import PropTypes from 'prop-types'

// Use this wrapper only when you can't use React Fragment (when you give props for example)
const FallbackWrapper = ({ children }) => children

FallbackWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FallbackWrapper
