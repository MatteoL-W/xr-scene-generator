import { useMemo, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function ExternalGLTFLoader() {
  const loader = useMemo(() => new GLTFLoader(), [])
  const gltfInputRef = useRef()

  function handleOnClick() {
    gltfInputRef.current?.click()
  }

  return (
    <>
      <span onClick={handleOnClick}>Load a GLB object</span>
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

    const onLoad = (gltf) => {
      URL.revokeObjectURL(url)
      console.log(gltf)
    }

    const onError = (error) => {
      console.log('error', error)
      URL.revokeObjectURL(url)
    }

    loader.load(url, onLoad, null, onError)
  }
}
