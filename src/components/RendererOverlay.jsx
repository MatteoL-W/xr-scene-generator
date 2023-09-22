import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import MeshesMenu from './MeshesMenu.jsx'

export default function RendererOverlay() {
  const [isMeshListOpen, setMeshListState] = useState(false)
  useHotkeys('a', () => setMeshListState(!isMeshListOpen), {
    scopes: ['renderer'],
  })

  return <div className='relative'>{isMeshListOpen && <MeshesMenu />}</div>
}
