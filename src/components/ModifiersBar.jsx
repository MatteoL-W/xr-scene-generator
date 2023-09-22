import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ModifiersBar() {
  const { sceneContent, removeContentFromScene } = useSceneStore(
    (state) => ({
      sceneContent: state.sceneContent,
      removeContentFromScene: state.removeContentFromScene,
    }),
    shallow,
  )

  return (
    <div className='w-1/4 bg-gray-500'>
      All your meshes :
      <ul>
        {sceneContent.map((scenePiece) => {
          console.log(scenePiece)
          return (
            <li key={scenePiece.uuid}>
              {scenePiece.name} -{' '}
              <span onClick={() => removeContentFromScene(scenePiece)}>
                Remove
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
