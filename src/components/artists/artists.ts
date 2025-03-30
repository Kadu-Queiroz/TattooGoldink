import { Artist } from '../../types/artist';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Alex Gold',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    backgroundArt: 'https://images.unsplash.com/photo-1590246815117-ea8e34f8f050?q=80&w=1000&auto=format&fit=crop',
    bio: 'Especialista em realismo e blackwork, com mais de 10 anos de experiência. Cada tatuagem é uma obra de arte única que conta uma história.',
    instagram: '@alexgold.ink',
    whatsapp: '+5511999999991',
    portfolio: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=1000&auto=format&fit=crop',
        title: 'Realismo Leão'
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=1000&auto=format&fit=crop',
        title: 'Mandala Costas'
      }
    ]
  },
  {
    id: '2',
    name: 'Marina Silva',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    backgroundArt: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop',
    bio: 'Especializada em aquarela e fineline. Transforma ideias delicadas em arte permanente com um toque único e feminino.',
    instagram: '@marinasilva.tattoo',
    whatsapp: '+5511999999992',
    portfolio: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1578301978162-51d0e0b6fd10?q=80&w=1000&auto=format&fit=crop',
        title: 'Aquarela Flores'
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1578301978018-927731d82d8a?q=80&w=1000&auto=format&fit=crop',
        title: 'Fineline Geométrico'
      }
    ]
  }
];