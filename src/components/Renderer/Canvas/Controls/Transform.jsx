import useThreeObject from '@/hooks/useThreeObject.jsx'
import useHistoric from '@/hooks/useHistoric.jsx'
import useStore from '@/store/index.jsx'
import { useEffect, useRef } from 'react'
import { useXR } from '@react-three/xr'
import { TransformControls } from '@react-three/drei'
import { useFocusedObjectTransformationsData } from '@/hooks/useFocusedObjectData.jsx'

export default function Transform() {
  const [
    setTransformControls,
    transformControlsMode,
    focusedObjectUUID,
    modifyFocusedObject,
  ] = useStore((state) => [
    state.setTransformControls,
    state.transformControlsMode,
    state.focusedObjectUUID,
    state.modifyFocusedObject,
  ])

  const focusedThreeObject = useThreeObject(focusedObjectUUID)
  const transformControlsRef = useRef()
  const focusedObjectTransformations = useFocusedObjectTransformationsData()
  const { saveFocusedObjectTransformations } = useHistoric()
  const { isPresenting } = useXR()

  useEffect(() => {
    setTransformControls(transformControlsRef)
  }, [setTransformControls])

  if (!transformControlsRef) return

  function handleDragEnd(e) {
    if (!e.target || !focusedObjectTransformations) return

    const focusedObjectTransformProperty = {}

    // position, rotation and scale
    for (const property of Object.keys(focusedObjectTransformations)) {
      focusedObjectTransformProperty[property] = ['x', 'y', 'z'].map((axis) => {
        const propertyValues = e.target.object[property]
        return parseFloat(propertyValues[axis].toFixed(2))
      })
    }

    saveFocusedObjectTransformations()
    modifyFocusedObject(focusedObjectTransformProperty, 'transformations')
  }

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
