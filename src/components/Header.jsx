import useStore from '@/store/index.jsx'
import { ARButton, VRButton } from '@react-three/xr'

export default function Header() {
  const [isDebuggerUIOpen, setDebuggerUIState, setImmersiveExperienceMode] =
    useStore((state) => [
      state.isDebuggerUIOpen,
      state.setDebuggerUIState,
      state.setImmersiveExperienceMode,
    ])

  return (
    <div className='h-12 bg-jean flex items-center gap-10 px-5 text-white border-r border-r-white'>
      <a href='#' className='font-semibold no-underline'>
        XR-SCENE-GENERATOR
      </a>
      <span>Settings</span>

      <span onClick={() => setDebuggerUIState(!isDebuggerUIOpen)}>
        Debugger
      </span>

      <span>
        VR :{' '}
        <span onClick={() => setImmersiveExperienceMode('vr')}>
          <VRButton style={{}} />
        </span>
      </span>

      <span>
        AR :{' '}
        <span onClick={() => setImmersiveExperienceMode('ar')}>
          <ARButton style={{}} />
        </span>
      </span>
    </div>
  )
}
