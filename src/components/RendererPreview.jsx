import RendererOverlay from './RendererOverlay.jsx'
import RendererCanvas from './RendererCanvas.jsx'

export default function RendererPreview() {
  return (
    <div className='w-full h-full'>
      <RendererOverlay />
      <RendererCanvas />
    </div>
  )
}
