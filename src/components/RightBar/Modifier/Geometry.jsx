import Subtitle from '../Subtitle.jsx'
import PropTypes from 'prop-types'
import GenerateAutomaticInput from '@/services/GenerateAutomaticInput.jsx'

// ToDo: Performance issue : we loop on position, rotation and scale so when 1 is updated,
//  the whole 3 are being rendered in the children components

Geometry.propTypes = {
  transformations: PropTypes.object.isRequired,
}

export default function Geometry({ transformations }) {
  return (
    <>
      <Subtitle title='Geometry' />

      <div className='p-3 pt-0 flex flex-col gap-y-2'>
        <div className='grid grid-cols-4 w-[95%] text-xs'>
          <div></div>
          <div className='text-center'>X</div>
          <div className='text-center'>Y</div>
          <div className='text-center'>Z</div>
        </div>

        {Object.entries(transformations).map(
          ([propertyLabel, propertyValue]) => (
            <div className='grid grid-cols-4 gap-3 w-[95%]' key={propertyLabel}>
              <GenerateAutomaticInput
                key={propertyLabel}
                repository='transformations'
                propertyLabel={propertyLabel}
                propertyValue={propertyValue}
              />
            </div>
          ),
        )}
      </div>
    </>
  )
}
