/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./CreateSignature.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CreateSignature.js":
/*!****************************!*\
  !*** ./CreateSignature.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.m.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import jsPDF from 'jspdf';

var LINES = 0,
    VSPACE = 5; //5mm

var LINE_max = 68;

window.onload = function () {
  var _init = init('signature_canvas'),
      _init2 = _slicedToArray(_init, 2),
      signaturePad = _init2[0],
      doc = _init2[1]; //Save Signature Button


  document.getElementById('btn_signature_add').onclick = function () {
    add_signature(doc, signaturePad);
  }; //Save Signature Button


  document.getElementById('btn_pdf_generate').onclick = function () {
    // save_signature(signaturePad)
    generate_document(doc);
  }; //Add Text Button


  document.getElementById('btn_add_text').onclick = function () {
    var text = document.getElementById('input_text').value;
    add_text(doc, text);
  };
};

var init = function init(canvas_id) {
  //CANVAS SIGNATURE SETUP
  var canvas = document.getElementById(canvas_id);
  var signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
  var doc = new PDFDocument();
  console.log('%cSuccessfully initialised signature and pdf objects', 'color:green');
  return [signaturePad, doc];
};

var generate_document = function generate_document(doc) {
  doc.end();
};

var add_signature = function add_signature(doc, signaturePad) {
  var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var format = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (image == null) {
    image = signaturePad.toDataURL();
    format = 'PNG';
  } // console.log(image.clientWidth)
  // console.log(image.clientHeight)    


  doc.addImage(image, format, 0, (1 + LINES) * VSPACE);
  LINES += 1 + 150 / (3.7795275591 * VSPACE); //TODO 150 is number of pixels in canvas will have to change
};

var add_text = function add_text(doc, text) {
  var lines = [];

  for (i = 0; i <= text.length; i = i + LINE_max) {
    lines.append(text.slice(i - LINE_max, i));
  }

  if (lines.length == 0) lines.append(text);

  for (line in lines) {
    doc.text(line, 0, (1 + LINES) * VSPACE);
    LINES++;
  }
};

/***/ }),

/***/ "./node_modules/signature_pad/dist/signature_pad.m.js":
/*!************************************************************!*\
  !*** ./node_modules/signature_pad/dist/signature_pad.m.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Signature Pad v3.0.0-beta.3 | https://github.com/szimek/signature_pad
 * (c) 2018 Szymon Nowak | Released under the MIT license
 */

class Point {
    constructor(x, y, time) {
        this.x = x;
        this.y = y;
        this.time = time || Date.now();
    }
    distanceTo(start) {
        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.time === other.time;
    }
    velocityFrom(start) {
        return (this.time !== start.time) ? this.distanceTo(start) / (this.time - start.time) : 0;
    }
}

class Bezier {
    constructor(startPoint, control2, control1, endPoint, startWidth, endWidth) {
        this.startPoint = startPoint;
        this.control2 = control2;
        this.control1 = control1;
        this.endPoint = endPoint;
        this.startWidth = startWidth;
        this.endWidth = endWidth;
    }
    static fromPoints(points, widths) {
        const c2 = this.calculateControlPoints(points[0], points[1], points[2]).c2;
        const c3 = this.calculateControlPoints(points[1], points[2], points[3]).c1;
        return new Bezier(points[1], c2, c3, points[2], widths.start, widths.end);
    }
    static calculateControlPoints(s1, s2, s3) {
        const dx1 = s1.x - s2.x;
        const dy1 = s1.y - s2.y;
        const dx2 = s2.x - s3.x;
        const dy2 = s2.y - s3.y;
        const m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
        const m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };
        const l1 = Math.sqrt((dx1 * dx1) + (dy1 * dy1));
        const l2 = Math.sqrt((dx2 * dx2) + (dy2 * dy2));
        const dxm = (m1.x - m2.x);
        const dym = (m1.y - m2.y);
        const k = l2 / (l1 + l2);
        const cm = { x: m2.x + (dxm * k), y: m2.y + (dym * k) };
        const tx = s2.x - cm.x;
        const ty = s2.y - cm.y;
        return {
            c1: new Point(m1.x + tx, m1.y + ty),
            c2: new Point(m2.x + tx, m2.y + ty),
        };
    }
    length() {
        const steps = 10;
        let length = 0;
        let px;
        let py;
        for (let i = 0; i <= steps; i += 1) {
            const t = i / steps;
            const cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
            const cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
            if (i > 0) {
                const xdiff = cx - px;
                const ydiff = cy - py;
                length += Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
            }
            px = cx;
            py = cy;
        }
        return length;
    }
    point(t, start, c1, c2, end) {
        return (start * (1.0 - t) * (1.0 - t) * (1.0 - t))
            + (3.0 * c1 * (1.0 - t) * (1.0 - t) * t)
            + (3.0 * c2 * (1.0 - t) * t * t)
            + (end * t * t * t);
    }
}

function throttle(fn, wait = 250) {
    let previous = 0;
    let timeout = null;
    let result;
    let storedContext;
    let storedArgs;
    const later = () => {
        previous = Date.now();
        timeout = null;
        result = fn.apply(storedContext, storedArgs);
        if (!timeout) {
            storedContext = null;
            storedArgs = [];
        }
    };
    return function (...args) {
        const now = Date.now();
        const remaining = wait - (now - previous);
        storedContext = this;
        storedArgs = args;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = fn.apply(storedContext, storedArgs);
            if (!timeout) {
                storedContext = null;
                storedArgs = [];
            }
        }
        else if (!timeout) {
            timeout = window.setTimeout(later, remaining);
        }
        return result;
    };
}

class SignaturePad {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.options = options;
        this._handleMouseDown = (event) => {
            if (event.which === 1) {
                this._mouseButtonDown = true;
                this._strokeBegin(event);
            }
        };
        this._handleMouseMove = (event) => {
            if (this._mouseButtonDown) {
                this._strokeMoveUpdate(event);
            }
        };
        this._handleMouseUp = (event) => {
            if (event.which === 1 && this._mouseButtonDown) {
                this._mouseButtonDown = false;
                this._strokeEnd(event);
            }
        };
        this._handleTouchStart = (event) => {
            event.preventDefault();
            if (event.targetTouches.length === 1) {
                const touch = event.changedTouches[0];
                this._strokeBegin(touch);
            }
        };
        this._handleTouchMove = (event) => {
            event.preventDefault();
            const touch = event.targetTouches[0];
            this._strokeMoveUpdate(touch);
        };
        this._handleTouchEnd = (event) => {
            const wasCanvasTouched = event.target === this.canvas;
            if (wasCanvasTouched) {
                event.preventDefault();
                const touch = event.changedTouches[0];
                this._strokeEnd(touch);
            }
        };
        this.velocityFilterWeight = options.velocityFilterWeight || 0.7;
        this.minWidth = options.minWidth || 0.5;
        this.maxWidth = options.maxWidth || 2.5;
        this.throttle = ('throttle' in options ? options.throttle : 16);
        this.minDistance = ('minDistance' in options ? options.minDistance : 5);
        if (this.throttle) {
            this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
        }
        else {
            this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
        }
        this.dotSize = options.dotSize || function () {
            return (this.minWidth + this.maxWidth) / 2;
        };
        this.penColor = options.penColor || 'black';
        this.backgroundColor = options.backgroundColor || 'rgba(0,0,0,0)';
        this.onBegin = options.onBegin;
        this.onEnd = options.onEnd;
        this._ctx = canvas.getContext('2d');
        this.clear();
        this.on();
    }
    clear() {
        const ctx = this._ctx;
        const canvas = this.canvas;
        ctx.fillStyle = this.backgroundColor;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._data = [];
        this._reset();
        this._isEmpty = true;
    }
    fromDataURL(dataUrl, options = {}, callback) {
        const image = new Image();
        const ratio = options.ratio || window.devicePixelRatio || 1;
        const width = options.width || (this.canvas.width / ratio);
        const height = options.height || (this.canvas.height / ratio);
        this._reset();
        image.onload = () => {
            this._ctx.drawImage(image, 0, 0, width, height);
            if (callback) {
                callback();
            }
        };
        image.onerror = (error) => {
            if (callback) {
                callback(error);
            }
        };
        image.src = dataUrl;
        this._isEmpty = false;
    }
    toDataURL(type = 'image/png', encoderOptions) {
        switch (type) {
            case 'image/svg+xml':
                return this._toSVG();
            default:
                return this.canvas.toDataURL(type, encoderOptions);
        }
    }
    on() {
        this.canvas.style.touchAction = 'none';
        this.canvas.style.msTouchAction = 'none';
        if (window.PointerEvent) {
            this._handlePointerEvents();
        }
        else {
            this._handleMouseEvents();
            if ('ontouchstart' in window) {
                this._handleTouchEvents();
            }
        }
    }
    off() {
        this.canvas.style.touchAction = 'auto';
        this.canvas.style.msTouchAction = 'auto';
        this.canvas.removeEventListener('pointerdown', this._handleMouseDown);
        this.canvas.removeEventListener('pointermove', this._handleMouseMove);
        document.removeEventListener('pointerup', this._handleMouseUp);
        this.canvas.removeEventListener('mousedown', this._handleMouseDown);
        this.canvas.removeEventListener('mousemove', this._handleMouseMove);
        document.removeEventListener('mouseup', this._handleMouseUp);
        this.canvas.removeEventListener('touchstart', this._handleTouchStart);
        this.canvas.removeEventListener('touchmove', this._handleTouchMove);
        this.canvas.removeEventListener('touchend', this._handleTouchEnd);
    }
    isEmpty() {
        return this._isEmpty;
    }
    fromData(pointGroups) {
        this.clear();
        this._fromData(pointGroups, ({ color, curve }) => this._drawCurve({ color, curve }), ({ color, point }) => this._drawDot({ color, point }));
        this._data = pointGroups;
    }
    toData() {
        return this._data;
    }
    _strokeBegin(event) {
        const newPointGroup = {
            color: this.penColor,
            points: [],
        };
        this._data.push(newPointGroup);
        this._reset();
        this._strokeUpdate(event);
        if (typeof this.onBegin === 'function') {
            this.onBegin(event);
        }
    }
    _strokeUpdate(event) {
        const x = event.clientX;
        const y = event.clientY;
        const point = this._createPoint(x, y);
        const lastPointGroup = this._data[this._data.length - 1];
        const lastPoints = lastPointGroup.points;
        const lastPoint = lastPoints.length > 0 && lastPoints[lastPoints.length - 1];
        const isLastPointTooClose = lastPoint ? point.distanceTo(lastPoint) <= this.minDistance : false;
        const color = lastPointGroup.color;
        if (!lastPoint || !(lastPoint && isLastPointTooClose)) {
            const curve = this._addPoint(point);
            if (!lastPoint) {
                this._drawDot({ color, point });
            }
            else if (curve) {
                this._drawCurve({ color, curve });
            }
            lastPoints.push({
                time: point.time,
                x: point.x,
                y: point.y,
            });
        }
    }
    _strokeEnd(event) {
        this._strokeUpdate(event);
        if (typeof this.onEnd === 'function') {
            this.onEnd(event);
        }
    }
    _handlePointerEvents() {
        this._mouseButtonDown = false;
        this.canvas.addEventListener('pointerdown', this._handleMouseDown);
        this.canvas.addEventListener('pointermove', this._handleMouseMove);
        document.addEventListener('pointerup', this._handleMouseUp);
    }
    _handleMouseEvents() {
        this._mouseButtonDown = false;
        this.canvas.addEventListener('mousedown', this._handleMouseDown);
        this.canvas.addEventListener('mousemove', this._handleMouseMove);
        document.addEventListener('mouseup', this._handleMouseUp);
    }
    _handleTouchEvents() {
        this.canvas.addEventListener('touchstart', this._handleTouchStart);
        this.canvas.addEventListener('touchmove', this._handleTouchMove);
        this.canvas.addEventListener('touchend', this._handleTouchEnd);
    }
    _reset() {
        this._lastPoints = [];
        this._lastVelocity = 0;
        this._lastWidth = (this.minWidth + this.maxWidth) / 2;
        this._ctx.fillStyle = this.penColor;
    }
    _createPoint(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        return new Point(x - rect.left, y - rect.top, new Date().getTime());
    }
    _addPoint(point) {
        const { _lastPoints } = this;
        _lastPoints.push(point);
        if (_lastPoints.length > 2) {
            if (_lastPoints.length === 3) {
                _lastPoints.unshift(_lastPoints[0]);
            }
            const widths = this._calculateCurveWidths(_lastPoints[1], _lastPoints[2]);
            const curve = Bezier.fromPoints(_lastPoints, widths);
            _lastPoints.shift();
            return curve;
        }
        return null;
    }
    _calculateCurveWidths(startPoint, endPoint) {
        const velocity = (this.velocityFilterWeight * endPoint.velocityFrom(startPoint))
            + ((1 - this.velocityFilterWeight) * this._lastVelocity);
        const newWidth = this._strokeWidth(velocity);
        const widths = {
            end: newWidth,
            start: this._lastWidth,
        };
        this._lastVelocity = velocity;
        this._lastWidth = newWidth;
        return widths;
    }
    _strokeWidth(velocity) {
        return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
    }
    _drawCurveSegment(x, y, width) {
        const ctx = this._ctx;
        ctx.moveTo(x, y);
        ctx.arc(x, y, width, 0, 2 * Math.PI, false);
        this._isEmpty = false;
    }
    _drawCurve({ color, curve }) {
        const ctx = this._ctx;
        const widthDelta = curve.endWidth - curve.startWidth;
        const drawSteps = Math.floor(curve.length()) * 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        for (let i = 0; i < drawSteps; i += 1) {
            const t = i / drawSteps;
            const tt = t * t;
            const ttt = tt * t;
            const u = 1 - t;
            const uu = u * u;
            const uuu = uu * u;
            let x = uuu * curve.startPoint.x;
            x += 3 * uu * t * curve.control1.x;
            x += 3 * u * tt * curve.control2.x;
            x += ttt * curve.endPoint.x;
            let y = uuu * curve.startPoint.y;
            y += 3 * uu * t * curve.control1.y;
            y += 3 * u * tt * curve.control2.y;
            y += ttt * curve.endPoint.y;
            const width = curve.startWidth + (ttt * widthDelta);
            this._drawCurveSegment(x, y, width);
        }
        ctx.closePath();
        ctx.fill();
    }
    _drawDot({ color, point }) {
        const ctx = this._ctx;
        const width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
        ctx.beginPath();
        this._drawCurveSegment(point.x, point.y, width);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
    _fromData(pointGroups, drawCurve, drawDot) {
        for (const group of pointGroups) {
            const { color, points } = group;
            if (points.length > 1) {
                for (let j = 0; j < points.length; j += 1) {
                    const basicPoint = points[j];
                    const point = new Point(basicPoint.x, basicPoint.y, basicPoint.time);
                    this.penColor = color;
                    if (j === 0) {
                        this._reset();
                    }
                    const curve = this._addPoint(point);
                    if (curve) {
                        drawCurve({ color, curve });
                    }
                }
            }
            else {
                this._reset();
                drawDot({
                    color,
                    point: points[0],
                });
            }
        }
    }
    _toSVG() {
        const pointGroups = this._data;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const minX = 0;
        const minY = 0;
        const maxX = this.canvas.width / ratio;
        const maxY = this.canvas.height / ratio;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', this.canvas.width.toString());
        svg.setAttribute('height', this.canvas.height.toString());
        this._fromData(pointGroups, ({ color, curve }) => {
            const path = document.createElement('path');
            if (!isNaN(curve.control1.x) &&
                !isNaN(curve.control1.y) &&
                !isNaN(curve.control2.x) &&
                !isNaN(curve.control2.y)) {
                const attr = `M ${curve.startPoint.x.toFixed(3)},${curve.startPoint.y.toFixed(3)} `
                    + `C ${curve.control1.x.toFixed(3)},${curve.control1.y.toFixed(3)} `
                    + `${curve.control2.x.toFixed(3)},${curve.control2.y.toFixed(3)} `
                    + `${curve.endPoint.x.toFixed(3)},${curve.endPoint.y.toFixed(3)}`;
                path.setAttribute('d', attr);
                path.setAttribute('stroke-width', (curve.endWidth * 2.25).toFixed(3));
                path.setAttribute('stroke', color);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                svg.appendChild(path);
            }
        }, ({ color, point }) => {
            const circle = document.createElement('circle');
            const dotSize = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;
            circle.setAttribute('r', dotSize.toString());
            circle.setAttribute('cx', point.x.toString());
            circle.setAttribute('cy', point.y.toString());
            circle.setAttribute('fill', color);
            svg.appendChild(circle);
        });
        const prefix = 'data:image/svg+xml;base64,';
        const header = '<svg'
            + ' xmlns="http://www.w3.org/2000/svg"'
            + ' xmlns:xlink="http://www.w3.org/1999/xlink"'
            + ` viewBox="${minX} ${minY} ${maxX} ${maxY}"`
            + ` width="${maxX}"`
            + ` height="${maxY}"`
            + '>';
        let body = svg.innerHTML;
        if (body === undefined) {
            const dummy = document.createElement('dummy');
            const nodes = svg.childNodes;
            dummy.innerHTML = '';
            for (let i = 0; i < nodes.length; i += 1) {
                dummy.appendChild(nodes[i].cloneNode(true));
            }
            body = dummy.innerHTML;
        }
        const footer = '</svg>';
        const data = header + body + footer;
        return prefix + btoa(data);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (SignaturePad);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ3JlYXRlU2lnbmF0dXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaWduYXR1cmVfcGFkL2Rpc3Qvc2lnbmF0dXJlX3BhZC5tLmpzIl0sIm5hbWVzIjpbIkxJTkVTIiwiVlNQQUNFIiwiTElORV9tYXgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJpbml0Iiwic2lnbmF0dXJlUGFkIiwiZG9jIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJhZGRfc2lnbmF0dXJlIiwiZ2VuZXJhdGVfZG9jdW1lbnQiLCJ0ZXh0IiwidmFsdWUiLCJhZGRfdGV4dCIsImNhbnZhc19pZCIsImNhbnZhcyIsIlNpZ25hdHVyZVBhZCIsIlBERkRvY3VtZW50IiwiY29uc29sZSIsImxvZyIsImVuZCIsImltYWdlIiwiZm9ybWF0IiwidG9EYXRhVVJMIiwiYWRkSW1hZ2UiLCJsaW5lcyIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJzbGljZSIsImxpbmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixF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OEJBQThCO0FBQ2pHLDJCQUEyQiw0QkFBNEIsR0FBRyw0QkFBNEI7QUFDdEYseUJBQXlCLDRCQUE0QixHQUFHLDRCQUE0QjtBQUNwRix5QkFBeUIsNEJBQTRCLEdBQUcsNEJBQTRCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQ3hELHlCQUF5QixLQUFLO0FBQzlCLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEVBQUMiLCJmaWxlIjoic2lnbmF0dXJlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vQ3JlYXRlU2lnbmF0dXJlLmpzXCIpO1xuIiwiLy8gaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcbmltcG9ydCBTaWduYXR1cmVQYWQgZnJvbSAnc2lnbmF0dXJlX3BhZCc7XG5cbmxldCBMSU5FUyA9IDAsIFZTUEFDRSA9IDU7Ly81bW1cbmxldCBMSU5FX21heCA9IDY4O1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBsZXQgW3NpZ25hdHVyZVBhZCwgZG9jXSA9IGluaXQoJ3NpZ25hdHVyZV9jYW52YXMnKTtcblxuICAgIC8vU2F2ZSBTaWduYXR1cmUgQnV0dG9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9zaWduYXR1cmVfYWRkJykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgYWRkX3NpZ25hdHVyZShkb2MsIHNpZ25hdHVyZVBhZCk7XG4gICAgfTtcbiAgICAvL1NhdmUgU2lnbmF0dXJlIEJ1dHRvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcGRmX2dlbmVyYXRlJykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgLy8gc2F2ZV9zaWduYXR1cmUoc2lnbmF0dXJlUGFkKVxuICAgICAgICBnZW5lcmF0ZV9kb2N1bWVudChkb2MpO1xuICAgIH07XG4gICAgLy9BZGQgVGV4dCBCdXR0b25cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2FkZF90ZXh0Jykub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF90ZXh0JykudmFsdWU7XG4gICAgICAgIGFkZF90ZXh0KGRvYywgdGV4dCk7XG4gICAgfVxufVxuXG5jb25zdCBpbml0ID0gKGNhbnZhc19pZCkgPT4ge1xuICAgIC8vQ0FOVkFTIFNJR05BVFVSRSBTRVRVUFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc19pZCk7XG4gICAgbGV0IHNpZ25hdHVyZVBhZCA9IG5ldyBTaWduYXR1cmVQYWQoY2FudmFzKTtcbiAgICBjb25zdCBkb2MgPSBuZXcgUERGRG9jdW1lbnQ7XG4gICAgY29uc29sZS5sb2coJyVjU3VjY2Vzc2Z1bGx5IGluaXRpYWxpc2VkIHNpZ25hdHVyZSBhbmQgcGRmIG9iamVjdHMnLCAnY29sb3I6Z3JlZW4nKTtcbiAgICByZXR1cm4gW3NpZ25hdHVyZVBhZCwgZG9jXTtcbn1cblxuY29uc3QgZ2VuZXJhdGVfZG9jdW1lbnQgPSAoZG9jKSA9PiB7XG4gICAgZG9jLmVuZCgpXG59XG5cbmNvbnN0IGFkZF9zaWduYXR1cmUgPSAoZG9jLCBzaWduYXR1cmVQYWQsIGltYWdlID0gbnVsbCwgZm9ybWF0ID0gbnVsbCkgPT4ge1xuICAgIGlmIChpbWFnZSA9PSBudWxsKSB7XG4gICAgICAgIGltYWdlID0gc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xuICAgICAgICBmb3JtYXQgPSAnUE5HJztcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UuY2xpZW50V2lkdGgpXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UuY2xpZW50SGVpZ2h0KSAgICBcbiAgICBkb2MuYWRkSW1hZ2UoaW1hZ2UsIGZvcm1hdCwgMCwgKDErTElORVMpKlZTUEFDRSk7XG4gICAgTElORVMgKz0gMSArIDE1MC8oMy43Nzk1Mjc1NTkxKlZTUEFDRSkgIC8vVE9ETyAxNTAgaXMgbnVtYmVyIG9mIHBpeGVscyBpbiBjYW52YXMgd2lsbCBoYXZlIHRvIGNoYW5nZVxuICAgIFxufVxuXG5jb25zdCBhZGRfdGV4dCA9IChkb2MsIHRleHQpID0+IHtcbiAgICBsZXQgbGluZXMgPSBbXTtcbiAgICBmb3IoaT0wOyBpPD10ZXh0Lmxlbmd0aDsgaT1pK0xJTkVfbWF4KVxuICAgICAgICBsaW5lcy5hcHBlbmQodGV4dC5zbGljZShpLUxJTkVfbWF4LGkpKVxuICAgIGlmIChsaW5lcy5sZW5ndGg9PTApXG4gICAgICAgIGxpbmVzLmFwcGVuZCh0ZXh0KVxuXG4gICAgZm9yKCBsaW5lIGluIGxpbmVzKXtcbiAgICAgICAgZG9jLnRleHQobGluZSwgMCwgKDErTElORVMpKlZTUEFDRSk7XG4gICAgICAgIExJTkVTKys7XG4gICAgfVxufSIsIi8qIVxuICogU2lnbmF0dXJlIFBhZCB2My4wLjAtYmV0YS4zIHwgaHR0cHM6Ly9naXRodWIuY29tL3N6aW1lay9zaWduYXR1cmVfcGFkXG4gKiAoYykgMjAxOCBTenltb24gTm93YWsgfCBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG5jbGFzcyBQb2ludCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgdGltZSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lIHx8IERhdGUubm93KCk7XG4gICAgfVxuICAgIGRpc3RhbmNlVG8oc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLnggLSBzdGFydC54LCAyKSArIE1hdGgucG93KHRoaXMueSAtIHN0YXJ0LnksIDIpKTtcbiAgICB9XG4gICAgZXF1YWxzKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IG90aGVyLnggJiYgdGhpcy55ID09PSBvdGhlci55ICYmIHRoaXMudGltZSA9PT0gb3RoZXIudGltZTtcbiAgICB9XG4gICAgdmVsb2NpdHlGcm9tKHN0YXJ0KSB7XG4gICAgICAgIHJldHVybiAodGhpcy50aW1lICE9PSBzdGFydC50aW1lKSA/IHRoaXMuZGlzdGFuY2VUbyhzdGFydCkgLyAodGhpcy50aW1lIC0gc3RhcnQudGltZSkgOiAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmV6aWVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBjb250cm9sMiwgY29udHJvbDEsIGVuZFBvaW50LCBzdGFydFdpZHRoLCBlbmRXaWR0aCkge1xuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50O1xuICAgICAgICB0aGlzLmNvbnRyb2wyID0gY29udHJvbDI7XG4gICAgICAgIHRoaXMuY29udHJvbDEgPSBjb250cm9sMTtcbiAgICAgICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50O1xuICAgICAgICB0aGlzLnN0YXJ0V2lkdGggPSBzdGFydFdpZHRoO1xuICAgICAgICB0aGlzLmVuZFdpZHRoID0gZW5kV2lkdGg7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tUG9pbnRzKHBvaW50cywgd2lkdGhzKSB7XG4gICAgICAgIGNvbnN0IGMyID0gdGhpcy5jYWxjdWxhdGVDb250cm9sUG9pbnRzKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0pLmMyO1xuICAgICAgICBjb25zdCBjMyA9IHRoaXMuY2FsY3VsYXRlQ29udHJvbFBvaW50cyhwb2ludHNbMV0sIHBvaW50c1syXSwgcG9pbnRzWzNdKS5jMTtcbiAgICAgICAgcmV0dXJuIG5ldyBCZXppZXIocG9pbnRzWzFdLCBjMiwgYzMsIHBvaW50c1syXSwgd2lkdGhzLnN0YXJ0LCB3aWR0aHMuZW5kKTtcbiAgICB9XG4gICAgc3RhdGljIGNhbGN1bGF0ZUNvbnRyb2xQb2ludHMoczEsIHMyLCBzMykge1xuICAgICAgICBjb25zdCBkeDEgPSBzMS54IC0gczIueDtcbiAgICAgICAgY29uc3QgZHkxID0gczEueSAtIHMyLnk7XG4gICAgICAgIGNvbnN0IGR4MiA9IHMyLnggLSBzMy54O1xuICAgICAgICBjb25zdCBkeTIgPSBzMi55IC0gczMueTtcbiAgICAgICAgY29uc3QgbTEgPSB7IHg6IChzMS54ICsgczIueCkgLyAyLjAsIHk6IChzMS55ICsgczIueSkgLyAyLjAgfTtcbiAgICAgICAgY29uc3QgbTIgPSB7IHg6IChzMi54ICsgczMueCkgLyAyLjAsIHk6IChzMi55ICsgczMueSkgLyAyLjAgfTtcbiAgICAgICAgY29uc3QgbDEgPSBNYXRoLnNxcnQoKGR4MSAqIGR4MSkgKyAoZHkxICogZHkxKSk7XG4gICAgICAgIGNvbnN0IGwyID0gTWF0aC5zcXJ0KChkeDIgKiBkeDIpICsgKGR5MiAqIGR5MikpO1xuICAgICAgICBjb25zdCBkeG0gPSAobTEueCAtIG0yLngpO1xuICAgICAgICBjb25zdCBkeW0gPSAobTEueSAtIG0yLnkpO1xuICAgICAgICBjb25zdCBrID0gbDIgLyAobDEgKyBsMik7XG4gICAgICAgIGNvbnN0IGNtID0geyB4OiBtMi54ICsgKGR4bSAqIGspLCB5OiBtMi55ICsgKGR5bSAqIGspIH07XG4gICAgICAgIGNvbnN0IHR4ID0gczIueCAtIGNtLng7XG4gICAgICAgIGNvbnN0IHR5ID0gczIueSAtIGNtLnk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjMTogbmV3IFBvaW50KG0xLnggKyB0eCwgbTEueSArIHR5KSxcbiAgICAgICAgICAgIGMyOiBuZXcgUG9pbnQobTIueCArIHR4LCBtMi55ICsgdHkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gMTA7XG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBsZXQgcHg7XG4gICAgICAgIGxldCBweTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RlcHM7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IGkgLyBzdGVwcztcbiAgICAgICAgICAgIGNvbnN0IGN4ID0gdGhpcy5wb2ludCh0LCB0aGlzLnN0YXJ0UG9pbnQueCwgdGhpcy5jb250cm9sMS54LCB0aGlzLmNvbnRyb2wyLngsIHRoaXMuZW5kUG9pbnQueCk7XG4gICAgICAgICAgICBjb25zdCBjeSA9IHRoaXMucG9pbnQodCwgdGhpcy5zdGFydFBvaW50LnksIHRoaXMuY29udHJvbDEueSwgdGhpcy5jb250cm9sMi55LCB0aGlzLmVuZFBvaW50LnkpO1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeGRpZmYgPSBjeCAtIHB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHlkaWZmID0gY3kgLSBweTtcbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gTWF0aC5zcXJ0KCh4ZGlmZiAqIHhkaWZmKSArICh5ZGlmZiAqIHlkaWZmKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBweCA9IGN4O1xuICAgICAgICAgICAgcHkgPSBjeTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgICBwb2ludCh0LCBzdGFydCwgYzEsIGMyLCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIChzdGFydCAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSAqICgxLjAgLSB0KSlcbiAgICAgICAgICAgICsgKDMuMCAqIGMxICogKDEuMCAtIHQpICogKDEuMCAtIHQpICogdClcbiAgICAgICAgICAgICsgKDMuMCAqIGMyICogKDEuMCAtIHQpICogdCAqIHQpXG4gICAgICAgICAgICArIChlbmQgKiB0ICogdCAqIHQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQgPSAyNTApIHtcbiAgICBsZXQgcHJldmlvdXMgPSAwO1xuICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBzdG9yZWRDb250ZXh0O1xuICAgIGxldCBzdG9yZWRBcmdzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgICBwcmV2aW91cyA9IERhdGUubm93KCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICByZXN1bHQgPSBmbi5hcHBseShzdG9yZWRDb250ZXh0LCBzdG9yZWRBcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgICBzdG9yZWRDb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIHN0b3JlZEFyZ3MgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgICBzdG9yZWRDb250ZXh0ID0gdGhpcztcbiAgICAgICAgc3RvcmVkQXJncyA9IGFyZ3M7XG4gICAgICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkoc3RvcmVkQ29udGV4dCwgc3RvcmVkQXJncyk7XG4gICAgICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBzdG9yZWRDb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdG9yZWRBcmdzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5cbmNsYXNzIFNpZ25hdHVyZVBhZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlRG93biA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VCdXR0b25Eb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJva2VCZWdpbihldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21vdXNlQnV0dG9uRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cm9rZU1vdmVVcGRhdGUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZVVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEgJiYgdGhpcy5fbW91c2VCdXR0b25Eb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VCdXR0b25Eb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Ryb2tlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlVG91Y2hTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Ryb2tlQmVnaW4odG91Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYW5kbGVUb3VjaE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG4gICAgICAgICAgICB0aGlzLl9zdHJva2VNb3ZlVXBkYXRlKHRvdWNoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlVG91Y2hFbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdhc0NhbnZhc1RvdWNoZWQgPSBldmVudC50YXJnZXQgPT09IHRoaXMuY2FudmFzO1xuICAgICAgICAgICAgaWYgKHdhc0NhbnZhc1RvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Ryb2tlRW5kKHRvdWNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eUZpbHRlcldlaWdodCA9IG9wdGlvbnMudmVsb2NpdHlGaWx0ZXJXZWlnaHQgfHwgMC43O1xuICAgICAgICB0aGlzLm1pbldpZHRoID0gb3B0aW9ucy5taW5XaWR0aCB8fCAwLjU7XG4gICAgICAgIHRoaXMubWF4V2lkdGggPSBvcHRpb25zLm1heFdpZHRoIHx8IDIuNTtcbiAgICAgICAgdGhpcy50aHJvdHRsZSA9ICgndGhyb3R0bGUnIGluIG9wdGlvbnMgPyBvcHRpb25zLnRocm90dGxlIDogMTYpO1xuICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gKCdtaW5EaXN0YW5jZScgaW4gb3B0aW9ucyA/IG9wdGlvbnMubWluRGlzdGFuY2UgOiA1KTtcbiAgICAgICAgaWYgKHRoaXMudGhyb3R0bGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cm9rZU1vdmVVcGRhdGUgPSB0aHJvdHRsZShTaWduYXR1cmVQYWQucHJvdG90eXBlLl9zdHJva2VVcGRhdGUsIHRoaXMudGhyb3R0bGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3Ryb2tlTW92ZVVwZGF0ZSA9IFNpZ25hdHVyZVBhZC5wcm90b3R5cGUuX3N0cm9rZVVwZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvdFNpemUgPSBvcHRpb25zLmRvdFNpemUgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm1pbldpZHRoICsgdGhpcy5tYXhXaWR0aCkgLyAyO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBlbkNvbG9yID0gb3B0aW9ucy5wZW5Db2xvciB8fCAnYmxhY2snO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8ICdyZ2JhKDAsMCwwLDApJztcbiAgICAgICAgdGhpcy5vbkJlZ2luID0gb3B0aW9ucy5vbkJlZ2luO1xuICAgICAgICB0aGlzLm9uRW5kID0gb3B0aW9ucy5vbkVuZDtcbiAgICAgICAgdGhpcy5fY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5vbigpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fY3R4O1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgIHRoaXMuX2lzRW1wdHkgPSB0cnVlO1xuICAgIH1cbiAgICBmcm9tRGF0YVVSTChkYXRhVXJsLCBvcHRpb25zID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gb3B0aW9ucy5yYXRpbyB8fCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgKHRoaXMuY2FudmFzLndpZHRoIC8gcmF0aW8pO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAodGhpcy5jYW52YXMuaGVpZ2h0IC8gcmF0aW8pO1xuICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gZGF0YVVybDtcbiAgICAgICAgdGhpcy5faXNFbXB0eSA9IGZhbHNlO1xuICAgIH1cbiAgICB0b0RhdGFVUkwodHlwZSA9ICdpbWFnZS9wbmcnLCBlbmNvZGVyT3B0aW9ucykge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL3N2Zyt4bWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90b1NWRygpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMudG9EYXRhVVJMKHR5cGUsIGVuY29kZXJPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLm1zVG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVQb2ludGVyRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZUV2ZW50cygpO1xuICAgICAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRvdWNoRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2ZmKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3VjaEFjdGlvbiA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLl9oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuX2hhbmRsZU1vdXNlVXApO1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5faGFuZGxlTW91c2VVcCk7XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9oYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVUb3VjaEVuZCk7XG4gICAgfVxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VtcHR5O1xuICAgIH1cbiAgICBmcm9tRGF0YShwb2ludEdyb3Vwcykge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2Zyb21EYXRhKHBvaW50R3JvdXBzLCAoeyBjb2xvciwgY3VydmUgfSkgPT4gdGhpcy5fZHJhd0N1cnZlKHsgY29sb3IsIGN1cnZlIH0pLCAoeyBjb2xvciwgcG9pbnQgfSkgPT4gdGhpcy5fZHJhd0RvdCh7IGNvbG9yLCBwb2ludCB9KSk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBwb2ludEdyb3VwcztcbiAgICB9XG4gICAgdG9EYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gICAgX3N0cm9rZUJlZ2luKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld1BvaW50R3JvdXAgPSB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5wZW5Db2xvcixcbiAgICAgICAgICAgIHBvaW50czogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2RhdGEucHVzaChuZXdQb2ludEdyb3VwKTtcbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgdGhpcy5fc3Ryb2tlVXBkYXRlKGV2ZW50KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uQmVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub25CZWdpbihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3N0cm9rZVVwZGF0ZShldmVudCkge1xuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5fY3JlYXRlUG9pbnQoeCwgeSk7XG4gICAgICAgIGNvbnN0IGxhc3RQb2ludEdyb3VwID0gdGhpcy5fZGF0YVt0aGlzLl9kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBsYXN0UG9pbnRzID0gbGFzdFBvaW50R3JvdXAucG9pbnRzO1xuICAgICAgICBjb25zdCBsYXN0UG9pbnQgPSBsYXN0UG9pbnRzLmxlbmd0aCA+IDAgJiYgbGFzdFBvaW50c1tsYXN0UG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBpc0xhc3RQb2ludFRvb0Nsb3NlID0gbGFzdFBvaW50ID8gcG9pbnQuZGlzdGFuY2VUbyhsYXN0UG9pbnQpIDw9IHRoaXMubWluRGlzdGFuY2UgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBsYXN0UG9pbnRHcm91cC5jb2xvcjtcbiAgICAgICAgaWYgKCFsYXN0UG9pbnQgfHwgIShsYXN0UG9pbnQgJiYgaXNMYXN0UG9pbnRUb29DbG9zZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnZlID0gdGhpcy5fYWRkUG9pbnQocG9pbnQpO1xuICAgICAgICAgICAgaWYgKCFsYXN0UG9pbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3RG90KHsgY29sb3IsIHBvaW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VydmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3Q3VydmUoeyBjb2xvciwgY3VydmUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0UG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpbWU6IHBvaW50LnRpbWUsXG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3N0cm9rZUVuZChldmVudCkge1xuICAgICAgICB0aGlzLl9zdHJva2VVcGRhdGUoZXZlbnQpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub25FbmQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9oYW5kbGVQb2ludGVyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLl9tb3VzZUJ1dHRvbkRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLl9oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuX2hhbmRsZU1vdXNlVXApO1xuICAgIH1cbiAgICBfaGFuZGxlTW91c2VFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuX21vdXNlQnV0dG9uRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5faGFuZGxlTW91c2VVcCk7XG4gICAgfVxuICAgIF9oYW5kbGVUb3VjaEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZVRvdWNoRW5kKTtcbiAgICB9XG4gICAgX3Jlc2V0KCkge1xuICAgICAgICB0aGlzLl9sYXN0UG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuX2xhc3RWZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuX2xhc3RXaWR0aCA9ICh0aGlzLm1pbldpZHRoICsgdGhpcy5tYXhXaWR0aCkgLyAyO1xuICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gdGhpcy5wZW5Db2xvcjtcbiAgICB9XG4gICAgX2NyZWF0ZVBvaW50KHgsIHkpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHggLSByZWN0LmxlZnQsIHkgLSByZWN0LnRvcCwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBfYWRkUG9pbnQocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyBfbGFzdFBvaW50cyB9ID0gdGhpcztcbiAgICAgICAgX2xhc3RQb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgIGlmIChfbGFzdFBvaW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAoX2xhc3RQb2ludHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgX2xhc3RQb2ludHMudW5zaGlmdChfbGFzdFBvaW50c1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3aWR0aHMgPSB0aGlzLl9jYWxjdWxhdGVDdXJ2ZVdpZHRocyhfbGFzdFBvaW50c1sxXSwgX2xhc3RQb2ludHNbMl0pO1xuICAgICAgICAgICAgY29uc3QgY3VydmUgPSBCZXppZXIuZnJvbVBvaW50cyhfbGFzdFBvaW50cywgd2lkdGhzKTtcbiAgICAgICAgICAgIF9sYXN0UG9pbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gY3VydmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIF9jYWxjdWxhdGVDdXJ2ZVdpZHRocyhzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9ICh0aGlzLnZlbG9jaXR5RmlsdGVyV2VpZ2h0ICogZW5kUG9pbnQudmVsb2NpdHlGcm9tKHN0YXJ0UG9pbnQpKVxuICAgICAgICAgICAgKyAoKDEgLSB0aGlzLnZlbG9jaXR5RmlsdGVyV2VpZ2h0KSAqIHRoaXMuX2xhc3RWZWxvY2l0eSk7XG4gICAgICAgIGNvbnN0IG5ld1dpZHRoID0gdGhpcy5fc3Ryb2tlV2lkdGgodmVsb2NpdHkpO1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB7XG4gICAgICAgICAgICBlbmQ6IG5ld1dpZHRoLFxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMuX2xhc3RXaWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbGFzdFZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIHRoaXMuX2xhc3RXaWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICByZXR1cm4gd2lkdGhzO1xuICAgIH1cbiAgICBfc3Ryb2tlV2lkdGgodmVsb2NpdHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMubWF4V2lkdGggLyAodmVsb2NpdHkgKyAxKSwgdGhpcy5taW5XaWR0aCk7XG4gICAgfVxuICAgIF9kcmF3Q3VydmVTZWdtZW50KHgsIHksIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2N0eDtcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgY3R4LmFyYyh4LCB5LCB3aWR0aCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5faXNFbXB0eSA9IGZhbHNlO1xuICAgIH1cbiAgICBfZHJhd0N1cnZlKHsgY29sb3IsIGN1cnZlIH0pIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fY3R4O1xuICAgICAgICBjb25zdCB3aWR0aERlbHRhID0gY3VydmUuZW5kV2lkdGggLSBjdXJ2ZS5zdGFydFdpZHRoO1xuICAgICAgICBjb25zdCBkcmF3U3RlcHMgPSBNYXRoLmZsb29yKGN1cnZlLmxlbmd0aCgpKSAqIDI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdTdGVwczsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAvIGRyYXdTdGVwcztcbiAgICAgICAgICAgIGNvbnN0IHR0ID0gdCAqIHQ7XG4gICAgICAgICAgICBjb25zdCB0dHQgPSB0dCAqIHQ7XG4gICAgICAgICAgICBjb25zdCB1ID0gMSAtIHQ7XG4gICAgICAgICAgICBjb25zdCB1dSA9IHUgKiB1O1xuICAgICAgICAgICAgY29uc3QgdXV1ID0gdXUgKiB1O1xuICAgICAgICAgICAgbGV0IHggPSB1dXUgKiBjdXJ2ZS5zdGFydFBvaW50Lng7XG4gICAgICAgICAgICB4ICs9IDMgKiB1dSAqIHQgKiBjdXJ2ZS5jb250cm9sMS54O1xuICAgICAgICAgICAgeCArPSAzICogdSAqIHR0ICogY3VydmUuY29udHJvbDIueDtcbiAgICAgICAgICAgIHggKz0gdHR0ICogY3VydmUuZW5kUG9pbnQueDtcbiAgICAgICAgICAgIGxldCB5ID0gdXV1ICogY3VydmUuc3RhcnRQb2ludC55O1xuICAgICAgICAgICAgeSArPSAzICogdXUgKiB0ICogY3VydmUuY29udHJvbDEueTtcbiAgICAgICAgICAgIHkgKz0gMyAqIHUgKiB0dCAqIGN1cnZlLmNvbnRyb2wyLnk7XG4gICAgICAgICAgICB5ICs9IHR0dCAqIGN1cnZlLmVuZFBvaW50Lnk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGN1cnZlLnN0YXJ0V2lkdGggKyAodHR0ICogd2lkdGhEZWx0YSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3Q3VydmVTZWdtZW50KHgsIHksIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIF9kcmF3RG90KHsgY29sb3IsIHBvaW50IH0pIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fY3R4O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHR5cGVvZiB0aGlzLmRvdFNpemUgPT09ICdmdW5jdGlvbicgPyB0aGlzLmRvdFNpemUoKSA6IHRoaXMuZG90U2l6ZTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLl9kcmF3Q3VydmVTZWdtZW50KHBvaW50LngsIHBvaW50LnksIHdpZHRoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIF9mcm9tRGF0YShwb2ludEdyb3VwcywgZHJhd0N1cnZlLCBkcmF3RG90KSB7XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgcG9pbnRHcm91cHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IsIHBvaW50cyB9ID0gZ3JvdXA7XG4gICAgICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNpY1BvaW50ID0gcG9pbnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludChiYXNpY1BvaW50LngsIGJhc2ljUG9pbnQueSwgYmFzaWNQb2ludC50aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5Db2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZSA9IHRoaXMuX2FkZFBvaW50KHBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3Q3VydmUoeyBjb2xvciwgY3VydmUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgICAgICAgICAgIGRyYXdEb3Qoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHBvaW50c1swXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfdG9TVkcoKSB7XG4gICAgICAgIGNvbnN0IHBvaW50R3JvdXBzID0gdGhpcy5fZGF0YTtcbiAgICAgICAgY29uc3QgcmF0aW8gPSBNYXRoLm1heCh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAxKTtcbiAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgIGNvbnN0IG1pblkgPSAwO1xuICAgICAgICBjb25zdCBtYXhYID0gdGhpcy5jYW52YXMud2lkdGggLyByYXRpbztcbiAgICAgICAgY29uc3QgbWF4WSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIHJhdGlvO1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuY2FudmFzLndpZHRoLnRvU3RyaW5nKCkpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmNhbnZhcy5oZWlnaHQudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuX2Zyb21EYXRhKHBvaW50R3JvdXBzLCAoeyBjb2xvciwgY3VydmUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnKTtcbiAgICAgICAgICAgIGlmICghaXNOYU4oY3VydmUuY29udHJvbDEueCkgJiZcbiAgICAgICAgICAgICAgICAhaXNOYU4oY3VydmUuY29udHJvbDEueSkgJiZcbiAgICAgICAgICAgICAgICAhaXNOYU4oY3VydmUuY29udHJvbDIueCkgJiZcbiAgICAgICAgICAgICAgICAhaXNOYU4oY3VydmUuY29udHJvbDIueSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gYE0gJHtjdXJ2ZS5zdGFydFBvaW50LngudG9GaXhlZCgzKX0sJHtjdXJ2ZS5zdGFydFBvaW50LnkudG9GaXhlZCgzKX0gYFxuICAgICAgICAgICAgICAgICAgICArIGBDICR7Y3VydmUuY29udHJvbDEueC50b0ZpeGVkKDMpfSwke2N1cnZlLmNvbnRyb2wxLnkudG9GaXhlZCgzKX0gYFxuICAgICAgICAgICAgICAgICAgICArIGAke2N1cnZlLmNvbnRyb2wyLngudG9GaXhlZCgzKX0sJHtjdXJ2ZS5jb250cm9sMi55LnRvRml4ZWQoMyl9IGBcbiAgICAgICAgICAgICAgICAgICAgKyBgJHtjdXJ2ZS5lbmRQb2ludC54LnRvRml4ZWQoMyl9LCR7Y3VydmUuZW5kUG9pbnQueS50b0ZpeGVkKDMpfWA7XG4gICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBhdHRyKTtcbiAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgKGN1cnZlLmVuZFdpZHRoICogMi4yNSkudG9GaXhlZCgzKSk7XG4gICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIGNvbG9yKTtcbiAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XG4gICAgICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoeyBjb2xvciwgcG9pbnQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2lyY2xlJyk7XG4gICAgICAgICAgICBjb25zdCBkb3RTaXplID0gdHlwZW9mIHRoaXMuZG90U2l6ZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuZG90U2l6ZSgpIDogdGhpcy5kb3RTaXplO1xuICAgICAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgncicsIGRvdFNpemUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeCcsIHBvaW50LngudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeScsIHBvaW50LnkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdmaWxsJywgY29sb3IpO1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcmVmaXggPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSAnPHN2ZydcbiAgICAgICAgICAgICsgJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCInXG4gICAgICAgICAgICArICcgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCInXG4gICAgICAgICAgICArIGAgdmlld0JveD1cIiR7bWluWH0gJHttaW5ZfSAke21heFh9ICR7bWF4WX1cImBcbiAgICAgICAgICAgICsgYCB3aWR0aD1cIiR7bWF4WH1cImBcbiAgICAgICAgICAgICsgYCBoZWlnaHQ9XCIke21heFl9XCJgXG4gICAgICAgICAgICArICc+JztcbiAgICAgICAgbGV0IGJvZHkgPSBzdmcuaW5uZXJIVE1MO1xuICAgICAgICBpZiAoYm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2R1bW15Jyk7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IHN2Zy5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgZHVtbXkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZHVtbXkuYXBwZW5kQ2hpbGQobm9kZXNbaV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkgPSBkdW1teS5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9vdGVyID0gJzwvc3ZnPic7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBoZWFkZXIgKyBib2R5ICsgZm9vdGVyO1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgYnRvYShkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hdHVyZVBhZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=