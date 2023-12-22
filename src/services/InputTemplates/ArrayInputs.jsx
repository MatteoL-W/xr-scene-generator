import PropTypes from 'prop-types'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useStore from '@/store/index.jsx'
import useHistoric from '@/hooks/useHistoric.jsx'
import { defaultParameters } from '@/config/properties/defaultParameters.js'
import { BsLink45Deg } from 'react-icons/bs'

ArrayInputs.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: PropTypes.array.isRequired,
  repository: PropTypes.string.isRequired,
}

export function ArrayInputs({ propertyLabel, propertyValue, repository }) {
  const { t } = useTranslation()
  const [modifyFocusedObject, transformControlsRef] = useStore((state) => [
    state.modifyFocusedObject,
    state.transformControlsRef,
  ])
  const [hasSyncProperties, setHasSyncPropertiesState] = useState(false)
  const { saveFocusedObjectTransformations } = useHistoric()

  function toggleSyncParameters() {
    setHasSyncPropertiesState(!hasSyncProperties)
  }

  function handleOnChange(event, changedAxisNumber) {
    let updatedPropertyValue = [...propertyValue]

    if (!hasSyncProperties) {
      updatedPropertyValue[changedAxisNumber] = parseFloat(event.target.value)
    } else {
      if (updatedPropertyValue[changedAxisNumber] === 0) return

      const newPropertyValue = parseFloat(event.target.value)
      const factor = newPropertyValue / updatedPropertyValue[changedAxisNumber]
      updatedPropertyValue = updatedPropertyValue.map((property) => {
        return property * factor
      })
    }

    if (repository === 'transformations') {
      saveFocusedObjectTransformations()
      transformControlsRef.current.object[propertyLabel].set(
        ...updatedPropertyValue,
      )
    }

    modifyFocusedObject(
      {
        [propertyLabel]: updatedPropertyValue,
      },
      repository,
    )
  }

  return (
    <>
      <div className='flex items-center w-20 justify-between'>
        <label className='capitalize'>
          {t('right.property.' + propertyLabel)}
        </label>
        <BsLink45Deg
          className={`h-full rounded ${
            hasSyncProperties ? 'bg-white text-jean' : ''
          }`}
          onClick={toggleSyncParameters}
        />
      </div>

      {propertyValue.map((value, index) => {
        const parameters = {
          min: defaultParameters?.[propertyLabel]?.min,
          max: defaultParameters?.[propertyLabel]?.max,
          step: defaultParameters?.[propertyLabel]?.step,
        }
        const inputCodeName = `${propertyLabel}_${index}`

        return (
          <input
            type='number'
            value={value}
            onChange={(e) => handleOnChange(e, index)}
            key={inputCodeName}
            name={inputCodeName}
            {...parameters}
            className='w-full px-2 py-1 rounded'
          />
        )
      })}
    </>
  )
}
