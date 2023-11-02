import Title from '../Title.jsx'
import Geometry from './Geometry.jsx'
import Material from './Material.jsx'
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

      <Geometry transformations={focusedObject.transformations} />
      <Material material={focusedObject.material} />
      <Shadows args={focusedObject.args} />
    </div>
  )
}
