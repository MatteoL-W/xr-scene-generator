export const manageSceneObjects = (set, get) => ({
  sceneObjects: [],

  addObjectToScene: (newObject) => {
    set((state) => ({
      sceneObjects: [...state.sceneObjects, { ...newObject }],
    }))
  },
  removeObjectFromScene: (objectToRemove) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.filter(
        (content) => content !== objectToRemove,
      ),
    }))
  },
  removeFocusedObjectFromScene: () => {
    set((state) => ({
      sceneObjects: state.sceneObjects.filter(
        (content) => content.uuid !== state.focusedObjectUUID,
      ),
      focusedObjectUUID: '',
    }))
  },
  resetScene: () => {
    set(() => ({
      focusedObjectUUID: '',
      sceneObjects: [],
    }))
  },
  modifyObject: (newArgs, uuid, repository) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((object) => {
        if (object.uuid !== uuid) return object

        const updatedObject = { ...object }

        if (repository) {
          updatedObject[repository] = {
            ...(object[repository] || {}),
            ...newArgs,
          }
        } else {
          Object.assign(updatedObject, newArgs)
        }

        return updatedObject
      }),
    }))
  },
  modifyObjectUUID: (objectToUpdate, newUUID) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((content) =>
        content === objectToUpdate ? { ...content, uuid: newUUID } : content,
      ),
    }))
  },
  modifyObjectArgs: (objectUUID, newArgs) => {
    const state = get()
    state.modifyObject(newArgs, objectUUID, 'args')
  },
  modifyObjectName: (objectUUID, newName) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((object) =>
        object.uuid === objectUUID
          ? { ...object, userSetName: newName }
          : object,
      ),
    }))
  },
})
