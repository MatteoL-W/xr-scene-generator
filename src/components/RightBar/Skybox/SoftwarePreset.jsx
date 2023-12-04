import useStore from '@/store/index.jsx'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const presets = [
  'apartment',
  'city',
  'dawn',
  'forest',
  'lobby',
  'night',
  'park',
  'studio',
  'sunset',
  'warehouse',
]

export default function SoftwarePreset() {
  const { t } = useTranslation()
  const [skyboxPreset, setSkyboxPreset] = useStore((state) => [
    state.skyboxPreset,
    state.setSkyboxPreset,
  ])
  const presetSelectRef = useRef()

  function handleChange(e) {
    const newSkybox = e.target.value
    if (skyboxPreset !== newSkybox) setSkyboxPreset(newSkybox)
  }

  return (
    <div className='flex px-5 pt-3 pb-1.5'>
      <span className='w-40'>{t('right.skybox.basic')}</span>
      <select
        name='preset'
        className='px-2 py-1 rounded capitalize'
        ref={presetSelectRef}
        onChange={handleChange}
        value={skyboxPreset}
      >
        <option value=''>{t('right.skybox.none')}</option>
        {presets.map((preset) => (
          <option value={preset} key={preset}>
            {preset}
          </option>
        ))}
      </select>
    </div>
  )
}
