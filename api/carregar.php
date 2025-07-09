<?php
include 'db_connect.php';
header('Content-Type: application/json');
$result = $conn->query("SELECT * FROM eventos");
$eventos = [];

while ($row = $result->fetch_assoc()) {
    $eventos[] = [
        'id' => $row['id'],
        'title' => $row['nome'] . ' - ' . $row['especialidade'],
        'start' => $row['data'],
        'color' => $row['cor'],
        'extendedProps' => [
            'especialidade' => $row['especialidade'],
            'horario' => $row['horario'],
            'preco' => $row['preco']
        ]
    ];
}

echo json_encode($eventos);
?>
