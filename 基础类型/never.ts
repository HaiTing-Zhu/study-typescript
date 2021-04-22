// never 从不会出现的值。
// 永远不会有返回值
let err: never
// 函数中它通常表现为抛出异常或无限循环
err = (() => { throw new Error('hello Error')})()