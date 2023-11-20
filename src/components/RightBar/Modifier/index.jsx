import Title from '../Title.jsx'
import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import { BsFillBoxFill } from 'react-icons/bs'
import ModifierInputs from './ModifierInputs.jsx'
import { useState } from 'react'
import ModifierTitle from '@/components/RightBar/Modifier/ModifierTitle.jsx'

export default function ObjectModifier() {
  const focusedObject = useFocusedObjectData()
  const [modifierMode, setModifierMode] = useState('geometry')

  if (!focusedObject) return

  return (
    <div className='border-b border-b-white'>
      <Title
        title={`"${focusedObject.userSetName}" Modifier`}
        Icon={BsFillBoxFill}
      />

      <ModifierTitle
        focusedObject={focusedObject}
        modifierMode={modifierMode}
        setModifierMode={setModifierMode}
      />

      {modifierMode === 'geometry' && (
        <ModifierInputs
          title='Geometry'
          interactiveObjectInputs={{
            transformations: focusedObject.transformations,
          }}
          showXYZ
        />
      )}

      {modifierMode === 'material' && (
        <ModifierInputs
          title='Material'
          interactiveObjectInputs={{
            material: focusedObject.material,
          }}
        />
      )}

      {modifierMode === 'parameters' && (
        <ModifierInputs
          title='Parameters'
          interactiveObjectInputs={{
            parameters: focusedObject.parameters,
          }}
        />
      )}

      {modifierMode === 'misc' && (
        <ModifierInputs
          title='Misc'
          interactiveObjectInputs={{
            args: focusedObject.args,
          }}
          isLargerGrid
        />
      )}
    </div>
  )
}
