module.exports = txt => {
    const strings = []
    let init
    let quote

    for (pos in txt) {
        pos = parseInt(pos)

        const char = txt[pos]

        if ([ '"', "'", ].indexOf(char) !== -1 && !quote) {
            quote = char
            init = pos
        }
        else if (quote === char && txt[pos - 1] !== '\\') {
            strings.push(txt.slice(init, pos + 1))

            init = undefined
            quote = undefined
        }
    }

    return strings
}