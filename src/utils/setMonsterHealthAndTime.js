export default (monsterLevel) => {
  if (monsterLevel == 'easy') {
    monsterHealth = 40;
    time = 12;
  } else if (monsterLevel == 'medium') {
    monsterHealth = 60;
    time = 10;
  } else {
    monsterHealth = 100;
    time = 7;
  };
  return monsterHealth, time
}