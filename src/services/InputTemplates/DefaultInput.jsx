import PropTypes from 'prop-types'
import useStore from '@/store/index.jsx'
import { useTranslation } from 'react-i18next'
import { defaultParameters } from '@/config/properties/defaultParameters.js'

DefaultInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.any,
  repository: PropTypes.string.isRequired,
}

export function DefaultInput({ propertyLabel, propertyValue, repository }) {
  const { t } = useTranslation()
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
    min: defaultParameters?.[propertyLabel]?.min ?? undefined,
    max: defaultParameters?.[propertyLabel]?.max ?? undefined,
    step: defaultParameters?.[propertyLabel]?.step ?? undefined,
  }

  return (
    <>
      <label htmlFor={propertyLabel} className='capitalize'>
        {t('right.property.' + propertyLabel)}
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
