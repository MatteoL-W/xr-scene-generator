import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { propertiesParameters } from '@/config/default/modifiersPropertiesParams.js'

DefaultInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.any,
  repository: PropTypes.string.isRequired,
}

export function DefaultInput({ propertyLabel, propertyValue, repository }) {
  const [modifyFocusedObject] = useStore((state) => [state.modifyFocusedObject])

  function handleOnChange(event) {
    modifyFocusedObject(
      {
        [propertyLabel]: parseFloat(event.target.value),
      },
      repository,
    )
  }

  const defaultArguments = {
    min: propertiesParameters?.[propertyLabel]?.min ?? undefined,
    max: propertiesParameters?.[propertyLabel]?.max ?? undefined,
    step: propertiesParameters?.[propertyLabel]?.step ?? undefined,
  }

  return (
    <>
      <label htmlFor={propertyLabel} className='capitalize'>
        {propertyLabel}
      </label>
      <input
        type='number'
        className='w-full px-2 py-1 rounded'
        id={propertyLabel}
        value={propertyValue}
        onChange={handleOnChange}
        {...defaultArguments}
      />
    </>
  )
}
