import { useHotkeys } from 'react-hotkeys-hook'
import useStore from '@/store/index.jsx'
import PropTypes from 'prop-types'
import useNewTransformControlsMode from '@/hooks/useTransformControlsHandler.jsx'

export default function Shortcut({ children }) {
  const [isMenuOpen, setMenuState, removeFocusedObjectFromScene, undo, redo] =
    useStore((state) => [
      state.isMenuOpen,
      state.setMenuState,
      state.removeFocusedObjectFromScene,
      state.undo,
      state.redo,
    ])
  const setTransformControlsMode = useNewTransformControlsMode()

  // Overlay openings
  useHotkeys('a', () => setMenuState(!isMenuOpen), {
    scopes: ['renderer'],
  })

  // TransformControlsMode
  useHotkeys('g', () => setTransformControlsMode('translate'), {
    scopes: ['renderer'],
  })
  useHotkeys('r', () => setTransformControlsMode('rotate'), {
    scopes: ['renderer'],
  })
  useHotkeys('s', () => setTransformControlsMode('scale'), {
    scopes: ['renderer'],
  })

  // remove the focused object
  useHotkeys('delete,backspace', removeFocusedObjectFromScene, {
    scopes: ['renderer'],
  })

  // undo, redo
  useHotkeys('ctrl+z', undo, { scopes: ['renderer'] })
  useHotkeys('ctrl+shift+z', redo, { scopes: ['renderer'] })

  return <>{children}</>
}

Shortcut.propTypes = {
  children: PropTypes.node.isRequired,
}
