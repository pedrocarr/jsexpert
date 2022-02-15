class File {
    static async csvToJson(filePath) {
        return 'Hello!'
    }

}
(async () => {
    const result = await File.csvToJson("./../mocks/threeItems-valid.csv")
    console.log('result', result)
})();