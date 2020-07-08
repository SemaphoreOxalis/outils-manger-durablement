<?php

use Flynsarmy\CsvSeeder\CsvSeeder;
use Illuminate\Support\Facades\DB;

class OriginSeeder extends CsvSeeder {

    public function __construct()
    {
        $this->table = 'origins';
        $this->csv_delimiter = ';';
        $this->filename = base_path() . '/database/seeds/csvs/OriginData.csv';
        $this->mapping = [
            0 => 'from',
            1 => 'distance',
            2 => 'carbonImpact',
            3 => 'carbonImpactPerKg',
        ];
    }

    public function run()
    {
        parent::run();
    }

}
