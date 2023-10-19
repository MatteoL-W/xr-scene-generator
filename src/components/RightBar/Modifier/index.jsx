import Title from '../Title.jsx'
import Geometry from './Geometry.jsx'
import Material from './Material.jsx'
import Shadows from './Shadows.jsx'
import { useFocusedMeshData } from '@/hooks/useFocusedMeshData.jsx'
import { BsFillBoxFill } from 'react-icons/bs'

export default function MeshModifier() {
  const focusedMesh = useFocusedMeshData()
  if (!focusedMesh) return

  return (
    <div className='border-b border-b-white'>
      <Title
        title={`"${focusedMesh.userSetName}" Modifier`}
        Icon={BsFillBoxFill}
      />

      <Geometry />
      <Material material={focusedMesh.material} />
      <Shadows args={focusedMesh.args} />
    </div>
  )
}
