const Room = require('../Room')

describe('Room model test', () => {
  it ('Create room', async () => {
    const room = await Room.create({
      name: 'exemple room',
      messages: []
    })

    expect(room.name).toBe('exemple room')
  })
})