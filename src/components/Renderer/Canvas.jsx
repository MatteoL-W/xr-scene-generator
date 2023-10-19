import { Canvas as R3FCanvas } from '@react-three/fiber'
import Meshes from './Meshes/index.jsx'
import Controls from './Controls/index.jsx'
import Debug from './Debug.jsx'
import Misc from './Misc.jsx'
import Lights from './Lights.jsx'

export default function Canvas() {
  return (
    <R3FCanvas shadows='basic'>
      <Debug />
      <Controls />
      <Misc />

      <Lights />
      <Meshes />
    </R3FCanvas>
  )
}
