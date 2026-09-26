module.exports = {
  email: 'avinash03082003@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Avinash0308',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/avi0308/',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Avi0308/',
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/Avi0308',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/avi0308',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/avi0308',
    },
    {
      name: 'Previous Portfolio',
      url: 'https://avinashagrawal.netlify.app',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
