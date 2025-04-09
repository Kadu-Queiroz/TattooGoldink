import type { Artist } from '@/types/artist';

//RenanImports
import IcoRenan from '@assets/artista/Modura_Renan.png'
import Renan_BG from '@assets/background/Renan_BG.png'
import Tattoo1 from '@assets/portifolio/Renan_1.png'
import Tattoo2 from '@assets/portifolio/Renan_2.png'
import Tattoo3 from '@assets/portifolio/Renan_3.png'


export const artists: Artist[] = [
  {
    id: 'renan',
    name: 'Renan',
    photo: IcoRenan,
    backgroundArt: Renan_BG,
    bio: 'Apaixonado por realismo e preto e cinza, atua há mais de 8 anos no ramo.',
    specialty: 'Realismo / Black & Grey',
    instagram: 'renanink',
    whatsapp: '5599999999999',
    portfolio: [
      {
        id: 'renan-1',
        url: Tattoo1,
        title: 'Leão realista',
        style: 'Realismo',
        bodyPart: 'Braço',
        description: 'Leão detalhado em tons de cinza no bíceps.',
      },
      {
        id: 'renan-2',
        url: Tattoo2,
        title: 'Relógio com rosas',
        style: 'Preto e Cinza',
        bodyPart: 'Antebraço',
        description: 'Relógio e rosas em composição suave.',
      },
      {
        id: 'renan-3',
        url: Tattoo3,
        title: 'Relógio com rosas',
        style: 'Preto e Cinza',
        bodyPart: 'Antebraço',
        description: 'Relógio e rosas em composição suave.',
      },
    ],
  },
  {
    id: 'carol',
    name: 'Carol Mendes',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    backgroundArt: 'https://images.unsplash.com/photo-1544168190-79c17527004f',
    bio: 'Especialista em fineline e florais delicados. Traz leveza em cada traço.',
    specialty: 'Fineline / Florais',
    instagram: 'carolm_ink',
    whatsapp: '5598888888888',
    portfolio: [
      {
        id: 'carol-1',
        url: 'https://images.unsplash.com/photo-1627844541298-892d4dbb7b7c',
        title: 'Flor minimalista',
        style: 'Fineline',
        bodyPart: 'Costela',
        description: 'Traços finos e elegantes de flor única.',
      },
      {
        id: 'carol-2',
        url: 'https://images.unsplash.com/photo-1623057061623-51b07dff9e92',
        title: 'Composição floral',
        style: 'Fineline',
        bodyPart: 'Coluna',
        description: 'Sequência de flores seguindo a linha da coluna.',
      },
    ],
  },
  {
    id: 'lucas',
    name: 'Lucas R.',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    backgroundArt: 'https://images.unsplash.com/photo-1594756207943-e5f8d1cdb027',
    bio: 'Mistura estilos orientais e neotradicionais com muita cor e contraste.',
    specialty: 'Oriental / Neotradicional',
    instagram: 'lucasr_tattoo',
    whatsapp: '5599777777777',
    portfolio: [
      {
        id: 'lucas-1',
        url: 'https://images.unsplash.com/photo-1591738502956-b2bdedb9df1d',
        title: 'Dragão oriental',
        style: 'Oriental',
        bodyPart: 'Costas',
        description: 'Dragão colorido envolvendo o dorso.',
      },
      {
        id: 'lucas-2',
        url: 'https://images.unsplash.com/photo-1612197583313-ec63c8c87d1e',
        title: 'Caveira colorida',
        style: 'Neotradicional',
        bodyPart: 'Peitoral',
        description: 'Caveira estilizada com rosas e ornamentos.',
      },
    ],
  },
  {
    id: 'lara',
    name: 'Lara Dias',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    backgroundArt: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    bio: 'Focada em micro realismo e arte botânica, Lara transforma detalhes em impacto.',
    specialty: 'Micro realismo / Botânica',
    instagram: 'laradias.ink',
    whatsapp: '5599666666666',
    portfolio: [
      {
        id: 'lara-1',
        url: 'https://images.unsplash.com/photo-1541599540903-216a46ca9b81',
        title: 'Rosa em close',
        style: 'Botânica',
        bodyPart: 'Antebraço',
        description: 'Rosa detalhada com sombreamento leve.',
      },
      {
        id: 'lara-2',
        url: 'https://images.unsplash.com/photo-1581427502889-050f162d0b72',
        title: 'Olho realista',
        style: 'Micro realismo',
        bodyPart: 'Pulso',
        description: 'Olho com precisão de sombra e brilho.',
      },
    ],
  },
];
