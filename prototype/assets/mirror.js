/* MIRRA — Smart Fitness Mirror prototype core
   Shared course data, timeline builder, time formatting, icons, and shell scaling. */
(function () {
  'use strict';

  var IMG = 'assets/stock/';

  var BRANDS = {
    hotel: { name: 'AURELIA', sub: 'HOTEL & SPA', aria: 'Aurelia Hotel & Spa' },
    gym: { name: 'NORTHLINE', sub: 'ATHLETIC CLUB', aria: 'Northline Athletic Club' }
  };

  var hotelCourses = [
    {
      id: 'morning',
      title: '晨间唤醒',
      en: 'MORNING AWAKENING',
      category: '晨间',
      level: '初级',
      cover: IMG + 'hotel_morning.jpg',
      coverW: 1200,
      coverH: 1807,
      alt: '窗边阳光下的女性舒展身体',
      goal: '温和唤醒脊柱与肩颈，让身体在晨光里慢慢打开。',
      intro: '以呼吸引导的全身流动，不需要器械，在房间内即可完成。',
      note: '建议赤足，穿着宽松衣物。',
      accentNote: '适合 07:00 – 09:00',
      phases: [
        { name: '呼吸唤醒', seconds: 90, note: '盘坐，延长呼气' },
        { name: '肩颈舒展', seconds: 120, note: '缓慢绕肩，放松斜方肌' },
        { name: '侧身延展', seconds: 120, note: '双侧交替，保持均匀呼吸' },
        { name: '脊柱流动', seconds: 120, note: '猫牛式，跟随呼吸节律' },
        { name: '站立前屈', seconds: 90, note: '膝盖微屈，重心下沉' },
        { name: '收束静坐', seconds: 60, note: '回到呼吸，安静结束' }
      ]
    },
    {
      id: 'travel',
      title: '旅途舒展',
      en: 'AFTER THE JOURNEY',
      category: '旅途',
      level: '初级',
      cover: IMG + 'hotel_travel.jpg',
      coverW: 952,
      coverH: 1280,
      alt: '在地面上做舒展练习的女性',
      goal: '松开久坐后的髋部与腿后侧，缓解旅途的僵硬。',
      intro: '坐在床边或地板上即可完成，适合抵达酒店后的第一段时间。',
      note: '可在床沿完成，无需瑜伽垫。',
      accentNote: '适合抵达后 30 分钟内',
      phases: [
        { name: '脚踝松动', seconds: 60, note: '坐姿，活动踝关节' },
        { name: '髋部打开', seconds: 120, note: '蝴蝶式，缓慢下沉' },
        { name: '脊柱扭转', seconds: 120, note: '坐姿扭转，双侧交替' },
        { name: '腿后侧伸展', seconds: 90, note: '单腿前伸，保持背部延展' },
        { name: '深长呼吸', seconds: 90, note: '仰卧，放松全身' }
      ]
    },
    {
      id: 'sleep',
      title: '睡前放松',
      en: 'BEFORE SLEEP',
      category: '睡前',
      level: '初级',
      cover: IMG + 'hotel_sleep.jpg',
      coverW: 859,
      coverH: 1280,
      alt: '暖色夕光中静坐冥想的人',
      goal: '放慢呼吸与心率，让身体自然过渡到睡眠。',
      intro: '以仰卧与静坐为主的低强度练习，灯光可以保持昏暗。',
      note: '练习结束后可直接休息。',
      accentNote: '适合 21:30 – 23:00',
      phases: [
        { name: '呼吸下沉', seconds: 120, note: '仰卧，延长呼气' },
        { name: '仰卧扭转', seconds: 120, note: '双膝倒向一侧，左右交替' },
        { name: '腿部放松', seconds: 120, note: '靠墙抬腿，放松小腿' },
        { name: '婴儿式停留', seconds: 120, note: '额头落地，缓慢呼吸' },
        { name: '静坐收束', seconds: 120, note: '回到自然呼吸' }
      ]
    }
  ];

  var gymCourses = [
    {
      id: 'warmup',
      title: '基础热身',
      en: 'PRIME THE BODY',
      category: '热身',
      level: '入门',
      cover: IMG + 'gym_warmup.jpg',
      coverW: 1000,
      coverH: 1250,
      alt: '深色健身房中使用腿举器械的训练者',
      goal: '提高关节活动度与核心温度，为力量训练做好准备。',
      intro: '低负荷、全身性的动态热身，不需要器械。',
      note: '全程保持呼吸，不追求幅度极限。',
      focus: '活动度 · 激活',
      blocks: [
        { name: '肩颈环绕', sets: 2, work: 50, rest: 15, cue: '肩膀下沉，缓慢画圈' },
        { name: '髋部激活', sets: 2, work: 60, rest: 15, cue: '髋部做最大幅度绕环' },
        { name: '踝关节松动', sets: 2, work: 50, rest: 15, cue: '脚尖点地，左右交替' },
        { name: '动态伸展', sets: 2, work: 60, rest: 15, cue: '弓步转体，保持稳定' }
      ]
    },
    {
      id: 'strength',
      title: '力量基础',
      en: 'STRENGTH FOUNDATION',
      category: '力量',
      level: '中级',
      cover: IMG + 'gym_strength.jpg',
      coverW: 1000,
      coverH: 1250,
      alt: '深色健身房中举起哑铃的训练者',
      goal: '用自重动作建立稳定的下肢与核心力量。',
      intro: '五个基础动作，按组次完成，组间短暂休息。',
      note: '全程由预设课程驱动，不含动作识别。',
      focus: '下肢 · 核心',
      blocks: [
        { name: '深蹲', sets: 3, work: 45, rest: 20, cue: '膝盖对准脚尖，保持背部中立' },
        { name: '弓步蹲', sets: 3, work: 45, rest: 20, cue: '前膝不过脚尖，左右交替' },
        { name: '俯卧撑', sets: 3, work: 40, rest: 20, cue: '肩胛稳定，身体成一条直线' },
        { name: '平板支撑', sets: 2, work: 50, rest: 20, cue: '收紧腹部，避免塌腰' },
        { name: '臀桥', sets: 3, work: 45, rest: 20, cue: '顶点停顿，感受臀部发力' }
      ]
    },
    {
      id: 'cardio',
      title: '有氧间歇',
      en: 'INTERVAL ENGINE',
      category: '有氧',
      level: '中级',
      cover: IMG + 'gym_cardio.jpg',
      coverW: 741,
      coverH: 1280,
      alt: '健身房中的椭圆机',
      goal: '用短间歇拉高心率，提升持续运动能力。',
      intro: '以椭圆机或跑步机完成，节奏由屏幕提示。',
      note: '如感到不适，请立即降低强度。',
      focus: '心肺 · 节奏',
      blocks: [
        { name: '低强度踩踏', sets: 1, work: 90, rest: 0, cue: '找到可持续的节奏' },
        { name: '节奏间歇', sets: 4, work: 45, rest: 30, cue: '保持呼吸均匀' },
        { name: '冲刺', sets: 3, work: 25, rest: 45, cue: '短促发力，随后完全放松' },
        { name: '缓速整理', sets: 1, work: 90, rest: 0, cue: '逐渐降低速度' }
      ]
    },
    {
      id: 'stretch',
      title: '全身拉伸',
      en: 'FULL BODY RESET',
      category: '拉伸',
      level: '入门',
      cover: IMG + 'gym_recovery.jpg',
      coverW: 960,
      coverH: 1280,
      alt: '在瑜伽垫上拉伸的女性',
      goal: '放松训练后的肌肉，恢复关节活动度。',
      intro: '静态拉伸为主，每个动作保持深长呼吸。',
      note: '拉伸到轻微牵拉感即可，不要弹振。',
      focus: '恢复 · 柔韧',
      phases: [
        { name: '小腿伸展', seconds: 120, note: '双手扶墙，后腿伸直' },
        { name: '股四头肌拉伸', seconds: 120, note: '单腿站立，扶墙保持平衡' },
        { name: '髋屈肌伸展', seconds: 120, note: '弓步下沉，骨盆中立' },
        { name: '胸肩打开', seconds: 120, note: '双手背后交扣，胸口上提' },
        { name: '仰卧扭转', seconds: 120, note: '双膝倒向一侧，左右交替' },
        { name: '全身放松', seconds: 120, note: '仰卧，回到自然呼吸' }
      ]
    },
    {
      id: 'core',
      title: '核心稳定',
      en: 'CORE CONTROL',
      category: '力量',
      level: '中级',
      cover: IMG + 'gym_kettlebell.jpg',
      coverW: 1000,
      coverH: 1500,
      alt: '深色健身房中提起壶铃的训练者',
      goal: '建立躯干稳定与抗旋转能力。',
      intro: '以等长收缩为主的地面核心训练。',
      note: '腰部不适时立即停止并休息。',
      focus: '核心 · 稳定',
      blocks: [
        { name: '死虫式', sets: 3, work: 45, rest: 20, cue: '腰背贴地，对侧手脚伸展' },
        { name: '侧平板', sets: 2, work: 35, rest: 20, cue: '髋部抬高，身体成直线' },
        { name: '臀桥行走', sets: 2, work: 50, rest: 20, cue: '保持臀部抬高，小步移动' },
        { name: '平板支撑', sets: 2, work: 45, rest: 20, cue: '收紧腹部，避免塌腰' }
      ]
    }
  ];

  function segmentsFor(course) {
    var list = [], i, b, s, lastBlock;
    if (course.phases) {
      for (i = 0; i < course.phases.length; i++) {
        list.push({
          kind: 'work',
          name: course.phases[i].name,
          note: course.phases[i].note || '',
          seconds: course.phases[i].seconds,
          phaseIndex: i,
          phaseCount: course.phases.length,
          set: 0,
          sets: 0
        });
      }
      return list;
    }
    if (course.blocks) {
      for (i = 0; i < course.blocks.length; i++) {
        b = course.blocks[i];
        lastBlock = i === course.blocks.length - 1;
        for (s = 1; s <= b.sets; s++) {
          list.push({
            kind: 'work',
            name: b.name,
            note: b.cue || '',
            seconds: b.work,
            blockIndex: i,
            blockCount: course.blocks.length,
            set: s,
            sets: b.sets
          });
          var isLastSet = s === b.sets;
          if (b.rest > 0 && (!isLastSet || !lastBlock)) {
            list.push({
              kind: 'rest',
              name: b.name,
              note: '',
              seconds: b.rest,
              blockIndex: i,
              blockCount: course.blocks.length,
              set: s,
              sets: b.sets,
              afterSet: s
            });
          }
        }
      }
    }
    return list;
  }

  function totalSeconds(course) {
    return segmentsFor(course).reduce(function (sum, s) { return sum + s.seconds; }, 0);
  }

  function exerciseCount(course) {
    if (course.blocks) return course.blocks.length;
    if (course.phases) return course.phases.length;
    return 0;
  }

  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function minuteLabel(sec) {
    return Math.max(1, Math.round(sec / 60)) + ' 分钟';
  }

  function dateLabel(d) {
    var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return (d.getMonth() + 1) + '月' + d.getDate() + '日 · ' + week[d.getDay()];
  }

  function clockLabel(d) {
    var h = d.getHours(), m = d.getMinutes();
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  }

  var ICON_PATHS = {
    back: '<path d="M15 5l-7 7 7 7"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    pause: '<path d="M9 5v14M15 5v14" stroke-width="2.6"/>',
    play: '<path d="M8 5.5l11 6.5-11 6.5z" fill="currentColor" stroke="none"/>',
    next: '<path d="M5 5l9 7-9 7z" fill="currentColor" stroke="none"/><path d="M18 5v14"/>',
    prev: '<path d="M19 5l-9 7 9 7z" fill="currentColor" stroke="none"/><path d="M6 5v14"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    chevron: '<path d="M9 5l7 7-7 7"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v5h-5"/>',
    wifiOff: '<path d="M3 3l18 18"/><path d="M8.5 15.5a5 5 0 0 1 7 0"/><path d="M5 12a10 10 0 0 1 3-2.1"/><path d="M19 12a10 10 0 0 0-6.6-3.5"/><circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'
  };

  function icon(name, size) {
    var sizeAttr = size ? ' style="--od-icon-size:' + size + 'px"' : '';
    return '<svg class="od-icon"' + sizeAttr + ' viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      (ICON_PATHS[name] || '') + '</svg>';
  }

  /* The 1080 × 1920 canvas fills the panel: on a 9:16 display it lands
     edge to edge; on another aspect it scales to fit and centres, never crops. */
  function initScale() {
    var vv = window.visualViewport;
    function fit() {
      var w = (vv && vv.width) || window.innerWidth;
      var h = (vv && vv.height) || window.innerHeight;
      var s = Math.min(w / 1080, h / 1920);
      document.documentElement.style.setProperty('--s', String(Math.max(s, 0.1)));
    }
    fit();
    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    if (vv) {
      vv.addEventListener('resize', fit);
      vv.addEventListener('scroll', fit);
    }
    window.addEventListener('pageshow', fit);
  }


  /* Kiosk behaviour for a mirror panel: keep the screen awake, hide the
     long-press menu, and go fullscreen on the first touch where the browser
     allows it (Android kiosk browsers do; desktop review browsers ignore it). */
  function kiosk() {
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

    if ('wakeLock' in navigator) {
      var wake = function () {
        try { navigator.wakeLock.request('screen').catch(function () {}); } catch (err) {}
      };
      wake();
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') wake();
      });
    }

    var root = document.documentElement;
    var once = function () {
      document.removeEventListener('pointerdown', once);
      if (root.requestFullscreen) {
        root.requestFullscreen({ navigationUI: 'hide' }).catch(function () {});
      } else if (root.webkitRequestFullscreen) {
        try { root.webkitRequestFullscreen(); } catch (err) {}
      }
      if (screen.orientation && screen.orientation.lock) {
        try { screen.orientation.lock('portrait').catch(function () {}); } catch (err) {}
      }
    };
    document.addEventListener('pointerdown', once, { passive: true });
  }

  window.MIRRA = {
    IMG: IMG,
    brands: BRANDS,
    hotelCourses: hotelCourses,
    gymCourses: gymCourses,
    segmentsFor: segmentsFor,
    totalSeconds: totalSeconds,
    exerciseCount: exerciseCount,
    fmt: fmt,
    minuteLabel: minuteLabel,
    dateLabel: dateLabel,
    clockLabel: clockLabel,
    icon: icon,
    initScale: initScale,
    kiosk: kiosk
  };
})();
