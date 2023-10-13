import Subtitle from '../Subtitle.jsx'
import GenerateAutomaticInput from '../../../services/GenerateAutomaticInput.jsx'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'

export default function Geometry() {
  const [meshTransformProperties, setMeshTransformProperties] = useState({})
  const [transformControlsRef, focusedMeshUUID] = useStore(
    (state) => [state.transformControlsRef, state.focusedMeshUUID],
    shallow,
  )

  useEffect(() => {
    if (transformControlsRef.current) {
      const { position, rotation, scale } = transformControlsRef.current.object
      setMeshTransformProperties({ position, rotation, scale })
    }
  }, [
    focusedMeshUUID,
    transformControlsRef,
    transformControlsRef.current.object.position,
    transformControlsRef.current.object.rotation,
    transformControlsRef.current.object.scale,
  ])

  if (!transformControlsRef) return

  return (
    <>
      <Subtitle title='Geometry' />

      <div className='p-3 pt-0 flex flex-col'>
        {Object.entries(meshTransformProperties).map(
          ([propertyLabel, propertyValue]) => (
            <div className='flex' key={propertyLabel}>
              <GenerateAutomaticInput
                propertyLabel={propertyLabel}
                propertyValue={propertyValue}
              />
            </div>
          ),
        )}
      </div>
    </>
  )
}
