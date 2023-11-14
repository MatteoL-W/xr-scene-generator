import PropTypes from 'prop-types'

export default function Subtitle({ title }) {
  return <h3 className='px-3 pt-3 pb-2 text-md capitalize'>{title}</h3>
}

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
}
