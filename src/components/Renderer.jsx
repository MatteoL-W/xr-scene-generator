import RendererOverlay from './RendererOverlay.jsx'
import RendererCanvas from './RendererCanvas.jsx'

export default function Renderer() {
  return (
    <div className='w-3/4'>
      <RendererOverlay />
      <RendererCanvas />
    </div>
  )
}
