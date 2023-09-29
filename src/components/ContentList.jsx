import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ContentList() {
  // ToDo: Faire un hook pour faciliter la récupération ?
  const [
    sceneMeshes,
    removeContentFromScene,
    focusedMeshUUID,
    changeFocusedMesh,
  ] = useSceneStore(
    (state) => [
      state.sceneMeshes,
      state.removeMeshFromScene,
      state.focusedMeshUUID,
      state.changeFocusedMesh,
    ],
    shallow,
  )

  function toggleItem(uuid) {
    changeFocusedMesh(focusedMeshUUID === uuid ? '' : uuid)
  }

  if (sceneMeshes.length === 0) {
    return <p>Try adding components with A</p>
  }

  return (
    <div>
      All your meshes :
      <ul>
        {sceneMeshes.map((scenePiece) => {
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
