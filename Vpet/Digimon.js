import React from "react";
import { useEffect, useState } from "react";

let sprite = require("./eatingSprite2.gif");

function Digimon() {
  const [name, setName] = useState("PetMon");
  const [age, setAge] = useState(-1);
  const [weight, setWeight] = useState("PetMon");
  const [currSprite, setSprite] = useState(sprite);
  const [hunger, setHunger] = useState(0);
  const [strength, setStrength] = useState(0);
  const [bPower, setBPower] = useState(0);
  const [careMistakes, setCareMistakes] = useState(0);
  const [inmortality, setInmortality] = useState(true);
}

export default Digimon;
