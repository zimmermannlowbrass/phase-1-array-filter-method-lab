// Code your solution here
function findMatching(arr, str) {
  let names = []
  let newStr = str.toUpperCase()
  arr.filter(function (el) {
    let newEl = el.toUpperCase()
    if (newEl === newStr) {
      names.push(el)
    }
  })
  return names
}


function fuzzyMatch(arr, query) {
  let names = []
  let x = query.length
  arr.filter(function(el) {
    let check = el.slice(0,x)
    if (check === query) {
      names.push(el)
    }})
    return names
}

function matchName(driver, str) {
  let names = []
  driver.filter(function (el) {
    let drivName = el.name
    if (drivName === str) {
      names.push(el)
    }
  })
  return names
}


drivers = [
  'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'
]

fuzzyMatch(drivers, 'Sa')