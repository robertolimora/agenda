<?php
include 'db_connect.php';
$data = json_decode(file_get_contents('php://input'), true);
$senha = $data['senha'];

if ($senha !== '123456789') {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Senha incorreta']);
    exit;
}

$stmt = $conn->prepare("DELETE FROM eventos WHERE id = ?");
$stmt->bind_param("s", $data['id']);
$stmt->execute();

echo json_encode(['status' => 'ok']);
?>
<?php
include 'db_connect.php';
$data = json_decode(file_get_contents('php://input'), true);
$senha = $data['senha'];

if ($senha !== '123456789') {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Senha incorreta']);
    exit;
}

$stmt = $conn->prepare("DELETE FROM eventos WHERE id = ?");
$stmt->bind_param("s", $data['id']);
$stmt->execute();

echo json_encode(['status' => 'ok']);
?>
