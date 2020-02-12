const User = require('../User');

describe('User model test', () => {
  it('Create user', async () => {
    const user = await User.create({
      name: 'Joe',
      nickName: 'Joe joe',
      email: 'joe@joe.com',
      birthday: '25/09/1990',
      restriction: false,
      logged: false,
    });

    expect(user.email).toBe('joe@joe.com');
  });
});
