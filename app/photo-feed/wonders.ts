
import { StaticImageData } from 'next/image';
import mountains from './photos/mountain.jpg';
import beach from './photos/beach.jpg';
interface WonderImages {
  id: string;
  title: string;
  src: StaticImageData;
  description: string;
}

const images : WonderImages[] = [  
  {  
    id: '1',
    title: 'Image 1',
    src: mountains,
    description: 'This is the first image'
  },
  {  
    id: '2',
    title: 'Image 2',
    src: beach,
    description: 'This is the second image'
  }
];
export default images;