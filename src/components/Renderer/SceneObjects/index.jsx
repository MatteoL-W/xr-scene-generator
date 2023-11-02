import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import ObjectTemplate from './ObjectTemplate.jsx'

export default function SceneObjects() {
  const [sceneObjects] = useStore(useShallow((state) => [state.sceneObjects]))

  return (
    <group name='SceneObjectsComponent'>
      {sceneObjects.map((object, index) => (
        <ObjectTemplate object={object} key={object.name + index} />
      ))}
    </group>
  )
}
