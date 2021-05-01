// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerDropdown = headerDropdown;

function headerDropdown() {
  document.getElementById('headerNavDropdown').classList.toggle('is-visible');
}
},{}],"data/modal.json":[function(require,module,exports) {
module.exports = {
  "data": {
    "1": {
      "name": " Cordilheiras do Caparaó - Chocolate",
      "variation": "Catuaí Vermelho.",
      "sensory": "Notas de chocolate e cacau.",
      "process": "Secagem natural e em terreiro suspenso.",
      "highlights": "83-84 pontos.",
      "madeby": "Deneval Miranda Vieira e família.",
      "altitude": "1.000 a 1.200 metros.",
      "region": "Serra do Caparaó, ES"
    },
    "2": {
      "name": "Cordilheiras do Caparaó - Café Junino",
      "variation": "Mokinha Catuaí Vermelho 785",
      "sensory": "Corpo aveludado, doçura alta, acidez brilhante e notas de açúcar mascavo, mel, papa de milho verde e frutas vermelhas.",
      "process": "Colheita tardia e descascado",
      "highlights": "88-89 pontos.",
      "madeby": "Deneval Miranda Vieira e família.",
      "altitude": "1.000 a 1.200 metros.",
      "region": "Serra do Caparaó, ES"
    },
    "3": {
      "name": "Cordilheiras do Caparaó - Café da Rosa",
      "variation": "Catuaí Vermelho 785.",
      "sensory": "Acidez incrivelmente brilhante e vibrante, corpo aveludado, marcante, com notas de especiarias, menta, alecrim, mel, chá de rosas e frutado.",
      "process": "Secagem natural e em terreiro suspenso.",
      "highlights": "88 pontos.",
      "madeby": "Deneval Miranda Vieira e família.",
      "altitude": "1.000 a 1.200 metros.",
      "region": "Serra do Caparaó, ES"
    },
    "4": {
      "name": "Douro Microlote Campeão do Coffee of The Year 2020",
      "variation": "Catucaí 2SL amarelo seleção (CAK)",
      "sensory": "Alta doçura, que apresenta notas de rapadura e melaço, proporcionando uma acidez licorosa. ",
      "process": "Lavado",
      "highlights": "Campeão do Coffee of The Year 2020.",
      "madeby": "Família Douro",
      "altitude": "1.000 metros.",
      "region": "Montanhas do Espirito Santo"
    },
    "5": {
      "name": "Saint’ Clair - Mel Cítrico",
      "variation": "Catucai Amarelo 100% Arábica",
      "sensory": "Mel cítrico com aroma intenso e acidez média",
      "process": "Torra média ",
      "highlights": "-",
      "madeby": "Denilson Antônio Costa.",
      "altitude": "1.150 metros.",
      "region": "Ilicínea, MG"
    },
    "6": {
      "name": "Saint’ Clair - Tradicional",
      "variation": "100% Arábica Mundo Novo",
      "sensory": "Encorpado, robusto com perfume intenso.",
      "process": "Torra média ",
      "highlights": "-",
      "madeby": "Claudio Antônio da Cunha.",
      "altitude": "1.000 metros.",
      "region": "Sul de Minas"
    }
  }
};
},{}],"js/modal.js":[function(require,module,exports) {
"use strict";

var _modal = require("../data/modal.json");

var coffeeName = document.querySelector("[data-name]");
var coffeeVariation = document.querySelector("[data-variation]");
var coffeeSensory = document.querySelector("[data-sensory");
var coffeeProcess = document.querySelector("[data-process");
var coffeeHighLights = document.querySelector("[data-highlights");
var coffeeMadeBy = document.querySelector("[data-madeby");
var coffeeAltitude = document.querySelector("[data-altitude");
var coffeeRegion = document.querySelector("[data-region");

var openModal = function openModal(id) {
  coffeeName.innerHTML = _modal.data[id].name;
  coffeeVariation.innerHTML = _modal.data[id].variation;
  coffeeSensory.innerHTML = _modal.data[id].sensory;
  coffeeProcess.innerHTML = _modal.data[id].process;
  coffeeHighLights.innerHTML = _modal.data[id].highlights;
  coffeeMadeBy.innerHTML = _modal.data[id].madeby;
  coffeeAltitude.innerHTML = _modal.data[id].altitude;
  coffeeRegion.innerHTML = _modal.data[id].region;
};

document.getElementById('modal').classList.toggle('flex-desative');
window.addEventListener('click', function (act) {
  if (!act.target.matches("[data-modal]")) {
    var flex = document.getElementById('modal');

    if (flex.classList.contains('flex-desative')) {
      flex.classList.remove('flex-desative');
      flex.classList.toggle('flex-active');
    }

    if (flex.classList.contains('flex-desative')) {
      flex.classList.remove('flex-desative');
      flex.classList.toggle('flex-active');
    }
  }
});
window.openModal = openModal;
},{"../data/modal.json":"data/modal.json"}],"index.js":[function(require,module,exports) {
"use strict";

var _header = require("./js/header");

var _modal = require("./js/modal");

document.querySelector('#dropdownButton').addEventListener('click', _header.headerDropdown);
window.addEventListener('click', function (event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById('headerNavDropdown');

    if (dropdown.classList.contains('is-visible')) {
      dropdown.classList.remove('is-visible');
    }
  }
});
},{"./js/header":"js/header.js","./js/modal":"js/modal.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42253" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map