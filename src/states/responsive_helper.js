const width = window.innerWidth
const height = width * (16 / 9)

function getHeightFromPercentage (percentage) {
  return percentage / 100 * height
}

function getWidthFromPercentage (percentage) {
  return percentage / 100 * width
}

function getRatioFromHeight (heightParam) {
  return height / heightParam
}

module.exports = {
  width,
  height,
  getHeightFromPercentage,
  getWidthFromPercentage,
  getRatioFromHeight
}
