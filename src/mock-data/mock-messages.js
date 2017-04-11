const moment = require('moment');
export const MESSAGES = [
     {
    id: 1,
    senderId: 1,
    isRead: true,
    sentAt: moment().subtract(45, 'minutes').format('LT'),
    text: 'Hello!',
    chatId: 1
  },
  {
    id: 2,
    senderId: 1,
    isRead: true,
    sentAt: moment().subtract(20, 'minutes').format('LT'),
    text: 'How are you?',
    chatId: 1
  },
  {
    id: 3,
    senderId: 1,
    isRead: true,
    sentAt: moment().subtract(30, 'minutes').format('LT'),
    text: 'Hi man!',
    chatId: 1
  },
  {
    id: 4,
    senderId: 2,
    isRead: true,
    sentAt: moment().subtract(15, 'minutes').format('LT'),
    text: `I\'m fine, thanks!`,
    chatId: 1
  },
  {
    id: 5,
    senderId: 3,
    isRead: true,
    sentAt: moment().subtract(5, 'minutes').format('LT'),
    text: `I\'ll wait you near street at 5 o\'clock`,
    chatId: 2
  },
  {
    id: 6,
    senderId: 4,
    isRead: true,
    sentAt: moment().subtract(3, 'minutes').format('LT'),
    text: `Ok, I will be here in 20 minutes!`,
    chatId: 2
  }
]