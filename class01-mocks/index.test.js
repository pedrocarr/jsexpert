const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert');

(async () => { 
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
        
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = File.csvToJson(filePath)
        const expected = [
            {
              "id": 123,
              "name": "Pedro Carvalho",
              "profession": "JavaScript Developer",
              "age": 31
            },
            {
              "id": 345,
              "name": "Felipe Carvalho",
              "profession": "Salesman",
              "age": 33
            },
            {
              "id": 365,
              "name": "Glaucio Carvalho",
              "profession": "Politics",
              "age": 63
            }
          ]

          deepStrictEqual(result, expected)
    }
    

       
})()