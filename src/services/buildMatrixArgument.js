import { Euler, Matrix4, Quaternion, Vector3 } from 'three'

export default function buildMatrixArguments(position, rotation, scale) {
  const generatedMatrix = new Matrix4()
  generatedMatrix.compose(
    new Vector3(...position),
    new Quaternion().setFromEuler(new Euler(...rotation)),
    new Vector3(...scale),
  )

  return generatedMatrix
}
