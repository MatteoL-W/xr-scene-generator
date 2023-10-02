import MeshTemplate from './MeshTemplate.jsx'
import Draggable from './Draggable.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function Meshes() {
  const [sceneMeshes] = useSceneStore((state) => [state.sceneMeshes], shallow)

  return (
    <Draggable>
      {sceneMeshes.map((mesh, index) => (
        <MeshTemplate key={mesh.name + index} mesh={mesh} />
      ))}
    </Draggable>
  )
}
