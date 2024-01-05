import lightsPresetList from '@/config/Object3D/Lights/LightsPresetList.js'
import { BsLightbulbFill } from 'react-icons/bs'
import useStore from '@/store/index.jsx'

export default function LightsList() {
  const [addObjectToScene] = useStore((state) => [state.addObjectToScene])

  return lightsPresetList.map((light, index) => (
    <li
      className={`flex items-center mb-1 cursor-pointer ${
        index === 0 ? 'mt-4 border-t border-white pt-4' : ''
      }`}
      onClick={() => addObjectToScene(light)}
      key={light.name}
    >
      <BsLightbulbFill className='mx-2' />
      {light.name}
    </li>
  ))
}
