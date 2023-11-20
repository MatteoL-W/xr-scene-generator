import meshesList from '@/data/meshesList.js'
import lightsList from '@/data/lightsList.js'
import useStore from '@/store/index.jsx'
import { BsFillBoxFill, BsLightbulbFill } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'

export default function SceneMenu() {
  const [addObjectToScene] = useStore((state) => [state.addObjectToScene])

  return (
    <div className='absolute top-5 left-5 p-3 flex flex-col z-10 bg-jean'>
      <ul className='text-white my-2'>
        {meshesList.map((mesh) => (
          <li
            className='flex items-center mb-1 cursor-pointer'
            key={mesh.name}
            onClick={() => addObjectToScene(mesh)}
          >
            <BsFillBoxFill className='mx-2' />
            {mesh.name}
          </li>
        ))}

        {lightsList.map((light, index) => (
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

      <div className='pt-3 border-t border-white text-white text-center w-full cursor-pointer flex items-center'>
        <IoCloseSharp className='mx-2' />
        Close
      </div>
    </div>
  )
}
