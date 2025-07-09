<?php
$host = 'sql310.infinityfree.com';
$user = 'if0_39288657';
$pass = 's4hwwt4bcUNR1B';
$db = 'if0_39288657_base';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
