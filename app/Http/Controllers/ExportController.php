<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use PhpOffice\PhpSpreadsheet\Cell\DataType;
use PhpOffice\PhpSpreadsheet\Chart\Chart;
use PhpOffice\PhpSpreadsheet\Chart\DataSeries;
use PhpOffice\PhpSpreadsheet\Chart\DataSeriesValues;
use PhpOffice\PhpSpreadsheet\Chart\Legend;
use PhpOffice\PhpSpreadsheet\Chart\PlotArea;
use PhpOffice\PhpSpreadsheet\Chart\Title;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ExportController extends Controller {

    public function exportSims(Request $request)
    {
        //Validation des données
        $request->validate([
            'audit' => 'array|required',
            'simulations' => 'array',
            'mode' => 'string',
        ]);

        // création de la spreadsheet
        $spreadsheet = new Spreadsheet();
        $spreadsheet->getProperties()
            ->setCreator('Semaphore Communication')
            ->setLastModifiedBy('Semaphore Communication')
            ->setTitle('Export de l\'audit du ' . $request->input('audit.auditDate'))
            ->setDescription('Export de l\'audit du ' . $request->input('audit.auditDate') . ' et de ses simulations')
            ->setKeywords('gaspillage alimentaire audit simulations');

        $sheet = $spreadsheet->getActiveSheet();

        // taille des colonnes
        $sheet->getDefaultColumnDimension()->setWidth(25);
        $sheet->getColumnDimension('A')->setWidth(65);

        // Récapitulatif des valeurs de référence
        $sheet->setCellValue('A1', 'Valeurs de référence');
        $sheet->setCellValue('A2', 'Part des restes alimentaires dans le volume d\'ordures ménagères global');
        $sheet->setCellValue('B2', $request->input('audit.foodLeftoversVolumeInGlobalWaste') . '%');
        $sheet->setCellValue('A3', 'Part du gaspillage dans ces restes');
        $sheet->setCellValue('B3', $request->input('audit.actualFoodLeftoversInFoodWaste') . '%');

        $sheet->getCell('A1')->getStyle()->getFont()->setBold(true);
        $sheet->getCell('A1')->getStyle()->getFont()->setSize(15);

        $sheet->setCellValue('A4', 'Mode de comparaison : ' . $request->input('mode'));

        // Labels
        $sheet->setCellValue('B6', 'Nombre de repas produits');
        $sheet->setCellValue('C6', 'Coût de revient d\'un repas');
        $sheet->setCellValue('D6', 'Poids moyen d\'un repas');
        $sheet->setCellValue('E6', 'Coût de traitement par tonne de déchets (en €)');
        $sheet->setCellValue('F6', 'Volume de gaspillage alimentaire (en T)');
        $sheet->setCellValue('G6', 'Estimation du gaspillage alimentaire (en g par repas)');
        $sheet->setCellValue('H6', 'Estimation du gaspillage alimentaire (en €)');
        $sheet->setCellValue('I6', 'Estimation du gaspillage alimentaire (équivalence en nombre de repas)');

        $sheet->getStyle('B6:I6')->getFont()->setBold(true);

        // Audit
        $sheet->setCellValue('A7', $request->input('audit.name'));
        $sheet->setCellValueExplicit('B7', $request->input('audit.dishesNumber'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('C7', $request->input('audit.dishCost'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('D7', $request->input('audit.dishWeight'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('E7', $request->input('audit.wasteTreatmentCost'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('F7', $request->input('audit.foodWasteVolume'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('G7', $request->input('audit.ratio'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('H7', $request->input('audit.foodWasteCost'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('I7', $request->input('audit.amountOfDishesWasted'), DataType::TYPE_STRING);

        $sheet->getStyle('A7')->getFont()->setBold(true);
        $sheet->getStyle('A7:I7')->getFont()->setSize(15);
        $sheet->getStyle('A7:I7')->getFill()->setFillType(Fill::FILL_SOLID);
        $sheet->getStyle('A7:I7')->getFill()->getStartColor()->setRGB('00bfff');

        // variables utiles pour les simulations
        $line = 9;
        $previous = 'l\'audit';

        // Simulations
        foreach($request->input('simulations') as $sim) {

            // Simulation
            $sheet->setCellValue('A' . $line, $sim["name"]);
            $sheet->setCellValueExplicit('B' . $line, $sim["dishesNumber"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('C' . $line, $sim["dishCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('D' . $line, $sim["dishWeight"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('E' . $line, $sim["wasteTreatmentCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('F' . $line, $sim["foodWasteVolume"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('G' . $line, $sim["ratio"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('H' . $line, $sim["foodWasteCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('I' . $line, $sim["amountOfDishesWasted"], DataType::TYPE_STRING);

            $sheet->getStyle('A' . $line)->getFont()->setBold(true);
            $sheet->getStyle('A' . $line . ':I' . $line)->getFont()->setSize(15);
            $sheet->getStyle('A' . $line . ':I' . $line)->getFill()->setFillType(Fill::FILL_SOLID);
            $sheet->getStyle('A' . $line . ':I' . $line)->getFill()->getStartColor()->setRGB('00ff80');

            $line ++;

            // Différences en valeur absolue
            $sheet->setCellValue('A' . $line, 'différence en valeur absolue par rapport à ' . $previous);
            $sheet->setCellValueExplicit('B' . $line, $sim['deltas']["dishesNumber"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('C' . $line, $sim['deltas']["dishCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('D' . $line, $sim['deltas']["dishWeight"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('E' . $line, $sim['deltas']["wasteTreatmentCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('F' . $line, $sim['deltas']["foodWasteVolume"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('G' . $line, $sim['deltas']["ratio"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('H' . $line, $sim['deltas']["foodWasteCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('I' . $line, $sim['deltas']["amountOfDishesWasted"], DataType::TYPE_STRING);

            $line ++;

            // Différences en pourcentages
            $sheet->setCellValue('A' . $line, 'différence en pourcentage');
            $sheet->setCellValue('B' . $line, $sim['percentages']["dishesNumber"]);
            $sheet->setCellValue('C' . $line, $sim['percentages']["dishCost"]);
            $sheet->setCellValue('D' . $line, $sim['percentages']["dishWeight"]);
            $sheet->setCellValue('E' . $line, $sim['percentages']["wasteTreatmentCost"]);
            $sheet->setCellValue('F' . $line, $sim['percentages']["foodWasteVolume"]);
            $sheet->setCellValue('G' . $line, $sim['percentages']["ratio"]);
            $sheet->setCellValue('H' . $line, $sim['percentages']["foodWasteCost"]);
            $sheet->setCellValue('I' . $line, $sim['percentages']["amountOfDishesWasted"]);

            $previous = '"' . $sim["name"] . '"';
            $line++;
            $line++;
        }

        $this->sendFile($spreadsheet);
    }

    public function exportBaskets(Request $request) {
        //Validation des données
        $request->validate([
            'baskets' => 'array|required',
            'mode' => 'string',
        ]);

        // création de la spreadsheet
        $spreadsheet = new Spreadsheet();
        $spreadsheet->getProperties()
            ->setCreator('Semaphore Communication')
            ->setLastModifiedBy('Semaphore Communication')
            ->setTitle('Export des paniers du ' . $request->input('date'))
            ->setDescription('Export des paniers du ' . $request->input('date'))
            ->setKeywords('impact carbone paniers simulations');

        $firstSheet = $spreadsheet->getActiveSheet();
        $firstSheet->setTitle('Accueil');

        $borderStyle = [
            'borders' => [
                'outline' => [
                    'borderStyle' => Border::BORDER_THICK,
                    'color' => ['rgb' => '00ff80'],
                ],
            ],
        ];

        // taille des colonnes
        $firstSheet->getDefaultColumnDimension()->setWidth(25);
        $firstSheet->getColumnDimension('A')->setWidth(65);

        // Récapitulatif des valeurs de référence
        $firstSheet->setCellValue('A1', 'Export des paniers du ' . $request->input('date'));
        $firstSheet->setCellValue('A3', 'Mode de comparaison :  ' . $request->input('mode'));

        $firstSheet->getCell('A1')->getStyle()->getFont()->setBold(true);
        $firstSheet->getCell('A1')->getStyle()->getFont()->setSize(15);

        foreach($request->input('baskets') as $basket) {
            $sheet = new Worksheet($spreadsheet, $basket['name']);
            $spreadsheet->addSheet($sheet);
            $spreadsheet->setActiveSheetIndexByName($basket['name']);
            $sheet->getDefaultColumnDimension()->setWidth(20);

            $sheet->setCellValue('A1', $basket['name']);
            $sheet->getStyle('A1')->getFont()->setBold(true);
            $sheet->getStyle('A1')->getFont()->setSize(15);

            if ($basket['products']) {
                $sheet->setCellValue('A3', 'produit');
                $sheet->setCellValue('B3', 'commentaire');
                $sheet->setCellValue('C3', 'quantité');
                $sheet->setCellValue('D3', 'unité');
                $sheet->setCellValue('E3', 'origine');
                $sheet->setCellValue('F3', 'prix');
                $sheet->mergeCells('G2:I2');
                $sheet->getStyle('A2:I3')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $sheet->getStyle('A2:I3')->applyFromArray($borderStyle);
                $sheet->setCellValue('G2', 'impact carbone');
                $sheet->setCellValue('G3', 'produit');
                $sheet->setCellValue('H3', 'transport');
                $sheet->setCellValue('I3', 'total');
                $sheet->getStyle('A2:I3')->getFont()->setBold(true);

                $line = 5;

                foreach($basket['products'] as $product) {
                    $sheet->setCellValue('A' . $line, $product['name']);
                    $sheet->setCellValue('B' . $line, $product['comment']);
                    $sheet->setCellValue('C' . $line, $product['amount']);
                    $sheet->setCellValue('D' . $line, $product['unit']['unit']);
                    $sheet->setCellValue('E' . $line, $product['origin']['from']);
                    $sheet->setCellValue('F' . $line, $product['price'] . ' €');
                    $sheet->setCellValue('G' . $line, $product['productImpact'] . ' gCO2');
                    $sheet->setCellValue('H' . $line, $product['transportationImpact'] . ' gCO2');
                    $sheet->setCellValue('I' . $line, $product['carbonImpact'] . ' gCO2');
                    $line++;
                }
                $sheet->getStyle('E5:I' . $line)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                $line = $line + 2;

                $sheet->mergeCells('A' . $line . ':E' . $line);
                $sheet->mergeCells('G' . $line . ':I' . $line);
                $sheet->setCellValue('A' . $line, 'bilan carbone (en g de CO2)');
                $sheet->setCellValue('G' . $line, 'bilan financier (en €)');
                $sheet->getStyle('A' . $line . ':I' . ($line + 1))->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $sheet->getStyle('A' . $line . ':I' . ($line + 1))->getFont()->setBold(true);
                $sheet->getStyle('A' . $line . ':I' . $line)->getFont()->setSize(12);
                $sheet->getStyle('A' . $line . ':E' . $line)->applyFromArray($borderStyle);
                $sheet->getStyle('G' . $line . ':I' . $line)->applyFromArray($borderStyle);
                $line++;
                $sheet->setCellValue('B' . $line, 'produit');
                $sheet->setCellValue('C' . $line, 'transport');
                $sheet->setCellValue('D' . $line, 'total');
                $line++;

                $startLine = $line;
                foreach($basket['results']['cats'] as $category) {
                    $sheet->setCellValue('A' . $line, $category['name']);
                    $sheet->setCellValue('B' . $line, $category['productImpact']);
                    $sheet->setCellValue('C' . $line, $category['transportationImpact']);
                    $sheet->setCellValue('D' . $line, $category['carbonImpact']);
                    $sheet->setCellValue('E' . $line, $category['carbonDelta']);

                    $sheet->setCellValue('G' . $line, $category['name']);
                    $sheet->setCellValue('H' . $line, $category['moneySpent']);
                    $sheet->setCellValue('I' . $line, $category['moneyDelta']);
                    $line++;
                }
                $endLine = $line - 1;
                $line++;
                $sheet->setCellValue('A' . $line, 'Total');
                $sheet->setCellValue('B' . $line, $basket['results']['globalProductImpact'] . ' gCO2');
                $sheet->setCellValue('C' . $line, $basket['results']['globalTransportationImpact'] . ' gCO2');
                $sheet->setCellValue('D' . $line, $basket['results']['globalCarbonImpact'] . ' gCO2');
                $sheet->setCellValue('E' . $line, $basket['globalCarbonDelta']);

                $sheet->setCellValue('G' . $line, 'Total');
                $sheet->setCellValue('H' . $line, $basket['results']['globalMoneySpend'] . ' €');
                $sheet->setCellValue('I' . $line, $basket['globalMoneyDelta']);

                $sheet->getStyle('B' . $startLine . ':E' .$line)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                $sheet->getStyle('H' . $startLine . ':I' .$line)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);

                $line = $line + 2;
                $categoriesNumber = count($basket['results']['cats']);

                // CARBON CHART
                $dataSeriesLabels = [
                    new DataSeriesValues(DataSeriesValues::DATASERIES_TYPE_STRING, "'" . $basket['name'] . "'!\$B$" . ($startLine - 1), null, 1),
                    new DataSeriesValues(DataSeriesValues::DATASERIES_TYPE_STRING, "'" . $basket['name'] . "'!\$C$" . ($startLine - 1), null, 1),
                ];
                $xAxisTickValues = [
                    new DataSeriesValues(DataSeriesValues::DATASERIES_TYPE_STRING, "'" . $basket['name'] . "'!\$A$" . $startLine . ":\$A$" . $endLine, null, $categoriesNumber),
                ];
                $dataSeriesValues = [
                    new DataSeriesValues(DataSeriesValues::DATASERIES_TYPE_NUMBER, "'" . $basket['name'] . "'!\$B$" . $startLine . ":\$B$" . $endLine, null, $categoriesNumber),
                    new DataSeriesValues(DataSeriesValues::DATASERIES_TYPE_NUMBER, "'" . $basket['name'] . "'!\$C$" . $startLine . ":\$C$" . $endLine, null, $categoriesNumber),
                ];
                $series = new DataSeries(
                    DataSeries::TYPE_BARCHART_3D,
                    DataSeries::GROUPING_STACKED,
                    range(0, count($dataSeriesValues) - 1),
                    $dataSeriesLabels,
                    $xAxisTickValues,
                    $dataSeriesValues
                );
                $series->setPlotDirection(DataSeries::DIRECTION_BAR);
                $plotArea = new PlotArea(null, [$series]);
                $legend = new Legend(Legend::POSITION_TOP, null, false);
                $title = new Title('Ventilation de l\'empreinte carbone');
                $xAxisLabel = new Title('g de CO2');

                $chart = new Chart(
                    'carbonImpact',
                    $title,
                    $legend,
                    $plotArea,
                    true,
                    DataSeries::EMPTY_AS_GAP,
                    null,
                    $xAxisLabel
                );

                $chart->setTopLeftPosition('A' . $line);
                $chart->setBottomRightPosition('F' . ($line + 25));

                $sheet->addChart($chart);

                // MONEY CHART
                $dataSeriesLabels2 = [];
                $xAxisTickValues2 = [
                    new DataSeriesValues(DataSeriesValues::DATASERIES_TYPE_STRING, "'" . $basket['name'] . "'!\$A$" . $startLine . ":\$A$" . $endLine, null, $categoriesNumber),
                ];
                $dataSeriesValues2 = [
                    new DataSeriesValues(DataSeriesValues::DATASERIES_TYPE_NUMBER, "'" . $basket['name'] . "'!\$H$" . $startLine . ":\$H$" . $endLine, null, $categoriesNumber),
                ];
                $series2 = new DataSeries(
                    DataSeries::TYPE_BARCHART_3D,
                    DataSeries::GROUPING_STACKED,
                    range(0, count($dataSeriesValues2) - 1),
                    $dataSeriesLabels2,
                    $xAxisTickValues2,
                    $dataSeriesValues2
                );
                $series2->setPlotDirection(DataSeries::DIRECTION_BAR);
                $plotArea2 = new PlotArea(null, [$series2]);
                $legend2 = new Legend(Legend::POSITION_TOP, null, false);
                $title2 = new Title('Ventilation des dépenses');
                $xAxisLabel2 = new Title('euros');

                $chart2 = new Chart(
                    'moneyImpact',
                    $title2,
                    null,
                    $plotArea2,
                    true,
                    DataSeries::EMPTY_AS_GAP,
                    null,
                    $xAxisLabel2
                );

                $chart2->setTopLeftPosition('F' . $line);
                $chart2->setBottomRightPosition('K' . ($line + 25));

                $sheet->addChart($chart2);
            } else {
                $sheet->setCellValue('A3', 'Ce panier est vide');
            }
        }

        $spreadsheet->setActiveSheetIndex(0);
        $this->sendFile($spreadsheet);
    }

    private function sendFile(Spreadsheet $spreadsheet) {
        // Envoi du fichier au navigateur pour téléchargement
        $response = response()->streamDownload(function() use ($spreadsheet) {
            $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
            $writer->setIncludeCharts(true);
            //ob_end_clean();
            $writer->save('php://output');
        });

        $response->setStatusCode(200);
        $response->headers->set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $response->headers->set('Content-Disposition', 'attachment;filename="Rapport.xlsx"');
        $response->headers->set('Cache-Control', 'max-age="0"');

        $response->send();
    }
}
