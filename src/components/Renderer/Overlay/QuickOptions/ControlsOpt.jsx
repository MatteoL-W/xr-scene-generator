import useStore from '@/store/index.jsx'
import { TbFocusCentered, TbRotate360 } from 'react-icons/tb'
import { LuScaling } from 'react-icons/lu'
import { LiaArrowsAltSolid } from 'react-icons/lia'
import { useFocusedObjectTransformationsData } from '@/hooks/useFocusedObjectData.jsx'
import useNewTransformControlsMode from '@/hooks/useTransformControlsHandler.jsx'
import { Vector3 } from 'three'

export default function ControlsOpt() {
  const [setNewCameraDirectionInstruction] = useStore((state) => [
    state.setNewCameraDirectionInstruction,
  ])

  const objectTransformations = useFocusedObjectTransformationsData()
  const focusedObjectPosition = new Vector3(...objectTransformations.position)
  const setTransformControlsMode = useNewTransformControlsMode()

  if (!objectTransformations) return

  return (
    <div className='bg-greysky text-jean flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
      {objectTransformations?.position && (
        <LiaArrowsAltSolid
          className='h-6 w-6 cursor-pointer'
          onClick={() => setTransformControlsMode('translate')}
        />
      )}

      {objectTransformations?.rotation && (
        <TbRotate360
          className='h-6 w-6 cursor-pointer'
          onClick={() => setTransformControlsMode('rotate')}
        />
      )}

      {objectTransformations?.scale && (
        <LuScaling
          className='h-6 w-6 cursor-pointer'
          onClick={() => setTransformControlsMode('scale')}
        />
      )}

      {objectTransformations?.position && (
        <TbFocusCentered
          className='h-6 w-6 cursor-pointer'
          onClick={() =>
            setNewCameraDirectionInstruction(focusedObjectPosition)
          }
        />
      )}
    </div>
  )
}
