import { useRef } from 'react'
import useStore from '@/store/index.jsx'
import { userPresets } from '@/config/user/userImportedPresets.js'

export default function UserPreset() {
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
      <span className='w-24'>User preset</span>
      <select
        name='preset'
        className='px-2 py-1 rounded capitalize'
        ref={presetSelectRef}
        onChange={handleChange}
        value={skyboxFilesPreset}
      >
        <option value=''>None</option>
        {userPresets.map((preset) => (
          <option value={preset.file} key={preset.name}>
            {preset.name}
          </option>
        ))}
      </select>
    </div>
  )
}
