<?php
$dbh = new PDO("mysql:host=localhost:3306;dbname=table2", "root", "curvaloca");
$sql = " SELECT * FROM ecran ";
$studentsQuery = $dbh->query($sql);
$getStudents = $studentsQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getStudents));
?>