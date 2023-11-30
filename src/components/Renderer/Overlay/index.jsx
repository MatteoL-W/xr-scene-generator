import Shortcut from './Shortcut.jsx'
import QuickOptions from './QuickOptions/index.jsx'
import DebugReportButton from '@/components/Renderer/Overlay/DebugReportButton.jsx'
import SceneMenuHandler from '@/components/Renderer/Overlay/Menu/index.jsx'

export default function RendererOverlay() {
  return (
    <Shortcut>
      <div className='relative'>
        <SceneMenuHandler />
        <DebugReportButton />

        <QuickOptions />
      </div>
    </Shortcut>
  )
}
