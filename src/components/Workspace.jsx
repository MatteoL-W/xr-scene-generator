import Renderer from './Renderer.jsx'
import ModifiersBar from './ModifiersBar.jsx'

export default function Workspace() {
  return (
    <div className='flex flex-1'>
      <div className='flex h-full w-full'>
        <Renderer />
        <ModifiersBar />
      </div>
    </div>
  )
}
