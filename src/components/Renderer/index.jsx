import Overlay from './Overlay/index.jsx'
import Canvas from './Canvas.jsx'
import Shortcut from '@/components/Renderer/Overlay/Shortcut.jsx'

export default function RendererPreview() {
  return (
    <div className='w-full h-full relative'>
      <Overlay />
      <Canvas />
      <Shortcut />
    </div>
  )
}
