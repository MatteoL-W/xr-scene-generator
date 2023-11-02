import Subtitle from '../Subtitle.jsx'
import PropTypes from 'prop-types'
import GenerateAutomaticInput from '@/services/GenerateAutomaticInput.jsx'

Material.propTypes = {
  material: PropTypes.object,
}

export default function Material({ material }) {
  if (!material) return

  return (
    <>
      <Subtitle title='Material' />

      <div className='p-3 pt-0 flex flex-col my-2'>
        <div className='grid grid-cols-4 w-[95%] items-center gap-3'>
          {Object.entries(material).map(([propertyLabel, propertyValue]) => {
            return (
              <GenerateAutomaticInput
                key={propertyLabel}
                repository='material'
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
