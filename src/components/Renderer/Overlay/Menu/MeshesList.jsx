import meshesPresetList from '@/config/Object3D/Meshes/MeshesPresetList.js'
import { BsFillBoxFill } from 'react-icons/bs'
import { useState } from 'react'
import useStore from '@/store/index.jsx'
import ExternalGLTFLoader from './ExternalGLTFLoader.jsx'
import { Folders } from '@/config/Object3D/Meshes/Folders.js'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

export default function MeshesList() {
  const { t } = useTranslation()
  const [addObjectToScene] = useStore((state) => [state.addObjectToScene])
  const [expandedFolder, setExpandedFolder] = useState(null)

  function handleFolderClick(folder) {
    setExpandedFolder((prevFolder) => (prevFolder === folder ? null : folder))
  }

  function handleMeshClick(mesh, meshTranslation) {
    const addedMesh = { ...mesh }
    addedMesh.name = meshTranslation
    addObjectToScene(addedMesh)
  }

  const foldersAndContent = Object.values(Folders).reduce((acc, folder) => {
    acc[folder] = meshesPresetList.filter((mesh) => mesh.folder === folder)
    return acc
  }, {})
  const foldersEntries = Object.entries(foldersAndContent)

  return (
    <>
      {foldersEntries.map(([folderName, meshes]) => {
        const isExpended = expandedFolder === folderName
        const ArrowComponent = isExpended
          ? IoIosArrowDropup
          : IoIosArrowDropdown

        return (
          <ul
            key={folderName}
            className='mx-2 mb-1'
            onClick={() => handleFolderClick(folderName)}
          >
            <div className='flex items-center'>
              <ArrowComponent className='mr-2' />
              <span>{t(`overlay.folders.${folderName}`)}</span>
            </div>

            {isExpended &&
              meshes.map((mesh) => {
                const meshTranslation = t(`overlay.meshes.${mesh.internalName}`)

                return (
                  <li
                    key={mesh.internalName}
                    onClick={() => handleMeshClick(mesh, meshTranslation)}
                    className='flex items-center mt-1 cursor-pointer'
                  >
                    <BsFillBoxFill className='mx-2' />
                    {meshTranslation}
                  </li>
                )
              })}
          </ul>
        )
      })}

      <li className='flex items-center mb-1 cursor-pointer'>
        <BsFillBoxFill className='mx-2' />
        <ExternalGLTFLoader />
      </li>
    </>
  )
}
