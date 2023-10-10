import { useEffect, useRef } from 'react'
import { OrbitControls, TransformControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import Meshes from './Meshes.jsx'

export default function RendererCanvas() {
  const [setTransformControls] = useSceneStore(
    (state) => [state.setTransformControls],
    shallow,
  )
  const transformControlsRef = useRef()

  useEffect(() => {
    setTransformControls(transformControlsRef)
  }, [setTransformControls])

  return (
    <Canvas>
      <OrbitControls makeDefault enableDamping={false} />
      <TransformControls ref={transformControlsRef} mode='translate' />

      <axesHelper scale={3} />
      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      <Meshes />
    </Canvas>
  )
}
