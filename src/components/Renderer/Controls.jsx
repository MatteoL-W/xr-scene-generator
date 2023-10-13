import { OrbitControls, TransformControls } from '@react-three/drei'
import useStore from '../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { useEffect, useRef } from 'react'
import useThreeObject from '../../hooks/useThreeObject.jsx'

export default function Controls() {
  const [
    setTransformControls,
    transformControlsMode,
    focusedMeshUUID,
    modifyFocusedMeshArguments,
  ] = useStore(
    (state) => [
      state.setTransformControls,
      state.transformControlsMode,
      state.focusedMeshUUID,
      state.modifyFocusedMeshArguments,
    ],
    shallow,
  )

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
        mode={transformControlsMode}
        ref={transformControlsRef}
        onMouseUp={handleDragEnd}
        object={focusedMeshObject}
        {...focusedMeshProps}
      />
    </>
  )
}
