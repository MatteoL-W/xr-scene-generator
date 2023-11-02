import useThreeObject from '@/hooks/useThreeObject.jsx'
import { useEffect, useRef } from 'react'
import useStore from '@/store/index.jsx'
import { TransformControls } from '@react-three/drei'
import { useXR } from '@react-three/xr'

export default function Transform() {
  const [
    setTransformControls,
    transformControlsMode,
    focusedObjectUUID,
    modifyFocusedObjectTransformations,
  ] = useStore((state) => [
    state.setTransformControls,
    state.transformControlsMode,
    state.focusedObjectUUID,
    state.modifyFocusedObjectTransformations,
  ])

  const focusedThreeObject = useThreeObject(focusedObjectUUID)
  const transformControlsRef = useRef()
  useEffect(() => {
    setTransformControls(transformControlsRef)
  }, [setTransformControls])

  function handleDragEnd(e) {
    if (!e.target) return

    const { position, rotation, scale } = e.target.object
    const focusedObjectTransformProperty = {
      position: [...position],
      rotation: [rotation.x, rotation.y, rotation.z],
      scale: [...scale],
    }

    modifyFocusedObjectTransformations(focusedObjectTransformProperty)
  }

  const { isPresenting } = useXR()

  const hasFocusedObject = focusedObjectUUID !== '' && !isPresenting
  const focusedObjectProps = {
    enabled: hasFocusedObject,
    showX: hasFocusedObject,
    showY: hasFocusedObject,
    showZ: hasFocusedObject,
  }

  return (
    <TransformControls
      mode={transformControlsMode}
      ref={transformControlsRef}
      onMouseUp={handleDragEnd}
      object={focusedThreeObject}
      {...focusedObjectProps}
    />
  )
}
