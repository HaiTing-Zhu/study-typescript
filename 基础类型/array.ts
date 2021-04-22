// 类型[]
const arrNum: number[] = [1, 2, 3, 4]
// 数组泛型
const arrStr: Array<string> = ['1', '2', '3', '4']

const len: number = arrNum.length

for (let index = 0; index < len; index++) {
    console.log(arrNum[index], arrStr[index])
}