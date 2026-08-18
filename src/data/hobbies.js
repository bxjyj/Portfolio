import { asset } from '../lib/asset';

// Hobbies data (previously hardcoded inside Router.js — moved here so it
// follows the same "one file per data type" pattern as everything else).
const hobbiesData = [
  {
    id: 'hiking',
    title: 'Hiking',
    description: 'Exploring nature trails and enjoying the beauty of nature.',
    image: asset('images/boardwalk.jpg'),
    photos: [asset('images/boardwalk.jpg')],
    summary:
      "Hiking is my way of grounding myself and staying present in the moment. I love being able to walk amongst the trees and just enjoy the outdoors.",
  },
  {
    id: 'bird-watching',
    title: 'Bird Watching',
    description:
      'Observing and identifying birds in their natural habitats. A peaceful hobby that connects me with nature and wildlife.',
    image: asset('images/snowy.jpg'),
    photos: [
      asset('images/heron.jpg'),
      asset('images/blueheron.jpg'),
      asset('images/redtail.jpg'),
      asset('images/snailkite.jpg'),
      asset('images/unknownbird.jpg'),
    ],
    summary:
      'Bird watching has taught me to slow down and pay attention to the world around me. I love listening and watching them fly by.',
  },
  {
    id: 'sculpting',
    title: 'Sculpting',
    description: 'Creating three-dimensional art from my fingertips.',
    image: asset('images/IMG_5959.JPG'),
    photos: [asset('images/IMG_5959.JPG'), asset('images/IMG_1798.jpg')],
    summary:
      'Sculpting allows me to express creativity through my hands. Whether functional pieces or display pieces, sculpting is my favorite way to create.',
  },
];

export default hobbiesData;
