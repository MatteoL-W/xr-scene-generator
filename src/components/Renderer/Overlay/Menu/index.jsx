import SceneMenuButton from '@/components/Renderer/Overlay/Menu/SceneMenuButton.jsx'
import SceneMenu from '@/components/Renderer/Overlay/Menu/SceneMenu.jsx'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'

export default function SceneMenuHandler() {
  const [isMenuOpen] = useStore(useShallow((state) => [state.isMenuOpen]))

  if (isMenuOpen) return <SceneMenu />
  else return <SceneMenuButton />
}
