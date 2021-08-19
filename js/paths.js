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
const MEDIA_CHANGE = "MEDIA_CHANGE";
const MEDIA_RECENTER = "MEDIA_RECENTER";
const PATH_SELECT = "PATH_SELECT";
const PATH_CHANGE = "PATH_CHANGE";
const SNACKBAR_CLOSE = "SNACKBAR_CLOSE";
const SNACKBAR_OPEN = "SNACKBAR_OPEN";
const WEBSITE_LOADED = "WEBSITE_LOADED";
const HAMBURGER_OPEN = "HAMBURGER_OPEN";
const HAMBURGER_CLOSE = "HAMBURGER_CLOSE";
const VIDEO_CLOSE = "VIDEO_CLOSE";
const VIDEO_END = "VIDEO_END"; // this will close and go next

const program = {
  state: {
    isSnackbarVisible: true,
    videoDisplay: false,
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
    videoOverlay: document.querySelector('.video-overlay'),
    video: document.querySelector('.video')
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
    selectors.playBtn.addEventListener('click', e => {this.playClick();});
    selectors.recenterBtn.addEventListener('click', e => {this.recenterClick();})
    selectors.videoOverlay.addEventListener('click', e => {this.videocloseClick();});
    selectors.hamburgerBtn.addEventListener('click', e => {this.hamburgerToggle();});
    this.render();
    setInterval(() => this.pulse(), 1000);
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
    const knownEvents = [HAMBURGER_OPEN, HAMBURGER_CLOSE, PATH_SELECT, PATH_CHANGE, MEDIA_NEXT, MEDIA_PREV, MEDIA_CHANGE];
    if(!knownEvents.includes(this.state.lastCommand)) {
      return; // only look at certain events
    }
    const {selectors, state} = this;
    if(state.isHamburgerMenuOpen)
    {
      while(selectors.avatarContainer.firstChild)
      {
        selectors.avatarContainer.removeChild(selectors.avatarContainer.firstChild)
      }
      // do the absurd building of the avatars
      if(state.nodes.current.type == "Episode"){
        associatedCharacters = state.nodes.current.associatedCharacters;
        // filters associatedCharacters against allNodes to get characters objects needed
        filteredNodes = state.allNodes.filter(item =>
          associatedCharacters.includes(item.id)
        );
        // calls createAvatar function to create avatars in snackbar
        filteredNodes.forEach(function (item) {
          createAvatar(item.id, item.primaryColor, item.img, item.title);
        });
      }
    }
    
    setClass(selectors.hamburgerBtn, ['hidden', 'open'], state.isHamburgerMenuOpen ? 'open' : null);
    setClass(selectors.selectOptions, ['hidden'], state.isHamburgerMenuOpen ? null : 'hidden');
  },
  renderSnackbar: function () {
    const knownEvents = [MEDIA_NEXT, MEDIA_PREV, MEDIA_PLAY, MEDIA_CHANGE, PATH_SELECT, PATH_CHANGE, SNACKBAR_CLOSE, SNACKBAR_OPEN]
    if(!knownEvents.includes(this.state.lastCommand)) {
      return; // only look at certain events
    }
    const {selectors, state} = this;
    setClass(selectors.playBtn, ['active', 'hidden', 'pulse'], state.nodes.current?.type === "Episode" ? 'active' : 'hidden');
    setClass(selectors.prevBtn, ['active', 'hidden', 'pulse'], state.nodes.prev ? 'active' : 'hidden'); 
    setClass(selectors.nextBtn, ['active', 'hidden', 'pulse'], state.nodes.next ? 'active' : 'hidden'); 
    setClass(selectors.snackbar, ['snackbar_hidden', 'snackbar_show'], state.isSnackbarVisible ? 'snackbar_show' : 'snackbar_hidden');
    setClass(selectors.restartText, ['hidden'], state.nodes.next || !state.selectedCharacterNode ? 'hidden': null);
    setClass(selectors.recenterBtn, ['active', 'hidden'], state.nodes.current ? 'active' : null);

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
  renderCamera: async function () {
    const knownEvents = [MEDIA_NEXT, MEDIA_PREV, PATH_SELECT, PATH_CHANGE, MEDIA_RECENTER, MEDIA_CHANGE];
    if(!knownEvents.includes(this.state.lastCommand)) {
      return; // only look at certain events
    }
    
    if(this.state.nodes.current){ // this should also check for last action
      await updatePathColorsAndBalls();
      const test = document.getElementById(this.state.nodes.current.id);
      console.log(test);
      // test.classList.add("active-node");
      // updateCamera(this.state.nodes.current, this.state.nodes.next); 
    }
  },
  renderVideoPlayer: function () {
    console.log("rendering video player");
    const knownEvents = [MEDIA_PLAY, VIDEO_END, VIDEO_CLOSE];
    if(!knownEvents.includes(this.state.lastCommand))
    {
      return;
    }
    const {state, selectors} = this;
    if(state.videoDisplay)
    {
      if(state.lastCommand == MEDIA_PLAY)
      {
        console.log("setting up this video!)");
        url = state.nodes.current?.url
          ? state.nodes.current.url
          : 'https://player.vimeo.com/video/523994506';
        selectors.video.innerHTML = `<iframe title="vimeo-player" src="${url}" id="vimeo-player" frameborder="0" allowfullscreen></iframe>`;
        setupVimeo();
      }
      selectors.videoOverlay.style.opacity = 1;
      selectors.videoOverlay.style.pointerEvents = 'auto';
       
    }
    else
    {
      selectors.videoOverlay.style.opacity = 0;
      selectors.videoOverlay.style.pointerEvents = 'none';
    }
  },
  render: function () {
    const {selectors, state} = this;
    
    this.renderHamburger();
    this.renderSnackbar();
    this.renderVideoPlayer();

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
        const node = this.state.allNodes.find(item => item.id === selectedModalAvatarID);
        // builds storyPath array based on node id and characterPath property in json
        const storyPath = this.state.allLinks.filter(item => item.characterPath === node.id);
        this.sendEvent(PATH_SELECT, {
          storyPathIndex: 0, 
          storyPath, 
          selectedCharacterNode: node
        });
  },
  changePath: function (path_id) {
    let selectedModalAvatarID = path_id;
    const {state} = this;
    const node = state.allNodes.find(item => item.id === selectedModalAvatarID);
    // builds storyPath array based on node id and characterPath property in json
    const storyPath = state.allLinks.filter(item => item.characterPath === node.id);
    const storyPathIndex = storyPath.findIndex(
      item => item.source.id === state.nodes.current.id
    );
    this.sendEvent(PATH_CHANGE, {
      storyPathIndex: storyPathIndex, 
      storyPath, 
      selectedCharacterNode: node,
      isHamburgerMenuOpen: false
    });
  },
  sendEvent: function(event, newState) {
    const commands = [...this.state.commands, event];
    this.setState({...newState, commands, lastCommand: event});
  },
  nextClick: function () {
    if(this.state.storyPathIndex < this.state.storyPath.length - 1)
    {
      this.sendEvent(MEDIA_NEXT, {storyPathIndex: this.state.storyPathIndex + 1});
    }
  },
  prevClick: function () {
    if(this.state.storyPathIndex > 0)
    {
      this.sendEvent(MEDIA_PREV, {storyPathIndex: this.state.storyPathIndex - 1});
    }
  },
  recenterClick: function () {
    if(this.state.nodes.current)
    {
      this.sendEvent(MEDIA_RECENTER, {});
    }
  },
  playClick: function () {
    this.sendEvent(MEDIA_PLAY, {videoDisplay: true});
  },
  videocloseClick: function () {
    this.sendEvent(VIDEO_CLOSE, {videoDisplay: false});
    const {selectors} = this;
    setTimeout(() => {
      selectors.video.innerHTML = '';
    }, 1000);
  },
  videoEnd: function () {
    this.sendEvent(VIDEO_END, {videoDisplay: false});
    setTimeout(() => {
      this.nextClick()
    }, 500);
  },
  snackbarClose: function () {
    this.sendEvent(SNACKBAR_CLOSE, {isSnackbarVisible: false});
  },
  snackbarOpen: function () {
    this.sendEvent(SNACKBAR_OPEN, {isSnackbarVisible: true});
  },
  nodeClick: function (node) {
    // find node
    console.log("nodey clicky", node);
    const index = this.state.storyPath.findIndex(item => item.source === node);
    if(index > -1)
    {
      console.log("in the path");
      // if node is in current story path, keep everything, just update storypathindex
      if(index == this.state.storyPathIndex)
      {
        // clicked on the one that they're currently looking at
        this.playClick();
      }
      else
      {
        this.sendEvent(MEDIA_CHANGE, {storyPathIndex: index});
      }
    }
    else
    {
      console.log("out the path");
      // if node is not in current story path, clear out currently selected user, then put it in as current
      if(node.type == "Episode"){
        this.sendEvent(MEDIA_CHANGE, {
        storyPathIndex: 0, 
        storyPath: [], 
        selectedCharacterNode: null,
        nodes: {current: node, next: null, prev: null}
        });
      }
      else
      {
        this.selectPath(node.id);
      }
      
    }
  },
  hamburgerToggle: function() {
    if(this.state.isHamburgerMenuOpen){
      this.sendEvent(HAMBURGER_CLOSE, {isHamburgerMenuOpen: false});
    }
    else
    {
      this.sendEvent(HAMBURGER_OPEN, {isHamburgerMenuOpen: true});
    }   
  },
  pulse: function() {
    // I do this on an interval
    this.sendBalls();
  },
  sendBalls: function() {
    const {state} = this;
    if(state.nodes.current)
    {
      const links = state.allLinks.filter(link => link.target.id === state.nodes.current.id);
      links.forEach(link => Graph.emitParticle(link));
    }
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

const desktop = !(typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

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

async function updatePathColorsAndBalls()
{
  await Graph.nodeColor(Graph.nodeColor())
    .linkWidth(Graph.linkWidth());
}

// dynamically creates avatars in snackbar
function createAvatar(id, color, image, title) {
  const element = document.createElement('div');
  element.classList.add('avatar-container');
  element.innerHTML = `<img data-id="${id}" src="images/episodes/${image}" class="avatar" alt="Avatar" style="border: 3px solid ${color}" title=${title}>`;
  program.selectors.avatarContainer.appendChild(element);
  const associatedAvatars = document.querySelectorAll('.avatar');
  associatedAvatars.forEach(item =>
    item.addEventListener('click', e => program.changePath(e.target.getAttribute('data-id')))
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
const Graph = ForceGraph3D({
    extraRenderers: [new THREE.CSS3DRenderer()]
  })(elem)
  .graphData(data)
  .backgroundColor('#ffffff00')
  .nodeLabel('title')
  //.linkDirectionalParticles('value')
  //.linkDirectionalParticleSpeed(0.005)
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
    return 1.25;
    if (program.state.storyPath[program.statestoryPathIndex] == link || program.state.storyPath[program.state.storyPathIndex-1] == link) {
      return 1.25;
    } else {
      return 0;
    }
  })
  .linkWidth('width')
  .linkResolution(6)
  // .nodeThreeObject(({ img, type, id, size }) => {
  //   let color = 0x999999;
  //   console.log(type);
  //   if(id === program.state.nodes.current?.id || type == "Character")
  //   {
  //     color = 0xffffff;
  //   }
  //   const imgTexture = new THREE.TextureLoader().load(
  //     `./images/episodes/${img}`
  //   );
  //   const material = new THREE.SpriteMaterial({
  //     map: imgTexture,
  //     color: color
  //   });
  //   const sprite = new THREE.Sprite(material);
  //   if (type == 'Character') {
  //     sprite.scale.set(size, size);
  //   } else {
  //     sprite.scale.set(16, 9);
  //   }

  //   return sprite;
  // })
  .nodeThreeObject(({img, type, id, size}) => {
    const nodeEl = document.createElement('div');
    nodeEl.id = id;
    const image = document.createElement('img');
    image.src = `./images/episodes/${img}`;
    nodeEl.appendChild(image);
    nodeEl.className = 'node-label';
    const sprite =  new THREE.CSS3DSprite(nodeEl);
    if(type == "Episode")
    {
      sprite.scale.set(0.02, 0.02, 0.02);
    }
    else
    {
      sprite.scale.set(0.05, 0.05, 0.05);
    }
    return sprite;
  })
  .nodeThreeObjectExtend(true)
  .onNodeHover(node => (elem.style.cursor = node ? 'pointer' : null))
  // Aim at node from outside it
  .onNodeClick(node => {
    program.nodeClick(node);
  });

function reportWindowSize() {
  Graph.height(window.innerHeight - 10);
  Graph.width(window.innerWidth - 10);
}

window.onresize = reportWindowSize;

function setupVimeo() {
  var player = new Vimeo.Player(document.getElementById("vimeo-player"));

  // player.on('play', function() {
  //   console.log('Played the video');
  // });

  // player.getVideoTitle().then(function(title) {
  //   console.log('title:', title);
  // });

  // set function for when video has finished
  player.on('ended', () => {
    // close the video
    // then hit next
    program.videoEnd();
    // hideVideo(true);
  });

  // start video
  player.play();
}

document.addEventListener("keydown", (e) => {
  var key = e.key;
  if(key == "Esc" || key == "Escape")
  {
    program.videocloseClick();
  }
}, false);
