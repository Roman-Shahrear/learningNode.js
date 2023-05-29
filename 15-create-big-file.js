// *synchronous method

// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++ ) {
//     writeFileSync('./content/big.txt', `Hello world ${i}\n`, { flag: 'a' })
// }


// *asynchronous method
const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf-8',
})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})

// for find error
stream.on('err', (err) => console.log(err))