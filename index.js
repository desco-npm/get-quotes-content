const getQuotesContent = (txt, returnWithQuotes = false) => {
    const strings = []
    let init
    let end
    let quote

    for (pos in txt) {
        pos = parseInt(pos)

        const char = txt[pos]

        if ([ '"', "'", ].indexOf(char) !== -1 && !quote) {
            quote = char
            init = pos
        }
        else if (quote === char && txt[pos - 1] !== '\\') {

            if (!returnWithQuotes) quote = ''

            strings.push(`${quote}${txt.slice(init + 1, pos)}${quote}`)

            init = undefined
            quote = undefined

        }
    }

    return strings
}

module.exports = getQuotesContent