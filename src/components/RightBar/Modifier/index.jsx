import Title from '../Title.jsx'
import Geometry from './Geometry.jsx'
import Material from './Material.jsx'
import Parameters from '@/components/RightBar/Modifier/Parameters.jsx'
import Shadows from './Shadows.jsx'
import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import { BsFillBoxFill } from 'react-icons/bs'

export default function ObjectModifier() {
  const focusedObject = useFocusedObjectData()
  if (!focusedObject) return

  return (
    <div className='border-b border-b-white'>
      <Title
        title={`"${focusedObject.userSetName}" Modifier`}
        Icon={BsFillBoxFill}
      />

      {/*ToDo: Optimize this list*/}
      <Geometry transformations={focusedObject.transformations} />
      <Material material={focusedObject.material} />
      <Parameters parameters={focusedObject.parameters} />
      <Shadows args={focusedObject.args} />
    </div>
  )
}
