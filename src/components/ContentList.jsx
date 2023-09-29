import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ContentList() {
  const [sceneContent, removeContentFromScene] = useSceneStore(
    (state) => [state.sceneContent, state.removeContentFromScene],
    shallow,
  )
  const [selectedContent, modifySelectedContent] = useSceneStore(
    (state) => [state.selectedContent, state.modifySelectedContent],
    shallow,
  )

  if (sceneContent.length === 0) {
    return <p>Try adding components with A</p>
  }

  function toggleItem(uuid) {
    modifySelectedContent(selectedContent === uuid ? '' : uuid)
  }

  return (
    <div>
      All your meshes :
      <ul>
        {sceneContent.map((scenePiece) => {
          if (!scenePiece.uuid) return
          return (
            <li key={scenePiece.uuid}>
              <span onClick={() => toggleItem(scenePiece.uuid)}>
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
