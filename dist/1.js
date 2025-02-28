(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '+QRC': function (t, e, n) {
      'use strict';
      var r = n('E9nw'),
        o = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
        i = 'Copy to clipboard: #{key}, Enter';
      function s(t) {
        var e =
          (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
        return t.replace(/#{\s*key\s*}/g, e);
      }
      function a(t, e) {
        var n,
          a,
          c,
          u,
          l,
          h,
          d = !1;
        e || (e = {}), (n = e.debug || !1);
        try {
          (c = r()),
            (u = document.createRange()),
            (l = document.getSelection()),
            (h = document.createElement('span')),
            (h.textContent = t),
            (h.ariaHidden = 'true'),
            (h.style.all = 'unset'),
            (h.style.position = 'fixed'),
            (h.style.top = 0),
            (h.style.clip = 'rect(0, 0, 0, 0)'),
            (h.style.whiteSpace = 'pre'),
            (h.style.webkitUserSelect = 'text'),
            (h.style.MozUserSelect = 'text'),
            (h.style.msUserSelect = 'text'),
            (h.style.userSelect = 'text'),
            h.addEventListener('copy', function (r) {
              if ((r.stopPropagation(), e.format))
                if (
                  (r.preventDefault(), 'undefined' === typeof r.clipboardData)
                ) {
                  n && console.warn('unable to use e.clipboardData'),
                    n && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData();
                  var i = o[e.format] || o['default'];
                  window.clipboardData.setData(i, t);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(e.format, t);
              e.onCopy && (r.preventDefault(), e.onCopy(r.clipboardData));
            }),
            document.body.appendChild(h),
            u.selectNodeContents(h),
            l.addRange(u);
          var f = document.execCommand('copy');
          if (!f) throw new Error('copy command was unsuccessful');
          d = !0;
        } catch (p) {
          n && console.error('unable to copy using execCommand: ', p),
            n && console.warn('trying IE specific stuff');
          try {
            window.clipboardData.setData(e.format || 'text', t),
              e.onCopy && e.onCopy(window.clipboardData),
              (d = !0);
          } catch (p) {
            n && console.error('unable to copy using clipboardData: ', p),
              n && console.error('falling back to prompt'),
              (a = s('message' in e ? e.message : i)),
              window.prompt(a, t);
          }
        } finally {
          l &&
            ('function' == typeof l.removeRange
              ? l.removeRange(u)
              : l.removeAllRanges()),
            h && document.body.removeChild(h),
            c();
        }
        return d;
      }
      t.exports = a;
    },
    '/GNo': function (t, e, n) {
      'use strict';
      (function (t) {
        function n() {
          return (
            (null === t || void 0 === t ? void 0 : t.crypto) ||
            (null === t || void 0 === t ? void 0 : t.msCrypto) ||
            {}
          );
        }
        function r() {
          const t = n();
          return t.subtle || t.webkitSubtle;
        }
        function o() {
          return !!n() && !!r();
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isBrowserCryptoAvailable =
            e.getSubtleCrypto =
            e.getBrowerCrypto =
              void 0),
          (e.getBrowerCrypto = n),
          (e.getSubtleCrypto = r),
          (e.isBrowserCryptoAvailable = o);
      }.call(this, n('IyRk')));
    },
    '/KFh': function (t, e, n) {
      'use strict';
      var r = n('zy0H');
      n.o(r, 'IJsonRpcProvider') &&
        n.d(e, 'IJsonRpcProvider', function () {
          return r['IJsonRpcProvider'];
        }),
        n.o(r, 'isHttpUrl') &&
          n.d(e, 'isHttpUrl', function () {
            return r['isHttpUrl'];
          }),
        n.o(r, 'isJsonRpcError') &&
          n.d(e, 'isJsonRpcError', function () {
            return r['isJsonRpcError'];
          }),
        n.o(r, 'isJsonRpcResponse') &&
          n.d(e, 'isJsonRpcResponse', function () {
            return r['isJsonRpcResponse'];
          });
    },
    '0FX9': function (t, e, n) {
      var r = n('Z92M'),
        o = n('qmMu'),
        i = n('QUaw'),
        s = n('QAZZ');
      function a(t, e, n, i, s) {
        var a = [].slice.call(arguments, 1),
          c = a.length,
          u = 'function' === typeof a[c - 1];
        if (!u && !r()) throw new Error('Callback required as last argument');
        if (!u) {
          if (c < 1) throw new Error('Too few arguments provided');
          return (
            1 === c
              ? ((n = e), (e = i = void 0))
              : 2 !== c || e.getContext || ((i = n), (n = e), (e = void 0)),
            new Promise(function (r, s) {
              try {
                var a = o.create(n, i);
                r(t(a, e, i));
              } catch (c) {
                s(c);
              }
            })
          );
        }
        if (c < 2) throw new Error('Too few arguments provided');
        2 === c
          ? ((s = n), (n = e), (e = i = void 0))
          : 3 === c &&
            (e.getContext && 'undefined' === typeof s
              ? ((s = i), (i = void 0))
              : ((s = i), (i = n), (n = e), (e = void 0)));
        try {
          var l = o.create(n, i);
          s(null, t(l, e, i));
        } catch (h) {
          s(h);
        }
      }
      (e.create = o.create),
        (e.toCanvas = a.bind(null, i.render)),
        (e.toDataURL = a.bind(null, i.renderToDataURL)),
        (e.toString = a.bind(null, function (t, e, n) {
          return s.render(t, n);
        }));
    },
    '0RTg': function (t, e, n) {
      (function (t) {
        (function (t, e) {
          'use strict';
          function r(t, e) {
            if (!t) throw new Error(e || 'Assertion failed');
          }
          function o(t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }
          function i(t, e, n) {
            if (i.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (('le' !== e && 'be' !== e) || ((n = e), (e = 10)),
                this._init(t || 0, e || 10, n || 'be'));
          }
          var s;
          'object' === typeof t ? (t.exports = i) : (e.BN = i),
            (i.BN = i),
            (i.wordSize = 26);
          try {
            s = n(14).Buffer;
          } catch (R) {}
          function a(t, e, n) {
            for (var r = 0, o = Math.min(t.length, n), i = e; i < o; i++) {
              var s = t.charCodeAt(i) - 48;
              (r <<= 4),
                (r |=
                  s >= 49 && s <= 54
                    ? s - 49 + 10
                    : s >= 17 && s <= 22
                    ? s - 17 + 10
                    : 15 & s);
            }
            return r;
          }
          function c(t, e, n, r) {
            for (var o = 0, i = Math.min(t.length, n), s = e; s < i; s++) {
              var a = t.charCodeAt(s) - 48;
              (o *= r),
                (o += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a);
            }
            return o;
          }
          (i.isBN = function (t) {
            return (
              t instanceof i ||
              (null !== t &&
                'object' === typeof t &&
                t.constructor.wordSize === i.wordSize &&
                Array.isArray(t.words))
            );
          }),
            (i.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (i.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (i.prototype._init = function (t, e, n) {
              if ('number' === typeof t) return this._initNumber(t, e, n);
              if ('object' === typeof t) return this._initArray(t, e, n);
              'hex' === e && (e = 16),
                r(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, ''));
              var o = 0;
              '-' === t[0] && o++,
                16 === e ? this._parseHex(t, o) : this._parseBase(t, e, o),
                '-' === t[0] && (this.negative = 1),
                this.strip(),
                'le' === n && this._initArray(this.toArray(), e, n);
            }),
            (i.prototype._initNumber = function (t, e, n) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === n && this._initArray(this.toArray(), e, n);
            }),
            (i.prototype._initArray = function (t, e, n) {
              if ((r('number' === typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var o = 0; o < this.length; o++) this.words[o] = 0;
              var i,
                s,
                a = 0;
              if ('be' === n)
                for (o = t.length - 1, i = 0; o >= 0; o -= 3)
                  (s = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                    (this.words[i] |= (s << a) & 67108863),
                    (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), i++);
              else if ('le' === n)
                for (o = 0, i = 0; o < t.length; o += 3)
                  (s = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                    (this.words[i] |= (s << a) & 67108863),
                    (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), i++);
              return this.strip();
            }),
            (i.prototype._parseHex = function (t, e) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var r,
                o,
                i = 0;
              for (n = t.length - 6, r = 0; n >= e; n -= 6)
                (o = a(t, n, n + 6)),
                  (this.words[r] |= (o << i) & 67108863),
                  (this.words[r + 1] |= (o >>> (26 - i)) & 4194303),
                  (i += 24),
                  i >= 26 && ((i -= 26), r++);
              n + 6 !== e &&
                ((o = a(t, e, n + 6)),
                (this.words[r] |= (o << i) & 67108863),
                (this.words[r + 1] |= (o >>> (26 - i)) & 4194303)),
                this.strip();
            }),
            (i.prototype._parseBase = function (t, e, n) {
              (this.words = [0]), (this.length = 1);
              for (var r = 0, o = 1; o <= 67108863; o *= e) r++;
              r--, (o = (o / e) | 0);
              for (
                var i = t.length - n,
                  s = i % r,
                  a = Math.min(i, i - s) + n,
                  u = 0,
                  l = n;
                l < a;
                l += r
              )
                (u = c(t, l, l + r, e)),
                  this.imuln(o),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              if (0 !== s) {
                var h = 1;
                for (u = c(t, l, t.length, e), l = 0; l < s; l++) h *= e;
                this.imuln(h),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              }
            }),
            (i.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (i.prototype.clone = function () {
              var t = new i(null);
              return this.copy(t), t;
            }),
            (i.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (i.prototype.strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (i.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            (i.prototype.inspect = function () {
              return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
            });
          var u = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            l = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            h = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          function d(t) {
            for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
              var r = (n / 26) | 0,
                o = n % 26;
              e[n] = (t.words[r] & (1 << o)) >>> o;
            }
            return e;
          }
          function f(t, e, n) {
            n.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            (n.length = r), (r = (r - 1) | 0);
            var o = 0 | t.words[0],
              i = 0 | e.words[0],
              s = o * i,
              a = 67108863 & s,
              c = (s / 67108864) | 0;
            n.words[0] = a;
            for (var u = 1; u < r; u++) {
              for (
                var l = c >>> 26,
                  h = 67108863 & c,
                  d = Math.min(u, e.length - 1),
                  f = Math.max(0, u - t.length + 1);
                f <= d;
                f++
              ) {
                var p = (u - f) | 0;
                (o = 0 | t.words[p]),
                  (i = 0 | e.words[f]),
                  (s = o * i + h),
                  (l += (s / 67108864) | 0),
                  (h = 67108863 & s);
              }
              (n.words[u] = 0 | h), (c = 0 | l);
            }
            return 0 !== c ? (n.words[u] = 0 | c) : n.length--, n.strip();
          }
          (i.prototype.toString = function (t, e) {
            var n;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || 'hex' === t)) {
              n = '';
              for (var o = 0, i = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  c = (16777215 & ((a << o) | i)).toString(16);
                (i = (a >>> (24 - o)) & 16777215),
                  (n =
                    0 !== i || s !== this.length - 1
                      ? u[6 - c.length] + c + n
                      : c + n),
                  (o += 2),
                  o >= 26 && ((o -= 26), s--);
              }
              0 !== i && (n = i.toString(16) + n);
              while (n.length % e !== 0) n = '0' + n;
              return 0 !== this.negative && (n = '-' + n), n;
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var d = l[t],
                f = h[t];
              n = '';
              var p = this.clone();
              p.negative = 0;
              while (!p.isZero()) {
                var m = p.modn(f).toString(t);
                (p = p.idivn(f)),
                  (n = p.isZero() ? m + n : u[d - m.length] + m + n);
              }
              this.isZero() && (n = '0' + n);
              while (n.length % e !== 0) n = '0' + n;
              return 0 !== this.negative && (n = '-' + n), n;
            }
            r(!1, 'Base should be between 2 and 36');
          }),
            (i.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -t : t
              );
            }),
            (i.prototype.toJSON = function () {
              return this.toString(16);
            }),
            (i.prototype.toBuffer = function (t, e) {
              return r('undefined' !== typeof s), this.toArrayLike(s, t, e);
            }),
            (i.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }),
            (i.prototype.toArrayLike = function (t, e, n) {
              var o = this.byteLength(),
                i = n || Math.max(1, o);
              r(o <= i, 'byte array longer than desired length'),
                r(i > 0, 'Requested array length <= 0'),
                this.strip();
              var s,
                a,
                c = 'le' === e,
                u = new t(i),
                l = this.clone();
              if (c) {
                for (a = 0; !l.isZero(); a++)
                  (s = l.andln(255)), l.iushrn(8), (u[a] = s);
                for (; a < i; a++) u[a] = 0;
              } else {
                for (a = 0; a < i - o; a++) u[a] = 0;
                for (a = 0; !l.isZero(); a++)
                  (s = l.andln(255)), l.iushrn(8), (u[i - a - 1] = s);
              }
              return u;
            }),
            Math.clz32
              ? (i.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (i.prototype._countBits = function (t) {
                  var e = t,
                    n = 0;
                  return (
                    e >= 4096 && ((n += 13), (e >>>= 13)),
                    e >= 64 && ((n += 7), (e >>>= 7)),
                    e >= 8 && ((n += 4), (e >>>= 4)),
                    e >= 2 && ((n += 2), (e >>>= 2)),
                    n + e
                  );
                }),
            (i.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                n = 0;
              return (
                0 === (8191 & e) && ((n += 13), (e >>>= 13)),
                0 === (127 & e) && ((n += 7), (e >>>= 7)),
                0 === (15 & e) && ((n += 4), (e >>>= 4)),
                0 === (3 & e) && ((n += 2), (e >>>= 2)),
                0 === (1 & e) && n++,
                n
              );
            }),
            (i.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (i.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var n = this._zeroBits(this.words[e]);
                if (((t += n), 26 !== n)) break;
              }
              return t;
            }),
            (i.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (i.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (i.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (i.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (i.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (i.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (i.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this.strip();
            }),
            (i.prototype.ior = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuor(t);
            }),
            (i.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (i.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (i.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var n = 0; n < e.length; n++)
                this.words[n] = this.words[n] & t.words[n];
              return (this.length = e.length), this.strip();
            }),
            (i.prototype.iand = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuand(t);
            }),
            (i.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (i.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (i.prototype.iuxor = function (t) {
              var e, n;
              this.length > t.length
                ? ((e = this), (n = t))
                : ((e = t), (n = this));
              for (var r = 0; r < n.length; r++)
                this.words[r] = e.words[r] ^ n.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return (this.length = e.length), this.strip();
            }),
            (i.prototype.ixor = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuxor(t);
            }),
            (i.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (i.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (i.prototype.inotn = function (t) {
              r('number' === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                n = t % 26;
              this._expand(e), n > 0 && e--;
              for (var o = 0; o < e; o++)
                this.words[o] = 67108863 & ~this.words[o];
              return (
                n > 0 &&
                  (this.words[o] = ~this.words[o] & (67108863 >> (26 - n))),
                this.strip()
              );
            }),
            (i.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (i.prototype.setn = function (t, e) {
              r('number' === typeof t && t >= 0);
              var n = (t / 26) | 0,
                o = t % 26;
              return (
                this._expand(n + 1),
                (this.words[n] = e
                  ? this.words[n] | (1 << o)
                  : this.words[n] & ~(1 << o)),
                this.strip()
              );
            }),
            (i.prototype.iadd = function (t) {
              var e, n, r;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((n = this), (r = t))
                : ((n = t), (r = this));
              for (var o = 0, i = 0; i < r.length; i++)
                (e = (0 | n.words[i]) + (0 | r.words[i]) + o),
                  (this.words[i] = 67108863 & e),
                  (o = e >>> 26);
              for (; 0 !== o && i < n.length; i++)
                (e = (0 | n.words[i]) + o),
                  (this.words[i] = 67108863 & e),
                  (o = e >>> 26);
              if (((this.length = n.length), 0 !== o))
                (this.words[this.length] = o), this.length++;
              else if (n !== this)
                for (; i < n.length; i++) this.words[i] = n.words[i];
              return this;
            }),
            (i.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (i.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var n,
                r,
                o = this.cmp(t);
              if (0 === o)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              o > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
              for (var i = 0, s = 0; s < r.length; s++)
                (e = (0 | n.words[s]) - (0 | r.words[s]) + i),
                  (i = e >> 26),
                  (this.words[s] = 67108863 & e);
              for (; 0 !== i && s < n.length; s++)
                (e = (0 | n.words[s]) + i),
                  (i = e >> 26),
                  (this.words[s] = 67108863 & e);
              if (0 === i && s < n.length && n !== this)
                for (; s < n.length; s++) this.words[s] = n.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                n !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (i.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var p = function (t, e, n) {
            var r,
              o,
              i,
              s = t.words,
              a = e.words,
              c = n.words,
              u = 0,
              l = 0 | s[0],
              h = 8191 & l,
              d = l >>> 13,
              f = 0 | s[1],
              p = 8191 & f,
              m = f >>> 13,
              g = 0 | s[2],
              _ = 8191 & g,
              v = g >>> 13,
              y = 0 | s[3],
              w = 8191 & y,
              b = y >>> 13,
              M = 0 | s[4],
              x = 8191 & M,
              E = M >>> 13,
              k = 0 | s[5],
              R = 8191 & k,
              S = k >>> 13,
              C = 0 | s[6],
              O = 8191 & C,
              I = C >>> 13,
              A = 0 | s[7],
              T = 8191 & A,
              P = A >>> 13,
              N = 0 | s[8],
              j = 8191 & N,
              L = N >>> 13,
              B = 0 | s[9],
              q = 8191 & B,
              U = B >>> 13,
              D = 0 | a[0],
              J = 8191 & D,
              F = D >>> 13,
              H = 0 | a[1],
              z = 8191 & H,
              W = H >>> 13,
              Y = 0 | a[2],
              $ = 8191 & Y,
              Q = Y >>> 13,
              K = 0 | a[3],
              V = 8191 & K,
              Z = K >>> 13,
              X = 0 | a[4],
              G = 8191 & X,
              tt = X >>> 13,
              et = 0 | a[5],
              nt = 8191 & et,
              rt = et >>> 13,
              ot = 0 | a[6],
              it = 8191 & ot,
              st = ot >>> 13,
              at = 0 | a[7],
              ct = 8191 & at,
              ut = at >>> 13,
              lt = 0 | a[8],
              ht = 8191 & lt,
              dt = lt >>> 13,
              ft = 0 | a[9],
              pt = 8191 & ft,
              mt = ft >>> 13;
            (n.negative = t.negative ^ e.negative),
              (n.length = 19),
              (r = Math.imul(h, J)),
              (o = Math.imul(h, F)),
              (o = (o + Math.imul(d, J)) | 0),
              (i = Math.imul(d, F));
            var gt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (r = Math.imul(p, J)),
              (o = Math.imul(p, F)),
              (o = (o + Math.imul(m, J)) | 0),
              (i = Math.imul(m, F)),
              (r = (r + Math.imul(h, z)) | 0),
              (o = (o + Math.imul(h, W)) | 0),
              (o = (o + Math.imul(d, z)) | 0),
              (i = (i + Math.imul(d, W)) | 0);
            var _t = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(_, J)),
              (o = Math.imul(_, F)),
              (o = (o + Math.imul(v, J)) | 0),
              (i = Math.imul(v, F)),
              (r = (r + Math.imul(p, z)) | 0),
              (o = (o + Math.imul(p, W)) | 0),
              (o = (o + Math.imul(m, z)) | 0),
              (i = (i + Math.imul(m, W)) | 0),
              (r = (r + Math.imul(h, $)) | 0),
              (o = (o + Math.imul(h, Q)) | 0),
              (o = (o + Math.imul(d, $)) | 0),
              (i = (i + Math.imul(d, Q)) | 0);
            var vt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(w, J)),
              (o = Math.imul(w, F)),
              (o = (o + Math.imul(b, J)) | 0),
              (i = Math.imul(b, F)),
              (r = (r + Math.imul(_, z)) | 0),
              (o = (o + Math.imul(_, W)) | 0),
              (o = (o + Math.imul(v, z)) | 0),
              (i = (i + Math.imul(v, W)) | 0),
              (r = (r + Math.imul(p, $)) | 0),
              (o = (o + Math.imul(p, Q)) | 0),
              (o = (o + Math.imul(m, $)) | 0),
              (i = (i + Math.imul(m, Q)) | 0),
              (r = (r + Math.imul(h, V)) | 0),
              (o = (o + Math.imul(h, Z)) | 0),
              (o = (o + Math.imul(d, V)) | 0),
              (i = (i + Math.imul(d, Z)) | 0);
            var yt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(x, J)),
              (o = Math.imul(x, F)),
              (o = (o + Math.imul(E, J)) | 0),
              (i = Math.imul(E, F)),
              (r = (r + Math.imul(w, z)) | 0),
              (o = (o + Math.imul(w, W)) | 0),
              (o = (o + Math.imul(b, z)) | 0),
              (i = (i + Math.imul(b, W)) | 0),
              (r = (r + Math.imul(_, $)) | 0),
              (o = (o + Math.imul(_, Q)) | 0),
              (o = (o + Math.imul(v, $)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (r = (r + Math.imul(p, V)) | 0),
              (o = (o + Math.imul(p, Z)) | 0),
              (o = (o + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(m, Z)) | 0),
              (r = (r + Math.imul(h, G)) | 0),
              (o = (o + Math.imul(h, tt)) | 0),
              (o = (o + Math.imul(d, G)) | 0),
              (i = (i + Math.imul(d, tt)) | 0);
            var wt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(R, J)),
              (o = Math.imul(R, F)),
              (o = (o + Math.imul(S, J)) | 0),
              (i = Math.imul(S, F)),
              (r = (r + Math.imul(x, z)) | 0),
              (o = (o + Math.imul(x, W)) | 0),
              (o = (o + Math.imul(E, z)) | 0),
              (i = (i + Math.imul(E, W)) | 0),
              (r = (r + Math.imul(w, $)) | 0),
              (o = (o + Math.imul(w, Q)) | 0),
              (o = (o + Math.imul(b, $)) | 0),
              (i = (i + Math.imul(b, Q)) | 0),
              (r = (r + Math.imul(_, V)) | 0),
              (o = (o + Math.imul(_, Z)) | 0),
              (o = (o + Math.imul(v, V)) | 0),
              (i = (i + Math.imul(v, Z)) | 0),
              (r = (r + Math.imul(p, G)) | 0),
              (o = (o + Math.imul(p, tt)) | 0),
              (o = (o + Math.imul(m, G)) | 0),
              (i = (i + Math.imul(m, tt)) | 0),
              (r = (r + Math.imul(h, nt)) | 0),
              (o = (o + Math.imul(h, rt)) | 0),
              (o = (o + Math.imul(d, nt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0);
            var bt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (r = Math.imul(O, J)),
              (o = Math.imul(O, F)),
              (o = (o + Math.imul(I, J)) | 0),
              (i = Math.imul(I, F)),
              (r = (r + Math.imul(R, z)) | 0),
              (o = (o + Math.imul(R, W)) | 0),
              (o = (o + Math.imul(S, z)) | 0),
              (i = (i + Math.imul(S, W)) | 0),
              (r = (r + Math.imul(x, $)) | 0),
              (o = (o + Math.imul(x, Q)) | 0),
              (o = (o + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (r = (r + Math.imul(w, V)) | 0),
              (o = (o + Math.imul(w, Z)) | 0),
              (o = (o + Math.imul(b, V)) | 0),
              (i = (i + Math.imul(b, Z)) | 0),
              (r = (r + Math.imul(_, G)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (o = (o + Math.imul(v, G)) | 0),
              (i = (i + Math.imul(v, tt)) | 0),
              (r = (r + Math.imul(p, nt)) | 0),
              (o = (o + Math.imul(p, rt)) | 0),
              (o = (o + Math.imul(m, nt)) | 0),
              (i = (i + Math.imul(m, rt)) | 0),
              (r = (r + Math.imul(h, it)) | 0),
              (o = (o + Math.imul(h, st)) | 0),
              (o = (o + Math.imul(d, it)) | 0),
              (i = (i + Math.imul(d, st)) | 0);
            var Mt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(T, J)),
              (o = Math.imul(T, F)),
              (o = (o + Math.imul(P, J)) | 0),
              (i = Math.imul(P, F)),
              (r = (r + Math.imul(O, z)) | 0),
              (o = (o + Math.imul(O, W)) | 0),
              (o = (o + Math.imul(I, z)) | 0),
              (i = (i + Math.imul(I, W)) | 0),
              (r = (r + Math.imul(R, $)) | 0),
              (o = (o + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(S, $)) | 0),
              (i = (i + Math.imul(S, Q)) | 0),
              (r = (r + Math.imul(x, V)) | 0),
              (o = (o + Math.imul(x, Z)) | 0),
              (o = (o + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(E, Z)) | 0),
              (r = (r + Math.imul(w, G)) | 0),
              (o = (o + Math.imul(w, tt)) | 0),
              (o = (o + Math.imul(b, G)) | 0),
              (i = (i + Math.imul(b, tt)) | 0),
              (r = (r + Math.imul(_, nt)) | 0),
              (o = (o + Math.imul(_, rt)) | 0),
              (o = (o + Math.imul(v, nt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0),
              (r = (r + Math.imul(p, it)) | 0),
              (o = (o + Math.imul(p, st)) | 0),
              (o = (o + Math.imul(m, it)) | 0),
              (i = (i + Math.imul(m, st)) | 0),
              (r = (r + Math.imul(h, ct)) | 0),
              (o = (o + Math.imul(h, ut)) | 0),
              (o = (o + Math.imul(d, ct)) | 0),
              (i = (i + Math.imul(d, ut)) | 0);
            var xt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (r = Math.imul(j, J)),
              (o = Math.imul(j, F)),
              (o = (o + Math.imul(L, J)) | 0),
              (i = Math.imul(L, F)),
              (r = (r + Math.imul(T, z)) | 0),
              (o = (o + Math.imul(T, W)) | 0),
              (o = (o + Math.imul(P, z)) | 0),
              (i = (i + Math.imul(P, W)) | 0),
              (r = (r + Math.imul(O, $)) | 0),
              (o = (o + Math.imul(O, Q)) | 0),
              (o = (o + Math.imul(I, $)) | 0),
              (i = (i + Math.imul(I, Q)) | 0),
              (r = (r + Math.imul(R, V)) | 0),
              (o = (o + Math.imul(R, Z)) | 0),
              (o = (o + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(S, Z)) | 0),
              (r = (r + Math.imul(x, G)) | 0),
              (o = (o + Math.imul(x, tt)) | 0),
              (o = (o + Math.imul(E, G)) | 0),
              (i = (i + Math.imul(E, tt)) | 0),
              (r = (r + Math.imul(w, nt)) | 0),
              (o = (o + Math.imul(w, rt)) | 0),
              (o = (o + Math.imul(b, nt)) | 0),
              (i = (i + Math.imul(b, rt)) | 0),
              (r = (r + Math.imul(_, it)) | 0),
              (o = (o + Math.imul(_, st)) | 0),
              (o = (o + Math.imul(v, it)) | 0),
              (i = (i + Math.imul(v, st)) | 0),
              (r = (r + Math.imul(p, ct)) | 0),
              (o = (o + Math.imul(p, ut)) | 0),
              (o = (o + Math.imul(m, ct)) | 0),
              (i = (i + Math.imul(m, ut)) | 0),
              (r = (r + Math.imul(h, ht)) | 0),
              (o = (o + Math.imul(h, dt)) | 0),
              (o = (o + Math.imul(d, ht)) | 0),
              (i = (i + Math.imul(d, dt)) | 0);
            var Et = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(q, J)),
              (o = Math.imul(q, F)),
              (o = (o + Math.imul(U, J)) | 0),
              (i = Math.imul(U, F)),
              (r = (r + Math.imul(j, z)) | 0),
              (o = (o + Math.imul(j, W)) | 0),
              (o = (o + Math.imul(L, z)) | 0),
              (i = (i + Math.imul(L, W)) | 0),
              (r = (r + Math.imul(T, $)) | 0),
              (o = (o + Math.imul(T, Q)) | 0),
              (o = (o + Math.imul(P, $)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (r = (r + Math.imul(O, V)) | 0),
              (o = (o + Math.imul(O, Z)) | 0),
              (o = (o + Math.imul(I, V)) | 0),
              (i = (i + Math.imul(I, Z)) | 0),
              (r = (r + Math.imul(R, G)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (o = (o + Math.imul(S, G)) | 0),
              (i = (i + Math.imul(S, tt)) | 0),
              (r = (r + Math.imul(x, nt)) | 0),
              (o = (o + Math.imul(x, rt)) | 0),
              (o = (o + Math.imul(E, nt)) | 0),
              (i = (i + Math.imul(E, rt)) | 0),
              (r = (r + Math.imul(w, it)) | 0),
              (o = (o + Math.imul(w, st)) | 0),
              (o = (o + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(b, st)) | 0),
              (r = (r + Math.imul(_, ct)) | 0),
              (o = (o + Math.imul(_, ut)) | 0),
              (o = (o + Math.imul(v, ct)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (r = (r + Math.imul(p, ht)) | 0),
              (o = (o + Math.imul(p, dt)) | 0),
              (o = (o + Math.imul(m, ht)) | 0),
              (i = (i + Math.imul(m, dt)) | 0),
              (r = (r + Math.imul(h, pt)) | 0),
              (o = (o + Math.imul(h, mt)) | 0),
              (o = (o + Math.imul(d, pt)) | 0),
              (i = (i + Math.imul(d, mt)) | 0);
            var kt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(q, z)),
              (o = Math.imul(q, W)),
              (o = (o + Math.imul(U, z)) | 0),
              (i = Math.imul(U, W)),
              (r = (r + Math.imul(j, $)) | 0),
              (o = (o + Math.imul(j, Q)) | 0),
              (o = (o + Math.imul(L, $)) | 0),
              (i = (i + Math.imul(L, Q)) | 0),
              (r = (r + Math.imul(T, V)) | 0),
              (o = (o + Math.imul(T, Z)) | 0),
              (o = (o + Math.imul(P, V)) | 0),
              (i = (i + Math.imul(P, Z)) | 0),
              (r = (r + Math.imul(O, G)) | 0),
              (o = (o + Math.imul(O, tt)) | 0),
              (o = (o + Math.imul(I, G)) | 0),
              (i = (i + Math.imul(I, tt)) | 0),
              (r = (r + Math.imul(R, nt)) | 0),
              (o = (o + Math.imul(R, rt)) | 0),
              (o = (o + Math.imul(S, nt)) | 0),
              (i = (i + Math.imul(S, rt)) | 0),
              (r = (r + Math.imul(x, it)) | 0),
              (o = (o + Math.imul(x, st)) | 0),
              (o = (o + Math.imul(E, it)) | 0),
              (i = (i + Math.imul(E, st)) | 0),
              (r = (r + Math.imul(w, ct)) | 0),
              (o = (o + Math.imul(w, ut)) | 0),
              (o = (o + Math.imul(b, ct)) | 0),
              (i = (i + Math.imul(b, ut)) | 0),
              (r = (r + Math.imul(_, ht)) | 0),
              (o = (o + Math.imul(_, dt)) | 0),
              (o = (o + Math.imul(v, ht)) | 0),
              (i = (i + Math.imul(v, dt)) | 0),
              (r = (r + Math.imul(p, pt)) | 0),
              (o = (o + Math.imul(p, mt)) | 0),
              (o = (o + Math.imul(m, pt)) | 0),
              (i = (i + Math.imul(m, mt)) | 0);
            var Rt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(q, $)),
              (o = Math.imul(q, Q)),
              (o = (o + Math.imul(U, $)) | 0),
              (i = Math.imul(U, Q)),
              (r = (r + Math.imul(j, V)) | 0),
              (o = (o + Math.imul(j, Z)) | 0),
              (o = (o + Math.imul(L, V)) | 0),
              (i = (i + Math.imul(L, Z)) | 0),
              (r = (r + Math.imul(T, G)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (o = (o + Math.imul(P, G)) | 0),
              (i = (i + Math.imul(P, tt)) | 0),
              (r = (r + Math.imul(O, nt)) | 0),
              (o = (o + Math.imul(O, rt)) | 0),
              (o = (o + Math.imul(I, nt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (r = (r + Math.imul(R, it)) | 0),
              (o = (o + Math.imul(R, st)) | 0),
              (o = (o + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(S, st)) | 0),
              (r = (r + Math.imul(x, ct)) | 0),
              (o = (o + Math.imul(x, ut)) | 0),
              (o = (o + Math.imul(E, ct)) | 0),
              (i = (i + Math.imul(E, ut)) | 0),
              (r = (r + Math.imul(w, ht)) | 0),
              (o = (o + Math.imul(w, dt)) | 0),
              (o = (o + Math.imul(b, ht)) | 0),
              (i = (i + Math.imul(b, dt)) | 0),
              (r = (r + Math.imul(_, pt)) | 0),
              (o = (o + Math.imul(_, mt)) | 0),
              (o = (o + Math.imul(v, pt)) | 0),
              (i = (i + Math.imul(v, mt)) | 0);
            var St = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(q, V)),
              (o = Math.imul(q, Z)),
              (o = (o + Math.imul(U, V)) | 0),
              (i = Math.imul(U, Z)),
              (r = (r + Math.imul(j, G)) | 0),
              (o = (o + Math.imul(j, tt)) | 0),
              (o = (o + Math.imul(L, G)) | 0),
              (i = (i + Math.imul(L, tt)) | 0),
              (r = (r + Math.imul(T, nt)) | 0),
              (o = (o + Math.imul(T, rt)) | 0),
              (o = (o + Math.imul(P, nt)) | 0),
              (i = (i + Math.imul(P, rt)) | 0),
              (r = (r + Math.imul(O, it)) | 0),
              (o = (o + Math.imul(O, st)) | 0),
              (o = (o + Math.imul(I, it)) | 0),
              (i = (i + Math.imul(I, st)) | 0),
              (r = (r + Math.imul(R, ct)) | 0),
              (o = (o + Math.imul(R, ut)) | 0),
              (o = (o + Math.imul(S, ct)) | 0),
              (i = (i + Math.imul(S, ut)) | 0),
              (r = (r + Math.imul(x, ht)) | 0),
              (o = (o + Math.imul(x, dt)) | 0),
              (o = (o + Math.imul(E, ht)) | 0),
              (i = (i + Math.imul(E, dt)) | 0),
              (r = (r + Math.imul(w, pt)) | 0),
              (o = (o + Math.imul(w, mt)) | 0),
              (o = (o + Math.imul(b, pt)) | 0),
              (i = (i + Math.imul(b, mt)) | 0);
            var Ct = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (r = Math.imul(q, G)),
              (o = Math.imul(q, tt)),
              (o = (o + Math.imul(U, G)) | 0),
              (i = Math.imul(U, tt)),
              (r = (r + Math.imul(j, nt)) | 0),
              (o = (o + Math.imul(j, rt)) | 0),
              (o = (o + Math.imul(L, nt)) | 0),
              (i = (i + Math.imul(L, rt)) | 0),
              (r = (r + Math.imul(T, it)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (o = (o + Math.imul(P, it)) | 0),
              (i = (i + Math.imul(P, st)) | 0),
              (r = (r + Math.imul(O, ct)) | 0),
              (o = (o + Math.imul(O, ut)) | 0),
              (o = (o + Math.imul(I, ct)) | 0),
              (i = (i + Math.imul(I, ut)) | 0),
              (r = (r + Math.imul(R, ht)) | 0),
              (o = (o + Math.imul(R, dt)) | 0),
              (o = (o + Math.imul(S, ht)) | 0),
              (i = (i + Math.imul(S, dt)) | 0),
              (r = (r + Math.imul(x, pt)) | 0),
              (o = (o + Math.imul(x, mt)) | 0),
              (o = (o + Math.imul(E, pt)) | 0),
              (i = (i + Math.imul(E, mt)) | 0);
            var Ot = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (r = Math.imul(q, nt)),
              (o = Math.imul(q, rt)),
              (o = (o + Math.imul(U, nt)) | 0),
              (i = Math.imul(U, rt)),
              (r = (r + Math.imul(j, it)) | 0),
              (o = (o + Math.imul(j, st)) | 0),
              (o = (o + Math.imul(L, it)) | 0),
              (i = (i + Math.imul(L, st)) | 0),
              (r = (r + Math.imul(T, ct)) | 0),
              (o = (o + Math.imul(T, ut)) | 0),
              (o = (o + Math.imul(P, ct)) | 0),
              (i = (i + Math.imul(P, ut)) | 0),
              (r = (r + Math.imul(O, ht)) | 0),
              (o = (o + Math.imul(O, dt)) | 0),
              (o = (o + Math.imul(I, ht)) | 0),
              (i = (i + Math.imul(I, dt)) | 0),
              (r = (r + Math.imul(R, pt)) | 0),
              (o = (o + Math.imul(R, mt)) | 0),
              (o = (o + Math.imul(S, pt)) | 0),
              (i = (i + Math.imul(S, mt)) | 0);
            var It = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (r = Math.imul(q, it)),
              (o = Math.imul(q, st)),
              (o = (o + Math.imul(U, it)) | 0),
              (i = Math.imul(U, st)),
              (r = (r + Math.imul(j, ct)) | 0),
              (o = (o + Math.imul(j, ut)) | 0),
              (o = (o + Math.imul(L, ct)) | 0),
              (i = (i + Math.imul(L, ut)) | 0),
              (r = (r + Math.imul(T, ht)) | 0),
              (o = (o + Math.imul(T, dt)) | 0),
              (o = (o + Math.imul(P, ht)) | 0),
              (i = (i + Math.imul(P, dt)) | 0),
              (r = (r + Math.imul(O, pt)) | 0),
              (o = (o + Math.imul(O, mt)) | 0),
              (o = (o + Math.imul(I, pt)) | 0),
              (i = (i + Math.imul(I, mt)) | 0);
            var At = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(q, ct)),
              (o = Math.imul(q, ut)),
              (o = (o + Math.imul(U, ct)) | 0),
              (i = Math.imul(U, ut)),
              (r = (r + Math.imul(j, ht)) | 0),
              (o = (o + Math.imul(j, dt)) | 0),
              (o = (o + Math.imul(L, ht)) | 0),
              (i = (i + Math.imul(L, dt)) | 0),
              (r = (r + Math.imul(T, pt)) | 0),
              (o = (o + Math.imul(T, mt)) | 0),
              (o = (o + Math.imul(P, pt)) | 0),
              (i = (i + Math.imul(P, mt)) | 0);
            var Tt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (r = Math.imul(q, ht)),
              (o = Math.imul(q, dt)),
              (o = (o + Math.imul(U, ht)) | 0),
              (i = Math.imul(U, dt)),
              (r = (r + Math.imul(j, pt)) | 0),
              (o = (o + Math.imul(j, mt)) | 0),
              (o = (o + Math.imul(L, pt)) | 0),
              (i = (i + Math.imul(L, mt)) | 0);
            var Pt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            (u = (((i + (o >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (r = Math.imul(q, pt)),
              (o = Math.imul(q, mt)),
              (o = (o + Math.imul(U, pt)) | 0),
              (i = Math.imul(U, mt));
            var Nt = (((u + r) | 0) + ((8191 & o) << 13)) | 0;
            return (
              (u = (((i + (o >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (c[0] = gt),
              (c[1] = _t),
              (c[2] = vt),
              (c[3] = yt),
              (c[4] = wt),
              (c[5] = bt),
              (c[6] = Mt),
              (c[7] = xt),
              (c[8] = Et),
              (c[9] = kt),
              (c[10] = Rt),
              (c[11] = St),
              (c[12] = Ct),
              (c[13] = Ot),
              (c[14] = It),
              (c[15] = At),
              (c[16] = Tt),
              (c[17] = Pt),
              (c[18] = Nt),
              0 !== u && ((c[19] = u), n.length++),
              n
            );
          };
          function m(t, e, n) {
            (n.negative = e.negative ^ t.negative),
              (n.length = t.length + e.length);
            for (var r = 0, o = 0, i = 0; i < n.length - 1; i++) {
              var s = o;
              o = 0;
              for (
                var a = 67108863 & r,
                  c = Math.min(i, e.length - 1),
                  u = Math.max(0, i - t.length + 1);
                u <= c;
                u++
              ) {
                var l = i - u,
                  h = 0 | t.words[l],
                  d = 0 | e.words[u],
                  f = h * d,
                  p = 67108863 & f;
                (s = (s + ((f / 67108864) | 0)) | 0),
                  (p = (p + a) | 0),
                  (a = 67108863 & p),
                  (s = (s + (p >>> 26)) | 0),
                  (o += s >>> 26),
                  (s &= 67108863);
              }
              (n.words[i] = a), (r = s), (s = o);
            }
            return 0 !== r ? (n.words[i] = r) : n.length--, n.strip();
          }
          function g(t, e, n) {
            var r = new _();
            return r.mulp(t, e, n);
          }
          function _(t, e) {
            (this.x = t), (this.y = e);
          }
          Math.imul || (p = f),
            (i.prototype.mulTo = function (t, e) {
              var n,
                r = this.length + t.length;
              return (
                (n =
                  10 === this.length && 10 === t.length
                    ? p(this, t, e)
                    : r < 63
                    ? f(this, t, e)
                    : r < 1024
                    ? m(this, t, e)
                    : g(this, t, e)),
                n
              );
            }),
            (_.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), n = i.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, n, t);
              return e;
            }),
            (_.prototype.revBin = function (t, e, n) {
              if (0 === t || t === n - 1) return t;
              for (var r = 0, o = 0; o < e; o++)
                (r |= (1 & t) << (e - o - 1)), (t >>= 1);
              return r;
            }),
            (_.prototype.permute = function (t, e, n, r, o, i) {
              for (var s = 0; s < i; s++) (r[s] = e[t[s]]), (o[s] = n[t[s]]);
            }),
            (_.prototype.transform = function (t, e, n, r, o, i) {
              this.permute(i, t, e, n, r, o);
              for (var s = 1; s < o; s <<= 1)
                for (
                  var a = s << 1,
                    c = Math.cos((2 * Math.PI) / a),
                    u = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < o;
                  l += a
                )
                  for (var h = c, d = u, f = 0; f < s; f++) {
                    var p = n[l + f],
                      m = r[l + f],
                      g = n[l + f + s],
                      _ = r[l + f + s],
                      v = h * g - d * _;
                    (_ = h * _ + d * g),
                      (g = v),
                      (n[l + f] = p + g),
                      (r[l + f] = m + _),
                      (n[l + f + s] = p - g),
                      (r[l + f + s] = m - _),
                      f !== a &&
                        ((v = c * h - u * d), (d = c * d + u * h), (h = v));
                  }
            }),
            (_.prototype.guessLen13b = function (t, e) {
              var n = 1 | Math.max(e, t),
                r = 1 & n,
                o = 0;
              for (n = (n / 2) | 0; n; n >>>= 1) o++;
              return 1 << (o + 1 + r);
            }),
            (_.prototype.conjugate = function (t, e, n) {
              if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                  var o = t[r];
                  (t[r] = t[n - r - 1]),
                    (t[n - r - 1] = o),
                    (o = e[r]),
                    (e[r] = -e[n - r - 1]),
                    (e[n - r - 1] = -o);
                }
            }),
            (_.prototype.normalize13b = function (t, e) {
              for (var n = 0, r = 0; r < e / 2; r++) {
                var o =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  n;
                (t[r] = 67108863 & o),
                  (n = o < 67108864 ? 0 : (o / 67108864) | 0);
              }
              return t;
            }),
            (_.prototype.convert13b = function (t, e, n, o) {
              for (var i = 0, s = 0; s < e; s++)
                (i += 0 | t[s]),
                  (n[2 * s] = 8191 & i),
                  (i >>>= 13),
                  (n[2 * s + 1] = 8191 & i),
                  (i >>>= 13);
              for (s = 2 * e; s < o; ++s) n[s] = 0;
              r(0 === i), r(0 === (-8192 & i));
            }),
            (_.prototype.stub = function (t) {
              for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
              return e;
            }),
            (_.prototype.mulp = function (t, e, n) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                o = this.makeRBT(r),
                i = this.stub(r),
                s = new Array(r),
                a = new Array(r),
                c = new Array(r),
                u = new Array(r),
                l = new Array(r),
                h = new Array(r),
                d = n.words;
              (d.length = r),
                this.convert13b(t.words, t.length, s, r),
                this.convert13b(e.words, e.length, u, r),
                this.transform(s, i, a, c, r, o),
                this.transform(u, i, l, h, r, o);
              for (var f = 0; f < r; f++) {
                var p = a[f] * l[f] - c[f] * h[f];
                (c[f] = a[f] * h[f] + c[f] * l[f]), (a[f] = p);
              }
              return (
                this.conjugate(a, c, r),
                this.transform(a, c, d, i, r, o),
                this.conjugate(d, i, r),
                this.normalize13b(d, r),
                (n.negative = t.negative ^ e.negative),
                (n.length = t.length + e.length),
                n.strip()
              );
            }),
            (i.prototype.mul = function (t) {
              var e = new i(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (i.prototype.mulf = function (t) {
              var e = new i(null);
              return (
                (e.words = new Array(this.length + t.length)), g(this, t, e)
              );
            }),
            (i.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (i.prototype.imuln = function (t) {
              r('number' === typeof t), r(t < 67108864);
              for (var e = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  i = (67108863 & o) + (67108863 & e);
                (e >>= 26),
                  (e += (o / 67108864) | 0),
                  (e += i >>> 26),
                  (this.words[n] = 67108863 & i);
              }
              return 0 !== e && ((this.words[n] = e), this.length++), this;
            }),
            (i.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (i.prototype.sqr = function () {
              return this.mul(this);
            }),
            (i.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (i.prototype.pow = function (t) {
              var e = d(t);
              if (0 === e.length) return new i(1);
              for (var n = this, r = 0; r < e.length; r++, n = n.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var o = n.sqr(); r < e.length; r++, o = o.sqr())
                  0 !== e[r] && (n = n.mul(o));
              return n;
            }),
            (i.prototype.iushln = function (t) {
              r('number' === typeof t && t >= 0);
              var e,
                n = t % 26,
                o = (t - n) / 26,
                i = (67108863 >>> (26 - n)) << (26 - n);
              if (0 !== n) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & i,
                    c = ((0 | this.words[e]) - a) << n;
                  (this.words[e] = c | s), (s = a >>> (26 - n));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== o) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + o] = this.words[e];
                for (e = 0; e < o; e++) this.words[e] = 0;
                this.length += o;
              }
              return this.strip();
            }),
            (i.prototype.ishln = function (t) {
              return r(0 === this.negative), this.iushln(t);
            }),
            (i.prototype.iushrn = function (t, e, n) {
              var o;
              r('number' === typeof t && t >= 0),
                (o = e ? (e - (e % 26)) / 26 : 0);
              var i = t % 26,
                s = Math.min((t - i) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> i) << i),
                c = n;
              if (((o -= s), (o = Math.max(0, o)), c)) {
                for (var u = 0; u < s; u++) c.words[u] = this.words[u];
                c.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, u = 0; u < this.length; u++)
                  this.words[u] = this.words[u + s];
              else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (u = this.length - 1; u >= 0 && (0 !== l || u >= o); u--) {
                var h = 0 | this.words[u];
                (this.words[u] = (l << (26 - i)) | (h >>> i)), (l = h & a);
              }
              return (
                c && 0 !== l && (c.words[c.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (i.prototype.ishrn = function (t, e, n) {
              return r(0 === this.negative), this.iushrn(t, e, n);
            }),
            (i.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (i.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (i.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (i.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (i.prototype.testn = function (t) {
              r('number' === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26,
                o = 1 << e;
              if (this.length <= n) return !1;
              var i = this.words[n];
              return !!(i & o);
            }),
            (i.prototype.imaskn = function (t) {
              r('number' === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  'imaskn works only with positive numbers',
                ),
                this.length <= n)
              )
                return this;
              if (
                (0 !== e && n++,
                (this.length = Math.min(n, this.length)),
                0 !== e)
              ) {
                var o = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= o;
              }
              return this.strip();
            }),
            (i.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (i.prototype.iaddn = function (t) {
              return (
                r('number' === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              );
            }),
            (i.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (i.prototype.isubn = function (t) {
              if ((r('number' === typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1);
              return this.strip();
            }),
            (i.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (i.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (i.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (i.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (i.prototype._ishlnsubmul = function (t, e, n) {
              var o,
                i,
                s = t.length + n;
              this._expand(s);
              var a = 0;
              for (o = 0; o < t.length; o++) {
                i = (0 | this.words[o + n]) + a;
                var c = (0 | t.words[o]) * e;
                (i -= 67108863 & c),
                  (a = (i >> 26) - ((c / 67108864) | 0)),
                  (this.words[o + n] = 67108863 & i);
              }
              for (; o < this.length - n; o++)
                (i = (0 | this.words[o + n]) + a),
                  (a = i >> 26),
                  (this.words[o + n] = 67108863 & i);
              if (0 === a) return this.strip();
              for (r(-1 === a), a = 0, o = 0; o < this.length; o++)
                (i = -(0 | this.words[o]) + a),
                  (a = i >> 26),
                  (this.words[o] = 67108863 & i);
              return (this.negative = 1), this.strip();
            }),
            (i.prototype._wordDiv = function (t, e) {
              var n = this.length - t.length,
                r = this.clone(),
                o = t,
                s = 0 | o.words[o.length - 1],
                a = this._countBits(s);
              (n = 26 - a),
                0 !== n &&
                  ((o = o.ushln(n)),
                  r.iushln(n),
                  (s = 0 | o.words[o.length - 1]));
              var c,
                u = r.length - o.length;
              if ('mod' !== e) {
                (c = new i(null)),
                  (c.length = u + 1),
                  (c.words = new Array(c.length));
                for (var l = 0; l < c.length; l++) c.words[l] = 0;
              }
              var h = r.clone()._ishlnsubmul(o, 1, u);
              0 === h.negative && ((r = h), c && (c.words[u] = 1));
              for (var d = u - 1; d >= 0; d--) {
                var f =
                  67108864 * (0 | r.words[o.length + d]) +
                  (0 | r.words[o.length + d - 1]);
                (f = Math.min((f / s) | 0, 67108863)), r._ishlnsubmul(o, f, d);
                while (0 !== r.negative)
                  f--,
                    (r.negative = 0),
                    r._ishlnsubmul(o, 1, d),
                    r.isZero() || (r.negative ^= 1);
                c && (c.words[d] = f);
              }
              return (
                c && c.strip(),
                r.strip(),
                'div' !== e && 0 !== n && r.iushrn(n),
                { div: c || null, mod: r }
              );
            }),
            (i.prototype.divmod = function (t, e, n) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new i(0), mod: new i(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((a = this.neg().divmod(t, e)),
                    'mod' !== e && (o = a.div.neg()),
                    'div' !== e &&
                      ((s = a.mod.neg()), n && 0 !== s.negative && s.iadd(t)),
                    { div: o, mod: s })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)),
                    'mod' !== e && (o = a.div.neg()),
                    { div: o, mod: a.mod })
                  : 0 !== (this.negative & t.negative)
                  ? ((a = this.neg().divmod(t.neg(), e)),
                    'div' !== e &&
                      ((s = a.mod.neg()), n && 0 !== s.negative && s.isub(t)),
                    { div: a.div, mod: s })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new i(0), mod: this }
                  : 1 === t.length
                  ? 'div' === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : 'mod' === e
                    ? { div: null, mod: new i(this.modn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new i(this.modn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var o, s, a;
            }),
            (i.prototype.div = function (t) {
              return this.divmod(t, 'div', !1).div;
            }),
            (i.prototype.mod = function (t) {
              return this.divmod(t, 'mod', !1).mod;
            }),
            (i.prototype.umod = function (t) {
              return this.divmod(t, 'mod', !0).mod;
            }),
            (i.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                o = t.andln(1),
                i = n.cmp(r);
              return i < 0 || (1 === o && 0 === i)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (i.prototype.modn = function (t) {
              r(t <= 67108863);
              for (
                var e = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (e * n + (0 | this.words[o])) % t;
              return n;
            }),
            (i.prototype.idivn = function (t) {
              r(t <= 67108863);
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * e;
                (this.words[n] = (o / t) | 0), (e = o % t);
              }
              return this.strip();
            }),
            (i.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (i.prototype.egcd = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var o = new i(1),
                s = new i(0),
                a = new i(0),
                c = new i(1),
                u = 0;
              while (e.isEven() && n.isEven()) e.iushrn(1), n.iushrn(1), ++u;
              var l = n.clone(),
                h = e.clone();
              while (!e.isZero()) {
                for (
                  var d = 0, f = 1;
                  0 === (e.words[0] & f) && d < 26;
                  ++d, f <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    (o.isOdd() || s.isOdd()) && (o.iadd(l), s.isub(h)),
                      o.iushrn(1),
                      s.iushrn(1);
                }
                for (
                  var p = 0, m = 1;
                  0 === (n.words[0] & m) && p < 26;
                  ++p, m <<= 1
                );
                if (p > 0) {
                  n.iushrn(p);
                  while (p-- > 0)
                    (a.isOdd() || c.isOdd()) && (a.iadd(l), c.isub(h)),
                      a.iushrn(1),
                      c.iushrn(1);
                }
                e.cmp(n) >= 0
                  ? (e.isub(n), o.isub(a), s.isub(c))
                  : (n.isub(e), a.isub(o), c.isub(s));
              }
              return { a: a, b: c, gcd: n.iushln(u) };
            }),
            (i.prototype._invmp = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var o,
                s = new i(1),
                a = new i(0),
                c = n.clone();
              while (e.cmpn(1) > 0 && n.cmpn(1) > 0) {
                for (
                  var u = 0, l = 1;
                  0 === (e.words[0] & l) && u < 26;
                  ++u, l <<= 1
                );
                if (u > 0) {
                  e.iushrn(u);
                  while (u-- > 0) s.isOdd() && s.iadd(c), s.iushrn(1);
                }
                for (
                  var h = 0, d = 1;
                  0 === (n.words[0] & d) && h < 26;
                  ++h, d <<= 1
                );
                if (h > 0) {
                  n.iushrn(h);
                  while (h-- > 0) a.isOdd() && a.iadd(c), a.iushrn(1);
                }
                e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
              }
              return (
                (o = 0 === e.cmpn(1) ? s : a), o.cmpn(0) < 0 && o.iadd(t), o
              );
            }),
            (i.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                n = t.clone();
              (e.negative = 0), (n.negative = 0);
              for (var r = 0; e.isEven() && n.isEven(); r++)
                e.iushrn(1), n.iushrn(1);
              do {
                while (e.isEven()) e.iushrn(1);
                while (n.isEven()) n.iushrn(1);
                var o = e.cmp(n);
                if (o < 0) {
                  var i = e;
                  (e = n), (n = i);
                } else if (0 === o || 0 === n.cmpn(1)) break;
                e.isub(n);
              } while (1);
              return n.iushln(r);
            }),
            (i.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (i.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (i.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (i.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (i.prototype.bincn = function (t) {
              r('number' === typeof t);
              var e = t % 26,
                n = (t - e) / 26,
                o = 1 << e;
              if (this.length <= n)
                return this._expand(n + 1), (this.words[n] |= o), this;
              for (var i = o, s = n; 0 !== i && s < this.length; s++) {
                var a = 0 | this.words[s];
                (a += i), (i = a >>> 26), (a &= 67108863), (this.words[s] = a);
              }
              return 0 !== i && ((this.words[s] = i), this.length++), this;
            }),
            (i.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (i.prototype.cmpn = function (t) {
              var e,
                n = t < 0;
              if (0 !== this.negative && !n) return -1;
              if (0 === this.negative && n) return 1;
              if ((this.strip(), this.length > 1)) e = 1;
              else {
                n && (t = -t), r(t <= 67108863, 'Number is too big');
                var o = 0 | this.words[0];
                e = o === t ? 0 : o < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (i.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (i.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                  o = 0 | t.words[n];
                if (r !== o) {
                  r < o ? (e = -1) : r > o && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (i.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (i.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (i.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (i.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (i.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (i.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (i.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (i.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (i.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (i.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (i.red = function (t) {
              return new E(t);
            }),
            (i.prototype.toRed = function (t) {
              return (
                r(!this.red, 'Already a number in reduction context'),
                r(0 === this.negative, 'red works only with positives'),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (i.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  'fromRed works only with numbers in reduction context',
                ),
                this.red.convertFrom(this)
              );
            }),
            (i.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (i.prototype.forceRed = function (t) {
              return (
                r(!this.red, 'Already a number in reduction context'),
                this._forceRed(t)
              );
            }),
            (i.prototype.redAdd = function (t) {
              return (
                r(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, t)
              );
            }),
            (i.prototype.redIAdd = function (t) {
              return (
                r(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, t)
              );
            }),
            (i.prototype.redSub = function (t) {
              return (
                r(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, t)
              );
            }),
            (i.prototype.redISub = function (t) {
              return (
                r(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, t)
              );
            }),
            (i.prototype.redShl = function (t) {
              return (
                r(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, t)
              );
            }),
            (i.prototype.redMul = function (t) {
              return (
                r(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (i.prototype.redIMul = function (t) {
              return (
                r(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (i.prototype.redSqr = function () {
              return (
                r(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (i.prototype.redISqr = function () {
              return (
                r(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (i.prototype.redSqrt = function () {
              return (
                r(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (i.prototype.redInvm = function () {
              return (
                r(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (i.prototype.redNeg = function () {
              return (
                r(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (i.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var v = { k256: null, p224: null, p192: null, p25519: null };
          function y(t, e) {
            (this.name = t),
              (this.p = new i(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new i(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function w() {
            y.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
            );
          }
          function b() {
            y.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
            );
          }
          function M() {
            y.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
            );
          }
          function x() {
            y.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
            );
          }
          function E(t) {
            if ('string' === typeof t) {
              var e = i._prime(t);
              (this.m = e.p), (this.prime = e);
            } else
              r(t.gtn(1), 'modulus must be greater than 1'),
                (this.m = t),
                (this.prime = null);
          }
          function k(t) {
            E.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new i(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (y.prototype._tmp = function () {
            var t = new i(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (y.prototype.ireduce = function (t) {
              var e,
                n = t;
              do {
                this.split(n, this.tmp),
                  (n = this.imulK(n)),
                  (n = n.iadd(this.tmp)),
                  (e = n.bitLength());
              } while (e > this.n);
              var r = e < this.n ? -1 : n.ucmp(this.p);
              return (
                0 === r
                  ? ((n.words[0] = 0), (n.length = 1))
                  : r > 0
                  ? n.isub(this.p)
                  : n.strip(),
                n
              );
            }),
            (y.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (y.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            o(w, y),
            (w.prototype.split = function (t, e) {
              for (
                var n = 4194303, r = Math.min(t.length, 9), o = 0;
                o < r;
                o++
              )
                e.words[o] = t.words[o];
              if (((e.length = r), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var i = t.words[9];
              for (e.words[e.length++] = i & n, o = 10; o < t.length; o++) {
                var s = 0 | t.words[o];
                (t.words[o - 10] = ((s & n) << 4) | (i >>> 22)), (i = s);
              }
              (i >>>= 22),
                (t.words[o - 10] = i),
                0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
            }),
            (w.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 0 | t.words[n];
                (e += 977 * r),
                  (t.words[n] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            o(b, y),
            o(M, y),
            o(x, y),
            (x.prototype.imulK = function (t) {
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 19 * (0 | t.words[n]) + e,
                  o = 67108863 & r;
                (r >>>= 26), (t.words[n] = o), (e = r);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (i._prime = function (t) {
              if (v[t]) return v[t];
              var e;
              if ('k256' === t) e = new w();
              else if ('p224' === t) e = new b();
              else if ('p192' === t) e = new M();
              else {
                if ('p25519' !== t) throw new Error('Unknown prime ' + t);
                e = new x();
              }
              return (v[t] = e), e;
            }),
            (E.prototype._verify1 = function (t) {
              r(0 === t.negative, 'red works only with positives'),
                r(t.red, 'red works only with red numbers');
            }),
            (E.prototype._verify2 = function (t, e) {
              r(
                0 === (t.negative | e.negative),
                'red works only with positives',
              ),
                r(t.red && t.red === e.red, 'red works only with red numbers');
            }),
            (E.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : t.umod(this.m)._forceRed(this);
            }),
            (E.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (E.prototype.add = function (t, e) {
              this._verify2(t, e);
              var n = t.add(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
            }),
            (E.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var n = t.iadd(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n;
            }),
            (E.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var n = t.sub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
            }),
            (E.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var n = t.isub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n;
            }),
            (E.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (E.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (E.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (E.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (E.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (E.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var n = this.m.add(new i(1)).iushrn(2);
                return this.pow(t, n);
              }
              var o = this.m.subn(1),
                s = 0;
              while (!o.isZero() && 0 === o.andln(1)) s++, o.iushrn(1);
              r(!o.isZero());
              var a = new i(1).toRed(this),
                c = a.redNeg(),
                u = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new i(2 * l * l).toRed(this);
              while (0 !== this.pow(l, u).cmp(c)) l.redIAdd(c);
              var h = this.pow(l, o),
                d = this.pow(t, o.addn(1).iushrn(1)),
                f = this.pow(t, o),
                p = s;
              while (0 !== f.cmp(a)) {
                for (var m = f, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                r(g < p);
                var _ = this.pow(h, new i(1).iushln(p - g - 1));
                (d = d.redMul(_)), (h = _.redSqr()), (f = f.redMul(h)), (p = g);
              }
              return d;
            }),
            (E.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (E.prototype.pow = function (t, e) {
              if (e.isZero()) return new i(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var n = 4,
                r = new Array(1 << n);
              (r[0] = new i(1).toRed(this)), (r[1] = t);
              for (var o = 2; o < r.length; o++) r[o] = this.mul(r[o - 1], t);
              var s = r[0],
                a = 0,
                c = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), o = e.length - 1; o >= 0; o--) {
                for (var l = e.words[o], h = u - 1; h >= 0; h--) {
                  var d = (l >> h) & 1;
                  s !== r[0] && (s = this.sqr(s)),
                    0 !== d || 0 !== a
                      ? ((a <<= 1),
                        (a |= d),
                        c++,
                        (c === n || (0 === o && 0 === h)) &&
                          ((s = this.mul(s, r[a])), (c = 0), (a = 0)))
                      : (c = 0);
                }
                u = 26;
              }
              return s;
            }),
            (E.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (E.prototype.convertFrom = function (t) {
              var e = t.clone();
              return (e.red = null), e;
            }),
            (i.mont = function (t) {
              return new k(t);
            }),
            o(k, E),
            (k.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (k.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return (e.red = null), e;
            }),
            (k.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t;
              var n = t.imul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                o = n.isub(r).iushrn(this.shift),
                i = o;
              return (
                o.cmp(this.m) >= 0
                  ? (i = o.isub(this.m))
                  : o.cmpn(0) < 0 && (i = o.iadd(this.m)),
                i._forceRed(this)
              );
            }),
            (k.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new i(0)._forceRed(this);
              var n = t.mul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                o = n.isub(r).iushrn(this.shift),
                s = o;
              return (
                o.cmp(this.m) >= 0
                  ? (s = o.isub(this.m))
                  : o.cmpn(0) < 0 && (s = o.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (k.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            });
        })(t, this);
      }.call(this, n('hOG+')(t)));
    },
    '1sBl': function (t, e, n) {
      var r = n('e/Dd').getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        for (
          var e = Math.floor(t / 7) + 2,
            n = r(t),
            o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
            i = [n - 7],
            s = 1;
          s < e - 1;
          s++
        )
          i[s] = i[s - 1] - o;
        return i.push(6), i.reverse();
      }),
        (e.getPositions = function (t) {
          for (
            var n = [], r = e.getRowColCoords(t), o = r.length, i = 0;
            i < o;
            i++
          )
            for (var s = 0; s < o; s++)
              (0 === i && 0 === s) ||
                (0 === i && s === o - 1) ||
                (i === o - 1 && 0 === s) ||
                n.push([r[i], r[s]]);
          return n;
        });
    },
    '3X7Y': function (t, e, n) {
      var r = n('u/Db');
      function o(t) {
        (this.mode = r.NUMERIC), (this.data = t.toString());
      }
      (o.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          var e, n, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (n = this.data.substr(e, 3)), (r = parseInt(n, 10)), t.put(r, 10);
          var o = this.data.length - e;
          o > 0 &&
            ((n = this.data.substr(e)),
            (r = parseInt(n, 10)),
            t.put(r, 3 * o + 1));
        }),
        (t.exports = o);
    },
    '4f1M': function (t, e, n) {
      'use strict';
      (function (t) {
        function n() {
          return (
            'undefined' === typeof document &&
            'undefined' !== typeof navigator &&
            'ReactNative' === navigator.product
          );
        }
        function r() {
          return (
            'undefined' !== typeof t &&
            'undefined' !== typeof t.versions &&
            'undefined' !== typeof t.versions.node
          );
        }
        function o() {
          return !n() && !r();
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isBrowser = e.isNode = e.isReactNative = void 0),
          (e.isReactNative = n),
          (e.isNode = r),
          (e.isBrowser = o);
      }.call(this, n('Q2Ig')));
    },
    '6mOj': function (t, e, n) {
      'use strict';
      var r = Object.prototype.hasOwnProperty,
        o = '~';
      function i() {}
      function s(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function a(t, e, n, r, i) {
        if ('function' !== typeof n)
          throw new TypeError('The listener must be a function');
        var a = new s(n, r || t, i),
          c = o ? o + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], a])
              : t._events[c].push(a)
            : ((t._events[c] = a), t._eventsCount++),
          t
        );
      }
      function c(t, e) {
        0 === --t._eventsCount ? (t._events = new i()) : delete t._events[e];
      }
      function u() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (u.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(o ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (u.prototype.listeners = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, i = n.length, s = new Array(i); r < i; r++)
            s[r] = n[r].fn;
          return s;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (t, e, n, r, i, s) {
          var a = o ? o + t : t;
          if (!this._events[a]) return !1;
          var c,
            u,
            l = this._events[a],
            h = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), h)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, n), !0;
              case 4:
                return l.fn.call(l.context, e, n, r), !0;
              case 5:
                return l.fn.call(l.context, e, n, r, i), !0;
              case 6:
                return l.fn.call(l.context, e, n, r, i, s), !0;
            }
            for (u = 1, c = new Array(h - 1); u < h; u++)
              c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            var d,
              f = l.length;
            for (u = 0; u < f; u++)
              switch (
                (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), h)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, e);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, e, n);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, e, n, r);
                  break;
                default:
                  if (!c)
                    for (d = 1, c = new Array(h - 1); d < h; d++)
                      c[d - 1] = arguments[d];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, n) {
          return a(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return a(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, n, r) {
          var i = o ? o + t : t;
          if (!this._events[i]) return this;
          if (!e) return c(this, i), this;
          var s = this._events[i];
          if (s.fn)
            s.fn !== e ||
              (r && !s.once) ||
              (n && s.context !== n) ||
              c(this, i);
          else {
            for (var a = 0, u = [], l = s.length; a < l; a++)
              (s[a].fn !== e ||
                (r && !s[a].once) ||
                (n && s[a].context !== n)) &&
                u.push(s[a]);
            u.length
              ? (this._events[i] = 1 === u.length ? u[0] : u)
              : c(this, i);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = o ? o + t : t), this._events[e] && c(this, e))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = o),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    '7FJf': function (t, e, n) {
      'use strict';
      (function (t) {
        n.d(e, 'f', function () {
          return m;
        }),
          n.d(e, 'g', function () {
            return g;
          }),
          n.d(e, 'i', function () {
            return _;
          }),
          n.d(e, 'h', function () {
            return v;
          }),
          n.d(e, 'b', function () {
            return y;
          }),
          n.d(e, 'c', function () {
            return w;
          }),
          n.d(e, 'e', function () {
            return b;
          }),
          n.d(e, 'd', function () {
            return M;
          }),
          n.d(e, 'o', function () {
            return x;
          }),
          n.d(e, 'n', function () {
            return E;
          }),
          n.d(e, 'p', function () {
            return k;
          }),
          n.d(e, 'A', function () {
            return R;
          }),
          n.d(e, 'z', function () {
            return S;
          }),
          n.d(e, 'B', function () {
            return C;
          }),
          n.d(e, 'v', function () {
            return O;
          }),
          n.d(e, 'u', function () {
            return I;
          }),
          n.d(e, 's', function () {
            return j;
          }),
          n.d(e, 'r', function () {
            return L;
          }),
          n.d(e, 't', function () {
            return B;
          }),
          n.d(e, 'q', function () {
            return q;
          }),
          n.d(e, 'm', function () {
            return U;
          }),
          n.d(e, 'l', function () {
            return D;
          }),
          n.d(e, 'k', function () {
            return J;
          }),
          n.d(e, 'j', function () {
            return F;
          }),
          n.d(e, 'x', function () {
            return $;
          }),
          n.d(e, 'a', function () {
            return Q;
          }),
          n.d(e, 'y', function () {
            return K;
          }),
          n.d(e, 'w', function () {
            return V;
          });
        var r = n('qXd6'),
          o = n.n(r),
          i = n('BJdv'),
          s = n.n(i);
        const a = 'hex',
          c = 'utf8',
          u = 'binary',
          l = 'buffer',
          h = 'array',
          d = 'typed-array',
          f = 'array-buffer',
          p = '0';
        function m(t) {
          return new Uint8Array(t);
        }
        function g(t, e = !1) {
          const n = t.toString(a);
          return e ? Q(n) : n;
        }
        function _(t) {
          return t.toString(c);
        }
        function v(t) {
          return t.readUIntBE(0, t.length);
        }
        function y(t) {
          return s()(t);
        }
        function w(t, e = !1) {
          return g(y(t), e);
        }
        function b(t) {
          return _(y(t));
        }
        function M(t) {
          return v(y(t));
        }
        function x(e) {
          return t.from($(e), a);
        }
        function E(t) {
          return m(x(t));
        }
        function k(t) {
          return _(x(t));
        }
        function R(e) {
          return t.from(e, c);
        }
        function S(t) {
          return m(R(t));
        }
        function C(t, e = !1) {
          return g(R(t), e);
        }
        function O(t) {
          return T(A(t));
        }
        function I(t) {
          return P(A(t));
        }
        function A(t) {
          const e = (t >>> 0).toString(2);
          return W(e);
        }
        function T(t) {
          return y(P(t));
        }
        function P(t) {
          return new Uint8Array(z(t).map((t) => parseInt(t, 2)));
        }
        function N(t) {
          return (
            !('string' !== typeof t || !new RegExp(/^[01]+$/).test(t)) &&
            t.length % 8 === 0
          );
        }
        function j(t, e) {
          return (
            !('string' !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
            (!e || t.length === 2 + 2 * e)
          );
        }
        function L(e) {
          return t.isBuffer(e);
        }
        function B(t) {
          return o.a.strict(t) && !L(t);
        }
        function q(t) {
          return !B(t) && !L(t) && 'undefined' !== typeof t.byteLength;
        }
        function U(t) {
          return L(t)
            ? l
            : B(t)
            ? d
            : q(t)
            ? f
            : Array.isArray(t)
            ? h
            : typeof t;
        }
        function D(t) {
          return N(t) ? u : j(t) ? a : c;
        }
        function J(...e) {
          const n = t.concat(e);
          return n;
        }
        function F(...t) {
          let e = [];
          return (
            t.forEach((t) => (e = e.concat(Array.from(t)))),
            new Uint8Array([...e])
          );
        }
        function H(t, e = 8) {
          const n = t % e;
          return n ? ((t - n) / e) * e + e : t;
        }
        function z(t, e = 8) {
          const n = W(t).match(new RegExp(`.{${e}}`, 'gi'));
          return Array.from(n || []);
        }
        function W(t, e = 8, n = p) {
          return Y(t, H(t.length, e), n);
        }
        function Y(t, e, n = p) {
          return Z(t, e, !0, n);
        }
        function $(t) {
          return t.replace(/^0x/, '');
        }
        function Q(t) {
          return t.startsWith('0x') ? t : `0x${t}`;
        }
        function K(t) {
          return (t = $(t)), (t = W(t, 2)), t && (t = Q(t)), t;
        }
        function V(t) {
          const e = t.startsWith('0x');
          return (
            (t = $(t)), (t = t.startsWith(p) ? t.substring(1) : t), e ? Q(t) : t
          );
        }
        function Z(t, e, n, r = p) {
          const o = e - t.length;
          let i = t;
          if (o > 0) {
            const e = r.repeat(o);
            i = n ? e + t : t + e;
          }
          return i;
        }
      }.call(this, n('HDXh').Buffer));
    },
    '7uVY': function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return '[object Array]' == n.call(t);
        };
    },
    AZa5: function (t, e, n) {
      var r = n('Wogr'),
        o = n('u/Db');
      function i(t) {
        (this.mode = o.BYTE), (this.data = r.from(t));
      }
      (i.getBitsLength = function (t) {
        return 8 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          for (var e = 0, n = this.data.length; e < n; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = i);
    },
    BCVQ: function (t, e) {
      var n = '[0-9]+',
        r = '[A-Z $%*+\\-./:]+',
        o =
          '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
      o = o.replace(/u/g, '\\u');
      var i = '(?:(?![A-Z0-9 $%*+\\-./:]|' + o + ')(?:.|[\r\n]))+';
      (e.KANJI = new RegExp(o, 'g')),
        (e.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')),
        (e.BYTE = new RegExp(i, 'g')),
        (e.NUMERIC = new RegExp(n, 'g')),
        (e.ALPHANUMERIC = new RegExp(r, 'g'));
      var s = new RegExp('^' + o + '$'),
        a = new RegExp('^' + n + '$'),
        c = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
      (e.testKanji = function (t) {
        return s.test(t);
      }),
        (e.testNumeric = function (t) {
          return a.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return c.test(t);
        });
    },
    BFhG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('RM/z');
      n('xesE');
      async function o(t, e) {
        const n = await Object(r['c'])(t, e);
        return n;
      }
    },
    BJdv: function (t, e, n) {
      (function (e) {
        var r = n('qXd6').strict;
        t.exports = function (t) {
          if (r(t)) {
            var n = e.from(t.buffer);
            return (
              t.byteLength !== t.buffer.byteLength &&
                (n = n.slice(t.byteOffset, t.byteOffset + t.byteLength)),
              n
            );
          }
          return e.from(t);
        };
      }.call(this, n('HDXh').Buffer));
    },
    E9nw: function (t, e) {
      t.exports = function () {
        var t = document.getSelection();
        if (!t.rangeCount) return function () {};
        for (
          var e = document.activeElement, n = [], r = 0;
          r < t.rangeCount;
          r++
        )
          n.push(t.getRangeAt(r));
        switch (e.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            e.blur();
            break;
          default:
            e = null;
            break;
        }
        return (
          t.removeAllRanges(),
          function () {
            'Caret' === t.type && t.removeAllRanges(),
              t.rangeCount ||
                n.forEach(function (e) {
                  t.addRange(e);
                }),
              e && e.focus();
          }
        );
      };
    },
    ELBg: function (t, e, n) {
      'use strict';
      var r = {
        single_source_shortest_paths: function (t, e, n) {
          var o = {},
            i = {};
          i[e] = 0;
          var s,
            a,
            c,
            u,
            l,
            h,
            d,
            f,
            p,
            m = r.PriorityQueue.make();
          m.push(e, 0);
          while (!m.empty())
            for (c in ((s = m.pop()),
            (a = s.value),
            (u = s.cost),
            (l = t[a] || {}),
            l))
              l.hasOwnProperty(c) &&
                ((h = l[c]),
                (d = u + h),
                (f = i[c]),
                (p = 'undefined' === typeof i[c]),
                (p || f > d) && ((i[c] = d), m.push(c, d), (o[c] = a)));
          if ('undefined' !== typeof n && 'undefined' === typeof i[n]) {
            var g = ['Could not find a path from ', e, ' to ', n, '.'].join('');
            throw new Error(g);
          }
          return o;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          var n = [],
            r = e;
          while (r) n.push(r), t[r], (r = t[r]);
          return n.reverse(), n;
        },
        find_path: function (t, e, n) {
          var o = r.single_source_shortest_paths(t, e, n);
          return r.extract_shortest_path_from_predecessor_list(o, n);
        },
        PriorityQueue: {
          make: function (t) {
            var e,
              n = r.PriorityQueue,
              o = {};
            for (e in ((t = t || {}), n)) n.hasOwnProperty(e) && (o[e] = n[e]);
            return (o.queue = []), (o.sorter = t.sorter || n.default_sorter), o;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            var n = { value: t, cost: e };
            this.queue.push(n), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = r;
    },
    FdF9: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'useState', function () {
          return V;
        }),
        n.d(e, 'useReducer', function () {
          return Z;
        }),
        n.d(e, 'useEffect', function () {
          return X;
        }),
        n.d(e, 'useLayoutEffect', function () {
          return G;
        }),
        n.d(e, 'useRef', function () {
          return tt;
        }),
        n.d(e, 'useImperativeHandle', function () {
          return et;
        }),
        n.d(e, 'useMemo', function () {
          return nt;
        }),
        n.d(e, 'useCallback', function () {
          return rt;
        }),
        n.d(e, 'useContext', function () {
          return ot;
        }),
        n.d(e, 'useDebugValue', function () {
          return it;
        }),
        n.d(e, 'useErrorBoundary', function () {
          return st;
        }),
        n.d(e, 'createElement', function () {
          return m;
        }),
        n.d(e, 'createContext', function () {
          return U;
        }),
        n.d(e, 'createRef', function () {
          return _;
        }),
        n.d(e, 'Fragment', function () {
          return v;
        }),
        n.d(e, 'Component', function () {
          return y;
        }),
        n.d(e, 'version', function () {
          return qt;
        }),
        n.d(e, 'Children', function () {
          return yt;
        }),
        n.d(e, 'render', function () {
          return Tt;
        }),
        n.d(e, 'hydrate', function () {
          return Pt;
        }),
        n.d(e, 'unmountComponentAtNode', function () {
          return Ft;
        }),
        n.d(e, 'createPortal', function () {
          return Ot;
        }),
        n.d(e, 'createFactory', function () {
          return Ut;
        }),
        n.d(e, 'cloneElement', function () {
          return Jt;
        }),
        n.d(e, 'isValidElement', function () {
          return Dt;
        }),
        n.d(e, 'findDOMNode', function () {
          return Ht;
        }),
        n.d(e, 'PureComponent', function () {
          return pt;
        }),
        n.d(e, 'memo', function () {
          return mt;
        }),
        n.d(e, 'forwardRef', function () {
          return _t;
        }),
        n.d(e, 'unstable_batchedUpdates', function () {
          return zt;
        }),
        n.d(e, 'Suspense', function () {
          return Mt;
        }),
        n.d(e, 'SuspenseList', function () {
          return kt;
        }),
        n.d(e, 'lazy', function () {
          return Et;
        });
      var r,
        o,
        i,
        s,
        a,
        c,
        u,
        l = {},
        h = [],
        d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function f(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function p(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function m(t, e, n) {
        var r,
          o = arguments,
          i = {};
        for (r in e) 'key' !== r && 'ref' !== r && (i[r] = e[r]);
        if (arguments.length > 3)
          for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
        if (
          (null != n && (i.children = n),
          'function' == typeof t && null != t.defaultProps)
        )
          for (r in t.defaultProps)
            void 0 === i[r] && (i[r] = t.defaultProps[r]);
        return g(t, i, e && e.key, e && e.ref, null);
      }
      function g(t, e, n, o, i) {
        var s = {
          type: t,
          props: e,
          key: n,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: i,
        };
        return null == i && (s.__v = s), r.vnode && r.vnode(s), s;
      }
      function _() {
        return {};
      }
      function v(t) {
        return t.children;
      }
      function y(t, e) {
        (this.props = t), (this.context = e);
      }
      function w(t, e) {
        if (null == e) return t.__ ? w(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return 'function' == typeof t.type ? w(t) : null;
      }
      function b(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return b(t);
        }
      }
      function M(t) {
        ((!t.__d && (t.__d = !0) && o.push(t) && !i++) ||
          a !== r.debounceRendering) &&
          ((a = r.debounceRendering) || s)(x);
      }
      function x() {
        for (var t; (i = o.length); )
          (t = o.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (o = []),
            t.some(function (t) {
              var e, n, r, o, i, s, a;
              t.__d &&
                ((s = (i = (e = t).__v).__e),
                (a = e.__P) &&
                  ((n = []),
                  ((r = f({}, i)).__v = r),
                  (o = I(
                    a,
                    i,
                    r,
                    e.__n,
                    void 0 !== a.ownerSVGElement,
                    null,
                    n,
                    null == s ? w(i) : s,
                  )),
                  A(n, i),
                  o != s && b(i)));
            });
      }
      function E(t, e, n, r, o, i, s, a, c) {
        var u,
          d,
          f,
          m,
          g,
          _,
          v,
          y = (n && n.__k) || h,
          b = y.length;
        if (
          (a == l && (a = null != i ? i[0] : b ? w(n, 0) : null),
          (u = 0),
          (e.__k = k(e.__k, function (n) {
            if (null != n) {
              if (
                ((n.__ = e),
                (n.__b = e.__b + 1),
                null === (f = y[u]) ||
                  (f && n.key == f.key && n.type === f.type))
              )
                y[u] = void 0;
              else
                for (d = 0; d < b; d++) {
                  if ((f = y[d]) && n.key == f.key && n.type === f.type) {
                    y[d] = void 0;
                    break;
                  }
                  f = null;
                }
              if (
                ((m = I(t, n, (f = f || l), r, o, i, s, a, c)),
                (d = n.ref) &&
                  f.ref != d &&
                  (v || (v = []),
                  f.ref && v.push(f.ref, null, n),
                  v.push(d, n.__c || m, n)),
                null != m)
              ) {
                var h;
                if ((null == _ && (_ = m), void 0 !== n.__d))
                  (h = n.__d), (n.__d = void 0);
                else if (i == f || m != a || null == m.parentNode) {
                  t: if (null == a || a.parentNode !== t)
                    t.appendChild(m), (h = null);
                  else {
                    for (g = a, d = 0; (g = g.nextSibling) && d < b; d += 2)
                      if (g == m) break t;
                    t.insertBefore(m, a), (h = a);
                  }
                  'option' == e.type && (t.value = '');
                }
                (a = void 0 !== h ? h : m.nextSibling),
                  'function' == typeof e.type && (e.__d = a);
              } else a && f.__e == a && a.parentNode != t && (a = w(f));
            }
            return u++, n;
          })),
          (e.__e = _),
          null != i && 'function' != typeof e.type)
        )
          for (u = i.length; u--; ) null != i[u] && p(i[u]);
        for (u = b; u--; ) null != y[u] && N(y[u], y[u]);
        if (v) for (u = 0; u < v.length; u++) P(v[u], v[++u], v[++u]);
      }
      function k(t, e, n) {
        if ((null == n && (n = []), null == t || 'boolean' == typeof t))
          e && n.push(e(null));
        else if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) k(t[r], e, n);
        else
          n.push(
            e
              ? e(
                  'string' == typeof t || 'number' == typeof t
                    ? g(null, t, null, null, t)
                    : null != t.__e || null != t.__c
                    ? g(t.type, t.props, t.key, null, t.__v)
                    : t,
                )
              : t,
          );
        return n;
      }
      function R(t, e, n, r, o) {
        var i;
        for (i in n)
          'children' === i || 'key' === i || i in e || C(t, i, null, n[i], r);
        for (i in e)
          (o && 'function' != typeof e[i]) ||
            'children' === i ||
            'key' === i ||
            'value' === i ||
            'checked' === i ||
            n[i] === e[i] ||
            C(t, i, e[i], n[i], r);
      }
      function S(t, e, n) {
        '-' === e[0]
          ? t.setProperty(e, n)
          : (t[e] =
              'number' == typeof n && !1 === d.test(e)
                ? n + 'px'
                : null == n
                ? ''
                : n);
      }
      function C(t, e, n, r, o) {
        var i, s, a, c, u;
        if (
          (o
            ? 'className' === e && (e = 'class')
            : 'class' === e && (e = 'className'),
          'style' === e)
        )
          if (((i = t.style), 'string' == typeof n)) i.cssText = n;
          else {
            if (('string' == typeof r && ((i.cssText = ''), (r = null)), r))
              for (c in r) (n && c in n) || S(i, c, '');
            if (n) for (u in n) (r && n[u] === r[u]) || S(i, u, n[u]);
          }
        else
          'o' === e[0] && 'n' === e[1]
            ? ((s = e !== (e = e.replace(/Capture$/, ''))),
              (a = e.toLowerCase()),
              (e = (a in t ? a : e).slice(2)),
              n
                ? (r || t.addEventListener(e, O, s),
                  ((t.l || (t.l = {}))[e] = n))
                : t.removeEventListener(e, O, s))
            : 'list' !== e &&
              'tagName' !== e &&
              'form' !== e &&
              'type' !== e &&
              'size' !== e &&
              !o &&
              e in t
            ? (t[e] = null == n ? '' : n)
            : 'function' != typeof n &&
              'dangerouslySetInnerHTML' !== e &&
              (e !== (e = e.replace(/^xlink:?/, ''))
                ? null == n || !1 === n
                  ? t.removeAttributeNS(
                      'http://www.w3.org/1999/xlink',
                      e.toLowerCase(),
                    )
                  : t.setAttributeNS(
                      'http://www.w3.org/1999/xlink',
                      e.toLowerCase(),
                      n,
                    )
                : null == n || (!1 === n && !/^ar/.test(e))
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
      }
      function O(t) {
        this.l[t.type](r.event ? r.event(t) : t);
      }
      function I(t, e, n, o, i, s, a, c, u) {
        var l,
          h,
          d,
          p,
          m,
          g,
          _,
          w,
          b,
          M,
          x = e.type;
        if (void 0 !== e.constructor) return null;
        (l = r.__b) && l(e);
        try {
          t: if ('function' == typeof x) {
            if (
              ((w = e.props),
              (b = (l = x.contextType) && o[l.__c]),
              (M = l ? (b ? b.props.value : l.__) : o),
              n.__c
                ? (_ = (h = e.__c = n.__c).__ = h.__E)
                : ('prototype' in x && x.prototype.render
                    ? (e.__c = h = new x(w, M))
                    : ((e.__c = h = new y(w, M)),
                      (h.constructor = x),
                      (h.render = j)),
                  b && b.sub(h),
                  (h.props = w),
                  h.state || (h.state = {}),
                  (h.context = M),
                  (h.__n = o),
                  (d = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != x.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = f({}, h.__s)),
                f(h.__s, x.getDerivedStateFromProps(w, h.__s))),
              (p = h.props),
              (m = h.state),
              d)
            )
              null == x.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == x.getDerivedStateFromProps &&
                  w !== p &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(w, M),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(w, h.__s, M)) ||
                  (e.__v === n.__v && !h.__))
              ) {
                for (
                  h.props = w,
                    h.state = h.__s,
                    e.__v !== n.__v && (h.__d = !1),
                    h.__v = e,
                    e.__e = n.__e,
                    e.__k = n.__k,
                    h.__h.length && a.push(h),
                    l = 0;
                  l < e.__k.length;
                  l++
                )
                  e.__k[l] && (e.__k[l].__ = e);
                break t;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(w, h.__s, M),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(p, m, g);
                  });
            }
            (h.context = M),
              (h.props = w),
              (h.state = h.__s),
              (l = r.__r) && l(e),
              (h.__d = !1),
              (h.__v = e),
              (h.__P = t),
              (l = h.render(h.props, h.state, h.context)),
              (e.__k =
                null != l && l.type == v && null == l.key
                  ? l.props.children
                  : Array.isArray(l)
                  ? l
                  : [l]),
              null != h.getChildContext &&
                (o = f(f({}, o), h.getChildContext())),
              d ||
                null == h.getSnapshotBeforeUpdate ||
                (g = h.getSnapshotBeforeUpdate(p, m)),
              E(t, e, n, o, i, s, a, c, u),
              (h.base = e.__e),
              h.__h.length && a.push(h),
              _ && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == s && e.__v === n.__v
              ? ((e.__k = n.__k), (e.__e = n.__e))
              : (e.__e = T(n.__e, e, n, o, i, s, a, u));
          (l = r.diffed) && l(e);
        } catch (t) {
          (e.__v = null), r.__e(t, e, n);
        }
        return e.__e;
      }
      function A(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function T(t, e, n, r, o, i, s, a) {
        var c,
          u,
          d,
          f,
          p,
          m = n.props,
          g = e.props;
        if (((o = 'svg' === e.type || o), null != i))
          for (c = 0; c < i.length; c++)
            if (
              null != (u = i[c]) &&
              ((null === e.type ? 3 === u.nodeType : u.localName === e.type) ||
                t == u)
            ) {
              (t = u), (i[c] = null);
              break;
            }
        if (null == t) {
          if (null === e.type) return document.createTextNode(g);
          (t = o
            ? document.createElementNS('http://www.w3.org/2000/svg', e.type)
            : document.createElement(e.type, g.is && { is: g.is })),
            (i = null),
            (a = !1);
        }
        if (null === e.type) m !== g && t.data != g && (t.data = g);
        else {
          if (
            (null != i && (i = h.slice.call(t.childNodes)),
            (d = (m = n.props || l).dangerouslySetInnerHTML),
            (f = g.dangerouslySetInnerHTML),
            !a)
          ) {
            if (m === l)
              for (m = {}, p = 0; p < t.attributes.length; p++)
                m[t.attributes[p].name] = t.attributes[p].value;
            (f || d) &&
              ((f && d && f.__html == d.__html) ||
                (t.innerHTML = (f && f.__html) || ''));
          }
          R(t, g, m, o, a),
            f
              ? (e.__k = [])
              : ((e.__k = e.props.children),
                E(t, e, n, r, 'foreignObject' !== e.type && o, i, s, l, a)),
            a ||
              ('value' in g &&
                void 0 !== (c = g.value) &&
                c !== t.value &&
                C(t, 'value', c, m.value, !1),
              'checked' in g &&
                void 0 !== (c = g.checked) &&
                c !== t.checked &&
                C(t, 'checked', c, m.checked, !1));
        }
        return t;
      }
      function P(t, e, n) {
        try {
          'function' == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function N(t, e, n) {
        var o, i, s;
        if (
          (r.unmount && r.unmount(t),
          (o = t.ref) && ((o.current && o.current !== t.__e) || P(o, null, e)),
          n || 'function' == typeof t.type || (n = null != (i = t.__e)),
          (t.__e = t.__d = void 0),
          null != (o = t.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          o.base = o.__P = null;
        }
        if ((o = t.__k)) for (s = 0; s < o.length; s++) o[s] && N(o[s], e, n);
        null != i && p(i);
      }
      function j(t, e, n) {
        return this.constructor(t, n);
      }
      function L(t, e, n) {
        var o, i, s;
        r.__ && r.__(t, e),
          (i = (o = n === c) ? null : (n && n.__k) || e.__k),
          (t = m(v, null, [t])),
          (s = []),
          I(
            e,
            ((o ? e : n || e).__k = t),
            i || l,
            l,
            void 0 !== e.ownerSVGElement,
            n && !o ? [n] : i ? null : h.slice.call(e.childNodes),
            s,
            n || l,
            o,
          ),
          A(s, t);
      }
      function B(t, e) {
        L(t, e, c);
      }
      function q(t, e) {
        var n, r;
        for (r in ((e = f(f({}, t.props), e)),
        arguments.length > 2 && (e.children = h.slice.call(arguments, 2)),
        (n = {}),
        e))
          'key' !== r && 'ref' !== r && (n[r] = e[r]);
        return g(t.type, n, e.key || t.key, e.ref || t.ref, null);
      }
      function U(t) {
        var e = {},
          n = {
            __c: '__cC' + u++,
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var r,
                o = this;
              return (
                this.getChildContext ||
                  ((r = []),
                  (this.getChildContext = function () {
                    return (e[n.__c] = o), e;
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    o.props.value !== t.value &&
                      r.some(function (e) {
                        (e.context = t.value), M(e);
                      });
                  }),
                  (this.sub = function (t) {
                    r.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function () {
                      r.splice(r.indexOf(t), 1), e && e.call(t);
                    };
                  })),
                t.children
              );
            },
          };
        return (n.Consumer.contextType = n), (n.Provider.__ = n), n;
      }
      (r = {
        __e: function (t, e) {
          for (var n, r; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  (n.constructor &&
                    null != n.constructor.getDerivedStateFromError &&
                    ((r = !0),
                    n.setState(n.constructor.getDerivedStateFromError(t))),
                  null != n.componentDidCatch &&
                    ((r = !0), n.componentDidCatch(t)),
                  r)
                )
                  return M((n.__E = n));
              } catch (e) {
                t = e;
              }
          throw t;
        },
      }),
        (y.prototype.setState = function (t, e) {
          var n;
          (n =
            this.__s !== this.state
              ? this.__s
              : (this.__s = f({}, this.state))),
            'function' == typeof t && (t = t(n, this.props)),
            t && f(n, t),
            null != t && this.__v && (e && this.__h.push(e), M(this));
        }),
        (y.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), M(this));
        }),
        (y.prototype.render = v),
        (o = []),
        (i = 0),
        (s =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (c = l),
        (u = 0);
      var D,
        J,
        F,
        H = 0,
        z = [],
        W = r.__r,
        Y = r.diffed,
        $ = r.__c,
        Q = r.unmount;
      function K(t, e) {
        r.__h && r.__h(J, t, H || e), (H = 0);
        var n = J.__H || (J.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({}), n.__[t];
      }
      function V(t) {
        return (H = 1), Z(ht, t);
      }
      function Z(t, e, n) {
        var r = K(D++, 2);
        return (
          r.__c ||
            ((r.__c = J),
            (r.__ = [
              n ? n(e) : ht(void 0, e),
              function (e) {
                var n = t(r.__[0], e);
                r.__[0] !== n && ((r.__[0] = n), r.__c.setState({}));
              },
            ])),
          r.__
        );
      }
      function X(t, e) {
        var n = K(D++, 3);
        !r.__s && lt(n.__H, e) && ((n.__ = t), (n.__H = e), J.__H.__h.push(n));
      }
      function G(t, e) {
        var n = K(D++, 4);
        !r.__s && lt(n.__H, e) && ((n.__ = t), (n.__H = e), J.__h.push(n));
      }
      function tt(t) {
        return (
          (H = 5),
          nt(function () {
            return { current: t };
          }, [])
        );
      }
      function et(t, e, n) {
        (H = 6),
          G(
            function () {
              'function' == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t),
          );
      }
      function nt(t, e) {
        var n = K(D++, 7);
        return lt(n.__H, e) ? ((n.__H = e), (n.__h = t), (n.__ = t())) : n.__;
      }
      function rt(t, e) {
        return (
          (H = 8),
          nt(function () {
            return t;
          }, e)
        );
      }
      function ot(t) {
        var e = J.context[t.__c],
          n = K(D++, 9);
        return (
          (n.__c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(J)), e.props.value) : t.__
        );
      }
      function it(t, e) {
        r.useDebugValue && r.useDebugValue(e ? e(t) : t);
      }
      function st(t) {
        var e = K(D++, 10),
          n = V();
        return (
          (e.__ = t),
          J.componentDidCatch ||
            (J.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function at() {
        z.some(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(ct), t.__H.__h.forEach(ut), (t.__H.__h = []);
            } catch (e) {
              return (t.__H.__h = []), r.__e(e, t.__v), !0;
            }
        }),
          (z = []);
      }
      function ct(t) {
        t.t && t.t();
      }
      function ut(t) {
        var e = t.__();
        'function' == typeof e && (t.t = e);
      }
      function lt(t, e) {
        return (
          !t ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function ht(t, e) {
        return 'function' == typeof e ? e(t) : e;
      }
      function dt(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function ft(t, e) {
        for (var n in t) if ('__source' !== n && !(n in e)) return !0;
        for (var r in e) if ('__source' !== r && t[r] !== e[r]) return !0;
        return !1;
      }
      (r.__r = function (t) {
        W && W(t),
          (D = 0),
          (J = t.__c).__H &&
            (J.__H.__h.forEach(ct), J.__H.__h.forEach(ut), (J.__H.__h = []));
      }),
        (r.diffed = function (t) {
          Y && Y(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            n &&
              n.__h.length &&
              ((1 !== z.push(e) && F === r.requestAnimationFrame) ||
                (
                  (F = r.requestAnimationFrame) ||
                  function (t) {
                    var e,
                      n = function () {
                        clearTimeout(r), cancelAnimationFrame(e), setTimeout(t);
                      },
                      r = setTimeout(n, 100);
                    'undefined' != typeof window &&
                      (e = requestAnimationFrame(n));
                  }
                )(at));
          }
        }),
        (r.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(ct),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || ut(t);
                }));
            } catch (n) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                r.__e(n, t.__v);
            }
          }),
            $ && $(t, e);
        }),
        (r.unmount = function (t) {
          Q && Q(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            if (n)
              try {
                n.__.forEach(function (t) {
                  return t.t && t.t();
                });
              } catch (t) {
                r.__e(t, e.__v);
              }
          }
        });
      var pt = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return ((n = t.call(this, e) || this).isPureReactComponent = !0), n;
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (r.prototype.shouldComponentUpdate = function (t, e) {
            return ft(this.props, t) || ft(this.state, e);
          }),
          r
        );
      })(y);
      function mt(t, e) {
        function n(t) {
          var n = this.props.ref,
            r = n == t.ref;
          return (
            !r && n && (n.call ? n(null) : (n.current = null)),
            e ? !e(this.props, t) || !r : ft(this.props, t)
          );
        }
        function r(e) {
          return (this.shouldComponentUpdate = n), m(t, dt({}, e));
        }
        return (
          (r.prototype.isReactComponent = !0),
          (r.displayName = 'Memo(' + (t.displayName || t.name) + ')'),
          (r.t = !0),
          r
        );
      }
      var gt = r.__b;
      function _t(t) {
        function e(e) {
          var n = dt({}, e);
          return delete n.ref, t(n, e.ref);
        }
        return (
          (e.prototype.isReactComponent = e.t = !0),
          (e.displayName = 'ForwardRef(' + (t.displayName || t.name) + ')'),
          e
        );
      }
      r.__b = function (t) {
        t.type && t.type.t && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
          gt && gt(t);
      };
      var vt = function (t, e) {
          return t
            ? k(t).reduce(function (t, n, r) {
                return t.concat(e(n, r));
              }, [])
            : null;
        },
        yt = {
          map: vt,
          forEach: vt,
          count: function (t) {
            return t ? k(t).length : 0;
          },
          only: function (t) {
            if (1 !== (t = k(t)).length)
              throw new Error('Children.only() expects only one child.');
            return t[0];
          },
          toArray: k,
        },
        wt = r.__e;
      function bt(t) {
        return (
          t && (((t = dt({}, t)).__c = null), (t.__k = t.__k && t.__k.map(bt))),
          t
        );
      }
      function Mt() {
        (this.__u = 0), (this.o = null), (this.__b = null);
      }
      function xt(t) {
        var e = t.__.__c;
        return e && e.u && e.u(t);
      }
      function Et(t) {
        var e, n, r;
        function o(o) {
          if (
            (e ||
              (e = t()).then(
                function (t) {
                  n = t.default || t;
                },
                function (t) {
                  r = t;
                },
              ),
            r)
          )
            throw r;
          if (!n) throw e;
          return m(n, o);
        }
        return (o.displayName = 'Lazy'), (o.t = !0), o;
      }
      function kt() {
        (this.i = null), (this.l = null);
      }
      (r.__e = function (t, e, n) {
        if (t.then)
          for (var r, o = e; (o = o.__); )
            if ((r = o.__c) && r.__c) return r.__c(t, e.__c);
        wt(t, e, n);
      }),
        ((Mt.prototype = new y()).__c = function (t, e) {
          var n = this;
          null == n.o && (n.o = []), n.o.push(e);
          var r = xt(n.__v),
            o = !1,
            i = function () {
              o || ((o = !0), r ? r(s) : s());
            };
          (e.__c = e.componentWillUnmount),
            (e.componentWillUnmount = function () {
              i(), e.__c && e.__c();
            });
          var s = function () {
            var t;
            if (!--n.__u)
              for (
                n.__v.__k[0] = n.state.u, n.setState({ u: (n.__b = null) });
                (t = n.o.pop());

              )
                t.forceUpdate();
          };
          n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }), t.then(i, i);
        }),
        (Mt.prototype.render = function (t, e) {
          return (
            this.__b && ((this.__v.__k[0] = bt(this.__b)), (this.__b = null)),
            [m(y, null, e.u ? null : t.children), e.u && t.fallback]
          );
        });
      var Rt = function (t, e, n) {
        if (
          (++n[1] === n[0] && t.l.delete(e),
          t.props.revealOrder && ('t' !== t.props.revealOrder[0] || !t.l.size))
        )
          for (n = t.i; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            t.i = n = n[2];
          }
      };
      ((kt.prototype = new y()).u = function (t) {
        var e = this,
          n = xt(e.__v),
          r = e.l.get(t);
        return (
          r[0]++,
          function (o) {
            var i = function () {
              e.props.revealOrder ? (r.push(o), Rt(e, t, r)) : o();
            };
            n ? n(i) : i();
          }
        );
      }),
        (kt.prototype.render = function (t) {
          (this.i = null), (this.l = new Map());
          var e = k(t.children);
          t.revealOrder && 'b' === t.revealOrder[0] && e.reverse();
          for (var n = e.length; n--; )
            this.l.set(e[n], (this.i = [1, 0, this.i]));
          return t.children;
        }),
        (kt.prototype.componentDidUpdate = kt.prototype.componentDidMount =
          function () {
            var t = this;
            t.l.forEach(function (e, n) {
              Rt(t, n, e);
            });
          });
      var St = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.getChildContext = function () {
            return this.props.context;
          }),
          (e.render = function (t) {
            return t.children;
          }),
          t
        );
      })();
      function Ct(t) {
        var e = this,
          n = t.container,
          r = m(St, { context: e.context }, t.vnode);
        return (
          e.s &&
            e.s !== n &&
            (e.v.parentNode && e.s.removeChild(e.v), N(e.h), (e.p = !1)),
          t.vnode
            ? e.p
              ? ((n.__k = e.__k), L(r, n), (e.__k = n.__k))
              : ((e.v = document.createTextNode('')),
                B('', n),
                n.appendChild(e.v),
                (e.p = !0),
                (e.s = n),
                L(r, n, e.v),
                (e.__k = e.v.__k))
            : e.p && (e.v.parentNode && e.s.removeChild(e.v), N(e.h)),
          (e.h = r),
          (e.componentWillUnmount = function () {
            e.v.parentNode && e.s.removeChild(e.v), N(e.h);
          }),
          null
        );
      }
      function Ot(t, e) {
        return m(Ct, { vnode: t, container: e });
      }
      var It =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      y.prototype.isReactComponent = {};
      var At =
        ('undefined' != typeof Symbol &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        60103;
      function Tt(t, e, n) {
        if (null == e.__k) for (; e.firstChild; ) e.removeChild(e.firstChild);
        return L(t, e), 'function' == typeof n && n(), t ? t.__c : null;
      }
      function Pt(t, e, n) {
        return B(t, e), 'function' == typeof n && n(), t ? t.__c : null;
      }
      var Nt = r.event;
      function jt(t, e) {
        t['UNSAFE_' + e] &&
          !t[e] &&
          Object.defineProperty(t, e, {
            configurable: !1,
            get: function () {
              return this['UNSAFE_' + e];
            },
            set: function (t) {
              this['UNSAFE_' + e] = t;
            },
          });
      }
      r.event = function (t) {
        Nt && (t = Nt(t)), (t.persist = function () {});
        var e = !1,
          n = !1,
          r = t.stopPropagation;
        t.stopPropagation = function () {
          r.call(t), (e = !0);
        };
        var o = t.preventDefault;
        return (
          (t.preventDefault = function () {
            o.call(t), (n = !0);
          }),
          (t.isPropagationStopped = function () {
            return e;
          }),
          (t.isDefaultPrevented = function () {
            return n;
          }),
          (t.nativeEvent = t)
        );
      };
      var Lt = {
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        Bt = r.vnode;
      r.vnode = function (t) {
        t.$$typeof = At;
        var e = t.type,
          n = t.props;
        if (e) {
          if (
            (n.class != n.className &&
              ((Lt.enumerable = 'className' in n),
              null != n.className && (n.class = n.className),
              Object.defineProperty(n, 'className', Lt)),
            'function' != typeof e)
          ) {
            var r, o, i;
            for (i in (n.defaultValue &&
              void 0 !== n.value &&
              (n.value || 0 === n.value || (n.value = n.defaultValue),
              delete n.defaultValue),
            Array.isArray(n.value) &&
              n.multiple &&
              'select' === e &&
              (k(n.children).forEach(function (t) {
                -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0);
              }),
              delete n.value),
            n))
              if ((r = It.test(i))) break;
            if (r)
              for (i in ((o = t.props = {}), n))
                o[It.test(i) ? i.replace(/[A-Z0-9]/, '-$&').toLowerCase() : i] =
                  n[i];
          }
          !(function (e) {
            var n = t.type,
              r = t.props;
            if (r && 'string' == typeof n) {
              var o = {};
              for (var i in r)
                /^on(Ani|Tra|Tou)/.test(i) &&
                  ((r[i.toLowerCase()] = r[i]), delete r[i]),
                  (o[i.toLowerCase()] = i);
              if (
                (o.ondoubleclick &&
                  ((r.ondblclick = r[o.ondoubleclick]),
                  delete r[o.ondoubleclick]),
                o.onbeforeinput &&
                  ((r.onbeforeinput = r[o.onbeforeinput]),
                  delete r[o.onbeforeinput]),
                o.onchange &&
                  ('textarea' === n ||
                    ('input' === n.toLowerCase() &&
                      !/^fil|che|ra/i.test(r.type))))
              ) {
                var s = o.oninput || 'oninput';
                r[s] || ((r[s] = r[o.onchange]), delete r[o.onchange]);
              }
            }
          })(),
            'function' == typeof e &&
              !e.m &&
              e.prototype &&
              (jt(e.prototype, 'componentWillMount'),
              jt(e.prototype, 'componentWillReceiveProps'),
              jt(e.prototype, 'componentWillUpdate'),
              (e.m = !0));
        }
        Bt && Bt(t);
      };
      var qt = '16.8.0';
      function Ut(t) {
        return m.bind(null, t);
      }
      function Dt(t) {
        return !!t && t.$$typeof === At;
      }
      function Jt(t) {
        return Dt(t) ? q.apply(null, arguments) : t;
      }
      function Ft(t) {
        return !!t.__k && (L(null, t), !0);
      }
      function Ht(t) {
        return (t && (t.base || (1 === t.nodeType && t))) || null;
      }
      var zt = function (t, e) {
        return t(e);
      };
      e['default'] = {
        useState: V,
        useReducer: Z,
        useEffect: X,
        useLayoutEffect: G,
        useRef: tt,
        useImperativeHandle: et,
        useMemo: nt,
        useCallback: rt,
        useContext: ot,
        useDebugValue: it,
        version: '16.8.0',
        Children: yt,
        render: Tt,
        hydrate: Tt,
        unmountComponentAtNode: Ft,
        createPortal: Ot,
        createElement: m,
        createContext: U,
        createFactory: Ut,
        cloneElement: Jt,
        createRef: _,
        Fragment: v,
        isValidElement: Dt,
        findDOMNode: Ht,
        Component: y,
        PureComponent: pt,
        memo: mt,
        forwardRef: _t,
        unstable_batchedUpdates: zt,
        Suspense: Mt,
        SuspenseList: kt,
        lazy: Et,
      };
    },
    FmZn: function (t, e, n) {
      'use strict';
      (function (t) {
        var r = n('m4Dm'),
          o = n('dYBg');
        const i = 'undefined' !== typeof t.WebSocket ? t.WebSocket : n('RmUe');
        class s {
          constructor(t) {
            if (
              ((this.opts = t),
              (this._queue = []),
              (this._events = []),
              (this._subscriptions = []),
              (this._protocol = t.protocol),
              (this._version = t.version),
              (this._url = ''),
              (this._netMonitor = null),
              (this._socket = null),
              (this._nextSocket = null),
              (this._subscriptions = t.subscriptions || []),
              (this._netMonitor = t.netMonitor || new o['a']()),
              !t.url || 'string' !== typeof t.url)
            )
              throw new Error('Missing or invalid WebSocket url');
            (this._url = t.url),
              this._netMonitor.on('online', () => this._socketCreate());
          }
          set readyState(t) {}
          get readyState() {
            return this._socket ? this._socket.readyState : -1;
          }
          set connecting(t) {}
          get connecting() {
            return 0 === this.readyState;
          }
          set connected(t) {}
          get connected() {
            return 1 === this.readyState;
          }
          set closing(t) {}
          get closing() {
            return 2 === this.readyState;
          }
          set closed(t) {}
          get closed() {
            return 3 === this.readyState;
          }
          open() {
            this._socketCreate();
          }
          close() {
            this._socketClose();
          }
          send(t, e, n) {
            if (!e || 'string' !== typeof e)
              throw new Error('Missing or invalid topic field');
            this._socketSend({
              topic: e,
              type: 'pub',
              payload: t,
              silent: !!n,
            });
          }
          subscribe(t) {
            this._socketSend({
              topic: t,
              type: 'sub',
              payload: '',
              silent: !0,
            });
          }
          on(t, e) {
            this._events.push({ event: t, callback: e });
          }
          _socketCreate() {
            if (this._nextSocket) return;
            const t = a(this._url, this._protocol, this._version);
            if (((this._nextSocket = new i(t)), !this._nextSocket))
              throw new Error('Failed to create socket');
            (this._nextSocket.onmessage = (t) => this._socketReceive(t)),
              (this._nextSocket.onopen = () => this._socketOpen()),
              (this._nextSocket.onerror = (t) => this._socketError(t)),
              (this._nextSocket.onclose = () => {
                setTimeout(() => {
                  (this._nextSocket = null), this._socketCreate();
                }, 1e3);
              });
          }
          _socketOpen() {
            this._socketClose(),
              (this._socket = this._nextSocket),
              (this._nextSocket = null),
              this._queueSubscriptions(),
              this._pushQueue();
          }
          _socketClose() {
            this._socket &&
              ((this._socket.onclose = () => {}), this._socket.close());
          }
          _socketSend(t) {
            const e = JSON.stringify(t);
            this._socket && 1 === this._socket.readyState
              ? this._socket.send(e)
              : (this._setToQueue(t), this._socketCreate());
          }
          async _socketReceive(t) {
            let e;
            try {
              e = JSON.parse(t.data);
            } catch (n) {
              return;
            }
            if (
              (this._socketSend({
                topic: e.topic,
                type: 'ack',
                payload: '',
                silent: !0,
              }),
              this._socket && 1 === this._socket.readyState)
            ) {
              const t = this._events.filter((t) => 'message' === t.event);
              t && t.length && t.forEach((t) => t.callback(e));
            }
          }
          _socketError(t) {
            const e = this._events.filter((t) => 'error' === t.event);
            e && e.length && e.forEach((e) => e.callback(t));
          }
          _queueSubscriptions() {
            const t = this._subscriptions;
            t.forEach((t) =>
              this._queue.push({
                topic: t,
                type: 'sub',
                payload: '',
                silent: !0,
              }),
            ),
              (this._subscriptions = this.opts.subscriptions || []);
          }
          _setToQueue(t) {
            this._queue.push(t);
          }
          _pushQueue() {
            const t = this._queue;
            t.forEach((t) => this._socketSend(t)), (this._queue = []);
          }
        }
        function a(t, e, n) {
          var o, i;
          const s = t.startsWith('https')
              ? t.replace('https', 'wss')
              : t.startsWith('http')
              ? t.replace('http', 'ws')
              : t,
            a = s.split('?'),
            c = Object(r['n'])()
              ? {
                  protocol: e,
                  version: n,
                  env: 'browser',
                  host:
                    (null === (o = Object(r['k'])()) || void 0 === o
                      ? void 0
                      : o.host) || '',
                }
              : {
                  protocol: e,
                  version: n,
                  env:
                    (null === (i = Object(r['g'])()) || void 0 === i
                      ? void 0
                      : i.name) || '',
                },
            u = Object(r['a'])(Object(r['l'])(a[1] || ''), c);
          return a[0] + '?' + u;
        }
        e['a'] = s;
      }.call(this, n('IyRk')));
    },
    GM3Q: function (t, e, n) {
      'use strict';
      n('rNYn');
      var r = n('y9Ti');
      n.d(e, 'parseConnectionError', function () {
        return r['d'];
      });
      var o = n('R5de');
      n.o(o, 'IJsonRpcProvider') &&
        n.d(e, 'IJsonRpcProvider', function () {
          return o['IJsonRpcProvider'];
        }),
        n.o(o, 'formatJsonRpcError') &&
          n.d(e, 'formatJsonRpcError', function () {
            return o['formatJsonRpcError'];
          }),
        n.o(o, 'formatJsonRpcRequest') &&
          n.d(e, 'formatJsonRpcRequest', function () {
            return o['formatJsonRpcRequest'];
          }),
        n.o(o, 'isHttpUrl') &&
          n.d(e, 'isHttpUrl', function () {
            return o['isHttpUrl'];
          }),
        n.o(o, 'isJsonRpcError') &&
          n.d(e, 'isJsonRpcError', function () {
            return o['isJsonRpcError'];
          }),
        n.o(o, 'isJsonRpcResponse') &&
          n.d(e, 'isJsonRpcResponse', function () {
            return o['isJsonRpcResponse'];
          }),
        n.o(o, 'payloadId') &&
          n.d(e, 'payloadId', function () {
            return o['payloadId'];
          });
      var i = n('ya2q');
      n.d(e, 'formatJsonRpcError', function () {
        return i['a'];
      }),
        n.d(e, 'formatJsonRpcRequest', function () {
          return i['b'];
        }),
        n.d(e, 'payloadId', function () {
          return i['c'];
        });
      n('qA3A');
      var s = n('/KFh');
      n.o(s, 'IJsonRpcProvider') &&
        n.d(e, 'IJsonRpcProvider', function () {
          return s['IJsonRpcProvider'];
        }),
        n.o(s, 'isHttpUrl') &&
          n.d(e, 'isHttpUrl', function () {
            return s['isHttpUrl'];
          }),
        n.o(s, 'isJsonRpcError') &&
          n.d(e, 'isJsonRpcError', function () {
            return s['isJsonRpcError'];
          }),
        n.o(s, 'isJsonRpcResponse') &&
          n.d(e, 'isJsonRpcResponse', function () {
            return s['isJsonRpcResponse'];
          });
      var a = n('eJYJ');
      n.d(e, 'isHttpUrl', function () {
        return a['a'];
      });
      var c = n('ytBo');
      n.d(e, 'isJsonRpcError', function () {
        return c['a'];
      }),
        n.d(e, 'isJsonRpcResponse', function () {
          return c['b'];
        });
    },
    J6Nv: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    JzKC: function (t, e, n) {
      var r = n('Wogr'),
        o = n('aZ40');
      (e.mul = function (t, e) {
        for (var n = r.alloc(t.length + e.length - 1), i = 0; i < t.length; i++)
          for (var s = 0; s < e.length; s++) n[i + s] ^= o.mul(t[i], e[s]);
        return n;
      }),
        (e.mod = function (t, e) {
          var n = r.from(t);
          while (n.length - e.length >= 0) {
            for (var i = n[0], s = 0; s < e.length; s++) n[s] ^= o.mul(e[s], i);
            var a = 0;
            while (a < n.length && 0 === n[a]) a++;
            n = n.slice(a);
          }
          return n;
        }),
        (e.generateECPolynomial = function (t) {
          for (var n = r.from([1]), i = 0; i < t; i++)
            n = e.mul(n, [1, o.exp(i)]);
          return n;
        });
    },
    Kqv8: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'detectEnv', function () {
          return s;
        }),
        n.d(e, 'detectOS', function () {
          return a;
        }),
        n.d(e, 'isAndroid', function () {
          return c;
        }),
        n.d(e, 'isIOS', function () {
          return u;
        }),
        n.d(e, 'isMobile', function () {
          return l;
        }),
        n.d(e, 'isNode', function () {
          return h;
        }),
        n.d(e, 'isBrowser', function () {
          return d;
        }),
        n.d(e, 'getFromWindow', function () {
          return f;
        }),
        n.d(e, 'getFromWindowOrThrow', function () {
          return p;
        }),
        n.d(e, 'getDocumentOrThrow', function () {
          return m;
        }),
        n.d(e, 'getDocument', function () {
          return g;
        }),
        n.d(e, 'getNavigatorOrThrow', function () {
          return _;
        }),
        n.d(e, 'getNavigator', function () {
          return v;
        }),
        n.d(e, 'getLocationOrThrow', function () {
          return y;
        }),
        n.d(e, 'getLocation', function () {
          return w;
        }),
        n.d(e, 'getCryptoOrThrow', function () {
          return b;
        }),
        n.d(e, 'getCrypto', function () {
          return M;
        }),
        n.d(e, 'getLocalStorageOrThrow', function () {
          return x;
        }),
        n.d(e, 'getLocalStorage', function () {
          return E;
        }),
        n.d(e, 'getClientMeta', function () {
          return k;
        }),
        n.d(e, 'safeJsonParse', function () {
          return S;
        }),
        n.d(e, 'safeJsonStringify', function () {
          return C;
        }),
        n.d(e, 'setLocal', function () {
          return O;
        }),
        n.d(e, 'getLocal', function () {
          return I;
        }),
        n.d(e, 'removeLocal', function () {
          return A;
        }),
        n.d(e, 'mobileLinkChoiceKey', function () {
          return T;
        }),
        n.d(e, 'formatIOSMobile', function () {
          return P;
        }),
        n.d(e, 'saveMobileLinkInfo', function () {
          return N;
        }),
        n.d(e, 'getMobileRegistryEntry', function () {
          return j;
        }),
        n.d(e, 'getMobileLinkRegistry', function () {
          return L;
        }),
        n.d(e, 'getWalletRegistryUrl', function () {
          return q;
        }),
        n.d(e, 'getDappRegistryUrl', function () {
          return U;
        }),
        n.d(e, 'formatMobileRegistryEntry', function () {
          return D;
        }),
        n.d(e, 'formatMobileRegistry', function () {
          return J;
        });
      var r = n('QOWI'),
        o = n('quPa'),
        i = n('e0ae');
      function s(t) {
        return Object(i['a'])(t);
      }
      function a() {
        const t = s();
        return t && t.os ? t.os : void 0;
      }
      function c() {
        const t = a();
        return !!t && t.toLowerCase().includes('android');
      }
      function u() {
        const t = a();
        return (
          !!t &&
          (t.toLowerCase().includes('ios') ||
            (t.toLowerCase().includes('mac') && navigator.maxTouchPoints > 1))
        );
      }
      function l() {
        const t = a();
        return !!t && (c() || u());
      }
      function h() {
        const t = s(),
          e = !(!t || !t.name) && 'node' === t.name.toLowerCase();
        return e;
      }
      function d() {
        const t = !h() && !!v();
        return t;
      }
      const f = o['getFromWindow'],
        p = o['getFromWindowOrThrow'],
        m = o['getDocumentOrThrow'],
        g = o['getDocument'],
        _ = o['getNavigatorOrThrow'],
        v = o['getNavigator'],
        y = o['getLocationOrThrow'],
        w = o['getLocation'],
        b = o['getCryptoOrThrow'],
        M = o['getCrypto'],
        x = o['getLocalStorageOrThrow'],
        E = o['getLocalStorage'];
      function k() {
        return r['getWindowMetadata']();
      }
      var R = n('y+U5');
      const S = R['a'],
        C = R['b'];
      function O(t, e) {
        const n = C(e),
          r = E();
        r && r.setItem(t, n);
      }
      function I(t) {
        let e = null,
          n = null;
        const r = E();
        return r && (n = r.getItem(t)), (e = n ? S(n) : n), e;
      }
      function A(t) {
        const e = E();
        e && e.removeItem(t);
      }
      const T = 'WALLETCONNECT_DEEPLINK_CHOICE';
      function P(t, e) {
        const n = encodeURIComponent(t);
        return e.universalLink
          ? `${e.universalLink}/wc?uri=${n}`
          : e.deepLink
          ? `${e.deepLink}${e.deepLink.endsWith(':') ? '//' : '/'}wc?uri=${n}`
          : '';
      }
      function N(t) {
        const e = t.href.split('?')[0];
        O(T, Object.assign(Object.assign({}, t), { href: e }));
      }
      function j(t, e) {
        return t.filter((t) =>
          t.name.toLowerCase().includes(e.toLowerCase()),
        )[0];
      }
      function L(t, e) {
        let n = t;
        return e && (n = e.map((e) => j(t, e)).filter(Boolean)), n;
      }
      const B = 'https://registry.walletconnect.com';
      function q() {
        return B + '/api/v2/wallets';
      }
      function U() {
        return B + '/api/v2/dapps';
      }
      function D(t, e = 'mobile') {
        var n;
        return {
          name: t.name || '',
          shortName: t.metadata.shortName || '',
          color: t.metadata.colors.primary || '',
          logo: null !== (n = t.image_url.sm) && void 0 !== n ? n : '',
          universalLink: t[e].universal || '',
          deepLink: t[e].native || '',
        };
      }
      function J(t, e = 'mobile') {
        return Object.values(t)
          .filter((t) => !!t[e].universal || !!t[e].native)
          .map((t) => D(t, e));
      }
    },
    Lk1n: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = {};
      n.r(r),
        n.d(r, 'generateKey', function () {
          return Z;
        }),
        n.d(r, 'verifyHmac', function () {
          return X;
        }),
        n.d(r, 'encrypt', function () {
          return G;
        }),
        n.d(r, 'decrypt', function () {
          return tt;
        });
      var o = n('6mOj'),
        i = n.n(o),
        s = n('+qE3'),
        a = n('GM3Q');
      class c extends a['IJsonRpcProvider'] {
        constructor(t) {
          super(t),
            (this.events = new s['EventEmitter']()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(t)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(t = this.connection) {
          await this.open(t);
        }
        async disconnect() {
          await this.close();
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async request(t, e) {
          return this.requestStrict(
            Object(a['formatJsonRpcRequest'])(t.method, t.params || []),
            e,
          );
        }
        async requestStrict(t, e) {
          return new Promise(async (n, r) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (o) {
                r(o);
              }
            this.events.on(`${t.id}`, (t) => {
              Object(a['isJsonRpcError'])(t) ? r(t.error) : n(t.result);
            });
            try {
              await this.connection.send(t, e);
            } catch (o) {
              r(o);
            }
          });
        }
        setConnection(t = this.connection) {
          return t;
        }
        onPayload(t) {
          this.events.emit('payload', t),
            Object(a['isJsonRpcResponse'])(t)
              ? this.events.emit(`${t.id}`, t)
              : this.events.emit('message', { type: t.method, data: t.params });
        }
        async open(t = this.connection) {
          (this.connection === t && this.connection.connected) ||
            (this.connection.connected && this.close(),
            'string' === typeof t &&
              (await this.connection.open(t), (t = this.connection)),
            (this.connection = this.setConnection(t)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit('connect'));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on('payload', (t) => this.onPayload(t)),
            this.connection.on('close', () => this.events.emit('disconnect')),
            this.connection.on('error', (t) => this.events.emit('error', t)),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      var u = n('XWHH'),
        l = n.n(u),
        h = n('y+U5');
      const d = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        f = 'POST',
        p = { headers: d, method: f },
        m = 10;
      class g {
        constructor(t) {
          if (
            ((this.url = t),
            (this.events = new s['EventEmitter']()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !Object(a['isHttpUrl'])(t))
          )
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${t}`,
            );
          this.url = t;
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open(t = this.url) {
          await this.register(t);
        }
        async close() {
          if (!this.isAvailable) throw new Error('Connection already closed');
          this.onClose();
        }
        async send(t, e) {
          this.isAvailable || (await this.register());
          try {
            const e = Object(h['b'])(t),
              n = await l()(
                this.url,
                Object.assign(Object.assign({}, p), { body: e }),
              ),
              r = await n.json();
            this.onPayload({ data: r });
          } catch (n) {
            this.onError(t.id, n);
          }
        }
        async register(t = this.url) {
          if (!Object(a['isHttpUrl'])(t))
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${t}`,
            );
          if (this.registering) {
            const t = this.events.getMaxListeners();
            return (
              (this.events.listenerCount('register_error') >= t ||
                this.events.listenerCount('open') >= t) &&
                this.events.setMaxListeners(t + 1),
              new Promise((t, e) => {
                this.events.once('register_error', (t) => {
                  this.resetMaxListeners(), e(t);
                }),
                  this.events.once('open', () => {
                    if (
                      (this.resetMaxListeners(),
                      'undefined' === typeof this.isAvailable)
                    )
                      return e(
                        new Error('HTTP connection is missing or invalid'),
                      );
                    t();
                  });
              })
            );
          }
          (this.url = t), (this.registering = !0);
          try {
            const e = Object(h['b'])({
              id: 1,
              jsonrpc: '2.0',
              method: 'test',
              params: [],
            });
            await l()(t, Object.assign(Object.assign({}, p), { body: e })),
              this.onOpen();
          } catch (e) {
            const t = this.parseError(e);
            throw (this.events.emit('register_error', t), this.onClose(), t);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit('open');
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit('close');
        }
        onPayload(t) {
          if ('undefined' === typeof t.data) return;
          const e =
            'string' === typeof t.data ? Object(h['a'])(t.data) : t.data;
          this.events.emit('payload', e);
        }
        onError(t, e) {
          const n = this.parseError(e),
            r = n.message || n.toString(),
            o = Object(a['formatJsonRpcError'])(t, r);
          this.events.emit('payload', o);
        }
        parseError(t, e = this.url) {
          return Object(a['parseConnectionError'])(t, e, 'HTTP');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > m && this.events.setMaxListeners(m);
        }
      }
      var _ = n('m4Dm'),
        v = n('kXOL'),
        y = n.n(v),
        w = n('FmZn');
      const b = 'Session currently connected',
        M = 'Session currently disconnected',
        x = 'Session Rejected',
        E = 'Missing JSON RPC response',
        k = 'JSON-RPC success response must include "result" field',
        R = 'JSON-RPC error response must include "error" field',
        S = 'JSON RPC request must have valid "method" value',
        C = 'JSON RPC request must have valid "id" value',
        O = 'Missing one of the required parameters: bridge / uri / session',
        I = 'JSON RPC response format is invalid',
        A = 'URI format is invalid',
        T = 'QRCode Modal not provided',
        P = 'User close QRCode Modal';
      class N {
        constructor() {
          this._eventEmitters = [];
        }
        subscribe(t) {
          this._eventEmitters.push(t);
        }
        unsubscribe(t) {
          this._eventEmitters = this._eventEmitters.filter(
            (e) => e.event !== t,
          );
        }
        trigger(t) {
          let e,
            n = [];
          (e = Object(_['p'])(t)
            ? t.method
            : Object(_['r'])(t) || Object(_['q'])(t)
            ? `response:${t.id}`
            : Object(_['o'])(t)
            ? t.event
            : ''),
            e && (n = this._eventEmitters.filter((t) => t.event === e)),
            (n && n.length) ||
              Object(_['t'])(e) ||
              Object(_['o'])(e) ||
              (n = this._eventEmitters.filter(
                (t) => 'call_request' === t.event,
              )),
            n.forEach((e) => {
              if (Object(_['q'])(t)) {
                const n = new Error(t.error.message);
                e.callback(n, null);
              } else e.callback(null, t);
            });
        }
      }
      var j = N;
      class L {
        constructor(t = 'walletconnect') {
          this.storageId = t;
        }
        getSession() {
          let t = null;
          const e = Object(_['j'])(this.storageId);
          return e && Object(_['v'])(e) && (t = e), t;
        }
        setSession(t) {
          return Object(_['C'])(this.storageId, t), t;
        }
        removeSession() {
          Object(_['B'])(this.storageId);
        }
      }
      var B = L;
      const q = 'walletconnect.org',
        U = 'abcdefghijklmnopqrstuvwxyz0123456789',
        D = U.split('').map((t) => `https://${t}.bridge.walletconnect.org`);
      function J(t) {
        let e = t.indexOf('//') > -1 ? t.split('/')[2] : t.split('/')[0];
        return (e = e.split(':')[0]), (e = e.split('?')[0]), e;
      }
      function F(t) {
        return J(t).split('.').slice(-2).join('.');
      }
      function H() {
        return Math.floor(Math.random() * D.length);
      }
      function z() {
        return D[H()];
      }
      function W(t) {
        return F(t) === q;
      }
      function Y(t) {
        return W(t) ? z() : t;
      }
      class $ {
        constructor(t) {
          if (
            ((this.protocol = 'wc'),
            (this.version = 1),
            (this._bridge = ''),
            (this._key = null),
            (this._clientId = ''),
            (this._clientMeta = null),
            (this._peerId = ''),
            (this._peerMeta = null),
            (this._handshakeId = 0),
            (this._handshakeTopic = ''),
            (this._connected = !1),
            (this._accounts = []),
            (this._chainId = 0),
            (this._networkId = 0),
            (this._rpcUrl = ''),
            (this._eventManager = new j()),
            (this._clientMeta =
              Object(_['i'])() || t.connectorOpts.clientMeta || null),
            (this._cryptoLib = t.cryptoLib),
            (this._sessionStorage =
              t.sessionStorage || new B(t.connectorOpts.storageId)),
            (this._qrcodeModal = t.connectorOpts.qrcodeModal),
            (this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions),
            (this._signingMethods = [
              ..._['D'],
              ...(t.connectorOpts.signingMethods || []),
            ]),
            !t.connectorOpts.bridge &&
              !t.connectorOpts.uri &&
              !t.connectorOpts.session)
          )
            throw new Error(O);
          t.connectorOpts.bridge && (this.bridge = Y(t.connectorOpts.bridge)),
            t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
          const e = t.connectorOpts.session || this._getStorageSession();
          e && (this.session = e),
            this.handshakeId &&
              this._subscribeToSessionResponse(
                this.handshakeId,
                'Session request rejected',
              ),
            (this._transport =
              t.transport ||
              new w['a']({
                protocol: this.protocol,
                version: this.version,
                url: this.bridge,
                subscriptions: [this.clientId],
              })),
            this._subscribeToInternalEvents(),
            this._initTransport(),
            t.connectorOpts.uri && this._subscribeToSessionRequest(),
            t.pushServerOpts && this._registerPushServer(t.pushServerOpts);
        }
        set bridge(t) {
          t && (this._bridge = t);
        }
        get bridge() {
          return this._bridge;
        }
        set key(t) {
          if (!t) return;
          const e = Object(_['e'])(t);
          this._key = e;
        }
        get key() {
          if (this._key) {
            const t = Object(_['c'])(this._key, !0);
            return t;
          }
          return '';
        }
        set clientId(t) {
          t && (this._clientId = t);
        }
        get clientId() {
          let t = this._clientId;
          return t || (t = this._clientId = Object(_['E'])()), this._clientId;
        }
        set peerId(t) {
          t && (this._peerId = t);
        }
        get peerId() {
          return this._peerId;
        }
        set clientMeta(t) {}
        get clientMeta() {
          let t = this._clientMeta;
          return t || (t = this._clientMeta = Object(_['i'])()), t;
        }
        set peerMeta(t) {
          this._peerMeta = t;
        }
        get peerMeta() {
          const t = this._peerMeta;
          return t;
        }
        set handshakeTopic(t) {
          t && (this._handshakeTopic = t);
        }
        get handshakeTopic() {
          return this._handshakeTopic;
        }
        set handshakeId(t) {
          t && (this._handshakeId = t);
        }
        get handshakeId() {
          return this._handshakeId;
        }
        get uri() {
          const t = this._formatUri();
          return t;
        }
        set uri(t) {
          if (!t) return;
          const { handshakeTopic: e, bridge: n, key: r } = this._parseUri(t);
          (this.handshakeTopic = e), (this.bridge = n), (this.key = r);
        }
        set chainId(t) {
          this._chainId = t;
        }
        get chainId() {
          const t = this._chainId;
          return t;
        }
        set networkId(t) {
          this._networkId = t;
        }
        get networkId() {
          const t = this._networkId;
          return t;
        }
        set accounts(t) {
          this._accounts = t;
        }
        get accounts() {
          const t = this._accounts;
          return t;
        }
        set rpcUrl(t) {
          this._rpcUrl = t;
        }
        get rpcUrl() {
          const t = this._rpcUrl;
          return t;
        }
        set connected(t) {}
        get connected() {
          return this._connected;
        }
        set pending(t) {}
        get pending() {
          return !!this._handshakeTopic;
        }
        get session() {
          return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic,
          };
        }
        set session(t) {
          t &&
            ((this._connected = t.connected),
            (this.accounts = t.accounts),
            (this.chainId = t.chainId),
            (this.bridge = t.bridge),
            (this.key = t.key),
            (this.clientId = t.clientId),
            (this.clientMeta = t.clientMeta),
            (this.peerId = t.peerId),
            (this.peerMeta = t.peerMeta),
            (this.handshakeId = t.handshakeId),
            (this.handshakeTopic = t.handshakeTopic));
        }
        on(t, e) {
          const n = { event: t, callback: e };
          this._eventManager.subscribe(n);
        }
        off(t) {
          this._eventManager.unsubscribe(t);
        }
        async createInstantRequest(t) {
          this._key = await this._generateKey();
          const e = this._formatRequest({
            method: 'wc_instantRequest',
            params: [
              {
                peerId: this.clientId,
                peerMeta: this.clientMeta,
                request: this._formatRequest(t),
              },
            ],
          });
          (this.handshakeId = e.id),
            (this.handshakeTopic = Object(_['E'])()),
            this._eventManager.trigger({
              event: 'display_uri',
              params: [this.uri],
            }),
            this.on('modal_closed', () => {
              throw new Error(P);
            });
          const n = () => {
            this.killSession();
          };
          try {
            const t = await this._sendCallRequest(e);
            return t && n(), t;
          } catch (r) {
            throw (n(), r);
          }
        }
        async connect(t) {
          if (!this._qrcodeModal) throw new Error(T);
          return this.connected
            ? { chainId: this.chainId, accounts: this.accounts }
            : (await this.createSession(t),
              new Promise(async (t, e) => {
                this.on('modal_closed', () => e(new Error(P))),
                  this.on('connect', (n, r) => {
                    if (n) return e(n);
                    t(r.params[0]);
                  });
              }));
        }
        async createSession(t) {
          if (this._connected) throw new Error(b);
          if (this.pending) return;
          this._key = await this._generateKey();
          const e = this._formatRequest({
            method: 'wc_sessionRequest',
            params: [
              {
                peerId: this.clientId,
                peerMeta: this.clientMeta,
                chainId: t && t.chainId ? t.chainId : null,
              },
            ],
          });
          (this.handshakeId = e.id),
            (this.handshakeTopic = Object(_['E'])()),
            this._sendSessionRequest(e, 'Session update rejected', {
              topic: this.handshakeTopic,
            }),
            this._eventManager.trigger({
              event: 'display_uri',
              params: [this.uri],
            });
        }
        approveSession(t) {
          if (this._connected) throw new Error(b);
          (this.chainId = t.chainId),
            (this.accounts = t.accounts),
            (this.networkId = t.networkId || 0),
            (this.rpcUrl = t.rpcUrl || '');
          const e = {
              approved: !0,
              chainId: this.chainId,
              networkId: this.networkId,
              accounts: this.accounts,
              rpcUrl: this.rpcUrl,
              peerId: this.clientId,
              peerMeta: this.clientMeta,
            },
            n = { id: this.handshakeId, jsonrpc: '2.0', result: e };
          this._sendResponse(n),
            (this._connected = !0),
            this._setStorageSession(),
            this._eventManager.trigger({
              event: 'connect',
              params: [
                {
                  peerId: this.peerId,
                  peerMeta: this.peerMeta,
                  chainId: this.chainId,
                  accounts: this.accounts,
                },
              ],
            });
        }
        rejectSession(t) {
          if (this._connected) throw new Error(b);
          const e = t && t.message ? t.message : x,
            n = this._formatResponse({
              id: this.handshakeId,
              error: { message: e },
            });
          this._sendResponse(n),
            (this._connected = !1),
            this._eventManager.trigger({
              event: 'disconnect',
              params: [{ message: e }],
            }),
            this._removeStorageSession();
        }
        updateSession(t) {
          if (!this._connected) throw new Error(M);
          (this.chainId = t.chainId),
            (this.accounts = t.accounts),
            (this.networkId = t.networkId || 0),
            (this.rpcUrl = t.rpcUrl || '');
          const e = {
              approved: !0,
              chainId: this.chainId,
              networkId: this.networkId,
              accounts: this.accounts,
              rpcUrl: this.rpcUrl,
            },
            n = this._formatRequest({
              method: 'wc_sessionUpdate',
              params: [e],
            });
          this._sendSessionRequest(n, 'Session update rejected'),
            this._eventManager.trigger({
              event: 'session_update',
              params: [{ chainId: this.chainId, accounts: this.accounts }],
            }),
            this._manageStorageSession();
        }
        async killSession(t) {
          const e = t ? t.message : 'Session Disconnected',
            n = {
              approved: !1,
              chainId: null,
              networkId: null,
              accounts: null,
            },
            r = this._formatRequest({
              method: 'wc_sessionUpdate',
              params: [n],
            });
          await this._sendRequest(r), this._handleSessionDisconnect(e);
        }
        async sendTransaction(t) {
          if (!this._connected) throw new Error(M);
          const e = Object(_['y'])(t),
            n = this._formatRequest({
              method: 'eth_sendTransaction',
              params: [e],
            }),
            r = await this._sendCallRequest(n);
          return r;
        }
        async signTransaction(t) {
          if (!this._connected) throw new Error(M);
          const e = Object(_['y'])(t),
            n = this._formatRequest({
              method: 'eth_signTransaction',
              params: [e],
            }),
            r = await this._sendCallRequest(n);
          return r;
        }
        async signMessage(t) {
          if (!this._connected) throw new Error(M);
          const e = this._formatRequest({ method: 'eth_sign', params: t }),
            n = await this._sendCallRequest(e);
          return n;
        }
        async signPersonalMessage(t) {
          if (!this._connected) throw new Error(M);
          t = Object(_['x'])(t);
          const e = this._formatRequest({ method: 'personal_sign', params: t }),
            n = await this._sendCallRequest(e);
          return n;
        }
        async signTypedData(t) {
          if (!this._connected) throw new Error(M);
          const e = this._formatRequest({
              method: 'eth_signTypedData',
              params: t,
            }),
            n = await this._sendCallRequest(e);
          return n;
        }
        async updateChain(t) {
          if (!this._connected)
            throw new Error('Session currently disconnected');
          const e = this._formatRequest({
              method: 'wallet_updateChain',
              params: [t],
            }),
            n = await this._sendCallRequest(e);
          return n;
        }
        unsafeSend(t, e) {
          return (
            this._sendRequest(t, e),
            this._eventManager.trigger({
              event: 'call_request_sent',
              params: [{ request: t, options: e }],
            }),
            new Promise((e, n) => {
              this._subscribeToResponse(t.id, (t, r) => {
                if (t) n(t);
                else {
                  if (!r) throw new Error(E);
                  e(r);
                }
              });
            })
          );
        }
        async sendCustomRequest(t, e) {
          if (!this._connected) throw new Error(M);
          switch (t.method) {
            case 'eth_accounts':
              return this.accounts;
            case 'eth_chainId':
              return Object(_['f'])(this.chainId);
            case 'eth_sendTransaction':
            case 'eth_signTransaction':
              t.params && (t.params[0] = Object(_['y'])(t.params[0]));
              break;
            case 'personal_sign':
              t.params && (t.params = Object(_['x'])(t.params));
              break;
            default:
              break;
          }
          const n = this._formatRequest(t),
            r = await this._sendCallRequest(n, e);
          return r;
        }
        approveRequest(t) {
          if (!Object(_['r'])(t)) throw new Error(k);
          {
            const e = this._formatResponse(t);
            this._sendResponse(e);
          }
        }
        rejectRequest(t) {
          if (!Object(_['q'])(t)) throw new Error(R);
          {
            const e = this._formatResponse(t);
            this._sendResponse(e);
          }
        }
        transportClose() {
          this._transport.close();
        }
        async _sendRequest(t, e) {
          const n = this._formatRequest(t),
            r = await this._encrypt(n),
            o =
              'undefined' !==
              typeof (null === e || void 0 === e ? void 0 : e.topic)
                ? e.topic
                : this.peerId,
            i = JSON.stringify(r),
            s =
              'undefined' !==
              typeof (null === e || void 0 === e
                ? void 0
                : e.forcePushNotification)
                ? !e.forcePushNotification
                : Object(_['u'])(n);
          this._transport.send(i, o, s);
        }
        async _sendResponse(t) {
          const e = await this._encrypt(t),
            n = this.peerId,
            r = JSON.stringify(e),
            o = !0;
          this._transport.send(r, n, o);
        }
        async _sendSessionRequest(t, e, n) {
          this._sendRequest(t, n), this._subscribeToSessionResponse(t.id, e);
        }
        _sendCallRequest(t, e) {
          return (
            this._sendRequest(t, e),
            this._eventManager.trigger({
              event: 'call_request_sent',
              params: [{ request: t, options: e }],
            }),
            this._subscribeToCallResponse(t.id)
          );
        }
        _formatRequest(t) {
          if ('undefined' === typeof t.method) throw new Error(S);
          const e = {
            id: 'undefined' === typeof t.id ? Object(_['A'])() : t.id,
            jsonrpc: '2.0',
            method: t.method,
            params: 'undefined' === typeof t.params ? [] : t.params,
          };
          return e;
        }
        _formatResponse(t) {
          if ('undefined' === typeof t.id) throw new Error(C);
          const e = { id: t.id, jsonrpc: '2.0' };
          if (Object(_['q'])(t)) {
            const n = Object(_['h'])(t.error),
              r = Object.assign(Object.assign(Object.assign({}, e), t), {
                error: n,
              });
            return r;
          }
          if (Object(_['r'])(t)) {
            const n = Object.assign(Object.assign({}, e), t);
            return n;
          }
          throw new Error(I);
        }
        _handleSessionDisconnect(t) {
          const e = t || 'Session Disconnected';
          this._connected ||
            (this._qrcodeModal && this._qrcodeModal.close(),
            Object(_['B'])(_['w'])),
            this._connected && (this._connected = !1),
            this._handshakeId && (this._handshakeId = 0),
            this._handshakeTopic && (this._handshakeTopic = ''),
            this._peerId && (this._peerId = ''),
            this._eventManager.trigger({
              event: 'disconnect',
              params: [{ message: e }],
            }),
            this._removeStorageSession(),
            this.transportClose();
        }
        _handleSessionResponse(t, e) {
          e && e.approved
            ? (this._connected
                ? (e.chainId && (this.chainId = e.chainId),
                  e.accounts && (this.accounts = e.accounts),
                  this._eventManager.trigger({
                    event: 'session_update',
                    params: [
                      { chainId: this.chainId, accounts: this.accounts },
                    ],
                  }))
                : ((this._connected = !0),
                  e.chainId && (this.chainId = e.chainId),
                  e.accounts && (this.accounts = e.accounts),
                  e.peerId && !this.peerId && (this.peerId = e.peerId),
                  e.peerMeta && !this.peerMeta && (this.peerMeta = e.peerMeta),
                  this._eventManager.trigger({
                    event: 'connect',
                    params: [
                      {
                        peerId: this.peerId,
                        peerMeta: this.peerMeta,
                        chainId: this.chainId,
                        accounts: this.accounts,
                      },
                    ],
                  })),
              this._manageStorageSession())
            : this._handleSessionDisconnect(t);
        }
        async _handleIncomingMessages(t) {
          const e = [this.clientId, this.handshakeTopic];
          if (!e.includes(t.topic)) return;
          let n;
          try {
            n = JSON.parse(t.payload);
          } catch (o) {
            return;
          }
          const r = await this._decrypt(n);
          r && this._eventManager.trigger(r);
        }
        _subscribeToSessionRequest() {
          this._transport.subscribe(this.handshakeTopic);
        }
        _subscribeToResponse(t, e) {
          this.on(`response:${t}`, e);
        }
        _subscribeToSessionResponse(t, e) {
          this._subscribeToResponse(t, (t, n) => {
            t
              ? this._handleSessionResponse(t.message)
              : Object(_['r'])(n)
              ? this._handleSessionResponse(e, n.result)
              : n.error && n.error.message
              ? this._handleSessionResponse(n.error.message)
              : this._handleSessionResponse(e);
          });
        }
        _subscribeToCallResponse(t) {
          return new Promise((e, n) => {
            this._subscribeToResponse(t, (t, r) => {
              t
                ? n(t)
                : Object(_['r'])(r)
                ? e(r.result)
                : r.error && r.error.message
                ? n(r.error)
                : n(new Error(I));
            });
          });
        }
        _subscribeToInternalEvents() {
          this.on('display_uri', () => {
            this._qrcodeModal &&
              this._qrcodeModal.open(
                this.uri,
                () => {
                  this._eventManager.trigger({
                    event: 'modal_closed',
                    params: [],
                  });
                },
                this._qrcodeModalOptions,
              );
          }),
            this.on('connect', () => {
              this._qrcodeModal && this._qrcodeModal.close();
            }),
            this.on('call_request_sent', (t, e) => {
              const { request: n } = e.params[0];
              if (Object(_['s'])() && this._signingMethods.includes(n.method)) {
                const t = Object(_['j'])(_['w']);
                t && (window.location.href = t.href);
              }
            }),
            this.on('wc_sessionRequest', (t, e) => {
              t &&
                this._eventManager.trigger({
                  event: 'error',
                  params: [
                    { code: 'SESSION_REQUEST_ERROR', message: t.toString() },
                  ],
                }),
                (this.handshakeId = e.id),
                (this.peerId = e.params[0].peerId),
                (this.peerMeta = e.params[0].peerMeta);
              const n = Object.assign(Object.assign({}, e), {
                method: 'session_request',
              });
              this._eventManager.trigger(n);
            }),
            this.on('wc_sessionUpdate', (t, e) => {
              t && this._handleSessionResponse(t.message),
                this._handleSessionResponse(
                  'Session disconnected',
                  e.params[0],
                );
            });
        }
        _initTransport() {
          this._transport.on('message', (t) => this._handleIncomingMessages(t)),
            this._transport.on('open', () =>
              this._eventManager.trigger({
                event: 'transport_open',
                params: [],
              }),
            ),
            this._transport.on('close', () =>
              this._eventManager.trigger({
                event: 'transport_close',
                params: [],
              }),
            ),
            this._transport.on('error', () =>
              this._eventManager.trigger({
                event: 'transport_error',
                params: ['Websocket connection failed'],
              }),
            ),
            this._transport.open();
        }
        _formatUri() {
          const t = this.protocol,
            e = this.handshakeTopic,
            n = this.version,
            r = encodeURIComponent(this.bridge),
            o = this.key,
            i = `${t}:${e}@${n}?bridge=${r}&key=${o}`;
          return i;
        }
        _parseUri(t) {
          const e = Object(_['z'])(t);
          if (e.protocol === this.protocol) {
            if (!e.handshakeTopic)
              throw Error('Invalid or missing handshakeTopic parameter value');
            const t = e.handshakeTopic;
            if (!e.bridge)
              throw Error('Invalid or missing bridge url parameter value');
            const n = decodeURIComponent(e.bridge);
            if (!e.key) throw Error('Invalid or missing key parameter value');
            const r = e.key;
            return { handshakeTopic: t, bridge: n, key: r };
          }
          throw new Error(A);
        }
        async _generateKey() {
          if (this._cryptoLib) {
            const t = await this._cryptoLib.generateKey();
            return t;
          }
          return null;
        }
        async _encrypt(t) {
          const e = this._key;
          if (this._cryptoLib && e) {
            const n = await this._cryptoLib.encrypt(t, e);
            return n;
          }
          return null;
        }
        async _decrypt(t) {
          const e = this._key;
          if (this._cryptoLib && e) {
            const n = await this._cryptoLib.decrypt(t, e);
            return n;
          }
          return null;
        }
        _getStorageSession() {
          let t = null;
          return (
            this._sessionStorage && (t = this._sessionStorage.getSession()), t
          );
        }
        _setStorageSession() {
          this._sessionStorage && this._sessionStorage.setSession(this.session);
        }
        _removeStorageSession() {
          this._sessionStorage && this._sessionStorage.removeSession();
        }
        _manageStorageSession() {
          this._connected
            ? this._setStorageSession()
            : this._removeStorageSession();
        }
        _registerPushServer(t) {
          if (!t.url || 'string' !== typeof t.url)
            throw Error(
              'Invalid or missing pushServerOpts.url parameter value',
            );
          if (!t.type || 'string' !== typeof t.type)
            throw Error(
              'Invalid or missing pushServerOpts.type parameter value',
            );
          if (!t.token || 'string' !== typeof t.token)
            throw Error(
              'Invalid or missing pushServerOpts.token parameter value',
            );
          const e = {
            bridge: this.bridge,
            topic: this.clientId,
            type: t.type,
            token: t.token,
            peerName: '',
            language: t.language || '',
          };
          this.on('connect', async (n, r) => {
            if (n) throw n;
            if (t.peerMeta) {
              const t = r.params[0].peerMeta.name;
              e.peerName = t;
            }
            try {
              const n = await fetch(`${t.url}/new`, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(e),
                }),
                r = await n.json();
              if (!r.success) throw Error('Failed to register in Push Server');
            } catch (n) {
              throw Error('Failed to register in Push Server');
            }
          });
        }
      }
      var Q = $,
        K = n('hFr/'),
        V = n('7FJf');
      async function Z(t) {
        const e = (t || 256) / 8,
          n = K['randomBytes'](e),
          r = Object(_['d'])(V['b'](n));
        return r;
      }
      async function X(t, e) {
        const n = V['n'](t.data),
          r = V['n'](t.iv),
          o = V['n'](t.hmac),
          i = V['c'](o, !1),
          s = V['j'](n, r),
          a = await K['hmacSha256Sign'](e, s),
          c = V['c'](a, !1);
        return V['x'](i) === V['x'](c);
      }
      async function G(t, e, n) {
        const r = V['f'](Object(_['b'])(e)),
          o = n || (await Z(128)),
          i = V['f'](Object(_['b'])(o)),
          s = V['c'](i, !1),
          a = JSON.stringify(t),
          c = V['z'](a),
          u = await K['aesCbcEncrypt'](i, r, c),
          l = V['c'](u, !1),
          h = V['j'](u, i),
          d = await K['hmacSha256Sign'](r, h),
          f = V['c'](d, !1);
        return { data: l, hmac: f, iv: s };
      }
      async function tt(t, e) {
        const n = V['f'](Object(_['b'])(e));
        if (!n) throw new Error('Missing key: required for decryption');
        const r = await X(t, n);
        if (!r) return null;
        const o = V['n'](t.data),
          i = V['n'](t.iv),
          s = await K['aesCbcDecrypt'](i, n, o),
          a = V['e'](s);
        let c;
        try {
          c = JSON.parse(a);
        } catch (u) {
          return null;
        }
        return c;
      }
      class et extends Q {
        constructor(t, e) {
          super({ cryptoLib: r, connectorOpts: t, pushServerOpts: e });
        }
      }
      var nt = et,
        rt = n('dFyl'),
        ot = n.n(rt),
        it = n('zy0H');
      class st extends it['IJsonRpcConnection'] {
        constructor(t) {
          super(),
            (this.events = new y.a()),
            (this.accounts = []),
            (this.chainId = 1),
            (this.pending = !1),
            (this.bridge = 'https://bridge.walletconnect.org'),
            (this.qrcode = !0),
            (this.qrcodeModalOptions = void 0),
            (this.opts = t),
            (this.chainId =
              (null === t || void 0 === t ? void 0 : t.chainId) ||
              this.chainId),
            (this.wc = this.register(t));
        }
        get connected() {
          return 'undefined' !== typeof this.wc && this.wc.connected;
        }
        get connecting() {
          return this.pending;
        }
        get connector() {
          return (this.wc = this.register(this.opts)), this.wc;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open(t) {
          if (!this.connected)
            return new Promise((e, n) => {
              this.on('error', (t) => {
                n(t);
              }),
                this.on('open', () => {
                  e();
                }),
                this.create(t);
            });
          this.onOpen();
        }
        async close() {
          'undefined' !== typeof this.wc &&
            (this.wc.connected && this.wc.killSession(), this.onClose());
        }
        async send(t) {
          (this.wc = this.register(this.opts)),
            this.connected || (await this.open()),
            this.sendPayload(t)
              .then((t) => this.events.emit('payload', t))
              .catch((e) =>
                this.events.emit(
                  'payload',
                  Object(a['formatJsonRpcError'])(t.id, e.message),
                ),
              );
        }
        register(t) {
          if (this.wc) return this.wc;
          (this.opts = t || this.opts),
            (this.bridge = (null === t || void 0 === t ? void 0 : t.connector)
              ? t.connector.bridge
              : (null === t || void 0 === t ? void 0 : t.bridge) ||
                'https://bridge.walletconnect.org'),
            (this.qrcode =
              'undefined' ===
                typeof (null === t || void 0 === t ? void 0 : t.qrcode) ||
              !1 !== t.qrcode),
            (this.chainId =
              'undefined' !==
              typeof (null === t || void 0 === t ? void 0 : t.chainId)
                ? t.chainId
                : this.chainId),
            (this.qrcodeModalOptions =
              null === t || void 0 === t ? void 0 : t.qrcodeModalOptions);
          const e = {
            bridge: this.bridge,
            qrcodeModal: this.qrcode ? ot.a : void 0,
            qrcodeModalOptions: this.qrcodeModalOptions,
            storageId: null === t || void 0 === t ? void 0 : t.storageId,
            signingMethods:
              null === t || void 0 === t ? void 0 : t.signingMethods,
            clientMeta: null === t || void 0 === t ? void 0 : t.clientMeta,
          };
          if (
            ((this.wc =
              'undefined' !==
              typeof (null === t || void 0 === t ? void 0 : t.connector)
                ? t.connector
                : new nt(e)),
            'undefined' === typeof this.wc)
          )
            throw new Error('Failed to register WalletConnect connector');
          return (
            this.wc.accounts.length && (this.accounts = this.wc.accounts),
            this.wc.chainId && (this.chainId = this.wc.chainId),
            this.registerConnectorEvents(),
            this.wc
          );
        }
        onOpen(t) {
          (this.pending = !1), t && (this.wc = t), this.events.emit('open');
        }
        onClose() {
          (this.pending = !1),
            this.wc && (this.wc = void 0),
            this.events.emit('close');
        }
        onError(t, e = 'Failed or Rejected Request', n = -32e3, r) {
          const o = {
            id: t.id,
            jsonrpc: t.jsonrpc,
            error: { code: n, message: e },
          };
          return (
            'undefined' !== typeof r && (o.error.data = r),
            this.events.emit('payload', o),
            o
          );
        }
        create(t) {
          (this.wc = this.register(this.opts)),
            (this.chainId = t || this.chainId),
            this.connected ||
              this.pending ||
              ((this.pending = !0),
              this.registerConnectorEvents(),
              this.wc
                .createSession({ chainId: this.chainId })
                .then(() => this.events.emit('created'))
                .catch((t) => this.events.emit('error', t)));
        }
        registerConnectorEvents() {
          (this.wc = this.register(this.opts)),
            this.wc.on('connect', (t) => {
              var e, n;
              t
                ? this.events.emit('error', t)
                : ((this.accounts =
                    (null === (e = this.wc) || void 0 === e
                      ? void 0
                      : e.accounts) || []),
                  (this.chainId =
                    (null === (n = this.wc) || void 0 === n
                      ? void 0
                      : n.chainId) || this.chainId),
                  this.onOpen());
            }),
            this.wc.on('disconnect', (t) => {
              t ? this.events.emit('error', t) : this.onClose();
            }),
            this.wc.on('modal_closed', () => {
              this.events.emit('error', new Error('User closed modal'));
            }),
            this.wc.on('session_update', (t, e) => {
              const { accounts: n, chainId: r } = e.params[0];
              (!this.accounts || (n && this.accounts !== n)) &&
                ((this.accounts = n), this.events.emit('accountsChanged', n)),
                (!this.chainId || (r && this.chainId !== r)) &&
                  ((this.chainId = r), this.events.emit('chainChanged', r));
            });
        }
        async sendPayload(t) {
          this.wc = this.register(this.opts);
          try {
            const e = await this.wc.unsafeSend(t);
            return this.sanitizeResponse(e);
          } catch (e) {
            return this.onError(t, e.message);
          }
        }
        sanitizeResponse(t) {
          return 'undefined' !== typeof t.error &&
            'undefined' === typeof t.error.code
            ? Object(a['formatJsonRpcError'])(
                t.id,
                t.error.message,
                t.error.data,
              )
            : t;
        }
      }
      class at {
        constructor(t) {
          (this.events = new i.a()),
            (this.rpc = {
              infuraId: null === t || void 0 === t ? void 0 : t.infuraId,
              custom: null === t || void 0 === t ? void 0 : t.rpc,
            }),
            (this.signer = new c(new st(t)));
          const e =
            this.signer.connection.chainId ||
            (null === t || void 0 === t ? void 0 : t.chainId) ||
            1;
          (this.http = this.setHttpProvider(e)), this.registerEventListeners();
        }
        get connected() {
          return this.signer.connection.connected;
        }
        get connector() {
          return this.signer.connection.connector;
        }
        get accounts() {
          return this.signer.connection.accounts;
        }
        get chainId() {
          return this.signer.connection.chainId;
        }
        get rpcUrl() {
          var t;
          return (
            (null === (t = this.http) || void 0 === t ? void 0 : t.connection)
              .url || ''
          );
        }
        async request(t) {
          switch (t.method) {
            case 'eth_requestAccounts':
              return await this.connect(), this.signer.connection.accounts;
            case 'eth_accounts':
              return this.signer.connection.accounts;
            case 'eth_chainId':
              return this.signer.connection.chainId;
            default:
              break;
          }
          if (_['D'].includes(t.method)) return this.signer.request(t);
          if ('undefined' === typeof this.http)
            throw new Error(
              `Cannot request JSON-RPC method (${t.method}) without provided rpc url`,
            );
          return this.http.request(t);
        }
        sendAsync(t, e) {
          this.request(t)
            .then((t) => e(null, t))
            .catch((t) => e(t, void 0));
        }
        async enable() {
          const t = await this.request({ method: 'eth_requestAccounts' });
          return t;
        }
        async connect() {
          this.signer.connection.connected || (await this.signer.connect());
        }
        async disconnect() {
          this.signer.connection.connected && (await this.signer.disconnect());
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        get isWalletConnect() {
          return !0;
        }
        registerEventListeners() {
          this.signer.connection.on('accountsChanged', (t) => {
            this.events.emit('accountsChanged', t);
          }),
            this.signer.connection.on('chainChanged', (t) => {
              (this.http = this.setHttpProvider(t)),
                this.events.emit('chainChanged', t);
            }),
            this.signer.on('disconnect', () => {
              this.events.emit('disconnect');
            });
        }
        setHttpProvider(t) {
          const e = Object(_['m'])(t, this.rpc);
          if ('undefined' === typeof e) return;
          const n = new c(new g(e));
          return n;
        }
      }
      e['default'] = at;
    },
    Lzq4: function (t, e, n) {
      var r = n('u/Db'),
        o = n('e/Dd');
      function i(t) {
        (this.mode = r.KANJI), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 13 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e < this.data.length; e++) {
            var n = o.toSJIS(this.data[e]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else {
              if (!(n >= 57408 && n <= 60351))
                throw new Error(
                  'Invalid SJIS character: ' +
                    this.data[e] +
                    '\nMake sure your charset is UTF-8',
                );
              n -= 49472;
            }
            (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
          }
        }),
        (t.exports = i);
    },
    MkrG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      class r {}
    },
    NPxG: function (t, e, n) {
      var r = n('ekOh'),
        o = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        i = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case r.L:
            return o[4 * (t - 1) + 0];
          case r.M:
            return o[4 * (t - 1) + 1];
          case r.Q:
            return o[4 * (t - 1) + 2];
          case r.H:
            return o[4 * (t - 1) + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case r.L:
              return i[4 * (t - 1) + 0];
            case r.M:
              return i[4 * (t - 1) + 1];
            case r.Q:
              return i[4 * (t - 1) + 2];
            case r.H:
              return i[4 * (t - 1) + 3];
            default:
              return;
          }
        });
    },
    Pmem: function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
          return '%'.concat(t.charCodeAt(0).toString(16).toUpperCase());
        });
      };
    },
    QAZZ: function (t, e, n) {
      var r = n('Rb7d');
      function o(t, e) {
        var n = t.a / 255,
          r = e + '="' + t.hex + '"';
        return n < 1
          ? r + ' ' + e + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function i(t, e, n) {
        var r = t + e;
        return 'undefined' !== typeof n && (r += ' ' + n), r;
      }
      function s(t, e, n) {
        for (var r = '', o = 0, s = !1, a = 0, c = 0; c < t.length; c++) {
          var u = Math.floor(c % e),
            l = Math.floor(c / e);
          u || s || (s = !0),
            t[c]
              ? (a++,
                (c > 0 && u > 0 && t[c - 1]) ||
                  ((r += s ? i('M', u + n, 0.5 + l + n) : i('m', o, 0)),
                  (o = 0),
                  (s = !1)),
                (u + 1 < e && t[c + 1]) || ((r += i('h', a)), (a = 0)))
              : o++;
        }
        return r;
      }
      e.render = function (t, e, n) {
        var i = r.getOptions(e),
          a = t.modules.size,
          c = t.modules.data,
          u = a + 2 * i.margin,
          l = i.color.light.a
            ? '<path ' +
              o(i.color.light, 'fill') +
              ' d="M0 0h' +
              u +
              'v' +
              u +
              'H0z"/>'
            : '',
          h =
            '<path ' +
            o(i.color.dark, 'stroke') +
            ' d="' +
            s(c, a, i.margin) +
            '"/>',
          d = 'viewBox="0 0 ' + u + ' ' + u + '"',
          f = i.width
            ? 'width="' + i.width + '" height="' + i.width + '" '
            : '',
          p =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            f +
            d +
            ' shape-rendering="crispEdges">' +
            l +
            h +
            '</svg>\n';
        return 'function' === typeof n && n(null, p), p;
      };
    },
    QOWI: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getWindowMetadata = void 0);
      const r = n('quPa');
      function o() {
        let t, e;
        try {
          (t = r.getDocumentOrThrow()), (e = r.getLocationOrThrow());
        } catch (d) {
          return null;
        }
        function n() {
          const n = t.getElementsByTagName('link'),
            r = [];
          for (let t = 0; t < n.length; t++) {
            const o = n[t],
              i = o.getAttribute('rel');
            if (i && i.toLowerCase().indexOf('icon') > -1) {
              const t = o.getAttribute('href');
              if (t)
                if (
                  -1 === t.toLowerCase().indexOf('https:') &&
                  -1 === t.toLowerCase().indexOf('http:') &&
                  0 !== t.indexOf('//')
                ) {
                  let n = e.protocol + '//' + e.host;
                  if (0 === t.indexOf('/')) n += t;
                  else {
                    const r = e.pathname.split('/');
                    r.pop();
                    const o = r.join('/');
                    n += o + '/' + t;
                  }
                  r.push(n);
                } else if (0 === t.indexOf('//')) {
                  const n = e.protocol + t;
                  r.push(n);
                } else r.push(t);
            }
          }
          return r;
        }
        function o(...e) {
          const n = t.getElementsByTagName('meta');
          for (let t = 0; t < n.length; t++) {
            const r = n[t],
              o = ['itemprop', 'property', 'name']
                .map((t) => r.getAttribute(t))
                .filter((t) => !!t && e.includes(t));
            if (o.length && o) {
              const t = r.getAttribute('content');
              if (t) return t;
            }
          }
          return '';
        }
        function i() {
          let e = o('name', 'og:site_name', 'og:title', 'twitter:title');
          return e || (e = t.title), e;
        }
        function s() {
          const t = o(
            'description',
            'og:description',
            'twitter:description',
            'keywords',
          );
          return t;
        }
        const a = i(),
          c = s(),
          u = e.origin,
          l = n(),
          h = { description: c, url: u, icons: l, name: a };
        return h;
      }
      e.getWindowMetadata = o;
    },
    QUaw: function (t, e, n) {
      var r = n('Rb7d');
      function o(t, e, n) {
        t.clearRect(0, 0, e.width, e.height),
          e.style || (e.style = {}),
          (e.height = n),
          (e.width = n),
          (e.style.height = n + 'px'),
          (e.style.width = n + 'px');
      }
      function i() {
        try {
          return document.createElement('canvas');
        } catch (t) {
          throw new Error('You need to specify a canvas element');
        }
      }
      (e.render = function (t, e, n) {
        var s = n,
          a = e;
        'undefined' !== typeof s ||
          (e && e.getContext) ||
          ((s = e), (e = void 0)),
          e || (a = i()),
          (s = r.getOptions(s));
        var c = r.getImageWidth(t.modules.size, s),
          u = a.getContext('2d'),
          l = u.createImageData(c, c);
        return (
          r.qrToImageData(l.data, t, s), o(u, a, c), u.putImageData(l, 0, 0), a
        );
      }),
        (e.renderToDataURL = function (t, n, r) {
          var o = r;
          'undefined' !== typeof o ||
            (n && n.getContext) ||
            ((o = n), (n = void 0)),
            o || (o = {});
          var i = e.render(t, n, o),
            s = o.type || 'image/png',
            a = o.rendererOpts || {};
          return i.toDataURL(s, a.quality);
        });
    },
    R5de: function (t, e, n) {
      'use strict';
      var r = n('veq9');
      n.o(r, 'IJsonRpcProvider') &&
        n.d(e, 'IJsonRpcProvider', function () {
          return r['IJsonRpcProvider'];
        }),
        n.o(r, 'formatJsonRpcError') &&
          n.d(e, 'formatJsonRpcError', function () {
            return r['formatJsonRpcError'];
          }),
        n.o(r, 'formatJsonRpcRequest') &&
          n.d(e, 'formatJsonRpcRequest', function () {
            return r['formatJsonRpcRequest'];
          }),
        n.o(r, 'isHttpUrl') &&
          n.d(e, 'isHttpUrl', function () {
            return r['isHttpUrl'];
          }),
        n.o(r, 'isJsonRpcError') &&
          n.d(e, 'isJsonRpcError', function () {
            return r['isJsonRpcError'];
          }),
        n.o(r, 'isJsonRpcResponse') &&
          n.d(e, 'isJsonRpcResponse', function () {
            return r['isJsonRpcResponse'];
          }),
        n.o(r, 'payloadId') &&
          n.d(e, 'payloadId', function () {
            return r['payloadId'];
          });
      r['isNode'];
    },
    'RM/z': function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return c;
      }),
        n.d(e, 'a', function () {
          return u;
        }),
        n.d(e, 'c', function () {
          return l;
        }),
        n.d(e, 'd', function () {
          return h;
        }),
        n.d(e, 'e', function () {
          return d;
        }),
        n.d(e, 'f', function () {
          return f;
        });
      var r = n('veq9'),
        o = n('SoAf');
      function i(t) {
        return t === o['a']
          ? { length: o['b'], name: o['a'] }
          : { hash: { name: o['f'] }, name: o['e'] };
      }
      function s(t) {
        return t === o['a'] ? [o['d'], o['c']] : [o['k'], o['l']];
      }
      async function a(t, e = o['a']) {
        return r['getSubtleCrypto']().importKey('raw', t, i(e), !0, s(e));
      }
      async function c(t, e, n) {
        const i = r['getSubtleCrypto'](),
          s = await a(e, o['a']),
          c = await i.encrypt({ iv: t, name: o['a'] }, s, n);
        return new Uint8Array(c);
      }
      async function u(t, e, n) {
        const i = r['getSubtleCrypto'](),
          s = await a(e, o['a']),
          c = await i.decrypt({ iv: t, name: o['a'] }, s, n);
        return new Uint8Array(c);
      }
      async function l(t, e) {
        const n = r['getSubtleCrypto'](),
          i = await a(t, o['e']),
          s = await n.sign({ length: o['g'], name: o['e'] }, i, e);
        return new Uint8Array(s);
      }
      async function h(t, e) {
        const n = r['getSubtleCrypto'](),
          i = await a(t, o['e']),
          s = await n.sign({ length: o['h'], name: o['e'] }, i, e);
        return new Uint8Array(s);
      }
      async function d(t) {
        const e = r['getSubtleCrypto'](),
          n = await e.digest({ name: o['i'] }, t);
        return new Uint8Array(n);
      }
      async function f(t) {
        const e = r['getSubtleCrypto'](),
          n = await e.digest({ name: o['j'] }, t);
        return new Uint8Array(n);
      }
    },
    Rb7d: function (t, e) {
      function n(t) {
        if (
          ('number' === typeof t && (t = t.toString()), 'string' !== typeof t)
        )
          throw new Error('Color should be defined as hex string');
        var e = t.slice().replace('#', '').split('');
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw new Error('Invalid hex color: ' + t);
        (3 !== e.length && 4 !== e.length) ||
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            }),
          )),
          6 === e.length && e.push('F', 'F');
        var n = parseInt(e.join(''), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: '#' + e.slice(0, 6).join(''),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        var e =
            'undefined' === typeof t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          o = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : o,
          margin: e,
          color: {
            dark: n(t.color.dark || '#000000ff'),
            light: n(t.color.light || '#ffffffff'),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, n) {
          var r = e.getScale(t, n);
          return Math.floor((t + 2 * n.margin) * r);
        }),
        (e.qrToImageData = function (t, n, r) {
          for (
            var o = n.modules.size,
              i = n.modules.data,
              s = e.getScale(o, r),
              a = Math.floor((o + 2 * r.margin) * s),
              c = r.margin * s,
              u = [r.color.light, r.color.dark],
              l = 0;
            l < a;
            l++
          )
            for (var h = 0; h < a; h++) {
              var d = 4 * (l * a + h),
                f = r.color.light;
              if (l >= c && h >= c && l < a - c && h < a - c) {
                var p = Math.floor((l - c) / s),
                  m = Math.floor((h - c) / s);
                f = u[i[p * o + m] ? 1 : 0];
              }
              (t[d++] = f.r), (t[d++] = f.g), (t[d++] = f.b), (t[d] = f.a);
            }
        });
    },
    RmUe: function (t, e, n) {
      'use strict';
      t.exports = function () {
        throw new Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object',
        );
      };
    },
    SSU8: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return o;
      }),
        n.d(e, 'a', function () {
          return i;
        });
      var r = n('RM/z');
      function o(t, e, n) {
        return Object(r['b'])(t, e, n);
      }
      function i(t, e, n) {
        return Object(r['a'])(t, e, n);
      }
    },
    SoAf: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return i;
      }),
        n.d(e, 'g', function () {
          return s;
        }),
        n.d(e, 'a', function () {
          return a;
        }),
        n.d(e, 'f', function () {
          return c;
        }),
        n.d(e, 'e', function () {
          return u;
        }),
        n.d(e, 'i', function () {
          return l;
        }),
        n.d(e, 'j', function () {
          return h;
        }),
        n.d(e, 'h', function () {
          return o;
        }),
        n.d(e, 'd', function () {
          return d;
        }),
        n.d(e, 'c', function () {
          return f;
        }),
        n.d(e, 'k', function () {
          return p;
        }),
        n.d(e, 'l', function () {
          return m;
        });
      const r = 256,
        o = 512,
        i = r,
        s = r,
        a = 'AES-CBC',
        c = `SHA-${i}`,
        u = 'HMAC',
        l = 'SHA-256',
        h = 'SHA-512',
        d = 'encrypt',
        f = 'decrypt',
        p = 'sign',
        m = 'verify';
    },
    V35J: function (t, e, n) {
      var r = n('Wogr');
      function o(t) {
        if (!t || t < 1)
          throw new Error('BitMatrix size must be defined and greater than 0');
        (this.size = t),
          (this.data = r.alloc(t * t)),
          (this.reservedBit = r.alloc(t * t));
      }
      (o.prototype.set = function (t, e, n, r) {
        var o = t * this.size + e;
        (this.data[o] = n), r && (this.reservedBit[o] = !0);
      }),
        (o.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (o.prototype.xor = function (t, e, n) {
          this.data[t * this.size + e] ^= n;
        }),
        (o.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = o);
    },
    Wogr: function (t, e, n) {
      'use strict';
      var r = n('7uVY');
      function o() {
        try {
          var t = new Uint8Array(1);
          return (
            (t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === t.foo()
          );
        } catch (e) {
          return !1;
        }
      }
      s.TYPED_ARRAY_SUPPORT = o();
      var i = s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      function s(t, e, n) {
        return s.TYPED_ARRAY_SUPPORT || this instanceof s
          ? 'number' === typeof t
            ? l(this, t)
            : y(this, t, e, n)
          : new s(t, e, n);
      }
      function a(t) {
        if (t >= i)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              i.toString(16) +
              ' bytes',
          );
        return 0 | t;
      }
      function c(t) {
        return t !== t;
      }
      function u(t, e) {
        var n;
        return (
          s.TYPED_ARRAY_SUPPORT
            ? ((n = new Uint8Array(e)), (n.__proto__ = s.prototype))
            : ((n = t), null === n && (n = new s(e)), (n.length = e)),
          n
        );
      }
      function l(t, e) {
        var n = u(t, e < 0 ? 0 : 0 | a(e));
        if (!s.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
        return n;
      }
      function h(t, e) {
        var n = 0 | g(e),
          r = u(t, n),
          o = r.write(e);
        return o !== n && (r = r.slice(0, o)), r;
      }
      function d(t, e) {
        for (
          var n = e.length < 0 ? 0 : 0 | a(e.length), r = u(t, n), o = 0;
          o < n;
          o += 1
        )
          r[o] = 255 & e[o];
        return r;
      }
      function f(t, e, n, r) {
        if (n < 0 || e.byteLength < n)
          throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < n + (r || 0))
          throw new RangeError("'length' is out of bounds");
        var o;
        return (
          (o =
            void 0 === n && void 0 === r
              ? new Uint8Array(e)
              : void 0 === r
              ? new Uint8Array(e, n)
              : new Uint8Array(e, n, r)),
          s.TYPED_ARRAY_SUPPORT ? (o.__proto__ = s.prototype) : (o = d(t, o)),
          o
        );
      }
      function p(t, e) {
        if (s.isBuffer(e)) {
          var n = 0 | a(e.length),
            r = u(t, n);
          return 0 === r.length || e.copy(r, 0, 0, n), r;
        }
        if (e) {
          if (
            ('undefined' !== typeof ArrayBuffer &&
              e.buffer instanceof ArrayBuffer) ||
            'length' in e
          )
            return 'number' !== typeof e.length || c(e.length)
              ? u(t, 0)
              : d(t, e);
          if ('Buffer' === e.type && Array.isArray(e.data)) return d(t, e.data);
        }
        throw new TypeError(
          'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
        );
      }
      function m(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
          if (((n = t.charCodeAt(s)), n > 55295 && n < 57344)) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error('Invalid code point');
            if ((e -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128,
            );
          }
        }
        return i;
      }
      function g(t) {
        if (s.isBuffer(t)) return t.length;
        if (
          'undefined' !== typeof ArrayBuffer &&
          'function' === typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        'string' !== typeof t && (t = '' + t);
        var e = t.length;
        return 0 === e ? 0 : m(t).length;
      }
      function _(t, e, n, r) {
        for (var o = 0; o < r; ++o) {
          if (o + n >= e.length || o >= t.length) break;
          e[o + n] = t[o];
        }
        return o;
      }
      function v(t, e, n, r) {
        return _(m(e, t.length - n), t, n, r);
      }
      function y(t, e, n, r) {
        if ('number' === typeof e)
          throw new TypeError('"value" argument must not be a number');
        return 'undefined' !== typeof ArrayBuffer && e instanceof ArrayBuffer
          ? f(t, e, n, r)
          : 'string' === typeof e
          ? h(t, e, n)
          : p(t, e);
      }
      s.TYPED_ARRAY_SUPPORT &&
        ((s.prototype.__proto__ = Uint8Array.prototype),
        (s.__proto__ = Uint8Array),
        'undefined' !== typeof Symbol &&
          Symbol.species &&
          s[Symbol.species] === s &&
          Object.defineProperty(s, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1,
          })),
        (s.prototype.write = function (t, e, n) {
          void 0 === e || (void 0 === n && 'string' === typeof e)
            ? ((n = this.length), (e = 0))
            : isFinite(e) && ((e |= 0), isFinite(n) ? (n |= 0) : (n = void 0));
          var r = this.length - e;
          if (
            ((void 0 === n || n > r) && (n = r),
            (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds');
          return v(this, t, e, n);
        }),
        (s.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
            e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
            e < t && (e = t),
            s.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)), (n.__proto__ = s.prototype);
          else {
            var o = e - t;
            n = new s(o, void 0);
            for (var i = 0; i < o; ++i) n[i] = this[i + t];
          }
          return n;
        }),
        (s.prototype.copy = function (t, e, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError('targetStart out of bounds');
          if (n < 0 || n >= this.length)
            throw new RangeError('sourceStart out of bounds');
          if (r < 0) throw new RangeError('sourceEnd out of bounds');
          r > this.length && (r = this.length),
            t.length - e < r - n && (r = t.length - e + n);
          var o,
            i = r - n;
          if (this === t && n < e && e < r)
            for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n];
          else if (i < 1e3 || !s.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < i; ++o) t[o + e] = this[o + n];
          else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
          return i;
        }),
        (s.prototype.fill = function (t, e, n) {
          if ('string' === typeof t) {
            if (
              ('string' === typeof e
                ? ((e = 0), (n = this.length))
                : 'string' === typeof n && (n = this.length),
              1 === t.length)
            ) {
              var r = t.charCodeAt(0);
              r < 256 && (t = r);
            }
          } else 'number' === typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < n)
            throw new RangeError('Out of range index');
          if (n <= e) return this;
          var o;
          if (
            ((e >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            t || (t = 0),
            'number' === typeof t)
          )
            for (o = e; o < n; ++o) this[o] = t;
          else {
            var i = s.isBuffer(t) ? t : new s(t),
              a = i.length;
            for (o = 0; o < n - e; ++o) this[o + e] = i[o % a];
          }
          return this;
        }),
        (s.concat = function (t, e) {
          if (!r(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u(null, 0);
          var n;
          if (void 0 === e)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var o = l(null, e),
            i = 0;
          for (n = 0; n < t.length; ++n) {
            var a = t[n];
            if (!s.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            a.copy(o, i), (i += a.length);
          }
          return o;
        }),
        (s.byteLength = g),
        (s.prototype._isBuffer = !0),
        (s.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (t.exports.alloc = function (t) {
          var e = new s(t);
          return e.fill(0), e;
        }),
        (t.exports.from = function (t) {
          return new s(t);
        });
    },
    XWHH: function (t, e) {
      var n = 'undefined' !== typeof self ? self : this,
        r = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (t.prototype = n), new t();
        })();
      (function (t) {
        (function (e) {
          var n = {
            searchParams: 'URLSearchParams' in t,
            iterable: 'Symbol' in t && 'iterator' in Symbol,
            blob:
              'FileReader' in t &&
              'Blob' in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            formData: 'FormData' in t,
            arrayBuffer: 'ArrayBuffer' in t,
          };
          function r(t) {
            return t && DataView.prototype.isPrototypeOf(t);
          }
          if (n.arrayBuffer)
            var o = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ],
              i =
                ArrayBuffer.isView ||
                function (t) {
                  return t && o.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function s(t) {
            if (
              ('string' !== typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            )
              throw new TypeError('Invalid character in header field name');
            return t.toLowerCase();
          }
          function a(t) {
            return 'string' !== typeof t && (t = String(t)), t;
          }
          function c(t) {
            var e = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              n.iterable &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function u(t) {
            (this.map = {}),
              t instanceof u
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function l(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError('Already read'));
            t.bodyUsed = !0;
          }
          function h(t) {
            return new Promise(function (e, n) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  n(t.error);
                });
            });
          }
          function d(t) {
            var e = new FileReader(),
              n = h(e);
            return e.readAsArrayBuffer(t), n;
          }
          function f(t) {
            var e = new FileReader(),
              n = h(e);
            return e.readAsText(t), n;
          }
          function p(t) {
            for (
              var e = new Uint8Array(t), n = new Array(e.length), r = 0;
              r < e.length;
              r++
            )
              n[r] = String.fromCharCode(e[r]);
            return n.join('');
          }
          function m(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function g() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                (this._bodyInit = t),
                  t
                    ? 'string' === typeof t
                      ? (this._bodyText = t)
                      : n.blob && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : n.formData && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : n.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : n.arrayBuffer && n.blob && r(t)
                      ? ((this._bodyArrayBuffer = m(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : n.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(t) || i(t))
                      ? (this._bodyArrayBuffer = m(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ''),
                  this.headers.get('content-type') ||
                    ('string' === typeof t
                      ? this.headers.set(
                          'content-type',
                          'text/plain;charset=UTF-8',
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set('content-type', this._bodyBlob.type)
                      : n.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          'content-type',
                          'application/x-www-form-urlencoded;charset=UTF-8',
                        ));
              }),
              n.blob &&
                ((this.blob = function () {
                  var t = l(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error('could not read FormData body as blob');
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? l(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(d);
                })),
              (this.text = function () {
                var t = l(this);
                if (t) return t;
                if (this._bodyBlob) return f(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(p(this._bodyArrayBuffer));
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as text');
                return Promise.resolve(this._bodyText);
              }),
              n.formData &&
                (this.formData = function () {
                  return this.text().then(w);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (u.prototype.append = function (t, e) {
            (t = s(t)), (e = a(e));
            var n = this.map[t];
            this.map[t] = n ? n + ', ' + e : e;
          }),
            (u.prototype['delete'] = function (t) {
              delete this.map[s(t)];
            }),
            (u.prototype.get = function (t) {
              return (t = s(t)), this.has(t) ? this.map[t] : null;
            }),
            (u.prototype.has = function (t) {
              return this.map.hasOwnProperty(s(t));
            }),
            (u.prototype.set = function (t, e) {
              this.map[s(t)] = a(e);
            }),
            (u.prototype.forEach = function (t, e) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
            }),
            (u.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push(n);
                }),
                c(t)
              );
            }),
            (u.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                c(t)
              );
            }),
            (u.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push([n, e]);
                }),
                c(t)
              );
            }),
            n.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
          var _ = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          function v(t) {
            var e = t.toUpperCase();
            return _.indexOf(e) > -1 ? e : t;
          }
          function y(t, e) {
            e = e || {};
            var n = e.body;
            if (t instanceof y) {
              if (t.bodyUsed) throw new TypeError('Already read');
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new u(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                n ||
                  null == t._bodyInit ||
                  ((n = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || 'same-origin'),
              (!e.headers && this.headers) || (this.headers = new u(e.headers)),
              (this.method = v(e.method || this.method || 'GET')),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ('GET' === this.method || 'HEAD' === this.method) && n)
            )
              throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(n);
          }
          function w(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split('&')
                .forEach(function (t) {
                  if (t) {
                    var n = t.split('='),
                      r = n.shift().replace(/\+/g, ' '),
                      o = n.join('=').replace(/\+/g, ' ');
                    e.append(decodeURIComponent(r), decodeURIComponent(o));
                  }
                }),
              e
            );
          }
          function b(t) {
            var e = new u(),
              n = t.replace(/\r?\n[\t ]+/g, ' ');
            return (
              n.split(/\r?\n/).forEach(function (t) {
                var n = t.split(':'),
                  r = n.shift().trim();
                if (r) {
                  var o = n.join(':').trim();
                  e.append(r, o);
                }
              }),
              e
            );
          }
          function M(t, e) {
            e || (e = {}),
              (this.type = 'default'),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
              (this.headers = new u(e.headers)),
              (this.url = e.url || ''),
              this._initBody(t);
          }
          (y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit });
          }),
            g.call(y.prototype),
            g.call(M.prototype),
            (M.prototype.clone = function () {
              return new M(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new u(this.headers),
                url: this.url,
              });
            }),
            (M.error = function () {
              var t = new M(null, { status: 0, statusText: '' });
              return (t.type = 'error'), t;
            });
          var x = [301, 302, 303, 307, 308];
          (M.redirect = function (t, e) {
            if (-1 === x.indexOf(e))
              throw new RangeError('Invalid status code');
            return new M(null, { status: e, headers: { location: t } });
          }),
            (e.DOMException = t.DOMException);
          try {
            new e.DOMException();
          } catch (k) {
            (e.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var n = Error(t);
              this.stack = n.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function E(t, r) {
            return new Promise(function (o, i) {
              var s = new y(t, r);
              if (s.signal && s.signal.aborted)
                return i(new e.DOMException('Aborted', 'AbortError'));
              var a = new XMLHttpRequest();
              function c() {
                a.abort();
              }
              (a.onload = function () {
                var t = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: b(a.getAllResponseHeaders() || ''),
                };
                t.url =
                  'responseURL' in a
                    ? a.responseURL
                    : t.headers.get('X-Request-URL');
                var e = 'response' in a ? a.response : a.responseText;
                o(new M(e, t));
              }),
                (a.onerror = function () {
                  i(new TypeError('Network request failed'));
                }),
                (a.ontimeout = function () {
                  i(new TypeError('Network request failed'));
                }),
                (a.onabort = function () {
                  i(new e.DOMException('Aborted', 'AbortError'));
                }),
                a.open(s.method, s.url, !0),
                'include' === s.credentials
                  ? (a.withCredentials = !0)
                  : 'omit' === s.credentials && (a.withCredentials = !1),
                'responseType' in a && n.blob && (a.responseType = 'blob'),
                s.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                }),
                s.signal &&
                  (s.signal.addEventListener('abort', c),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      s.signal.removeEventListener('abort', c);
                  })),
                a.send('undefined' === typeof s._bodyInit ? null : s._bodyInit);
            });
          }
          (E.polyfill = !0),
            t.fetch ||
              ((t.fetch = E),
              (t.Headers = u),
              (t.Request = y),
              (t.Response = M)),
            (e.Headers = u),
            (e.Request = y),
            (e.Response = M),
            (e.fetch = E),
            Object.defineProperty(e, '__esModule', { value: !0 });
        })({});
      })(r),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill;
      var o = r;
      (e = o.fetch),
        (e.default = o.fetch),
        (e.fetch = o.fetch),
        (e.Headers = o.Headers),
        (e.Request = o.Request),
        (e.Response = o.Response),
        (t.exports = e);
    },
    YvnI: function (t, e, n) {
      'use strict';
      n('RM/z');
    },
    Z92M: function (t, e) {
      t.exports = function () {
        return (
          'function' === typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    aZ40: function (t, e, n) {
      var r = n('Wogr'),
        o = r.alloc(512),
        i = r.alloc(256);
      (function () {
        for (var t = 1, e = 0; e < 255; e++)
          (o[e] = t), (i[t] = e), (t <<= 1), 256 & t && (t ^= 285);
        for (e = 255; e < 512; e++) o[e] = o[e - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw new Error('log(' + t + ')');
          return i[t];
        }),
        (e.exp = function (t) {
          return o[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : o[i[t] + i[e]];
        });
    },
    'cr+I': function (t, e, n) {
      'use strict';
      var r = n('5wUe')['default'],
        o = n('bfL6')['default'],
        i = n('R5yR')['default'],
        s = n('Pmem'),
        a = n('8jRI'),
        c = n('8yz6'),
        u = function (t) {
          return null === t || void 0 === t;
        };
      function l(t) {
        switch (t.arrayFormat) {
          case 'index':
            return function (e) {
              return function (n, r) {
                var o = n.length;
                return void 0 === r ||
                  (t.skipNull && null === r) ||
                  (t.skipEmptyString && '' === r)
                  ? n
                  : [].concat(
                      i(n),
                      null === r
                        ? [[f(e, t), '[', o, ']'].join('')]
                        : [[f(e, t), '[', f(o, t), ']=', f(r, t)].join('')],
                    );
              };
            };
          case 'bracket':
            return function (e) {
              return function (n, r) {
                return void 0 === r ||
                  (t.skipNull && null === r) ||
                  (t.skipEmptyString && '' === r)
                  ? n
                  : [].concat(
                      i(n),
                      null === r
                        ? [[f(e, t), '[]'].join('')]
                        : [[f(e, t), '[]=', f(r, t)].join('')],
                    );
              };
            };
          case 'comma':
          case 'separator':
            return function (e) {
              return function (n, r) {
                return null === r || void 0 === r || 0 === r.length
                  ? n
                  : 0 === n.length
                  ? [[f(e, t), '=', f(r, t)].join('')]
                  : [[n, f(r, t)].join(t.arrayFormatSeparator)];
              };
            };
          default:
            return function (e) {
              return function (n, r) {
                return void 0 === r ||
                  (t.skipNull && null === r) ||
                  (t.skipEmptyString && '' === r)
                  ? n
                  : [].concat(
                      i(n),
                      null === r
                        ? [f(e, t)]
                        : [[f(e, t), '=', f(r, t)].join('')],
                    );
              };
            };
        }
      }
      function h(t) {
        var e;
        switch (t.arrayFormat) {
          case 'index':
            return function (t, n, r) {
              (e = /\[(\d*)\]$/.exec(t)),
                (t = t.replace(/\[\d*\]$/, '')),
                e
                  ? (void 0 === r[t] && (r[t] = {}), (r[t][e[1]] = n))
                  : (r[t] = n);
            };
          case 'bracket':
            return function (t, n, r) {
              (e = /(\[\])$/.exec(t)),
                (t = t.replace(/\[\]$/, '')),
                e
                  ? void 0 !== r[t]
                    ? (r[t] = [].concat(r[t], n))
                    : (r[t] = [n])
                  : (r[t] = n);
            };
          case 'comma':
          case 'separator':
            return function (e, n, r) {
              var o =
                  'string' === typeof n &&
                  n.split('').indexOf(t.arrayFormatSeparator) > -1,
                i = o
                  ? n.split(t.arrayFormatSeparator).map(function (e) {
                      return p(e, t);
                    })
                  : null === n
                  ? n
                  : p(n, t);
              r[e] = i;
            };
          default:
            return function (t, e, n) {
              void 0 !== n[t] ? (n[t] = [].concat(n[t], e)) : (n[t] = e);
            };
        }
      }
      function d(t) {
        if ('string' !== typeof t || 1 !== t.length)
          throw new TypeError(
            'arrayFormatSeparator must be single character string',
          );
      }
      function f(t, e) {
        return e.encode ? (e.strict ? s(t) : encodeURIComponent(t)) : t;
      }
      function p(t, e) {
        return e.decode ? a(t) : t;
      }
      function m(t) {
        return Array.isArray(t)
          ? t.sort()
          : 'object' === typeof t
          ? m(Object.keys(t))
              .sort(function (t, e) {
                return Number(t) - Number(e);
              })
              .map(function (e) {
                return t[e];
              })
          : t;
      }
      function g(t) {
        var e = t.indexOf('#');
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function _(t) {
        var e = '',
          n = t.indexOf('#');
        return -1 !== n && (e = t.slice(n)), e;
      }
      function v(t) {
        t = g(t);
        var e = t.indexOf('?');
        return -1 === e ? '' : t.slice(e + 1);
      }
      function y(t, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(t)) &&
          'string' === typeof t &&
          '' !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ('true' !== t.toLowerCase() && 'false' !== t.toLowerCase()) ||
              (t = 'true' === t.toLowerCase()),
          t
        );
      }
      function w(t, e) {
        (e = Object.assign(
          {
            decode: !0,
            sort: !0,
            arrayFormat: 'none',
            arrayFormatSeparator: ',',
            parseNumbers: !1,
            parseBooleans: !1,
          },
          e,
        )),
          d(e.arrayFormatSeparator);
        var n = h(e),
          i = Object.create(null);
        if ('string' !== typeof t) return i;
        if (((t = t.trim().replace(/^[?#&]/, '')), !t)) return i;
        var s,
          a = o(t.split('&'));
        try {
          for (a.s(); !(s = a.n()).done; ) {
            var u = s.value,
              l = c(e.decode ? u.replace(/\+/g, ' ') : u, '='),
              f = r(l, 2),
              g = f[0],
              _ = f[1];
            (_ =
              void 0 === _
                ? null
                : ['comma', 'separator'].includes(e.arrayFormat)
                ? _
                : p(_, e)),
              n(p(g, e), _, i);
          }
        } catch (R) {
          a.e(R);
        } finally {
          a.f();
        }
        for (var v = 0, w = Object.keys(i); v < w.length; v++) {
          var b = w[v],
            M = i[b];
          if ('object' === typeof M && null !== M)
            for (var x = 0, E = Object.keys(M); x < E.length; x++) {
              var k = E[x];
              M[k] = y(M[k], e);
            }
          else i[b] = y(M, e);
        }
        return !1 === e.sort
          ? i
          : (!0 === e.sort
              ? Object.keys(i).sort()
              : Object.keys(i).sort(e.sort)
            ).reduce(function (t, e) {
              var n = i[e];
              return (
                Boolean(n) && 'object' === typeof n && !Array.isArray(n)
                  ? (t[e] = m(n))
                  : (t[e] = n),
                t
              );
            }, Object.create(null));
      }
      (e.extract = v),
        (e.parse = w),
        (e.stringify = function (t, e) {
          if (!t) return '';
          (e = Object.assign(
            {
              encode: !0,
              strict: !0,
              arrayFormat: 'none',
              arrayFormatSeparator: ',',
            },
            e,
          )),
            d(e.arrayFormatSeparator);
          for (
            var n = function (n) {
                return (
                  (e.skipNull && u(t[n])) || (e.skipEmptyString && '' === t[n])
                );
              },
              r = l(e),
              o = {},
              i = 0,
              s = Object.keys(t);
            i < s.length;
            i++
          ) {
            var a = s[i];
            n(a) || (o[a] = t[a]);
          }
          var c = Object.keys(o);
          return (
            !1 !== e.sort && c.sort(e.sort),
            c
              .map(function (n) {
                var o = t[n];
                return void 0 === o
                  ? ''
                  : null === o
                  ? f(n, e)
                  : Array.isArray(o)
                  ? o.reduce(r(n), []).join('&')
                  : f(n, e) + '=' + f(o, e);
              })
              .filter(function (t) {
                return t.length > 0;
              })
              .join('&')
          );
        }),
        (e.parseUrl = function (t, e) {
          e = Object.assign({ decode: !0 }, e);
          var n = c(t, '#'),
            o = r(n, 2),
            i = o[0],
            s = o[1];
          return Object.assign(
            { url: i.split('?')[0] || '', query: w(v(t), e) },
            e && e.parseFragmentIdentifier && s
              ? { fragmentIdentifier: p(s, e) }
              : {},
          );
        }),
        (e.stringifyUrl = function (t, n) {
          n = Object.assign({ encode: !0, strict: !0 }, n);
          var r = g(t.url).split('?')[0] || '',
            o = e.extract(t.url),
            i = e.parse(o, { sort: !1 }),
            s = Object.assign(i, t.query),
            a = e.stringify(s, n);
          a && (a = '?'.concat(a));
          var c = _(t.url);
          return (
            t.fragmentIdentifier &&
              (c = '#'.concat(f(t.fragmentIdentifier, n))),
            ''.concat(r).concat(a).concat(c)
          );
        });
    },
    dFyl: function (t, e, n) {
      (function (e) {
        function r(t) {
          return t && 'object' === typeof t && 'default' in t
            ? t['default']
            : t;
        }
        var o = n('Kqv8'),
          i = r(n('0FX9')),
          s = r(n('+QRC')),
          a = n('FdF9');
        function c(t) {
          i.toString(t, { type: 'terminal' }).then(console.log);
        }
        var u =
          ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n';
        'undefined' !== typeof Symbol &&
          (Symbol.iterator || (Symbol.iterator = Symbol('Symbol.iterator'))),
          'undefined' !== typeof Symbol &&
            (Symbol.asyncIterator ||
              (Symbol.asyncIterator = Symbol('Symbol.asyncIterator')));
        function l(t, e) {
          try {
            var n = t();
          } catch (r) {
            return e(r);
          }
          return n && n.then ? n.then(void 0, e) : n;
        }
        var h =
            "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
          d = 'WalletConnect',
          f = 300,
          p = 'rgb(64, 153, 255)',
          m = 'walletconnect-wrapper',
          g = 'walletconnect-style-sheet',
          _ = 'walletconnect-qrcode-modal',
          v = 'walletconnect-qrcode-close',
          y = 'walletconnect-qrcode-text',
          w = 'walletconnect-connect-button';
        function b(t) {
          return a.createElement(
            'div',
            { className: 'walletconnect-modal__header' },
            a.createElement('img', {
              src: h,
              className: 'walletconnect-modal__headerLogo',
            }),
            a.createElement('p', null, d),
            a.createElement(
              'div',
              {
                className: 'walletconnect-modal__close__wrapper',
                onClick: t.onClose,
              },
              a.createElement(
                'div',
                { id: v, className: 'walletconnect-modal__close__icon' },
                a.createElement('div', {
                  className: 'walletconnect-modal__close__line1',
                }),
                a.createElement('div', {
                  className: 'walletconnect-modal__close__line2',
                }),
              ),
            ),
          );
        }
        function M(t) {
          return a.createElement(
            'a',
            {
              className: 'walletconnect-connect__button',
              href: t.href,
              id: w + '-' + t.name,
              onClick: t.onClick,
              rel: 'noopener noreferrer',
              style: { backgroundColor: t.color },
              target: '_blank',
            },
            t.name,
          );
        }
        var x =
          "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";
        function E(t) {
          var e = t.color,
            n = t.href,
            r = t.name,
            o = t.logo,
            i = t.onClick;
          return a.createElement(
            'a',
            {
              className: 'walletconnect-modal__base__row',
              href: n,
              onClick: i,
              rel: 'noopener noreferrer',
              target: '_blank',
            },
            a.createElement(
              'h3',
              { className: 'walletconnect-modal__base__row__h3' },
              r,
            ),
            a.createElement(
              'div',
              { className: 'walletconnect-modal__base__row__right' },
              a.createElement('div', {
                className: 'walletconnect-modal__base__row__right__app-icon',
                style: {
                  background: "url('" + o + "') " + e,
                  backgroundSize: '100%',
                },
              }),
              a.createElement('img', {
                src: x,
                className: 'walletconnect-modal__base__row__right__caret',
              }),
            ),
          );
        }
        function k(t) {
          var e = t.color,
            n = t.href,
            r = t.name,
            o = t.logo,
            i = t.onClick,
            s =
              window.innerWidth < 768
                ? (r.length > 8 ? 2.5 : 2.7) + 'vw'
                : 'inherit';
          return a.createElement(
            'a',
            {
              className: 'walletconnect-connect__button__icon_anchor',
              href: n,
              onClick: i,
              rel: 'noopener noreferrer',
              target: '_blank',
            },
            a.createElement('div', {
              className: 'walletconnect-connect__button__icon',
              style: {
                background: "url('" + o + "') " + e,
                backgroundSize: '100%',
              },
            }),
            a.createElement(
              'div',
              {
                style: { fontSize: s },
                className: 'walletconnect-connect__button__text',
              },
              r,
            ),
          );
        }
        var R = 5,
          S = 12;
        function C(t) {
          var e = o.isAndroid(),
            n = a.useState(''),
            r = n[0],
            i = n[1],
            s = a.useState(''),
            c = s[0],
            u = s[1],
            l = a.useState(1),
            h = l[0],
            d = l[1],
            f = c
              ? t.links.filter(function (t) {
                  return t.name.toLowerCase().includes(c.toLowerCase());
                })
              : t.links,
            m = t.errorMessage,
            g = c || f.length > R,
            _ = Math.ceil(f.length / S),
            v = [(h - 1) * S + 1, h * S],
            w = f.length
              ? f.filter(function (t, e) {
                  return e + 1 >= v[0] && e + 1 <= v[1];
                })
              : [],
            b = !(e || !(_ > 1)),
            x = void 0;
          function C(t) {
            i(t.target.value),
              clearTimeout(x),
              t.target.value
                ? (x = setTimeout(function () {
                    u(t.target.value), d(1);
                  }, 1e3))
                : (i(''), u(''), d(1));
          }
          return a.createElement(
            'div',
            null,
            a.createElement(
              'p',
              { id: y, className: 'walletconnect-qrcode__text' },
              e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet,
            ),
            !e &&
              a.createElement('input', {
                className: 'walletconnect-search__input',
                placeholder: 'Search',
                value: r,
                onChange: C,
              }),
            a.createElement(
              'div',
              {
                className:
                  'walletconnect-connect__buttons__wrapper' +
                  (e ? '__android' : g && f.length ? '__wrap' : ''),
              },
              e
                ? a.createElement(M, {
                    name: t.text.connect,
                    color: p,
                    href: t.uri,
                    onClick: a.useCallback(function () {
                      o.saveMobileLinkInfo({ name: 'Unknown', href: t.uri });
                    }, []),
                  })
                : w.length
                ? w.map(function (e) {
                    var n = e.color,
                      r = e.name,
                      i = e.shortName,
                      s = e.logo,
                      c = o.formatIOSMobile(t.uri, e),
                      u = a.useCallback(
                        function () {
                          o.saveMobileLinkInfo({ name: r, href: c });
                        },
                        [w],
                      );
                    return g
                      ? a.createElement(k, {
                          color: n,
                          href: c,
                          name: i || r,
                          logo: s,
                          onClick: u,
                        })
                      : a.createElement(E, {
                          color: n,
                          href: c,
                          name: r,
                          logo: s,
                          onClick: u,
                        });
                  })
                : a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      'p',
                      null,
                      m.length
                        ? t.errorMessage
                        : t.links.length && !f.length
                        ? t.text.no_wallets_found
                        : t.text.loading,
                    ),
                  ),
            ),
            b &&
              a.createElement(
                'div',
                { className: 'walletconnect-modal__footer' },
                Array(_)
                  .fill(0)
                  .map(function (t, e) {
                    var n = e + 1,
                      r = h === n;
                    return a.createElement(
                      'a',
                      {
                        style: {
                          margin: 'auto 10px',
                          fontWeight: r ? 'bold' : 'normal',
                        },
                        onClick: function () {
                          return d(n);
                        },
                      },
                      n,
                    );
                  }),
              ),
          );
        }
        function O(t) {
          var e = !!t.message.trim();
          return a.createElement(
            'div',
            {
              className:
                'walletconnect-qrcode__notification' +
                (e ? ' notification__show' : ''),
            },
            t.message,
          );
        }
        var I = function (t) {
          try {
            var e = '';
            return Promise.resolve(
              i.toString(t, { margin: 0, type: 'svg' }),
            ).then(function (t) {
              return (
                'string' === typeof t &&
                  (e = t.replace(
                    '<svg',
                    '<svg class="walletconnect-qrcode__image"',
                  )),
                e
              );
            });
          } catch (n) {
            return Promise.reject(n);
          }
        };
        function A(t) {
          var e = a.useState(''),
            n = e[0],
            r = e[1],
            o = a.useState(''),
            i = o[0],
            c = o[1];
          a.useEffect(function () {
            try {
              return Promise.resolve(I(t.uri)).then(function (t) {
                c(t);
              });
            } catch (e) {
              Promise.reject(e);
            }
          }, []);
          var u = function () {
            var e = s(t.uri);
            e
              ? (r(t.text.copied_to_clipboard),
                setInterval(function () {
                  return r('');
                }, 1200))
              : (r('Error'),
                setInterval(function () {
                  return r('');
                }, 1200));
          };
          return a.createElement(
            'div',
            null,
            a.createElement(
              'p',
              { id: y, className: 'walletconnect-qrcode__text' },
              t.text.scan_qrcode_with_wallet,
            ),
            a.createElement('div', { dangerouslySetInnerHTML: { __html: i } }),
            a.createElement(
              'div',
              { className: 'walletconnect-modal__footer' },
              a.createElement('a', { onClick: u }, t.text.copy_to_clipboard),
            ),
            a.createElement(O, { message: n }),
          );
        }
        function T(t) {
          var e = o.isAndroid(),
            n = o.isMobile(),
            r = n
              ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks
                ? t.qrcodeModalOptions.mobileLinks
                : void 0
              : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks
              ? t.qrcodeModalOptions.desktopLinks
              : void 0,
            i = a.useState(!1),
            s = i[0],
            c = i[1],
            u = a.useState(!1),
            h = u[0],
            d = u[1],
            f = a.useState(!n),
            p = f[0],
            m = f[1],
            g = {
              mobile: n,
              text: t.text,
              uri: t.uri,
              qrcodeModalOptions: t.qrcodeModalOptions,
            },
            v = a.useState(''),
            y = v[0],
            w = v[1],
            M = a.useState(!1),
            x = M[0],
            E = M[1],
            k = a.useState([]),
            R = k[0],
            S = k[1],
            O = a.useState(''),
            I = O[0],
            T = O[1],
            P = function () {
              h ||
                s ||
                (r && !r.length) ||
                R.length > 0 ||
                a.useEffect(function () {
                  var i = function () {
                    try {
                      if (e) return Promise.resolve();
                      c(!0);
                      var i = l(
                        function () {
                          var e =
                            t.qrcodeModalOptions &&
                            t.qrcodeModalOptions.registryUrl
                              ? t.qrcodeModalOptions.registryUrl
                              : o.getWalletRegistryUrl();
                          return Promise.resolve(fetch(e)).then(function (e) {
                            return Promise.resolve(e.json()).then(function (e) {
                              var i = e.listings,
                                s = n ? 'mobile' : 'desktop',
                                a = o.getMobileLinkRegistry(
                                  o.formatMobileRegistry(i, s),
                                  r,
                                );
                              c(!1),
                                d(!0),
                                T(a.length ? '' : t.text.no_supported_wallets),
                                S(a);
                              var u = 1 === a.length;
                              u && (w(o.formatIOSMobile(t.uri, a[0])), m(!0)),
                                E(u);
                            });
                          });
                        },
                        function (e) {
                          c(!1),
                            d(!0),
                            T(t.text.something_went_wrong),
                            console.error(e);
                        },
                      );
                      return Promise.resolve(
                        i && i.then ? i.then(function () {}) : void 0,
                      );
                    } catch (s) {
                      return Promise.reject(s);
                    }
                  };
                  i();
                });
            };
          P();
          var N = n ? p : !p;
          return a.createElement(
            'div',
            { id: _, className: 'walletconnect-qrcode__base animated fadeIn' },
            a.createElement(
              'div',
              { className: 'walletconnect-modal__base' },
              a.createElement(b, { onClose: t.onClose }),
              x && p
                ? a.createElement(
                    'div',
                    { className: 'walletconnect-modal__single_wallet' },
                    a.createElement(
                      'a',
                      {
                        onClick: function () {
                          return o.saveMobileLinkInfo({
                            name: R[0].name,
                            href: y,
                          });
                        },
                        href: y,
                        rel: 'noopener noreferrer',
                        target: '_blank',
                      },
                      t.text.connect_with +
                        ' ' +
                        (x ? R[0].name : '') +
                        ' \u203a',
                    ),
                  )
                : e || s || (!s && R.length)
                ? a.createElement(
                    'div',
                    {
                      className:
                        'walletconnect-modal__mobile__toggle' +
                        (N ? ' right__selected' : ''),
                    },
                    a.createElement('div', {
                      className: 'walletconnect-modal__mobile__toggle_selector',
                    }),
                    n
                      ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                            'a',
                            {
                              onClick: function () {
                                return m(!1), P();
                              },
                            },
                            t.text.mobile,
                          ),
                          a.createElement(
                            'a',
                            {
                              onClick: function () {
                                return m(!0);
                              },
                            },
                            t.text.qrcode,
                          ),
                        )
                      : a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                            'a',
                            {
                              onClick: function () {
                                return m(!0);
                              },
                            },
                            t.text.qrcode,
                          ),
                          a.createElement(
                            'a',
                            {
                              onClick: function () {
                                return m(!1), P();
                              },
                            },
                            t.text.desktop,
                          ),
                        ),
                  )
                : null,
              a.createElement(
                'div',
                null,
                p || (!e && !s && !R.length)
                  ? a.createElement(A, Object.assign({}, g))
                  : a.createElement(
                      C,
                      Object.assign({}, g, { links: R, errorMessage: I }),
                    ),
              ),
            ),
          );
        }
        var P = {
            choose_preferred_wallet: 'W\xe4hle bevorzugte Wallet',
            connect_mobile_wallet: 'Verbinde mit Mobile Wallet',
            scan_qrcode_with_wallet:
              'Scanne den QR-code mit einer WalletConnect kompatiblen Wallet',
            connect: 'Verbinden',
            qrcode: 'QR-Code',
            mobile: 'Mobile',
            desktop: 'Desktop',
            copy_to_clipboard: 'In die Zwischenablage kopieren',
            copied_to_clipboard: 'In die Zwischenablage kopiert!',
            connect_with: 'Verbinden mit Hilfe von',
            loading: 'Laden...',
            something_went_wrong: 'Etwas ist schief gelaufen',
            no_supported_wallets: 'Es gibt noch keine unterst\xfctzten Wallet',
            no_wallets_found: 'keine Wallet gefunden',
          },
          N = {
            choose_preferred_wallet: 'Choose your preferred wallet',
            connect_mobile_wallet: 'Connect to Mobile Wallet',
            scan_qrcode_with_wallet:
              'Scan QR code with a WalletConnect-compatible wallet',
            connect: 'Connect',
            qrcode: 'QR Code',
            mobile: 'Mobile',
            desktop: 'Desktop',
            copy_to_clipboard: 'Copy to clipboard',
            copied_to_clipboard: 'Copied to clipboard!',
            connect_with: 'Connect with',
            loading: 'Loading...',
            something_went_wrong: 'Something went wrong',
            no_supported_wallets: 'There are no supported wallets yet',
            no_wallets_found: 'No wallets found',
          },
          j = {
            choose_preferred_wallet: 'Elige tu billetera preferida',
            connect_mobile_wallet: 'Conectar a billetera m\xf3vil',
            scan_qrcode_with_wallet:
              'Escanea el c\xf3digo QR con una billetera compatible con WalletConnect',
            connect: 'Conectar',
            qrcode: 'C\xf3digo QR',
            mobile: 'M\xf3vil',
            desktop: 'Desktop',
            copy_to_clipboard: 'Copiar',
            copied_to_clipboard: 'Copiado!',
            connect_with: 'Conectar mediante',
            loading: 'Cargando...',
            something_went_wrong: 'Algo sali\xf3 mal',
            no_supported_wallets: 'Todav\xeda no hay billeteras compatibles',
            no_wallets_found: 'No se encontraron billeteras',
          },
          L = {
            choose_preferred_wallet:
              'Choisissez votre portefeuille pr\xe9f\xe9r\xe9',
            connect_mobile_wallet: 'Se connecter au portefeuille mobile',
            scan_qrcode_with_wallet:
              'Scannez le QR code avec un portefeuille compatible WalletConnect',
            connect: 'Se connecter',
            qrcode: 'QR Code',
            mobile: 'Mobile',
            desktop: 'Desktop',
            copy_to_clipboard: 'Copier',
            copied_to_clipboard: 'Copi\xe9!',
            connect_with: "Connectez-vous \xe0 l'aide de",
            loading: 'Chargement...',
            something_went_wrong: 'Quelque chose a mal tourn\xe9',
            no_supported_wallets:
              "Il n'y a pas encore de portefeuilles pris en charge",
            no_wallets_found: 'Aucun portefeuille trouv\xe9',
          },
          B = {
            choose_preferred_wallet:
              '\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694',
            connect_mobile_wallet:
              '\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0',
            scan_qrcode_with_wallet:
              'WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694',
            connect: '\uc5f0\uacb0',
            qrcode: 'QR \ucf54\ub4dc',
            mobile: '\ubaa8\ubc14\uc77c',
            desktop: '\ub370\uc2a4\ud06c\ud0d1',
            copy_to_clipboard: '\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac',
            copied_to_clipboard:
              '\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!',
            connect_with: '\uc640 \uc5f0\uacb0\ud558\ub2e4',
            loading: '\ub85c\ub4dc \uc911...',
            something_went_wrong:
              '\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.',
            no_supported_wallets:
              '\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4',
            no_wallets_found:
              '\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4',
          },
          q = {
            choose_preferred_wallet: 'Escolha sua carteira preferida',
            connect_mobile_wallet: 'Conectar-se \xe0 carteira m\xf3vel',
            scan_qrcode_with_wallet:
              'Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect',
            connect: 'Conectar',
            qrcode: 'C\xf3digo QR',
            mobile: 'M\xf3vel',
            desktop: 'Desktop',
            copy_to_clipboard: 'Copiar',
            copied_to_clipboard: 'Copiado!',
            connect_with: 'Ligar por meio de',
            loading: 'Carregamento...',
            something_went_wrong: 'Algo correu mal',
            no_supported_wallets: 'Ainda n\xe3o h\xe1 carteiras suportadas',
            no_wallets_found: 'Nenhuma carteira encontrada',
          },
          U = {
            choose_preferred_wallet: '\u9009\u62e9\u4f60\u7684\u94b1\u5305',
            connect_mobile_wallet:
              '\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305',
            scan_qrcode_with_wallet:
              '\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801',
            connect: '\u8fde\u63a5',
            qrcode: '\u4e8c\u7ef4\u7801',
            mobile: '\u79fb\u52a8',
            desktop: '\u684c\u9762',
            copy_to_clipboard: '\u590d\u5236\u5230\u526a\u8d34\u677f',
            copied_to_clipboard:
              '\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01',
            connect_with: '\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5',
            loading: '\u6b63\u5728\u52a0\u8f7d...',
            something_went_wrong: '\u51fa\u4e86\u95ee\u9898',
            no_supported_wallets:
              '\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305',
            no_wallets_found: '\u6ca1\u6709\u627e\u5230\u94b1\u5305',
          },
          D = {
            choose_preferred_wallet:
              '\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f',
            connect_mobile_wallet:
              '\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f',
            scan_qrcode_with_wallet:
              '\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f',
            connect: '\u0627\u062a\u0635\u0627\u0644',
            qrcode: '\u06a9\u062f QR',
            mobile: '\u0633\u06cc\u0627\u0631',
            desktop: '\u062f\u0633\u06a9\u062a\u0627\u067e',
            copy_to_clipboard:
              '\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f',
            copied_to_clipboard:
              '\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!',
            connect_with: '\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627',
            loading: '...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc',
            something_went_wrong:
              '\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f',
            no_supported_wallets:
              '\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f',
            no_wallets_found:
              '\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f',
          },
          J = { de: P, en: N, es: j, fr: L, ko: B, pt: q, zh: U, fa: D };
        function F() {
          var t = o.getDocumentOrThrow(),
            e = t.getElementById(g);
          e && t.head.removeChild(e);
          var n = t.createElement('style');
          n.setAttribute('id', g), (n.innerText = u), t.head.appendChild(n);
        }
        function H() {
          var t = o.getDocumentOrThrow(),
            e = t.createElement('div');
          return e.setAttribute('id', m), t.body.appendChild(e), e;
        }
        function z() {
          var t = o.getDocumentOrThrow(),
            e = t.getElementById(_);
          e &&
            ((e.className = e.className.replace('fadeIn', 'fadeOut')),
            setTimeout(function () {
              var e = t.getElementById(m);
              e && t.body.removeChild(e);
            }, f));
        }
        function W(t) {
          return function () {
            z(), t && t();
          };
        }
        function Y() {
          var t = o.getNavigatorOrThrow().language.split('-')[0] || 'en';
          return J[t] || J['en'];
        }
        function $(t, e, n) {
          F();
          var r = H();
          a.render(
            a.createElement(T, {
              text: Y(),
              uri: t,
              onClose: W(e),
              qrcodeModalOptions: n,
            }),
            r,
          );
        }
        function Q() {
          z();
        }
        var K = function () {
          return (
            'undefined' !== typeof e &&
            'undefined' !== typeof e.versions &&
            'undefined' !== typeof e.versions.node
          );
        };
        function V(t, e, n) {
          console.log(t), K() ? c(t) : $(t, e, n);
        }
        function Z() {
          K() || Q();
        }
        var X = { open: V, close: Z };
        t.exports = X;
      }.call(this, n('Q2Ig')));
    },
    dYBg: function (t, e, n) {
      'use strict';
      class r {
        constructor() {
          (this._eventEmitters = []),
            'undefined' !== typeof window &&
              'undefined' !== typeof window.addEventListener &&
              (window.addEventListener('online', () => this.trigger('online')),
              window.addEventListener('offline', () =>
                this.trigger('offline'),
              ));
        }
        on(t, e) {
          this._eventEmitters.push({ event: t, callback: e });
        }
        trigger(t) {
          let e = [];
          t && (e = this._eventEmitters.filter((e) => e.event === t)),
            e.forEach((t) => {
              t.callback();
            });
        }
      }
      e['a'] = r;
    },
    'e/Dd': function (t, e) {
      var n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (e.getSymbolSize = function (t) {
        if (!t) throw new Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return r[t];
        }),
        (e.getBCHDigit = function (t) {
          var e = 0;
          while (0 !== t) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ('function' !== typeof t)
            throw new Error('"toSJISFunc" is not a valid function.');
          n = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return 'undefined' !== typeof n;
        }),
        (e.toSJIS = function (t) {
          return n(t);
        });
    },
    e0ae: function (t, e, n) {
      'use strict';
      (function (t) {
        n.d(e, 'a', function () {
          return p;
        });
        var r = function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              o = 0;
            for (e = 0; e < n; e++)
              for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++)
                r[o] = i[s];
            return r;
          },
          o = (function () {
            function t(t, e, n) {
              (this.name = t),
                (this.version = e),
                (this.os = n),
                (this.type = 'browser');
            }
            return t;
          })(),
          i = (function () {
            function e(e) {
              (this.version = e),
                (this.type = 'node'),
                (this.name = 'node'),
                (this.os = t.platform);
            }
            return e;
          })(),
          s = (function () {
            function t(t, e, n, r) {
              (this.name = t),
                (this.version = e),
                (this.os = n),
                (this.bot = r),
                (this.type = 'bot-device');
            }
            return t;
          })(),
          a = (function () {
            function t() {
              (this.type = 'bot'),
                (this.bot = !0),
                (this.name = 'bot'),
                (this.version = null),
                (this.os = null);
            }
            return t;
          })(),
          c = (function () {
            function t() {
              (this.type = 'react-native'),
                (this.name = 'react-native'),
                (this.version = null),
                (this.os = null);
            }
            return t;
          })(),
          u =
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          l =
            /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
          h = 3,
          d = [
            ['aol', /AOLShield\/([0-9\._]+)/],
            ['edge', /Edge\/([0-9\._]+)/],
            ['edge-ios', /EdgiOS\/([0-9\._]+)/],
            ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
            ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
            ['samsung', /SamsungBrowser\/([0-9\.]+)/],
            ['silk', /\bSilk\/([0-9._-]+)\b/],
            ['miui', /MiuiBrowser\/([0-9\.]+)$/],
            ['beaker', /BeakerBrowser\/([0-9\.]+)/],
            ['edge-chromium', /EdgA?\/([0-9\.]+)/],
            [
              'chromium-webview',
              /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
            ],
            ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
            ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
            ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
            ['fxios', /FxiOS\/([0-9\.]+)/],
            ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
            ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
            ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
            ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
            ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
            ['ie', /MSIE\s(7\.0)/],
            ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
            ['android', /Android\s([0-9\.]+)/],
            ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
            ['safari', /Version\/([0-9\._]+).*Safari/],
            ['facebook', /FBAV\/([0-9\.]+)/],
            ['instagram', /Instagram\s([0-9\.]+)/],
            ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
            ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
            ['searchbot', u],
          ],
          f = [
            ['iOS', /iP(hone|od|ad)/],
            ['Android OS', /Android/],
            ['BlackBerry OS', /BlackBerry|BB10/],
            ['Windows Mobile', /IEMobile/],
            ['Amazon OS', /Kindle/],
            ['Windows 3.11', /Win16/],
            ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
            ['Windows 98', /(Windows 98)|(Win98)/],
            ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
            ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
            ['Windows Server 2003', /(Windows NT 5.2)/],
            ['Windows Vista', /(Windows NT 6.0)/],
            ['Windows 7', /(Windows NT 6.1)/],
            ['Windows 8', /(Windows NT 6.2)/],
            ['Windows 8.1', /(Windows NT 6.3)/],
            ['Windows 10', /(Windows NT 10.0)/],
            ['Windows ME', /Windows ME/],
            ['Open BSD', /OpenBSD/],
            ['Sun OS', /SunOS/],
            ['Chrome OS', /CrOS/],
            ['Linux', /(Linux)|(X11)/],
            ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
            ['QNX', /QNX/],
            ['BeOS', /BeOS/],
            ['OS/2', /OS\/2/],
          ];
        function p(t) {
          return t
            ? g(t)
            : 'undefined' === typeof document &&
              'undefined' !== typeof navigator &&
              'ReactNative' === navigator.product
            ? new c()
            : 'undefined' !== typeof navigator
            ? g(navigator.userAgent)
            : v();
        }
        function m(t) {
          return (
            '' !== t &&
            d.reduce(function (e, n) {
              var r = n[0],
                o = n[1];
              if (e) return e;
              var i = o.exec(t);
              return !!i && [r, i];
            }, !1)
          );
        }
        function g(t) {
          var e = m(t);
          if (!e) return null;
          var n = e[0],
            i = e[1];
          if ('searchbot' === n) return new a();
          var c = i[1] && i[1].split(/[._]/).slice(0, 3);
          c ? c.length < h && (c = r(c, y(h - c.length))) : (c = []);
          var u = c.join('.'),
            d = _(t),
            f = l.exec(t);
          return f && f[1] ? new s(n, u, d, f[1]) : new o(n, u, d);
        }
        function _(t) {
          for (var e = 0, n = f.length; e < n; e++) {
            var r = f[e],
              o = r[0],
              i = r[1],
              s = i.exec(t);
            if (s) return o;
          }
          return null;
        }
        function v() {
          var e = 'undefined' !== typeof t && t.version;
          return e ? new i(t.version.slice(1)) : null;
        }
        function y(t) {
          for (var e = [], n = 0; n < t; n++) e.push('0');
          return e;
        }
      }.call(this, n('Q2Ig')));
    },
    e6BP: function (t, e) {
      function n() {
        (this.buffer = []), (this.length = 0);
      }
      (n.prototype = {
        get: function (t) {
          var e = Math.floor(t / 8);
          return 1 === ((this.buffer[e] >>> (7 - (t % 8))) & 1);
        },
        put: function (t, e) {
          for (var n = 0; n < e; n++)
            this.putBit(1 === ((t >>> (e - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          var e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = n);
    },
    eJYJ: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      const r = '^https?:';
      function o(t) {
        const e = t.match(new RegExp(/^\w+:/, 'gi'));
        if (e && e.length) return e[0];
      }
      function i(t, e) {
        const n = o(t);
        return 'undefined' !== typeof n && new RegExp(e).test(n);
      }
      function s(t) {
        return i(t, r);
      }
    },
    eQOe: function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      var n = { N1: 3, N2: 3, N3: 40, N4: 10 };
      function r(t, n, r) {
        switch (t) {
          case e.Patterns.PATTERN000:
            return (n + r) % 2 === 0;
          case e.Patterns.PATTERN001:
            return n % 2 === 0;
          case e.Patterns.PATTERN010:
            return r % 3 === 0;
          case e.Patterns.PATTERN011:
            return (n + r) % 3 === 0;
          case e.Patterns.PATTERN100:
            return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
          case e.Patterns.PATTERN101:
            return ((n * r) % 2) + ((n * r) % 3) === 0;
          case e.Patterns.PATTERN110:
            return (((n * r) % 2) + ((n * r) % 3)) % 2 === 0;
          case e.Patterns.PATTERN111:
            return (((n * r) % 3) + ((n + r) % 2)) % 2 === 0;
          default:
            throw new Error('bad maskPattern:' + t);
        }
      }
      (e.isValid = function (t) {
        return null != t && '' !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          for (
            var e = t.size, r = 0, o = 0, i = 0, s = null, a = null, c = 0;
            c < e;
            c++
          ) {
            (o = i = 0), (s = a = null);
            for (var u = 0; u < e; u++) {
              var l = t.get(c, u);
              l === s
                ? o++
                : (o >= 5 && (r += n.N1 + (o - 5)), (s = l), (o = 1)),
                (l = t.get(u, c)),
                l === a
                  ? i++
                  : (i >= 5 && (r += n.N1 + (i - 5)), (a = l), (i = 1));
            }
            o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5));
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          for (var e = t.size, r = 0, o = 0; o < e - 1; o++)
            for (var i = 0; i < e - 1; i++) {
              var s =
                t.get(o, i) +
                t.get(o, i + 1) +
                t.get(o + 1, i) +
                t.get(o + 1, i + 1);
              (4 !== s && 0 !== s) || r++;
            }
          return r * n.N2;
        }),
        (e.getPenaltyN3 = function (t) {
          for (var e = t.size, r = 0, o = 0, i = 0, s = 0; s < e; s++) {
            o = i = 0;
            for (var a = 0; a < e; a++)
              (o = ((o << 1) & 2047) | t.get(s, a)),
                a >= 10 && (1488 === o || 93 === o) && r++,
                (i = ((i << 1) & 2047) | t.get(a, s)),
                a >= 10 && (1488 === i || 93 === i) && r++;
          }
          return r * n.N3;
        }),
        (e.getPenaltyN4 = function (t) {
          for (var e = 0, r = t.data.length, o = 0; o < r; o++) e += t.data[o];
          var i = Math.abs(Math.ceil((100 * e) / r / 5) - 10);
          return i * n.N4;
        }),
        (e.applyMask = function (t, e) {
          for (var n = e.size, o = 0; o < n; o++)
            for (var i = 0; i < n; i++)
              e.isReserved(i, o) || e.xor(i, o, r(t, i, o));
        }),
        (e.getBestMask = function (t, n) {
          for (
            var r = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, s = 0;
            s < r;
            s++
          ) {
            n(s), e.applyMask(s, t);
            var a =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(s, t), a < i && ((i = a), (o = s));
          }
          return o;
        });
    },
    ekOh: function (t, e) {
      function n(t) {
        if ('string' !== typeof t) throw new Error('Param is not a string');
        var n = t.toLowerCase();
        switch (n) {
          case 'l':
          case 'low':
            return e.L;
          case 'm':
          case 'medium':
            return e.M;
          case 'q':
          case 'quartile':
            return e.Q;
          case 'h':
          case 'high':
            return e.H;
          default:
            throw new Error('Unknown EC Level: ' + t);
        }
      }
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && 'undefined' !== typeof t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return n(t);
          } catch (o) {
            return r;
          }
        });
    },
    'hFr/': function (t, e, n) {
      'use strict';
      var r = n('q4H8');
      n.d(e, 'randomBytes', function () {
        return r['a'];
      });
      var o = n('SSU8');
      n.d(e, 'aesCbcDecrypt', function () {
        return o['a'];
      }),
        n.d(e, 'aesCbcEncrypt', function () {
          return o['b'];
        });
      var i = n('BFhG');
      n.d(e, 'hmacSha256Sign', function () {
        return i['a'];
      });
      n('YvnI'), n('xesE'), n('SoAf');
    },
    'i75/': function (t, e, n) {
      'use strict';
    },
    jSPq: function (t, e, n) {
      var r = n('Wogr'),
        o = n('JzKC'),
        i = n('HDXh').Buffer;
      function s(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (s.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
      }),
        (s.prototype.encode = function (t) {
          if (!this.genPoly) throw new Error('Encoder not initialized');
          var e = r.alloc(this.degree),
            n = i.concat([t, e], t.length + this.degree),
            s = o.mod(n, this.genPoly),
            a = this.degree - s.length;
          if (a > 0) {
            var c = r.alloc(this.degree);
            return s.copy(c, a), c;
          }
          return s;
        }),
        (t.exports = s);
    },
    k5kJ: function (t, e, n) {
      'use strict';
      function r(t, e) {
        if (t.length !== e.length) return !1;
        let n = 0;
        for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
        return 0 === n;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    kXOL: function (t, e, n) {
      'use strict';
      var r = Object.prototype.hasOwnProperty,
        o = '~';
      function i() {}
      function s(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function a(t, e, n, r, i) {
        if ('function' !== typeof n)
          throw new TypeError('The listener must be a function');
        var a = new s(n, r || t, i),
          c = o ? o + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], a])
              : t._events[c].push(a)
            : ((t._events[c] = a), t._eventsCount++),
          t
        );
      }
      function c(t, e) {
        0 === --t._eventsCount ? (t._events = new i()) : delete t._events[e];
      }
      function u() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (u.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(o ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (u.prototype.listeners = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, i = n.length, s = new Array(i); r < i; r++)
            s[r] = n[r].fn;
          return s;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (t, e, n, r, i, s) {
          var a = o ? o + t : t;
          if (!this._events[a]) return !1;
          var c,
            u,
            l = this._events[a],
            h = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), h)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, n), !0;
              case 4:
                return l.fn.call(l.context, e, n, r), !0;
              case 5:
                return l.fn.call(l.context, e, n, r, i), !0;
              case 6:
                return l.fn.call(l.context, e, n, r, i, s), !0;
            }
            for (u = 1, c = new Array(h - 1); u < h; u++)
              c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            var d,
              f = l.length;
            for (u = 0; u < f; u++)
              switch (
                (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), h)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, e);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, e, n);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, e, n, r);
                  break;
                default:
                  if (!c)
                    for (d = 1, c = new Array(h - 1); d < h; d++)
                      c[d - 1] = arguments[d];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, n) {
          return a(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return a(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, n, r) {
          var i = o ? o + t : t;
          if (!this._events[i]) return this;
          if (!e) return c(this, i), this;
          var s = this._events[i];
          if (s.fn)
            s.fn !== e ||
              (r && !s.once) ||
              (n && s.context !== n) ||
              c(this, i);
          else {
            for (var a = 0, u = [], l = s.length; a < l; a++)
              (s[a].fn !== e ||
                (r && !s[a].once) ||
                (n && s[a].context !== n)) &&
                u.push(s[a]);
            u.length
              ? (this._events[i] = 1 === u.length ? u[0] : u)
              : c(this, i);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = o ? o + t : t), this._events[e] && c(this, e))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = o),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    'kk9/': function (t, e, n) {
      var r = n('e/Dd').getSymbolSize,
        o = 7;
      e.getPositions = function (t) {
        var e = r(t);
        return [
          [0, 0],
          [e - o, 0],
          [0, e - o],
        ];
      };
    },
    lYJp: function (t, e, n) {
      var r = n('e/Dd'),
        o = 1335,
        i = 21522,
        s = r.getBCHDigit(o);
      e.getEncodedBits = function (t, e) {
        var n = (t.bit << 3) | e,
          a = n << 10;
        while (r.getBCHDigit(a) - s >= 0) a ^= o << (r.getBCHDigit(a) - s);
        return ((n << 10) | a) ^ i;
      };
    },
    m4Dm: function (t, e, n) {
      'use strict';
      n.d(e, 'g', function () {
        return r['detectEnv'];
      }),
        n.d(e, 's', function () {
          return r['isMobile'];
        }),
        n.d(e, 'n', function () {
          return r['isBrowser'];
        }),
        n.d(e, 'k', function () {
          return r['getLocation'];
        }),
        n.d(e, 'i', function () {
          return r['getClientMeta'];
        }),
        n.d(e, 'C', function () {
          return r['setLocal'];
        }),
        n.d(e, 'j', function () {
          return r['getLocal'];
        }),
        n.d(e, 'B', function () {
          return r['removeLocal'];
        }),
        n.d(e, 'w', function () {
          return r['mobileLinkChoiceKey'];
        }),
        n.d(e, 'D', function () {
          return i;
        }),
        n.d(e, 'b', function () {
          return l;
        }),
        n.d(e, 'c', function () {
          return h;
        }),
        n.d(e, 'd', function () {
          return d;
        }),
        n.d(e, 'e', function () {
          return m;
        }),
        n.d(e, 'f', function () {
          return g;
        }),
        n.d(e, 'x', function () {
          return L;
        }),
        n.d(e, 'y', function () {
          return B;
        }),
        n.d(e, 'A', function () {
          return b;
        }),
        n.d(e, 'E', function () {
          return M;
        }),
        n.d(e, 'm', function () {
          return E;
        }),
        n.d(e, 'h', function () {
          return q;
        }),
        n.d(e, 'v', function () {
          return z;
        }),
        n.d(e, 'z', function () {
          return W;
        }),
        n.d(e, 'l', function () {
          return D;
        }),
        n.d(e, 'a', function () {
          return J;
        }),
        n.d(e, 'p', function () {
          return C;
        }),
        n.d(e, 'r', function () {
          return O;
        }),
        n.d(e, 'q', function () {
          return I;
        }),
        n.d(e, 'o', function () {
          return A;
        }),
        n.d(e, 't', function () {
          return T;
        }),
        n.d(e, 'u', function () {
          return P;
        });
      var r = n('Kqv8');
      const o = [
          'session_request',
          'session_update',
          'exchange_key',
          'connect',
          'disconnect',
          'display_uri',
          'modal_closed',
          'transport_open',
          'transport_close',
          'transport_error',
        ],
        i = [
          'eth_sendTransaction',
          'eth_signTransaction',
          'eth_sign',
          'eth_signTypedData',
          'eth_signTypedData_v1',
          'eth_signTypedData_v2',
          'eth_signTypedData_v3',
          'eth_signTypedData_v4',
          'personal_sign',
          'wallet_addEthereumChain',
          'wallet_switchEthereumChain',
          'wallet_getPermissions',
          'wallet_requestPermissions',
          'wallet_registerOnboarding',
          'wallet_watchAsset',
          'wallet_scanQRCode',
        ],
        s = {
          1: 'mainnet',
          3: 'ropsten',
          4: 'rinkeby',
          5: 'goerli',
          42: 'kovan',
        };
      var a = n('0RTg'),
        c = n.n(a),
        u = n('7FJf');
      function l(t) {
        return u['b'](new Uint8Array(t));
      }
      function h(t, e) {
        return u['c'](new Uint8Array(t), !e);
      }
      function d(t) {
        return u['f'](t).buffer;
      }
      function f(t) {
        return u['A'](t);
      }
      function p(t, e) {
        return u['B'](t, !e);
      }
      function m(t) {
        return u['n'](t).buffer;
      }
      function g(t, e) {
        const n = u['x'](u['y'](new c.a(t).toString(16)));
        return e ? n : u['a'](n);
      }
      var _ = n('HFX+'),
        v = n('GM3Q');
      function y(t) {
        return u['y'](t);
      }
      function w(t) {
        return u['w'](u['a'](t));
      }
      const b = v['payloadId'];
      function M() {
        const t = ((t, e) => {
          for (
            e = t = '';
            t++ < 36;
            e +=
              (51 * t) & 52
                ? (15 ^ t
                    ? 8 ^ (Math.random() * (20 ^ t ? 16 : 4))
                    : 4
                  ).toString(16)
                : '-'
          );
          return e;
        })();
        return t;
      }
      function x(t, e) {
        let n;
        const r = s[t];
        return r && (n = `https://${r}.infura.io/v3/${e}`), n;
      }
      function E(t, e) {
        let n;
        const r = x(t, e.infuraId);
        return e.custom && e.custom[t] ? (n = e.custom[t]) : r && (n = r), n;
      }
      function k(t) {
        return '' === t || ('string' === typeof t && '' === t.trim());
      }
      function R(t) {
        return !(t && t.length);
      }
      function S(t, e) {
        return u['s'](t, e);
      }
      function C(t) {
        return 'undefined' !== typeof t.method;
      }
      function O(t) {
        return 'undefined' !== typeof t.result;
      }
      function I(t) {
        return 'undefined' !== typeof t.error;
      }
      function A(t) {
        return 'undefined' !== typeof t.event;
      }
      function T(t) {
        return o.includes(t) || t.startsWith('wc_');
      }
      function P(t) {
        return !!t.method.startsWith('wc_') || !i.includes(t.method);
      }
      function N(t) {
        t = Object(u['x'])(t.toLowerCase());
        const e = Object(u['x'])(Object(_['keccak_256'])(f(t)));
        let n = '';
        for (let r = 0; r < t.length; r++)
          parseInt(e[r], 16) > 7 ? (n += t[r].toUpperCase()) : (n += t[r]);
        return Object(u['a'])(n);
      }
      const j = (t) =>
        !!t &&
        '0x' === t.toLowerCase().substring(0, 2) &&
        !!/^(0x)?[0-9a-f]{40}$/i.test(t) &&
        (!(!/^(0x)?[0-9a-f]{40}$/.test(t) && !/^(0x)?[0-9A-F]{40}$/.test(t)) ||
          t === N(t));
      function L(t) {
        return R(t) || S(t[0]) || (t[0] = p(t[0])), t;
      }
      function B(t) {
        if ('undefined' !== typeof t.type && '0' !== t.type) return t;
        if ('undefined' === typeof t.from || !j(t.from))
          throw new Error(
            "Transaction object must include a valid 'from' value.",
          );
        function e(t) {
          let e = t;
          return (
            ('number' === typeof t || ('string' === typeof t && !k(t))) &&
              (S(t) ? 'string' === typeof t && (e = y(t)) : (e = g(t))),
            'string' === typeof e && (e = w(e)),
            e
          );
        }
        const n = {
            from: y(t.from),
            to: 'undefined' === typeof t.to ? void 0 : y(t.to),
            gasPrice: 'undefined' === typeof t.gasPrice ? '' : e(t.gasPrice),
            gas:
              'undefined' === typeof t.gas
                ? 'undefined' === typeof t.gasLimit
                  ? ''
                  : e(t.gasLimit)
                : e(t.gas),
            value: 'undefined' === typeof t.value ? '' : e(t.value),
            nonce: 'undefined' === typeof t.nonce ? '' : e(t.nonce),
            data: 'undefined' === typeof t.data ? '' : y(t.data) || '0x',
          },
          r = ['gasPrice', 'gas', 'value', 'nonce'];
        return (
          Object.keys(n).forEach((t) => {
            ('undefined' === typeof n[t] ||
              ('string' === typeof n[t] && !n[t].trim().length)) &&
              r.includes(t) &&
              delete n[t];
          }),
          n
        );
      }
      function q(t) {
        const e = t.message || 'Failed or Rejected Request';
        let n = -32e3;
        if (t && !t.code)
          switch (e) {
            case 'Parse error':
              n = -32700;
              break;
            case 'Invalid request':
              n = -32600;
              break;
            case 'Method not found':
              n = -32601;
              break;
            case 'Invalid params':
              n = -32602;
              break;
            case 'Internal error':
              n = -32603;
              break;
            default:
              n = -32e3;
              break;
          }
        const r = { code: n, message: e };
        return t.data && (r.data = t.data), r;
      }
      var U = n('cr+I');
      function D(t) {
        const e = -1 !== t.indexOf('?') ? t.indexOf('?') : void 0,
          n = 'undefined' !== typeof e ? t.substr(e) : '';
        return n;
      }
      function J(t, e) {
        let n = F(t);
        return (n = Object.assign(Object.assign({}, n), e)), (t = H(n)), t;
      }
      function F(t) {
        return U['parse'](t);
      }
      function H(t) {
        return U['stringify'](t);
      }
      function z(t) {
        return 'undefined' !== typeof t.bridge;
      }
      function W(t) {
        const e = t.indexOf(':'),
          n = -1 !== t.indexOf('?') ? t.indexOf('?') : void 0,
          r = t.substring(0, e),
          o = t.substring(e + 1, n);
        function i(t) {
          const e = '@',
            n = t.split(e),
            r = { handshakeTopic: n[0], version: parseInt(n[1], 10) };
          return r;
        }
        const s = i(o),
          a = 'undefined' !== typeof n ? t.substr(n) : '';
        function c(t) {
          const e = F(t),
            n = { key: e.key || '', bridge: e.bridge || '' };
          return n;
        }
        const u = c(a),
          l = Object.assign(Object.assign({ protocol: r }, s), u);
        return l;
      }
    },
    nD3k: function (t, e) {},
    nZSm: function (t, e, n) {
      var r = n('u/Db'),
        o = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          ' ',
          '$',
          '%',
          '*',
          '+',
          '-',
          '.',
          '/',
          ':',
        ];
      function i(t) {
        (this.mode = r.ALPHANUMERIC), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            var n = 45 * o.indexOf(this.data[e]);
            (n += o.indexOf(this.data[e + 1])), t.put(n, 11);
          }
          this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
        }),
        (t.exports = i);
    },
    o6or: function (t, e) {},
    q4H8: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('veq9');
      function o(t) {
        const e = r['getBrowerCrypto']();
        return e.getRandomValues(new Uint8Array(t));
      }
    },
    qA3A: function (t, e, n) {
      'use strict';
    },
    qXd6: function (t, e) {
      (t.exports = o), (o.strict = i), (o.loose = s);
      var n = Object.prototype.toString,
        r = {
          '[object Int8Array]': !0,
          '[object Int16Array]': !0,
          '[object Int32Array]': !0,
          '[object Uint8Array]': !0,
          '[object Uint8ClampedArray]': !0,
          '[object Uint16Array]': !0,
          '[object Uint32Array]': !0,
          '[object Float32Array]': !0,
          '[object Float64Array]': !0,
        };
      function o(t) {
        return i(t) || s(t);
      }
      function i(t) {
        return (
          t instanceof Int8Array ||
          t instanceof Int16Array ||
          t instanceof Int32Array ||
          t instanceof Uint8Array ||
          t instanceof Uint8ClampedArray ||
          t instanceof Uint16Array ||
          t instanceof Uint32Array ||
          t instanceof Float32Array ||
          t instanceof Float64Array
        );
      }
      function s(t) {
        return r[n.call(t)];
      }
    },
    qmMu: function (t, e, n) {
      var r = n('Wogr'),
        o = n('e/Dd'),
        i = n('ekOh'),
        s = n('e6BP'),
        a = n('V35J'),
        c = n('1sBl'),
        u = n('kk9/'),
        l = n('eQOe'),
        h = n('NPxG'),
        d = n('jSPq'),
        f = n('yKow'),
        p = n('lYJp'),
        m = n('u/Db'),
        g = n('vvrf'),
        _ = n('7uVY');
      function v(t, e) {
        for (var n = t.size, r = u.getPositions(e), o = 0; o < r.length; o++)
          for (var i = r[o][0], s = r[o][1], a = -1; a <= 7; a++)
            if (!(i + a <= -1 || n <= i + a))
              for (var c = -1; c <= 7; c++)
                s + c <= -1 ||
                  n <= s + c ||
                  ((a >= 0 && a <= 6 && (0 === c || 6 === c)) ||
                  (c >= 0 && c <= 6 && (0 === a || 6 === a)) ||
                  (a >= 2 && a <= 4 && c >= 2 && c <= 4)
                    ? t.set(i + a, s + c, !0, !0)
                    : t.set(i + a, s + c, !1, !0));
      }
      function y(t) {
        for (var e = t.size, n = 8; n < e - 8; n++) {
          var r = n % 2 === 0;
          t.set(n, 6, r, !0), t.set(6, n, r, !0);
        }
      }
      function w(t, e) {
        for (var n = c.getPositions(e), r = 0; r < n.length; r++)
          for (var o = n[r][0], i = n[r][1], s = -2; s <= 2; s++)
            for (var a = -2; a <= 2; a++)
              -2 === s || 2 === s || -2 === a || 2 === a || (0 === s && 0 === a)
                ? t.set(o + s, i + a, !0, !0)
                : t.set(o + s, i + a, !1, !0);
      }
      function b(t, e) {
        for (
          var n, r, o, i = t.size, s = f.getEncodedBits(e), a = 0;
          a < 18;
          a++
        )
          (n = Math.floor(a / 3)),
            (r = (a % 3) + i - 8 - 3),
            (o = 1 === ((s >> a) & 1)),
            t.set(n, r, o, !0),
            t.set(r, n, o, !0);
      }
      function M(t, e, n) {
        var r,
          o,
          i = t.size,
          s = p.getEncodedBits(e, n);
        for (r = 0; r < 15; r++)
          (o = 1 === ((s >> r) & 1)),
            r < 6
              ? t.set(r, 8, o, !0)
              : r < 8
              ? t.set(r + 1, 8, o, !0)
              : t.set(i - 15 + r, 8, o, !0),
            r < 8
              ? t.set(8, i - r - 1, o, !0)
              : r < 9
              ? t.set(8, 15 - r - 1 + 1, o, !0)
              : t.set(8, 15 - r - 1, o, !0);
        t.set(i - 8, 8, 1, !0);
      }
      function x(t, e) {
        for (
          var n = t.size, r = -1, o = n - 1, i = 7, s = 0, a = n - 1;
          a > 0;
          a -= 2
        ) {
          6 === a && a--;
          while (1) {
            for (var c = 0; c < 2; c++)
              if (!t.isReserved(o, a - c)) {
                var u = !1;
                s < e.length && (u = 1 === ((e[s] >>> i) & 1)),
                  t.set(o, a - c, u),
                  i--,
                  -1 === i && (s++, (i = 7));
              }
            if (((o += r), o < 0 || n <= o)) {
              (o -= r), (r = -r);
              break;
            }
          }
        }
      }
      function E(t, e, n) {
        var r = new s();
        n.forEach(function (e) {
          r.put(e.mode.bit, 4),
            r.put(e.getLength(), m.getCharCountIndicator(e.mode, t)),
            e.write(r);
        });
        var i = o.getSymbolTotalCodewords(t),
          a = h.getTotalCodewordsCount(t, e),
          c = 8 * (i - a);
        r.getLengthInBits() + 4 <= c && r.put(0, 4);
        while (r.getLengthInBits() % 8 !== 0) r.putBit(0);
        for (var u = (c - r.getLengthInBits()) / 8, l = 0; l < u; l++)
          r.put(l % 2 ? 17 : 236, 8);
        return k(r, t, e);
      }
      function k(t, e, n) {
        for (
          var i = o.getSymbolTotalCodewords(e),
            s = h.getTotalCodewordsCount(e, n),
            a = i - s,
            c = h.getBlocksCount(e, n),
            u = i % c,
            l = c - u,
            f = Math.floor(i / c),
            p = Math.floor(a / c),
            m = p + 1,
            g = f - p,
            _ = new d(g),
            v = 0,
            y = new Array(c),
            w = new Array(c),
            b = 0,
            M = r.from(t.buffer),
            x = 0;
          x < c;
          x++
        ) {
          var E = x < l ? p : m;
          (y[x] = M.slice(v, v + E)),
            (w[x] = _.encode(y[x])),
            (v += E),
            (b = Math.max(b, E));
        }
        var k,
          R,
          S = r.alloc(i),
          C = 0;
        for (k = 0; k < b; k++)
          for (R = 0; R < c; R++) k < y[R].length && (S[C++] = y[R][k]);
        for (k = 0; k < g; k++) for (R = 0; R < c; R++) S[C++] = w[R][k];
        return S;
      }
      function R(t, e, n, r) {
        var i;
        if (_(t)) i = g.fromArray(t);
        else {
          if ('string' !== typeof t) throw new Error('Invalid data');
          var s = e;
          if (!s) {
            var c = g.rawSplit(t);
            s = f.getBestVersionForData(c, n);
          }
          i = g.fromString(t, s || 40);
        }
        var u = f.getBestVersionForData(i, n);
        if (!u)
          throw new Error(
            'The amount of data is too big to be stored in a QR Code',
          );
        if (e) {
          if (e < u)
            throw new Error(
              '\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: ' +
                u +
                '.\n',
            );
        } else e = u;
        var h = E(e, n, i),
          d = o.getSymbolSize(e),
          p = new a(d);
        return (
          v(p, e),
          y(p),
          w(p, e),
          M(p, n, 0),
          e >= 7 && b(p, e),
          x(p, h),
          isNaN(r) && (r = l.getBestMask(p, M.bind(null, p, n))),
          l.applyMask(r, p),
          M(p, n, r),
          {
            modules: p,
            version: e,
            errorCorrectionLevel: n,
            maskPattern: r,
            segments: i,
          }
        );
      }
      e.create = function (t, e) {
        if ('undefined' === typeof t || '' === t)
          throw new Error('No input text');
        var n,
          r,
          s = i.M;
        return (
          'undefined' !== typeof e &&
            ((s = i.from(e.errorCorrectionLevel, i.M)),
            (n = f.from(e.version)),
            (r = l.from(e.maskPattern)),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
          R(t, n, s, r)
        );
      };
    },
    quPa: function (t, e, n) {
      'use strict';
      function r(t) {
        let e;
        return (
          'undefined' !== typeof window &&
            'undefined' !== typeof window[t] &&
            (e = window[t]),
          e
        );
      }
      function o(t) {
        const e = r(t);
        if (!e) throw new Error(`${t} is not defined in Window`);
        return e;
      }
      function i() {
        return o('document');
      }
      function s() {
        return r('document');
      }
      function a() {
        return o('navigator');
      }
      function c() {
        return r('navigator');
      }
      function u() {
        return o('location');
      }
      function l() {
        return r('location');
      }
      function h() {
        return o('crypto');
      }
      function d() {
        return r('crypto');
      }
      function f() {
        return o('localStorage');
      }
      function p() {
        return r('localStorage');
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getLocalStorage =
          e.getLocalStorageOrThrow =
          e.getCrypto =
          e.getCryptoOrThrow =
          e.getLocation =
          e.getLocationOrThrow =
          e.getNavigator =
          e.getNavigatorOrThrow =
          e.getDocument =
          e.getDocumentOrThrow =
          e.getFromWindowOrThrow =
          e.getFromWindow =
            void 0),
        (e.getFromWindow = r),
        (e.getFromWindowOrThrow = o),
        (e.getDocumentOrThrow = i),
        (e.getDocument = s),
        (e.getNavigatorOrThrow = a),
        (e.getNavigator = c),
        (e.getLocationOrThrow = u),
        (e.getLocation = l),
        (e.getCryptoOrThrow = h),
        (e.getCrypto = d),
        (e.getLocalStorageOrThrow = f),
        (e.getLocalStorage = p);
    },
    rNYn: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return a;
      }),
        n.d(e, 'd', function () {
          return c;
        }),
        n.d(e, 'c', function () {
          return u;
        }),
        n.d(e, 'e', function () {
          return l;
        }),
        n.d(e, 'f', function () {
          return h;
        }),
        n.d(e, 'a', function () {
          return d;
        });
      const r = 'PARSE_ERROR',
        o = 'INVALID_REQUEST',
        i = 'METHOD_NOT_FOUND',
        s = 'INVALID_PARAMS',
        a = 'INTERNAL_ERROR',
        c = 'SERVER_ERROR',
        u = [-32700, -32600, -32601, -32602, -32603],
        l = [-32e3, -32099],
        h = {
          [r]: { code: -32700, message: 'Parse error' },
          [o]: { code: -32600, message: 'Invalid Request' },
          [i]: { code: -32601, message: 'Method not found' },
          [s]: { code: -32602, message: 'Invalid params' },
          [a]: { code: -32603, message: 'Internal error' },
          [c]: { code: -32e3, message: 'Server error' },
        },
        d = c;
    },
    rkY4: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      }),
        n.d(e, 'b', function () {
          return s;
        });
      var r = n('MkrG');
      class o extends r['a'] {
        constructor(t) {
          super();
        }
      }
      class i extends r['a'] {
        constructor() {
          super();
        }
      }
      class s extends i {
        constructor(t) {
          super();
        }
      }
    },
    t3B7: function (t, e, n) {
      'use strict';
      var r = n('veq9');
      n.o(r, 'isConstantTime') &&
        n.d(e, 'isConstantTime', function () {
          return r['isConstantTime'];
        });
    },
    'u/Db': function (t, e, n) {
      var r = n('J6Nv'),
        o = n('BCVQ');
      function i(t) {
        if ('string' !== typeof t) throw new Error('Param is not a string');
        var n = t.toLowerCase();
        switch (n) {
          case 'numeric':
            return e.NUMERIC;
          case 'alphanumeric':
            return e.ALPHANUMERIC;
          case 'kanji':
            return e.KANJI;
          case 'byte':
            return e.BYTE;
          default:
            throw new Error('Unknown mode: ' + t);
        }
      }
      (e.NUMERIC = { id: 'Numeric', bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: 'Alphanumeric', bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: 'Byte', bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: 'Kanji', bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw new Error('Invalid mode: ' + t);
          if (!r.isValid(e)) throw new Error('Invalid version: ' + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return o.testNumeric(t)
            ? e.NUMERIC
            : o.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : o.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw new Error('Invalid mode');
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return i(t);
          } catch (r) {
            return n;
          }
        });
    },
    veq9: function (t, e, n) {
      'use strict';
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              'default' === n || e.hasOwnProperty(n) || r(e, t, n);
          };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        o(n('/GNo'), e),
        o(n('4f1M'), e);
    },
    vvrf: function (t, e, n) {
      var r = n('u/Db'),
        o = n('3X7Y'),
        i = n('nZSm'),
        s = n('AZa5'),
        a = n('Lzq4'),
        c = n('BCVQ'),
        u = n('e/Dd'),
        l = n('ELBg');
      function h(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function d(t, e, n) {
        var r,
          o = [];
        while (null !== (r = t.exec(n)))
          o.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
        return o;
      }
      function f(t) {
        var e,
          n,
          o = d(c.NUMERIC, r.NUMERIC, t),
          i = d(c.ALPHANUMERIC, r.ALPHANUMERIC, t);
        u.isKanjiModeEnabled()
          ? ((e = d(c.BYTE, r.BYTE, t)), (n = d(c.KANJI, r.KANJI, t)))
          : ((e = d(c.BYTE_KANJI, r.BYTE, t)), (n = []));
        var s = o.concat(i, e, n);
        return s
          .sort(function (t, e) {
            return t.index - e.index;
          })
          .map(function (t) {
            return { data: t.data, mode: t.mode, length: t.length };
          });
      }
      function p(t, e) {
        switch (e) {
          case r.NUMERIC:
            return o.getBitsLength(t);
          case r.ALPHANUMERIC:
            return i.getBitsLength(t);
          case r.KANJI:
            return a.getBitsLength(t);
          case r.BYTE:
            return s.getBitsLength(t);
        }
      }
      function m(t) {
        return t.reduce(function (t, e) {
          var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
          return n && n.mode === e.mode
            ? ((t[t.length - 1].data += e.data), t)
            : (t.push(e), t);
        }, []);
      }
      function g(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var o = t[n];
          switch (o.mode) {
            case r.NUMERIC:
              e.push([
                o,
                { data: o.data, mode: r.ALPHANUMERIC, length: o.length },
                { data: o.data, mode: r.BYTE, length: o.length },
              ]);
              break;
            case r.ALPHANUMERIC:
              e.push([o, { data: o.data, mode: r.BYTE, length: o.length }]);
              break;
            case r.KANJI:
              e.push([o, { data: o.data, mode: r.BYTE, length: h(o.data) }]);
              break;
            case r.BYTE:
              e.push([{ data: o.data, mode: r.BYTE, length: h(o.data) }]);
          }
        }
        return e;
      }
      function _(t, e) {
        for (
          var n = {}, o = { start: {} }, i = ['start'], s = 0;
          s < t.length;
          s++
        ) {
          for (var a = t[s], c = [], u = 0; u < a.length; u++) {
            var l = a[u],
              h = '' + s + u;
            c.push(h), (n[h] = { node: l, lastCount: 0 }), (o[h] = {});
            for (var d = 0; d < i.length; d++) {
              var f = i[d];
              n[f] && n[f].node.mode === l.mode
                ? ((o[f][h] =
                    p(n[f].lastCount + l.length, l.mode) -
                    p(n[f].lastCount, l.mode)),
                  (n[f].lastCount += l.length))
                : (n[f] && (n[f].lastCount = l.length),
                  (o[f][h] =
                    p(l.length, l.mode) +
                    4 +
                    r.getCharCountIndicator(l.mode, e)));
            }
          }
          i = c;
        }
        for (d = 0; d < i.length; d++) o[i[d]]['end'] = 0;
        return { map: o, table: n };
      }
      function v(t, e) {
        var n,
          c = r.getBestModeForData(t);
        if (((n = r.from(e, c)), n !== r.BYTE && n.bit < c.bit))
          throw new Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              '.\n Suggested mode is: ' +
              r.toString(c),
          );
        switch ((n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new o(t);
          case r.ALPHANUMERIC:
            return new i(t);
          case r.KANJI:
            return new a(t);
          case r.BYTE:
            return new s(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            'string' === typeof e
              ? t.push(v(e, null))
              : e.data && t.push(v(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, n) {
          for (
            var r = f(t, u.isKanjiModeEnabled()),
              o = g(r),
              i = _(o, n),
              s = l.find_path(i.map, 'start', 'end'),
              a = [],
              c = 1;
            c < s.length - 1;
            c++
          )
            a.push(i.table[s[c]].node);
          return e.fromArray(m(a));
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(f(t, u.isKanjiModeEnabled()));
        });
    },
    xesE: function (t, e, n) {
      'use strict';
      var r = n('t3B7');
      n.o(r, 'isConstantTime') &&
        n.d(e, 'isConstantTime', function () {
          return r['isConstantTime'];
        });
      n('i75/');
      var o = n('nD3k');
      n.o(o, 'isConstantTime') &&
        n.d(e, 'isConstantTime', function () {
          return o['isConstantTime'];
        });
      var i = n('k5kJ');
      n.d(e, 'isConstantTime', function () {
        return i['a'];
      });
    },
    'y+U5': function (t, e, n) {
      'use strict';
      function r(t) {
        if ('string' !== typeof t)
          throw new Error('Cannot safe json parse value of type ' + typeof t);
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function o(t) {
        return 'string' === typeof t ? t : JSON.stringify(t);
      }
      n.d(e, 'a', function () {
        return r;
      }),
        n.d(e, 'b', function () {
          return o;
        });
    },
    y9Ti: function (t, e, n) {
      'use strict';
      n.d(e, 'c', function () {
        return o;
      }),
        n.d(e, 'a', function () {
          return i;
        }),
        n.d(e, 'b', function () {
          return s;
        }),
        n.d(e, 'd', function () {
          return a;
        });
      var r = n('rNYn');
      function o(t) {
        return r['c'].includes(t);
      }
      function i(t) {
        return Object.keys(r['f']).includes(t) ? r['f'][t] : r['f'][r['a']];
      }
      function s(t) {
        const e = Object.values(r['f']).find((e) => e.code === t);
        return e || r['f'][r['a']];
      }
      function a(t, e, n) {
        return t.message.includes('getaddrinfo ENOTFOUND') ||
          t.message.includes('connect ECONNREFUSED')
          ? new Error(`Unavailable ${n} RPC url at ${e}`)
          : t;
      }
    },
    yKow: function (t, e, n) {
      var r = n('e/Dd'),
        o = n('NPxG'),
        i = n('ekOh'),
        s = n('u/Db'),
        a = n('J6Nv'),
        c = n('7uVY'),
        u = 7973,
        l = r.getBCHDigit(u);
      function h(t, n, r) {
        for (var o = 1; o <= 40; o++) if (n <= e.getCapacity(o, r, t)) return o;
      }
      function d(t, e) {
        return s.getCharCountIndicator(t, e) + 4;
      }
      function f(t, e) {
        var n = 0;
        return (
          t.forEach(function (t) {
            var r = d(t.mode, e);
            n += r + t.getBitsLength();
          }),
          n
        );
      }
      function p(t, n) {
        for (var r = 1; r <= 40; r++) {
          var o = f(t, r);
          if (o <= e.getCapacity(r, n, s.MIXED)) return r;
        }
      }
      (e.from = function (t, e) {
        return a.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, n) {
          if (!a.isValid(t)) throw new Error('Invalid QR Code version');
          'undefined' === typeof n && (n = s.BYTE);
          var i = r.getSymbolTotalCodewords(t),
            c = o.getTotalCodewordsCount(t, e),
            u = 8 * (i - c);
          if (n === s.MIXED) return u;
          var l = u - d(n, t);
          switch (n) {
            case s.NUMERIC:
              return Math.floor((l / 10) * 3);
            case s.ALPHANUMERIC:
              return Math.floor((l / 11) * 2);
            case s.KANJI:
              return Math.floor(l / 13);
            case s.BYTE:
            default:
              return Math.floor(l / 8);
          }
        }),
        (e.getBestVersionForData = function (t, e) {
          var n,
            r = i.from(e, i.M);
          if (c(t)) {
            if (t.length > 1) return p(t, r);
            if (0 === t.length) return 1;
            n = t[0];
          } else n = t;
          return h(n.mode, n.getLength(), r);
        }),
        (e.getEncodedBits = function (t) {
          if (!a.isValid(t) || t < 7)
            throw new Error('Invalid QR Code version');
          var e = t << 12;
          while (r.getBCHDigit(e) - l >= 0) e ^= u << (r.getBCHDigit(e) - l);
          return (t << 12) | e;
        });
    },
    yMXH: function (t, e) {},
    ya2q: function (t, e, n) {
      'use strict';
      n.d(e, 'c', function () {
        return i;
      }),
        n.d(e, 'b', function () {
          return s;
        }),
        n.d(e, 'a', function () {
          return a;
        });
      var r = n('y9Ti'),
        o = n('rNYn');
      function i() {
        const t = Date.now() * Math.pow(10, 3),
          e = Math.floor(Math.random() * Math.pow(10, 3));
        return t + e;
      }
      function s(t, e, n) {
        return { id: n || i(), jsonrpc: '2.0', method: t, params: e };
      }
      function a(t, e, n) {
        return { id: t, jsonrpc: '2.0', error: c(e, n) };
      }
      function c(t, e) {
        return 'undefined' === typeof t
          ? Object(r['a'])(o['b'])
          : ('string' === typeof t &&
              (t = Object.assign(Object.assign({}, Object(r['a'])(o['d'])), {
                message: t,
              })),
            'undefined' !== typeof e && (t.data = e),
            Object(r['c'])(t.code) && (t = Object(r['b'])(t.code)),
            t);
      }
    },
    ytBo: function (t, e, n) {
      'use strict';
      function r(t) {
        return (
          'object' === typeof t &&
          'id' in t &&
          'jsonrpc' in t &&
          '2.0' === t.jsonrpc
        );
      }
      function o(t) {
        return r(t) && (i(t) || s(t));
      }
      function i(t) {
        return 'result' in t;
      }
      function s(t) {
        return 'error' in t;
      }
      n.d(e, 'b', function () {
        return o;
      }),
        n.d(e, 'a', function () {
          return s;
        });
    },
    zy0H: function (t, e, n) {
      'use strict';
      var r = n('o6or');
      n.o(r, 'IJsonRpcConnection') &&
        n.d(e, 'IJsonRpcConnection', function () {
          return r['IJsonRpcConnection'];
        }),
        n.o(r, 'IJsonRpcProvider') &&
          n.d(e, 'IJsonRpcProvider', function () {
            return r['IJsonRpcProvider'];
          }),
        n.o(r, 'isHttpUrl') &&
          n.d(e, 'isHttpUrl', function () {
            return r['isHttpUrl'];
          }),
        n.o(r, 'isJsonRpcError') &&
          n.d(e, 'isJsonRpcError', function () {
            return r['isJsonRpcError'];
          }),
        n.o(r, 'isJsonRpcResponse') &&
          n.d(e, 'isJsonRpcResponse', function () {
            return r['isJsonRpcResponse'];
          });
      n('MkrG');
      var o = n('rkY4');
      n.d(e, 'IJsonRpcConnection', function () {
        return o['a'];
      }),
        n.d(e, 'IJsonRpcProvider', function () {
          return o['b'];
        });
      var i = n('yMXH');
      n.o(i, 'isHttpUrl') &&
        n.d(e, 'isHttpUrl', function () {
          return i['isHttpUrl'];
        }),
        n.o(i, 'isJsonRpcError') &&
          n.d(e, 'isJsonRpcError', function () {
            return i['isJsonRpcError'];
          }),
        n.o(i, 'isJsonRpcResponse') &&
          n.d(e, 'isJsonRpcResponse', function () {
            return i['isJsonRpcResponse'];
          });
    },
  },
]);
