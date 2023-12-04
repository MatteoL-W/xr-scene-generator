import useStore from '@/store/index.jsx'
import { useTranslation } from 'react-i18next'

export default function GLTFExporterButton() {
  const { t } = useTranslation()
  const [startWaitingToDownloadGLTF] = useStore((state) => [
    state.startWaitingToDownloadGLTF,
  ])

  return (
    <span onClick={() => startWaitingToDownloadGLTF()}>{t('header.gltf')}</span>
  )
}
