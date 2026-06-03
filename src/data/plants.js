// 诗经草木数据 - 五维内容模板
export const plantData = [
  {
    id: 1,
    name: '芍药',
    pinyin: 'sháo yào',
    category: 'flower',
    image: '/static/plants/shaoyao.jpg',
    
    shijing: {
      original: '维士与女，伊其相谑，赠之以芍药。',
      source: '《诗经·郑风·溱洧》',
      interpretation: '这是《诗经》中唯一记载芍药的篇目，描绘了上古仲春上巳节，青年男女出游嬉戏、互赠芍药定情的场景。'
    },
    
    science: {
      basic: '芍药为毛茛科芍药属多年生草本花卉，素有"花中宰相"之称。',
      nameOrigin: '上古时期"勺药"为正名，后世演变为"芍药"。'
    },
    
    culture: {
      flowerLanguage: '惜别、相思、爱慕'
    },
    
    unlocked: false,
    unlockDate: null
  },
  
  {
    id: 2,
    name: '木槿',
    pinyin: 'mù jǐn',
    category: 'flower',
    image: '/static/plants/mujin.jpg',
    
    shijing: {
      original: '有女同车，颜如舜华。将翱将翔，佩玉琼琚。',
      source: '《诗经·郑风·有女同车》',
      interpretation: '"舜华"即木槿花。诗中赞美同车女子容颜如木槿花般美丽动人。'
    },
    
    science: {
      basic: '木槿为锦葵科木槿属落叶灌木，朝开暮落，但日日相继。',
      nameOrigin: '木槿又称"舜华""日及"，因其花朝开暮落而得名。'
    },
    
    culture: {
      flowerLanguage: '温柔的坚持、坚韧、永恒美丽'
    },
    
    unlocked: false,
    unlockDate: null
  },
  
  {
    id: 3,
    name: '荇菜',
    pinyin: 'xìng cài',
    category: 'herb',
    image: '/static/plants/xingcai.jpg',
    
    shijing: {
      original: '参差荇菜，左右流之。窈窕淑女，寤寐求之。',
      source: '《诗经·周南·关雎》',
      interpretation: '这是《诗经》开篇之作，以水中飘摇的荇菜起兴，引出君子对淑女的爱慕追求。'
    },
    
    science: {
      basic: '荇菜为龙胆科荇菜属多年生水生草本植物，叶片浮于水面，夏季开黄色小花。',
      nameOrigin: '荇菜又称"金莲儿""接余"，因其叶似睡莲，花呈金黄色而得名。'
    },
    
    culture: {
      flowerLanguage: '纯洁、美好、坚贞的爱情'
    },
    
    unlocked: false,
    unlockDate: null
  },
  
  {
    id: 4,
    name: '蒹葭',
    pinyin: 'jiān jiā',
    category: 'herb',
    image: '/static/plants/jianjia.jpg',
    
    shijing: {
      original: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。',
      source: '《诗经·秦风·蒹葭》',
      interpretation: '这首千古名篇以深秋芦苇起兴，描绘了对"伊人"的执着追寻。'
    },
    
    science: {
      basic: '"蒹葭"是芦苇的别称。为禾本科芦苇属多年生高大草本，生长在水边湿地。',
      nameOrigin: '蒹葭是古人对芦苇不同生长阶段的称呼。'
    },
    
    culture: {
      flowerLanguage: '执着追求、朦胧之美、思念'
    },
    
    unlocked: false,
    unlockDate: null
  },
  
  {
    id: 5,
    name: '枸杞',
    pinyin: 'gǒu qǐ',
    category: 'herb',
    image: '/static/plants/gouqi.jpg',
    
    shijing: {
      original: '陟彼北山，言采其杞。',
      source: '《诗经·小雅·北山》',
      interpretation: '诗中描写登上北山采集枸杞的场景，反映了上古时期人们采集野生植物的生活。'
    },
    
    science: {
      basic: '枸杞为茄科枸杞属落叶灌木，果实称枸杞子，红色浆果。',
      nameOrigin: '枸杞古称"杞"，李时珍《本草纲目》有详细记载。'
    },
    
    culture: {
      flowerLanguage: '长寿、健康、养生'
    },
    
    unlocked: false,
    unlockDate: null
  }
]

// 闯关题库
export const quizQuestions = [
  // 芍药相关
  {
    id: 1,
    type: 'poem_match',
    question: '"维士与女，伊其相谑，赠之以芍药。"描述的是哪种植物？',
    options: ['芍药', '牡丹', '桃花', '荷花'],
    correct: 0,
    plantId: 1,
    difficulty: 'easy'
  },
  {
    id: 2,
    type: 'feature',
    question: '哪种花被称为"花中宰相"，且是上古时期的爱情信物？',
    options: ['玫瑰', '芍药', '牡丹', '菊花'],
    correct: 1,
    plantId: 1,
    difficulty: 'easy'
  },
  
  // 木槿相关
  {
    id: 3,
    type: 'poem_match',
    question: '"有女同车，颜如舜华。"中的"舜华"指的是？',
    options: ['牡丹', '木槿', '芙蓉', '海棠'],
    correct: 1,
    plantId: 2,
    difficulty: 'medium'
  },
  {
    id: 4,
    type: 'feature',
    question: '哪种花朝开暮落，但日日相继，象征坚韧永恒？',
    options: ['昙花', '木槿', '牵牛花', '睡莲'],
    correct: 1,
    plantId: 2,
    difficulty: 'easy'
  },
  
  // 荇菜相关
  {
    id: 5,
    type: 'poem_match',
    question: '"参差荇菜，左右流之。"出自《诗经》哪一篇？',
    options: ['《蒹葭》', '《关雎》', '《桃夭》', '《采薇》'],
    correct: 1,
    plantId: 3,
    difficulty: 'medium'
  },
  {
    id: 6,
    type: 'feature',
    question: '荇菜是什么类型的植物？',
    options: ['陆生草本', '水生草本', '木本植物', '藤本植物'],
    correct: 1,
    plantId: 3,
    difficulty: 'easy'
  },
  
  // 蒹葭相关
  {
    id: 7,
    type: 'poem_match',
    question: '"蒹葭苍苍，白露为霜。所谓伊人，在水一方。"中的"蒹葭"是什么？',
    options: ['荷花', '芦苇', '菖蒲', '水草'],
    correct: 1,
    plantId: 4,
    difficulty: 'easy'
  },
  
  // 枸杞相关
  {
    id: 8,
    type: 'poem_match',
    question: '"陟彼北山，言采其杞。"中的"杞"指的是？',
    options: ['枸杞', '柳树', '桑树', '柏树'],
    correct: 0,
    plantId: 5,
    difficulty: 'medium'
  },
  {
    id: 9,
    type: 'feature',
    question: '枸杞最著名的功效是什么？',
    options: ['清热解毒', '滋补肝肾、明目', '活血化瘀', '安神助眠'],
    correct: 1,
    plantId: 5,
    difficulty: 'easy'
  },
  
  // 综合题
  {
    id: 10,
    type: 'culture',
    question: '《诗经》中哪种植物是华夏本土最正统的爱情之花？',
    options: ['玫瑰', '芍药', '桃花', '莲花'],
    correct: 1,
    plantId: 1,
    difficulty: 'hard'
  },
  {
    id: 11,
    type: 'feature',
    question: '以下哪种植物是水生植物？',
    options: ['木槿', '枸杞', '荇菜', '芍药'],
    correct: 2,
    plantId: 3,
    difficulty: 'medium'
  },
  {
    id: 12,
    type: 'poem_match',
    question: '"桃之夭夭，灼灼其华"描述的是哪种植物？',
    options: ['桃花', '杏花', '梨花', '梅花'],
    correct: 0,
    plantId: null,
    difficulty: 'medium'
  }
]

// 成就系统
export const achievements = [
  {
    id: 'beginner',
    name: '初识草木',
    description: '解锁第一株诗经草木',
    icon: '🌱',
    condition: (unlockedCount) => unlockedCount >= 1
  },
  {
    id: 'shaoyao_expert',
    name: '芍药知客',
    description: '解锁芍药图鉴',
    icon: '🌸',
    condition: (unlockedCount, plants) => plants.find(p => p.id === 1)?.unlocked
  },
  {
    id: 'collector_3',
    name: '三友聚首',
    description: '解锁3株草木',
    icon: '🌿',
    condition: (unlockedCount) => unlockedCount >= 3
  },
  {
    id: 'collector_5',
    name: '五芳齐放',
    description: '解锁全部5株草木',
    icon: '💐',
    condition: (unlockedCount) => unlockedCount >= 5
  },
  {
    id: 'master',
    name: '诗经百草师',
    description: '收集所有草木并通关所有关卡',
    icon: '👑',
    condition: (unlockedCount, plants, quizPassed) => unlockedCount >= 5 && quizPassed
  }
]

// 每日诗签数据
export const dailySigns = [
  {
    plantId: 1,
    poem: '维士与女，伊其相谑，赠之以芍药。',
    message: '风月温柔，芍药寄情',
    blessing: '愿你遇见懂你的人，互赠一生温柔'
  },
  {
    plantId: 2,
    poem: '有女同车，颜如舜华。',
    message: '木槿花开，日日新生',
    blessing: '愿你如木槿，温柔而坚韧'
  },
  {
    plantId: 3,
    poem: '参差荇菜，左右流之。窈窕淑女，寤寐求之。',
    message: '荇菜摇曳，心之所向',
    blessing: '愿你所求皆如愿，所行化坦途'
  },
  {
    plantId: 4,
    poem: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。',
    message: '蒹葭深处，皆是思念',
    blessing: '愿你执着的追求，终有回响'
  },
  {
    plantId: 5,
    poem: '陟彼北山，言采其杞。',
    message: '枸杞红熟，岁月静好',
    blessing: '愿你身心健康，长寿安康'
  }
]
