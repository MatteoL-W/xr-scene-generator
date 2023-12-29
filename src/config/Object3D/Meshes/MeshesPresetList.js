import { BigToriPreset } from './BigTori/BigToriPreset.jsx'
import { BoxPhongPreset } from './BoxPhong/BoxPhongPreset.jsx'
import { ToriPreset } from './Tori/ToriPreset.jsx'

const meshesPresetList = [
  BoxPhongPreset,
  BigToriPreset,
  ToriPreset,
  {
    name: 'Sphere',
    userSetName: 'Sphere',
    type: 'mesh',
    component: 'Sphere',
    transformations: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    material: {
      'material-color': '#000000',
    },
    args: {
      visible: true,
      receiveShadow: false,
      castShadow: false,
      hasPhysics: false,
      hasInteractivity: false,
      isFloating: false,
    },
  },
]

export default meshesPresetList
