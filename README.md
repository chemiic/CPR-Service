# ЛАД — Лидер Автодиагностики

Сайт автосервиса по диагностике и ремонту электроники французских автомобилей Citroën, Peugeot, Renault.

## Стек

- Next.js 13 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion

## Локальная разработка

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm run start
```

## Деплой на VPS через PM2

1. Склонируйте репозиторий на сервер и установите зависимости:

```bash
npm install
npm run build
```

2. Запустите приложение через PM2:

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

3. Настройте nginx как reverse proxy (пример в `deploy/nginx.conf.example`):

```bash
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/lad-site
sudo ln -s /etc/nginx/sites-available/lad-site /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## Структура страниц

- `/` — главная
- `/services` — услуги и цены
- `/contacts` — контакты

## Контент

Весь текстовый контент сайта находится в `lib/site-content.ts`. Для обновления телефона, услуг и цен редактируйте этот файл.
