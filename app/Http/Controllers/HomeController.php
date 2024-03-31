<?php

namespace App\Http\Controllers;

use App\Models\CmsContent;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $skills = [
            [
                'skill' => 'programming',
                'label' => 'Programming & Markup Languages',
                'items' => [
                    'PHP',
                    'Javascript',
                    'Python',
                    'HTML/CSS',
                    'Bash',
                    'Shell',
                ]
            ],
            [
                'skill' => 'frameworks',
                'label' => 'Web Frameworks & Runtime Environments',
                'items' => [
                    'Laravel',
                    'Phalcon',
                    'Node.js',
                    'Django'
                ]
            ],
            [
                'skill' => 'fronted-frameworks',
                'label' => 'Frontend Frameworks & Libraries',
                'items' => [
                    'Vue.js',
                    'React.js',
                    'jQuery',
                    'Tailwind',
                    'Bootstrap'
                ]
            ],
            [
                'skill' => 'databases',
                'label' => 'Databases & Data Storage',
                'items' => [
                    'MySQL',
                    'PostgreSQL',
                    'SQLite',
                    'MongoDB',
                    'Redis'
                ]
            ],
            [
                'skill' => 'cms-admin',
                'label' => 'CMS & Admin Panels',
                'items' => [
                    'WordPress',
                    'Filament',
                    'Backpack'
                ]
            ],
            [
                'skill' => 'virtualuzation',
                'label' => 'Virtualization & Containerization',
                'items' => [
                    'Docker',
                    'Vagrant',
                    'VirtualBox'
                ]
            ],
            [
                'skill' => 'deploy-automation-tools',
                'label' => 'Deployment & Automation Tools',
                'items' => [
                    'Git',
                    // 'GitHub',
                    'Jenkins',
                    'Docker',
                    'Envoyer',
                    'Buddy',
                    'CircleCI'
                ]
            ],
            [
                'skill' => 'automated-testing',
                'label' => 'Automated Testing',
                'items' => [
                    'PHPUnit',
                    'Pest',
                    'Laravel Dusk',
                    'Selenium',
                    'Cypress'
                ]
            ],
            [
                'skill' => 'monitoring',
                'label' => 'Monitoring & Logging',
                'items' => [
                    'New Relic',
                    'Sentry',
                    // 'Logstash',
                    'Kibana',
                    'Valgrind',
                    'Pulse'
                    // 'Papertrail',
                    // 'Loggly',
                    // 'Grafana'
                ]
            ],
            [
                'skill' => 'cloud-services',
                'label' => 'Cloud Services & Platforms',
                'items' => [
                    'AWS',
                    'GCP',
                    'Azure',
                    'DigitalOcean',
                    'Pantheon'
                    // 'Heroku',
                    // 'Netlify',
                    // 'Vercel'
                ]
            ],
            [
                'skill' => 'search',
                'label' => 'Search & Indexing',
                'items' => [
                    'Elasticsearch',
                    // 'Google Custom Search',
                    'BigQuery'
                ]
            ],
            [
                'skill' => 'security-authorizations',
                'label' => 'Security & Authorization',
                'items' => [
                    'OAuth',
                    'JWT',
                    'OpenID Connect',
                    'SAML',
                    'LDAP',
                ]
            ],
            [
                'skill' => 'api-integrations',
                'label' => 'API Integrations',
                'items' => [
                    'REST',
                    'GraphQL',
                    'SOAP',
                    'XML-RPC',
                    'JSON-RPC'
                ]
            ],
            [
                'skill' => 'package-managers',
                'label' => 'Package Managers',
                'items' => [
                    'Composer',
                    'NPM',
                    'Yarn',
                    'Vite'
                ]
            ],
            [
                'skill' => 'job-queues',
                'label' => 'Job Queues & Message Brokers',
                'items' => [
                    'Redis',
                    'RabbitMQ',
                    'Beanstalkd',
                    'Pheanstalk'
                ]
            ],
            [
                'skill' => 'methodologies',
                'label' => 'Methodologies & Best Practices',
                'items' => [
                    'Agile',
                    'Scrum',
                    'Kanban',
                    'TDD',
                    'CI/CD',
                    'OWASP'
                ]
            ],
            [
                'skill' => 'operating-systems',
                'label' => 'Operating Systems',
                'items' => [
                    'Linux',
                    'macOS',
                    'Windows',
                    'Unix'
                ]
            ],
            [
                'skill' => 'ide-editors',
                'label' => 'IDEs & Editors',
                'items' => [
                    'PHPStorm',
                    'VS Code',
                    'Sublime Text',
                    'Vim',
                    'Nano'
                ]
            ],
            [
                'skill' => 'design-tools',
                'label' => 'Design Tools',
                'items' => [
                    'Figma',
                    'Zeplin',
                    'Adobe XD',
                    'Adobe Photoshop'
                ]
            ]
        ];

        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'skillsData' => $skills,
            'biographyText' => ($cms_data = CmsContent::getByKey('home.about.biography')->first())
                ? $cms_data->content
                : '',
        ]);
    }
}
