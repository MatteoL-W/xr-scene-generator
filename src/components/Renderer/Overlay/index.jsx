import MeshesMenu from './MeshesMenu.jsx'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import Shortcut from './Shortcut.jsx'
import QuickOptions from './QuickOptions/index.jsx'

export default function RendererOverlay() {
  const [isMeshListOpen] = useStore(
    useShallow((state) => [state.isMeshListOpen]),
  )

  return (
    <Shortcut>
      <div className='relative'>
        {isMeshListOpen && <MeshesMenu />}

        <QuickOptions />
      </div>
    </Shortcut>
  )
}
