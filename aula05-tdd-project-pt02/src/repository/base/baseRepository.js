class BaseRepository {
  constructor ({ file }) {
    this.file = file;

  }

  async find(itemId) {
    const content = JSON.parse(await readFile(this.file, 'content'));
    if(!itemId) return content

    return content.find(({ id }) => id === itemId)
  }
}