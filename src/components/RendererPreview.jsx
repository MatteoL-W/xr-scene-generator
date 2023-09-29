import RendererOverlay from './RendererOverlay.jsx'
import RendererCanvas from './RendererCanvas.jsx'

export default function RendererPreview() {
  return (
    <div className='w-3/4'>
      <RendererOverlay />
      <RendererCanvas />
    </div>
  )
}
