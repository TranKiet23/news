import Image from '../assets/imgs/freeship.webp';
import Shoes from '../assets/imgs/shoes.webp';
import Euro from '../assets/imgs/euro.webp';
import Mountain from '../assets/imgs/mountain.webp';

import portrant from '../assets/imgs/portrait.jpg';
import landscape from '../assets/imgs/landscape.png';
import sale from '../assets/imgs/sale.webp';


export default class API  {
        static imagesList = [
        { url: Image,  title: "Product name is quite long in some caces. With status active", className: "object-fit: cover" },
        { url: Shoes,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: Shoes,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: Image,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: Image,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
      ]

      static contentList = [
        { url: portrant,  title: "Product name is quite long in some caces. And the news", className: "object-fit: cover" },
        { url: portrant,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: portrant,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
      ]
      static categories = [
        { url: sale,  title: "Product name is quite long in some caces. And the news", className: "object-fit: cover" },
        { url: sale,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: sale,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
        { url: sale,  title: "Product name is quite long in some caces.", className: "object-fit: cover" },
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
        // Add more card objects as needed
      ]
}