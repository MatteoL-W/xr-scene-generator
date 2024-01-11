import { useHotkeys } from 'react-hotkeys-hook'
import useHistoric from '@/hooks/useHistoric.jsx'
import useStore from '@/store/index.jsx'
import useNewTransformControlsMode from '@/hooks/useTransformControlsHandler.jsx'
import useDuplicate from '@/hooks/useDuplicate.jsx'

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
  const { duplicateFocusedObject } = useDuplicate()

  const openMenu = () => setMenuState(!isMenuOpen)
  const setTranslateMode = () => setTransformControlsMode('translate')
  const setRotateMode = () => setTransformControlsMode('rotate')
  const setScaleMode = () => setTransformControlsMode('scale')

  // Overlay openings
  useHotkeys('a', openMenu)

  // TransformControlsMode
  useHotkeys('g', setTranslateMode)
  useHotkeys('r', setRotateMode)
  useHotkeys('s', setScaleMode)

  // Remove the focused object
  useHotkeys('delete,backspace', removeFocusedObjectFromScene)

  // undo, redo
  useHotkeys('ctrl+z', undo)
  useHotkeys('ctrl+shift+z', redo)

  // Duplicate the focused object
  useHotkeys('ctrl+c', duplicateFocusedObject)
  useHotkeys('ctrl+d', duplicateFocusedObject)

  return <></>
}
