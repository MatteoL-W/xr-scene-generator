import MeshesMenu from './MeshesMenu.jsx'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import Shortcut from './Shortcut.jsx'

export default function RendererOverlay() {
  const [isMeshListOpen] = useStore((state) => [state.isMeshListOpen], shallow)

  return (
    <Shortcut>
      <div className='relative'>{isMeshListOpen && <MeshesMenu />}</div>
    </Shortcut>
  )
}
