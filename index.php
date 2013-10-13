<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title>Redes & Sistemas Distribuídos - 2013.2</title>
	
	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="js/jquery.event.drag-2.0.js"></script>
	
	<script type="text/javascript" src="http://localhost:8081/socket.io/socket.io.js"></script>
	
	<script type="text/javascript" src="scripts.js"></script>
	<link rel="stylesheet" href="estilo.css" />	
</head>
<body>
	<header>
		<span id="h_esquerda">
			<a href="./"><img src="imagens/home.png" alt="Inicial" /></a>
		</span>
		<span id="h_direita">
			<a href="http://www.es.ufc.br" target="_blank"><img src="imagens/logoES.png" alt="UFC - Quixadá" /></a>
			&nbsp;
			<a href="http://ufc.br" target="_blank"><img src="imagens/logo.png" alt="UFC - Quixadá" /></a>
		</span>
		<p>
			UFC | Campus Quixadá
			<br>
			Redes & Sistemas Distribuídos; Prof: Flávio R. C. Sousa
		</p>
	</header>
	
	<article></article>
	
	<footer>
		<span id="f_direita">
			<a href="sobre"><img src="imagens/sobre.png" alt="Sobre" height="32" /></a>
		</span>
		<ul>
			<li><strong>Equipe:</strong></li>
			<li>Jefferson Silva,</li>
			<li>João Marcos,</li>
			<li>Matheus S. Carvalho,</li>
			<li><a href="https://twitter.com/Kamihouse" target="_blank">Thiago Pereira Rosa</a></li>
		</ul>
	</footer>
	
	<script type="text/javascript">
		$(document).ready(function() {
			// Inserindo uma div para evitar edição (Para demonstração na sala de aula)
			var ip = '<?= $_SERVER['REMOTE_ADDR'] ?>';
			
			if(ip == '127.0.0.1'){
				// Permite edição
			} else {
				// Não permite edição
				$('body').append('<div id="desabilitador">*Edição desabilitada...</div>');
			}
		});
	</script>
</body>