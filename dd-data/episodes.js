// character to episode links
// const baseColor = '#131313';
const baseColor = '#ffffff75';
// luna
const path1color = '#339ACC'; // cerulean blue
// darcy
const path2color = '#FF6037'; // outrageous orange
// trav
const path3color = '#FF9933'; // neon carrot
// kiki
const path4color = '#FFFF66'; // laser yellow
// jamal
const path5color = '#66FF66'; // screamin green
// father daniel
const path6color = '#AAF0D1'; // magic mint
// carson
const path7color = '#FF00CC'; // hot magenta
// leaf
const path8color = '#FF355E'; // radical red
// fake link to change shape of graph
const transparentLink = 'ffffff00';

const baseCurve = 0;
const slightCurve = 0.125;
const curveRotationA = 1;
const curveRotationB = 4;
const charWidth = 0;
const baseWidth = 0.25;
const baseParticles = 3;

const data = {
  nodes: [
    {
      id: 'Darcy',
      group: 1,
      img: 'Darcy_avatar.png',
      type: 'Character',
      title: 'Darcy',
      size: 18
    },
    {
      id: 'Carson',
      group: 2,
      img: 'Carson_avatar.png',
      type: 'Character',
      title: 'Carson',
      size: 14
    },
    {
      id: 'FatherD',
      group: 3,
      img: 'FatherD_avatar.png',
      type: 'Character',
      title: 'Father Daniel',
      size: 14
    },
    {
      id: 'Jamal',
      group: 4,
      img: 'Jamal_avatar.png',
      type: 'Character',
      title: 'Jamal',
      size: 14
    },
    {
      id: 'Kiki',
      group: 5,
      img: 'Kiki_avatar.png',
      type: 'Character',
      title: 'Kiki',
      size: 18
    },
    {
      id: 'Leaf',
      group: 6,
      img: 'Leaf_avatar.png',
      type: 'Character',
      title: 'Leaf',
      size: 14
    },
    {
      id: 'Luna',
      group: 7,
      img: 'Luna_avatar.png',
      type: 'Character',
      title: 'Luna',
      size: 22
    },
    {
      id: 'Trav',
      group: 8,
      img: 'Trav_avatar.png',
      type: 'Character',
      title: 'Trav',
      size: 22
    },
    {
      id: 'DarcyCarson01',
      group: 1,
      img: 'DarcyCarson01.png',
      type: 'Episode',
      title: 'Darcy Carson 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'DarcyCarson02',
      group: 1,
      img: 'DarcyCarson02.png',
      type: 'Episode',
      title: 'Darcy Carson 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'DarcyCarson03',
      group: 1,
      img: 'DarcyCarson03.png',
      type: 'Episode',
      title: 'Darcy Carson 03',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'DarcyFatherD01',
      group: 2,
      img: 'DarcyFatherD01.png',
      type: 'Episode',
      title: 'Darcy FatherD 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'DarcyJamal01',
      group: 3,
      img: 'DarcyJamal01.png',
      type: 'Episode',
      title: 'Darcy Jamal 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'DarcyJamal02',
      group: 3,
      img: 'DarcyJamal02.png',
      type: 'Episode',
      title: 'Darcy Jamal 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'DarcyJamal03',
      group: 3,
      img: 'DarcyJamal03.png',
      type: 'Episode',
      title: 'Darcy Jamal 03',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'KikiLeaf01',
      group: 4,
      img: 'KikiLeaf01.png',
      type: 'Episode',
      title: 'Kiki Leaf 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'KikiLeaf02',
      group: 4,
      img: 'KikiLeaf02.png',
      type: 'Episode',
      title: 'Kiki Leaf 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'KikiLeaf03',
      group: 4,
      img: 'KikiLeaf03.png',
      type: 'Episode',
      title: 'Kiki Leaf 03',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaKiki01',
      group: 5,
      img: 'LunaKiki01.png',
      type: 'Episode',
      title: 'Luna Kiki 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaKiki02',
      group: 5,
      img: 'LunaKiki02.png',
      type: 'Episode',
      title: 'Luna Kiki 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaKiki03',
      group: 5,
      img: 'LunaKiki03.png',
      type: 'Episode',
      title: 'Luna Kiki 03',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaKiki04',
      group: 5,
      img: 'LunaKiki04.png',
      type: 'Episode',
      title: 'Luna Kiki 04',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaKiki05',
      group: 5,
      img: 'LunaKiki05.png',
      type: 'Episode',
      title: 'Luna Kiki 05',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaKiki06',
      group: 5,
      img: 'LunaKiki06.png',
      type: 'Episode',
      title: 'Luna Kiki 06',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaLeaf01',
      group: 6,
      img: 'LunaLeaf01.png',
      type: 'Episode',
      title: 'Luna Leaf 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'LunaLeaf02',
      group: 6,
      img: 'LunaLeaf02.png',
      type: 'Episode',
      title: 'Luna Leaf 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravCarson01',
      group: 7,
      img: 'TravCarson01.png',
      type: 'Episode',
      title: 'Trav Carson 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravCarson02',
      group: 7,
      img: 'TravCarson02.png',
      type: 'Episode',
      title: 'Trav Carson 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravFatherD01',
      group: 8,
      img: 'TravFatherD01.png',
      type: 'Episode',
      title: 'Trav FatherD 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravFatherD02',
      group: 8,
      img: 'TravFatherD02.png',
      type: 'Episode',
      title: 'Trav FatherD 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravLuna01',
      group: 9,
      img: 'TravLuna01.png',
      type: 'Episode',
      title: 'Trav Luna 01',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravLuna02',
      group: 9,
      img: 'TravLuna02.png',
      type: 'Episode',
      title: 'Trav Luna 02',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravLuna03',
      group: 9,
      img: 'TravLuna03.png',
      type: 'Episode',
      title: 'Trav Luna 03',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravLuna04',
      group: 9,
      img: 'TravLuna04.png',
      type: 'Episode',
      title: 'Trav Luna 04',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravLuna05',
      group: 9,
      img: 'TravLuna05.png',
      type: 'Episode',
      title: 'Trav Luna 05',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravLuna06',
      group: 9,
      img: 'TravLuna06.png',
      type: 'Episode',
      title: 'Trav Luna 06',
      prev: 'previous episode',
      next: 'next episode'
    },
    {
      id: 'TravLuna07',
      group: 9,
      img: 'TravLuna07.png',
      type: 'Episode',
      title: 'Trav Luna 07',
      prev: 'previous episode',
      next: 'next episode'
    }
  ],
  links: [
    {
      source: 'Darcy',
      target: 'DarcyCarson01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Darcy',
      target: 'DarcyCarson02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Darcy',
      target: 'DarcyCarson03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Darcy',
      target: 'DarcyFatherD01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Darcy',
      target: 'DarcyJamal01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Darcy',
      target: 'DarcyJamal02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Darcy',
      target: 'DarcyJamal03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Carson',
      target: 'DarcyCarson01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Carson',
      target: 'DarcyCarson02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Carson',
      target: 'DarcyCarson03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Carson',
      target: 'DarcyCarson03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Carson',
      target: 'TravCarson01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Carson',
      target: 'TravCarson02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'FatherD',
      target: 'DarcyFatherD01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'FatherD',
      target: 'TravFatherD01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'FatherD',
      target: 'TravFatherD02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Jamal',
      target: 'DarcyJamal01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Jamal',
      target: 'DarcyJamal02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Jamal',
      target: 'DarcyJamal03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'KikiLeaf01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'KikiLeaf02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'KikiLeaf03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'LunaKiki01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'LunaKiki02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'LunaKiki03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'LunaKiki04',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'LunaKiki05',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Kiki',
      target: 'LunaKiki06',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Leaf',
      target: 'KikiLeaf01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Leaf',
      target: 'KikiLeaf02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Leaf',
      target: 'KikiLeaf03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Leaf',
      target: 'LunaLeaf01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Leaf',
      target: 'LunaLeaf02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaKiki01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaKiki02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaKiki03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaKiki04',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaKiki05',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaKiki06',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaLeaf01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'LunaLeaf02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'TravLuna01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'TravLuna02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'TravLuna03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'TravLuna04',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'TravLuna05',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'TravLuna06',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Luna',
      target: 'TravLuna07',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravCarson01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravCarson02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravFatherD01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravFatherD02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravLuna01',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravLuna02',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravLuna03',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravLuna04',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravLuna05',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravLuna06',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    {
      source: 'Trav',
      target: 'TravLuna07',
      linkColor: baseColor,
      linkCurvature: baseCurve,
      width: charWidth
    },
    // path 1 start
    // LUNA
    {
      source: 'Luna',
      target: 'TravLuna01',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna01',
      target: 'TravLuna02',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna02',
      target: 'TravLuna03',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna03',
      target: 'TravLuna04',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna04',
      target: 'TravLuna05',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna05',
      target: 'TravLuna06',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna06',
      target: 'TravLuna07',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna07',
      target: 'LunaLeaf01',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaLeaf01',
      target: 'LunaLeaf02',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaLeaf02',
      target: 'LunaKiki01',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki01',
      target: 'LunaKiki02',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki02',
      target: 'LunaKiki03',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki03',
      target: 'LunaKiki04',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki04',
      target: 'LunaKiki05',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki05',
      target: 'LunaKiki06',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    // path 1 end
    // path 2 start
    // DARCY
    {
      source: 'Darcy',
      target: 'DarcyJamal01',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyJamal01',
      target: 'DarcyJamal02',
      linkColor: path2color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyJamal02',
      target: 'DarcyJamal03',
      linkColor: path2color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyJamal03',
      target: 'DarcyCarson01',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyCarson01',
      target: 'DarcyCarson02',
      linkColor: path2color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyCarson02',
      target: 'DarcyCarson03',
      linkColor: path2color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyCarson03',
      target: 'DarcyFatherD01',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    // path 2 end
    // path 3 start
    // TRAV
    {
      source: 'Trav',
      target: 'TravLuna01',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna01',
      target: 'TravLuna02',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna02',
      target: 'TravLuna03',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna03',
      target: 'TravLuna04',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna04',
      target: 'TravLuna05',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna05',
      target: 'TravLuna06',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna06',
      target: 'TravLuna07',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravLuna07',
      target: 'TravCarson01',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravCarson01',
      target: 'TravCarson02',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravCarson02',
      target: 'TravFatherD01',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravFatherD01',
      target: 'TravFatherD02',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    // path 3 end
    // path 4 start
    // KIKI
    {
      source: 'Kiki',
      target: 'LunaKiki01',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki01',
      target: 'LunaKiki02',
      linkColor: path4color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki02',
      target: 'LunaKiki03',
      linkColor: path4color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki03',
      target: 'LunaKiki04',
      linkColor: path4color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki04',
      target: 'LunaKiki05',
      linkColor: path4color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki05',
      target: 'LunaKiki06',
      linkColor: path4color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaKiki06',
      target: 'KikiLeaf01',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'KikiLeaf01',
      target: 'KikiLeaf02',
      linkColor: path4color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'KikiLeaf02',
      target: 'KikiLeaf03',
      linkColor: path4color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles
    },
    // path 4 end
    // path 5 start
    // JAMAL
    {
      source: 'Jamal',
      target: 'DarcyJamal01',
      linkColor: path5color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyJamal01',
      target: 'DarcyJamal02',
      linkColor: path5color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyJamal02',
      target: 'DarcyJamal03',
      linkColor: path5color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    // path 5 end
    // path 6 start
    // FATHER DANIEL
    {
      source: 'FatherD',
      target: 'TravFatherD01',
      linkColor: path6color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravFatherD01',
      target: 'TravFatherD02',
      linkColor: path6color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravFatherD02',
      target: 'DarcyFatherD01',
      linkColor: path6color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    // path 6 end
    // path 7 start
    // CARSON
    {
      source: 'Carson',
      target: 'DarcyCarson01',
      linkColor: path7color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyCarson01',
      target: 'DarcyCarson02',
      linkColor: path7color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyCarson02',
      target: 'DarcyCarson03',
      linkColor: path7color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'DarcyCarson03',
      target: 'TravCarson01',
      linkColor: path7color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'TravCarson01',
      target: 'TravCarson02',
      linkColor: path7color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    // path 7 end
    // path 8 start
    // LEAF
    {
      source: 'Leaf',
      target: 'LunaLeaf01',
      linkColor: path8color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaLeaf01',
      target: 'LunaLeaf02',
      linkColor: path8color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'LunaLeaf02',
      target: 'KikiLeaf01',
      linkColor: path8color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'KikiLeaf01',
      target: 'KikiLeaf02',
      linkColor: path8color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    {
      source: 'KikiLeaf02',
      target: 'KikiLeaf03',
      linkColor: path8color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles
    },
    // path 8 end
    // transparent link to reshape
    {
      source: 'Jamal',
      target: 'Leaf',
      linkColor: transparentLink
    }
  ]
};