import { Canvas } from '@react-three/fiber'
import Meshes from './Meshes.jsx'
import Controls from './Controls.jsx'

export default function RendererCanvas() {
  return (
    <Canvas>
      <Controls />

      <axesHelper scale={3} />
      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      <Meshes />
    </Canvas>
  )
}
