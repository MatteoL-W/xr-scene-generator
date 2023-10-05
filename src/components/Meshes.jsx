import MeshTemplate from './MeshTemplate.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function Meshes() {
  const [sceneMeshes] = useSceneStore((state) => [state.sceneMeshes], shallow)

  return (
    <group>
      {sceneMeshes.map((mesh, index) => {
        return <MeshTemplate mesh={mesh} key={mesh.name + index} />
      })}
    </group>
  )
}
