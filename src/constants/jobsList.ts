import { Job } from '@/shared'

const companiesPath = '/companies/'
const itoneImgPath = 'https://www.it-one.ru/local/templates/t2020/assets/images/decoration/decoration_3.svg'

export const jobsList: Job[] = [
  {
    period: 'Апрель 2024 - Июль 2024',
    company: "Rock'n'Block",
    site: 'https://rocknblock.io/',
    position: 'Frontend-разработчик',
    imgPath: `${companiesPath}rnb.png`,
    description:
      'Работал над тремя проектами в Web3 сфере, два из которых вёл в качестве единственного веб-разработчика. Непосредственно взаимодействовал со smart-контрактами и подключением кошельков с использованием библиотеки Wagmi.',
    techList: ['React', 'TypeScript', 'Chakra UI', 'Wagmi', 'Git'],
  },
  {
    period: 'Ноябрь 2023 - Февраль 2024',
    company: 'IT_ONE',
    site: 'https://www.it-one.ru/',
    imgPath: itoneImgPath,
    position: 'Старший-разработчик',
    description:
      'Разрабатывал приложение в сфере Финтех. Покрывал код юнит-тестами c использованием библиотек Jest и RTL, синхронизировал репозитории для поддержания актуальности кода, исправлял баги.',
    techList: ['React', 'Redux / Saga', 'SCSS', 'Jest', 'Git'],
  },
  {
    period: 'Январь 2021 - Май 2023',
    company: 'Andersen',
    imgPath: `${companiesPath}andersen.png`,
    position: 'Frontend-разработчик',
    site: 'https://andersenlab.com/',
    description:
      'Работал над двумя проектами - банковское приложение и портал для корпоративного обучения. В первом - разрабатывал экраны сервисов банка, такие как оформление заявлений на получение кредитов, карт и др. Во втором -  авторизацию и виджет календарь с возможностью записи в свободные слоты.',
    techList: ['React', 'TypeScript', 'Redux Toolkit', 'SCSS', 'styled-components', 'Git'],
  },
]
