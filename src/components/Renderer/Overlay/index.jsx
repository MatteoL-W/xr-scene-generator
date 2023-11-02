import SceneMenu from './SceneMenu.jsx'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import Shortcut from './Shortcut.jsx'
import QuickOptions from './QuickOptions/index.jsx'

export default function RendererOverlay() {
  const [isMenuOpen] = useStore(useShallow((state) => [state.isMenuOpen]))

  return (
    <Shortcut>
      <div className='relative'>
        {isMenuOpen && <SceneMenu />}

        <QuickOptions />
      </div>
    </Shortcut>
  )
}
