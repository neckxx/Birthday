// Fungsi untuk memulai musik
function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}
window.addEventListener('DOMContentLoaded', function() {
  playMusic();
});
document.body.addEventListener('click', playMusic, { once: true });
const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
let countDown = new Date('Apr 23, 2025 00:00:00').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
    document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor(distance / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      timer.classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideSatu();
    }

  }, second)

// ── Helper: buat/tampilkan ulang elemen #tap ──────────────────────────────────
function showTap() {
  let tap = document.getElementById('tap');
  if (!tap) {
    tap = document.createElement('p');
    tap.id = 'tap';
    tap.className = 'animate__animated animate__pulse text-muted animate__slow animate__repeat-3';
    tap.textContent = 'Ketuk untuk melanjutkan';
    document.getElementById('content').appendChild(tap);
  }
  tap.classList.remove('d-none');
  return tap;
}

function hideTap() {
  const tap = document.getElementById('tap');
  if (tap) tap.classList.add('d-none');
}

// ─────────────────────────────────────────────────────────────────────────────

const _slideSatu = function () {
  const slideSatu = document.getElementById('slideSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(function () {
    const tap = showTap();
    document.body.addEventListener('click', function () {
      _slideDua();
    }, { once: true });
  }, 7000);
};

const _slideDua = function () {
  const slideSatu = document.getElementById('slideSatu');
  hideTap();
  const slideDua = document.getElementById('slideDua');

  setTimeout(function () {
    slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
    setTimeout(function () {
      slideSatu.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideDua.classList.remove('d-none');
  setTimeout(function () {
    showTap();
    document.body.addEventListener('click', function () {
      slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideDua.classList.remove('animate__delay-2s', 'animate__slow');
      hideTap();
      setTimeout(function () {
        slideDua.remove();
        _slideTiga();
      }, 1000);
    }, { once: true });
  }, 40000);
};

const _slideTiga = function () {
  const slideTiga = document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');
  setTimeout(function () {
    showTap();
    document.body.addEventListener('click', function () {
      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      slideTiga.classList.replace('animate__zoomInDown', 'animate__fadeOut');
      hideTap();
      setTimeout(function () {
        slideTiga.remove();
        _slideEmpat();
      }, 1000);
    }, { once: true });
  }, 43000);
}

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');

  slideEmpat.classList.remove('d-none');
  setTimeout(function () {
    showTap();
    document.body.addEventListener('click', function () {
      slideEmpat.classList.remove('animate__delay-2s', 'animate__slow');
      slideEmpat.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      hideTap();
      setTimeout(function () {
        slideEmpat.remove();
        _slideFoto();
      }, 1000);
    }, { once: true });
  }, 43000);
}

// ── Slide Foto ────────────────────────────────────────────────────────────────
const _slideFoto = function () {
  const slideFoto = document.getElementById('slideFoto');
  slideFoto.classList.remove('d-none');

  setTimeout(function () {
    showTap();
    document.body.addEventListener('click', function () {
      hideTap();
      slideFoto.classList.add('animate__animated', 'animate__fadeOutUp');
      setTimeout(function () {
        slideFoto.remove();
        _slideLima();
      }, 800);
    }, { once: true });
  }, 2000);
};

// ─────────────────────────────────────────────────────────────────────────────

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * 500);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
};

const _slideLima = function () {
  const slideLima = document.getElementById('slideLima');
  const btn = document.getElementsByTagName('button');
  slideLima.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideLima);
    slideLima.style.top = xy[0] + 'px';
  });

  btn[1].addEventListener('click', function () {
    slideLima.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideLima.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideLima.remove();
      setTimeout(() => {
        _slideEnam();
      }, 500);
    }, 1000);
  });
};

const _slideEnam = function () {
  const slideEnam = document.getElementById('slideEnam');
  slideEnam.classList.remove('d-none');
  const trims = document.getElementById('trims');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideEnam.addEventListener('animationend', () => {
    slideEnam.classList.add('animate__delay-3s');
    slideEnam.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideEnam.remove();
        _slideTujuh();
      }, 1000);
    }, 6000);
  });
};

// ── Slide Penutup (_slideTujuh) ───────────────────────────────────────────────
const _slideTujuh = function () {
  // Buat elemen slide penutup secara dinamis
  const slideTujuh = document.createElement('div');
  slideTujuh.id = 'slideTujuh';
  slideTujuh.className = 'slide-penutup animate__animated animate__fadeIn';
  slideTujuh.innerHTML = `
    <div class="penutup-card animate__animated animate__zoomIn animate__delay-1s">
      <div class="penutup-bunga-row">
        <span class="pb pb1">🌸</span>
        <span class="pb pb2">🌷</span>
        <span class="pb pb3">🌸</span>
      </div>
      <h2 class="penutup-judul">for you, always.</h2>
      <p class="penutup-teks">
        makasih udah mau baca semuanya sampai sini 🤍<br>
        semoga harimu seindah senyum kamu,<br>
        dan semoga kamu selalu bahagia, hari ini dan seterusnya.
      </p>
      <div class="penutup-divider"></div>
      <p class="penutup-dari">with love,<br><span class="penutup-nama-pengirim">dari yang selalu ada buat kamu 🤍</span></p>
      <div class="penutup-hearts-row">
        <span class="ph ph1">🤍</span>
        <span class="ph ph2">Your Future</span>
        <span class="ph ph3">🤍</span>
      </div>
    </div>
  `;

  document.getElementById('content').appendChild(slideTujuh);

  // Confetti lagi sebagai penutup yang meriah
  setTimeout(() => {
    confetti();
  }, 800);
};
// ─────────────────────────────────────────────────────────────────────────────


new TypeIt("#teks1", {
  strings: [
    "happy sweet seventeenn sayaaangggkuu Adinda Janeeta 🤍",
    "hari ini bukan cuma nambah umur kamu, tapi nambah juga semua hal indah yang ada di diri kamu.",
    "aku bersyukur banget bisa kenal kamu, bisa deket sama kamu, dan bisa jadi bagian dari hidup kamu sekarang.",
    "semoga semua hal baik selalu dateng ke kamu, pelan pelan tapi pasti, sesuai sama yang kamu butuhin.",
    "dan semoga semua rasa capek, sedih, sama takut yang pernah kamu rasain, pelan pelan diganti jadi bahagia yaa."
  ],
  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: [
    "aku tau kamu kuat, tapi aku juga ga mau kamu selalu ngelewatin semuanya sendirian.",
    "disini ada aku yang bakal nemenin kamu, dengerin kamu, dan jagain kamu sebisa aku.",
    "aku ga bakal ninggalin kamu, aku milih buat tetep disini sama kamu, jalanin semuanya bareng bareng.",
    "kita jaga satu sama lain yaa, saling ngertiin, saling jagain hati, dan tetep bareng apapun keadaannya.",
    "once again, happy 17th sayang, i love you more than words can say 🤍"
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();

new TypeIt("#teks3", {
  strings: [
    "di umur kamu yang ke 17 ini, aku harap kamu makin kuat, makin dewasa, tapi tetep jadi kamu yang aku kenal.",
    "yang selalu bikin aku nyaman, yang selalu punya cara buat bikin aku senyum.",
    "kalau suatu saat kamu capek, takut, atau ngerasa sendirian, inget yaa… kamu punya aku disini.",
    "aku bakal tetep ada, ga kemana mana, nemenin kamu pelan pelan ngelewatin semuanya.",
    "kita jalanin bareng ya sayaanggg, sampe sejauh mungkin kita bisa 🤍"
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();


new TypeIt("#trims", {
  strings: ["Terimakasih."],
  startDelay: 2000,
  speed: 150,
  loop: false,
  waitUntilVisible: true,
}).go();

'use strict';

var onlyOnKonami = false;

function confetti() {
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000;
  var isRunning = true;

  setTimeout(() => {
    isRunning = false;
  }, runFor);

  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () { return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0); },
    function () { var black = 200 * random() | 0; return color(200, black, black); },
    function () { var black = 200 * random() | 0; return color(black, 200, black); },
    function () { var black = 200 * random() | 0; return color(black, black, 200); },
    function () { return color(200, 100, 200 * random() | 0); },
    function () { return color(200 * random() | 0, 200, 200); },
    function () { var black = 256 * random() | 0; return color(black, black, black); },
    function () { return colorThemes[random() < .5 ? 1 : 2](); },
    function () { return colorThemes[random() < .5 ? 3 : 5](); },
    function () { return colorThemes[random() < .5 ? 2 : 4](); }
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;
      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        if (a >= c && a < d)
          if (b > d) domain[l] = d;
          else domain.splice(l, 2);
        else if (a < c && b > c)
          if (b <= d) domain[i] = c;
          else domain.splice(i, 0, c, d);
      }
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }
    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();
    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' + cos(360 * random()) + ',' + cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';
    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i], this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;
      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      document.body.appendChild(container);
      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
        count = 0;
      (function addConfetto() {
        if (onlyOnKonami && ++count > particles) return timer = undefined;
        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);
          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();
        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }
        if (timer || confetti.length) return frame = requestAnimationFrame(loop);
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer = konami[pointer] === event.which ? pointer + 1 : +(event.which === konami[0]);
    if (pointer === konami.length) { pointer = 0; poof(); }
  });

  if (!onlyOnKonami) poof();
};