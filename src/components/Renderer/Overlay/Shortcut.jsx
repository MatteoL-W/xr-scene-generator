import { useHotkeys } from 'react-hotkeys-hook'
import { useHistoric } from '@/hooks/useHistoric.jsx'
import useStore from '@/store/index.jsx'
import useNewTransformControlsMode from '@/hooks/useTransformControlsHandler.jsx'

export default function Shortcut() {
  const [isMenuOpen, setMenuState, removeFocusedObjectFromScene] = useStore(
    (state) => [
      state.isMenuOpen,
      state.setMenuState,
      state.removeFocusedObjectFromScene,
    ],
  )
  const setTransformControlsMode = useNewTransformControlsMode()
  const { undo, redo } = useHistoric()

  const openMenu = () => setMenuState(!isMenuOpen)
  const setTranslateMode = () => setTransformControlsMode('translate')
  const setRotateMode = () => setTransformControlsMode('rotate')
  const setScaleMode = () => setTransformControlsMode('scale')

  // Overlay openings
  useHotkeys('a', openMenu, { scopes: ['renderer'] })

  // TransformControlsMode
  useHotkeys('g', setTranslateMode, { scopes: ['renderer'] })
  useHotkeys('r', setRotateMode, { scopes: ['renderer'] })
  useHotkeys('s', setScaleMode, { scopes: ['renderer'] })

  // Remove the focused object
  useHotkeys('delete,backspace', removeFocusedObjectFromScene, {
    scopes: ['renderer'],
  })

  // undo, redo
  useHotkeys('ctrl+z', undo, { scopes: ['renderer'] })
  useHotkeys('ctrl+shift+z', redo, { scopes: ['renderer'] })

  return <></>
}
