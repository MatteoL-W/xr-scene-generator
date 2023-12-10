import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useStore from '@/store/index.jsx'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'
import useDebounce from '@/hooks/useDebounce.jsx'
import Colorful from '@uiw/react-color-colorful'
import PropTypes from 'prop-types'
import { hexColorValidator } from '@/utils/typesValidator.jsx'

ColorPickerInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: hexColorValidator,
  repository: PropTypes.string.isRequired,
}

export function ColorPickerInput({ propertyLabel, propertyValue, repository }) {
  const { t } = useTranslation()
  const [modifyFocusedObject] = useStore((state) => [state.modifyFocusedObject])
  const [color, setColor] = useState()
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const colorPickerRef = useOutsideClick(() => setIsColorPickerOpen(false))
  const debouncedColor = useDebounce(color, 0)

  function handleOnChange(event) {
    setColor(event.hex)
  }

  useEffect(() => {
    const updateMaterial = async () => {
      if (!debouncedColor) setColor(propertyValue)

      if (debouncedColor) {
        modifyFocusedObject(
          {
            [propertyLabel]: debouncedColor,
          },
          repository,
        )
      }
    }

    updateMaterial()
  }, [debouncedColor])

  return (
    <>
      <label htmlFor={propertyLabel} className='capitalize'>
        {t('right.property.' + propertyLabel)}
      </label>

      <div
        className='w-6 h-6 relative rounded'
        style={{ background: propertyValue }}
        onClick={() => setIsColorPickerOpen(true)}
      >
        {isColorPickerOpen && (
          <Colorful
            disableAlpha={true}
            color={propertyValue}
            onChange={handleOnChange}
            className='absolute top-4 left-4'
            ref={colorPickerRef}
          />
        )}
      </div>
    </>
  )
}
