import useStore from '@/store/index.jsx'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

BooleanInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.bool.isRequired,
  repository: PropTypes.string,
}

export default function BooleanInput({
  propertyLabel,
  propertyValue,
  repository,
}) {
  const { t } = useTranslation()
  function onChange() {
    modifyFocusedObject(
      {
        [propertyLabel]: !propertyValue,
      },
      repository,
    )
  }

  const [modifyFocusedObject] = useStore((state) => [state.modifyFocusedObject])
  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        id={propertyLabel}
        checked={propertyValue}
        onChange={onChange}
        className='mr-2'
      />
      <label htmlFor={propertyLabel}>
        {t('right.property.' + propertyLabel)}
      </label>
    </div>
  )
}
