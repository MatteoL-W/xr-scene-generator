import SceneMenu from './SceneMenu.jsx'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import Shortcut from './Shortcut.jsx'
import QuickOptions from './QuickOptions/index.jsx'
import SceneMenuButton from './SceneMenuButton.jsx'
import DebugReportButton from '@/components/Renderer/Overlay/DebugReportButton.jsx'

export default function RendererOverlay() {
  const [isMenuOpen] = useStore(useShallow((state) => [state.isMenuOpen]))

  return (
    <Shortcut>
      <div className='relative'>
        {!isMenuOpen && <SceneMenuButton />}
        {isMenuOpen && <SceneMenu />}
        <DebugReportButton />

        <QuickOptions />
      </div>
    </Shortcut>
  )
}
