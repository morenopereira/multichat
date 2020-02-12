const Message = require('../Message');

describe('Message model test', () => {
  it('Create message', async () => {
    const message = await Message.create({
      value: 'exemple',
      author: 'joe',
    });

    expect(message.value).toBe('exemple');
  });
});
