import PropTypes from 'prop-types'

export default function ContentModifier({ scenePiece }) {
  return (
    <div className='pt-2'>
      Focused scene piece: <span>{scenePiece.args.position}</span>
    </div>
  )
}

ContentModifier.propTypes = {
  scenePiece: PropTypes.object.isRequired,
}
