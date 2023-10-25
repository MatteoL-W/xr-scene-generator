import useThreeObject from '@/hooks/useThreeObject.jsx'
import { useEffect, useRef } from 'react'
import useStore from '@/store/index.jsx'
import { TransformControls } from '@react-three/drei'
import { useXR } from '@react-three/xr'

export default function Transform() {
  const [
    setTransformControls,
    transformControlsMode,
    focusedMeshUUID,
    modifyFocusedMeshTransformations,
  ] = useStore((state) => [
    state.setTransformControls,
    state.transformControlsMode,
    state.focusedMeshUUID,
    state.modifyFocusedMeshTransformations,
  ])

  const focusedMeshObject = useThreeObject(focusedMeshUUID)
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

    modifyFocusedMeshTransformations(focusedMeshTransformProperty)
  }

  const { isPresenting } = useXR()

  const hasFocusedMesh = focusedMeshUUID !== '' || !isPresenting
  const focusedMeshProps = {
    enabled: hasFocusedMesh,
    showX: hasFocusedMesh,
    showY: hasFocusedMesh,
    showZ: hasFocusedMesh,
  }

  return (
    <TransformControls
      mode={transformControlsMode}
      ref={transformControlsRef}
      onMouseUp={handleDragEnd}
      object={focusedMeshObject}
      {...focusedMeshProps}
    />
  )
}
