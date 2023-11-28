import Title from '../Title.jsx'
import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import { BsFillBoxFill } from 'react-icons/bs'
import ModifierInputs from './ModifierInputs.jsx'
import { useState } from 'react'
import ModifierTitle from '@/components/RightBar/Modifier/ModifierTitle.jsx'
import { AiFillDelete } from 'react-icons/ai'
import useStore from '@/store/index.jsx'

export default function ObjectModifier() {
  const focusedObject = useFocusedObjectData()
  const [modifierMode, setModifierMode] = useState('geometry')
  const [removeObject] = useStore((state) => [state.removeObjectFromScene])

  if (!focusedObject) return

  return (
    <div className='border-b border-b-white'>
      <div className='relative'>
        <Title
          title={`"${focusedObject.userSetName}" Modifier`}
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
