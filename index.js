export const concatArrayString = (arr) => {
    if (arr instanceof Array) {
        let res = ''
        arr.forEach(elem => res += elem)
        return res
    }
    return arr
}