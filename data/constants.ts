import { BlogContent, ImageListItem, BlogArticle, KnittingProject } from '../types';

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


    ]
  },
  '4': {
    title: 'cancun',
    photos: [
      { src: 'https://i.imgur.com/xRVq6W4.jpeg', alt: 'cancun' },
      { src: 'https://i.imgur.com/G2ZeUKV.jpeg', alt: 'cancun' },
      { src: 'https://i.imgur.com/lBIsJIm.jpeg', alt: 'cancun' },
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
  }
};

// Flatten photos from specific categories: nyc (9), winter (3), and cancun (4)
const selectedBlogKeys = ['9', '3', '4'];
export const imageList: ImageListItem[] = Object.entries(blogContent)
  .filter(([blogKey]) => selectedBlogKeys.includes(blogKey))
  .flatMap(([blogKey, blogPost]) => 
    blogPost.photos
      .filter((photo): photo is { src: string; alt: string } => 
        'src' in photo && 'alt' in photo
      )
      .map((photo, index) => ({
        id: `${blogKey}-${index}`,
        src: photo.src,
        title: blogPost.title,
        blogKey: blogKey
      }))
  );

// Local blog articles (will be combined with Substack posts)
export const blogArticles: BlogArticle[] = [
  // Add your local blog posts here if you want any
  // They will be combined with Substack posts
];

// Knitting Projects
export const knittingProjects: KnittingProject[] = [
  // Add your knitting projects here
  // Example:
  // {
  //   id: '1',
  //   title: 'Cozy Cardigan',
  //   pattern: 'Classic Cardigan Pattern',
  //   yarn: 'Wool-Ease Thick & Quick',
  //   status: 'in progress',
  //   startDate: '2024-01-15',
  //   notes: 'Working on the sleeves',
  //   image: 'https://example.com/image.jpg',
  //   patternUrl: 'https://example.com/pattern'
  // }
  {
    id: '1',
    title: 'Cozy Cardigan',
    pattern: 'Stripe Overload Cardigan',
    yarn: 'Knitting for olive mohair silk yarn (Cherry blossom)',
    status: 'in progress',
    startDate: '2025-12-23',
    notes: 'Just started this project and waiting for the yarn to arrive. \n Picture is from rednote user 9511373035!',
    image: 'https://i.imgur.com/RLKQmb2.jpeg',
    patternUrl: 'https://www.ravelry.com/patterns/library/stripe-overload-cardi',
    yarnUrl: 'https://www.woolandcompany.com/products/knitting-for-olive-soft-silk-mohair-cherry-blossom',
  }
];