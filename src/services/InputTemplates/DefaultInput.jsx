import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { argumentsDefaultParameters } from '@/data/argumentsDefaultParameters.js'

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
        [propertyLabel]: event.target.value,
      },
      repository,
    )
  }

  const defaultArguments = {
    min: argumentsDefaultParameters?.[propertyLabel]?.min ?? undefined,
    max: argumentsDefaultParameters?.[propertyLabel]?.max ?? undefined,
    step: argumentsDefaultParameters?.[propertyLabel]?.step ?? undefined,
  }

  return (
    <>
      <label htmlFor={propertyLabel}>{propertyLabel}</label>
      <input
        type='number'
        id={propertyLabel}
        value={propertyValue}
        onChange={handleOnChange}
        {...defaultArguments}
      />
    </>
  )
}
