<?php
    include('jsons.php');

    $action = (isset($_GET['action'])?$_GET['action']:'');
    switch($action){
        case 'mostrarponencias':
            echo json_encode($ponencias[$_GET['diaSemana']],JSON_FORCE_OBJECT);
            break;
        case 'comprobarponente':
            if(array_key_exists($_GET['usuario'],$usuarios)){
                echo json_encode(array("correct" => $usuarios[$_GET['usuario']] == $_GET['contrasenia']),JSON_FORCE_OBJECT);
            }else{
                echo json_encode(array("correct" => false),JSON_FORCE_OBJECT);
            }
            break;
        case 'atiguasysmanas':
            echo json_encode($antiguas_sysmanas,JSON_FORCE_OBJECT);
            break;
        case 'mostrarponentes':
            echo json_encode($ponencias,JSON_FORCE_OBJECT);
            break;

    }
    
?>