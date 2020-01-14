// console.log('Open----- I will happen first!')
// setTimeout(function(){
//     console.log('Writing----I will wait to be called')
// }, 1000)

// console.log('Close----I dont have to wait!')

// exports.foo = 'bar'


function helloWorld(){
    return 'Hello'
}

// module.exports = helloWorld()



function helloPerson(name){
    return `${name}`
}

module.exports = { World:helloWorld, Person: helloPerson}