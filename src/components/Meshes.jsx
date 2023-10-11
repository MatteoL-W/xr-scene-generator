import MeshTemplate from './MeshTemplate.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function Meshes() {
  const [sceneMeshes] = useSceneStore((state) => [state.sceneMeshes], shallow)

  return (
    <group name='MeshesComponent'>
      {sceneMeshes.map((mesh, index) => (
        <MeshTemplate mesh={mesh} key={mesh.name + index} />
      ))}
    </group>
  )
}
