<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewStatusOrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->insert([
            'name' => 'Caja', // caja
            'parent' => 'status_order',
            'guard_name' => 'web'
        ]);

        DB::table('permissions')->insert([
            'name' => 'Bodega', // bodega
            'parent' => 'status_order',
            'guard_name' => 'web'
        ]);

        DB::table('permissions')->insert([
            'name' => 'Despacho', // despacho
            'parent' => 'status_order',
            'guard_name' => 'web'
        ]);

        DB::table('permissions')->insert([
            'name' => 'Despachado', // despachado
            'parent' => 'status_order',
            'guard_name' => 'web'
        ]);
    }
}
