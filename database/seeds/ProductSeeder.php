<?php

use Flynsarmy\CsvSeeder\CsvSeeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'products';
        $this->csv_delimiter = ';';
        $this->filename = base_path().'/database/seeds/csvs/ProductData.csv';
        $this->mapping = [
            0 => 'name',
            1 => 'unit_id',
            2 => 'uncertainty',
            3 => 'comment',
            4 => 'emissionFactor',
            5 => 'category_id'
        ];
    }

    public function run()
    {
        parent::run();
    }
}
