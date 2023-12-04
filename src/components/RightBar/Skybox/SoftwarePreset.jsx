import useStore from '@/store/index.jsx'
import { useRef } from 'react'

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
    <div className='flex px-5 py-3 leading-8'>
      <span className='mr-5'>Skybox basic preset</span>
      <select
        name='preset'
        className='px-2 py-1 rounded capitalize'
        ref={presetSelectRef}
        onChange={handleChange}
        value={skyboxPreset}
      >
        <option value=''>None</option>
        {presets.map((preset) => (
          <option value={preset} key={preset}>
            {preset}
          </option>
        ))}
      </select>
    </div>
  )
}
