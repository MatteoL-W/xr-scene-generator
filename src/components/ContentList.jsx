import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import ContentModifier from './ContentModifier.jsx'
import { useState } from 'react'

export default function ContentList() {
  const [sceneContent, removeContentFromScene] = useSceneStore(
    (state) => [state.sceneContent, state.removeContentFromScene],
    shallow,
  )
  const [openItems, setOpenItems] = useState([])

  if (sceneContent.length === 0) {
    return <p>Try adding components with A</p>
  }

  function toggleItem(uuid) {
    setOpenItems(
      openItems.includes(uuid)
        ? openItems.filter((item) => item !== uuid)
        : [...openItems, uuid],
    )
  }

  return (
    <div>
      All your meshes :
      <ul>
        {sceneContent.map((scenePiece) => {
          const isOpen = openItems.includes(scenePiece.uuid)
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
              {isOpen && <ContentModifier scenePiece={scenePiece} />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
