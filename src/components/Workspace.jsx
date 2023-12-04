import RendererPreview from './Renderer/index.jsx'
import Header from './Header/index.jsx'

export default function Workspace() {
  return (
    <div className='flex flex-col h-full w-3/4'>
      <Header />
      <RendererPreview />
    </div>
  )
}
