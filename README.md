Цей проект створено за допомогою Parcel. Для ознайомлення та налаштування
додаткових можливостей, [зверніться до документації](https://parceljs.org/).

## Запуск проекту

1. Переконайтеся, що на вашому комп'ютері встановлена LTS-версія Node.js.
   [Завантажте та встановіть](https://nodejs.org/en/) якщо потрібно.
2. Клонуйте цей репозиторій.
3. Встановіть залежності проекту в терміналі командою `npm install` .
4. Запустіть режим розробки, виконавши команду `npm start`.
5. Перейдіть у браузері за адресою
   [http://localhost:1234](http://localhost:1234). Ця сторінка автоматично
   оновлюватиметься після збереження змін у файлах проекту.

## Файли та папки

- Зображення додавайте у папку `src/images`. Збірник їх оптимізує, але лише під
  час розгортання продакшн-версії проекту. Все це відбувається в хмарі, щоб не
  навантажувати ваш комп'ютер, оскільки на слабших машинах це може зайняти
  багато часу.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного натискання на `dev` репозиторій GitHub спеціальний скрипт
   (GitHub Action) запускається з файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервері, де проект ініціалізується та
   проходить збірку перед деплоєм.
3. Якщо всі етапи успішно пройдені, зібрана продакшн версія файлів проекту
   надсилається до гілки `gh-pages`. У випадку невдачі, причина буде вказана в
   журналі виконання скрипта.
