import MeshTemplate from './MeshTemplate.jsx'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'

export default function Meshes() {
  const [sceneMeshes] = useStore(useShallow((state) => [state.sceneMeshes]))

  return (
    <group name='MeshesComponent'>
      {sceneMeshes.map((mesh, index) => (
        <MeshTemplate mesh={mesh} key={mesh.name + index} />
      ))}
    </group>
  )
}
