// 诗经草木完整数据（五维内容·最终校验版）
// 严格遵循用户设定：所有植物名称、出处、分类、主题完全不动，仅补充学术说明
export const plantData = [
  {
    id: 1,
    name: '荇菜',
    pinyin: 'xìng cài',
    category: 'herb',
    image: '/static/plants/xingcai.jpg',
    source: '《诗经·周南·关雎》',
    text: '参差荇菜，左右流之。',
    meaning: '荇菜是一种水生植物，叶片浮于水面，花黄色。古人采摘它来食用。',
    culture: '在这首诗中，荇菜的采摘象征着对淑女的追求，左右流之描绘了采摘时的动态。',
    usage: '荇菜可食用，也可作为观赏植物，全草可入药，有清热利尿的功效。',
    flowerLanguage: '纯洁、美好、坚贞的爱情',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 2,
    name: '芣苢（车前草）',
    pinyin: 'fú yǐ',
    category: 'herb',
    image: '/static/plants/cheqian.jpg',
    source: '《诗经·周南·芣苢》',
    text: '采采芣苢，薄言采之。',
    meaning: '芣苢就是车前草，古人认为它的种子可以治不孕，所以妇女们集体去采摘。',
    culture: '这首诗描绘了古代妇女集体采摘车前草的劳动场景，充满了生活气息。',
    usage: '车前草是常见的草药，有利尿、清热、明目、祛痰的功效。',
    flowerLanguage: '生命力、坚韧',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 3,
    name: '桃',
    pinyin: 'táo',
    category: 'flower',
    image: '/static/plants/tao.jpg',
    source: '《诗经·周南·桃夭》',
    text: '桃之夭夭，灼灼其华。',
    meaning: '桃树的果实饱满，象征着多子多福。',
    culture: '桃花在中国文化中一直是美好婚姻的象征，这首诗是祝贺新娘的诗。',
    usage: '桃子可食用，桃仁可入药，桃花可观赏也可美容。',
    flowerLanguage: '爱情、美好生活、长寿',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 4,
    name: '薇（野豌豆）',
    pinyin: 'wēi',
    category: 'herb',
    image: '/static/plants/wei.jpg',
    source: '《诗经·小雅·采薇》',
    text: '采薇采薇，薇亦作止。',
    meaning: '薇就是野豌豆，古代戍边士兵采摘它来充饥。',
    culture: '这首诗描写了戍边士兵的思乡之情，采薇是他们艰苦生活的写照。',
    usage: '野豌豆的嫩苗可食用，种子也可食用，是古代的救荒植物。',
    flowerLanguage: '思念、坚韧',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 5,
    name: '芄兰（萝藦）',
    pinyin: 'wán lán',
    category: 'herb',
    image: '/static/plants/wanlan.jpg',
    source: '《诗经·卫风·芄兰》',
    text: '芄兰之支，童子佩觿。',
    meaning: '芄兰的荚果像古代解结用的锥子（觿），所以用来比喻童子的配饰。',
    culture: '这首诗讽刺了童子虽然佩戴了成人的配饰，但行为还不够成熟。',
    usage: '萝藦的全草可入药，有补益精气、解毒的功效。',
    flowerLanguage: '成长、成熟',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 6,
    name: '芍药',
    pinyin: 'sháo yào',
    category: 'flower',
    image: '/static/plants/shaoyao.jpg',
    source: '《诗经·郑风·溱洧》',
    text: '维士与女，伊其相谑，赠之以芍药。',
    meaning: '这是《诗经》中唯一记载芍药的篇目，描绘了上古仲春上巳节，青年男女出游嬉戏、互赠芍药定情的场景。',
    culture: '芍药素有"花中宰相"之称，是华夏本土最正统的爱情信物。',
    usage: '芍药根可入药，称为"白芍"，有养血调经、敛阴止汗的功效。',
    flowerLanguage: '惜别、相思、爱慕',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 7,
    name: '木槿',
    pinyin: 'mù jǐn',
    category: 'flower',
    image: '/static/plants/mujin.jpg',
    source: '《诗经·郑风·有女同车》',
    text: '有女同车，颜如舜华。',
    meaning: '"舜华"即木槿花。诗中赞美同车女子容颜如木槿花般美丽动人。',
    culture: '木槿朝开暮落，但日日相继，象征着温柔而坚韧的生命力。',
    usage: '木槿花可食用，全株可入药，有清热利湿、凉血解毒的功效。',
    flowerLanguage: '温柔的坚持、坚韧、永恒美丽',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 8,
    name: '蒹葭（芦苇）',
    pinyin: 'jiān jiā',
    category: 'herb',
    image: '/static/plants/jianjia.jpg',
    source: '《诗经·秦风·蒹葭》',
    text: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。',
    meaning: '这首千古名篇以深秋芦苇起兴，描绘了对"伊人"的执着追寻。',
    culture: '蒹葭成为了中国文学中朦胧之美、执着追求的经典意象。',
    usage: '芦苇可造纸、编席，根茎可入药，有清热生津、除烦止呕的功效。',
    flowerLanguage: '执着追求、朦胧之美、思念',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 9,
    name: '枸杞',
    pinyin: 'gǒu qǐ',
    category: 'herb',
    image: '/static/plants/gouqi.jpg',
    source: '《诗经·小雅·北山》',
    text: '陟彼北山，言采其杞。',
    meaning: '诗中描写登上北山采集枸杞的场景，反映了上古时期人们采集野生植物的生活。',
    culture: '枸杞自古以来就是滋补佳品，象征着长寿和健康。',
    usage: '枸杞子可食用、泡茶，有滋补肝肾、益精明目的功效。',
    flowerLanguage: '长寿、健康、养生',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 10,
    name: '荠（荠菜）',
    pinyin: 'jì',
    category: 'herb',
    image: '/static/plants/ji.jpg',
    source: '《诗经·邶风·谷风》',
    text: '谁谓荼苦？其甘如荠。',
    meaning: '荠为上古常见野菜，味甘清甜。诗句以荠菜甘甜对比苦菜苦涩，是弃妇感叹婚姻变故、今昔境遇反差的咏叹。',
    culture: '关联婚嫁居家意象，用以衬托人情冷暖、婚姻离合的生活感慨。',
    usage: '荠菜嫩苗可做菜、做馅食用，全草可入药，凉血止血、清热利湿。',
    flowerLanguage: '阖家美满、生活甘甜、相守相伴',
    unlocked: false,
    unlockDate: null
  },

  // 亲情植物
  {
    id: 11,
    name: '萱草',
    pinyin: 'xuān cǎo',
    category: 'flower',
    image: '/static/plants/xuancao.jpg',
    source: '《诗经·卫风·伯兮》',
    text: '焉得谖草，言树之背。',
    meaning: '谖草即萱草，古人认为萱草可以忘忧。思妇因丈夫远征不归，心生愁苦，欲植萱草以解相思。',
    culture: '经典亲情草木，专为寄托思亲、忘忧释怀的情感，是古代亲友牵挂的象征。',
    usage: '萱草可观赏，花苞可食用，根茎入药，能清热安神、舒缓情绪。',
    flowerLanguage: '牵挂亲人、忘忧思归、温情亲情',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 12,
    name: '酸枣',
    pinyin: 'suān zǎo',
    category: 'tree',
    image: '/static/plants/suanzao.jpg',
    source: '《诗经·邶风·凯风》',
    text: '凯风自南，吹彼棘心。',
    meaning: '棘即酸枣树，棘心指酸枣初生嫩芽。诗人以柔嫩棘木受风抚育，比喻子女承蒙父母养育之恩。',
    culture: '《凯风》为孝亲名篇，酸枣作为亲情象征草木，代表父母抚育、子女感恩的真挚亲情。',
    usage: '酸枣果肉可食，枣仁入药，养心安神、益气助眠。',
    flowerLanguage: '感念亲恩、温柔相伴、亲情绵长',
    unlocked: false,
    unlockDate: null
  },

  // 社交礼仪植物
  {
    id: 13,
    name: '白茅',
    pinyin: 'bái máo',
    category: 'herb',
    image: '/static/plants/baimao.jpg',
    source: '《诗经·召南·野有死麕》',
    text: '野有死麕，白茅包之。',
    meaning: '白茅洁白洁净，是上古极具诚意的礼仪用材，古人以白茅包裹猎物作为郑重馈赠。',
    culture: '上古社交、馈赠、定情的礼仪草木，象征待人赤诚、礼仪端正、心意纯粹。',
    usage: '白茅根茎可入药，清热凉血、利尿生津，嫩芽可食用。',
    flowerLanguage: '赤诚有礼、纯粹真心、敬人以诚',
    unlocked: false,
    unlockDate: null
  },

  // 家国情怀植物
  {
    id: 14,
    name: '棠梨',
    pinyin: 'táng lí',
    category: 'tree',
    image: '/static/plants/tangli.jpg',
    source: '《诗经·召南·甘棠》',
    text: '蔽芾甘棠，勿翦勿伐。',
    meaning: '甘棠即棠梨，因召公曾于此树下理政休憩，百姓爱戴贤臣，不忍砍伐此树。',
    culture: '经典家国草木，象征贤臣爱民、家国清平、百姓感念仁政的家国情怀。',
    usage: '棠梨果实可食、酿酒，树皮入药，清热润肺、止咳化痰。',
    flowerLanguage: '仁政安邦、家国祥和、民心向善',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 15,
    name: '贝母',
    pinyin: 'bèi mǔ',
    category: 'herb',
    image: '/static/plants/beimu.jpg',
    source: '《诗经·卫风·载驰》',
    text: '陟彼阿丘，言采其蝱。',
    meaning: '《载驰》中"蝱"通贝母，许穆夫人登高采贝母，以此消解心中忧国郁结。',
    culture: '承载女子家国大义，是忧国思邦、心系故土的家国情怀象征草木。',
    usage: '贝母为名贵中药材，润肺止咳、散结化痰。',
    flowerLanguage: '心怀家国、忧国思民、大义柔情',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 16,
    name: '麦子',
    pinyin: 'mài zi',
    category: 'grain',
    image: '/static/plants/mai.jpg',
    source: '《诗经·卫风·载驰》',
    text: '我行其野，芃芃其麦。',
    meaning: '诗人奔走故国郊野，见麦田蓬勃茂盛，满目生机，寄托对故国的眷恋与期许。',
    culture: '以故土繁盛的麦田，象征邦国生机、故土难忘，是游子家国眷恋的代表草木。',
    usage: '麦子为上古核心粮食作物，滋养民生，是家国存续的根基作物。',
    flowerLanguage: '故土荣昌、家国繁盛、眷恋故土',
    unlocked: false,
    unlockDate: null
  },

  // 品德象征植物
  {
    id: 17,
    name: '萹蓄',
    pinyin: 'biān xù',
    category: 'herb',
    image: '/static/plants/bianxu.jpg',
    source: '《诗经·卫风·淇奥》',
    text: '绿竹猗猗，绿竹青青。',
    meaning: '《淇奥》中"绿竹"有两种权威解释：古注认为"绿为王刍，竹为萹蓄"，指两种草本植物；现代多解释为绿色的竹子。萹蓄丛生整齐、洁净端直。',
    culture: '以萹蓄端整清秀的长势，比喻君子品行端正、修身自持、品性高洁，是经典品德象征草木。',
    usage: '萹蓄全草入药，利水通淋、清热解毒。',
    flowerLanguage: '品行端方、修身立德、君子自持',
    unlocked: false,
    unlockDate: null
  },

  // 实用植物
  {
    id: 18,
    name: '侧柏',
    pinyin: 'cè bǎi',
    category: 'tree',
    image: '/static/plants/cebai.jpg',
    source: '《诗经·邶风·柏舟》',
    text: '泛彼柏舟，亦泛其流。',
    meaning: '柏木质地坚实耐水，古人伐柏造舟，漂泊水上，坚固耐用。',
    culture: '柏树坚韧常青、遇风不改，象征君子坚守本心、品性坚贞、不屈不挠。',
    usage: '柏木可造船、制器，枝叶种实入药，祛湿安神、止血解毒。',
    flowerLanguage: '坚贞守心、刚毅不屈、恒久自持',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 19,
    name: '泡桐',
    pinyin: 'pào tóng',
    category: 'tree',
    image: '/static/plants/paotong.jpg',
    source: '《诗经·鄘风·定之方中》',
    text: '树之榛栗，椅桐梓漆。',
    meaning: '桐即泡桐，是上古营建新都时人工栽种的重要林木，材质优良、用途广泛。',
    culture: '代表建都立业、安居兴邦、家国营建的安稳寓意，是上古城建实用吉祥草木。',
    usage: '泡桐木质轻柔，可制乐器、器具，花叶树皮均可入药。',
    flowerLanguage: '安居立业、基业长青、安稳兴盛',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 20,
    name: '茜草',
    pinyin: 'qiàn cǎo',
    category: 'herb',
    image: '/static/plants/qiancao.jpg',
    source: '《诗经·郑风·出其东门》',
    text: '缟衣茹藘，聊乐我员。',
    meaning: '茹藘即为茜草，是上古最主要的红色染料植物，可染制红衣织物。',
    culture: '象征质朴专一、不慕浮华、坚守本心的纯粹品性。',
    usage: '茜草根可提取天然红色染料，亦可入药，活血凉血、通经化瘀。',
    flowerLanguage: '质朴专一、本心纯粹、真挚不渝',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 21,
    name: '蓑草',
    pinyin: 'suō cǎo',
    category: 'herb',
    image: '/static/plants/suocao.jpg',
    source: '《诗经·小雅·无羊》',
    text: '尔牧来思，何蓑何笠。',
    meaning: '蓑草纤维坚韧耐磨，是上古牧民、农人编织蓑衣的核心实用草木。',
    culture: '代表农耕烟火、勤恳劳作、质朴坚韧的民生精神。',
    usage: '茎叶坚韧，可编织蓑衣、绳索、草鞋，是古代重要民生实用草木。',
    flowerLanguage: '勤恳耕耘、质朴坚韧、烟火安稳',
    unlocked: false,
    unlockDate: null
  },

  // 祭祀植物
  {
    id: 22,
    name: '白蒿',
    pinyin: 'bái hāo',
    category: 'herb',
    image: '/static/plants/baihao.jpg',
    source: '《诗经·召南·采蘩》',
    text: '于以采蘩？于沼于沚。',
    meaning: '蘩即白蒿，洁净芬芳，是上古宗庙祭祀、公侯礼仪专用的香草。',
    culture: '专为祭祀礼敬所用，象征虔诚明德、敬祖守礼、洁净肃穆。',
    usage: '白蒿可食用制茶，全草入药，清热解毒、祛风除湿。',
    flowerLanguage: '虔诚恭谨、明德守礼、肃穆纯粹',
    unlocked: false,
    unlockDate: null
  },
  {
    id: 23,
    name: '郁金',
    pinyin: 'yù jīn',
    category: 'herb',
    image: '/static/plants/yujin.jpg',
    source: '《诗经·大雅·江汉》',
    text: '厘尔圭瓒，秬鬯一卣。',
    meaning: '上古王室祭祀大典所用秬鬯香酒，以郁金调和酿造，香气清穆庄重。',
    culture: '顶级王室祭祀礼制草木，象征社稷庄重、礼制森严、家国明德。',
    usage: '郁金可制香入药，行气解郁、清心凉血。',
    flowerLanguage: '礼制庄严、明德安邦、虔诚肃穆',
    unlocked: false,
    unlockDate: null
  }
]

// 完整闯关题库（全部校验正确）
export const questions = [
  {
    id: 1,
    type: 'single',
    text: '"参差荇菜，左右流之"出自《诗经》哪一篇？',
    options: ['《关雎》', '《蒹葭》', '《桃夭》', '《采薇》'],
    answer: 0,
    plantId: 1,
    difficulty: 'easy'
  },
  {
    id: 3,
    type: 'single',
    text: '桃之夭夭，灼灼其华。\n之子于归，宜其室家。\n桃之夭夭，有____其实。',
    options: ['蕡', '黄', '硕', '肥'],
    answer: 0,
    plantId: 3,
    difficulty: 'medium'
  },
  {
    id: 4,
    type: 'single',
    text: '____，薇亦作止。\n曰归曰归，岁亦莫止。',
    options: ['采薇采薇', '昔我往矣', '彼尔维何', '我行不来'],
    answer: 0,
    plantId: 4,
    difficulty: 'easy'
  },
  {
    id: 5,
    type: 'single',
    text: '芄兰之____，童子佩觿。\n虽则佩觿，能不我知？',
    options: ['支', '叶', '花', '实'],
    answer: 0,
    plantId: 5,
    difficulty: 'medium'
  },
  {
    id: 6,
    type: 'single',
    text: '"赠之以芍药"描绘的是古代哪个节日的习俗？',
    options: ['上巳节', '中秋节', '端午节', '重阳节'],
    answer: 0,
    plantId: 6,
    difficulty: 'hard'
  },
  {
    id: 7,
    type: 'single',
    text: '"有女同车，颜如舜华。"中的"舜华"指的是？',
    options: ['牡丹', '木槿', '芙蓉', '海棠'],
    answer: 1,
    plantId: 7,
    difficulty: 'medium'
  },
  {
    id: 8,
    type: 'single',
    text: '"蒹葭苍苍，白露为霜。所谓伊人，在水一方。"中的"蒹葭"是什么？',
    options: ['荷花', '芦苇', '菖蒲', '水草'],
    answer: 1,
    plantId: 8,
    difficulty: 'easy'
  },
  {
    id: 9,
    type: 'single',
    text: '"陟彼北山，言采其杞。"中的"杞"指的是？',
    options: ['枸杞', '柳树', '桑树', '柏树'],
    answer: 0,
    plantId: 9,
    difficulty: 'medium'
  },
  {
    id: 10,
    type: 'single',
    text: '"桃之夭夭，灼灼其华"常用来比喻什么？',
    options: ['新娘美丽', '战士英勇', '学者智慧', '隐士高洁'],
    answer: 0,
    plantId: 3,
    difficulty: 'medium'
  },
  {
    id: 11,
    type: 'single',
    text: '"参差荇菜，左右流之"中，荇菜的生长环境是？',
    options: ['山地', '水边', '沙漠', '草原'],
    answer: 1,
    plantId: 1,
    difficulty: 'medium'
  },
  {
    id: 12,
    type: 'single',
    text: '"有女同车，颜如舜华"中，"舜华"比喻女子容颜如什么花般美丽？',
    options: ['牡丹', '木槿', '芙蓉', '海棠'],
    answer: 1,
    plantId: 7,
    difficulty: 'easy'
  },
  {
    id: 13,
    type: 'single',
    text: '"谁谓荼苦？其甘如荠。"出自《诗经》哪一篇？',
    options: ['《邶风·谷风》', '《周南·关雎》', '《郑风·溱洧》', '《秦风·蒹葭》'],
    answer: 0,
    plantId: 10,
    difficulty: 'easy'
  },
  {
    id: 14,
    type: 'single',
    text: '《邶风·谷风》中"其甘如荠"，借荠菜表达了什么情感？',
    options: ['向往自由', '追忆往日夫妻甜蜜', '赞美山野风光', '感叹旅途艰辛'],
    answer: 1,
    plantId: 10,
    difficulty: 'medium'
  },
  {
    id: 15,
    type: 'single',
    text: '《卫风·伯兮》中用来寄托思亲忘忧的草木是？',
    options: ['萱草', '白茅', '荠菜', '贝母'],
    answer: 0,
    plantId: 11,
    difficulty: 'easy'
  },
  {
    id: 16,
    type: 'single',
    text: '《邶风·凯风》中"吹彼棘心"的酸枣树象征？',
    options: ['坚韧不屈', '父母养育之恩', '家国安宁', '君子品德'],
    answer: 1,
    plantId: 12,
    difficulty: 'medium'
  },
  {
    id: 17,
    type: 'single',
    text: '上古社交礼仪中，用以馈赠示礼的洁净草木是？',
    options: ['白茅', '萱草', '蓑草', '茜草'],
    answer: 0,
    plantId: 13,
    difficulty: 'easy'
  },
  {
    id: 18,
    type: 'single',
    text: '《甘棠》中百姓不忍砍伐、感念贤臣的树木是？',
    options: ['泡桐', '棠梨', '白蒿', '郁金'],
    answer: 1,
    plantId: 14,
    difficulty: 'easy'
  },
  {
    id: 19,
    type: 'single',
    text: '《载驰》中许穆夫人采何物排解忧国之情？',
    options: ['贝母', '麦子', '萱草', '萹蓄'],
    answer: 0,
    plantId: 15,
    difficulty: 'medium'
  },
  {
    id: 20,
    type: 'single',
    text: '《载驰》"芃芃其麦"的麦田寄托了什么情怀？',
    options: ['爱情甜蜜', '眷恋故土家国', '品德高洁', '祭祀虔诚'],
    answer: 1,
    plantId: 16,
    difficulty: 'medium'
  },
  {
    id: 21,
    type: 'single',
    text: '《淇奥》中比喻君子品行端正的草木是？',
    options: ['茜草', '蓑草', '萹蓄', '白茅'],
    answer: 2,
    plantId: 17,
    difficulty: 'medium'
  },
  {
    id: 22,
    type: 'single',
    text: '《柏舟》中象征坚贞本心、可造舟为器的树木是？',
    options: ['泡桐', '侧柏', '棠梨', '酸枣'],
    answer: 1,
    plantId: 18,
    difficulty: 'easy'
  },
  {
    id: 23,
    type: 'single',
    text: '《定之方中》建国营建、栽种兴业的实用树木是？',
    options: ['泡桐', '侧柏', '萱草', '白蒿'],
    answer: 0,
    plantId: 19,
    difficulty: 'medium'
  },
  {
    id: 24,
    type: 'single',
    text: '《出其东门》中上古红色染料植物茹藘指？',
    options: ['白茅', '茜草', '蓑草', '贝母'],
    answer: 1,
    plantId: 20,
    difficulty: 'medium'
  },
  {
    id: 25,
    type: 'single',
    text: '《无羊》牧民劳作所穿蓑衣由哪种草木制成？',
    options: ['蓑草', '白蒿', '茜草', '萹蓄'],
    answer: 0,
    plantId: 21,
    difficulty: 'easy'
  },
  {
    id: 26,
    type: 'single',
    text: '《召南·采蘩》专供宗庙祭祀的礼仪草木是？',
    options: ['郁金', '白蒿', '萱草', '棠梨'],
    answer: 1,
    plantId: 22,
    difficulty: 'easy'
  },
  {
    id: 27,
    type: 'single',
    text: '《大雅·江汉》王室祭祀大典所用礼制草木为？',
    options: ['白蒿', '郁金', '白茅', '贝母'],
    answer: 1,
    plantId: 23,
    difficulty: 'hard'
  }
]

// 所有植物列表（侧边栏自动渲染，无需手动修改）
export const allPlantsList = plantData.map(p => ({
  id: p.id,
  name: p.name
}))