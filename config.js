'use strict';

module.exports = {
  url: 'https://frontendcafe.dev',
  pathPrefix: '/',
  title: '前端咖啡 Frontend Cafe',
  subtitle: 'A website about frontend development.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-154754923-1',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About',
      path: '/pages/about'
    }
    // {
    //   label: 'Contact me',
    //   path: '/pages/contacts'
    // }
  ],
  author: {
    name: 'Yow-Long Lee',
    photo: '/photo.jpeg',
    bio: 'Frontend Engineer',
    contacts: {
      email: 'hello@frontendcafe.dev',
      twitter: '@yowlonglee',
      github: 'yowlonglee'
      // rss: '#'
    }
  }
};
