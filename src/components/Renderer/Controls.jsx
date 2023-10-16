import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  TransformControls,
} from '@react-three/drei'
import useStore from '../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { useEffect, useRef } from 'react'
import useThreeObject from '../../hooks/useThreeObject.jsx'

export default function Controls() {
  const [
    setTransformControls,
    transformControlsMode,
    focusedMeshUUID,
    modifyFocusedMeshTransformations,
  ] = useStore(
    (state) => [
      state.setTransformControls,
      state.transformControlsMode,
      state.focusedMeshUUID,
      state.modifyFocusedMeshTransformations,
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

    modifyFocusedMeshTransformations(focusedMeshTransformProperty)
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

      <GizmoHelper alignment='bottom-right' margin={[70, 70]}>
        <GizmoViewport
          axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']}
          labelColor='white'
        />
      </GizmoHelper>
    </>
  )
}
