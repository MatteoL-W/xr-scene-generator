export function logDebugReport(debugObject) {
  const camera = debugObject?.camera
  const controls = debugObject?.controls

  if (camera) console.log(camera)
  if (controls)
    console.log(
      controls,
      'azimuthal',
      controls.getAzimuthalAngle(),
      'distance',
      controls.getDistance(),
      'polar',
      controls.getPolarAngle(),
    )
}
