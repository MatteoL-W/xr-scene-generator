import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import DraggableMeshTemplate from './DraggableMeshTemplate.jsx'

import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function RendererCanvas() {
  const [sceneMeshes] = useSceneStore((state) => [state.sceneMeshes], shallow)
  const orbitControlsRef = useRef()

  return (
    <Canvas>
      <OrbitControls enableDamping={false} ref={orbitControlsRef} />

      <axesHelper scale={3} />
      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      {sceneMeshes.map((mesh, index) => (
        <DraggableMeshTemplate
          key={mesh.name + index}
          orbitControls={orbitControlsRef?.current}
          mesh={mesh}
        />
      ))}
    </Canvas>
  )
}
