import PropTypes from 'prop-types'

export default function ModifiersTitle({ Icon, title }) {
  return (
    <div className='w-full px-3 flex items-center gap-2 h-10 border-b border-b-coalblue'>
      {Icon ? <Icon className='w-5 h-full' /> : <></>}
      <h2 className='text-lg'>{title}</h2>
    </div>
  )
}

ModifiersTitle.propTypes = {
  Icon: PropTypes.func,
  title: PropTypes.string.isRequired,
}
