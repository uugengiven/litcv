// character to episode links
// const baseColor = '#ffffff75';
const baseColor = '#ffffff00';
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
    // CHARACTER NODES
    {
      id: 'Luna',
      img: 'Luna_avatar.png',
      type: 'Character',
      title: 'Luna',
      size: 22,
      primaryColor: path1color,
    },
    {
      id: 'Darcy',
      img: 'Darcy_avatar.png',
      type: 'Character',
      title: 'Darcy',
      size: 18,
      primaryColor: path2color,
    },
    {
      id: 'Trav',
      img: 'Trav_avatar.png',
      type: 'Character',
      title: 'Trav',
      size: 22,
      primaryColor: path3color,
    },
    {
      id: 'Kiki',
      img: 'Kiki_avatar.png',
      type: 'Character',
      title: 'Kiki',
      size: 18,
      primaryColor: path4color,
    },
    {
      id: 'Jamal',
      img: 'Jamal_avatar.png',
      type: 'Character',
      title: 'Jamal',
      size: 14,
      primaryColor: path5color,
    },
    {
      id: 'FatherD',
      img: 'FatherD_avatar.png',
      type: 'Character',
      title: 'Father D',
      size: 14,
      primaryColor: path6color,
    },
    {
      id: 'Carson',
      img: 'Carson_avatar.png',
      type: 'Character',
      title: 'Carson',
      size: 14,
      primaryColor: path7color,
    },
    {
      id: 'Leaf',
      img: 'Leaf_avatar.png',
      type: 'Character',
      title: 'Leaf',
      size: 14,
      primaryColor: path8color,
    },
    // EPISODE NODES
    {
      id: 'UNDERTHENUMBERS',
      img: 'DarcyCarson01.png',
      type: 'Episode',
      title: 'Under the Numbers',
      associatedCharacters: ['Darcy', 'Carson'],
      url: 'https://player.vimeo.com/video/523994506',
    },
    {
      id: 'WHATEVERHAPPENS',
      img: 'DarcyCarson02.png',
      type: 'Episode',
      title: "Whatever Happens, You're a Gunter",
      associatedCharacters: ['Darcy', 'Carson'],
    },
    {
      id: 'OHDADDY',
      img: 'DarcyCarson03.png',
      type: 'Episode',
      title: 'Oh, Daddy',
      associatedCharacters: ['Darcy', 'Carson'],
    },
    {
      id: 'WHATWOULDGOD',
      img: 'DarcyFatherD01.png',
      type: 'Episode',
      title: 'What Would God?',
      associatedCharacters: ['Darcy', 'FatherD'],
    },
    {
      id: 'ITSMORETHANTHAT',
      img: 'DarcyJamal01.png',
      type: 'Episode',
      title: "It's More Than That",
      associatedCharacters: ['Darcy', 'Jamal'],
      url: 'https://player.vimeo.com/video/523995966',
    },
    {
      id: 'THEEFFECTOFMARITALSTRESS',
      img: 'DarcyJamal02.png',
      type: 'Episode',
      title: 'The Effect of Marital Stress',
      associatedCharacters: ['Darcy', 'Jamal'],
    },
    {
      id: 'CANYOUREFERUS',
      img: 'DarcyJamal03.png',
      type: 'Episode',
      title: 'Can You Refer Us?',
      associatedCharacters: ['Darcy', 'Jamal'],
    },
    {
      id: 'LETSBREAKTHEMUP',
      img: 'KikiLeaf01.png',
      type: 'Episode',
      title: "Let's Break Them Up",
      associatedCharacters: ['Kiki', 'Leaf'],
      url: 'https://player.vimeo.com/video/523996776',
    },
    {
      id: 'FLOATINGLEAF',
      img: 'KikiLeaf02.png',
      type: 'Episode',
      title: 'Floating Leaf',
      associatedCharacters: ['Kiki', 'Leaf'],
    },
    {
      id: 'CATBAGANDSOON',
      img: 'KikiLeaf03.png',
      type: 'Episode',
      title: 'Cat, Bag, and So On',
      associatedCharacters: ['Kiki', 'Leaf'],
    },
    {
      id: 'ILOVEYOUKEEKS',
      img: 'LunaKiki01.png',
      type: 'Episode',
      title: 'I Love You, Keeks',
      associatedCharacters: ['Luna', 'Kiki'],
      url: 'https://player.vimeo.com/video/523997117',
    },
    {
      id: 'LUNASHAPPYHAPPINESS',
      img: 'LunaKiki02.png',
      type: 'Episode',
      title: "Luna's Happy Happiness",
      associatedCharacters: ['Luna', 'Kiki'],
    },
    {
      id: 'CLOSER',
      img: 'LunaKiki03.png',
      type: 'Episode',
      title: 'Closer',
      primaryColor: path1color,
      associatedCharacters: ['Luna', 'Kiki'],
    },
    {
      id: 'IWISH',
      img: 'LunaKiki04.png',
      type: 'Episode',
      title: 'I Wish',
      associatedCharacters: ['Luna', 'Kiki'],
    },
    {
      id: 'FEELINGYOUBREATHE',
      img: 'LunaKiki05.png',
      type: 'Episode',
      title: 'Feeling You Breathe',
      associatedCharacters: ['Luna', 'Kiki'],
    },
    {
      id: 'EXPENSIVEEXPENSES',
      img: 'TravCarson01.png',
      type: 'Episode',
      title: 'Expensive Expenses',
      associatedCharacters: ['Trav', 'Carson'],
    },
    {
      id: 'TRAVWRIGGLES',
      img: 'TravCarson02.png',
      type: 'Episode',
      title: 'Trav Wriggles',
      associatedCharacters: ['Trav', 'Carson'],
    },
    {
      id: 'WHYWOULDGOD',
      img: 'TravFatherD01.png',
      type: 'Episode',
      title: 'Why Would God?',
      associatedCharacters: ['Trav', 'FatherD'],
      url: 'https://player.vimeo.com/video/523999659',
    },
    {
      id: 'EJOLLIES',
      img: 'TravLuna01.png',
      type: 'Episode',
      title: 'E-Jollies',
      associatedCharacters: ['Trav', 'Luna'],
      url: 'https://player.vimeo.com/video/414984043',
    },
    {
      id: 'LUNAWANTSMORE',
      img: 'TravLuna02.png',
      type: 'Episode',
      title: 'Luna Wants More',
      associatedCharacters: ['Trav', 'Luna'],
      url: 'https://player.vimeo.com/video/414989134',
    },
    {
      id: '3AMFULLOFGUILE',
      img: 'TravLuna03.png',
      type: 'Episode',
      title: '3AM, Free of Guile',
      associatedCharacters: ['Trav', 'Luna'],
      url: 'https://player.vimeo.com/video/410727503',
    },
    {
      id: 'LUNACROSSESTHERUBICON',
      img: 'TravLuna04.png',
      type: 'Episode',
      title: 'Luna Crosses the Rubicon',
      associatedCharacters: ['Trav', 'Luna'],
      url: 'https://player.vimeo.com/video/415008035',
    },
    {
      id: 'THECOSTOFCOST',
      img: 'TravLuna05.png',
      type: 'Episode',
      title: 'The Cost of Cost',
      associatedCharacters: ['Trav', 'Luna'],
    },
    {
      id: 'ITCOMESDOWNTOTHIS',
      img: 'TravLuna06.png',
      type: 'Episode',
      title: 'It Comes Down to This',
      associatedCharacters: ['Trav', 'Luna'],
    },
    {
      id: 'DRIVEWESTONSUNSET',
      img: 'TravLuna07.png',
      type: 'Episode',
      title: 'Drive West on Sunset',
      associatedCharacters: ['Trav', 'Luna'],
    },
    {
      id: 'WHITECOUNT',
      // TODO: temp image - UPDATE WHEN AVAILABLE
      img: 'bill.jpeg',
      type: 'Episode',
      title: 'White Count',
      associatedCharacters: ['Jamal', 'Darcy', 'Trav'],
    },
    {
      id: 'AMESSAGEFORTANGIE',
      // TODO: temp image - UPDATE WHEN AVAILABLE
      img: 'bill.jpeg',
      type: 'Episode',
      title: 'A Message for Tangie',
      associatedCharacters: ['Jamal'],
    },
    {
      id: 'OURFATHERWHOARTWHEREVER',
      // TODO: temp image - UPDATE WHEN AVAILABLE
      img: 'bill.jpeg',
      type: 'Episode',
      title: 'Our Father, Who Art Wherever...',
      associatedCharacters: ['FatherD'],
    },
  ],
  links: [
    // path 1 start
    // LUNA
    {
      source: 'Luna',
      target: 'EJOLLIES',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'EJOLLIES',
      target: 'ILOVEYOUKEEKS',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'ILOVEYOUKEEKS',
      target: 'LUNAWANTSMORE',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'LUNAWANTSMORE',
      target: '3AMFULLOFGUILE',
      linkColor: path1color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: '3AMFULLOFGUILE',
      target: 'LUNACROSSESTHERUBICON',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'LUNACROSSESTHERUBICON',
      target: 'LUNASHAPPYHAPPINESS',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'LUNASHAPPYHAPPINESS',
      target: 'CLOSER',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'CLOSER',
      target: 'THECOSTOFCOST',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'THECOSTOFCOST',
      target: 'IWISH',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'IWISH',
      target: 'ITCOMESDOWNTOTHIS',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'ITCOMESDOWNTOTHIS',
      target: 'FEELINGYOUBREATHE',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    {
      source: 'FEELINGYOUBREATHE',
      target: 'DRIVEWESTONSUNSET',
      linkColor: path1color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Luna',
    },
    // yes, this looks hacky af but it's for the next/prev functionality so leave it
    {
      source: 'DRIVEWESTONSUNSET',
      target: 'DRIVEWESTONSUNSET',
      linkColor: 'transparent',
      characterPath: 'Luna',
    },
    // path 1 end
    // path 2 start
    // DARCY
    {
      source: 'Darcy',
      target: 'UNDERTHENUMBERS',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    {
      source: 'UNDERTHENUMBERS',
      target: 'ITSMORETHANTHAT',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    {
      source: 'ITSMORETHANTHAT',
      target: 'THEEFFECTOFMARITALSTRESS',
      linkColor: path2color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    {
      source: 'THEEFFECTOFMARITALSTRESS',
      target: 'WHITECOUNT',
      linkColor: path2color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationA,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    {
      source: 'WHITECOUNT',
      target: 'WHATEVERHAPPENS',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    {
      source: 'WHATEVERHAPPENS',
      target: 'WHATWOULDGOD',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    {
      source: 'WHATWOULDGOD',
      target: 'CANYOUREFERUS',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    {
      source: 'CANYOUREFERUS',
      target: 'OHDADDY',
      linkColor: path2color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Darcy',
    },
    // yes, this looks hacky af but it's for the next/prev functionality so leave it
    {
      source: 'OHDADDY',
      target: 'OHDADDY',
      linkColor: 'transparent',
      characterPath: 'Darcy',
    },
    // path 2 end
    // path 3 start
    // TRAV
    {
      source: 'Trav',
      target: 'EJOLLIES',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'EJOLLIES',
      target: 'LUNAWANTSMORE',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'LUNAWANTSMORE',
      target: '3AMFULLOFGUILE',
      linkColor: path3color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: '3AMFULLOFGUILE',
      target: 'LUNACROSSESTHERUBICON',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'LUNACROSSESTHERUBICON',
      target: 'EXPENSIVEEXPENSES',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'EXPENSIVEEXPENSES',
      target: 'THECOSTOFCOST',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'THECOSTOFCOST',
      target: 'WHITECOUNT',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'WHITECOUNT',
      target: 'WHYWOULDGOD',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'WHYWOULDGOD',
      target: 'TRAVWRIGGLES',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'TRAVWRIGGLES',
      target: 'ITCOMESDOWNTOTHIS',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    {
      source: 'ITCOMESDOWNTOTHIS',
      target: 'DRIVEWESTONSUNSET',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    // yes, this looks hacky af but it's for the next/prev functionality so leave it
    {
      source: 'DRIVEWESTONSUNSET',
      target: 'DRIVEWESTONSUNSET',
      linkColor: path3color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Trav',
    },
    // path 3 end
    // path 4 start
    // KIKI
    {
      source: 'Kiki',
      target: 'ILOVEYOUKEEKS',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    {
      source: 'ILOVEYOUKEEKS',
      target: 'LETSBREAKTHEMUP',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    {
      source: 'LETSBREAKTHEMUP',
      target: 'LUNASHAPPYHAPPINESS',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    {
      source: 'LUNASHAPPYHAPPINESS',
      target: 'FLOATINGLEAF',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    {
      source: 'FLOATINGLEAF',
      target: 'CLOSER',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    {
      source: 'CLOSER',
      target: 'IWISH',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    {
      source: 'IWISH',
      target: 'CATBAGANDSOON',
      linkColor: path4color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    {
      source: 'CATBAGANDSOON',
      target: 'FEELINGYOUBREATHE',
      linkColor: path4color,
      llinkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Kiki',
    },
    // yes, this looks hacky af but it's for the next/prev functionality so leave it
    {
      source: 'FEELINGYOUBREATHE',
      target: 'FEELINGYOUBREATHE',
      linkColor: 'transparent',
      characterPath: 'Kiki',
    },
    // path 4 end
    // path 5 start
    // JAMAL
    {
      source: 'Jamal',
      target: 'ITSMORETHANTHAT',
      linkColor: path5color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Jamal',
    },
    {
      source: 'ITSMORETHANTHAT',
      target: 'THEEFFECTOFMARITALSTRESS',
      linkColor: path5color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Jamal',
    },
    {
      source: 'THEEFFECTOFMARITALSTRESS',
      target: 'WHITECOUNT',
      linkColor: path5color,
      linkCurvature: slightCurve,
      curveRotation: curveRotationB,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Jamal',
    },
    {
      source: 'WHITECOUNT',
      target: 'AMESSAGEFORTANGIE',
      linkColor: path5color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Jamal',
    },
    {
      source: 'AMESSAGEFORTANGIE',
      target: 'CANYOUREFERUS',
      linkColor: path5color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Jamal',
    },
    // yes, this looks hacky af but it's for the next/prev functionality so leave it
    {
      source: 'CANYOUREFERUS',
      target: 'CANYOUREFERUS',
      linkColor: 'transparent',
      characterPath: 'Jamal',
    },
    // path 5 end
    // path 6 start
    // FATHER DANIEL
    {
      source: 'FatherD',
      target: 'WHYWOULDGOD',
      linkColor: path6color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'FatherD',
    },
    {
      source: 'WHYWOULDGOD',
      target: 'WHATWOULDGOD',
      linkColor: path6color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'FatherD',
    },
    {
      source: 'WHATWOULDGOD',
      target: 'OURFATHERWHOARTWHEREVER',
      linkColor: path6color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'FatherD',
    },
    // yes, this looks hacky af but it's for the next/prev functionality so leave it
    {
      source: 'OURFATHERWHOARTWHEREVER',
      target: 'OURFATHERWHOARTWHEREVER',
      linkColor: 'transparent',
      characterPath: 'FatherD',
    },
    // path 6 end
    // path 7 start
    // CARSON
    {
      source: 'Carson',
      target: 'UNDERTHENUMBERS',
      linkColor: path7color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Carson',
    },
    {
      source: 'UNDERTHENUMBERS',
      target: 'EXPENSIVEEXPENSES',
      linkColor: path7color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Carson',
    },
    {
      source: 'EXPENSIVEEXPENSES',
      target: 'WHATEVERHAPPENS',
      linkColor: path7color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Carson',
    },
    {
      source: 'WHATEVERHAPPENS',
      target: 'TRAVWRIGGLES',
      linkColor: path7color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Carson',
    },
    {
      source: 'TRAVWRIGGLES',
      target: 'OHDADDY',
      linkColor: path7color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Carson',
    },
    // yes, this looks hacky af but it's for the next/prev functionality so leave it
    {
      source: 'OHDADDY',
      target: 'OHDADDY',
      linkColor: 'transparent',
      characterPath: 'Carson',
    },
    // path 7 end
    // path 8 start
    // LEAF
    {
      source: 'Leaf',
      target: 'LETSBREAKTHEMUP',
      linkColor: path8color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Leaf',
    },
    {
      source: 'LETSBREAKTHEMUP',
      target: 'FLOATINGLEAF',
      linkColor: path8color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Leaf',
    },
    {
      source: 'FLOATINGLEAF',
      target: 'CATBAGANDSOON',
      linkColor: path8color,
      linkCurvature: baseCurve,
      width: baseWidth,
      value: baseParticles,
      characterPath: 'Leaf',
    },
    {
      source: 'CATBAGANDSOON',
      target: 'CATBAGANDSOON',
      linkColor: 'transparent',
      characterPath: 'Leaf',
    },
    // path 8 end
    // TODO: add transparent links to reshape
    {
      source: 'Jamal',
      target: 'ITSMORETHANTHAT',
      linkColor: transparentLink,
    },
    {
      source: 'Jamal',
      target: 'THEEFFECTOFMARITALSTRESS',
      linkColor: transparentLink,
    },
    {
      source: 'Jamal',
      target: 'WHITECOUNT',
      linkColor: transparentLink,
    },
    {
      source: 'Jamal',
      target: 'AMESSAGEFORTANGIE',
      linkColor: transparentLink,
    },
    {
      source: 'Jamal',
      target: 'CANYOUREFERUS',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'UNDERTHENUMBERS',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'ITSMORETHANTHAT',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'THEEFFECTOFMARITALSTRESS',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'WHITECOUNT',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'WHATEVERHAPPENS',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'WHATWOULDGOD',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'CANYOUREFERUS',
      linkColor: transparentLink,
    },
    {
      source: 'Darcy',
      target: 'OHDADDY',
      linkColor: transparentLink,
    },
    {
      source: 'Carson',
      target: 'UNDERTHENUMBERS',
      linkColor: transparentLink,
    },
    {
      source: 'Carson',
      target: 'EXPENSIVEEXPENSES',
      linkColor: transparentLink,
    },
    {
      source: 'Carson',
      target: 'WHATEVERHAPPENS',
      linkColor: transparentLink,
    },
    {
      source: 'Carson',
      target: 'TRAVWRIGGLES',
      linkColor: transparentLink,
    },
    {
      source: 'Carson',
      target: 'OHDADDY',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'EJOLLIES',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'LUNAWANTSMORE',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: '3AMFULLOFGUILE',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'LUNACROSSESTHERUBICON',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'EXPENSIVEEXPENSES',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'THECOSTOFCOST',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'WHITECOUNT',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'WHYWOULDGOD',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'TRAVWRIGGLES',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'ITCOMESDOWNTOTHIS',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'DRIVEWESTONSUNSET',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'EJOLLIES',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'ILOVEYOUKEEKS',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'LUNAWANTSMORE',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: '3AMFULLOFGUILE',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'LUNACROSSESTHERUBICON',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'LUNASHAPPYHAPPINESS',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'CLOSER',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'THECOSTOFCOST',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'IWISH',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'ITCOMESDOWNTOTHIS',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'FEELINGYOUBREATHE',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'DRIVEWESTONSUNSET',
      linkColor: transparentLink,
    },
    {
      source: 'FatherD',
      target: 'WHYWOULDGOD',
      linkColor: transparentLink,
    },
    {
      source: 'FatherD',
      target: 'WHATWOULDGOD',
      linkColor: transparentLink,
    },
    {
      source: 'FatherD',
      target: 'OURFATHERWHOARTWHEREVER',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'ILOVEYOUKEEKS',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'LETSBREAKTHEMUP',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'LUNASHAPPYHAPPINESS',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'FLOATINGLEAF',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'CLOSER',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'IWISH',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'CATBAGANDSOON',
      linkColor: transparentLink,
    },
    {
      source: 'Kiki',
      target: 'FEELINGYOUBREATHE',
      linkColor: transparentLink,
    },
    {
      source: 'Leaf',
      target: 'LETSBREAKTHEMUP',
      linkColor: transparentLink,
    },
    {
      source: 'Leaf',
      target: 'FLOATINGLEAF',
      linkColor: transparentLink,
    },
    {
      source: 'Leaf',
      target: 'CATBAGANDSOON',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'Carson',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'FatherD',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'Jamal',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'Darcy',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'Kiki',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'Leaf',
      linkColor: transparentLink,
    },
    {
      source: 'Luna',
      target: 'Trav',
      linkColor: transparentLink,
    },
    {
      source: 'Trav',
      target: 'OURFATHERWHOARTWHEREVER',
      linkColor: transparentLink,
    },
  ],
};
