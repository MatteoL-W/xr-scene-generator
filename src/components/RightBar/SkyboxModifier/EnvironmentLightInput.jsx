import useStore from '@/store/index.jsx'

export default function EnvironmentLightInput() {
  const [
    hasEnvironmentLight,
    setEnvironmentLightState,
    skyboxPreset,
    skyboxFilesPreset,
  ] = useStore((state) => [
    state.hasEnvironmentLight,
    state.setEnvironmentLightState,
    state.skyboxPreset,
    state.skyboxFilesPreset,
  ])

  if (!skyboxPreset && !skyboxFilesPreset) return

  return (
    <div className='flex px-5 py-1.5'>
      <input
        type='checkbox'
        className='mr-2'
        name='environmentLight'
        value={hasEnvironmentLight}
        onChange={() => setEnvironmentLightState(!hasEnvironmentLight)}
      />

      <label htmlFor='environmentLight'>
        Is illuminated by the skybox environment
      </label>
    </div>
  )
}
