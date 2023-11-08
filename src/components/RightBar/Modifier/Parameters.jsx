import Subtitle from '../Subtitle.jsx'
import PropTypes from 'prop-types'
import GenerateAutomaticInput from '@/services/GenerateAutomaticInput.jsx'

Parameters.propTypes = {
  parameters: PropTypes.object,
}

export default function Parameters({ parameters }) {
  if (!parameters) return

  return (
    <>
      <Subtitle title='Parameters' />

      <div className='p-3 pt-0 flex flex-col my-2'>
        <div className='grid grid-cols-4 w-[95%] items-center gap-3'>
          {Object.entries(parameters).map(([propertyLabel, propertyValue]) => {
            return (
              <GenerateAutomaticInput
                key={propertyLabel}
                repository='parameters'
                propertyLabel={propertyLabel}
                propertyValue={propertyValue}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
