import Overlay from './Overlay/index.jsx'
import Canvas from './Canvas/index.jsx'
import Shortcut from './Shortcut.jsx'

export default function Renderer() {
  return (
    <div className='w-full h-full relative'>
      <Overlay />
      <Canvas />
      <Shortcut />
    </div>
  )
}
