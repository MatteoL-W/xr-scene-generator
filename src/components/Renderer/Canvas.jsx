import useStore from '@/store/index.jsx'
import { Canvas as R3FCanvas } from '@react-three/fiber'
import Debug from './Debug.jsx'
import Exporter from './Exporter.jsx'
import Importer from './Importer.jsx'
import Camera from './Camera.jsx'
import { XR } from '@react-three/xr'
import XRSpecificControls from './XR/index.jsx'
import Controls from './Controls/index.jsx'
import Environment from './Environment.jsx'
import Misc from './Misc.jsx'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import Ground from './Ground.jsx'
import SceneObjects from './SceneObjects/index.jsx'
import Loader from './Loader.jsx'

export default function Canvas() {
  const [isDebuggerUIOpen] = useStore((state) => [state.isDebuggerUIOpen])
  return (
    <>
      <R3FCanvas shadows>
        <Suspense>
          <Debug />
          <Exporter />
          <Importer />
          <Camera />

          <XR>
            <XRSpecificControls />

            <Controls />
            <Environment />
            <Misc />

            <Suspense>
              <Physics debug={isDebuggerUIOpen}>
                <Ground />
                <SceneObjects />
              </Physics>
            </Suspense>
          </XR>
        </Suspense>
      </R3FCanvas>

      <Loader />
    </>
  )
}
