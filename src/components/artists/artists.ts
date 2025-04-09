import type { Artist } from '@/types/artist';

//RenanImports
import IcoRenan from '@assets/artista/Modura_Renan.png'
import Renan_BG from '@assets/background/Renan_BG.png'
import Tattoo1 from '@assets/portifolio/Renan_1.png'
import Tattoo2 from '@assets/portifolio/Renan_2.png'
import Tattoo3 from '@assets/portifolio/Renan_3.png'
//VitorImports
import IcoVitor from '@assets/artista/Moldura_Vitor.png'
import Vitor_BG from '@assets/background/Vitor_BG.png'
import Tattoo4 from '@assets/portifolio/Vitor_1.png'
import Tattoo5 from '@assets/portifolio/Vitor_2.png'
import Tattoo6 from '@assets/portifolio/Vitor_3.png'
//ThiagoImports
import IcoThiago from '@assets/artista/Moldura_Thiago.png'
import Thiago_BG from '@assets/background/Thiago_BG.png'
import Tattoo7 from '@assets/portifolio/Thiago_1.png'
import Tattoo8 from '@assets/portifolio/Thiago_2.png'
import Tattoo9 from '@assets/portifolio/Thiago_3.png'
//PavaniImports
import IcoPavani from '@assets/artista/Moldura_Pavani.png'
import Pavani_BG from '@assets/background/Pavani_BG.png'
import Tattoo10 from '@assets/portifolio/Pavani_1.png'
import Tattoo11 from '@assets/portifolio/Pavani_2.png'
import Tattoo12 from '@assets/portifolio/Pavani_3.png'


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
    id: 'vitor',
    name: 'Vitor',
    photo: IcoVitor,
    backgroundArt: Vitor_BG,
    bio: 'Especialista em fineline e florais delicados. Traz leveza em cada traço.',
    specialty: 'Fineline / Florais',
    instagram: 'carolm_ink',
    whatsapp: '5598888888888',
    portfolio: [
      {
        id: 'vitor-1',
        url: Tattoo4,
        title: 'Flor minimalista',
        style: 'Fineline',
        bodyPart: 'Costela',
        description: 'Traços finos e elegantes de flor única.',
      },
      {
        id: 'vitor-2',
        url: Tattoo5,
        title: 'Composição floral',
        style: 'Fineline',
        bodyPart: 'Coluna',
        description: 'Sequência de flores seguindo a linha da coluna.',
      },
      {
        id: 'vitor-3',
        url: Tattoo6,
        title: 'Composição floral',
        style: 'Fineline',
        bodyPart: 'Coluna',
        description: 'Sequência de flores seguindo a linha da coluna.',
      },
    ],
  },
  {
    id: 'thiago',
    name: 'Thiago',
    photo: IcoThiago,
    backgroundArt: Thiago_BG,
    bio: 'Com mais de 10 anos de experiência, Thiago é um mestre do realismo e do blackwork.',
    specialty: 'Oriental / Neotradicional',
    instagram: 'lucasr_tattoo',
    whatsapp: '5599777777777',
    portfolio: [
      {
        id: 'thiago-1',
        url: Tattoo7,
        title: 'Dragão oriental',
        style: 'Oriental',
        bodyPart: 'Costas',
        description: 'Dragão colorido envolvendo o dorso.',
      },
      {
        id: 'thiago-2',
        url: Tattoo8,
        title: 'Caveira colorida',
        style: 'Neotradicional',
        bodyPart: 'Peitoral',
        description: 'Caveira estilizada com rosas e ornamentos.',
      },
      {
        id: 'thiago-3',
        url: Tattoo9,
        title: 'Caveira colorida',
        style: 'Neotradicional',
        bodyPart: 'Peitoral',
        description: 'Caveira estilizada com rosas e ornamentos.',
      },
    ],
  },
  {
    id: 'pavani',
    name: 'Pavani',
    photo: IcoPavani,
    backgroundArt: Pavani_BG,
    bio: 'Focada em micro realismo e arte botânica, Lara transforma detalhes em impacto.',
    specialty: 'Micro realismo / Botânica',
    instagram: 'laradias.ink',
    whatsapp: '5599666666666',
    portfolio: [
      {
        id: 'pavani-1',
        url: Tattoo10,
        title: 'Rosa em close',
        style: 'Botânica',
        bodyPart: 'Antebraço',
        description: 'Rosa detalhada com sombreamento leve.',
      },
      {
        id: 'pavani-2',
        url: Tattoo11,
        title: 'Olho realista',
        style: 'Micro realismo',
        bodyPart: 'Pulso',
        description: 'Olho com precisão de sombra e brilho.',
      },
      {
        id: 'pavani-3',
        url: Tattoo12,
        title: 'Olho realista',
        style: 'Micro realismo',
        bodyPart: 'Pulso',
        description: 'Olho com precisão de sombra e brilho.',
      },
    ],
  },
];
