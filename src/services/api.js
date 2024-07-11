
import portrant from '../assets/imgs/portrait.jpg';
import landscape from '../assets/imgs/landscape.png';

export default class API  {
        static imagesList = [
        { url: `https://placehold.co/200x100`, sub: 'Lorem ipsum dolor sit amet 123', title: "Product name is quite long in some caces.1", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`, sub: 'Lorem ipsum dolor sit amet 234', title: "Product name is quite long in some caces.2", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`, sub: 'Lorem ipsum dolor sit amet 345', title: "Product name is quite long in some caces.3", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`, sub: 'Lorem ipsum dolor sit amet 456', title: "Product name is quite long in some caces.4", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`, sub: 'Lorem ipsum dolor sit amet 678', title: "Product name is quite long in some caces.5", className: "object-fit: cover" },
        { url: `https://placehold.co/200x100`, sub: 'Lorem ipsum dolor sit amet 678', title: "Product name is quite long in some caces.6", className: "object-fit: cover" },
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

      static newsList = [
        { id: 1, category: 'Technology-1', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Headphones and a smartphone on a table' },
        { id: 2, category: 'Technology-2', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kittens in a basket' },
        { id: 3, category: 'Technology-3', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kids walking on a street' },
        { id: 4, category: 'Technology-4', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'People in a meeting room' },
        { id: 5, category: 'Technology-5', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Headphones and a smartphone on a table' },
        { id: 6, category: 'Technology-6', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kittens in a basket' },
        { id: 7, category: 'Technology-7', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Headphones and a smartphone on a table' },
        { id: 8, category: 'Technology-8', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kittens in a basket' },
        { id: 9, category: 'Technology-9', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kids walking on a street' },
        { id: 10, category: 'Technology-10', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'People in a meeting room' },
        { id: 11, category: 'Technology-11', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Headphones and a smartphone on a table' },
        { id: 12, category: 'Technology-12', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kittens in a basket' },
        { id: 13, category: 'Technology-13', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Headphones and a smartphone on a table' },
        { id: 14, category: 'Technology-14', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kittens in a basket' },
        { id: 15, category: 'Technology-15', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kids walking on a street' },
        { id: 16, category: 'Technology-16', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'People in a meeting room' },
        { id: 17, category: 'Technology-17', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Headphones and a smartphone on a table' },
        { id: 18, category: 'Technology-18', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kittens in a basket' },
        { id: 19, category: 'Technology-19', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Headphones and a smartphone on a table' },
        { id: 20, category: 'Technology-20', date: 'January 01, 2045', title: 'Est stet amet ipsum stet clita rebum duo', description: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...', image: 'https://placehold.co/150x150', alt: 'Kittens in a basket' },
      ]


}