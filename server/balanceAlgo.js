/**
 * @param snippet
 * @returns bool wether of not string is balanced
 */

const isBalanced = (snippet) => {
    const stack = [];
    for(let i=0;i<snippet.length;i++) {
        if(snippet[i] === '{'|| snippet[i] === '('|| snippet[i] === '[') {
            stack.push(snippet[i])
        }

        if(snippet[i] === '}') {
            const pair = stack.pop()
            if(pair !== '{') {
                return false
            }
        }
        if(snippet[i] === ')') {
            const pair = stack.pop()
            if(pair !== '(') {
                return false
            }
        }
        if(snippet[i] === ']') {
            const pair = stack.pop()
            if(pair !== '[') {
                return false
            }
        }
    }

    return stack.length === 0
}
module.exports = isBalanced;
// const main = async () => {
//     const snippets = [
//         '[]', // true
//         '()', // true
//         '{}', // true
//         '{[(])}', // false
//         '{ hello }', //true
//         '[', // false
//         '{()[]}', // true
//         ']',
//     ];

//     for(let i=0;i<snippets.length;i++){
//         const ans = isBalanced(snippets[i])
//         console.log(snippets[i]);
//         console.log(ans)
//         console.log('=====================================')
//     }
// }

// main();