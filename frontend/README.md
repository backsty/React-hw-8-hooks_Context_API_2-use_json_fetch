useJsonFetch

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success)](https://backsty.github.io/React-hw-8-hooks_Context_API_2-use_json_fetch/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-purple)](https://vitejs.dev/)

Реализуйте кастомный хук `useJsonFetch`, который позволяет с помощью `fetch` осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:
```javascript
const [data, loading, error] = useJsonFetch(url, opts);
```

где:
* `data` — данные, полученные после `response.json()`, не Promise, а именно данные;
* `error` — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;
* `loading` — boolean флаг, сигнализирующий о том, что загрузка идёт.

Покажите использование этого хука на примере трёх компонентов, каждый из которых делает запросы на следующие адреса:
* GET http://localhost:7070/data — успешное получение данных;
* GET http://localhost:7070/error — получение 500 ошибки;
* GET http://localhost:7070/loading — индикатор загрузки.

Backend возьмите из каталога `backend`.
