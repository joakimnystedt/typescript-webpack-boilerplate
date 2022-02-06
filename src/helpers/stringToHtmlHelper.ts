export const stringToHTML = function (str: string) {
    let parser = new DOMParser()
    let doc = parser.parseFromString(str, 'text/html')
    return doc.body
}
