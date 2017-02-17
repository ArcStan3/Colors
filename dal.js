const { filter, reject } = require('Ramda')
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

function listColors() {
  return colors
}

function getColor(name) {
  return filter(x => x === name, colors)
}

function createColor(color) {
  return colors.push(JSON.stringify(color))
}

function deleteColor(name) {
  return colors = reject(x => x === name, colors)
}

var dal = {
  listColors: listColors,
  getColor: getColor,
  createColor: createColor,
  deleteColor: deleteColor
}


module.exports = dal

//console.log(getColor("yellow"))
