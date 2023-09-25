import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import Draggable from './Draggable.jsx'
import { useRef } from 'react'

export default function RendererCanvas() {
  const [sceneContent] = useSceneStore((state) => [state.sceneContent], shallow)
  const orbitControls = useRef()

  return (
    <Canvas>
      <OrbitControls enableDamping={false} ref={orbitControls} />
      <axesHelper scale={3} />

      <ambientLight intensity={0.1} />
      <directionalLight color='red' position={[0, 0, 5]} />

      {sceneContent.map((mesh) => {
        const ScenePiece = mesh.component
        return (
          <Draggable
            key={mesh.uuid}
            orbitControls={orbitControls.current}
            meshArgs={mesh.args}
          >
            <ScenePiece {...mesh.args} />
          </Draggable>
        )
      })}
    </Canvas>
  )
}
