var values = [1, 2, 3, 4, 6];

var casino = {
    lines: [],
    createRandomLineFrom: function(arr) {
        return arr.map(function (n, i, mapppedArray) {
            return Math.ceil(Math.random() * (arr.length - 1))
        });
    },
    fillLines: function(linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function () {
            return self.createRandomLineFrom(fromArray)
        })
    },
    checkMiddleLine: function() {
        var lineIndex = (this.lines[0].length - 1) / 2,
            value = this.lines[0][lineIndex];
        return this.lines.every(function (line) {
            return line[lineIndex] === value;
        })
    },
    checkHorizontalLine: function() {
        let result = false
        this.lines.forEach(function(arr, i) {
            const res = arr.every(function(item, i, arr) {
                return item === arr[0]
            })
            console.log(res) 
            if (res) {
                result = res
            }
        })
        return result
    },
    checkVerticalLine: function() {
        let result = false
        var self = this
        this.lines[0].forEach(function(value, i) {
            const res = self.lines.every(function (line) {
                return line[i] === value;
            })
            if (res) result = res
        })
        return result
    }
}



