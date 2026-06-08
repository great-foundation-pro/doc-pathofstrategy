import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/
export default defineConfig({
  integrations: [
    starlight({
      title: 'Путь Стратегии',
      description: 'Система древнекитайских классических текстов',
      customCss: [
        './src/styles/custom.css',
      ],
      head: [],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      sidebar: [
        {
          label: 'О проекте',
          items: [
            { label: 'Введение', link: '/introduction' },
            { label: 'О проекте', link: '/about' },
          ],
        },
        {
          label: 'Сунь-Цзы',
          items: [
            { label: 'Обзор', link: '/texts/sunzi' },
            { label: 'Комментарии', link: '/texts/sunzi/gl-00-kommentarii' },
            { label: 'Глава I — Предварительные расчёты', link: '/texts/sunzi/gl-01-predvaritelnye-raschety' },
            { label: 'Глава II — Ведение войны', link: '/texts/sunzi/gl-02-vedenie-voyny' },
            { label: 'Глава III — Стратегическое нападение', link: '/texts/sunzi/gl-03-strategicheskoe-napadenie' },
            { label: 'Глава IV — Форма', link: '/texts/sunzi/gl-04-forma' },
            { label: 'Глава V — Мощь', link: '/texts/sunzi/gl-05-moshch' },
            { label: 'Глава VI — Полнота и пустота', link: '/texts/sunzi/gl-06-polnita-i-pustota' },
            { label: 'Глава VII — Борьба на войне', link: '/texts/sunzi/gl-07-borba-na-voyne' },
            { label: 'Глава VIII — Девять изменений', link: '/texts/sunzi/gl-08-devyat-izmeneniy' },
            { label: 'Глава IX — Поход', link: '/texts/sunzi/gl-09-pohod' },
            { label: 'Глава X — Формы местности', link: '/texts/sunzi/gl-10-formy-mestnosti' },
            { label: 'Глава XI — Девять местностей', link: '/texts/sunzi/gl-11-devyat-mestnostey' },
            { label: 'Глава XII — Огневое нападение', link: '/texts/sunzi/gl-12-ognevoie-napadenie' },
            { label: 'Глава XIII — Использование шпионов', link: '/texts/sunzi/gl-13-ispolzovanie-shpionov' },
          ],
        },
        {
          label: 'Вэй Ляо-цзы',
          items: [
            { label: 'Обзор', link: '/texts/wei-liao-zi' },
            { label: 'Глава I — Небесные чиновники', link: '/texts/wei-liao-zi/gl-01-небесные-чиновники' },
            { label: 'Глава II — Рассуждения о войске', link: '/texts/wei-liao-zi/gl-02-рассуждения-о-войске' },
            { label: 'Глава III — Установление порядка', link: '/texts/wei-liao-zi/gl-03-установление-порядка' },
            { label: 'Глава IV — Боевая мощь', link: '/texts/wei-liao-zi/gl-04-боевая-мощь' },
            { label: 'Глава V — Искусство нападения', link: '/texts/wei-liao-zi/gl-05-искусство-нападения' },
            { label: 'Глава VI — Искусство обороны', link: '/texts/wei-liao-zi/gl-06-искусство-обороны' },
            { label: 'Глава VII — Двенадцать заслуг и бед', link: '/texts/wei-liao-zi/gl-07-двенадцать-заслуг-и-бед' },
            { label: 'Глава VIII — Военные обсуждения', link: '/texts/wei-liao-zi/gl-08-военные-обсуждения' },
            { label: 'Глава IX — Судья-полководец', link: '/texts/wei-liao-zi/gl-09-судья-полководец' },
            { label: 'Глава X — Изначальные чиновники', link: '/texts/wei-liao-zi/gl-10-изначальные-чиновники' },
            { label: 'Глава XI — Управление корнем', link: '/texts/wei-liao-zi/gl-11-управление-корнем' },
            { label: 'Глава XII — Право войны', link: '/texts/wei-liao-zi/gl-12-право-войны' },
            { label: 'Глава XIII — Приказ о тяжёлом наказании', link: '/texts/wei-liao-zi/gl-13-приказ-о-тяжёлом-наказании' },
            { label: 'Глава XIV — Приказ о порядках у и ши', link: '/texts/wei-liao-zi/gl-14-приказ-о-порядках-у-и-ши' },
            { label: 'Глава XV — Приказ о разделении лагерей', link: '/texts/wei-liao-zi/gl-15-приказ-о-разделении-лагерей' },
            { label: 'Глава XVI — Приказ о связывании у', link: '/texts/wei-liao-zi/gl-16-приказ-о-связывании-у' },
            { label: 'Глава XVII — Приказ о классификации войск', link: '/texts/wei-liao-zi/gl-17-приказ-о-классификации-войск' },
            { label: 'Глава XVIII — Приказ о барабанах и трубах', link: '/texts/wei-liao-zi/gl-18-приказ-о-барабанах-и-трубах' },
            { label: 'Глава XIX — Приказ полководца', link: '/texts/wei-liao-zi/gl-19-приказ-полководца' },
            { label: 'Глава XX — Приказ о пяточной армии', link: '/texts/wei-liao-zi/gl-20-приказ-о-пяточной-армии' },
            { label: 'Глава XXI — Военное обучение (верх)', link: '/texts/wei-liao-zi/gl-21-военное-обучение,-верхняя-часть' },
            { label: 'Глава XXII — Военное обучение (низ)', link: '/texts/wei-liao-zi/gl-22-военное-обучение,-нижняя-часть' },
            { label: 'Глава XXIII — Военные приказы (верх)', link: '/texts/wei-liao-zi/gl-23-военные-приказы,-верхняя-часть' },
            { label: 'Глава XXIV — Военные приказы (низ)', link: '/texts/wei-liao-zi/gl-24-военные-приказы,-нижняя-часть' },
          ],
        },
        {
          label: 'Гуй Гу-цзы',
          items: [
            { label: 'Обзор', link: '/texts/guy-guy-tszy' },
            { label: 'Комментарии', link: '/texts/guy-guy-tszy/gl-00-kommentarii' },
            { label: 'Глава I — Открытость и закрытость', link: '/texts/guy-guy-tszy/gl-01-открытость-и-закрытость' },
            { label: 'Глава II — Несходство и сходство', link: '/texts/guy-guy-tszy/gl-02-несходство-и-сходство' },
            { label: 'Глава III — Зацепка внутри', link: '/texts/guy-guy-tszy/gl-03-зацепка-внутри' },
            { label: 'Глава IV — Упреждать появление оврагов', link: '/texts/guy-guy-tszy/gl-04-упреждать-появление-оврагов' },
            { label: 'Глава V — Воодушевлять, чтобы подчинить', link: '/texts/guy-guy-tszy/gl-05-воодушевлять-чтобы-подчинить' },
            { label: 'Глава VI — Противостояние в согласии', link: '/texts/guy-guy-tszy/gl-06-противостояние-в-согласии' },
            { label: 'Глава VII — О проницательности', link: '/texts/guy-guy-tszy/gl-07-о-проницательности' },
            { label: 'Глава VIII — Угождение', link: '/texts/guy-guy-tszy/gl-08-угождение' },
            { label: 'Глава IX — Оселок разговора', link: '/texts/guy-guy-tszy/gl-09-оселок-разговора' },
            { label: 'Глава X — Планы', link: '/texts/guy-guy-tszy/gl-10-планы' },
            { label: 'Глава XI — Принятие решений', link: '/texts/guy-guy-tszy/gl-11-принятие-решений' },
            { label: 'Глава XII — О соответствии слов делам', link: '/texts/guy-guy-tszy/gl-12-о-соответствии-слов-делам' },
          ],
        },
        {
          label: 'Семь искусств тайного соответствия',
          items: [
            { label: 'Обзор', link: '/texts/sem-iskusstv' },
            { label: 'Глава 1 — Восполнение духа', link: '/texts/sem-iskusstv/gl-01-vospolnenie-dukha' },
            { label: 'Глава 2 — Пестование воли', link: '/texts/sem-iskusstv/gl-02-pestovanie-voli' },
            { label: 'Глава 3 — Наполненность помыслов', link: '/texts/sem-iskusstv/gl-03-napolnennost-pomyslov' },
            { label: 'Глава 4 — Разделение силы', link: '/texts/sem-iskusstv/gl-04-razdelenie-sily' },
            { label: 'Глава 5 — Распространение силы', link: '/texts/sem-iskusstv/gl-05-rasprostranenie-sily' },
            { label: 'Глава 6 — Вращение по кругу', link: '/texts/sem-iskusstv/gl-06-vrashenie-po-krugu' },
            { label: 'Глава 7 — Умаление и прибыток', link: '/texts/sem-iskusstv/gl-07-umalenie-i-pribytok' },
            { label: 'Глава 8 — Держаться оси', link: '/texts/sem-iskusstv/gl-08-derzhatsya-osi' },
            { label: 'Глава 9 — Управление изнутри', link: '/texts/sem-iskusstv/gl-09-upravlenie-iznutri' },
          ],
        },
        {
          label: 'Лю Тао (Шесть секретных учений)',
          items: [
            { label: 'Обзор', link: '/texts/liu-tao' },
          ],
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/pathofstrategy' },
      ],
    }),
  ],
});
