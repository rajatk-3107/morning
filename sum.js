exports.sum = (a, b) => {
        return a + b;
    }
    // module.exports = sum

var a = process.argv
if (a[2] == "sum") {
    sum(a[3], a[4])
}