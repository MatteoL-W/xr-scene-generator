import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import { useRef } from 'react'
import SceneObject from './SceneObject.jsx'

export default function RendererCanvas() {
  const [sceneContent] = useSceneStore((state) => [state.sceneContent], shallow)
  const orbitControlsRef = useRef()

  return (
    <Canvas>
      <OrbitControls enableDamping={false} ref={orbitControlsRef} />
      <axesHelper scale={3} />

      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      {sceneContent.map((mesh, index) => (
        <SceneObject
          key={mesh.name + index}
          orbitControls={orbitControlsRef?.current}
          mesh={mesh}
        />
      ))}
    </Canvas>
  )
}
