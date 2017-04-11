export const CHATS = [
    {
    id: 1,
    name: 'Chatting here',
    attendees: [1, 2],
    creator: 1,
    createdAt: moment().subtract(50, 'minutes').toDate(),
  },
  {
    id: 2,
    name: 'Cool chat',
    attendees: [3, 4],
    creator: 3,
    createdAt: moment().subtract(10, 'minutes').toDate()
  }
]