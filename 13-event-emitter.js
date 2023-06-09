// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

// on and emit method
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
    console.log(`data receive user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`Some other logic here`)
})


customEmitter.emit('response', 'Roman Shahrear', 13)