import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useStore from '@/store/index.jsx'

export default function ExternalGLTFLoader() {
  const { t } = useTranslation()
  const [setImportedMeshUrl] = useStore((state) => [state.setImportedMeshUrl])
  const gltfInputRef = useRef()

  return (
    <>
      <span onClick={() => gltfInputRef.current?.click()}>
        {t('overlay.menu.gltf')}
      </span>
      <input
        type='file'
        accept='.glb'
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

    event.target.value = null
  }
}
