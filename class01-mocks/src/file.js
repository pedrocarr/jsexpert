const { readFile } = require('fs/promises')
const { join } = require('path')

class File {
    static async csvToJson(filePath) {
        const content = await File.getFileContent(filePath)
        return content
    }

    static async getFileContent(filePath) {
        const fileName = join(__dirname, filePath)
        return (await readFile(fileName)).toString("utf8")
    }

    static getFileContent(filePath) {

    }

}
(async () => {
    const result = await File.csvToJson("./../mocks/threeItems-valid.csv")
    console.log('result', result)
})();