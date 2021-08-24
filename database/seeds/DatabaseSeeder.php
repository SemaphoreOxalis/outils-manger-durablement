<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(OriginSeeder::class);
        $this->call(UnitSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(WasteReferenceValueSeeder::class);
        $this->call(CounterSeeder::class);
        $this->call(CounterSeeder2::class);
        $this->call(ContentSeeder::class);
        $this->call(ContentSeeder2::class);
        $this->call(ContentSeeder3::class);
        $this->call(CounterSeeder3::class);
        $this->call(SpecialProductsSeeder::class);
    }
}
