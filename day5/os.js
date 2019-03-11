// @ts-check

const os = require('os')
const path = require('path')

/** demo os */
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.type())

/** demo path */
console.log(path.normalize(process.cwd()))
console.log(path.join(process.cwd(), '/test_dir'))
console.log(path.isAbsolute(process.cwd()))
console.log(path.isAbsolute('./test'))
