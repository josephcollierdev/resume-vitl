<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CmsContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing cms_contents data
        DB::table('cms_contents')->truncate();

        // Insert the production data
        DB::table('cms_contents')->insert([
            [
                'key' => 'home.about.biography',
                'page' => 'home',
                'component' => 'about',
                'item' => 'biography',
                'content' => "Hey, I'm Joseph! I'm a fullstack developer and technology professional from NYC! Raised in Queens and currently living in Brooklyn, I enjoy working on new and exciting projects for work and for fun, and i'm always down to travel or work remotely. <br /> <br />\n\nI primarily work as a software engineer with various web applications and I am always looking to expand my breadth of knowledge in regards to technology. Currently, I am studying cybersecurity and networking as a way to enhance my skills as a web developer.<br /> <br />\n\nBelow, you'll find a list of jobs that i've held along with a brief outlook of my skills. Feel free to check out my resume and don't hesistate contact me if you have any questions or would like to work together on projects and tackle challenging tasks!",
                'type' => 'text/html',
                'cms_media_id' => null,
                'last_updated_by' => 1,
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null,
            ],
        ]);
    }
}