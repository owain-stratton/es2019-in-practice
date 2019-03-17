// requires NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/nightly nvm install 12

// "�" technically isn't valid JSON, "\ud800" is
var answer = JSON.stringify('\uD800')
console.log(answer)

// wasn't always gauranteed to provide full source code:
console.log((function /*removed*/ \u0066oo /*removed*/ ( /*kept*/ ) { /*kept*/ }).toString())
console.log(new Function('a', 'return a').toString())

// string literals weren't allowed in es2018
console.log(' ')
console.log(' ')
