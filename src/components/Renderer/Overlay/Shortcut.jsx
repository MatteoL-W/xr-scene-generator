import { useHotkeys } from 'react-hotkeys-hook'
import useStore from '../../../store/index.jsx'
import { shallow } from 'zustand/shallow'
import PropTypes from 'prop-types'

export default function Shortcut({ children }) {
  const [isMeshListOpen, setMeshListState] = useStore(
    (state) => [state.isMeshListOpen, state.setMeshListState],
    shallow,
  )

  useHotkeys('a', () => setMeshListState(!isMeshListOpen), {
    scopes: ['renderer'],
  })

  return <>{children}</>
}

Shortcut.propTypes = {
  children: PropTypes.node.isRequired,
}
