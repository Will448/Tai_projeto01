<?php

$usuario = 'root';
$senha = '';
$database = 'login';
$host = "localhost";

//fazendo a conexão

$mysqli =  new mysqli($host, $usuario, $senha, $database);

//verificando se vai dar erro e é obrigatório apresentar um erro 

if($mysqli->error){
    die("falha ao conectar ao banco de dados".$mysqli->error);
} else{
    echo "conectou ao bd";
};