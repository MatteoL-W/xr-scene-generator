import Title from '../Title.jsx'
import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import { BsFillBoxFill } from 'react-icons/bs'
import ModifierTab from './ModifierTab.jsx'

export default function ObjectModifier() {
  const focusedObject = useFocusedObjectData()
  if (!focusedObject) return

  return (
    <div className='border-b border-b-white'>
      <Title
        title={`"${focusedObject.userSetName}" Modifier`}
        Icon={BsFillBoxFill}
      />

      <ModifierTab
        title='Geometry'
        interactiveObjectInputs={{
          transformations: focusedObject.transformations,
        }}
        showXYZ
      />

      <ModifierTab
        title='Material'
        interactiveObjectInputs={{
          material: focusedObject.material,
        }}
      />

      <ModifierTab
        title='Parameters'
        interactiveObjectInputs={{
          parameters: focusedObject.parameters,
        }}
      />

      <ModifierTab
        title='Misc'
        interactiveObjectInputs={{
          args: focusedObject.args,
        }}
      />
    </div>
  )
}
