export function logDebugReport(debugObject) {
  const camera = debugObject?.camera
  const controls = debugObject?.controls
  const scene = debugObject?.scene

  if (camera) console.log(camera)
  if (controls) console.log(controls)
  if (scene) console.log(scene)
}
