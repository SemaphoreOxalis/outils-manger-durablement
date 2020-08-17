<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use PhpOffice\PhpSpreadsheet\Cell\DataType;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ExportController extends Controller {

    public function export(Request $request)
    {
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


        // Labels
        $sheet->setCellValue('B5', 'Nombre de repas produits');
        $sheet->setCellValue('C5', 'Coût de revient d\'un repas');
        $sheet->setCellValue('D5', 'Coût de traitement par tonne de déchets (en €)');
        $sheet->setCellValue('E5', 'Volume de gaspillage alimentaire (en T)');
        $sheet->setCellValue('F5', 'Coût de traitement des déchets d\'un repas');
        $sheet->setCellValue('G5', 'Coût de gaspillage alimentaire');
        $sheet->setCellValue('H5', 'Equivalence en nombre de repas');

        $sheet->getStyle('B5:H5')->getFont()->setBold(true);

        // Audit
        $sheet->setCellValue('A6', $request->input('audit.name'));
        $sheet->setCellValueExplicit('B6', $request->input('audit.dishesNumber'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('C6', $request->input('audit.dishCost'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('D6', $request->input('audit.wasteTreatmentCost'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('E6', $request->input('audit.foodWasteVolume'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('F6', $request->input('audit.wasteCostPerDish'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('G6', $request->input('audit.foodWasteCost'), DataType::TYPE_STRING);
        $sheet->setCellValueExplicit('H6', $request->input('audit.amountOfDishesWasted'), DataType::TYPE_STRING);

        $sheet->getStyle('A6')->getFont()->setBold(true);
        $sheet->getStyle('A6:H6')->getFont()->setSize(15);
        $sheet->getStyle('A6:H6')->getFill()->setFillType(Fill::FILL_SOLID);
        $sheet->getStyle('A6:H6')->getFill()->getStartColor()->setRGB('00bfff');

        // variables utiles pour les simulations
        $line = 8;
        $previous = 'l\'audit';

        // Simulations
        foreach($request->input('simulations') as $sim) {

            // Simulation
            $sheet->setCellValue('A' . $line, $sim["name"]);
            $sheet->setCellValueExplicit('B' . $line, $sim["dishesNumber"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('C' . $line, $sim["dishCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('D' . $line, $sim["wasteTreatmentCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('E' . $line, $sim["foodWasteVolume"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('F' . $line, $sim["wasteCostPerDish"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('G' . $line, $sim["foodWasteCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('H' . $line, $sim["amountOfDishesWasted"], DataType::TYPE_STRING);

            $sheet->getStyle('A' . $line)->getFont()->setBold(true);
            $sheet->getStyle('A' . $line . ':H' . $line)->getFont()->setSize(15);
            $sheet->getStyle('A' . $line . ':H' . $line)->getFill()->setFillType(Fill::FILL_SOLID);
            $sheet->getStyle('A' . $line . ':H' . $line)->getFill()->getStartColor()->setRGB('00ff80');

            $line ++;

            // Différences en valeur absolue
            $sheet->setCellValue('A' . $line, 'différence en valeur absolue par rapport à ' . $previous);
            $sheet->setCellValueExplicit('B' . $line, $sim['deltas']["dishesNumber"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('C' . $line, $sim['deltas']["dishCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('D' . $line, $sim['deltas']["wasteTreatmentCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('E' . $line, $sim['deltas']["foodWasteVolume"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('F' . $line, $sim['deltas']["wasteCostPerDish"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('G' . $line, $sim['deltas']["foodWasteCost"], DataType::TYPE_STRING);
            $sheet->setCellValueExplicit('H' . $line, $sim['deltas']["amountOfDishesWasted"], DataType::TYPE_STRING);

            $line ++;

            // Différences en pourcentages
            $sheet->setCellValue('A' . $line, 'différence en pourcentage');
            $sheet->setCellValue('B' . $line, $sim['percentages']["dishesNumber"]);
            $sheet->setCellValue('C' . $line, $sim['percentages']["dishCost"]);
            $sheet->setCellValue('D' . $line, $sim['percentages']["wasteTreatmentCost"]);
            $sheet->setCellValue('E' . $line, $sim['percentages']["foodWasteVolume"]);
            $sheet->setCellValue('F' . $line, $sim['percentages']["wasteCostPerDish"]);
            $sheet->setCellValue('G' . $line, $sim['percentages']["foodWasteCost"]);
            $sheet->setCellValue('H' . $line, $sim['percentages']["amountOfDishesWasted"]);

            $previous = $sim["name"];
            $line++;
            $line++;
        }

        // Envoi du fichier au navigateur pour téléchargement
        $response = response()->streamDownload(function() use ($spreadsheet) {
            $writer = new Xlsx($spreadsheet);
            $writer->save('php://output');
        });

        $response->setStatusCode(200);
        $response->headers->set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $response->headers->set('Content-Disposition', 'attachment;filename="Rapport.xlsx"');
        $response->headers->set('Cache-Control', 'max-age="0"');

        $response->send();
    }

}
