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
      id: 'Luna',
      img: 'Luna_avatar.png',
      type: 'Character',
      title: 'Luna',
      size: 22,
      primaryColor: path1color,
      recommendedEpisode: 'Trav Luna 01',
      recommendedEpisodeID: 'TravLuna01'
    },
    {
      id: 'Darcy',
      img: 'Darcy_avatar.png',
      type: 'Character',
      title: 'Darcy',
      size: 18,
      primaryColor: path2color,
      recommendedEpisode: 'Darcy Jamal 01'
    },
    {
      id: 'Trav',
      img: 'Trav_avatar.png',
      type: 'Character',
      title: 'Trav',
      size: 22,
      primaryColor: path3color,
      recommendedEpisode: 'Trav Luna 01'
    },
    {
      id: 'Kiki',
      img: 'Kiki_avatar.png',
      type: 'Character',
      title: 'Kiki',
      size: 18,
      primaryColor: path4color,
      recommendedEpisode: 'Kiki Luna 01'
    },
    {
      id: 'Jamal',
      img: 'Jamal_avatar.png',
      type: 'Character',
      title: 'Jamal',
      size: 14,
      primaryColor: path5color,
      recommendedEpisode: 'Darcy Jamal 01'
    },
    {
      id: 'FatherD',
      img: 'FatherD_avatar.png',
      type: 'Character',
      title: 'Father D',
      size: 14,
      primaryColor: path6color,
      recommendedEpisode: 'Trav FatherD 01'
    },
    {
      id: 'Carson',
      img: 'Carson_avatar.png',
      type: 'Character',
      title: 'Carson',
      size: 14,
      primaryColor: path7color,
      recommendedEpisode: 'Darcy Carson 01'
    },
    {
      id: 'Leaf',
      img: 'Leaf_avatar.png',
      type: 'Character',
      title: 'Leaf',
      size: 14,
      primaryColor: path8color,
      recommendedEpisode: 'Luna Leaf 01'
    },
    {
      id: 'DarcyCarson01',
      img: 'DarcyCarson01.png',
      type: 'Episode',
      title: 'Darcy Carson 01',
      primaryColor: path2color,
      primaryCharacter: 'Darcy'
    },
    {
      id: 'DarcyCarson02',
      img: 'DarcyCarson02.png',
      type: 'Episode',
      title: 'Darcy Carson 02',
      primaryColor: path2color,
      primaryCharacter: 'Darcy'
    },
    {
      id: 'DarcyCarson03',
      img: 'DarcyCarson03.png',
      type: 'Episode',
      title: 'Darcy Carson 03',
      primaryColor: path2color,
      primaryCharacter: 'Darcy'
    },
    {
      id: 'DarcyFatherD01',
      img: 'DarcyFatherD01.png',
      type: 'Episode',
      title: 'Darcy FatherD 01',
      primaryColor: path2color,
      primaryCharacter: 'Darcy'
    },
    {
      id: 'DarcyJamal01',
      img: 'DarcyJamal01.png',
      type: 'Episode',
      title: 'Darcy Jamal 01',
      primaryColor: path2color,
      primaryCharacter: 'Darcy'
    },
    {
      id: 'DarcyJamal02',
      img: 'DarcyJamal02.png',
      type: 'Episode',
      title: 'Darcy Jamal 02',
      primaryColor: path2color,
      primaryCharacter: 'Darcy'
    },
    {
      id: 'DarcyJamal03',
      img: 'DarcyJamal03.png',
      type: 'Episode',
      title: 'Darcy Jamal 03',
      primaryColor: path2color,
      primaryCharacter: 'Darcy'
    },
    {
      id: 'KikiLeaf01',
      img: 'KikiLeaf01.png',
      type: 'Episode',
      title: 'Kiki Leaf 01',
      primaryColor: path4color,
      primaryCharacter: 'Kiki'
    },
    {
      id: 'KikiLeaf02',
      img: 'KikiLeaf02.png',
      type: 'Episode',
      title: 'Kiki Leaf 02',
      primaryColor: path4color,
      primaryCharacter: 'Kiki'
    },
    {
      id: 'KikiLeaf03',
      img: 'KikiLeaf03.png',
      type: 'Episode',
      title: 'Kiki Leaf 03',
      primaryColor: path4color,
      primaryCharacter: 'Kiki'
    },
    {
      id: 'LunaKiki01',
      img: 'LunaKiki01.png',
      type: 'Episode',
      title: 'Luna Kiki 01',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'LunaKiki02',
      img: 'LunaKiki02.png',
      type: 'Episode',
      title: 'Luna Kiki 02',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'LunaKiki03',
      img: 'LunaKiki03.png',
      type: 'Episode',
      title: 'Luna Kiki 03',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'LunaKiki04',
      img: 'LunaKiki04.png',
      type: 'Episode',
      title: 'Luna Kiki 04',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'LunaKiki05',
      img: 'LunaKiki05.png',
      type: 'Episode',
      title: 'Luna Kiki 05',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'LunaKiki06',
      img: 'LunaKiki06.png',
      type: 'Episode',
      title: 'Luna Kiki 06',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'LunaLeaf01',
      img: 'LunaLeaf01.png',
      type: 'Episode',
      title: 'Luna Leaf 01',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'LunaLeaf02',
      img: 'LunaLeaf02.png',
      type: 'Episode',
      title: 'Luna Leaf 02',
      primaryColor: path1color,
      primaryCharacter: 'Luna'
    },
    {
      id: 'TravCarson01',
      img: 'TravCarson01.png',
      type: 'Episode',
      title: 'Trav Carson 01',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravCarson02',
      img: 'TravCarson02.png',
      type: 'Episode',
      title: 'Trav Carson 02',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravFatherD01',
      img: 'TravFatherD01.png',
      type: 'Episode',
      title: 'Trav FatherD 01',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravFatherD02',
      img: 'TravFatherD02.png',
      type: 'Episode',
      title: 'Trav FatherD 02',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravLuna01',
      img: 'TravLuna01.png',
      type: 'Episode',
      title: 'Trav Luna 01',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravLuna02',
      img: 'TravLuna02.png',
      type: 'Episode',
      title: 'Trav Luna 02',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravLuna03',
      img: 'TravLuna03.png',
      type: 'Episode',
      title: 'Trav Luna 03',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravLuna04',
      img: 'TravLuna04.png',
      type: 'Episode',
      title: 'Trav Luna 04',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravLuna05',
      img: 'TravLuna05.png',
      type: 'Episode',
      title: 'Trav Luna 05',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravLuna06',
      img: 'TravLuna06.png',
      type: 'Episode',
      title: 'Trav Luna 06',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
    },
    {
      id: 'TravLuna07',
      img: 'TravLuna07.png',
      type: 'Episode',
      title: 'Trav Luna 07',
      primaryColor: path3color,
      primaryCharacter: 'Trav'
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
