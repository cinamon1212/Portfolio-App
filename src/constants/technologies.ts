import { Technology } from '@/shared'

const wikiAddress = 'https://ru.wikipedia.org/wiki/'
const technologiesPath = '/technologies/'

export const technologies: Technology[] = [
  {
    href: 'https://react.dev/',
    name: 'React',
    imgPath: `${technologiesPath}react.png`,
  },
  {
    href: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
    imgPath: `${technologiesPath}typescript.png`,
  },
  {
    href: `${wikiAddress}JavaScript`,
    name: 'JavaScript',
    imgPath: `${technologiesPath}js.png`,
  },
  {
    href: `${wikiAddress}HTML`,
    name: 'HTML',
    imgPath: `${technologiesPath}html.png`,
  },
  {
    href: `${wikiAddress}CSS`,
    name: 'CSS',
    imgPath: `${technologiesPath}css.png`,
  },
  {
    href: 'https://sass-lang.com/',
    name: 'Sass',
    imgPath: `${technologiesPath}sass.png`,
  },
  {
    href: 'https://redux-toolkit.js.org/',
    name: 'Redux Toolkit',
    imgPath: `${technologiesPath}redux_toolkit.png`,
  },
  {
    href: 'https://git-scm.com/',
    name: 'Git',
    imgPath: `${technologiesPath}git.png`,
  },
]
