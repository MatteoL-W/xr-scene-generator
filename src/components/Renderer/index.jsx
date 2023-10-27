import Overlay from './Overlay/index.jsx'
import Canvas from './Canvas.jsx'

export default function RendererPreview() {
  return (
    <div className='w-full h-full'>
      <Overlay />
      <Canvas frameloop='demand' />
    </div>
  )
}
