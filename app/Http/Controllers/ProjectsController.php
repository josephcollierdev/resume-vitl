<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ProjectsController extends Controller
{
    public function index(): Response
    {
        // Placeholder content — see docs/design-mockup/PLAN.md. Swap in real photos/copy for the
        // three projects (3D printing, electronics, workshop) before this ships for real.
        $projects = [
            [
                'category' => '3D Printing',
                'date' => '2025',
                'title' => 'Parametric Enclosure Series',
                'deck' => 'A library of custom-fit enclosures designed in CAD and printed for home network and workshop electronics.',
                'tags' => ['Fusion 360', 'PLA+', 'FDM'],
                'image' => null,
            ],
            [
                'category' => 'Electronics',
                'date' => '2025',
                'title' => 'Home Automation Control Panel',
                'deck' => 'A wall-mounted control panel wired and programmed to manage lighting and climate for the apartment.',
                'tags' => ['ESP32', 'Soldering', 'Home Assistant'],
                'image' => null,
            ],
            [
                'category' => 'Workshop',
                'date' => '2024',
                'title' => 'Garage Workshop Reorganization',
                'deck' => 'A full teardown and rebuild of a home workshop — storage, workflow, and tool layout redesigned from scratch.',
                'tags' => ['Storage design', 'Woodworking'],
                'image' => null,
            ],
        ];

        return Inertia::render('Projects', [
            'projects' => $projects,
        ]);
    }
}
