<?php
    $usuarios = array(
        "jponferrada" => "Admin123$",
        "administrador" => "Admin123$"
    );

    $antiguas_sysmanas = array(
        "sI" => array("ruta"=>"img/antiguas_sysmanas/Isysmana.jpg","info"=>"Sysmana I"),
        "sII" => array("ruta"=>"img/antiguas_sysmanas/IIsysmana.jpg","info"=>"Sysmana II"),
        "sIII" => array("ruta"=>"img/antiguas_sysmanas/IIIsysmana.jpg","info"=>"Sysmana III"),
        "sIIV" => array("ruta"=>"img/antiguas_sysmanas/IVsysmana.jpg","info"=>"Sysmana IV"),
        "sV" => array("ruta"=>"img/antiguas_sysmanas/Vsysmana.jpg","info"=>"Sysmana V"),
        "sVI" => array("ruta"=>"img/antiguas_sysmanas/VIsysmana.jpg","info"=>"Sysmana VI"),
        "sVII" => array("ruta"=>"img/antiguas_sysmanas/VIIsysmana.jpg","info"=>"Sysmana VII"),
        "sVIII" => array("ruta"=>"img/antiguas_sysmanas/VIIIsysmana.jpg","info"=>"Sysmana VIII"),
        "sIX" => array("ruta"=>"img/antiguas_sysmanas/IXsysmana.jpg","info"=>"Sysmana IX"),
        "sX" => array("ruta"=>"img/antiguas_sysmanas/Xsysmana.jpg","info"=>"Sysmana X")
    );

    $ponentes = array(
       "1" => array("nombre"=> "José Ignacio Álvarez Ruiz", "nombrePonencia" => "Sistemas de control de versiones distribuidas - Controla las versiones de tu trabajo con GIT, Servicios web con Python + web.py (Homenaje a Aaron Swartz)", "imagen" => "img/ponentes/jalvarez.jpg","hora"=>"8:30 - 9:45","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"Redsys","descripcion"=>"Se mostrarán los comandos de git sobre repositorios de ejemplo reales de forma interactiva. También se darán sus alternativas sobre interfaz gráfica y se comentarán las estrategias de merge más efectivas."),
       "2" => array("nombre"=> "José Ignacio Álvarez Ruiz", "nombrePonencia" => "Servicios web con Python + web.py (Homenaje a Aaron Swartz)", "imagen" => "img/ponentes/jalvarez.jpg","hora"=>"9:45 - 10:45","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"Redsys","descripcion"=>"Se repasará la descripción de servicios Web y tecnologías SOAP/REST. A continuación, se presenta el microframework web.py desarrollado por Aaron Swartz para la generación y despliegue de servicios Web."),
       "3" => array("nombre"=> "Fco. Javier Carazo Gil", "nombrePonencia" => "WooCommerce: crea tu propia tienda online", "imagen" => "img/ponentes/FcoJavierCarazo_400x400.jpg","hora"=>"11:45 - 12:15","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"_","descripcion"=>"WooCommerce es el estándar de facto para crear tiendas online a día de hoy. Sus ventajas son muchas, pero hay dos que destacan, la primera de ellas es que usa WordPress (el CMS que da servicio a más del 25% de todo Internet). La segunda es que es realmente fácil de instalar, de mantener y de administrar (y por supuesto de comprar con él)."),
       "4" => array("nombre"=> "Rafael Delgado", "nombrePonencia" => "Envenenamiento DNS", "imagen" => "img/ponentes/RafaDelgado_400x400.jpg","hora"=>"12:20 - 13:20","local"=>"T114 / Alumnos ASIR","empresa"=>"_","descripcion"=>"Es una situación creada de manera maliciosa que provee datos manipulados de un servidor DNS falso, con el objetivo de robar información al usuario. Realizaré una prueba de ataque real en directo y explicaré cómo funciona esta vulnerabilidad. Posteriormente, explicaré cómo evitar estos ataques y la cantidad de usuarios que hoy día siguen usando Windows XP"),
       "5" => array("nombre"=> "Rafael Mellado y Daniel Gestino", "nombrePonencia" => "Introducción Angular 5 y Angular Material", "imagen" => "img/ponentes/RafaMellado_DanielGestino.jpg","hora"=>"12:20 - 13:20","local"=>"T116 / Alumnos DAW","empresa"=>"_","descripcion"=>"Realizaremos un taller de iniciación en Angular 5 y Angular Material en el que explicaremos las características más importantes de angular para los principiantes y haremos un taller guiado con una búsqueda “en caliente” de diferentes elementos, añadiendo y eliminando dichos elementos."),
       "6" => array("nombre"=> "Nieves Borrero y Pablo León", "nombrePonencia" => "Tweepy. Cuando Python escucha lo que dice un pajarito", "imagen" => "img/ponentes/NievesBorrero_PabloLeon.jpg","hora"=>"13:30 - 14:15","local"=>"T116 / Alumnos DAW","empresa"=>"_","descripcion"=>"Una charla sobre las posibilidades que nos ofrece Tweepy, una librería de Python que nos permite trabajar de forma sencilla con la API de twitter."),
       "7" => array("nombre"=> "Eduardo Sánchez Toril", "nombrePonencia" => "Geolocalización de usuarios sin GPS", "imagen" => "img/ponentes/Edu_Sanchez-e1504773381167.jpg","hora"=>"9:00 - 10:00","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"_","descripcion"=>"Cómo pueden geolozalizar usuarios sin GPS y herramientas de uso"),
       "8" => array("nombre"=> "Miguel Ángel Arroyo", "nombrePonencia" => "Introducción al análisis de binarios", "imagen" => "img/ponentes/MiguelAngel_Arroyo-1-e1504773318775.jpg","hora"=>"10:00 - 11:30","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"_","descripcion"=>"El objetivo de la charla es el de introducir a los asistentes en el análisis de binarios, uno de las áreas más complejas y potentes del cambo de la seguridad informática, indicando en qué campos de la seguridad es útil este conocimiento y se hará una demostración práctica con el análisis de varios binarios."),
       "9" => array("nombre"=> "JL García-Morato y José Huertas", "nombrePonencia" => "Digital MKG: herramientas para analizar webs", "imagen" => "img/ponentes/dobuss-e1504774150983.jpg","hora"=>"12:00 - 13:00","local"=>"SUM / Alumnos DAW","empresa"=>"DOBUSS","descripcion"=>"Repaso de herramientas usadas en el Marketing Digital para analizar webs"),
       "10" => array("nombre"=> "Nicolás García Pedrajas", "nombrePonencia" => "Deep-Learning", "imagen" => "img/ponentes/10nicolasgarcia-150x150-1.jpg","hora"=>"13:00 - 14:30","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"UCO","descripcion"=>"Aprendizaje automático basados en asimilar representaciones de datos. En este paradigma los algoritmos son capaces de aprender sin intervención humana previa, sacando ellos mismos las conclusiones acerca de la semántica embebida en los datos."),
       "11" => array("nombre"=> "Claudia López Iglesias", "nombrePonencia" => "Design IS + workshop 'Diseño con Illustrator' (Iniciación)", "imagen" => "img/ponentes/Claudia_Lopez-e1504770601540.jpg","hora"=>"8:30 - 10:30","local"=>"T116 / Alumnos 1º DAW","empresa"=>"_","descripcion"=>"Breves conceptos de diseño sobre color, fundamentos de diseño, composición, tipografía y tendencias 2018. Iniciación a Illustrator CC (nivel básico) : herramientas, espacios de trabajo, documentos (exportar y tipos), gestión del color, tipografías…"),
       "12" => array("nombre"=> "Javier Jiménez", "nombrePonencia" => "Cloud computing y AWS", "imagen" => "img/ponentes/logo_grayhtats_400x400.png","hora"=>"8:30 - 9:00","local"=>"SUM / Alumnos ASIR, 2DAW y 2BACH","empresa"=>"GrayHats","descripcion"=>"Charla sobre cloud computing, amazon web services y salidas profesionales"),
       "13" => array("nombre"=> "Rafa Sojo", "nombrePonencia" => "CTF, Web scraping like a ninja", "imagen" => "img/ponentes/RafaSojo_400x400.jpg","hora"=>"9:00 - 11:00","local"=>"Talleres / Alumnos ASIR y 2DAW","empresa"=>"_","descripcion"=>"Nuestros alumnos competirán en grupos en un CTF organizado por Rafa Sojo. ¿Quién Ganará?"),
       "14" => array("nombre"=> "Rafa Sojo", "nombrePonencia" => "Web scraping like a ninja", "imagen" => "img/ponentes/RafaSojo_400x400.jpg","hora"=>"11:00 - 11:30","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"_","descripcion"=>"Qué es web scraping y técnicas y herramientas de uso"),
       "15" => array("nombre"=> "Rafael Rodríguez", "nombrePonencia" => "Coworking", "imagen" => "img/ponentes/Logo_Lazona400x400.png","hora"=>"12:00 - 12:30","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"La Zona","descripcion"=>"En un sector en constante evolución y con necesidades cada vez más interdisciplinares como es el tecnológico, trabajar conectado a una comunidad de profesionales tanto de tu propio área como de áreas colaterales es cada vez más importante. Los espacios de trabajo colaborativo o coworkings son una alternativa que permite a trabajadores autónomos y pequeñas empresas compartir en su día a día ideas, proyectos, contactos… a la vez que reducen y flexibilizan los costes fijos que supone mantener una oficina propia."),
       "16" => array("nombre"=> "Javier Aguirre", "nombrePonencia" => "ChatBots", "imagen" => "img/ponentes/JavierAguirre_400x400.jpg","hora"=>"12:30 - 13:30","local"=>"T116 / Alumnos ASIR y DAW","empresa"=>"_","descripcion"=>"Chatbots! Todo el mundo habla de ellos, pero qué son y por dónde empezar? Veremos de dónde vienen los chatbots y cómo empezar a implementar uno."),
       "17" => array("nombre"=> "Cristina Santamaria", "nombrePonencia" => "Taller sobre Bots", "imagen" => "img/ponentes/CristinaSantamarina_400x400.jpg","hora"=>"13:30 - 14:30","local"=>"T116 / Alumnos DAW","empresa"=>"_","descripcion"=>"Aprenderemos a diseñar un chatbot con Chatfuel y Dialogflow"),
       "18" => array("nombre"=> "Raúl Valentín", "nombrePonencia" => "Cómo construir un modelo predictivo con Machine Learning", "imagen" => "img/ponentes/RaulValentin.jpg","hora"=>"8:30 - 9:20","local"=>"SUM / Alumnado ASIR, DAW y 2BACH","empresa"=>"_","descripcion"=>"Entre todos construiremos un modelo predictivo. Un grupo de alumnos será nuestro conjunto de datos de entrenamiento con los que entrenaremos el modelo. Una vez construido el modelo otro grupo de alumnos lo testeará y determinaremos su rendimiento. Finalmente veremos un modelo real aplicado en San Juan de Dios para predecir el absentismo a consulta."),
       "19" => array("nombre"=> "Manuel Jiménez", "nombrePonencia" => "Producción de Realidad Virtual", "imagen" => "img/ponentes/ManuelJimenez_400x400_2018.jpg","hora"=>"9:20 - 11:20","local"=>"SUM / Alumnos ASIR y DAW","empresa"=>"_","descripcion"=>"Taller introductorio al uso de CoSpaces, una herramienta web que permite de forma sencilla y directa producir escenas inmersivas e interactivas, usar modelos 3D predefinidos o incorporar los propios y pudiendo programar los eventos con un lenguaje de bloques o directamente con código."),
       "20" => array("nombre"=> "Rafael Gómez", "nombrePonencia" => "Cloud y contenerización con Docker", "imagen" => "img/ponentes/Logo_Innovation_Group400x400.png","hora"=>"12:00 - 13:00","local"=>"SUM / Alumnos ASIR","empresa"=>"Innovation Group","descripcion"=>"Charla sobre Cloud, Docker, Puppet y Devops."),
       "21" => array("nombre"=> "Cristina Triviño y Pepe Molinero", "nombrePonencia" => "Crea tu propia nube", "imagen" => "img/ponentes/Cristina_Triviño_Pepe_Molinero.jpg","hora"=>"13:00 - 14:00","local"=>"T112 / Alumnos ASIR","empresa"=>"_","descripcion"=>"Implementación y explicación de servicio Web y de Nextcloud en una raspberry pi 3."),
       "22" => array("nombre"=> "Alvaro Mesa , Raul Zarza y Antonio Arteche", "nombrePonencia" => "Testing en el marco de trabajo Scrum", "imagen" => "img/ponentes/Logo_Innovation_Group400x400.png","hora"=>"13:00 - 14:00","local"=>"SUM / Alumnos DAW","empresa"=>"Innovation Group","descripcion"=>"Charla sobre las fases de vida de desarrollo software en el marco de Scrum y las actividades que un tester lleva a cabo en cada una de ellas para asegurar la calidad del software."),
       "23" => array("nombre"=> "David Fernández Gómez, Antonio David Ventura Serrano y Francisco Llamas Nuflo", "nombrePonencia" => "Criptomonedas y altcoin", "imagen" => "img/ponentes/LlamasFran_FernandezDavid_Sysmana2018.jpg","hora"=>"8:15 - 9:15","local"=>"SUM / Alumnos ASIR y 1DAW","empresa"=>"_","descripcion"=>"Introducción al mundo de las criptomonedas. Herramientas, utilidades, monederos, minería."),
       "24" => array("nombre"=> "Juan Antonio Romero", "nombrePonencia" => "Iniciación al desarrollo de servicios REST", "imagen" => "img/ponentes/JuanAntonioRomero2018_400x400.jpg","hora"=>"8:15 - 9:15","local"=>"T115 / Alumnos 2DAW","empresa"=>"_","descripcion"=>"Introducción al desarrollo de una REST API. Veremos los motivos para desarrollar aplicaciones con esta arquitectura y la teoría para llevarlo a cabo, tratando de seguir las buenas prácticas. Después se mostrará un ejemplo básico desarrollado con Django. Se ha habilitado la compatibilidad con el lector de pantalla."),
       "25" => array("nombre"=> "Fernando Hidalgo", "nombrePonencia" => "Más allá de Agile", "imagen" => "img/ponentes/FernandoHidalgo2018_400x400.jpg","hora"=>"9:15 - 10:00","local"=>"SUM / Alumnado ASIR y DAW","empresa"=>"_","descripcion"=>"Cómo se estructura Sopinet Software y cómo se implementa nuestra ambiciosa filosofía, basada en tres pilares Agile: Transparencia, Sin miedo y Valor humano."),
       "26" => array("nombre"=> "Ana María Cuenca, María Moreno, Nieves Borrero y Soledad Cruz", "nombrePonencia" => "¿Igualdad de género en el mundo tecnológico? Brecha digital", "imagen" => "img/ponentes/Brecha_digital_sysmana2018.jpg","hora"=>"10:00 - 10:45","local"=>"SUM","empresa"=>"_","descripcion"=>"¿Existe la desigualdad de género en el mundo tecnológico o, por el contrario, la tecnología reduce la desigualdad entre hombres y mujeres?"),
       "27" => array("nombre"=> "Profesorado", "nombrePonencia" => "II Concurso Twitter Sysmana. Entrega de premios", "imagen" => "img/ponentes/cartelSysmana-1024.jpg","hora"=>"10:45 - 11:15","local"=>"SUM","empresa"=>"_","descripcion"=>"Entrega de premios del II Concurso Twitter Sysmana 2018"),
       "28" => array("nombre"=> "Antonio López", "nombrePonencia" => "Clausura (Delegado Educación)", "imagen" => "img/ponentes/Consejeria_educacion-e1516967566270.jpg","hora"=>"11:45 - 12:15","local"=>"SUM","empresa"=>"_","descripcion"=>"Clausura de la Sysmana por el Delegado de Educación Antonio López."),
       "29" => array("nombre"=> "Álvaro Serrano", "nombrePonencia" => "Realidad Aumentada con WebGL", "imagen" => "img/ponentes/Alvaro_Serrano-e1504772858793.jpg","hora"=>"12:15 - 14:15","local"=>"T116 / Alumnos DAW","empresa"=>"_","descripcion"=>"En el taller de WebGL de este año crearemos una sencilla aplicación de Realidad Aumentada utilizando tecnologías web, gracias a frameworks de código abierto como A-Frame y AR.js."),
       "30" => array("nombre"=> "Lucia Expósito", "nombrePonencia" => "¿Soy vulnerable?", "imagen" => "img/ponentes/LuciaExposito2018_400x400.jpg","hora"=>"12:15 - 12:45","local"=>"T112 / Alumnos ASIR","empresa"=>"_","descripcion"=>"Charla sobre la vulnerabilidad móvil a través de bluetooth por blueborn."),
       "31" => array("nombre"=> "Manuel Hidalgo", "nombrePonencia" => "Horus is coming... o casi", "imagen" => "img/ponentes/Manuel_Hidalgo.png","hora"=>"12:45 - 14:15","local"=>"T112 / Alumnos ASIR","empresa"=>"_","descripcion"=>"Uso de nuevas tecnologías (elk, programas open source y scripting) para monitorizar en tiempo real equipos y sus servicios."),
       "32" => array("nombre"=> "Javier Ponferrrada López, Jesús Mejías Leiva, Juan Rueda Mora, Miguel Ángel Gavilán Merino", "nombrePonencia" => "Vue vs React", "imagen" => "img/ponentes/ImagenesPonentesSysmanaVueVSReact-1.png","hora"=>"Lunes 5 Febrero - Viernes 9 Febrero","local"=>"T115 / Alumnos 2DAW","empresa"=>"_","descripcion"=>"Debido a la gran cantidad de ponencias de este año, este taller se realizará en horario de clase de DIW durante la semana del 5 al 9 de Febrero Taller de iniciación de Vue y React, donde se explicarán las características más importantes y las diferencias entre ellos, además de realizar ejemplos prácticos y guiados de cada uno de ellos para aprender a usar ambos framework."),
    );

    $ponencias = array(
        "lunes" => array(
            "0" => $ponentes["1"],
            "1" => $ponentes["2"],
            "2" => $ponentes["3"],
            "3" => $ponentes["4"],
            "4" => $ponentes["5"],
            "5" => $ponentes["6"]
        ),
        "martes" => array(
            "0" => $ponentes["7"],
            "1" => $ponentes["8"],
            "2" => $ponentes["9"],
            "3" => $ponentes["10"]
        ),
        "miercoles" => array(
            "0" => $ponentes["11"],
            "1" => $ponentes["12"],
            "2" => $ponentes["13"],
            "3" => $ponentes["14"],
            "4" => $ponentes["15"],
            "5" => $ponentes["16"],
            "6" => $ponentes["17"]
        ),
        "jueves" => array(
            "0" => $ponentes["18"],
            "1" => $ponentes["19"],
            "2" => $ponentes["20"],
            "3" => $ponentes["21"],
            "4" => $ponentes["22"]
        ),
        "viernes" => array(
            "0" => $ponentes["23"],
            "1" => $ponentes["24"],
            "2" => $ponentes["25"],
            "3" => $ponentes["26"],
            "4" => $ponentes["27"],
            "5" => $ponentes["28"],
            "6" => $ponentes["29"],
            "7" => $ponentes["30"],
            "8" => $ponentes["31"],
            "9" => $ponentes["32"]
        )
    );

?>