import Subtitle from '../Subtitle.jsx'
import GenerateAutomaticInput from '@/services/GenerateAutomaticInput.jsx'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import { useEffect, useState } from 'react'

// Performance issue : we loop on position, rotation and scale so when 1 is updated,
// the whole 3 are being rendered in the children components

export default function Geometry() {
  const [objectTransformProperties, setObjectTransformProperties] = useState({})
  const [transformControlsRef] = useStore(
    useShallow((state) => [state.transformControlsRef]),
  )
  const [focusedObjectUUID] = useStore((state) => [state.focusedObjectUUID])

  useEffect(() => {
    if (transformControlsRef.current) {
      const { position, rotation, scale } = transformControlsRef.current.object
      setObjectTransformProperties({ position, rotation, scale })
    }
  }, [
    focusedObjectUUID,
    transformControlsRef,
    transformControlsRef.current.object.position,
    transformControlsRef.current.object.rotation,
    transformControlsRef.current.object.scale,
  ])

  if (!transformControlsRef) return

  return (
    <>
      <Subtitle title='Geometry' />

      <div className='p-3 pt-0 flex flex-col gap-y-2'>
        <div className='grid grid-cols-4 w-[95%] text-xs'>
          <div></div>
          <div className='text-center'>X</div>
          <div className='text-center'>Y</div>
          <div className='text-center'>Z</div>
        </div>

        {Object.entries(objectTransformProperties).map(
          ([propertyLabel, propertyValue]) => (
            <div className='grid grid-cols-4 gap-3 w-[95%]' key={propertyLabel}>
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
