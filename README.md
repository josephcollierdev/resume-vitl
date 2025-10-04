<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

# Local Development Setup

This section provides instructions for setting up the Resume Vitl portfolio website locally for development.

## Prerequisites

- PHP 8.3+
- Composer
- Node.js 18+
- npm or yarn

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resume-vitl
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Set up environment file**
   ```bash
   cp .env.example .env
   ```

5. **Configure database for local development**

   The `.env` file should be configured for SQLite:
   ```env
   DB_CONNECTION=sqlite
   DB_DATABASE=/Users/your-username/Projects/resume-vitl/database/database.sqlite
   ```

6. **Generate application key**
   ```bash
   php artisan key:generate
   ```

7. **Create SQLite database**
   ```bash
   touch database/database.sqlite
   ```

8. **Run database migrations**
   ```bash
   php artisan migrate
   ```

9. **Seed the database with content**
   ```bash
   php artisan db:seed --class=CmsContentSeeder
   ```

10. **Create storage link for assets**
    ```bash
    php artisan storage:link
    ```

11. **Build frontend assets**
    ```bash
    npm run build
    ```

12. **Start the development servers**

    **Terminal 1 - Laravel server:**
    ```bash
    php artisan serve
    ```

    **Terminal 2 - Vite dev server:**
    ```bash
    npm run dev
    ```

## Access the Application

- **Main Application**: Check the terminal output for the Laravel server URL
- **Frontend Assets**: Handled by Vite dev server with hot reloading (check terminal for URL)

## Database Management

For local development, the application uses SQLite. You can connect to the database using:

- **DBeaver**: SQLite connection to `/Users/your-username/Projects/resume-vitl/database/database.sqlite`
- **DB Browser for SQLite**: Free GUI tool
- **Laravel Tinker**: `php artisan tinker`

## Production Setup

For production deployment, the application uses Docker with MySQL:

```bash
docker-compose up -d
```

This will start:
- **Laravel App** (PHP 8.2)
- **Nginx** web server
- **MySQL 8.0** database

## Development Notes

- The application uses **Inertia.js** for SPA-like experience
- **Vue.js 3** components are located in `resources/js/Components/`
- **Tailwind CSS** is used for styling
- **Content Management** is handled through the `cms_contents` table
- **Assets** are compiled with Vite and copied to `storage/app/public/`

## Troubleshooting

### Database Connection Issues
- Ensure SQLite database file exists: `touch database/database.sqlite`
- Check database path in `.env` file is absolute
- Clear config cache: `php artisan config:clear`

### Missing Assets
- Run `php artisan storage:link` to create symbolic link
- Build assets with `npm run build`
- Check Vite dev server is running for development

### Missing Content
- Run the CMS content seeder: `php artisan db:seed --class=CmsContentSeeder`
- Check `cms_contents` table in database
