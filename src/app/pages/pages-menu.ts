import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Event Admin',
    icon: 'person-outline',
    link: '/pages/event-admin',
    home: true,
  },
  {
    title: 'Event Setup',
    icon: 'settings-2-outline',
    link: '/pages/event-setup',
  },
  {
    title: 'Question',
    icon: 'question-mark-circle-outline',
    children: [
      {
        title: 'Category',
        link: '/pages/question/category',
      },
      {
        title: 'Difficulty Level',
        link: '/pages/question/difficulty-level',
      },
      {
        title: 'Game Question',
        link: '/pages/question/game-question',
      }
      
    ],
  },
  {
    title: 'Sponsor',
    icon: 'bookmark-outline',
    link: '/pages/sponsor',
  },
  {
    title: 'Team',
    icon: 'people-outline',
    link: '/pages/team',
  },
  {
    title: 'Location',
    icon: 'pin-outline',
    link: '/pages/location',
  },
  {
    title: 'Participant',
    icon: 'award-outline',
    link: '/pages/participant',
  },
  {
    title: 'QR Creation',
    icon: 'crop',
    link: '/pages/qr-creation',
  },
  {
    title: 'Reset Event',
    icon: 'refresh',
    link: '/pages/reset-event',
  },
  {
    title: 'Statistics',
    icon: 'file-text',
    link: '/pages/statistics',
  },
  {
    title: 'App-Invitation',
    icon: 'gift',
    link: '/pages/app-invitation',
  }  
  // ================== 
  
];
