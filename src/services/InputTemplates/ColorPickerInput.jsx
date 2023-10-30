import { useEffect, useState } from 'react'
import useStore from '@/store/index.jsx'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'
import Colorful from '@uiw/react-color-colorful'
import PropTypes from 'prop-types'
import { hexColorValidator } from '@/utils/typesValidator.jsx'
import useDebounce from '@/hooks/useDebounce.jsx'

ColorPickerInput.propTypes = {
  propertyLabel: PropTypes.string.isRequired,
  propertyValue: hexColorValidator,
}

export function ColorPickerInput({ propertyLabel, propertyValue }) {
  const [modifyFocusedMeshMaterial] = useStore((state) => [
    state.modifyFocusedMeshMaterial,
  ])
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
        modifyFocusedMeshMaterial({
          [propertyLabel]: debouncedColor,
        })
      }
    }

    updateMaterial()
  }, [debouncedColor])

  return (
    <>
      <label htmlFor={propertyLabel} className='capitalize'>
        {propertyLabel === 'material-color' ? 'Color' : propertyLabel}
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
