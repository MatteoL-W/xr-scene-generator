const hexColorPattern = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/

export function isHexColor(str) {
  return hexColorPattern.test(str)
}
