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

  const isInvisible = !skyboxPreset && !skyboxFilesPreset

  return (
    <div className={`${isInvisible && 'hidden'} flex px-5 py-1.5`}>
      <input
        type='checkbox'
        className='mr-2'
        id='environmentLight'
        checked={hasEnvironmentLight}
        onChange={(e) => setEnvironmentLightState(e.target.checked)}
      />

      <label htmlFor='environmentLight'>
        Is illuminated by the skybox environment
      </label>
    </div>
  )
}
