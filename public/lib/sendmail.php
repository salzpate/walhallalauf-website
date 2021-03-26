<?php
require 'class.sendmail.php';
$sendMail = new SendMail("svd-ausdauer@web.de");
echo $sendMail->validateAndSend();
?>
