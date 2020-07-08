<?php

use Flynsarmy\CsvSeeder\CsvSeeder;
use Illuminate\Support\Facades\DB;

class UnitSeeder extends CsvSeeder
{
    public function __construct()
    {
        $this->table = 'units';
        $this->csv_delimiter = ';';
        $this->filename = base_path().'/database/seeds/csvs/UnitData.csv';
        $this->mapping = [
            0 => 'unit'
        ];
    }

    public function run()
    {
        parent::run();
    }
}
