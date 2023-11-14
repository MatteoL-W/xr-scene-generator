import { Canvas as R3FCanvas } from '@react-three/fiber'
import { XR } from '@react-three/xr'
import Controls from './Controls/index.jsx'
import Debug from './Debug.jsx'
import Misc from './Misc.jsx'
import SceneObjects from './SceneObjects/index.jsx'
import Environment from './Environment.jsx'
import XRSpecificControls from './XR/index.jsx'

export default function Canvas() {
  return (
    <>
      <R3FCanvas shadows frameloop='demand'>
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
