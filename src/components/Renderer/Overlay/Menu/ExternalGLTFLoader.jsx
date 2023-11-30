import { useRef } from 'react'
import useStore from '@/store/index.jsx'

export default function ExternalGLTFLoader() {
  const [setImportedMeshUrl] = useStore((state) => [state.setImportedMeshUrl])
  const gltfInputRef = useRef()

  return (
    <>
      <span onClick={() => gltfInputRef.current?.click()}>
        Load a GLB object
      </span>
      <input
        type='file'
        accept='.gltf, .glb'
        onChange={handleFileChange}
        ref={gltfInputRef}
        className='hidden'
      />
    </>
  )

  function handleFileChange(event) {
    const file = event.target.files[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setImportedMeshUrl(url)
  }
}
