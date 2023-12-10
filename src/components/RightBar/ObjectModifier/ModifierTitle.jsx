import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

ModifierTitle.propTypes = {
  focusedObject: PropTypes.object.isRequired,
  modifierMode: PropTypes.string.isRequired,
  setModifierMode: PropTypes.func.isRequired,
}

export default function ModifierTitle({
  focusedObject,
  modifierMode,
  setModifierMode,
}) {
  const { t } = useTranslation()
  const modifiers = useMemo(() => {
    let usefulModifier = []
    if (focusedObject?.transformations) usefulModifier.push('geometry')
    if (focusedObject?.material) usefulModifier.push('material')
    if (focusedObject?.parameters) usefulModifier.push('parameters')
    if (focusedObject?.args) usefulModifier.push('misc')

    return usefulModifier
  }, [focusedObject])

  return (
    <div className='ml-2 flex flex-wrap mb-6'>
      {modifiers?.map((modifierTitle) => (
        <span
          key={modifierTitle}
          onClick={() => setModifierMode(modifierTitle)}
          className={`capitalize p-1 px-2 rounded-b ${
            modifierMode === modifierTitle ? 'bg-coalblue' : ''
          }`}
        >
          {t('right.modifier.' + modifierTitle)}
        </span>
      ))}
    </div>
  )
}
