const width = window.innerWidth
const height = width * (16 / 9)

function getHeightFromPercentage (percentage) {
  return percentage / 100 * height
}

function getWidthFromPercentage (percentage) {
  return percentage / 100 * width
}

function getRatioFromHeight (heightParam) {
  console.log('ici');
  console.log(heightParam);
  console.log(height / heightParam);
  console.log('la');
  return height / heightParam
}
console.log({width});
console.log({height});
module.exports = {
  width,
  height,
  getHeightFromPercentage,
  getWidthFromPercentage,
  getRatioFromHeight
}
