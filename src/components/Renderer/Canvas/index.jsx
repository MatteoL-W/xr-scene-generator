import useStore from '@/store/index.jsx'
import { Canvas as R3FCanvas } from '@react-three/fiber'
import Debug from './Debug.jsx'
import Exporter from './Exporter.jsx'
import Importer from './Importer.jsx'
import Camera from './Camera.jsx'
import Gizmo from './Gizmo.jsx'
import { XR } from '@react-three/xr'
import XRControls from './XRControls.jsx'
import Controls from './Controls/index.jsx'
import Skybox from './Skybox.jsx'
import AxesHelper from './AxesHelper.jsx'
import HumanSilhouette from './HumanSilhouette.jsx'
import Grid from './Grid.jsx'
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

          <Gizmo />
          <HumanSilhouette />

          <XR>
            <XRControls />
            <Controls />

            <Skybox />
            <AxesHelper />
            <Grid />

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
