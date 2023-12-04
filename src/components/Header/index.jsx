import useStore from '@/store/index.jsx'
import { ARButton, VRButton } from '@react-three/xr'
import { IoMdDownload, IoMdSettings } from 'react-icons/io'
import { VscDebugAlt } from 'react-icons/vsc'
import { PiVirtualReality } from 'react-icons/pi'
import { TbAugmentedReality } from 'react-icons/tb'
import GLTFExporterButton from '@/components/Header/GLTFExporterButton.jsx'

export default function Header() {
  const [isDebuggerUIOpen, setDebuggerUIState, setImmersiveExperienceMode] =
    useStore((state) => [
      state.isDebuggerUIOpen,
      state.setDebuggerUIState,
      state.setImmersiveExperienceMode,
    ])

  return (
    <div className='h-10 bg-dark-jean flex items-center gap-10 px-5 text-white border-b border-white'>
      <a href='#' className='font-semibold no-underline'>
        XR-SCENE-GENERATOR
      </a>

      <div className='flex items-center cursor-pointer'>
        <IoMdDownload className='mr-2' />
        <GLTFExporterButton />
      </div>

      <div
        className='flex items-center'
        onClick={() => setDebuggerUIState(!isDebuggerUIOpen)}
      >
        <VscDebugAlt className='mr-2' />
        Debugger
      </div>

      <div className='flex items-center'>
        <PiVirtualReality className='mr-2' />
        <span onClick={() => setImmersiveExperienceMode('vr')}>
          <VRButton style={{}} />
        </span>
      </div>

      <div className='flex items-center'>
        <TbAugmentedReality className='mr-2' />
        <span onClick={() => setImmersiveExperienceMode('ar')}>
          <ARButton style={{}} />
        </span>
      </div>

      <div className='flex items-center cursor-pointer'>
        <IoMdSettings className='mr-2' />
        Settings
      </div>
    </div>
  )
}
