// Code your solution here
function findMatching(array, string){
    return array.filter( e => 
        e.toLowerCase() === string.toLowerCase()
    )
}

// function findMatching(source, sought) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase() === sought.toLowerCase()
//     )
//   }

function fuzzyMatch(drivers, string){
    return drivers.filter( e =>
        e.toLowerCase().indexOf(string.toLowerCase()) === 0

    )
}

function matchName(drivers, string){
    return drivers.filter(ele =>
        ele.name === string
        )
}