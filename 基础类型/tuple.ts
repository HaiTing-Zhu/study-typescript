// 元组类型表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
const arr: [number, string] = [1, '2']

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}