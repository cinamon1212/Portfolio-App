import { GithubIcon, Project, VisitIcon } from '@/shared'

const brainwaveVercelLink = 'https://brainwave-app-cinamon.vercel.app/'
const countriesVercelLink = 'https://countries-cinamon.vercel.app/'
const weatherVercelLink = 'https://weather-app-cinamon.vercel.app/'

export const projects: Project[] = [
  {
    name: 'Brainwave-App',
    description:
      'Лэндинг приложение с ИИ интерфейсом и удивительным, красочным и адаптивным под любое расширение экрана дизайном.',
    imgPath: '/projects/brainwave.jpg',
    technologiesList: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    vercelLink: brainwaveVercelLink,
    links: [
      {
        href: 'https://github.com/cinamon1212/Brainwave-App?tab=readme-ov-file',
        Icon: GithubIcon,
      },
      { href: brainwaveVercelLink, Icon: VisitIcon },
    ],
  },
  {
    name: 'Countries-App',
    description:
      'Приложение для поиска информации по странам. Здесь есть поисковая строка, отдельная страница с информацией о конкретной стране и фильтрация по региону.',
    imgPath: '/projects/countries.jpg',
    technologiesList: ['React', 'TypeScript', 'Webpack', 'styles-components'],
    vercelLink: countriesVercelLink,
    links: [
      { href: countriesVercelLink, Icon: VisitIcon },
      {
        href: 'https://github.com/cinamon1212/Countries-App?tab=readme-ov-file',
        Icon: GithubIcon,
      },
    ],
  },
  {
    name: 'Weather-App',
    description:
      'Приложение для поиска прогноза погоды по названию города или страны. Здесь можно узнать температуру, влажность и скорость ветра в определенной локации.',
    imgPath: '/projects/weather.jpg',
    technologiesList: ['React', 'TypeScript', 'Vite', 'Chakra UI'],
    vercelLink: weatherVercelLink,
    links: [
      {
        href: 'https://github.com/cinamon1212/Weather-App',
        Icon: GithubIcon,
      },
      { href: weatherVercelLink, Icon: VisitIcon },
    ],
  },
]
