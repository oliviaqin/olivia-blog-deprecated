import { BlogContent, ImageListItem, BlogArticle } from '../types';

export const blogContent: BlogContent = {
  '1': {
    title: 'dc cherry blossoms 🌸',
    photos: [
      { type: 'text', content: 'first time in ' },
      { type: 'text', content: 'This is some more content about the blog post.' },
    ],
  },
  '2': {
    title: 'ithaca 🍁',
    photos: [
      {
        src: 'https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299980/instc_2023-10-13_205614.994_etkbzo.jpg',
        alt: 'ithaca'
      }
    ],
  },
  '3': {
    title: 'winter',
    photos: [
      { src: 'https://i.imgur.com/FCwklGk.jpeg', alt: 'susie' },
      { src: 'https://i.imgur.com/I96jAgE.jpeg', alt: 'winter' },
      { src: 'https://i.imgur.com/rXHhHJ0.jpeg', alt: 'winter' },
      { src: 'https://i.imgur.com/JHNMLnj.jpeg', alt: 'winter' },
      { src: 'https://i.imgur.com/DOon82r.jpeg', alt: 'winter' },
      { src: 'https://i.imgur.com/UC9kYJm.jpeg', alt: 'snowboarding' },


    ]
  },
  '4': {
    title: 'cancun',
    photos: [
      { src: 'https://i.imgur.com/xRVq6W4.jpeg', alt: 'cancun' },
      { src: 'https://i.imgur.com/G2ZeUKV.jpeg', alt: 'cancun' },
      { src: 'https://i.imgur.com/lBIsJIm.jpeg', alt: 'cancun' },
      { src: 'https://i.imgur.com/Y5tKBEl.jpeg', alt: 'cancun' },
      { src: 'https://i.imgur.com/b3y3S3O.jpeg', alt: 'cancun' },
    ]
  },
  '5': {
    title: 'italy',
    photos: [
      { src: 'https://i.imgur.com/bRTW8GG.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/gVKWbgE.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/8WEyC0M.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/0zTSkcM.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/kljfzvI.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/reFe6EX.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/line2QG.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/wtIT5aI.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/TnDBJFr.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/jOvqeMC.jpeg', alt: 'italy' },
      { src: 'https://i.imgur.com/RtGHdCE.jpeg', alt: 'italy' },
    ]
  },
  '6': {
    title: 'switzerland',
    photos: [
      { src: 'https://i.imgur.com/sn0Wadb.jpeg', alt: 'switzerland' },
      { src: 'https://i.imgur.com/cKf07vB.jpg', alt: 'switzerland' },
      { src: 'https://i.imgur.com/XS2YfDE.jpg', alt: 'switzerland' },
      { src: 'https://i.imgur.com/Q4Mgw6V.jpeg', alt: 'switzerland' },
      { src: 'https://i.imgur.com/OaWqErl.jpeg', alt: 'switzerland' }
    ]
  },
  '7': {
    title: 'food',
    photos: [
      { src: 'https://i.imgur.com/R6g5AJ0.jpg', alt: 'food' },
      { src: 'https://i.imgur.com/m1zVBhq.jpeg', alt: 'food' },
      { src: 'https://i.imgur.com/uIymplX.jpg', alt: 'food' },
      { src: 'https://i.imgur.com/dBOtdTB.jpg', alt: 'food' },
      { src: 'https://i.imgur.com/n6CZcoA.jpg', alt: 'food' },
      { src: 'https://i.imgur.com/l6TmX8A.jpg', alt: 'food' },
      { src: 'https://i.imgur.com/eXqDWoW.jpg', alt: 'food' },
      { src: 'https://i.imgur.com/BESJKhA.jpg', alt: 'food' }
    ]
  },
  '8': {
    title: 'snowboarding',
    photos: [
      { src: 'https://i.imgur.com/JHNMLnj.jpeg', alt: 'snowboarding' },
      { src: 'https://i.imgur.com/DOon82r.jpeg', alt: 'snowboarding' },
    ]
  },
  '9': {
    title: 'nyc',
    photos: [
      { src: 'https://i.imgur.com/QqixX9J.jpeg', alt: 'nyc' },
      {src: 'https://i.imgur.com/RmGdqaY.jpeg', alt: 'nyc'},
      {src: 'https://i.imgur.com/82IvyPQ.jpeg', alt: 'nyc'},
      {src: 'https://i.imgur.com/eBy9C6P.jpeg', alt: 'nyc'},
      {src: 'https://i.imgur.com/QBBEBBn.jpeg', alt: 'nyc'},
    ]
  },
  '11': {
    title: 'portraits',
    photos: [{ src: 'https://i.imgur.com/WY1OCsy.jpeg', alt: 'portraits'}, { src: 'https://i.imgur.com/egQproN.jpeg', alt: 'portraits' }]
  },
  '12': {
    title: 'etc.',
    photos: [{ src: 'https://i.imgur.com/reLHetL.jpeg', alt: 'etc.' }, 
      {src:'https://i.imgur.com/KBhCB9S.jpeg', alt: 'etc.'},]
  }
};

export const imageList: ImageListItem[] = [
  { id: '7', src: 'https://i.imgur.com/QqixX9J.jpeg', title: 'nyc ❤️', blogKey: '9' },
  { id: '19', src: 'https://i.imgur.com/JYtIgFi.jpeg', title: 'winter', blogKey: '3' },
  { id: '21', src: 'https://i.imgur.com/xRVq6W4.jpeg', title: 'beach', blogKey: '4' },
  { id: '24', src: 'https://i.imgur.com/reLHetL.jpeg', title: 'etc.', blogKey: '12' },
];

// Local blog articles (will be combined with Substack posts)
export const blogArticles: BlogArticle[] = [
  // Add your local blog posts here if you want any
  // They will be combined with Substack posts
];