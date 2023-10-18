import meshesList from '@/data/meshesList.js'
import { shallow } from 'zustand/shallow'
import useStore from '@/store/index.jsx'

export default function MeshesMenu() {
  const [addContentToScene] = useStore(
    (state) => [state.addMeshToScene],
    shallow,
  )

  return (
    <div className='w-20 absolute top-5 left-5 p-2 flex flex-col z-10 bg-jean'>
      <ul className='text-white'>
        {meshesList.map((mesh) => (
          <li key={mesh.name} onClick={() => addContentToScene(mesh)}>
            {mesh.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
