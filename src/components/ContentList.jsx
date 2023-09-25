import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ContentList() {
  const [sceneContent, setFocusedPiece, removeContentFromScene] = useSceneStore(
    (state) => [
      state.sceneContent,
      state.setFocusedPiece,
      state.removeContentFromScene,
    ],
    shallow,
  )

  if (sceneContent.length === 0) {
    return <p>Try adding components with A</p>
  }

  return (
    <div>
      All your meshes :
      <ul>
        {sceneContent.map((scenePiece) => {
          return (
            <li key={scenePiece.uuid}>
              <span onClick={() => setFocusedPiece(scenePiece)}>
                {scenePiece.name}
              </span>{' '}
              -
              <span onClick={() => removeContentFromScene(scenePiece)}>
                {' '}
                Remove
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
