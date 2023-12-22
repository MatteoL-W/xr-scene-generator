import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useStore from '@/store/index.jsx'
import { userSkyboxPresets } from '@/config/skybox/userImportedPresets.js'

export default function UserPreset() {
  const { t } = useTranslation()
  const [skyboxFilesPreset, setSkyboxFilesPreset] = useStore((state) => [
    state.skyboxFilesPreset,
    state.setSkyboxFilesPreset,
  ])
  const presetSelectRef = useRef()

  function handleChange(e) {
    const newSkybox = e.target.value
    if (skyboxFilesPreset !== newSkybox) setSkyboxFilesPreset(newSkybox)
  }

  return (
    <div className='flex px-5 py-1.5'>
      <span className='w-40'>{t('right.skybox.user')}</span>
      <select
        name='preset'
        className='px-2 py-1 rounded capitalize'
        ref={presetSelectRef}
        onChange={handleChange}
        value={skyboxFilesPreset}
      >
        <option value=''>{t('right.skybox.none')}</option>
        {userSkyboxPresets.map((preset) => (
          <option value={preset.file} key={preset.name}>
            {preset.name}
          </option>
        ))}
      </select>
    </div>
  )
}
