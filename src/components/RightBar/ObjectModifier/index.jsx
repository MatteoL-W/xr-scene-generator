import Title from '../Title.jsx'
import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useStore from '@/store/index.jsx'
import ModifierTitle from './ModifierTitle.jsx'
import ModifierInputs from './ModifierInputs.jsx'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillBoxFill } from 'react-icons/bs'

export default function ObjectModifier() {
  const { t } = useTranslation()
  const focusedObject = useFocusedObjectData()
  const [modifierMode, setModifierMode] = useState('geometry')
  const [removeObject] = useStore((state) => [state.removeObjectFromScene])

  if (!focusedObject) return

  return (
    <div className='border-b border-b-white'>
      <div className='relative'>
        <Title
          title={`"${focusedObject.name}" ${t('right.modifier.title')}`}
          Icon={BsFillBoxFill}
        />
        <div className='absolute top-0 right-2 h-full flex items-center text-xl'>
          <AiFillDelete
            className='cursor-pointer'
            onClick={() => removeObject(focusedObject)}
          />
        </div>
      </div>

      <ModifierTitle
        focusedObject={focusedObject}
        modifierMode={modifierMode}
        setModifierMode={setModifierMode}
      />

      {modifierMode === 'geometry' && (
        <ModifierInputs
          interactiveObjectInputs={{
            transformations: focusedObject.transformations,
          }}
          showXYZ
        />
      )}

      {modifierMode === 'material' && (
        <ModifierInputs
          interactiveObjectInputs={{
            material: focusedObject.material,
          }}
        />
      )}

      {modifierMode === 'parameters' && (
        <ModifierInputs
          interactiveObjectInputs={{
            parameters: focusedObject.parameters,
          }}
        />
      )}

      {modifierMode === 'misc' && (
        <ModifierInputs
          title={t('right.modifier.misc')}
          interactiveObjectInputs={{
            args: focusedObject.args,
          }}
          isLargerGrid
        />
      )}
    </div>
  )
}
