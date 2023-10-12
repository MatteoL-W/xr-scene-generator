import Subtitle from '../Subtitle.jsx'
import GenerateAutomaticInput from '../../../services/GenerateAutomaticInput.jsx'
import useSceneStore from '../../../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'

export default function Geometry() {
  const [transformControlsRef] = useSceneStore(
    (state) => [state.transformControlsRef],
    shallow,
  )

  if (!transformControlsRef) return

  const { position, rotation, scale } = transformControlsRef.current.object
  const focusedMeshTransformProperty = { position, rotation, scale }

  return (
    <>
      <Subtitle title='Geometry' />

      <div className='px-3 flex flex-col'>
        {Object.entries(focusedMeshTransformProperty).map(
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
