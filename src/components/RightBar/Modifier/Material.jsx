import Subtitle from '../Subtitle.jsx'
import PropTypes from 'prop-types'
import GenerateAutomaticInput from '../../../services/GenerateAutomaticInput.jsx'

Material.propTypes = {
  material: PropTypes.object.isRequired,
}

export default function Material({ material }) {
  return (
    <>
      <Subtitle title='Material' />

      <div className='p-3 pt-0 flex flex-col gap-y-2'>
        <div className='grid grid-cols-4 w-[95%]'>
          {Object.entries(material).map(([propertyLabel, propertyValue]) => {
            return (
              <GenerateAutomaticInput
                key={propertyLabel}
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