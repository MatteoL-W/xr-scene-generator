import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import LightTemplate from '@/components/Renderer/Lights/LightTemplate.jsx'

export default function Lights() {
  const [sceneLights] = useStore(useShallow((state) => [state.sceneLights]))

  return (
    <group name='LightsComponent'>
      {sceneLights.map((light, index) => (
        <LightTemplate light={light} key={light.name + index} />
      ))}
    </group>
  )
}
