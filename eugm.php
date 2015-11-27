<?php

$data = file_get_contents("php://input");

// API key gets loaded from environment variable
$jsonurl = "https://eu.api.battle.net/sc2/ladder/176680?locale=en_GB&apikey=" . getenv ('BATTLE_NET_API_KEY');
$ladderData = file_get_contents($jsonurl);

if ($ladderData) {
  echo $ladderData;
} else {
  echo "Failed requesting GM Ladder from Battle.net API.";
}
