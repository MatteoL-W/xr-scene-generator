import RendererPreview from './Renderer/index.jsx'
import { HotkeysProvider } from 'react-hotkeys-hook'
import Header from './Header.jsx'

export default function Workspace() {
  return (
    <HotkeysProvider initiallyActiveScopes={['renderer']}>
      <div className='flex flex-col h-full w-3/4'>
        <Header />
        <RendererPreview />
      </div>
    </HotkeysProvider>
  )
}
