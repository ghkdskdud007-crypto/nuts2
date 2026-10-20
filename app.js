/**
 * 특수학교 1학년 견과류 포장하기 어플리케이션 (app.js)
 * 아이패드 가로 화면 최적화, 유니버설 사운드 & Web Speech TTS 내장
 */

// ============================================================
// 1. 견과류 데이터 및 SVG 그래픽 템플릿 정의
// ============================================================
const NUTS_DATA = {
  almond: {
    id: 'almond',
    name: '아몬드',
    requiredCount: 4,
    orderIndex: 0,
    color: '#b6733a',
    desc: '길쭉하고 단단하며 고소한 아몬드예요',
    clue: '길쭉한 모양에 갈색 옷을 입은 고소한 견과류예요!',
    svg: `
      <svg class="nut-svg" viewBox="0 0 160 160">
        <defs>
          <radialGradient id="almG" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#e8b887"/>
            <stop offset="60%" stop-color="#b6733a"/>
            <stop offset="100%" stop-color="#7a4216"/>
          </radialGradient>
        </defs>
        <path d="M80 15 C115 45, 140 90, 125 125 C110 150, 50 150, 35 125 C20 90, 45 45, 80 15 Z" fill="url(#almG)" stroke="#5c300d" stroke-width="3"/>
        <path d="M80 30 Q88 75 80 135" stroke="#f3caa1" stroke-width="2.5" fill="none" opacity="0.6"/>
        <path d="M60 50 Q55 85 62 125" stroke="#602e08" stroke-width="2" fill="none" opacity="0.4"/>
        <path d="M100 50 Q105 85 98 125" stroke="#602e08" stroke-width="2" fill="none" opacity="0.4"/>
        <circle cx="68" cy="85" r="4" fill="#301502"/>
        <circle cx="92" cy="85" r="4" fill="#301502"/>
        <circle cx="70" cy="83" r="1.5" fill="#ffffff"/>
        <circle cx="94" cy="83" r="1.5" fill="#ffffff"/>
        <path d="M74 95 Q80 102 86 95" stroke="#301502" stroke-width="2" fill="none" stroke-linecap="round"/>
        <ellipse cx="60" cy="92" rx="4" ry="2.5" fill="#ff9999" opacity="0.6"/>
        <ellipse cx="100" cy="92" rx="4" ry="2.5" fill="#ff9999" opacity="0.6"/>
      </svg>`
  },
  walnut: {
    id: 'walnut',
    name: '호두',
    requiredCount: 4,
    orderIndex: 1,
    color: '#be8a56',
    desc: '울퉁불퉁 동글동글 뇌 모양을 닮은 호두예요',
    clue: '울퉁불퉁하고 동글동글한 호두예요!',
    svg: `
      <svg class="nut-svg" viewBox="0 0 160 160">
        <defs>
          <radialGradient id="walG" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#eed5b2"/>
            <stop offset="60%" stop-color="#be8a56"/>
            <stop offset="100%" stop-color="#7c4f27"/>
          </radialGradient>
        </defs>
        <path d="M80 18 C115 15, 142 50, 140 90 C138 125, 115 145, 80 145 C45 145, 22 125, 20 90 C18 50, 45 15, 80 18 Z" fill="url(#walG)" stroke="#593414" stroke-width="3"/>
        <path d="M80 18 L80 145" stroke="#593414" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M45 45 Q70 65 50 85 Q70 105 45 125" stroke="#703f16" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M115 45 Q90 65 110 85 Q90 105 115 125" stroke="#703f16" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="62" cy="72" r="4" fill="#301502"/>
        <circle cx="98" cy="72" r="4" fill="#301502"/>
        <circle cx="64" cy="70" r="1.5" fill="#ffffff"/>
        <circle cx="100" cy="70" r="1.5" fill="#ffffff"/>
        <path d="M72 82 Q80 88 88 82" stroke="#301502" stroke-width="2" fill="none" stroke-linecap="round"/>
        <ellipse cx="55" cy="78" rx="4" ry="2.5" fill="#ff9999" opacity="0.6"/>
        <ellipse cx="105" cy="78" rx="4" ry="2.5" fill="#ff9999" opacity="0.6"/>
      </svg>`
  },
  pecan: {
    id: 'pecan',
    name: '피칸',
    requiredCount: 2,
    orderIndex: 2,
    color: '#934628',
    desc: '진한 갈색 세로 줄무늬 홈이 있는 피칸이에요',
    clue: '진한 갈색에 곧게 뻗은 줄무늬가 있는 피칸이에요!',
    svg: `
      <svg class="nut-svg" viewBox="0 0 160 160">
        <defs>
          <radialGradient id="pecG" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#c97c5d"/>
            <stop offset="60%" stop-color="#934628"/>
            <stop offset="100%" stop-color="#55220c"/>
          </radialGradient>
        </defs>
        <ellipse cx="80" cy="80" rx="46" ry="65" fill="url(#pecG)" stroke="#451805" stroke-width="3"/>
        <path d="M80 20 L80 140" stroke="#451805" stroke-width="3" stroke-linecap="round"/>
        <path d="M62 30 Q65 80 62 130" stroke="#f0a58a" stroke-width="2.5" fill="none" opacity="0.5"/>
        <path d="M98 30 Q95 80 98 130" stroke="#f0a58a" stroke-width="2.5" fill="none" opacity="0.5"/>
        <path d="M50 45 Q55 80 52 115" stroke="#3d1504" stroke-width="2" fill="none"/>
        <path d="M110 45 Q105 80 108 115" stroke="#3d1504" stroke-width="2" fill="none"/>
        <circle cx="68" cy="75" r="4" fill="#ffffff"/>
        <circle cx="92" cy="75" r="4" fill="#ffffff"/>
        <circle cx="68" cy="75" r="2.5" fill="#301502"/>
        <circle cx="92" cy="75" r="2.5" fill="#301502"/>
        <path d="M74 88 Q80 94 86 88" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round"/>
        <ellipse cx="60" cy="82" rx="4" ry="2.5" fill="#ff7777" opacity="0.7"/>
        <ellipse cx="100" cy="82" rx="4" ry="2.5" fill="#ff7777" opacity="0.7"/>
      </svg>`
  },
  cashew: {
    id: 'cashew',
    name: '캐슈넛',
    requiredCount: 2,
    orderIndex: 3,
    color: '#c9a557',
    desc: '부드러운 초승달, 바나나 모양 캐슈넛이에요',
    clue: '밝은 크림색에 구부러진 초승달 모양 캐슈넛이에요!',
    svg: `
      <svg class="nut-svg" viewBox="0 0 160 160">
        <defs>
          <radialGradient id="casG" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fff8db"/>
            <stop offset="55%" stop-color="#f5e0a3"/>
            <stop offset="100%" stop-color="#c9a557"/>
          </radialGradient>
        </defs>
        <path d="M65 20 C110 15, 145 55, 135 105 C130 130, 100 145, 80 140 C55 135, 60 110, 75 105 C95 100, 105 80, 95 55 C88 40, 65 42, 50 35 C42 30, 48 22, 65 20 Z" fill="url(#casG)" stroke="#927027" stroke-width="3"/>
        <circle cx="98" cy="65" r="4" fill="#46310a"/>
        <circle cx="116" cy="75" r="4" fill="#46310a"/>
        <circle cx="100" cy="63" r="1.5" fill="#ffffff"/>
        <circle cx="118" cy="73" r="1.5" fill="#ffffff"/>
        <path d="M102 82 Q110 88 114 80" stroke="#46310a" stroke-width="2" fill="none" stroke-linecap="round"/>
        <ellipse cx="94" cy="72" rx="4" ry="2.5" fill="#ffaaaa" opacity="0.7"/>
        <ellipse cx="122" cy="82" rx="4" ry="2.5" fill="#ffaaaa" opacity="0.7"/>
      </svg>`
  }
};

// 순서별 전체 목록: 아몬드 4개 -> 호두 4개 -> 피칸 2개 -> 캐슈넛 2개 (총 12개)
const PACKING_SEQUENCE = [
  'almond', 'almond', 'almond', 'almond',
  'walnut', 'walnut', 'walnut', 'walnut',
  'pecan', 'pecan',
  'cashew', 'cashew'
];

// ============================================================
// 2. 사운드 이펙트 & 음성 합성(TTS) 엔진
// ============================================================
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.speechSynthesis = window.speechSynthesis || null;
    this.lastSpokenText = '';
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playDingDong() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // 딩 (C5, 523Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(523.25, now);
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.45);

    // 동 (G5, 783.99Hz)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(783.99, now + 0.22);
    gain2.gain.setValueAtTime(0.45, now + 0.22);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.22);
    osc2.stop(now + 0.85);
  }

  playBuzzer() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // 부드러운 저음 보잉 효과 (학생들이 무서워하지 않도록)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.4);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.12);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  playFanfare() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const startTime = ctx.currentTime + idx * 0.12;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.35, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.5);
    });
  }

  playSealingSound() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    // 열선 가열 쉬이익- 효과
    const bufferSize = ctx.sampleRate * 1.0;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.Q.setValueAtTime(3, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 1.0);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(now);
  }

  speak(text) {
    this.lastSpokenText = text;
    // 상단 안내 말풍선 텍스트 실시간 반영
    const speechEl = document.getElementById('speechText');
    if (speechEl) {
      speechEl.textContent = text;
    }

    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // 이전 음성 즉시 중단

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.88; // 특수교육 학생들을 위해 약간 천천히 또박또박 발음
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
  }

  replayLastSpeech() {
    if (this.lastSpokenText) {
      this.speak(this.lastSpokenText);
    }
  }
}

const sounds = new SoundEngine();

// ============================================================
// 3. 팡파레 축하 콘페티 파티클 시스템
// ============================================================
class ConfettiCannon {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  launch(count = 90) {
    if (!this.canvas) return;
    this.resize();
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: this.canvas.height + 20,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 18 - 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 12 + 8,
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10
      });
    }
    if (!this.animId) {
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // 중력
      p.rotation += p.rSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();

      if (p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }
}

const confetti = new ConfettiCannon('confettiCanvas');

// ============================================================
// 4. 네비게이션 관리자 (메인 페이지 & 서브탭 전환)
// ============================================================
class NavigationManager {
  constructor() {
    this.activePage = 'page1';
    this.init();
  }

  init() {
    // 상단 네비게이션 탭 클릭
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sounds.init();
        const pageId = btn.getAttribute('data-page');
        this.switchPage(pageId);
      });
    });

    // 각 페이지 내 서브탭 클릭
    document.querySelectorAll('.sub-tab-btn').forEach(subBtn => {
      subBtn.addEventListener('click', (e) => {
        sounds.init();
        const parentSubNav = subBtn.closest('.page-section');
        if (!parentSubNav) return;
        parentSubNav.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
        subBtn.classList.add('active');

        const targetSubId = subBtn.getAttribute('data-sub');
        parentSubNav.querySelectorAll('.sub-section').forEach(sec => {
          sec.classList.remove('active');
        });
        const targetSub = document.getElementById(targetSubId);
        if (targetSub) {
          targetSub.classList.add('active');
        }

        // 서브탭 전환 시 안내 음성
        this.onSubTabSwitched(targetSubId);
      });
    });

    // 퀵 컨트롤 이벤트
    const ttsReplayBtn = document.getElementById('ttsReplayBtn');
    if (ttsReplayBtn) {
      ttsReplayBtn.addEventListener('click', () => sounds.replayLastSpeech());
    }
    const speakNowBtn = document.getElementById('speakNowBtn');
    if (speakNowBtn) {
      speakNowBtn.addEventListener('click', () => sounds.replayLastSpeech());
    }
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        sounds.soundEnabled = !sounds.soundEnabled;
        soundToggleBtn.innerHTML = sounds.soundEnabled ? '🔔 <span class="ctrl-label">효과음 켜짐</span>' : '🔕 <span class="ctrl-label">효과음 꺼짐</span>';
      });
    }
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }
  }

  switchPage(pageId) {
    this.activePage = pageId;
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-page') === pageId);
    });
    document.querySelectorAll('.page-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === pageId);
    });

    // 페이지 진입 안내 음성
    switch (pageId) {
      case 'page1':
        sounds.speak("1페이지입니다. 견과류 카드를 눌러 이름을 배우고, 퀴즈를 풀어보세요!");
        break;
      case 'page2':
        sounds.speak("활동 1입니다. 아몬드 4개, 호두 4개, 피칸 2개, 캐슈넛 2개를 순서대로 봉투에 담아보세요!");
        break;
      case 'page3':
        sounds.speak("활동 2입니다. 작업지시서를 보고 견과류를 포장한 뒤 카메라에 비춰주세요!");
        break;
      case 'page4':
        sounds.speak("활동 3입니다. 완성한 봉투를 비춰 최종 품질 검수를 받고, 라벨지를 붙여주세요!");
        break;
    }
  }

  onSubTabSwitched(subId) {
    if (subId === 'sub1-learn') {
      sounds.speak("견과류 카드를 손가락으로 콕 누르면 이름을 들을 수 있어요.");
    } else if (subId === 'sub1-quiz') {
      page1Quiz.startQuiz();
    } else if (subId === 'sub2-step1') {
      sounds.speak("1단계입니다. 아몬드 4개부터 순서대로 봉투에 드래그해보세요!");
    } else if (subId === 'sub2-step2') {
      sounds.speak("2단계 도움 모드입니다. 번호 순서대로 숫자를 보고 드래그해보세요!");
    } else if (subId === 'sub2-step3') {
      sounds.speak("3단계 터치 모드입니다. 견과류를 톡 누르기만 해도 봉투에 쏙 들어갑니다!");
    } else if (subId === 'sub3-seq') {
      sounds.speak("1단계 순서대로 포장하기입니다. 아몬드 4개부터 차례대로 포장해보세요!");
    } else if (subId === 'sub3-batch') {
      sounds.speak("2단계 쉬운 모드입니다. 작업지시: 분류된 견과류를 봉투에 담고 포장하세요.");
      if (page3Packing) {
        page3Packing.initBatchModeView();
      }
    }
  }
}

// ============================================================
// 5. 첫번째 페이지: 견과류 알아보기 & 이름 맞추기 퀴즈
// ============================================================
class Page1QuizManager {
  constructor() {
    this.quizList = ['almond', 'walnut', 'pecan', 'cashew'];
    this.currentIndex = 0;
    this.score = 0;
    this.init();
  }

  init() {
    // 1-1. 카드 누르면 이름 음성 재생
    document.querySelectorAll('.nut-card').forEach(card => {
      card.addEventListener('click', () => {
        sounds.init();
        const nutKey = card.getAttribute('data-nut');
        const nutInfo = NUTS_DATA[nutKey];
        if (nutInfo) {
          sounds.playPop();
          sounds.speak(`${nutInfo.name}! ${nutInfo.desc}`);
          // 카드 클릭 팝 애니메이션
          card.style.transform = 'scale(1.08)';
          setTimeout(() => card.style.transform = '', 300);
        }
      });
    });

    // 퀴즈 문제 다시 듣기 버튼
    const quizHearBtn = document.getElementById('quizHearTargetBtn');
    if (quizHearBtn) {
      quizHearBtn.addEventListener('click', () => {
        const curNutKey = this.quizList[this.currentIndex];
        const nut = NUTS_DATA[curNutKey];
        sounds.speak(`${nut.name}을 찾아보세요! ${nut.clue}`);
      });
    }

    // 다음 문제 버튼
    const quizNextBtn = document.getElementById('quizNextBtn');
    if (quizNextBtn) {
      quizNextBtn.addEventListener('click', () => {
        this.nextQuestion();
      });
    }
  }

  startQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    this.renderQuestion();
  }

  renderQuestion() {
    const curNutKey = this.quizList[this.currentIndex];
    const targetNut = NUTS_DATA[curNutKey];

    // 질문 및 프로그레스 업데이트
    document.getElementById('quizProgressText').textContent = `문제 ${this.currentIndex + 1} / 4`;
    document.getElementById('quizTargetText').textContent = targetNut.name;
    document.getElementById('quizClueBox').textContent = `힌트: ${targetNut.clue}`;
    document.getElementById('quizFeedbackBanner').style.display = 'none';

    // 별점 렌더링
    const starsContainer = document.getElementById('quizScoreStars');
    starsContainer.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      const star = document.createElement('span');
      star.className = `star-slot ${i < this.score ? 'filled' : 'empty'}`;
      star.textContent = '⭐';
      starsContainer.appendChild(star);
    }

    // 선택지 생성 (4개 셔플)
    const optionsGrid = document.getElementById('quizOptionsGrid');
    optionsGrid.innerHTML = '';
    const keys = Object.keys(NUTS_DATA).sort(() => Math.random() - 0.5);

    keys.forEach(key => {
      const nut = NUTS_DATA[key];
      const card = document.createElement('div');
      card.className = 'quiz-option-card';
      card.innerHTML = `
        <div class="opt-img-box">${nut.svg}</div>
        <div class="quiz-opt-name">${nut.name}</div>
      `;
      card.addEventListener('click', () => this.handleOptionClick(key, card));
      optionsGrid.appendChild(card);
    });

    sounds.speak(`${targetNut.name}을 찾아보세요!`);
  }

  handleOptionClick(selectedKey, cardElement) {
    const curNutKey = this.quizList[this.currentIndex];
    const targetNut = NUTS_DATA[curNutKey];
    const banner = document.getElementById('quizFeedbackBanner');
    const icon = document.getElementById('feedbackIcon');
    const msg = document.getElementById('feedbackMsg');
    const nextBtn = document.getElementById('quizNextBtn');

    if (selectedKey === curNutKey) {
      // 정답!
      sounds.playDingDong();
      confetti.launch(40);
      cardElement.classList.add('correct-anim');
      this.score++;

      icon.textContent = '🎉';
      msg.textContent = `딩동댕! 정답입니다! 멋지게 ${targetNut.name}을 찾았어요!`;
      sounds.speak(`딩동댕! 정답입니다! ${targetNut.name}이 맞아요! 참 잘했어요!`);
      banner.style.display = 'flex';
      banner.style.backgroundColor = '#e8f5e9';
      banner.style.borderColor = '#81c784';

      // 마지막 문제인지 체크
      if (this.currentIndex >= this.quizList.length - 1) {
        nextBtn.textContent = '퀴즈 완료! 활동 1로 가기 ➜';
      } else {
        nextBtn.textContent = '다음 문제 ➜';
      }
    } else {
      // 오답!
      sounds.playBuzzer();
      cardElement.classList.add('wrong-anim');
      setTimeout(() => cardElement.classList.remove('wrong-anim'), 500);

      icon.textContent = '💡';
      msg.textContent = `아쉬워요! 이것은 ${NUTS_DATA[selectedKey].name}이에요. 다시 찾아볼까요?`;
      sounds.speak(`아쉬워요. 이것은 ${NUTS_DATA[selectedKey].name}이에요. ${targetNut.name}을 다시 찾아보세요!`);
      banner.style.display = 'flex';
      banner.style.backgroundColor = '#fff3e0';
      banner.style.borderColor = '#ffb74d';
      nextBtn.textContent = '다시 해보기 🔄';
    }
  }

  nextQuestion() {
    const banner = document.getElementById('quizFeedbackBanner');
    banner.style.display = 'none';

    if (this.currentIndex >= this.quizList.length - 1) {
      // 퀴즈 모두 완료
      sounds.playFanfare();
      confetti.launch(80);
      sounds.speak("축하합니다! 4가지 견과류 이름을 모두 맞췄습니다! 이제 활동 1 포장 연습을 해볼까요?");
      // 활동 1 페이지로 자동 전환 제안
      setTimeout(() => {
        navManager.switchPage('page2');
      }, 1500);
      return;
    }

    this.currentIndex++;
    this.renderQuestion();
  }
}

// ============================================================
// 6. 두번째 페이지: 활동 1 - 견과류 포장 연습하기 (3단계 모드)
// ============================================================
class Page2PracticeManager {
  constructor() {
    this.packedList = []; // 담은 견과류 ID 배열
    this.isPackingLock = false;
    this.lastPackTime = 0;
    this.lastTouchDropTime = 0;
    this.init();
  }

  init() {
    // 다시 담기 버튼
    document.getElementById('resetPracticeBtn').addEventListener('click', () => {
      this.resetAllModes();
      sounds.speak("봉투를 비웠습니다. 다시 순서대로 담아보세요!");
    });

    // 확인하기 버튼
    document.getElementById('checkPracticeBtn').addEventListener('click', () => {
      this.evaluatePractice();
    });

    // 점수 모달 닫기 및 활동 2 이동 버튼
    document.getElementById('closeScoreModalBtn').addEventListener('click', () => {
      document.getElementById('scoreModal').style.display = 'none';
    });
    document.getElementById('scoreModalConfirmBtn').addEventListener('click', () => {
      document.getElementById('scoreModal').style.display = 'none';
      navManager.switchPage('page3');
    });

    // 1단계 기본 트레이 & 봉투 초기화
    this.setupStep1NormalMode();

    // 2단계 숫자 가이드 모드 초기화
    this.setupStep2NumberedMode();

    // 3단계 원터치 모드 초기화
    this.setupStep3TouchMode();
  }

  resetAllModes() {
    this.packedList = [];
    this.isPackingLock = false;
    this.lastPackTime = 0;
    this.updateRecipeChips();
    this.setupStep1NormalMode();
    this.setupStep2NumberedMode();
    this.setupStep3TouchMode();
  }

  getCurrentTarget() {
    const nextIdx = this.packedList.length;
    if (nextIdx >= PACKING_SEQUENCE.length) return null;
    const targetNutKey = PACKING_SEQUENCE[nextIdx];
    return {
      index: nextIdx,
      nutKey: targetNutKey,
      nut: NUTS_DATA[targetNutKey]
    };
  }

  updateRecipeChips() {
    // 4개 견과류별 담은 개수 집계
    const counts = { almond: 0, walnut: 0, pecan: 0, cashew: 0 };
    this.packedList.forEach(id => counts[id]++);

    // 칩 상태 업데이트
    const chipA = document.getElementById('chipAlmond');
    const chipW = document.getElementById('chipWalnut');
    const chipP = document.getElementById('chipPecan');
    const chipC = document.getElementById('chipCashew');

    chipA.classList.toggle('completed', counts.almond >= 4);
    chipW.classList.toggle('completed', counts.walnut >= 4);
    chipP.classList.toggle('completed', counts.pecan >= 2);
    chipC.classList.toggle('completed', counts.cashew >= 2);

    chipA.querySelector('.chip-count').textContent = `${counts.almond}/4개`;
    chipW.querySelector('.chip-count').textContent = `${counts.walnut}/4개`;
    chipP.querySelector('.chip-count').textContent = `${counts.pecan}/2개`;
    chipC.querySelector('.chip-count').textContent = `${counts.cashew}/2개`;

    const target = this.getCurrentTarget();
    [chipA, chipW, chipP, chipC].forEach(c => c.classList.remove('active-target'));
    if (target) {
      if (target.nutKey === 'almond') chipA.classList.add('active-target');
      if (target.nutKey === 'walnut') chipW.classList.add('active-target');
      if (target.nutKey === 'pecan') chipP.classList.add('active-target');
      if (target.nutKey === 'cashew') chipC.classList.add('active-target');
    }
  }

  // ----------------------------------------------------
  // 2-1: 1단계 일반 순서 드래그 앤 드롭 모드
  // ----------------------------------------------------
  setupStep1NormalMode() {
    const tray = document.getElementById('trayGrid1');
    const pouchInside = document.getElementById('pouchInside1');
    const countBadge = document.getElementById('bagCountBadge1');
    const turnGuide = document.getElementById('turnGuideText1');

    tray.innerHTML = '';
    pouchInside.innerHTML = '<div class="pouch-placeholder">이곳에 견과류를 차례대로 넣어주세요!</div>';
    countBadge.textContent = `담은 개수: 0 / 12개`;

    // 12개 견과류 아이템 생성 (재료통에 배치)
    PACKING_SEQUENCE.forEach((nutKey, idx) => {
      const nut = NUTS_DATA[nutKey];
      const item = document.createElement('div');
      item.className = 'drag-nut-item';
      item.id = `dragItem1_${idx}`;
      item.setAttribute('draggable', 'true');
      item.setAttribute('data-nut', nutKey);
      item.setAttribute('data-seq-id', idx);
      item.innerHTML = `
        ${nut.svg}
        <span class="item-name-tag">${nut.name}</span>
      `;

      // 드래그 이벤트 (마우스 및 터치 겸용)
      this.attachUniversalDrag(item, (draggedNutKey, itemElem) => {
        this.attemptPackNut(draggedNutKey, itemElem, 1);
      });

      tray.appendChild(item);
    });

    this.setupDropZone(document.getElementById('pouchZone1'));
    this.updateTurnGuideText(1);
  }

  // ----------------------------------------------------
  // 2-2: 2단계 숫자 가이드 드래그 모드 (도움 모드)
  // ----------------------------------------------------
  setupStep2NumberedMode() {
    const tray = document.getElementById('trayGrid2');
    const slotsGrid = document.getElementById('numberedSlotsGrid');
    const countBadge = document.getElementById('bagCountBadge2');

    tray.innerHTML = '';
    slotsGrid.innerHTML = '';
    countBadge.textContent = `담은 개수: 0 / 12개`;

    // 12개 슬롯 자리 생성
    PACKING_SEQUENCE.forEach((nutKey, idx) => {
      const nut = NUTS_DATA[nutKey];
      const slot = document.createElement('div');
      slot.className = `slot-box ${idx === 0 ? 'active-slot' : ''}`;
      slot.id = `slot2_${idx}`;
      slot.innerHTML = `
        <span class="slot-number">${idx + 1}</span>
        <span class="slot-guide-label">${nut.name}</span>
      `;
      slotsGrid.appendChild(slot);
    });

    // 번호 배지가 달린 재료통 아이템 생성
    PACKING_SEQUENCE.forEach((nutKey, idx) => {
      const nut = NUTS_DATA[nutKey];
      const item = document.createElement('div');
      item.className = 'drag-nut-item';
      item.id = `dragItem2_${idx}`;
      item.setAttribute('draggable', 'true');
      item.setAttribute('data-nut', nutKey);
      item.setAttribute('data-seq-id', idx);
      item.innerHTML = `
        <span class="item-order-badge">${idx + 1}</span>
        ${nut.svg}
        <span class="item-name-tag">${nut.name}</span>
      `;

      this.attachUniversalDrag(item, (draggedNutKey, itemElem) => {
        this.attemptPackNut(draggedNutKey, itemElem, 2);
      });

      tray.appendChild(item);
    });

    this.setupDropZone(document.getElementById('pouchZone2'));
    this.updateTurnGuideText(2);
  }

  // ----------------------------------------------------
  // 2-3: 3단계 원터치 모드 (제일 단순하게 터치만 해도 담기)
  // ----------------------------------------------------
  setupStep3TouchMode() {
    const tray = document.getElementById('trayGrid3');
    const pouchInside = document.getElementById('pouchInside3');
    const countBadge = document.getElementById('bagCountBadge3');

    tray.innerHTML = '';
    pouchInside.innerHTML = '<div class="pouch-placeholder">견과류를 누르면 자동으로 쏙 들어옵니다!</div>';
    countBadge.textContent = `담은 개수: 0 / 12개`;

    // 4가지 견과류 대형 원터치 버튼
    const nutKeys = ['almond', 'walnut', 'pecan', 'cashew'];
    nutKeys.forEach(nutKey => {
      const nut = NUTS_DATA[nutKey];
      const btn = document.createElement('div');
      btn.className = 'touch-nut-button';
      btn.innerHTML = `
        ${nut.svg}
        <span class="touch-btn-title">${nut.name}</span>
        <span class="touch-btn-sub">👆 터치하여 담기</span>
      `;

      btn.addEventListener('click', () => {
        sounds.init();
        this.attemptPackNut(nutKey, null, 3);
      });

      tray.appendChild(btn);
    });

    this.updateTurnGuideText(3);
  }

  // 범용 마우스/터치 드래그 이벤트 바인딩
  attachUniversalDrag(element, onDropCallback) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let clone = null;

    // HTML5 표준 드래그 (데스크톱)
    element.addEventListener('dragstart', (e) => {
      if (element.classList.contains('used') || this.isPackingLock) {
        e.preventDefault();
        return;
      }
      sounds.init();
      e.dataTransfer.setData('text/plain', element.getAttribute('data-nut'));
      e.dataTransfer.setData('element-id', element.id);
      element.classList.add('dragging');
    });

    element.addEventListener('dragend', () => {
      element.classList.remove('dragging');
    });

    // 터치 스크린 (아이패드 Safari 최적화)
    element.addEventListener('touchstart', (e) => {
      if (element.classList.contains('used') || this.isPackingLock) {
        return;
      }
      sounds.init();
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isDragging = true;

      // 시각적 고스트 클론 생성
      clone = element.cloneNode(true);
      clone.style.position = 'fixed';
      clone.style.zIndex = '9999';
      clone.style.pointerEvents = 'none';
      clone.style.opacity = '0.85';
      clone.style.width = `${element.offsetWidth}px`;
      clone.style.height = `${element.offsetHeight}px`;
      clone.style.left = `${startX - element.offsetWidth / 2}px`;
      clone.style.top = `${startY - element.offsetHeight / 2}px`;
      document.body.appendChild(clone);
    }, { passive: true });

    element.addEventListener('touchmove', (e) => {
      if (!isDragging || !clone) return;
      const touch = e.touches[0];
      clone.style.left = `${touch.clientX - element.offsetWidth / 2}px`;
      clone.style.top = `${touch.clientY - element.offsetHeight / 2}px`;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      if (clone) {
        const touch = e.changedTouches[0];
        const targetDrop = document.elementFromPoint(touch.clientX, touch.clientY);
        clone.remove();
        clone = null;

        // 드롭 영역 판정
        if (targetDrop) {
          const pouchDrop = targetDrop.closest('.pouch-drop-zone');
          if (pouchDrop) {
            this.lastTouchDropTime = Date.now();
            const nutKey = element.getAttribute('data-nut');
            onDropCallback(nutKey, element);
          }
        }
      }
    });
  }

  // 드롭 존 설정 (HTML5 Drag over & Drop)
  setupDropZone(zoneElement) {
    if (!zoneElement || zoneElement._hasDropListener) return;
    zoneElement._hasDropListener = true;

    zoneElement.addEventListener('dragover', (e) => {
      e.preventDefault();
      zoneElement.classList.add('drag-over');
    });

    zoneElement.addEventListener('dragleave', () => {
      zoneElement.classList.remove('drag-over');
    });

    zoneElement.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      zoneElement.classList.remove('drag-over');

      // 터치 드롭과 중복 실행 방지 (아이패드 등 터치 후 600ms 이내 합성 drop 무시)
      if (Date.now() - this.lastTouchDropTime < 600) {
        return;
      }

      const nutKey = e.dataTransfer.getData('text/plain');
      const elemId = e.dataTransfer.getData('element-id');
      const itemElem = document.getElementById(elemId);
      
      // 어느 모드인지 판단
      let modeNum = 1;
      if (zoneElement.id === 'pouchZone2') modeNum = 2;
      this.attemptPackNut(nutKey, itemElem, modeNum);
    });
  }

  // 핵심 로직: 올바른 순서대로 담고 있는지 판정 및 피드백 출력! (단 1개씩만 담기도록 철저히 보장)
  attemptPackNut(draggedNutKey, itemElem, modeNum) {
    // 1. 이미 사용 완료된 아이템이면 절대 무시
    if (itemElem && itemElem.classList.contains('used')) {
      return;
    }

    // 2. 연속 드롭 방지 락 (최소 400ms 텀 보장)
    const now = Date.now();
    if (this.isPackingLock || (now - this.lastPackTime < 400)) {
      return;
    }

    const nextIdx = this.packedList.length;

    // 이미 12개 다 담았는지 확인
    if (nextIdx >= PACKING_SEQUENCE.length) {
      sounds.speak("이미 모든 견과류 12개를 다 담았습니다! [확인하기] 버튼을 눌러 점수를 확인해보세요.");
      return;
    }

    // 3. 2단계 숫자 보고 드래그하기 모드: 순서 번호(1~12) 일치 여부 엄격 검사
    if (modeNum === 2 && itemElem) {
      const seqId = parseInt(itemElem.getAttribute('data-seq-id'), 10);
      if (!isNaN(seqId) && seqId !== nextIdx) {
        sounds.playBuzzer();
        const expectedNut = NUTS_DATA[PACKING_SEQUENCE[nextIdx]];
        const errMsg = `지금은 ${nextIdx + 1}번 ${expectedNut.name}을 넣을 차례입니다!`;
        sounds.speak(errMsg);
        this.showTemporaryAlert(errMsg);
        return;
      }
    }

    const expectedNutKey = PACKING_SEQUENCE[nextIdx];
    const expectedNut = NUTS_DATA[expectedNutKey];

    // 현재 단계에서 아몬드 몇 번째인지, 피칸 몇 번째인지 친절하게 계산
    const currentNutCount = this.packedList.filter(id => id === expectedNutKey).length + 1;

    // 만약 순서대로 담지 못해 오류가 났을 때!
    if (draggedNutKey !== expectedNutKey) {
      sounds.playBuzzer();
      let errorMsg = "";
      if (expectedNutKey === 'almond') {
        errorMsg = `아몬드 1개를 넣어주세요! (아몬드 ${currentNutCount}번째 차례입니다)`;
      } else if (expectedNutKey === 'walnut') {
        errorMsg = `호두 1개를 넣을 차례입니다! (호두 ${currentNutCount}번째)`;
      } else if (expectedNutKey === 'pecan') {
        errorMsg = `피칸 1개를 넣을 차례입니다! (피칸 ${currentNutCount}번째)`;
      } else if (expectedNutKey === 'cashew') {
        errorMsg = `캐슈넛 1개를 넣을 차례입니다! (캐슈넛 ${currentNutCount}번째)`;
      }

      sounds.speak(errorMsg);
      this.showTemporaryAlert(errorMsg);
      return;
    }

    // 4. 올바르게 순서대로 '단 1개' 담았을 때 처리!
    this.isPackingLock = true;
    this.lastPackTime = now;
    setTimeout(() => {
      this.isPackingLock = false;
    }, 380);

    sounds.playPop();
    this.packedList.push(draggedNutKey);

    // 해당 아이템 사용 완료 마킹 및 추가 드래그 원천 차단
    if (itemElem) {
      itemElem.classList.add('used');
      itemElem.setAttribute('draggable', 'false');
      itemElem.style.pointerEvents = 'none';
    }

    // 봉투 그래픽 갱신
    this.renderPouchContents(modeNum);
    this.updateRecipeChips();
    this.updateTurnGuideText(modeNum);

    // 완료 체크
    if (this.packedList.length === PACKING_SEQUENCE.length) {
      sounds.playDingDong();
      confetti.launch(50);
      sounds.speak("참 잘했어요! 아몬드 4개, 호두 4개, 피칸 2개, 캐슈넛 2개를 순서대로 모두 담았습니다! [확인하기] 버튼을 눌러보세요.");
    } else {
      // 다음 차례 부드럽게 안내
      const nextTarget = this.getCurrentTarget();
      const nextCount = this.packedList.filter(id => id === nextTarget.nutKey).length + 1;
      if (modeNum === 2) {
        sounds.speak(`쏙! ${nextIdx + 1}번을 잘 담았어요. 다음은 ${nextIdx + 2}번 ${nextTarget.nut.name}을 넣어주세요.`);
      } else {
        sounds.speak(`쏙! 잘 담았어요. 다음은 ${nextTarget.nut.name} ${nextCount}번째를 넣어주세요.`);
      }
    }
  }

  renderPouchContents(modeNum) {
    const badgeText = `담은 개수: ${this.packedList.length} / 12개`;
    document.getElementById(`bagCountBadge${modeNum}`).textContent = badgeText;

    if (modeNum === 1 || modeNum === 3) {
      const container = document.getElementById(`pouchInside${modeNum}`);
      if (this.packedList.length === 1) {
        container.innerHTML = '';
      }
      const lastNutKey = this.packedList[this.packedList.length - 1];
      const nut = NUTS_DATA[lastNutKey];

      const badge = document.createElement('div');
      badge.className = 'pouch-nut-badge';
      badge.innerHTML = `
        ${nut.svg}
        <span class="badge-label">${nut.name}</span>
      `;
      container.appendChild(badge);
    } else if (modeNum === 2) {
      // 2단계 슬롯 채우기
      const curIdx = this.packedList.length - 1;
      const curSlot = document.getElementById(`slot2_${curIdx}`);
      if (curSlot) {
        curSlot.classList.remove('active-slot');
        curSlot.classList.add('filled-slot');
        curSlot.innerHTML = `
          <span class="slot-number">✔️ ${curIdx + 1}</span>
          ${NUTS_DATA[this.packedList[curIdx]].svg}
        `;
      }
      const nextSlot = document.getElementById(`slot2_${curIdx + 1}`);
      if (nextSlot) {
        nextSlot.classList.add('active-slot');
      }
    }
  }

  updateTurnGuideText(modeNum) {
    const guideEl = document.getElementById(`turnGuideText${modeNum}`);
    if (!guideEl) return;

    const target = this.getCurrentTarget();
    if (!target) {
      guideEl.innerHTML = `🎉 <strong>포장 완료!</strong> [확인하기]를 눌러 점수를 확인하세요!`;
      return;
    }

    const currentCount = this.packedList.filter(id => id === target.nutKey).length + 1;
    if (modeNum === 1) {
      guideEl.innerHTML = `지금은 <strong>${target.nut.name} ${currentCount}번째</strong>를 넣을 차례입니다!`;
    } else if (modeNum === 2) {
      guideEl.innerHTML = `반짝이는 <strong>${target.index + 1}번 ${target.nut.name}</strong>을 ${target.index + 1}번 자리에 쏙 넣어보세요!`;
    } else if (modeNum === 3) {
      guideEl.innerHTML = `왼쪽에서 <strong>${target.nut.name}</strong> 버튼을 톡 눌러주세요!`;
    }
  }

  showTemporaryAlert(msg) {
    const bubble = document.getElementById('globalSpeechBubble');
    if (bubble) {
      bubble.style.borderColor = '#f44336';
      bubble.style.backgroundColor = '#ffebee';
      setTimeout(() => {
        bubble.style.borderColor = '#7dd3fc';
        bubble.style.backgroundColor = '#ffffff';
      }, 2500);
    }
  }

  evaluatePractice() {
    const scoreModal = document.getElementById('scoreModal');
    const scoreNum = document.getElementById('modalScoreNum');
    const scorePraise = document.getElementById('modalScorePraise');

    const totalCount = this.packedList.length;
    let score = Math.round((totalCount / 12) * 100);

    scoreNum.textContent = score;
    if (score >= 100) {
      sounds.playFanfare();
      confetti.launch(80);
      scorePraise.textContent = "아주 훌륭해요! 아몬드 4개, 호두 4개, 피칸 2개, 캐슈넛 2개를 순서대로 완벽하게 담았습니다! 💯";
      sounds.speak("딩동댕 100점 만점입니다! 순서대로 아주 잘 담았어요. 이제 활동 2 실제 포장하기로 가볼까요?");
    } else {
      sounds.playDingDong();
      scorePraise.textContent = `현재 ${totalCount}개를 담았어요! 남은 견과류도 마저 담아 100점에 도전해보세요!`;
      sounds.speak(`현재 점수는 ${score}점입니다. 남은 견과류도 봉투에 넣어 완성해보세요!`);
    }

    scoreModal.style.display = 'flex';
  }
}

// ============================================================
// 7. 세번째 페이지: 활동 2 - 실제 견과류 포장하기 & 카메라 검사 & 실링기
// ============================================================
class Page3RealPackingManager {
  constructor() {
    this.currentStep = 1; // 1: 아몬드4, 2: 호두4, 3: 피칸2, 4: 캐슈넛2, 5: 실링기
    this.webcamStream = null;
    this.isCameraActive = false;
    this.facingMode = 'environment';
    this.init();
  }

  init() {
    // 작업 지시서 음성 듣기
    document.getElementById('hearOrderBtn').addEventListener('click', () => {
      sounds.speak("작업지시: 아몬드 4개, 호두 4개, 피칸 2개, 캐슈넛 2개를 포장 봉투에 순서대로 담고 실링기로 포장을 하세요.");
    });

    // 카메라 전환 및 켜기
    document.getElementById('toggleCameraPowerBtn').addEventListener('click', () => {
      this.toggleCamera();
    });

    const switchCamBtn = document.getElementById('switchCameraBtn');
    if (switchCamBtn) {
      switchCamBtn.addEventListener('click', () => {
        this.switchCamera();
      });
    }

    // 메인 검사 버튼
    document.getElementById('runInspectBtn').addEventListener('click', () => {
      sounds.init();
      this.performInspection(true); // 기본 성공 시연
    });

    // 선생님 테스트 전용 버튼
    document.getElementById('forcePassBtn').addEventListener('click', () => {
      sounds.init();
      this.performInspection(true);
    });
    document.getElementById('forceFailBtn').addEventListener('click', () => {
      sounds.init();
      this.performInspection(false);
    });

    // 1. 단계별 칩 버튼 직접 클릭 시 해당 단계로 즉시 이동
    for (let i = 1; i <= 5; i++) {
      const chipBtn = document.getElementById(`act2Chip${i}`);
      if (chipBtn) {
        chipBtn.addEventListener('click', () => {
          sounds.init();
          this.goToStep(i);
        });
      }
    }

    // 처음부터 다시하기 버튼
    const act2RestartBtn = document.getElementById('act2RestartBtn');
    if (act2RestartBtn) {
      act2RestartBtn.addEventListener('click', () => {
        sounds.init();
        this.restartFromBeginning();
      });
    }

    // 다음 단계 이동 버튼
    document.getElementById('nextNutStageBtn').addEventListener('click', () => {
      this.advanceToNextStep();
    });

    // 불합격 모달 닫기
    document.getElementById('closeModalBtn').addEventListener('click', () => {
      document.getElementById('sampleGuideModal').style.display = 'none';
    });
    document.getElementById('modalConfirmBtn').addEventListener('click', () => {
      document.getElementById('sampleGuideModal').style.display = 'none';
      sounds.speak("다시 알맞은 개수를 봉투에 담아 카메라에 비춰보세요!");
    });

    // 실링기 누르기 버튼
    document.getElementById('pressSealerBtn').addEventListener('click', () => {
      this.pressSealingMachine();
    });

    // 2. 새로 추가된 쉬운 모드(분류 견과류 포장) 초기화
    this.initBatchMode();

    this.renderCurrentStepView();
  }

  goToStep(stepNumber) {
    this.currentStep = stepNumber;
    this.renderCurrentStepView();
    sounds.playPop();

    let stepName = "";
    if (stepNumber === 1) stepName = "아몬드 4개";
    else if (stepNumber === 2) stepName = "호두 4개";
    else if (stepNumber === 3) stepName = "피칸 2개";
    else if (stepNumber === 4) stepName = "캐슈넛 2개";
    else if (stepNumber === 5) stepName = "실링기 포장";

    if (stepNumber <= 4) {
      sounds.speak(`${stepName} 포장 단계로 이동했습니다. 봉투에 담고 카메라에 비춰주세요!`);
    } else {
      sounds.speak("실링기 포장 단계로 이동했습니다. 실링기로 봉투를 밀봉해주세요!");
    }
  }

  restartFromBeginning() {
    this.currentStep = 1;
    this.renderCurrentStepView();
    sounds.playPop();
    sounds.speak("처음 1단계로 돌아갑니다. 아몬드 4개를 포장하고 카메라 화면에 비춰주세요!");
  }

  async switchCamera() {
    this.facingMode = this.facingMode === 'environment' ? 'user' : 'environment';
    if (this.isCameraActive) {
      if (this.webcamStream) {
        this.webcamStream.getTracks().forEach(t => t.stop());
      }
      this.isCameraActive = false;
      await this.toggleCamera();
    }
  }

  async toggleCamera() {
    const video = document.getElementById('webcamVideo');
    const simView = document.getElementById('simulatedCameraView');
    const batchVideo = document.getElementById('batchWebcamVideo');
    const batchSim = document.getElementById('batchSimulatedView');
    const act4Video = document.getElementById('act4WebcamVideo');
    const act4Sim = document.getElementById('act4SimulatedView');
    const btn1 = document.getElementById('toggleCameraPowerBtn');
    const btn2 = document.getElementById('act4ToggleCameraBtn');
    const btn3 = document.getElementById('batchToggleCameraBtn');

    if (!this.isCameraActive) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: this.facingMode }, width: { ideal: 640 } },
          audio: false
        });
        this.webcamStream = stream;

        // 활동 2 비디오 연동
        if (video) {
          video.srcObject = stream;
          video.style.display = 'block';
        }
        if (simView) simView.style.display = 'none';

        // 활동 2 쉬운 모드(분류 포장) 비디오 연동
        if (batchVideo) {
          batchVideo.srcObject = stream;
          batchVideo.style.display = 'block';
        }
        if (batchSim) batchSim.style.display = 'none';

        // 활동 3(4페이지) 비디오 연동
        if (act4Video) {
          act4Video.srcObject = stream;
          act4Video.style.display = 'block';
        }
        if (act4Sim) act4Sim.style.display = 'none';

        this.isCameraActive = true;
        if (btn1) btn1.textContent = '📷 카메라 끄기';
        if (btn2) btn2.textContent = '📷 카메라 끄기';
        if (btn3) btn3.textContent = '📷 카메라 끄기';

        sounds.speak("카메라가 켜졌습니다. 포장한 봉투를 화면에 비춰주세요.");
      } catch (err) {
        console.warn('Camera access fallback:', err);
        sounds.speak("카메라 연결이 어려운 경우 화면의 가상 검사대로 실습을 계속할 수 있습니다.");
      }
    } else {
      if (this.webcamStream) {
        this.webcamStream.getTracks().forEach(t => t.stop());
      }
      if (video) video.style.display = 'none';
      if (simView) simView.style.display = 'flex';
      if (batchVideo) batchVideo.style.display = 'none';
      if (batchSim) batchSim.style.display = 'flex';
      if (act4Video) act4Video.style.display = 'none';
      if (act4Sim) act4Sim.style.display = 'flex';

      this.isCameraActive = false;
      if (btn1) btn1.textContent = '📷 카메라 켜기';
      if (btn2) btn2.textContent = '📷 카메라 켜기';
      if (btn3) btn3.textContent = '📷 카메라 켜기';
    }
  }

  initBatchMode() {
    const hearBtn = document.getElementById('hearBatchOrderBtn');
    if (hearBtn) {
      hearBtn.addEventListener('click', () => {
        sounds.speak("작업지시: 분류된 견과류를 봉투에 담고 포장하세요.");
      });
    }

    const toggleBtn = document.getElementById('batchToggleCameraBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggleCamera();
      });
    }

    const switchBtn = document.getElementById('batchSwitchCameraBtn');
    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        this.switchCamera();
      });
    }

    const inspectBtn = document.getElementById('batchInspectBtn');
    if (inspectBtn) {
      inspectBtn.addEventListener('click', () => {
        sounds.init();
        this.evaluateBatchInspection(true);
      });
    }

    const passBtn = document.getElementById('batchForcePassBtn');
    if (passBtn) {
      passBtn.addEventListener('click', () => {
        sounds.init();
        this.evaluateBatchInspection(true);
      });
    }

    const failBtn = document.getElementById('batchForceFailBtn');
    if (failBtn) {
      failBtn.addEventListener('click', () => {
        sounds.init();
        this.evaluateBatchInspection(false);
      });
    }

    const recheckBtn = document.getElementById('batchRecheckBtn');
    if (recheckBtn) {
      recheckBtn.addEventListener('click', () => {
        const box = document.getElementById('batchInspectResultBox');
        if (box) box.style.display = 'none';
        sounds.playPop();
        sounds.speak("분류된 견과류가 담긴 봉투를 카메라 화면에 비춰주세요!");
      });
    }

    const goToSealerBtn = document.getElementById('batchGoToSealerBtn');
    if (goToSealerBtn) {
      goToSealerBtn.addEventListener('click', () => {
        const subSeqBtn = document.querySelector('.sub-tab-btn[data-sub="sub3-seq"]');
        if (subSeqBtn) subSeqBtn.click();
        this.goToStep(5);
      });
    }

    this.initBatchModeView();
  }

  initBatchModeView() {
    const sampleBox = document.getElementById('batchSamplePreviewBox');
    const simGraphic = document.getElementById('batchSimGraphic');
    const sampleHtml = this.generateSampleGraphics(4);
    if (sampleBox) sampleBox.innerHTML = sampleHtml;
    if (simGraphic) simGraphic.innerHTML = sampleHtml;
  }

  evaluateBatchInspection(isPass) {
    const resultBox = document.getElementById('batchInspectResultBox');
    const resultIcon = document.getElementById('batchResultIcon');
    const resultTitle = document.getElementById('batchResultTitle');
    const resultMsg = document.getElementById('batchResultMsg');

    if (!resultBox) return;

    if (isPass) {
      sounds.playDingDong();
      confetti.launch(60);
      resultBox.style.display = 'block';
      resultBox.className = 'inspection-result-box';
      if (resultIcon) resultIcon.textContent = '⭕';
      if (resultTitle) {
        resultTitle.textContent = '딩동댕! 합격입니다!';
        resultTitle.style.color = '#1b5e20';
      }
      if (resultMsg) {
        resultMsg.textContent = '아몬드 4개, 호두 4개, 피칸 2개, 캐슈넛 2개가 모두 잘 담겼습니다! 실링기로 포장하러 가보세요.';
      }
      sounds.speak("딩동댕! 합격입니다! 분류된 견과류가 모두 잘 담겼습니다! 이제 실링기로 포장해주세요.");
    } else {
      sounds.playBuzzer();
      this.showSampleFailModal(4, '분류된 견과류', 12);
    }
  }

  renderCurrentStepView() {
    // 상단 칩 활성화 상태 동기화
    for (let i = 1; i <= 5; i++) {
      const chip = document.getElementById(`act2Chip${i}`);
      chip.classList.toggle('active', i === this.currentStep);
      chip.classList.toggle('completed', i < this.currentStep);
    }

    const nutBox = document.getElementById('nutInspectInfoBox');
    const sealerBox = document.getElementById('sealerStepBox');
    const resultBox = document.getElementById('inspectResultBox');
    const runInspectBtn = document.getElementById('runInspectBtn');
    const targetLabel = document.getElementById('inspectTargetLabel');
    resultBox.style.display = 'none';

    if (this.currentStep <= 4) {
      nutBox.style.display = 'block';
      sealerBox.style.display = 'none';
      runInspectBtn.style.display = 'flex';

      let stepNutName = '';
      let stepCount = 0;
      let nutKey = '';

      if (this.currentStep === 1) { stepNutName = '아몬드'; stepCount = 4; nutKey = 'almond'; }
      if (this.currentStep === 2) { stepNutName = '호두'; stepCount = 4; nutKey = 'walnut'; }
      if (this.currentStep === 3) { stepNutName = '피칸'; stepCount = 2; nutKey = 'pecan'; }
      if (this.currentStep === 4) { stepNutName = '캐슈넛'; stepCount = 2; nutKey = 'cashew'; }

      document.getElementById('currentTaskBadge').textContent = `단계 ${this.currentStep}: ${stepNutName} 포장`;
      document.getElementById('currentTaskHeading').textContent = `${stepNutName} ${stepCount}개를 포장하고 비춰주세요`;
      document.getElementById('inspectBtnText').textContent = `${stepNutName} ${stepCount}개 검사하기`;
      targetLabel.textContent = `${stepNutName} ${stepCount}개 담은 봉투를 비춰주세요`;

      // 정답 견본 미리보기 렌더링
      const sampleBox = document.getElementById('samplePreviewBox');
      sampleBox.innerHTML = this.generateSampleGraphics(this.currentStep);
      document.getElementById('sampleDescText').textContent = `봉투에 ${stepNutName} ${stepCount}개가 정확히 담겨 있어야 합격입니다.`;

      // 가상 뷰파인더 그래픽 동기화
      document.getElementById('simStageGraphic').innerHTML = this.generateSampleGraphics(this.currentStep);
      sounds.speak(`${stepNutName} ${stepCount}개를 포장하고 카메라 화면에 비춰주세요.`);
    } else {
      // 5단계: 실링기 단계!
      nutBox.style.display = 'none';
      sealerBox.style.display = 'block';
      runInspectBtn.style.display = 'none';
      targetLabel.textContent = `실링기로 봉투를 밀봉해주세요`;

      document.getElementById('sealedPouchPreview').innerHTML = this.generateSampleGraphics(4);
      sounds.speak("캐슈넛까지 모두 담았습니다! 실링기로 포장을 한 후 포장검수대로 가세요!");
    }
  }

  // 검사 판정 (합격 / 불합격)
  performInspection(isPass) {
    const resultBox = document.getElementById('inspectResultBox');
    const resultIcon = document.getElementById('resultIconLarge');
    const resultTitle = document.getElementById('resultTitleLarge');
    const resultMsg = document.getElementById('resultMsgLarge');

    let nutName = '';
    let count = 0;
    if (this.currentStep === 1) { nutName = '아몬드'; count = 4; }
    if (this.currentStep === 2) { nutName = '호두'; count = 4; }
    if (this.currentStep === 3) { nutName = '피칸'; count = 2; }
    if (this.currentStep === 4) { nutName = '캐슈넛'; count = 2; }

    if (isPass) {
      // 합격! '딩동댕 ! 합격입니다' 소리 출력
      sounds.playDingDong();
      confetti.launch(50);
      resultBox.style.display = 'block';
      resultBox.className = 'inspection-result-box';
      resultIcon.textContent = '⭕';
      resultTitle.textContent = '딩동댕! 합격입니다!';
      resultTitle.style.color = '#1b5e20';
      resultMsg.textContent = `${nutName} ${count}개가 알맞게 잘 담겼습니다! 참 잘했어요!`;
      sounds.speak("딩동댕! 합격입니다! 참 잘했어요!");
    } else {
      // 불합격! '불합격 입니다. 다시 포장하세요' 멘트 및 예시 화면 팝업!
      sounds.playBuzzer();
      this.showSampleFailModal(this.currentStep, nutName, count);
    }
  }

  showSampleFailModal(stepNum, nutName, count) {
    const modal = document.getElementById('sampleGuideModal');
    const title = document.getElementById('modalTitle');
    const instruct = document.getElementById('modalInstruction');
    const preview = document.getElementById('modalSamplePreview');

    title.textContent = "불합격 입니다. 다시 포장하세요!";
    instruct.innerHTML = `⚠️ ${nutName}의 개수가 맞지 않아요.<br>아래 <strong>${nutName} ${count}개를 바르게 포장한 예시 화면</strong>을 보고 다시 담아주세요!`;
    preview.innerHTML = this.generateSampleGraphics(stepNum);

    sounds.speak("불합격 입니다. 다시 포장하세요.");
    modal.style.display = 'flex';
  }

  generateSampleGraphics(stepNum) {
    // 단계별 누적 견과류 견본 SVG 시각화
    let html = `<div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; align-items:center; width:100%;">`;
    if (stepNum >= 1) {
      for (let i = 0; i < 4; i++) {
        html += `<div style="width:44px; height:44px;">${NUTS_DATA.almond.svg}</div>`;
      }
    }
    if (stepNum >= 2) {
      for (let i = 0; i < 4; i++) {
        html += `<div style="width:44px; height:44px;">${NUTS_DATA.walnut.svg}</div>`;
      }
    }
    if (stepNum >= 3) {
      for (let i = 0; i < 2; i++) {
        html += `<div style="width:44px; height:44px;">${NUTS_DATA.pecan.svg}</div>`;
      }
    }
    if (stepNum >= 4) {
      for (let i = 0; i < 2; i++) {
        html += `<div style="width:44px; height:44px;">${NUTS_DATA.cashew.svg}</div>`;
      }
    }
    html += `</div>`;
    return html;
  }

  advanceToNextStep() {
    this.currentStep++;
    this.renderCurrentStepView();
  }

  pressSealingMachine() {
    const topBar = document.getElementById('sealerTopBar');
    const lamp = document.getElementById('sealerLamp');

    sounds.playSealingSound();
    topBar.classList.add('pressed');
    lamp.classList.remove('ready');
    lamp.classList.add('heating');
    lamp.textContent = '열선 가열 중...';

    setTimeout(() => {
      topBar.classList.remove('pressed');
      lamp.classList.remove('heating');
      lamp.classList.add('ready');
      lamp.textContent = '밀봉 완료!';
      sounds.playDingDong();
      confetti.launch(50);

      sounds.speak("밀봉이 완료되었습니다! 실링기로 포장을 한 후 포장검수대로 가세요!");

      setTimeout(() => {
        // 자동으로 활동 3으로 이동
        navManager.switchPage('page4');
      }, 2000);
    }, 1200);
  }
}

// ============================================================
// 8. 네번째 페이지: 활동 3 - 품질 검수 및 라벨지 붙이기
// ============================================================
class Page4FinalQualityManager {
  constructor() {
    this.init();
  }

  init() {
    // 활동 안내 듣기
    document.getElementById('hearOrder4Btn').addEventListener('click', () => {
      sounds.speak("완성된 견과류 봉투를 비춰 최종 합격 검수를 받고, 영양 가득 라벨지를 붙여주세요!");
    });

    // 활동 4 시뮬레이션 봉투 그래픽 초기화
    const simPouch = document.querySelector('.act4-sim-pouch');
    if (simPouch) {
      simPouch.innerHTML = `
        <div style="width:150px; height:180px; background:rgba(255,255,255,0.15); border:3px solid rgba(255,255,255,0.4); border-radius:18px; display:flex; flex-wrap:wrap; gap:4px; padding:8px; justify-content:center; align-items:center;">
          <div style="width:26px; height:26px;">${NUTS_DATA.almond.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.almond.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.almond.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.almond.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.walnut.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.walnut.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.walnut.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.walnut.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.pecan.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.pecan.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.cashew.svg}</div>
          <div style="width:26px; height:26px;">${NUTS_DATA.cashew.svg}</div>
        </div>
      `;
    }

    // 4페이지 카메라 전원 및 전후면 전환 버튼 이벤트 연동
    const act4ToggleBtn = document.getElementById('act4ToggleCameraBtn');
    if (act4ToggleBtn) {
      act4ToggleBtn.addEventListener('click', () => {
        if (page3Packing) {
          page3Packing.toggleCamera();
        }
      });
    }

    const act4SwitchBtn = document.getElementById('act4SwitchCameraBtn');
    if (act4SwitchBtn) {
      act4SwitchBtn.addEventListener('click', () => {
        if (page3Packing) {
          page3Packing.switchCamera();
        }
      });
    }

    // 최종 품질 검수 버튼
    document.getElementById('act4CheckBtn').addEventListener('click', () => {
      sounds.init();
      this.evaluateFinalProduct(true);
    });

    // 품질 검수 다시하기 버튼
    const act4RecheckBtn = document.getElementById('act4RecheckBtn');
    if (act4RecheckBtn) {
      act4RecheckBtn.addEventListener('click', () => {
        sounds.init();
        this.resetInspection();
      });
    }

    // 선생님 테스트 버튼
    document.getElementById('act4ForcePassBtn').addEventListener('click', () => {
      sounds.init();
      this.evaluateFinalProduct(true);
    });
    document.getElementById('act4ForceFailBtn').addEventListener('click', () => {
      sounds.init();
      this.evaluateFinalProduct(false);
    });

    // 스티커 드래그 및 터치 붙이기 설정
    this.setupLabelAttachment();

    // 다시 하기 & 상장 버튼
    document.getElementById('restartAllBtn').addEventListener('click', () => {
      location.reload();
    });
    document.getElementById('showCertBtn').addEventListener('click', () => {
      document.getElementById('certificateModal').style.display = 'flex';
      sounds.speak("축하합니다! 견과류 포장 달인 상장이 수여되었습니다!");
    });
    document.getElementById('closeCertModalBtn').addEventListener('click', () => {
      document.getElementById('certificateModal').style.display = 'none';
    });
    document.getElementById('certPrintBtn').addEventListener('click', () => {
      window.print();
    });
  }

  resetInspection() {
    const outcomeBox = document.getElementById('act4OutcomeBox');
    if (outcomeBox) {
      outcomeBox.style.display = 'none';
      outcomeBox.className = 'act4-outcome-box';
      outcomeBox.innerHTML = '';
    }

    // 검수 스테이지를 다시 보이게 하고 라벨링 스테이지는 숨김
    const inspectStage = document.getElementById('act4InspectStage');
    const labelStage = document.getElementById('act4LabelingStage');
    if (inspectStage) inspectStage.style.display = 'grid';
    if (labelStage) labelStage.style.display = 'none';

    // 라벨 스티커 상태 초기화
    const dropSpot = document.getElementById('labelDropSpot');
    if (dropSpot) {
      dropSpot.style.border = '';
      dropSpot.style.background = '';
      dropSpot.innerHTML = '<span class="drop-spot-text">이곳에 라벨지를 붙이세요!</span>';
    }
    const sticker = document.getElementById('draggableSticker');
    if (sticker) {
      sticker.style.opacity = '1';
      sticker.style.pointerEvents = 'auto';
    }
    const celebBanner = document.getElementById('finalCelebrationBanner');
    if (celebBanner) {
      celebBanner.style.display = 'none';
    }

    sounds.playPop();
    sounds.speak("품질 검수를 다시 진행합니다. 완성한 포장 봉투를 카메라에 비춰주세요!");
  }

  evaluateFinalProduct(isPass) {
    const outcomeBox = document.getElementById('act4OutcomeBox');
    outcomeBox.style.display = 'block';

    if (isPass) {
      // 딩동댕 합격입니다! 라벨지를 붙여주세요
      sounds.playDingDong();
      confetti.launch(60);
      outcomeBox.className = 'act4-outcome-box pass';
      outcomeBox.innerHTML = `
        <h3 style="color:#1b5e20; font-size:1.6rem; font-family:var(--font-heading);">딩동댕 합격입니다!</h3>
        <p style="color:#2e7d32; font-size:1.2rem; font-weight:800; margin:6px 0;">아몬드 4개, 호두 4개, 피칸 2개, 캐슈넛 2개가 모두 완벽히 포장되었습니다.</p>
        <button id="goToLabelStageBtn" class="to-labeling-btn">🏷️ 라벨지 붙이러 가기 ➜</button>
      `;

      sounds.speak("딩동댕 합격입니다! 라벨지를 붙여주세요!");

      document.getElementById('goToLabelStageBtn').addEventListener('click', () => {
        this.openLabelingWorkbench();
      });
    } else {
      // 불합격입니다. 다시 포장하세요!
      sounds.playBuzzer();
      outcomeBox.className = 'act4-outcome-box fail';
      outcomeBox.innerHTML = `
        <h3 style="color:#c62828; font-size:1.6rem; font-family:var(--font-heading);">불합격입니다. 다시 포장하세요!</h3>
        <p style="color:#d32f2f; font-size:1.2rem; font-weight:800; margin:6px 0;">견과류의 개수가 부족하거나 실링이 덜 되었습니다. 확인 후 다시 비춰주세요.</p>
      `;
      sounds.speak("불합격입니다. 다시 포장하세요!");
    }
  }

  openLabelingWorkbench() {
    document.getElementById('act4InspectStage').style.display = 'none';
    document.getElementById('act4LabelingStage').style.display = 'flex';

    // 봉투 안에 12개 알록달록 견과류 배치
    const inside = document.getElementById('pouchNutsInsideFinal');
    inside.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; gap:4px; justify-content:center;">
        <div style="width:36px; height:36px;">${NUTS_DATA.almond.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.almond.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.almond.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.almond.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.walnut.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.walnut.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.walnut.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.walnut.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.pecan.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.pecan.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.cashew.svg}</div>
        <div style="width:36px; height:36px;">${NUTS_DATA.cashew.svg}</div>
      </div>
    `;

    sounds.speak("합격을 축하합니다! 라벨지를 봉투 중앙에 끌어당기거나 터치해서 딱 붙여주세요!");
  }

  setupLabelAttachment() {
    const sticker = document.getElementById('draggableSticker');
    const dropSpot = document.getElementById('labelDropSpot');
    const touchBtn = document.getElementById('autoAttachLabelBtn');

    // 드래그 붙이기
    if (sticker && dropSpot) {
      sticker.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'label-attached');
      });

      dropSpot.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropSpot.classList.add('drag-over');
      });

      dropSpot.addEventListener('dragleave', () => {
        dropSpot.classList.remove('drag-over');
      });

      dropSpot.addEventListener('drop', (e) => {
        e.preventDefault();
        dropSpot.classList.remove('drag-over');
        this.attachStickerSuccess();
      });
    }

    // 터치 버튼으로 바로 붙이기
    if (touchBtn) {
      touchBtn.addEventListener('click', () => {
        this.attachStickerSuccess();
      });
    }
  }

  attachStickerSuccess() {
    sounds.playPop();
    const dropSpot = document.getElementById('labelDropSpot');
    const sticker = document.getElementById('draggableSticker');

    // 스티커가 봉투에 부착되는 효과
    dropSpot.style.border = 'none';
    dropSpot.style.background = 'transparent';
    dropSpot.innerHTML = `
      <div class="sticker-item" style="cursor:default; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
        <div class="sticker-content">
          <div class="sticker-crown">👑</div>
          <div class="sticker-brand">자연을 담은</div>
          <div class="sticker-name">하루 건강 견과</div>
          <div class="sticker-tags">#아몬드 #호두 #피칸 #캐슈넛</div>
          <div class="sticker-cert">우수 품질 인증 🏅</div>
        </div>
      </div>
    `;

    if (sticker) {
      sticker.style.opacity = '0.3';
      sticker.style.pointerEvents = 'none';
    }

    // 대형 팡파레 & 축하 배너
    setTimeout(() => {
      sounds.playFanfare();
      confetti.launch(120);
      document.getElementById('finalCelebrationBanner').style.display = 'block';
      sounds.speak("축하합니다! 라벨지까지 완벽하게 붙여서 하루 건강 견과 포장 제품을 완성했습니다! 최고의 포장 마스터입니다!");
    }, 400);
  }
}

// ============================================================
// 9. 전체 앱 초기화 및 인스턴스 생성
// ============================================================
let navManager, page1Quiz, page2Practice, page3Packing, page4Quality;

document.addEventListener('DOMContentLoaded', () => {
  navManager = new NavigationManager();
  page1Quiz = new Page1QuizManager();
  page2Practice = new Page2PracticeManager();
  page3Packing = new Page3RealPackingManager();
  page4Quality = new Page4FinalQualityManager();

  // 최초 1회 화면 터치/클릭 시 오디오 컨텍스트 기동
  document.body.addEventListener('click', () => {
    sounds.init();
  }, { once: true });
});
