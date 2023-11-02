import meshesList from '@/data/meshesList.js'
import lightsList from '@/data/lightsList.js'
import useStore from '@/store/index.jsx'

export default function SceneMenu() {
  const [addObjectToScene] = useStore((state) => [state.addObjectToScene])

  return (
    <div className='w-20 absolute top-5 left-5 p-2 flex flex-col z-10 bg-jean'>
      <ul className='text-white'>
        {meshesList.map((mesh) => (
          <li key={mesh.name} onClick={() => addObjectToScene(mesh)}>
            {mesh.name}
          </li>
        ))}

        {lightsList.map((light) => (
          <li key={light.name} onClick={() => addObjectToScene(light)}>
            {light.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
