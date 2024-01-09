const Level = require('./Level');

test();

async function test() {
  // Nous récupérons tous les niveaux
  const levels = await Level.findAll();

  // Nous affichons les niveaux
  console.log(levels);
}
