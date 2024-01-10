import TransformControlsOpt from './TransformControlsOpt.jsx'
import FocusControlsOpt from './FocusControlsOpt.jsx'
import { useFocusedObjectTransformationsData } from '@/hooks/useFocusedObjectData.jsx'
import { Vector3 } from 'three'
import { useMemo } from 'react'

export default function ControlsOpt() {
  const objectTransformations = useFocusedObjectTransformationsData()

  const focusedObjectPosition = useMemo(() => {
    if (!objectTransformations.position) return
    return new Vector3(...objectTransformations.position)
  }, [objectTransformations.position])

  if (!objectTransformations) return

  return (
    <div className='bg-greysky text-jean flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
      <TransformControlsOpt objectTransformations={objectTransformations} />

      {objectTransformations?.position && (
        <FocusControlsOpt position={focusedObjectPosition} />
      )}
    </div>
  )
}
