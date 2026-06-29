import brideImage from '../assets/images/cover.png';
import groomImage from '../assets/images/cover.png';

import coverImage from '../assets/images/cover.png';

import gallery1 from '../assets/images/cover.png';
import gallery2 from '../assets/images/cover.png';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';

import qrisImage from '../assets/images/qris.png';

import weddingMusic from '../assets/music/wedding-music.mp3';

export const weddingData = {
  bride: {
    name: 'Siti Aisyah',
    nickname: 'Siti',
    photo: brideImage,
    father: 'Bapak H. Ahmad',
    mother: 'Ibu Hj. Nurhayati',
    description:
      'Putri pertama dari keluarga yang penuh cinta dan kebahagiaan.'
  },

  groom: {
    name: 'Budi Santoso',
    nickname: 'Budi',
    photo: groomImage,
    father: 'Bapak H. Sutrisno',
    mother: 'Ibu Hj. Sri Wahyuni',
    description:
      'Putra pertama yang tumbuh dengan nilai keluarga dan tanggung jawab.'
  },

  coverImage,

  weddingDate:
    '2027-06-20T08:00:00',

  story: [
    {
      id: 1,
      title: 'Pertemuan',
      date: '2022',
      description:
        'Awal pertemuan kami menjadi cerita sederhana yang kemudian berkembang menjadi perjalanan yang indah.'
    },
    {
      id: 2,
      title:
        'Menjalin Hubungan',
      date: '2023',
      description:
        'Kami mulai saling mengenal lebih dalam dan membangun masa depan bersama.'
    },
    {
      id: 3,
      title: 'Lamaran',
      date: '2026',
      description:
        'Dengan restu keluarga, kami melangkah ke tahap yang lebih serius.'
    },
    {
      id: 4,
      title: 'Pernikahan',
      date: '2027',
      description:
        'Hari bahagia yang kami nantikan untuk mengikat janji suci seumur hidup.'
    }
  ],

  events: [
    {
      id: 1,
      type: 'Akad Nikah',
      date: '20 Juni 2027',
      time: '08.00 WITA',
      location:
        'Masjid Agung Makassar',
      address:
        'Jl. Masjid Raya No.1, Makassar',
      maps:
        'https://maps.google.com/?q=Masjid+Agung+Makassar'
    },
    {
      id: 2,
      type: 'Resepsi',
      date: '20 Juni 2027',
      time:
        '11.00 - 15.00 WITA',
      location:
        'Grand Ballroom Makassar',
      address:
        'Jl. Jenderal Sudirman No.88, Makassar',
      maps:
        'https://maps.google.com/?q=Grand+Ballroom+Makassar'
    }
  ],

  gallery: [
    {
      id: 1,
      image: gallery1
    },
    {
      id: 2,
      image: gallery2
    },
    {
      id: 3,
      image: gallery3
    },
    {
      id: 4,
      image: gallery4
    },
    {
      id: 5,
      image: gallery5
    },
    {
      id: 6,
      image: gallery6
    }
  ],

  gifts: [
    {
      id: 1,
      bank: 'Bank BCA',
      accountNumber:
        '1234567890',
      accountHolder:
        'Budi Santoso'
    },
    {
      id: 2,
      bank: 'Bank Mandiri',
      accountNumber:
        '9876543210',
      accountHolder:
        'Siti Aisyah'
    }
  ],

  qris: qrisImage,

  video: {
    youtube:
      'https://www.youtube.com/embed/dQw4w9WgXcQ',
    localVideo: ''
  },

  music: {
    title:
      'Wedding Background Music',
    src: weddingMusic
  }
};

export default weddingData;