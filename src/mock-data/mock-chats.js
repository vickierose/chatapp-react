const moment = require('moment');

export const CHATS = [
    {
    id: 1,
    name: 'Chatting here',
    attendees: [1, 2],
    creator: 1,
    createdAt: moment().subtract(50, 'minutes').format('LT'),

    photo: './mock-avatars.png',
    position: '-13px -129px'
  },
  {
    id: 2,
    name: 'Cool chat',
    attendees: [3, 4],
    creator: 3,
    createdAt: moment().subtract(10, 'minutes').format('LT'),

    photo: './mock-avatars.png',
    position: '-493px -70px'
  }
]