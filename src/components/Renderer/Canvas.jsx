import { Canvas as R3FCanvas } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'
import Meshes from './Meshes/index.jsx'
import Controls from './Controls/index.jsx'
import Debug from './Debug.jsx'
import Misc from './Misc.jsx'
import Lights from './Lights.jsx'
import Environment from '@/components/Renderer/Environment.jsx'
import XRSpecificControls from '@/components/Renderer/XR/index.jsx'

export default function Canvas() {
  return (
    <>
      <VRButton />
      <R3FCanvas shadows='basic'>
        <Debug />
        <Controls />

        <XR>
          <XRSpecificControls />

          <Environment />
          <Misc />

          <Lights />
          <Meshes />
        </XR>
      </R3FCanvas>
    </>
  )
}
