import { useHotkeys } from 'react-hotkeys-hook'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import PropTypes from 'prop-types'

export default function Shortcut({ children }) {
  const [
    isMeshListOpen,
    setMeshListState,
    setTransformControlsMode,
    removeFocusedMeshFromScene,
  ] = useStore(
    useShallow((state) => [
      state.isMeshListOpen,
      state.setMeshListState,
      state.setTransformControlsMode,
      state.removeFocusedMeshFromScene,
    ]),
  )

  // Overlay openings
  useHotkeys('a', () => setMeshListState(!isMeshListOpen), {
    scopes: ['renderer'],
  })

  // TransformControlsMode
  useHotkeys('r', () => setTransformControlsMode('rotate'), {
    scopes: ['renderer'],
  })
  useHotkeys('s', () => setTransformControlsMode('scale'), {
    scopes: ['renderer'],
  })
  useHotkeys('g', () => setTransformControlsMode('translate'), {
    scopes: ['renderer'],
  })

  // delete remove focused mesh
  useHotkeys('delete,backspace', removeFocusedMeshFromScene, {
    scopes: ['renderer'],
  })

  return <>{children}</>
}

Shortcut.propTypes = {
  children: PropTypes.node.isRequired,
}
