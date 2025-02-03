<?php
header('Content-Type: text/plain');


// Vérifier que les données sont présentes
if (!isset($_POST['data'])) {
    die("Missing data");
}

// Décoder les données JSON
$data = json_decode($_POST['data'], true);
if (!$data) {
    die("Invalid JSON data");
}

// Vérifier l'action requise
if (!isset($data['action']) || !isset($data['index']) || !isset($data['script'])) {
    die("Missing required fields");
}

$index = $data['index'];

// Extraire le chemin du script et retirer le premier répertoire
$scriptPath = dirname($data['script']);
$scriptPath = "PPE/".preg_replace('/^[^\/]+\//', '', $scriptPath);

// Association directe entre index et nom de fichier
switch($index) {
    case 1:
        $filename = $scriptPath . "/file1.dat";
        break;
    case 2:
        $filename = $scriptPath . "/file2.dat";
        break;
    case 3:
        $filename = $scriptPath . "/file3.dat";
        break;
    case 4:
        $filename = $scriptPath . "/file4.dat";
        break;
    case 5:
        $filename = $scriptPath . "/file5.dat";
        break;
    default:
        die("Invalid index");
}

switch($data['action']) {
    case 'FOPEN':
        if (!file_exists($filename)) {
            die("File not found: " . $filename);
        }
        echo file_get_contents($filename);
        break;

    case 'FPUT':
        if (!isset($data['value'])) {
            die("Missing write parameters");
        }

        $content = $data['value'];
        if (isset($data['addCRLF']) && $data['addCRLF']) {
            $content .= PHP_EOL;
        }

        if (file_put_contents($filename, $content, FILE_APPEND) === false) {
            die("Failed to write to file");
        }
        echo "OK";
        break;

    default:
        die("Invalid action");
}
?> 