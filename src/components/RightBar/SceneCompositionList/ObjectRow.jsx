import RowNameEditing from './RowNameEditing.jsx'
import { useState } from 'react'
import useStore from '@/store/index.jsx'
import { BsFillBoxFill, BsLightbulbFill } from 'react-icons/bs'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import PropTypes from 'prop-types'

ObjectRow.propTypes = {
  object: PropTypes.object.isRequired,
}

export default function ObjectRow({ object }) {
  const [
    removeObjectFromScene,
    focusedObjectUUID,
    changeFocusedObjectUUID,
    modifyObjectArgs,
  ] = useStore((state) => [
    state.removeObjectFromScene,
    state.focusedObjectUUID,
    state.changeFocusedObjectUUID,
    state.modifyObjectArgs,
  ])
  const [isRenaming, setIsRenaming] = useState(false)
  const objectIsVisible = object.args.visible

  function toggleObjectVisibility() {
    // Reset focused object when it's set on invisible
    if (objectIsVisible && focusedObjectUUID === object.uuid)
      changeFocusedObjectUUID('')

    modifyObjectArgs(object.uuid, {
      visible: !objectIsVisible,
    })
  }

  function activateRenaming() {
    setIsRenaming(true)
  }

  // ToDo: Subcomponents
  return (
    <li className='flex items-center gap-3'>
      {object.type === 'light' && (
        <BsLightbulbFill
          className={`cursor-pointer text-lg ${
            objectIsVisible ? 'text-white' : 'text-gray-400'
          }`}
          onClick={toggleObjectVisibility}
        />
      )}

      {object.type === 'mesh' && (
        <BsFillBoxFill
          className={`cursor-pointer text-lg ${
            objectIsVisible ? 'text-white' : 'text-gray-400'
          }`}
          onClick={toggleObjectVisibility}
        />
      )}

      <RowNameEditing
        object={object}
        editing={isRenaming}
        resetEditingState={() => setIsRenaming(false)}
      />

      <div className='flex items-center text-xl gap-x-2'>
        <MdOutlineDriveFileRenameOutline onClick={activateRenaming} />

        <AiFillDelete
          className='cursor-pointer'
          onClick={() => removeObjectFromScene(object)}
        />
      </div>
    </li>
  )
}
