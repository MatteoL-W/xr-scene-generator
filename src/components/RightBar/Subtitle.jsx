import PropTypes from 'prop-types'

export default function Subtitle({ title }) {
  return <h3 className='p-3 text-md'>{title}</h3>
}

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
}
