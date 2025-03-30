import type { Artist } from '@/types/artist';

export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'Alex Gold',
    specialty: 'Realismo e Blackwork',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    backgroundArt: 'https://images.unsplash.com/photo-1590246815117-ea8e34f8f050?q=80&w=1000&auto=format&fit=crop',
    bio: 'Especialista em realismo e blackwork, com mais de 10 anos de experiência. Cada tatuagem é uma obra de arte única que conta uma história.',
    instagram: 'alexgold.ink',
    whatsapp: '5511999999991',
    portfolio: [
      {
        id: 'art-1-1',
        url: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=1000&auto=format&fit=crop',
        title: 'Realismo Leão',
        style: 'Realismo',
        bodyPart: 'Braço',
        description: 'Tatuagem realista de leão com detalhes impressionantes'
      },
      {
        id: 'art-1-2',
        url: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=1000&auto=format&fit=crop',
        title: 'Mandala Costas',
        style: 'Blackwork',
        bodyPart: 'Costas',
        description: 'Mandala detalhada cobrindo toda a região das costas'
      },
      {
        id: 'art-1-3',
        url: 'https://images.unsplash.com/photo-1578301978293-137f950c3f8a?q=80&w=1000&auto=format&fit=crop',
        title: 'Retrato Realista',
        style: 'Realismo',
        bodyPart: 'Panturrilha',
        description: 'Retrato em preto e branco com sombreamento perfeito'
      }
    ]
  },
  {
    id: 'artist-2',
    name: 'Marina Silva',
    specialty: 'Aquarela e Fineline',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    backgroundArt: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop',
    bio: 'Especializada em aquarela e fineline. Transforma ideias delicadas em arte permanente com um toque único e feminino.',
    instagram: 'marinasilva.tattoo',
    whatsapp: '5511999999992',
    portfolio: [
      {
        id: 'art-2-1',
        url: 'https://images.unsplash.com/photo-1578301978162-51d0e0b6fd10?q=80&w=1000&auto=format&fit=crop',
        title: 'Aquarela Flores',
        style: 'Aquarela',
        bodyPart: 'Costela',
        description: 'Composição floral em estilo aquarela com cores vibrantes'
      },
      {
        id: 'art-2-2',
        url: 'https://images.unsplash.com/photo-1578301978018-927731d82d8a?q=80&w=1000&auto=format&fit=crop',
        title: 'Fineline Geométrico',
        style: 'Fineline',
        bodyPart: 'Pulso',
        description: 'Design geométrico preciso com linhas finas e delicadas'
      },
      {
        id: 'art-2-3',
        url: 'https://images.unsplash.com/photo-1578301978175-9c687509a732?q=80&w=1000&auto=format&fit=crop',
        title: 'Constelação',
        style: 'Fineline',
        bodyPart: 'Pescoço',
        description: 'Desenho minimalista de constelação atrás da orelha'
      }
    ]
  },
  {
    id: 'artist-3',
    name: 'Carlos Oliveira',
    specialty: 'Old School e Tribal',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    backgroundArt: 'https://images.unsplash.com/photo-1578301978333-9bd7c7fe1e24?q=80&w=1000&auto=format&fit=crop',
    bio: 'Mestre em tatuagens Old School e designs tribais. Trabalha com cores vibrantes e traços marcantes que permanecem por décadas.',
    instagram: 'carlos.ink',
    whatsapp: '5511999999993',
    portfolio: [
      {
        id: 'art-3-1',
        url: 'https://images.unsplash.com/photo-1578301978333-9bd7c7fe1e24?q=80&w=1000&auto=format&fit=crop',
        title: 'Águia Old School',
        style: 'Old School',
        bodyPart: 'Peito',
        description: 'Águia tradicional com cores vivas e contorno marcante'
      },
      {
        id: 'art-3-2',
        url: 'https://images.unsplash.com/photo-1578301978368-1bb7ab0b5b75?q=80&w=1000&auto=format&fit=crop',
        title: 'Máscara Tribal',
        style: 'Tribal',
        bodyPart: 'Braço',
        description: 'Design tribal moderno com padrões complexos'
      }
    ]
  }
];