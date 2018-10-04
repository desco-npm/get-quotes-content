module.exports = txt => {
    const strings = []
    let init
    let quote

    for (pos in txt) {
        const char = txt[pos]

        if ([ '"', "'", ].indexOf(char) !== -1 && !quote) {
            quote = char
            init = pos
        }
        else if (quote === char && txt[pos - 1] !== '\\') {
            strings.push(txt.slice(parseInt(init) + 1, pos))

            init = undefined
            quote = undefined
        }
    }

    return strings
}
