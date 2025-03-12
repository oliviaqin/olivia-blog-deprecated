import { useRouter } from 'next/router';
import BlogTemplate from '../../components/BlogTemplate/blog_template';
import {imageList, blogContent} from '../../utils/_const'

export default function Post ({post}) {
  const router = useRouter();
  // const { id } = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No data found for this post.</div>;
  }

  return (<BlogTemplate title={post.title} photos={post.photos} />);
};

// Get image info based on the id
export async function getStaticProps({ params }) {
  const blogContent = {
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
        {src: 'https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299980/instc_2023-10-13_205614.994_etkbzo.jpg', alt: 'x'}
    ],
    },
    // Add more blogContent as needed
    '3': {
        title: 'veresaille',
        photos: [
            {src:'https://i.imgur.com/yo7IREE.jpg', alt: 'x'},
            {src:'https://i.imgur.com/D25JJb5.jpg', alt: 'x'},
            // {src:'https://i.imgur.com/8WEyC0M.jpeg', alt: 'x'},
            // {src:'https://i.imgur.com/0zTSkcM.jpeg', alt: 'x'},
        ]
    },
    '4': {
        title: 'cancun',
        photos: [
            { type: 'text', content: '' },
            { type: 'image', content: '' },
            { type: 'text', content: ''}
        ]
    },
    '5': {
        title: 'italy',
        photos: [
            {src:'https://i.imgur.com/bRTW8GG.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/gVKWbgE.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/8WEyC0M.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/0zTSkcM.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/kljfzvI.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/reFe6EX.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/line2QG.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/wtIT5aI.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/CLKTyok.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/jOvqeMC.jpeg', alt: 'x'},
            {src:'https://i.imgur.com/RtGHdCE.jpeg', alt: 'x'},
            // {src:'https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698109611/cpm35_2023-10-23_210240.390_fnmkar.jpg', alt: 'x'},

        ]
    },
    '6': {
        title: 'switzerland',
        photos: [
            { src: "https://i.imgur.com/sn0Wadb.jpeg", alt: "x" },
            { src: "https://i.imgur.com/cKf07vB.jpg", alt: "x" },
            { src: "https://i.imgur.com/XS2YfDE.jpg", alt: "x" },
            { src: "https://i.imgur.com/OaWqErl.jpeg", alt: "x" },
            { src: "https://i.imgur.com/EFkJ9pb.jpeg", alt: "x" },
            { src: "https://i.imgur.com/CO22q2Y.jpeg", alt: "x" },
            { src: 'https://i.imgur.com/zH3VlLt.jpeg', alt: 'x'},
            { src: 'https://i.imgur.com/JJ1HlMd.jpeg', alt: 'x'},
            { src: 'https://i.imgur.com/tDNYgok.jpeg', alt: 'x'},
            { src: 'https://i.imgur.com/IeIeWJl.jpeg', alt: 'x'},

        ]
    },
    '7': {
        title: 'etc.',
        photos: [
            // { src: "https://i.imgur.com/R6g5AJ0.jpg", alt: "x" },
            { src: "https://i.imgur.com/yYy2W9n.jpeg", alt: 'x'},
            // { src: "https://i.imgur.com/uIymplX.jpg", alt: "x" },
            // { src: "https://i.imgur.com/dBOtdTB.jpg", alt: 'x'},
            // { src: "https://i.imgur.com/n6CZcoA.jpg", alt: 'x'},
            // { src: "https://i.imgur.com/l6TmX8A.jpg", alt: 'x' },
            // { src: "https://i.imgur.com/7pvjPJe.jpeg", alt: 'x'},
            // { src: "https://i.imgur.com/eXqDWoW.jpg", alt: 'x' },
            // { src: "https://i.imgur.com/BESJKhA.jpg", alt: 'x' },
        ]
    },
    '8': {
        title: 'snowboarding',
        photos: [
            { src: "https://i.imgur.com/JHNMLnj.jpeg", alt: "x" },
            { src: "https://i.imgur.com/DOon82r.jpeg", alt: "x" },
            { src: "https://i.imgur.com/UC9kYJm.jpeg", alt: "x" },
        ]
    },
    '9': {
        title: 'nyc', 
        photos: [
            // { src: "https://i.imgur.com/paFZD3G.jpeg", alt: "x"},
            // { src: "https://i.imgur.com/J9do5li.jpeg", alt: "x"},
            // { src: "https://i.imgur.com/VXM7bKo.jpeg", alt: "x"},
            // { src: "https://i.imgur.com/G8p4MwM.jpeg", alt: "x"},
            { src: "https://i.imgur.com/82IvyPQ.jpeg", alt: "x"},
            { src: "https://i.imgur.com/QBBEBBn.jpeg", alt: "x"},
            { src: "https://i.imgur.com/rOUm8Ap.jpeg", alt: "x"},
            { src: "https://i.imgur.com/QqixX9J.jpeg", alt: "x"},
        ]
    },
    '10': {
      title: 'upstate',
      photos: [
        { src: "https://i.imgur.com/JYtIgFi.jpeg", alt: "x"},
        { src: "https://i.imgur.com/VweZYNb.jpeg", alt: "x"},
        { src: "https://i.imgur.com/6z6DFGj.jpeg", alt: "x"},
        { src: "https://i.imgur.com/0plkwNk.jpeg", alt: "x"},
        { src: "https://i.imgur.com/YynjqSF.jpeg", alt: "x"},
        { src: "https://i.imgur.com/NedRhpD.jpeg", alt: "x"},
        // { src: "https://i.imgur.com/DwIUZuP.jpeg", alt: "x"},
        // { src: "https://i.imgur.com/rXHhHJ0.jpeg", alt: "x"},
        // { src: "https://i.imgur.com/FCwklGk.jpeg", alt: "x"},
        // { src: "https://i.imgur.com/r4R9frh.jpeg", alt: "x"}

      ]
    },
    '11': {
      title: 'antiques',
      photos: [
        { src: "https://i.imgur.com/R5Hz3zL.jpeg", alt: "x"},
        { src: "https://i.imgur.com/ZJOOI0a.jpeg", alt: "x"},
        { src: "https://i.imgur.com/TZPQp2t.jpeg", alt: "x"},
      ]
    },
    '12': {
      title: 'portraits',
      photos: [
        { src: "https://i.imgur.com/WY1OCsy.jpeg", alt: "x"},
        { src: "https://i.imgur.com/egQproN.jpeg", alt: "x"},
        { src: "https://i.imgur.com/4fYqD4E.jpeg", alt: "x"}
      ]
    }
  }
  const imageList = [
    { id: '7', src: "https://i.imgur.com/SegJoGq.jpeg", title: "nyc ❤️" , blogKey: '9'},
    { id: '19', src: "https://i.imgur.com/zdTZwLW.jpeg", title: "paris", blogKey: '3'},
    { id: '28', src: "https://i.imgur.com/ccGNkWY.jpeg", title: "switzerland", blogKey: '6'},
    { id: '32', src: "https://i.imgur.com/jhTMf5e.jpeg", title: "italy", blogKey: '5'},
    { id: '50', src: "https://i.imgur.com/TZPQp2t.jpeg", title: "diner", blogKey: '10'},
    { id: '100', src: "https://i.imgur.com/b3pLSvF.jpeg", title: "pt 2. antiques", blogKey: '11'},
    { id: '24', src: "https://i.imgur.com/viGR8CQ.jpeg", title: "etc.", blogKey: '7'},
    {id: '12', src: "https://i.imgur.com/ktYWKl3.jpeg", title: "portraits", blogKey: '12'}

  ];
  const image = imageList.find(img => img.id === params.id);
  const post = image ? blogContent[image.blogKey] : null;

  return {
    props: { 
      post,
    },
  };
}

export async function getStaticPaths() {
  const imageList = [
    { id: '7', src: "https://i.imgur.com/SegJoGq.jpeg", title: "nyc ❤️" , blogKey: '9'},
    { id: '19', src: "https://i.imgur.com/cZrwSvm.jpg", title: "paris", blogKey: '3'},
    { id: '28', src: "https://i.imgur.com/9zLrmUV.jpg", title: "switzerland", blogKey: '6'},
    { id: '32', src: "https://i.imgur.com/nYGA6JZ.jpeg", title: "italy", blogKey: '5'},
    { id: '50', src: "https://i.imgur.com/fqfD972.jpeg", title: "diner", blogKey: '10'},
    { id: '100', src: "https://i.imgur.com/b3pLSvF.jpeg", title: "pt. 2 antiques", blogKey: '11'},
    { id: '24', src: "https://i.imgur.com/viGR8CQ.jpeg", title: "etc.", blogKey: '7'}
  ];

  const paths = imageList.map((image) => ({
    params: { id: image.id },
  }));

  return {
    paths,
    fallback: true, // true or 'blocking'
  };
}