
import portrant from '../assets/imgs/portrait.jpg';
import landscape from '../assets/imgs/landscape.png';

export default class API  {
        static imagesList = [
        { url: `https://placehold.co/200x100`,  title: "Product name is quite long in some caces. With status active", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
      ]

      static contentList = [
        { url: portrant,  title: "Product name is quite long in some caces. And the news", className: "object-fit: cover" },
        { url: portrant,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: portrant,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
      ]
      static bestSeller = [
        { url: `https://placehold.co/200x300`,  date: `January 01, 2045`,  title: "Technology",  des : 'Lorem ipsum dolor sit amet consec adipis elit' },
        { url: `https://placehold.co/200x300`,  date: `January 01, 2045`,  title: "Technology",  des : 'Lorem ipsum dolor sit amet consec adipis elit' },
        { url: `https://placehold.co/200x300`,  date: `January 01, 2045`,  title: "Technology",  des : 'Lorem ipsum dolor sit amet consec adipis elit' },
        { url: `https://placehold.co/200x300`,  date: `January 01, 2045`,  title: "Technology",  des : 'Lorem ipsum dolor sit amet consec adipis elit' },
      ]

      static categories = [
        { url: `https://placehold.co/200x150`,  title: "Technology" },
        { url: `https://placehold.co/200x150`,  title: "Entertainment" },
        { url: `https://placehold.co/200x150`,  title: "PTechnology" },
        { url: `https://placehold.co/200x150`,  title: "Sports" },
      ]

      static cardArray = [
        {
          image: landscape,
          category: 'Technology',
          date: 'January 01, 2045',
          title: 'Sanctus amet sed ipsum lorem'
        },
        {
          image: landscape,
          category: 'Technology',
          date: 'January 01, 2045',
          title: 'Sanctus amet sed ipsum lorem'
        },
        {
            image: landscape,
            category: 'Technology',
            date: 'January 01, 2045',
            title: 'Sanctus amet sed ipsum lorem'
          },
          {
            image: landscape,
            category: 'Technology',
            date: 'January 01, 2045',
            title: 'Sanctus amet sed ipsum lorem'
          },
      ]

}