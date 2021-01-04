<?php
	session_start();
	session_destroy();
	setcookie("name", "", time() - 3600*24);
	setcookie("email", "", time() - 3600*24);
?>
