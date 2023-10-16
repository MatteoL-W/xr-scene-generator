import { Canvas as R3FCanvas } from '@react-three/fiber'
import Meshes from './Meshes/index.jsx'
import Controls from './Controls.jsx'
import Debug from './Debug.jsx'
import Misc from './Misc.jsx'

export default function Canvas() {
  return (
    <R3FCanvas>
      <Debug />
      <Controls />
      <Misc />

      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      <Meshes />
    </R3FCanvas>
  )
}
