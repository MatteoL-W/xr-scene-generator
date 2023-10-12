import GenerateAutomaticInput from '../services/GenerateAutomaticInput.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import ModifiersTitle from './ModifiersTitle.jsx'
import { BsFillBoxFill } from 'react-icons/bs'

export default function MeshModifier() {
  const [sceneMeshes, focusedMeshUUID, resetFocusedMesh, transformControlsRef] =
    useSceneStore(
      (state) => [
        state.sceneMeshes,
        state.focusedMeshUUID,
        state.resetFocusedMesh,
        state.transformControlsRef,
      ],
      shallow,
    )

  if (!sceneMeshes || !focusedMeshUUID || !transformControlsRef) return <></>

  const focusedMesh = sceneMeshes.find((mesh) => mesh.uuid === focusedMeshUUID)

  if (!focusedMesh) {
    resetFocusedMesh()
    return
  }

  const { position, rotation, scale } = transformControlsRef.current.object
  const focusedMeshTransformProperty = { position, rotation, scale }

  return (
    <div className='border-b border-b-white'>
      <ModifiersTitle
        title={`"${focusedMesh.name}" Modifier`}
        Icon={BsFillBoxFill}
      />

      {Object.entries(focusedMeshTransformProperty).map(
        ([propertyLabel, propertyValue]) => (
          <GenerateAutomaticInput
            key={propertyLabel}
            propertyLabel={propertyLabel}
            propertyValue={propertyValue}
          />
        ),
      )}
    </div>
  )
}
