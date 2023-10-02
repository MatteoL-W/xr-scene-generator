import { useEffect, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import Meshes from './Meshes.jsx'

export default function RendererCanvas() {
  const [setOrbitControls] = useSceneStore(
    (state) => [state.setOrbitControls],
    shallow,
  )
  const orbitControlsRef = useRef()

  useEffect(() => {
    setOrbitControls(orbitControlsRef)
  }, [setOrbitControls])

  return (
    <Canvas>
      <OrbitControls enableDamping={false} ref={orbitControlsRef} />

      <axesHelper scale={3} />
      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      <Meshes />
    </Canvas>
  )
}
