import { Canvas as R3FCanvas } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'
import Controls from './Controls/index.jsx'
import Debug from './Debug.jsx'
import Misc from './Misc.jsx'
import SceneObjects from '@/components/Renderer/SceneObjects/index.jsx'
import Environment from '@/components/Renderer/Environment.jsx'
import XRSpecificControls from '@/components/Renderer/XR/index.jsx'

export default function Canvas() {
  return (
    <>
      <VRButton />
      <R3FCanvas shadows='basic'>
        <Debug />

        <XR>
          <XRSpecificControls />

          <Controls />
          <Environment />
          <Misc />

          <SceneObjects />
        </XR>
      </R3FCanvas>
    </>
  )
}
