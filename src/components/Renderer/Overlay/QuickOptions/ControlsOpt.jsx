import useStore from '@/store/index.jsx'
import { TbFocusCentered, TbRotate360 } from 'react-icons/tb'
import { LuScaling } from 'react-icons/lu'
import { LiaArrowsAltSolid } from 'react-icons/lia'
import { useFocusedObjectPosition } from '@/hooks/useFocusedObjectData.jsx'

export default function ControlsOpt() {
  const [setTransformControlsMode, setNewCameraDirectionInstruction] = useStore(
    (state) => [
      state.setTransformControlsMode,
      state.setNewCameraDirectionInstruction,
    ],
  )

  const focusedObjectPosition = useFocusedObjectPosition()

  return (
    <div className='bg-coalblue text-white flex flex-col p-2 gap-y-2 pointer-events-auto rounded'>
      <LiaArrowsAltSolid
        className='h-6 w-6 cursor-pointer'
        onClick={() => setTransformControlsMode('translate')}
      />
      <TbRotate360
        className='h-6 w-6 cursor-pointer'
        onClick={() => setTransformControlsMode('rotate')}
      />
      <LuScaling
        className='h-6 w-6 cursor-pointer'
        onClick={() => setTransformControlsMode('scale')}
      />
      <TbFocusCentered
        className='h-6 w-6 cursor-pointer'
        onClick={() => setNewCameraDirectionInstruction(focusedObjectPosition)}
      />
    </div>
  )
}
