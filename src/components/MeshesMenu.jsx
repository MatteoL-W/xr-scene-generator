import meshesList from '../data/meshesList.js'
import { shallow } from 'zustand/shallow'
import useSceneStore from '../store/SceneStore.jsx'

export default function MeshesMenu() {
  const [addContentToScene] = useSceneStore(
    (state) => [state.addContentToScene],
    shallow,
  )

  function handleMeshClick(mesh) {
    addContentToScene(mesh)
  }

  return (
    <div className='w-20 absolute top-5 left-5 p-2 bg-black flex flex-col z-10'>
      <ul className='text-white'>
        {meshesList.map((mesh) => (
          <li key={mesh.name} onClick={() => handleMeshClick(mesh)}>
            {mesh.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
