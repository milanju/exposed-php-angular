<?php

$data = file_get_contents("php://input");

// alias loaded from Dropbox file
$jsonurl = "https://dl.dropboxusercontent.com/s/tyhsuf2poddp89b/alias.json";
$aliasData = file_get_contents($jsonurl);

if ($aliasData) {
  echo $aliasData;
} else {
  echo "Failed requesting Aliases.";
}
