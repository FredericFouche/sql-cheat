const Level = require('./Level');

test();

async function test() {
  // Nous récupérons tous les niveaux
  const levels = await Level.findAll();

  // Nous affichons les niveaux
  console.log(levels);

  // Nous récupérons tous les niveaux triés par ordre décroissant
  const levelOrder = await Level.findAll({ order: [['level', 'DESC']] });
  console.log(levelOrder);

  // Nous récupérons tous les niveaux dont le nom est "Facile"
  const levelName = await Level.findAll({ where: { name: 'Facile' } });
  console.log(levelName);
}
