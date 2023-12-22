import meshesPresetList from '@/config/Object3D/Meshes/MeshesPresetList.js'
import lightsPresetList from '@/config/Object3D/Lights/LightsPresetList.js'
import { useTranslation } from 'react-i18next'
import useStore from '@/store/index.jsx'
import OpenMenuButton from './OpenMenuButton.jsx'
import ExternalGLTFLoader from './ExternalGLTFLoader.jsx'
import { BsFillBoxFill, BsLightbulbFill } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'

// ToDo: Split this component into smaller components

export default function Menu() {
  const { t } = useTranslation()
  const [addObjectToScene, setMenuState, isMenuOpen] = useStore((state) => [
    state.addObjectToScene,
    state.setMenuState,
    state.isMenuOpen,
  ])

  if (!isMenuOpen) return <OpenMenuButton />

  return (
    <div className='absolute top-5 left-5 p-3 flex flex-col z-10 bg-jean'>
      <ul className='text-white my-2'>
        {meshesPresetList.map((mesh) => (
          <li
            className='flex items-center mb-1 cursor-pointer'
            key={mesh.name}
            onClick={() => addObjectToScene(mesh)}
          >
            <BsFillBoxFill className='mx-2' />
            {mesh.name}
          </li>
        ))}

        <li className='flex items-center mb-1 cursor-pointer'>
          <BsFillBoxFill className='mx-2' />
          <ExternalGLTFLoader />
        </li>

        {lightsPresetList.map((light, index) => (
          <li
            className={`flex items-center mb-1 cursor-pointer ${
              index === 0 ? 'mt-4 border-t border-white pt-4' : ''
            }`}
            key={light.name}
            onClick={() => addObjectToScene(light)}
          >
            <BsLightbulbFill className='mx-2' />
            {light.name}
          </li>
        ))}
      </ul>

      <div
        className='pt-3 border-t border-white text-white text-center w-full cursor-pointer flex items-center'
        onClick={() => setMenuState(false)}
      >
        <IoCloseSharp className='mx-2' />
        {t('overlay.menu.close')}
      </div>
    </div>
  )
}
