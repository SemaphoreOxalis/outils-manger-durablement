<?php

use Flynsarmy\CsvSeeder\CsvSeeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'categories';
        $this->csv_delimiter = ';';
        $this->filename = base_path().'/database/seeds/csvs/CategoryData.csv';

        $this->mapping = [
            0 => 'name'
        ];
    }

    public function run()
    {
        parent::run();
    }
}
