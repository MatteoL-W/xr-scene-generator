import useThreeObject from '@/hooks/useThreeObject.jsx'
import { useFocusedObjectData } from '@/hooks/useFocusedObjectData.jsx'
import { useEffect, useRef } from 'react'
import useStore from '@/store/index.jsx'
import { useXR } from '@react-three/xr'
import { TransformControls } from '@react-three/drei'

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
  const focusedObjectData = useFocusedObjectData()

  useEffect(() => {
    setTransformControls(transformControlsRef)
  }, [setTransformControls])

  function handleDragEnd(e) {
    if (!e.target) return

    const { position, rotation, scale } = e.target.object

    let focusedObjectTransformProperty = {}
    if ('position' in focusedObjectData.transformations)
      focusedObjectTransformProperty.position = [...position]

    if ('rotation' in focusedObjectData.transformations)
      focusedObjectTransformProperty.rotation = [
        rotation.x,
        rotation.y,
        rotation.z,
      ]

    if ('scale' in focusedObjectData.transformations)
      focusedObjectTransformProperty.scale = [...scale]

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
