// Selectors for snackbar and diagonal blocks inside snackbar
const snackbar = document.getElementById('snackbar-container');
const blockLeft = document.querySelector('.block--left');
const blockRight = document.querySelector('.block--right');
// Selectors for snack bar control icons
const prevBtn = document.querySelector('.control-icon--prev');
const nextBtn = document.querySelector('.control-icon--next');
const playBtn = document.querySelector('.control-icon--play');
// Selector for hamburger button in snackbar
const hamburgerBtn = document.querySelector('.hamburger-btn');
// state of hamburger menu
let isHamburgerMenuOpen = false;
// Selector for selector options in snackbar
const selectOptions = document.querySelector('.select-options');
// all nodes data
let allNodes = data.nodes;
// all links data
const allLinks = data.links;
// path of episode links for each character
let storyPath = [];
// index of storyPath
let storyPathIndex = 0;
// id of characters associated with each episode
let associatedCharacters = [];
// objects for characters associated with each episode
let filteredNodes = [];
// current episode
let currentEpisode = {};
// container selector for dynamically added avatars in snackbar once episode node is clicked
const avatarContainer = document.querySelector('.select-options');
// Function increments through storyPath array and sets/resets classes based on position in array
nextBtn.onclick = function () {
  // checks if last item of array
  if (storyPathIndex === storyPath.length - 1) {
    return;
  }
  // increment storyPath index
  storyPath[++storyPathIndex];
  // sets currentEpisode
  currentEpisode = storyPath[storyPathIndex].source;
  // removes active class on nextBtn if at last item in storyPath array
  storyPathIndex === storyPath.length - 1
    ? nextBtn.classList.remove('active')
    : null;
  // changes opacity for right text block in snackbar
  blockRight.classList.add('active');
  // changes opacity for play icon in snackbar
  playBtn.classList.add('active');
  // changes opacity for prev icon in snackbar
  prevBtn.classList.add('active');
  // removes pulse from nextBtn
  nextBtn.classList.remove('pulse');
  // removes character color from nextBtn icon
  nextBtn.removeAttribute('style');
  // shows hamburger button
  hamburgerBtn.classList.remove('hidden');
  // sets text content for episode in right diagonal block
  storyPathIndex !== 0
    ? (blockRight.textContent = storyPath[storyPathIndex].source.title)
    : (blockRight.textContent = '' & blockRight.classList.remove('active'));
  if (storyPathIndex === 0) {
    nextBtn.classList.add('active');
    nextBtn.classList.add('pulse');
    nextBtn.style.color = storyPath[0].linkColor;
    prevBtn.classList.remove('active');
    playBtn.classList.remove('active');
    hamburgerBtn.classList.add('hidden');
  }
  // gets next target x,y,z and repositions camera
  let node = storyPath[storyPathIndex].source;
  const distance = 35;
  const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
  Graph.cameraPosition(
    {
      x: node.x * distRatio,
      y: node.y * distRatio,
      z: node.z * distRatio
    }, // new position
    node, // lookAt ({ x, y, z })
    2000 // ms transition duration
  );
};

// Function decrements through storyPath array and sets/resets classes based on position in array
prevBtn.onclick = function () {
  // checks if first item of array
  if (storyPathIndex === 0) {
    return;
  }
  if (storyPathIndex === 1) {
    // resets right block text if at first element of array and going back to character node
    blockRight.textContent = 'click arrow';
    nextBtn.style.color = storyPath[0].linkColor;
    // clears currentEpisode
    currentEpisode = {};
  }
  // decrement storyPath index
  storyPath[--storyPathIndex];
  // sets currentEpisode
  currentEpisode = storyPath[storyPathIndex].source;
  // reset/set classes and text for snackbar blocks
  storyPathIndex === 0
    ? blockRight.classList.remove('active') &
      prevBtn.classList.remove('active') &
      playBtn.classList.remove('active') &
      nextBtn.classList.add('pulse') &
      hamburgerBtn.classList.add('hidden')
    : (blockRight.textContent = storyPath[storyPathIndex].source.title);
  nextBtn.classList.add('active');

  // gets next target x,y,z and repositions camera
  let node = storyPath[storyPathIndex].source;
  const distance = 35;
  const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
  Graph.cameraPosition(
    {
      x: node.x * distRatio,
      y: node.y * distRatio,
      z: node.z * distRatio
    }, // new position
    node, // lookAt ({ x, y, z })
    2000 // ms transition duration
  );
};

// Function adds hamburger animation and toggles character path options
hamburgerBtn.addEventListener('click', () => {
  if (isHamburgerMenuOpen) {
    isHamburgerMenuOpen = !isHamburgerMenuOpen;
    hamburgerBtn.classList.remove('open');
    selectOptions.classList.add('hidden');
    clearAvatars();
  } else {
    clearAvatars();
    // get associated characters
    associatedCharacters = currentEpisode.associatedCharacters;
    // filters associatedCharacters against allNodes to get characters objects needed
    filteredNodes = allNodes.filter(item =>
      associatedCharacters.includes(item.id)
    );
    // calls createAvatar function to create avatars in snackbar
    filteredNodes.forEach(function (item) {
      createAvatar(item.id, item.primaryColor, item.img, item.title);
    });
    // toggles isHamburgerOpen
    isHamburgerMenuOpen = !isHamburgerMenuOpen;
    hamburgerBtn.classList.add('open');
    // shows select options
    selectOptions.classList.remove('hidden');
  }
});

function chooseAvatar() {
  // gets id from selected avatar on click
  let selectedAvatarID = event.target.getAttribute('data-id');
  // gets name from selected avatar on click
  let selectedAvatarName = event.target.getAttribute('title');
  // sets left diagonal block to character name
  blockLeft.textContent = selectedAvatarName;
  // close hamburger and select options in snackbar
  isHamburgerMenuOpen = false;
  hamburgerBtn.classList.remove('open');
  selectOptions.classList.add('hidden');
  // builds character path array
  storyPath = allLinks.filter(item => item.characterPath === selectedAvatarID);
  // set storyPathIndex based on currentEpisode id index in latest storyPath
  storyPathIndex = storyPath.findIndex(
    item => item.source.id === currentEpisode.id
  );
  // set classes on prev/next buttons based on array index
  storyPathIndex !== 0 ? prevBtn.classList.add('active') : null;
  storyPathIndex !== storyPath.length - 1
    ? nextBtn.classList.add('active')
    : null;
  // sets left diagonal block to character color
  blockLeft.style.backgroundColor = storyPath[0].linkColor;
}

// dynamically creates avatars in snackbar
function createAvatar(id, color, image, title) {
  const element = document.createElement('div');
  element.classList.add('avatar-container');
  element.innerHTML = `<img data-id="${id}" src="images/episodes/${image}" class="avatar" alt="Avatar" style="border: 3px solid ${color}" title=${title}>`;
  avatarContainer.appendChild(element);
  const associatedAvatars = document.querySelectorAll('.avatar');
  associatedAvatars.forEach(item =>
    item.addEventListener('click', chooseAvatar)
  );
}

// clears DOM of existing avatars
function clearAvatars() {
  while (avatarContainer.hasChildNodes()) {
    avatarContainer.removeChild(avatarContainer.firstChild);
  }
}

function resetVariables() {
  // removes avatars if they exist or else they will reproduce like rabbits
  clearAvatars();
  // resets storyPath index
  storyPathIndex = 0;
  // toggle hamburger var
  isHamburgerMenuOpen = false;
}

// 3D graph
const elem = document.getElementById('3d-graph');
const Graph = ForceGraph3D()(elem)
  .graphData(data)
  .backgroundColor('#ffffff00')
  .nodeLabel('title')
  .linkDirectionalParticles('value')
  .linkDirectionalParticleSpeed(0.005)
  .linkColor('linkColor')
  .linkOpacity(1)
  .linkCurvature('linkCurvature')
  .linkCurveRotation('curveRotation')
  .linkDirectionalParticleWidth(1.125)
  .linkWidth('width')
  .linkResolution(6)
  .nodeThreeObject(({ img, type, id, size }) => {
    const imgTexture = new THREE.TextureLoader().load(
      `./images/episodes/${img}`
    );
    const material = new THREE.SpriteMaterial({
      map: imgTexture
    });
    const sprite = new THREE.Sprite(material);
    if (type == 'Character') {
      sprite.scale.set(size, size);
    } else {
      sprite.scale.set(16, 9);
    }

    return sprite;
  })
  .onNodeHover(node => (elem.style.cursor = node ? 'pointer' : null))
  // Aim at node from outside it
  .onNodeClick(node => {
    // checks to see if snackbar is open and toggles it
    snackbar.classList.contains('snackbar_hidden')
      ? snackbar.classList.remove('snackbar_hidden') &
        snackbar.classList.add('snackbar_show')
      : null;

    // conditional for character versus episode
    if (node.type === 'Character') {
      // clears all vars to original values
      resetVariables();
      // builds storyPath array based on node id and characterPath property in json
      storyPath = allLinks.filter(item => item.characterPath === node.id);
      // hide hamburger btn
      hamburgerBtn.classList.add('hidden');
      // toggle hamburger icon class
      hamburgerBtn.classList.remove('open');
      // hide snackbar select options
      selectOptions.classList.add('hidden');
      // resets classes on snackbar control icons
      prevBtn.classList.remove('active');
      playBtn.classList.remove('active');
      // adds active class to next button
      nextBtn.classList.add('active');
      // adds pulse animation to nextBtn
      nextBtn.classList.add('pulse');
      // adds character color to nextBtn
      nextBtn.style.color = node.primaryColor;
      // hides hamburger
      hamburgerBtn.classList.add('hidden');
      // resets for storyPathIndex and text content
      blockRight.classList.remove('active');
      blockRight.textContent = 'click arrow';
      // Sets colors/text content for diagonal boxes in snackbar
      blockLeft.style.backgroundColor = node.primaryColor;
      blockLeft.textContent = node.title;
    }
    if (node.type === 'Episode') {
      // clears all vars to originals values
      resetVariables();
      // sets current episode to episode node clicked
      currentEpisode = node;
      // sets data atttribute of id on episode so it is accessible when finding index from avatar clicks
      blockRight.setAttribute('data-episodeID', node.id);
      // toggle hamburger icon class
      hamburgerBtn.classList.remove('open');
      // show hamburger button
      hamburgerBtn.classList.remove('hidden');
      // hide snackbar select options
      selectOptions.classList.add('hidden');
      // sets snackbar right box to episode title
      blockRight.textContent = node.title;
      // resets snackbar left box to empty string
      blockLeft.textContent = 'Choose Path';
      // sets snackbar left box to default color
      blockLeft.style.backgroundColor = '#e2e2e2';
      // reset/set classes on snackbar right box and snackbar controls
      blockRight.classList.add('active');
      nextBtn.classList.remove('active');
      prevBtn.classList.remove('active');
      playBtn.classList.add('active');
      nextBtn.classList.remove('pulse');
      nextBtn.removeAttribute('style');
    }
    const distance = 35;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
    Graph.cameraPosition(
      {
        x: node.x * distRatio,
        y: node.y * distRatio,
        z: node.z * distRatio
      }, // new position
      node, // lookAt ({ x, y, z })
      2000 // ms transition duration
    );
  });
