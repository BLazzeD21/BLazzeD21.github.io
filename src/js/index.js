particlesJS('particles-js',
  {'particles':
    {'number': {'value': 250, 'density':
      {
        'enable': false, 'value_area': 800}},
    'color': {
      'value': '#574b90',
    },
    'shape': {
      'type': 'triangle',
      'stroke': {
        'width': 0, 'color': '#000000',
      },
      'polygon': {
        'nb_sides': 5,
      },
    },
    'size': {
      'value': 2,
      'random': true,
      'anim': {
        'enable': true,
        'speed': 5,
        'size_min': 0.1,
        'sync': true,
      },
    }, 'line_linked': {
      'enable': true,
      'distance': 100,
      'color': '#ffffff',
      'opacity': 0.4,
      'width': 1,
    },
    'move': {
      'enable': true,
      'speed': 5,
      'direction': 'none',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false,
        'rotateX': 600,
        'rotateY': 1200,
      },
    },
    },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': true,
        'mode': 'repulse',
      },
      'onclick': {
        'enable': true,
        'mode': 'repulse',
      },
      'resize': true,
    },
    'modes': {
      'grab': {
        'distance': 400,
        'line_linked': {
          'opacity': 1,
        },
      },
      'repulse':
        {'distance': 100,
          'duration': 0.4},
    },
  }, 'retina_detect': true,
  });

