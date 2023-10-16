import useStore from '../store/index.jsx'
import { shallow } from 'zustand/shallow'

export default function Header() {
  const [isDebuggerUIOpen, setDebuggerUIState] = useStore(
    (state) => [state.isDebuggerUIOpen, state.setDebuggerUIState],
    shallow,
  )

  return (
    <div className='h-12 bg-jean flex items-center gap-10 px-5 text-white border-r border-r-white'>
      <a href='#' className='font-semibold no-underline'>
        XR-SCENE-GENERATOR
      </a>
      <span>Settings</span>
      <span>View on devices</span>
      <span onClick={() => setDebuggerUIState(!isDebuggerUIOpen)}>
        Debugger
      </span>
    </div>
  )
}
