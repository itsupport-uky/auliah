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
    name: 'Muhajir Misbahuddin S.ST',
    nickname: 'Hajir',
    photo: groomImage,
    father: 'Bapak Subhan',
    mother: 'Ibu Maryam',
    description:
      'Putra kedua yang tumbuh dengan nilai keluarga dan tanggung jawab.'
  },

  groom: {
    name: 'Siti Nur Aulia Jamal',
    nickname: 'Aulia',
    photo: brideImage,
    father: 'Bapak Jamaluddin',
    mother: 'Ibu Mariati',
    description:
      'Putri bungsu dari keluarga yang penuh cinta dan kebahagiaan.'
    },

  coverImage,

  weddingDate:
    '2026-07-04T08:00:00',

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
      date: '2026',
      description:
        'Hari bahagia yang kami nantikan untuk mengikat janji suci seumur hidup.'
    }
  ],

  events: [
    {
      id: 1,
      type: 'Akad Nikah',
      date: '4 Juli 2026',
      time: '10.00 WITA',
      location:
        'Masjid Al-Mubarak Paccerakkang',
      address:
        'Jl. Paccerakkang',
      maps:
        'https://maps.app.goo.gl/pKdKWWPECgc7LY4Q8'
    },
    {
      id: 2,
      type: 'Resepsi',
      date: '4 Juli 2025',
      time:
        '11.00 - Selesai WITA',
      location:
        'Paccerakkang',
      address:
        'Jl. Paccerakkang No. 158',
      maps:
        'https://maps.app.goo.gl/ZQfqEPraKjvfRTY8A'
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
      bank: 'DANA',
      accountNumber:
        '089680557052',
      accountHolder:
        'Siti Nur Aulia Jamal'
    },
    {
      id: 2,
      bank: 'Bank BNI',
      accountNumber:
        '1810274600',
      accountHolder:
        'Muhajir Misbahuddin'
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