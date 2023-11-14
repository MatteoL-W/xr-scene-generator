import Subtitle from '../Subtitle.jsx'
import PropTypes from 'prop-types'
import GenerateAutomaticInput from '@/services/GenerateAutomaticInput.jsx'

Shadows.propTypes = {
  args: PropTypes.object.isRequired,
}

export default function Shadows({ args }) {
  return (
    <>
      <Subtitle title='Shadows' />

      <div className='p-3 pt-0 flex gap-y-2 justify-between'>
        {Object.entries(args).map(([propertyLabel, propertyValue]) => {
          return (
            <GenerateAutomaticInput
              key={propertyLabel}
              repository='args'
              propertyLabel={propertyLabel}
              propertyValue={propertyValue}
            />
          )
        })}
      </div>
    </>
  )
}
