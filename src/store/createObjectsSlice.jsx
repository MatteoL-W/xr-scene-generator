export const manageSceneObjects = (set) => ({
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
  modifyObjectUUID: (objectToUpdate, newUUID) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((content) =>
        content === objectToUpdate ? { ...content, uuid: newUUID } : content,
      ),
    }))
  },
  modifyObject: (newArgs, uuid) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((object) =>
        object.uuid === uuid
          ? {
              ...object,
              ...newArgs,
            }
          : object,
      ),
    }))
  },
  modifyObjectArgs: (objectUUID, newArgs) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((object) =>
        object.uuid === objectUUID
          ? { ...object, args: { ...object.args, ...newArgs } }
          : object,
      ),
    }))
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
