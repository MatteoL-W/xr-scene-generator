import PropTypes from 'prop-types'
import GenerateAutomaticInput from '../services/GenerateAutomaticInput.jsx'

export default function ContentModifier({ scenePiece }) {
  return (
    <div className='pt-2'>
      {Object.entries(scenePiece.args).map(([key, value]) => (
        <GenerateAutomaticInput
          key={key}
          label={key}
          value={value}
          scenePiece={scenePiece}
        />
      ))}
    </div>
  )
}

ContentModifier.propTypes = {
  scenePiece: PropTypes.object.isRequired,
}
