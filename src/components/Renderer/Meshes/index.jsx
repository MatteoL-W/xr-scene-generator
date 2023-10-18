import MeshTemplate from './MeshTemplate.jsx'
import useStore from '@/store/index.jsx'
import { shallow } from 'zustand/shallow'

export default function Meshes() {
  const [sceneMeshes] = useStore((state) => [state.sceneMeshes], shallow)

  return (
    <group name='MeshesComponent'>
      {sceneMeshes.map((mesh, index) => (
        <MeshTemplate mesh={mesh} key={mesh.name + index} />
      ))}
    </group>
  )
}
