import meshesPresetList from '@/config/Object3D/Meshes/MeshesPresetList.js'
import { BsFillBoxFill } from 'react-icons/bs'
import { useState } from 'react'
import useStore from '@/store/index.jsx'
import ExternalGLTFLoader from './ExternalGLTFLoader.jsx'
import { Folders } from '@/config/Object3D/Meshes/Folders.js'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

export default function MeshesList() {
  const [addObjectToScene] = useStore((state) => [state.addObjectToScene])
  const [expandedFolder, setExpandedFolder] = useState(null)

  function handleFolderClick(folder) {
    setExpandedFolder((prevFolder) => (prevFolder === folder ? null : folder))
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
              <span>{folderName}</span>
            </div>

            {isExpended &&
              meshes.map((mesh) => (
                <li
                  key={mesh.name}
                  onClick={() => addObjectToScene(mesh)}
                  className='flex items-center mt-1 cursor-pointer'
                >
                  <BsFillBoxFill className='mx-2' />
                  {mesh.name}
                </li>
              ))}
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
