import Renderer from './Renderer.jsx'
import ModifiersBar from './ModifiersBar.jsx'
import { HotkeysProvider } from 'react-hotkeys-hook'

export default function Workspace() {
  return (
    <div className='flex flex-1'>
      <div className='flex h-full w-full'>
        <HotkeysProvider initiallyActiveScopes={['renderer']}>
          <Renderer />
        </HotkeysProvider>

        <ModifiersBar />
      </div>
    </div>
  )
}
