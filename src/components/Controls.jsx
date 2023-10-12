import { OrbitControls, TransformControls } from '@react-three/drei'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import { useEffect, useRef } from 'react'

export default function Controls() {
  const [setTransformControls, focusedMeshUUID, modifyFocusedMeshArguments] =
    useSceneStore(
      (state) => [
        state.setTransformControls,
        state.focusedMeshUUID,
        state.modifyFocusedMeshArguments,
      ],
      shallow,
    )
  const transformControlsRef = useRef()
  useEffect(() => {
    setTransformControls(transformControlsRef)
  }, [setTransformControls])

  function handleDragEnd(e) {
    if (!e.target) return

    const { position, rotation, scale } = e.target.object
    const focusedMeshTransformProperty = {
      position: [...position],
      rotation: [rotation.x, rotation.y, rotation.z],
      scale: [...scale],
    }

    modifyFocusedMeshArguments(focusedMeshTransformProperty)
  }

  const hasFocusedMesh = focusedMeshUUID !== ''
  const focusedMeshProps = {
    enabled: hasFocusedMesh,
    showX: hasFocusedMesh,
    showY: hasFocusedMesh,
    showZ: hasFocusedMesh,
  }

  return (
    <>
      <OrbitControls makeDefault enableDamping={false} />
      <TransformControls
        mode='translate'
        ref={transformControlsRef}
        onMouseUp={handleDragEnd}
        {...focusedMeshProps}
      />
    </>
  )
}
