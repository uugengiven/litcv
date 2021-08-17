// Things needed for this to work
// Default view, what is the current item, what is the next, what is the previous node
// what is the next and what is the previous link
// get next, move next, get prev, move prev

// Display should:
// look for next, prev and set up buttons accordingly
// highlight buttons as required

// Timer:
// This is a one second set interal, used for doing animation things
// generally sends out bubbles from nodes

// State:
// Is the modal showing
// Is the snackbar open
// List of all nodes
// List of current node path
// Current Node Index

// Selectors:
// Items on the page, such as snackbar, nextbtn, prevbtn

// EVENT TYPES
const MEDIA_NEXT = "MEDIA_NEXT";
const MEDIA_PREV = "MEDIA_PREV";
const MEDIA_PLAY = "MEDIA_PLAY";
const PATH_SELECT = "PATH_SELECT";
const SNACKBAR_CLOSE = "SNACKBAR_CLOSE";
const SNACKBAR_OPEN = "SNACKBAR_OPEN";
const WEBSITE_LOADED = "WEBSITE_LOADED";

const program = {
  state: {
    isSnackbarVisible: true,
    // state of hamburger menu
    isHamburgerMenuOpen: false,
    nodes: {
      next: null,
      prev: null,
      current: null
    },
    selectedCharacterNode: null,
    commands: [WEBSITE_LOADED],
    lastCommand: WEBSITE_LOADED,
    // all nodes data
    allNodes: data.nodes,
    // all links data
    allLinks: data.links,
    // path of episode links for each character
    storyPath: [],
    // index of storyPath
    storyPathIndex: 0,
    // id of characters associated with each episode
    associatedCharacters: [],
    // objects for characters associated with each episode
    filteredNodes: [],
    // current episode
    currentEpisode: {},
    // is the current video displaying?
    videoDisplay: false,
    // are we on the desktop?
    desktop: !(typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1),
  },
  selectors: {
    // Selectors for snackbar and diagonal blocks inside snackbar
    snackbar: document.getElementById('snackbar-container'),
    blockLeft: document.querySelector('.block--left'),
    blockRight: document.querySelector('.block--right'),
    // Selectors for snack bar control icons
    prevBtn: document.querySelector('.control-icon--prev'),
    nextBtn: document.querySelector('.control-icon--next'),
    playBtn: document.querySelector('.control-icon--play'),
    recenterBtn: document.querySelector('.control-icon--recenter'),

    // Selector for hamburger button in snackbar
    hamburgerBtn: document.querySelector('.hamburger-btn'),
    // Selector for selector options in snackbar
    selectOptions: document.querySelector('.select-options'),
    // Selector for body to add box-shadow based on character chosen
    gradientBody: document.querySelector('.particles.gradient-body'),
    // Selector for restart text in snackbar
    restartText: document.querySelector('.restart-text'),
    // Selectors for paths page modal and modal close button
    modal: document.querySelector('section.chars-overlay'),
    closeBtn: document.querySelector('.chars-overlay button.btn--white'),
    // Selector for paths overal modal avatar images
    modalAvatars: document.querySelectorAll('.chars-overlay-avatar'),
    // container selector for dynamically added avatars in snackbar once episode node is clicked
    avatarContainer: document.querySelector('.select-options'),
    // Selector for restart text in snackbar
    restartOpenModal: document.querySelector('.restart-text'),
  },
  setup: function () {
    // closes paths page modal
    const {selectors} = this;
    selectors.closeBtn.addEventListener('click', function () {
      selectors.modal.classList.add('d-none');
    });
    // opens paths page modal from restart text
    selectors.restartOpenModal.addEventListener('click', function () {
      selectors.modal.classList.remove('d-none');
    });
    window.addEventListener('load', function () {
      selectors.modalAvatars.forEach(item => (item.style.pointerEvents = 'inherit'));
    });

    selectors.modalAvatars.forEach(item => {
      item.addEventListener('click', e => {
        selectors.modal.classList.add('d-none');
        let selectedModalAvatarID = e.target.getAttribute('data-id');
        this.selectPath(selectedModalAvatarID);
      });
    });

    selectors.prevBtn.addEventListener('click', e => {this.prevClick();});
    selectors.nextBtn.addEventListener('click', e => {this.nextClick();});
    this.render();
  },
  setState: function (newState) {
    this.state = {...this.state, ...newState};
    this.setupNodes();
    this.render();
    console.log(this.selectors.modal);
    console.log(this);
  },
  setupNodes : function () {
    // used to set up next/prev nodes
    const {state} = this;
    if(state.storyPath?.length > 0)
    {
      state.nodes.current = state.storyPath[state.storyPathIndex].source;
      state.nodes.next = state.storyPathIndex < (state.storyPath.length - 1) ? state.storyPath[state.storyPathIndex + 1] : null;
      state.nodes.prev = state.storyPathIndex > 0 ? state.storyPath[state.storyPathIndex - 1] : null;
    }
  },
  renderHamburger: function () {
    const {selectors, state} = this;
    setClass(selectors.hamburgerBtn, ['hidden', 'open'], state.isHamburgerMenuOpen ? 'open' : 'hidden');
  },
  renderSnackbar: function () {
    const knownEvents = [MEDIA_NEXT, MEDIA_PREV, MEDIA_PLAY, PATH_SELECT, SNACKBAR_CLOSE, SNACKBAR_OPEN]
    if(!knownEvents.includes(this.state.lastCommand)) {
      return; // only look at certain events
    }
    const {selectors, state} = this;
    setClass(selectors.playBtn, ['active', 'hidden', 'pulse'], state.nodes.current?.type === "Episode" ? 'active' : 'hidden');
    setClass(selectors.prevBtn, ['active', 'hidden', 'pulse'], state.nodes.prev ? 'active' : 'hidden'); 
    setClass(selectors.nextBtn, ['active', 'hidden', 'pulse'], state.nodes.next ? 'active' : 'hidden'); 
    setClass(selectors.snackbar, ['snackbar_hidden', 'snackbar_show'], state.isSnackbarVisible ? 'snackbar_show' : 'snackbar_hidden');
    setClass(selectors.restartText, ['hidden'], state.nodes.next ? 'hidden': null);

    selectors.blockLeft.textContent = state.selectedCharacterNode? state.selectedCharacterNode.title: null;

    // pulse states
    // if at the beginning
    if(!state.nodes.prev)
    {
      selectors.nextBtn.classList.add("pulse");
    }

    
    if(state.nodes.current) {
      // a node is selected
      setClass(selectors.blockRight, ['active', 'hidden'], state.nodes.current.type == "Episode" ? 'active': 'hidden');

      if(state.nodes.current.type == "Character"){
        selectors.blockRight.classList.remove('active');
        selectors.blockRight.textContent = 'click arrow';
      }
      else if (state.nodes.current.type == "Episode") {
        // show episode stuff here
        // sets text content for episode in right diagonal block
        selectors.blockRight.textContent = state.nodes.current.title;
          
      }
    }
  },
  renderCamera: function () {
    const knownEvents = [MEDIA_NEXT, MEDIA_PREV, PATH_SELECT]
    if(!knownEvents.includes(this.state.lastCommand)) {
      return; // only look at certain events
    }
    if(this.state.nodes.current){ // this should also check for last action
      updatePathColorsAndBalls();
      updateCamera(this.state.nodes.current, this.state.nodes.next); 
    }
  },
  render: function () {
    const {selectors, state} = this;
    
    this.renderHamburger();
    this.renderSnackbar();

    if(state.selectedCharacterNode) {
      // a character is selected
      selectors.gradientBody.style.boxShadow = `inset 0 0 0 6px ${state.selectedCharacterNode.primaryColor}`;
      selectors.nextBtn.style.color = state.selectedCharacterNode.primaryColor;
      selectors.blockLeft.style.backgroundColor = state.selectedCharacterNode.primaryColor;
    }
    else
    {
      // a character is not selected
      selectors.gradientBody.style.boxShadow = null;
      selectors.nextBtn.style.color = null;
      selectors.blockLeft.style.backgroundColor = null;
    }

    this.renderCamera();
  },
  selectPath: function(path_id) {
        let selectedModalAvatarID = path_id;
        const node = allNodes.find(item => item.id === selectedModalAvatarID);
        // builds storyPath array based on node id and characterPath property in json
        const storyPath = allLinks.filter(item => item.characterPath === node.id);
        this.sendEvent(PATH_SELECT, {
          storyPathIndex: 0, 
          storyPath, 
          selectedCharacterNode: node
        });
  },
  sendEvent: function(event, newState) {
    const commands = [...this.state.commands, event];
    this.setState({...newState, commands, lastCommand: event});
  },
  nextClick: function () {
    if(this.state.storyPathIndex < this.state.storyPath.length - 1)
    {
      this.sendEvent("MEDIA_NEXT", {storyPathIndex: this.state.storyPathIndex + 1});
    }
  },
  prevClick: function () {
    if(this.state.storyPathIndex > 0)
    {
      this.sendEvent("MEDIA_PREV", {storyPathIndex: this.state.storyPathIndex - 1});
    }
  },
  snackbarClose: function () {
    this.sendEvent(SNACKBAR_CLOSE, {isSnackbarVisible: false});
  },
  snackbarOpen: function () {
    this.sendEvent(SNACKBAR_OPEN, {isSnackbarVisible: true});
  }
};

function setClass(element, possibleClasses, setClass)
{
  possibleClasses.forEach(cls => {
    element.classList.remove(cls);
  })
  if(setClass)
  {
    element.classList.add(setClass);
  }
}

program.setup();
program.setState({});

// Selectors for snackbar and diagonal blocks inside snackbar
const snackbar = document.getElementById('snackbar-container');
const blockLeft = document.querySelector('.block--left');
const blockRight = document.querySelector('.block--right');
// Selectors for snack bar control icons
const prevBtn = document.querySelector('.control-icon--prev');
const nextBtn = document.querySelector('.control-icon--next');
const playBtn = document.querySelector('.control-icon--play');
const recenterBtn = document.querySelector('.control-icon--recenter');

// Selector for hamburger button in snackbar
const hamburgerBtn = document.querySelector('.hamburger-btn');
// Selector for selector options in snackbar
const selectOptions = document.querySelector('.select-options');
// Selector for body to add box-shadow based on character chosen
const gradientBody = document.querySelector('.particles.gradient-body');
// Selector for restart text in snackbar
const restartText = document.querySelector('.restart-text');
// Selectors for paths page modal and modal close button
const modal = document.querySelector('section.chars-overlay');
const closeBtn = modal.querySelector('button.btn--white');
// Selector for paths overal modal avatar images
const modalAvatars = document.querySelectorAll('.chars-overlay-avatar');
// container selector for dynamically added avatars in snackbar once episode node is clicked
const avatarContainer = document.querySelector('.select-options');
// Selector for restart text in snackbar
const restartOpenModal = document.querySelector('.restart-text');
// state of hamburger menu
let isHamburgerMenuOpen = false;
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
// closes paths page modal
closeBtn.addEventListener('click', function () {
  modal.classList.add('d-none');
});
// opens paths page modal from restart text
restartOpenModal.addEventListener('click', function () {
  modal.classList.remove('d-none');
});

let videoDisplay = false;
const desktop = !(typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);


// prevents user from clicking on modal avatars until 3d graph is fully loaded


// Function listens for paths modal avatar clicks and selects character on graph
// modalAvatars.forEach(item => {
//   item.addEventListener('click', e => {
//     modal.classList.add('d-none');
//     // clears all vars to original values
//     resetVariables();
//     // checks to see if snackbar is open and toggles it
//     snackbar.classList.contains('snackbar_hidden')
//       ? snackbar.classList.remove('snackbar_hidden') &
//         snackbar.classList.add('snackbar_show')
//       : null;
//     // gets id from selected avatar on click
//     let selectedModalAvatarID = e.target.getAttribute('data-id');
//     let node = allNodes.find(item => item.id === selectedModalAvatarID);
//     // builds storyPath array based on node id and characterPath property in json
//     storyPath = allLinks.filter(item => item.characterPath === node.id);
//     // hide hamburger btn
//     hamburgerBtn.classList.add('hidden');
//     // toggle hamburger icon class
//     hamburgerBtn.classList.remove('open');
//     // hide snackbar select options
//     selectOptions.classList.add('hidden');
//     // resets classes on snackbar control icons
//     prevBtn.classList.remove('active');
//     playBtn.classList.remove('active');
//     nextBtn.classList.remove('hidden');
//     restartText.classList.add('hidden');
//     // adds active class to next button
//     nextBtn.classList.add('active');
//     // adds pulse animation to nextBtn
//     nextBtn.classList.add('pulse');
//     // adds character color to nextBtn
//     nextBtn.style.color = node.primaryColor;
//     // resets for storyPathIndex and text content
//     blockRight.classList.remove('active');
//     blockRight.textContent = 'click arrow';
//     // Sets colors/text content for diagonal boxes in snackbar
//     blockLeft.style.backgroundColor = node.primaryColor;
//     blockLeft.textContent = node.title;
//     // Sets box shadow color based on character chosem
//     gradientBody.style.boxShadow = `inset 0 0 0 6px ${node.primaryColor}`;
//     const distance = 35;
//     const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
//     // highlights links based on character
//     updatePathColorsAndBalls();
//     updateCamera(node, storyPath[0]);
//   });
// });
// Function increments through storyPath array and sets/resets classes based on position in array


const updateCamera = function (node, nextNode) {
  var cameraLocation = new THREE.Vector3(node.x, node.y, node.z);
  const originalPoint = cameraLocation.clone();
  testThing = node;
  const distance = desktop ? 55 : 35;
  const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
  if (nextNode) {
    const secondPoint = new THREE.Vector3(nextNode.x, nextNode.y, nextNode.z);
    const cameraDiff = cameraLocation.clone().sub(secondPoint).normalize();
    const pointDistance = cameraLocation.clone().sub(secondPoint).length();
    const axisPoint = new THREE.Vector3(
      cameraDiff.x,
      -cameraDiff.z,
      cameraDiff.y
    );
    const angle = 90 * (Math.PI / 180);
    const offset = cameraDiff.clone().applyAxisAngle(axisPoint, angle);
    cameraLocation = cameraLocation
      .add(cameraDiff.multiplyScalar(distance))
      .add(offset.multiplyScalar(10 + (15 - pointDistance / 10)));
  } else {
    cameraLocation = cameraLocation.clone().multiplyScalar(distRatio);
  }

  Graph.cameraPosition(
    cameraLocation, // new position
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

function chooseAvatar(e) {
  // gets id from selected avatar on click
  let selectedAvatarID = e.target.getAttribute('data-id');
  // gets name from selected avatar on click
  let selectedAvatarName = e.target.getAttribute('title');
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
    : nextBtn.classList.add('hidden') & restartText.classList.remove('hidden');
  // sets left diagonal block to character color
  blockLeft.style.backgroundColor = storyPath[0].linkColor;
  gradientBody.style.boxShadow = `inset 0 0 0 3px ${storyPath[0].linkColor}`;
  // highlights links based on character
  updatePathColorsAndBalls();
  updateCamera(storyPath[storyPathIndex].source, storyPath[storyPathIndex + 1]?.source);
}

function updatePathColorsAndBalls()
{
  Graph.nodeColor(Graph.nodeColor())
    .nodeThreeObject(Graph.nodeThreeObject())
    .linkWidth(Graph.linkWidth())
    .linkDirectionalParticles(Graph.linkDirectionalParticles());
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
  .linkColor(link => {
    if (link.linkColor == 'ffffff00') {
      return 'ffffff00';
    }
    if (program.state.storyPath[0]?.characterPath == link.characterPath) {
      return link.linkColor;
    } else {
      return '#FFFFFF33';
    }
  })
  .linkOpacity(1)
  .linkCurvature('linkCurvature')
  .linkCurveRotation('curveRotation')
  .linkDirectionalParticleWidth(link => {
    if (program.state.storyPath[program.statestoryPathIndex] == link || program.state.storyPath[program.state.storyPathIndex-1] == link) {
      return 1.25;
    } else {
      return 0;
    }
  })
  .linkWidth('width')
  .linkResolution(6)
  .nodeThreeObject(({ img, type, id, size }) => {
    let color = 0x999999;
    console.log(type);
    if(id === program.state.nodes.current?.id || type == "Character")
    {
      color = 0xffffff;
    }
    const imgTexture = new THREE.TextureLoader().load(
      `./images/episodes/${img}`
    );
    const material = new THREE.SpriteMaterial({
      map: imgTexture,
      color: color
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
      nextBtn.classList.remove('hidden');
      restartText.classList.add('hidden');
      // adds active class to next button
      nextBtn.classList.add('active');
      // adds pulse animation to nextBtn
      nextBtn.classList.add('pulse');
      // adds character color to nextBtn
      nextBtn.style.color = node.primaryColor;
      // resets for storyPathIndex and text content
      blockRight.classList.remove('active');
      blockRight.textContent = 'click arrow';
      // Sets colors/text content for diagonal boxes in snackbar
      blockLeft.style.backgroundColor = node.primaryColor;
      blockLeft.textContent = node.title;
      // Sets box shadow color based on character chosem
      gradientBody.style.boxShadow = `inset 0 0 0 6px ${node.primaryColor}`;
      // highlights links based on character
      Graph.nodeColor(Graph.nodeColor())
        .linkWidth(Graph.linkWidth())
        .linkDirectionalParticles(Graph.linkDirectionalParticles());
    }
    if (node.type === 'Episode') {
      if (currentEpisode === node)
      {
        showVideo();
        return;
      }
      // clears all vars to originals values
      resetVariables();
      // sets current episode to episode node clicked
      currentEpisode = node;
      // sets data atttribute of id on episode so it is accessible when finding index from avatar clicks
      blockRight.setAttribute('data-episodeID', node.id);
      // resets restart text classes and nextBtn classes
      restartText.classList.add('hidden');
      nextBtn.classList.remove('hidden');
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
      // remove box-shadow on body
      gradientBody.style.boxShadow = 'none';
    }
    updateCamera(node);
  });

function recenter() {
  if(currentEpisode)
  {
    updateCamera(currentEpisode);
  }
}

function reportWindowSize() {
  Graph.height(window.innerHeight - 10);
  Graph.width(window.innerWidth - 10);
}

function reportWindowSize() {
  Graph.height(window.innerHeight - 10);
  Graph.width(window.innerWidth - 10);
}

window.onresize = reportWindowSize;

function setupVideo() {
  const overlay = document.querySelector('.video-overlay');
  overlay.addEventListener('click', () => {hideVideo(false)});
}

function hideVideo (gonext) {
  if(videoDisplay)
  {
    const overlay = document.querySelector('.video-overlay');
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';
    videoDisplay = false;
    const video = document.querySelector('.video');
    setTimeout(() => {
      video.innerHTML = '';
    }, 1000);
    if(gonext)
    {
      let event = new Event('click');
      setTimeout(() => {
        nextBtn.dispatchEvent(event);
      }, 500);
    }
  }
}

function showVideo() {
  url = currentEpisode?.url
    ? currentEpisode.url
    : 'https://player.vimeo.com/video/523994506';
  const video = document.querySelector('.video');
  video.innerHTML = `<iframe title="vimeo-player" src="${url}" id="vimeo-player" frameborder="0" allowfullscreen></iframe>`;
  const overlay = document.querySelector('.video-overlay');
  overlay.style.opacity = 1;
  overlay.style.pointerEvents = 'auto';
  videoDisplay = true;
  setupVimeo();
}

function setupVimeo() {
  var player = new Vimeo.Player(document.getElementById("vimeo-player"));

  player.on('play', function() {
    console.log('Played the video');
  });

  player.getVideoTitle().then(function(title) {
    console.log('title:', title);
  });

  // set function for when video has finished
  player.on('ended', () => {
    // close the video
    // then hit next
    hideVideo(true);
  });

  // start video
  player.play();
}

document.addEventListener("keydown", (e) => {
  var key = e.key;
  if(key == "Esc" || key == "Escape")
  {
    hideVideo(false);
  }

}, false);

setupVideo();
