import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function RendererCanvas() {
  const { sceneContent } = useSceneStore(
    (state) => ({
      sceneContent: state.sceneContent,
    }),
    shallow,
  )

  return (
    <Canvas>
      <OrbitControls enableDamping={false} />

      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      {sceneContent.map((mesh) => {
        const ScenePiece = mesh.component
        return <ScenePiece key={mesh.uuid} />
      })}
    </Canvas>
  )
}
