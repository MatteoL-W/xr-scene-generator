import useThreeObject from '@/hooks/useThreeObject.jsx'
import { useEffect, useRef } from 'react'
import useStore from '@/store/index.jsx'
import { useXR } from '@react-three/xr'
import { TransformControls } from '@react-three/drei'
import { useFocusedObjectTransformationsData } from '@/hooks/useFocusedObjectData.jsx'

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
  const focusedObjectTransformations = useFocusedObjectTransformationsData()

  useEffect(() => {
    setTransformControls(transformControlsRef)
  }, [setTransformControls])

  function handleDragEnd(e) {
    if (!e.target) return

    const { position, rotation, scale } = e.target.object

    let focusedObjectTransformProperty = {}

    if (!focusedObjectTransformations) return

    if ('position' in focusedObjectTransformations)
      focusedObjectTransformProperty.position = [...position]

    if ('rotation' in focusedObjectTransformations)
      focusedObjectTransformProperty.rotation = [
        rotation.x,
        rotation.y,
        rotation.z,
      ]

    if ('scale' in focusedObjectTransformations)
      focusedObjectTransformProperty.scale = [...scale]

    modifyFocusedObjectTransformations(focusedObjectTransformProperty)
  }

  const { isPresenting } = useXR()

  const hasFocusedObject =
    focusedObjectUUID !== '' &&
    !isPresenting &&
    focusedObjectTransformations?.position

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
