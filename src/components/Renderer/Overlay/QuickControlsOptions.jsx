import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import { TbRotate360 } from 'react-icons/tb'
import { LuScaling } from 'react-icons/lu'
import { LiaArrowsAltSolid } from 'react-icons/lia'

export default function QuickControlsOptions() {
  const [setTransformControlsMode] = useStore(
    (state) => [state.setTransformControlsMode],
    shallow,
  )
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
    </div>
  )
}
