const orbits = {};

orbits.setSizes = (x, y, z) => {
    var sizes = {};
    sizes.x = [];
    sizes.x[0] = '-=' + x;
    sizes.x[1] = '+=' + x;
    sizes.x[2] = '+=' + x;
    sizes.x[3] = '-=' + x;

    sizes.y = [];
    sizes.y[0] = '-=' + y;
    sizes.y[1] = '-=' + y;
    sizes.y[2] = '+=' + y;
    sizes.y[3] = '+=' + y;

    sizes.z = [];
    sizes.z[0] = '-=' + z;
    sizes.z[1] = '-=' + z;
    sizes.z[2] = '+=' + z;
    sizes.z[3] = '+=' + z;

    sizes.index = [];
    var zmodifier = z * 100;
    sizes.index[0] = 200 - 10 * zmodifier;
    sizes.index[1] = 200 - 100 * zmodifier;
    sizes.index[2] = 200 - 10 * zmodifier;
    sizes.index[3] = 200 + 100 * zmodifier;

    sizes.shadow = [];
    sizes.shadow[0] = '8px 8px';
    sizes.shadow[1] = '6px 6px';
    sizes.shadow[2] = '8px 8px';
    sizes.shadow[3] = '10px 10px';

    return sizes;
  };
orbits.startAnimation = (tl, el, x, y, z) => {
    var sizes = orbits.setSizes(x, y, z);

    var item = document.querySelector(el);
    item.style.zIndex = sizes.index[3];
    item.style.x = sizes.x[3];
    item.style.y = sizes.y[3];

    for (var i = 0; i < 4; i++) {
      var ease1 = 'power1.in';
      var ease2 = 'power1.out';
      if (i % 2 == 0) {
        ease1 = 'power1.out';
        ease2 = 'power1.in';
      }
      console.log(i, ease1, ease2);
      tl.to(el, { x: sizes.x[i], ease: ease1 }, i * 10);
      // tl.to(el, {y: sizes.y[i], scale: sizes.z[i], boxShadow:"7px 7px " + sizes.shadow[i] + " gray", zIndex: sizes.index[i], ease: ease2}, i * 10);
      tl.to(
        el,
        {
          y: sizes.y[i],
          scale: sizes.z[i],
          zIndex: sizes.index[i],
          ease: ease2
        },
        i * 10
      );
    }
  };

  orbits.doAnimation = () => {
    var tl = gsap.timeline({ defaults: { duration: 10 }, repeat: -1 });

    // startAnimation(tl, "#one", 150, 25, .1);
    orbits.startAnimation(tl, '#two', 180, 20, 0.1);
    orbits.startAnimation(tl, '#three', 220, 30, 0.15);
    orbits.startAnimation(tl, '#four', 400, 40, 0.2);
  };