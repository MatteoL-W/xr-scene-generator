import RendererPreview from './RendererPreview.jsx'
import ModifiersBar from './ModifiersBar.jsx'
import { HotkeysProvider } from 'react-hotkeys-hook'

export default function Workspace() {
  return (
    <div className='flex flex-1'>
      <div className='flex h-full w-full'>
        <HotkeysProvider initiallyActiveScopes={['renderer']}>
          <RendererPreview />
        </HotkeysProvider>

        <ModifiersBar />
      </div>
    </div>
  )
}
