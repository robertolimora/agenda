<?php
include 'db_connect.php';
$data = json_decode(file_get_contents('php://input'), true);

$stmt = $conn->prepare("INSERT INTO eventos (id, nome, especialidade, data, horario, preco, cor) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $data['id'], $data['title'], $data['extendedProps']['especialidade'], $data['start'], $data['extendedProps']['horario'], $data['extendedProps']['preco'], $data['color']);
$stmt->execute();

echo json_encode(['status' => 'ok']);
?>
