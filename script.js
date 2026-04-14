const humorOrder = ["sanguine", "choleric", "phlegmatic", "melancholic"];

const humorProfiles = {
    sanguine: {
        label: "多血质",
        title: "多血质 | 点亮舱内的人",
        short: "先把人连起来，先把气氛拉回来。",
        summary: "你像逃生舱里的第一团火。越是黑、越是乱，你越会先开口、先鼓劲、先把人从发愣和慌乱里拉回现场。",
        action: "在连环危机里，你往往会用回应、鼓励和临场交流把队伍重新缝在一起，让大家继续往前走。",
        friendship: "别人和你待在一起时，最直观的感受往往是不容易彻底绝望，因为你会不断制造连接感。",
        teamwork: "如果一起组队，你最适合负责对外沟通、情绪安抚和临场协调。旁边再有一个人帮你补细节，效率会非常高。"
    },
    choleric: {
        label: "胆汁质",
        title: "胆汁质 | 顶在最前的人",
        short: "看见窗口就冲，看见责任就扛。",
        summary: "你像推进器点火的那一下。在压力里你不会先发呆，而是会迅速决定方向、承担风险，把犹豫直接压缩成动作。",
        action: "故事越往后，你越像那个敢在关键口子上抢时间的人。别人还在判断时，你多半已经开始做第一步了。",
        friendship: "别人和你相处时，会很明显感到被带着往前走。你让人安心的地方，在于关键时刻真的敢站出来。",
        teamwork: "如果一起组队，你最适合抢节奏、扛决策、踩第一脚油门。旁边有个冷静的人替你看盲点，会更稳。"
    },
    phlegmatic: {
        label: "黏液质",
        title: "黏液质 | 压住慌乱的人",
        short: "先稳住队伍，再稳住结局。",
        summary: "你像失压舱里还维持着正常数值的那块表。你不一定最响亮，却常常是最能让局面不继续变糟的人。",
        action: "在连续事故里，你会下意识去看谁掉队、谁太慌、谁需要先被照顾，再一步一步把大家往安全处带。",
        friendship: "别人和你相处时，最容易感受到的是踏实。你可能不抢镜，但会在大家最需要的时候出现得非常准。",
        teamwork: "如果一起组队，你最适合守节奏、照顾同伴、收尾兜底。你不一定最猛，却很容易成为全队最后能靠住的锚点。"
    },
    melancholic: {
        label: "忧郁质",
        title: "忧郁质 | 把局面看穿的人",
        short: "先看清，再动手；先理解，再下判断。",
        summary: "你像舷窗旁那张还没被火光吞掉的星图。你很容易先看到细节、结构和隐藏信息，再据此决定要不要出手。",
        action: "越接近结尾，你越会把别人忽略的小线索串成路径。很多看上去冷的反应，其实是在替全队减少浪费和误判。",
        friendship: "别人和你相处时，常会觉得你反应慢半拍，其实那半拍里往往塞满了观察、判断和预演。",
        teamwork: "如果一起组队，你最适合看图、排错、找漏洞、做最后复核。只要给你一点判断空间，你会非常可靠。"
    }
};

const humorBlendNames = {
    sanguine: "多血",
    choleric: "胆汁",
    phlegmatic: "黏液",
    melancholic: "忧郁"
};

const blendProfiles = {
    "sanguine-choleric": {
        label: "多血-胆汁型",
        title: "多血-胆汁型 | 高燃推进器",
        summary: "你外向、精力足，也比典型多血更冲、更急。你不只会把气氛点燃，还会忍不住把局面往前推。",
        action: "在危机里，你常常一边说、一边做，既能带起士气，也会直接把场面从停滞里拽出来。",
        relationship: "别人会觉得你很有感染力，也很有推动力；你的难点是速度一上来时，旁人未必跟得上。",
        teamwork: "你适合做前排推进者和现场发动机。旁边有个稳的人替你压节奏，会非常强。"
    },
    "sanguine-phlegmatic": {
        label: "多血-黏液型",
        title: "多血-黏液型 | 暖场稳定器",
        summary: "你温和、好相处、稳定乐观。你有多血的亲和和表达，也有黏液的耐心与松弛，不容易把关系推得太紧。",
        action: "在危机里，你擅长先把人聚拢，再用柔和但稳定的方式推动大家继续往前。",
        relationship: "别人通常会觉得你很好靠近，和你相处轻松、不累。你的魅力在于温暖而不冒犯。",
        teamwork: "你适合做气氛协调者和团队润滑剂，能把不同性格的人慢慢放到同一个节拍里。"
    },
    "sanguine-melancholic": {
        label: "多血-忧郁型",
        title: "多血-忧郁型 | 发光的观察者",
        summary: "你外表热络，内里却比看起来敏感得多。你既想和世界建立连接，也会在连接里反复体会细节和情绪。",
        action: "在危机里，你会先出声、先连人，同时也会忍不住去看每个人状态和气氛里没说出口的部分。",
        relationship: "别人往往先被你的外向吸引，熟了以后才发现你其实心很细，也很容易被氛围刺到。",
        teamwork: "你适合做共情型沟通者，既能联络人，也能察觉团队里那些隐形情绪。"
    },
    "choleric-sanguine": {
        label: "胆汁-多血型",
        title: "胆汁-多血型 | 带队点火者",
        summary: "你强势、外向、行动快，而且比典型胆汁更有感染力。你不是冷硬地推人，而是会边推边带起气场。",
        action: "在危机里，你很容易自然站到前面，一边下判断，一边把其他人卷进你的节奏。",
        relationship: "别人会觉得跟着你很容易动起来，但也可能觉得你存在感太强，很难忽略。",
        teamwork: "你适合做领头人和外部发言位，能同时负责决策和鼓动。"
    },
    "choleric-phlegmatic": {
        label: "胆汁-黏液型",
        title: "胆汁-黏液型 | 冷静执行者",
        summary: "你有胆汁的目标感，也有黏液的稳。你不是最炸的那种强势，而是持续、沉着、很能把事做完。",
        action: "在危机里，你不会乱吼乱冲，但会稳定地把正确动作一件件落下去，越拖越能看出你有多能扛。",
        relationship: "别人会觉得你有分量，因为你既能扛事，又不容易情绪化。",
        teamwork: "你适合做执行核心和压舱石式领导者，越复杂的场面越能看出你的耐力。"
    },
    "choleric-melancholic": {
        label: "胆汁-忧郁型",
        title: "胆汁-忧郁型 | 锐利指挥官",
        summary: "你强硬、目标明确，又比一般胆汁更会思考后果和结构。你做事不只是快，还讲究准，因此也更容易执拗。",
        action: "在危机里，你会迅速判断最优路线，并希望所有人严格跟上，容不得太多含糊。",
        relationship: "别人会敬你的判断力，但也会感到你标准高、很难糊弄。",
        teamwork: "你适合做策略负责人和最终拍板的人，只是要记得给他人一点呼吸空间。"
    },
    "phlegmatic-sanguine": {
        label: "黏液-多血型",
        title: "黏液-多血型 | 温柔发光体",
        summary: "你整体稳定柔和，但也带着不小的亲和力和乐观感。你不是最热闹的人，却很会让人慢慢放松下来。",
        action: "在危机里，你会先照顾氛围和人心，再把大家温柔地推回正轨。",
        relationship: "别人会觉得你舒服、可亲、不压迫，和你靠近不会太累。",
        teamwork: "你适合做安抚者与连接者，能把温度和稳定同时带进队伍。"
    },
    "phlegmatic-choleric": {
        label: "黏液-胆汁型",
        title: "黏液-胆汁型 | 稳定掌舵者",
        summary: "你表面平和，但关键时刻其实很有主意。你不爱乱冲，可一旦判断该上，就会非常坚定。",
        action: "在危机里，你通常先稳场，等看清后再果断接手，爆发力不像突然点火，更像稳稳加速。",
        relationship: "别人会低估你的决心，熟了以后才知道你其实很难被推着走。",
        teamwork: "你适合做后段接管型角色，平时稳，关键时刻能扛。"
    },
    "phlegmatic-melancholic": {
        label: "黏液-忧郁型",
        title: "黏液-忧郁型 | 静水深流者",
        summary: "你安静、慢热、情绪层次深，但整体比典型忧郁更平稳。你不喜欢喧闹，更擅长在安静里建立深连接。",
        action: "在危机里，你会先守住节奏、观察情绪，再做那些不打扰但很有分量的动作。",
        relationship: "别人会觉得你不容易一下子亲近，但一旦靠近，会发现你很细腻也很可靠。",
        teamwork: "你适合做长期支持位和隐形兜底者，越熟的人越知道你的价值。"
    },
    "melancholic-sanguine": {
        label: "忧郁-多血型",
        title: "忧郁-多血型 | 敏感表达者",
        summary: "你内里敏感细密，但又不像典型忧郁那样完全收着。你既会认真感受，也会想把感受表达出来。",
        action: "在危机里，你会一边分析，一边努力和外界保持联系，不愿彻底把自己关起来。",
        relationship: "别人会觉得你既有深度也有温度，只是有时会在热络和抽离之间切换。",
        teamwork: "你适合做内容表达者、记录者和共情沟通者，能把复杂感受讲明白。"
    },
    "melancholic-choleric": {
        label: "忧郁-胆汁型",
        title: "忧郁-胆汁型 | 深思的强攻者",
        summary: "你深思熟虑，但也强硬、执拗。你不是只会想的人；一旦认定方向，就会带着很强的意志往前推。",
        action: "在危机里，你会先快速构建判断，再用近乎不肯退让的方式去执行。",
        relationship: "别人会觉得你又冷静又有压迫感，因为你不是随便强势，而是带着理由强势。",
        teamwork: "你适合做高标准策略位，能看清问题也敢把事情推到底，但要防止把自己和别人逼太紧。"
    },
    "melancholic-phlegmatic": {
        label: "忧郁-黏液型",
        title: "忧郁-黏液型 | 深水静默者",
        summary: "你安静、内收、慢热，情绪也比别人更深。你不会很快把自己交出去，但一旦认真，就会非常久、非常真。",
        action: "在危机里，你会先观察、吸收、判断，再用安静但很稳的方式推进。",
        relationship: "别人会觉得你不算热烈，却很有厚度；你给人的安全感，往往来自谨慎和真诚。",
        teamwork: "你适合做观察者、复核者和深度支持位，能在别人忽略的地方守住质量和情绪。"
    }
};

const blendRoleMatches = {
    "sanguine-choleric": [
        { role: "爱人", matchBlend: "phlegmatic-melancholic", copy: "你已经很热也很快了，所以爱人最适合是那种稳、深、慢热的组合。TA 会把关系里的节奏慢下来，让你的冲劲不必总靠燃烧自己来维持。" },
        { role: "导师", matchBlend: "melancholic-choleric", copy: "导师最适合是又深又硬的类型。TA 会逼你在出手前看见结构、代价和情绪后果，让你的锋芒更准。" },
        { role: "朋友", matchBlend: "sanguine-phlegmatic", copy: "朋友最适合是热络但不失稳当的组合。TA 跟得上你的热度，也懂得把你的高压时刻重新拉回一点轻松和玩心。" }
    ],
    "sanguine-phlegmatic": [
        { role: "爱人", matchBlend: "melancholic-phlegmatic", copy: "你已经够暖也够稳了，爱人反而适合是安静、深层、慢熟的组合。TA 会把你没说透的情绪和深层欲望慢慢翻出来，让关系更深。" },
        { role: "导师", matchBlend: "choleric-phlegmatic", copy: "导师最适合是稳里带狠的类型。TA 会推你在关键时刻更干脆一点，避免你总想让所有人都舒服而错过窗口。" },
        { role: "朋友", matchBlend: "sanguine-choleric", copy: "朋友最适合是热烈又带推进力的组合。TA 会和你一起把轻松、热闹和联结感放大，让你的温柔不至于太安静。" }
    ],
    "sanguine-melancholic": [
        { role: "爱人", matchBlend: "phlegmatic-sanguine", copy: "你外热内深，爱人最适合是稳定里带一点亮度的组合。TA 的稳定能接住你的敏感，也能让你不必每次都把情绪先包成玩笑再说出来。" },
        { role: "导师", matchBlend: "choleric-melancholic", copy: "导师最适合是判断很重、执行也很硬的类型。TA 会在你想太多、感受太满的时候，把你重新推回行动面。" },
        { role: "朋友", matchBlend: "sanguine-phlegmatic", copy: "朋友最适合是柔和热络的组合。TA 能给你空气和亮度，让你不只是细腻，也还能继续松开自己。" }
    ],
    "choleric-sanguine": [
        { role: "爱人", matchBlend: "phlegmatic-melancholic", copy: "你会带着力量去爱，也会带着力量去要求，所以爱人适合是稳、深、能消化情绪的组合。TA 能帮你把强度降到可被长期承受的范围。" },
        { role: "导师", matchBlend: "melancholic-phlegmatic", copy: "导师最适合是冷静又耐心的类型。TA 会提醒你不是所有能推进的事都值得立刻推进。" },
        { role: "朋友", matchBlend: "sanguine-choleric", copy: "朋友最适合是和你一样带火的组合。TA 懂你的存在感，也能帮你把强硬重新翻译成热情和带动。" }
    ],
    "choleric-phlegmatic": [
        { role: "爱人", matchBlend: "sanguine-phlegmatic", copy: "你平时稳，真要推进时又很硬，所以爱人适合是温暖外放但不过头的组合。TA 会让关系里多一点表达、活力和温度。" },
        { role: "导师", matchBlend: "melancholic-choleric", copy: "导师最适合是高标准又有执行力的类型。TA 会让你在执行之前多看一层隐性风险和人心变化。" },
        { role: "朋友", matchBlend: "phlegmatic-sanguine", copy: "朋友最适合是舒服耐久、又不至于太闷的组合。TA 会和你形成一种很能抗压的默契，不吵但非常耐久。" }
    ],
    "choleric-melancholic": [
        { role: "爱人", matchBlend: "phlegmatic-sanguine", copy: "你既硬又深，爱人最适合是稳定里带明亮的组合。TA 会给你缓冲、接纳和生活感，让你不是时时都活在判断与标准里。" },
        { role: "导师", matchBlend: "sanguine-phlegmatic", copy: "导师最适合是热但不乱的类型。TA 不一定比你更会想，但更会提醒你世界上还有轻一点的走法。" },
        { role: "朋友", matchBlend: "choleric-sanguine", copy: "朋友最适合是跟得上你强度、但没你这么沉的组合。TA 能陪你狠狠干事，不会轻易被你的高标准吓退。" }
    ],
    "phlegmatic-sanguine": [
        { role: "爱人", matchBlend: "melancholic-phlegmatic", copy: "你给人的感觉柔和、可亲又稳定，爱人适合是安静深层的组合。TA 会让关系不只舒服，也更有深度和独特的情绪纹理。" },
        { role: "导师", matchBlend: "choleric-sanguine", copy: "导师最适合是带头感很强的组合。TA 会提醒你不是所有事都值得慢慢来，有些节点就是得先站出来。" },
        { role: "朋友", matchBlend: "sanguine-phlegmatic", copy: "朋友最适合是跟你同样轻松好相处，但更能一起闹起来的组合。TA 会让你更敢玩、更敢闹，也更敢把自己放到人群中央一点。" }
    ],
    "phlegmatic-choleric": [
        { role: "爱人", matchBlend: "sanguine-phlegmatic", copy: "你表面平和，骨子里却很有主意，所以爱人适合是温暖外放、但仍旧稳的组合。TA 会给你带来更多可见的喜欢、惊喜和情绪流动。" },
        { role: "导师", matchBlend: "melancholic-choleric", copy: "导师最适合是既细又硬的组合。TA 会帮你把隐忍里的判断变得更精确，而不是只靠经验硬扛。" },
        { role: "朋友", matchBlend: "phlegmatic-sanguine", copy: "朋友最适合是懂你的慢热、但比你更愿意先开口的组合。TA 跟你相处不会乱催，却能把空气慢慢带松。" }
    ],
    "phlegmatic-melancholic": [
        { role: "爱人", matchBlend: "sanguine-phlegmatic", copy: "你内里已经够安静够深了，爱人反而适合是带光但不浮的组合。TA 会把关系里的明亮面点起来，让你不必总从谨慎开始。" },
        { role: "导师", matchBlend: "choleric-phlegmatic", copy: "导师最适合是稳里带推进力的组合。TA 会推你在合适的时候更果断地表达和决定。" },
        { role: "朋友", matchBlend: "melancholic-phlegmatic", copy: "朋友最适合是能读懂你慢热和深感受的组合。TA 会懂你那些说得少、留得深的部分，你们之间的默契通常来得慢，但很真。" }
    ],
    "melancholic-sanguine": [
        { role: "爱人", matchBlend: "phlegmatic-sanguine", copy: "你既敏感又想连接，爱人最适合是稳里带暖的组合。TA 会给你情绪着陆点，让你不必在热络和抽离之间来回耗自己。" },
        { role: "导师", matchBlend: "choleric-melancholic", copy: "导师最适合是会想也会推的组合。TA 会帮助你把感受和想法及时变成动作，不让洞察一直停在脑内。" },
        { role: "朋友", matchBlend: "sanguine-phlegmatic", copy: "朋友最适合是能接住你的表达欲，但不会把你拖得太累的组合。TA 会把你的好奇心和轻盈感慢慢带回来。" }
    ],
    "melancholic-choleric": [
        { role: "爱人", matchBlend: "phlegmatic-sanguine", copy: "你会带着判断去爱，也会带着标准去靠近人，所以爱人适合是柔软里有亮度的组合。TA 能给你留出松动和呼吸空间。" },
        { role: "导师", matchBlend: "sanguine-phlegmatic", copy: "导师最适合是轻一点、暖一点、但不空的组合。TA 会提醒你关系、人群和表达也有价值，不是只有正确和推进才重要。" },
        { role: "朋友", matchBlend: "choleric-sanguine", copy: "朋友最适合是跟得上你强度、却没你这么沉的组合。TA 不会被你的气场吓到，反而能陪你把大事狠狠干成。" }
    ],
    "melancholic-phlegmatic": [
        { role: "爱人", matchBlend: "sanguine-phlegmatic", copy: "你本来就安静、内收、慢热，爱人适合是温暖稳定、但表达更直接的组合。TA 会替关系带来光、热和更明确的喜欢，让你不用总靠猜。" },
        { role: "导师", matchBlend: "choleric-sanguine", copy: "导师最适合是能推着你往前、又不会只剩命令感的组合。TA 会在你想得很深却迟迟不动时，帮你把第一步先踩出去。" },
        { role: "朋友", matchBlend: "phlegmatic-melancholic", copy: "朋友最适合是懂你的节奏、也愿意陪你慢慢熟起来的组合。那种关系通常非常耐久，而且越久越真。" }
    ]
};

const questions = [
    {
        chapter: "休眠舱惊醒",
        scene: "碎片撞穿船身，你从休眠舱里弹起来。红灯一格一格扫过天花板，广播只剩半句：所有可行动人员，立即撤离。",
        prompt: "如果这是你的朋友，TA 醒来的第一反应更像哪一种？",
        options: [
            { title: "先喊人", text: "一边把还醒不过来的同伴拍醒，一边用说话声稳住场面。", scores: { sanguine: 2, choleric: 1, phlegmatic: 1, melancholic: 0 } },
            { title: "先开路", text: "直接冲去门口手动解锁，先抢出一条能动的路。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "先看人", text: "先确认呼吸、伤口和氧气读数，确保身边的人都还跟得上。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "先看事故", text: "先盯住裂痕、广播残句和舱压数据，想搞清楚到底出了什么事。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "装备舱",
        scene: "你们跌进装备舱，备用太空服只够带一套增强模块。舱门外的金属扭曲声越来越近。",
        prompt: "TA 会把唯一的增强模块优先给哪一类装备？",
        options: [
            { title: "通讯模块", text: "先保证所有人能互相听见，也能给外面发出信号。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "推进喷口", text: "关键时刻需要有人能直接开路，速度最重要。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "生命维持", text: "多一罐氧气和止血包，能把全队的容错率拉高。", scores: { sanguine: 0, choleric: 0, phlegmatic: 2, melancholic: 2 } },
            { title: "扫描组件", text: "热成像和舱图扫描先装上，未知少一点就多一点活路。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "断电走廊",
        scene: "主走廊只亮着隔一段一段的应急灯，地板上一截带电电缆正抽搐般跳动。你们必须马上通过。",
        prompt: "TA 会怎么带人穿过这段走廊？",
        options: [
            { title: "一起冲", text: "先倒数，让大家踩着同一个节奏一起过去。", scores: { sanguine: 2, choleric: 1, phlegmatic: 1, melancholic: 0 } },
            { title: "自己先过", text: "自己第一个冲过去，把障碍踩开再招手让人跟上。", scores: { sanguine: 1, choleric: 2, phlegmatic: 1, melancholic: 0 } },
            { title: "先压电缆", text: "把工具箱推过去压住电缆，确保每个人都稳稳通过。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "先算节奏", text: "先观察火花间隔，找出最安全的穿越时点。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "舰桥残讯",
        scene: "舰桥空无一人，只剩舰长的残讯在循环：别去主引擎，导航信标在左舷维护井下方。",
        prompt: "听完这段残讯，TA 更可能怎么理解？",
        options: [
            { title: "拉大家一起听", text: "先把录音外放给所有人，大家一起判断这句话的意思。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "抓住关键词", text: "先把别去主引擎记死，立刻改道左舷。", scores: { sanguine: 0, choleric: 2, phlegmatic: 1, melancholic: 1 } },
            { title: "先稳人", text: "先安抚还在发抖的人，再决定下一步。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "反复推敲", text: "反复听关键词，想明白舰长为什么特意提维护井。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "温室岔路",
        scene: "去左舷的路被封住了，你们只能从失压温室或者低温药剂库绕行。两边都不安全。",
        prompt: "这种岔路口，TA 更像怎么选？",
        options: [
            { title: "选能看见人的路", text: "温室至少还有光，队友彼此能看见，气氛不至于散。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "选最短的路", text: "再危险也要抢时间，距离最短就是理由。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "选最稳的路", text: "宁可慢一点，也要让整队维持同一个节奏。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "先比较损耗", text: "先看舱压差、温差和电力，算哪边的隐形代价更低。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "维修机器人",
        scene: "绕进维护井后，一台维修机器人还在工作，但它把通道堵死了。你可以重编程，也可以硬拆。",
        prompt: "TA 面对这台机器时的第一手法会是什么？",
        options: [
            { title: "先试着沟通", text: "先接入语音接口，也许还能顺手套出一点信息。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "先断动力", text: "直接拔掉动力芯，把路先清出来。", scores: { sanguine: 1, choleric: 2, phlegmatic: 1, melancholic: 0 } },
            { title: "稳稳拆", text: "让人都退后，慢慢拆关键件，别让碎片再伤到谁。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "读最后指令", text: "接入维护面板，看看它到底在执行什么命令。", scores: { sanguine: 1, choleric: 0, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "微弱呼叫",
        scene: "就在你们继续下行时，耳机里突然冒出另一名幸存船员的呼叫。他说自己被卡在观测舱。",
        prompt: "TA 会如何回应这通求救？",
        options: [
            { title: "先让对方听见你", text: "立刻回话，让对面先知道自己不是一个人。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "先问关键信息", text: "先问位置、伤势和可行动性，准备马上改线去救。", scores: { sanguine: 0, choleric: 2, phlegmatic: 1, melancholic: 1 } },
            { title: "先看本队能不能扛", text: "先确认这边的人和资源，再给一个扛得住的承诺。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "先判断真假", text: "先听背景噪声和延迟，判断这是不是系统回音。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "零重力竖井",
        scene: "前方是失重竖井，下面飘着工具箱和碎玻璃。维护井出口就在另一端，看起来只差一跃。",
        prompt: "TA 在这种失重环境里最像怎么做？",
        options: [
            { title: "先缓和气氛", text: "先说点能让人笑一下的话，再把人一个个送过去。", scores: { sanguine: 2, choleric: 1, phlegmatic: 1, melancholic: 0 } },
            { title: "先到对面", text: "抓住扶手借力猛冲，先去对面固定绳索。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "让最不稳的人先过", text: "自己垫后收尾，优先照顾状态最乱的人。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "先算轨迹", text: "先观察漂浮物轨迹，找一条最省力也最安全的线。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "反应堆余震",
        scene: "你们刚出竖井，整艘船猛地一震。灯全灭三秒后又亮，反应堆温度开始疯跳。",
        prompt: "这一下最能逼出 TA 哪种决策方式？",
        options: [
            { title: "先稳住人心", text: "先出声，别让恐慌先把队伍冲散。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "马上催大家走", text: "趁系统还没彻底崩掉，先把时间抢下来。", scores: { sanguine: 1, choleric: 2, phlegmatic: 1, melancholic: 0 } },
            { title: "先数人和氧气", text: "先确认没有人在刚才那一下里出事，再继续推进。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "先盯数据窗口", text: "通过温度跳字判断你们还剩几分钟安全窗口。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "货运舱漂流箱",
        scene: "货运舱里有一只脱离固定架的漂流箱，里面可能是电池、食物，也可能只是压坏的废料。",
        prompt: "TA 会怎么处理这只箱子？",
        options: [
            { title: "先一起稳住它", text: "边招呼大家协力固定，边猜里面可能有什么。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "先切开外壳", text: "直接开箱，先看能不能拿到立刻能用的东西。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "先防它再伤人", text: "先把箱体牢牢固定，确认不会再撞人再慢慢开。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "先看编号和重量", text: "根据货单、重量和受损程度，尽量不做无效动作。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "旧照片",
        scene: "箱子里不是补给，而是一包船员私人物品。一张合照在失重里翻了个面，所有人都安静了两秒。",
        prompt: "TA 面对这种突然袭来的情绪时，多半会怎么做？",
        options: [
            { title: "先把呼吸带回来", text: "说一句让人能笑一下的话，把气氛从坠落边缘拉回来。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "先收好再走", text: "把照片收进兜里，提醒大家先活着出去再怀念。", scores: { sanguine: 1, choleric: 2, phlegmatic: 1, melancholic: 0 } },
            { title: "先顾最难过的人", text: "把照片递给最受触动的人，让他先缓一口气。", scores: { sanguine: 0, choleric: 0, phlegmatic: 2, melancholic: 2 } },
            { title: "先记住细节", text: "记住照片上的人名和岗位，想想谁也许还活着。", scores: { sanguine: 1, choleric: 0, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "研究舱幽光",
        scene: "穿过货运舱后，你们误入一截研究舱。培养罐的幽光还亮着，舱壁上写满没来得及上传的实验笔记。",
        prompt: "这种时候，TA 会被什么最先吸引住？",
        options: [
            { title: "字里的人味", text: "先注意到笔记里的语气，想象写字的人当时有多慌。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "能活命的那几行", text: "只挑最关键的几句看，找任何能直接帮你们活下去的信息。", scores: { sanguine: 0, choleric: 2, phlegmatic: 1, melancholic: 1 } },
            { title: "先别乱碰样本", text: "提醒大家安全优先，别在快逃出来的时候再招新麻烦。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "把前因后果拼出来", text: "迅速扫过公式和时间戳，拼出事故前最后几小时发生了什么。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "外壳裂口",
        scene: "研究舱尽头有一道半开的外壳裂口，透过它能直接看见行星碎环。冷光把每个人的脸都照得发白。",
        prompt: "面对这一下无遮无拦的宇宙，TA 更像什么状态？",
        options: [
            { title: "先被震住，再想分享", text: "先愣一秒，然后忍不住把这一幕说给旁边的人听。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "先把人拉开", text: "确认裂口危险后立刻把所有人拉离边缘，别被景象拖慢。", scores: { sanguine: 0, choleric: 2, phlegmatic: 1, melancholic: 1 } },
            { title: "先提醒固定", text: "轻声提醒大家重新扣紧固定带，别让惊慌变成失误。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "顺手修正路线", text: "借这一眼确认船体朝向和碎片流方向，顺手改判断。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "自动导航提案",
        scene: "导航面板终于重新亮起，系统建议启用自动导航直达逃生甲板，但路径会穿过一段信号盲区。",
        prompt: "遇到这种系统提案，TA 通常会怎么选？",
        options: [
            { title: "愿意赌一次默契", text: "愿意信一次系统，但一路都会保持和人沟通。", scores: { sanguine: 1, choleric: 1, phlegmatic: 1, melancholic: 1 } },
            { title: "能省时间就上", text: "只要看起来能快一点，就先跑起来再说。", scores: { sanguine: 1, choleric: 2, phlegmatic: 1, melancholic: 0 } },
            { title: "先看大家扛不扛得住", text: "只要队伍状态还能承受，就选更省心也更稳的路。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "先问系统为什么", text: "先看它为什么推荐这条，再决定信不信机器。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "盲区回音",
        scene: "你们进入盲区后，耳机里只剩自己的呼吸声。偏偏这时，刚才那名幸存者又发来一段断续坐标。",
        prompt: "在信息半真半假的时候，TA 更像怎么判断？",
        options: [
            { title: "先回一句", text: "宁可先回一句，让对方知道这边还在听。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "先改向救人", text: "坐标一到就准备变线，先把人捞出来再说真假。", scores: { sanguine: 1, choleric: 2, phlegmatic: 1, melancholic: 0 } },
            { title: "先看本队损耗", text: "先判断现在这队人还能不能承受临时变线。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "先做交叉验证", text: "拿旧舱图、延迟和噪声一起比，看它是不是系统残响。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "手动信标",
        scene: "逃生甲板近在眼前，可救援信标已经烧掉主控。想重启它，就得有人钻进狭窄维修管手动搭桥。",
        prompt: "这种必须有人顶上的时刻，TA 会怎么站出来？",
        options: [
            { title: "先鼓励大家", text: "先把大家的心拉稳，再自告奋勇进去试一把。", scores: { sanguine: 2, choleric: 1, phlegmatic: 1, melancholic: 0 } },
            { title: "几乎不犹豫", text: "拿起工具就钻进去，窗口一出现就先上。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "先把接应安排好", text: "确认外面有人计时、有人接应，再进去。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "先把线路读明白", text: "进去前先看透线路，确保这趟风险不是白冒。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "陌生飞船",
        scene: "信标重启后，雷达上真的出现了一艘陌生飞船。它没有回应呼叫，只在你们附近缓慢盘旋。",
        prompt: "面对这艘不说话的船，TA 更像先做什么？",
        options: [
            { title: "持续发友好呼叫", text: "先把善意抛出去，也许对面只是同样受损。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "准备两手方案", text: "一边准备对接，一边准备甩开，先把主动权拿住。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "按程序封舱", text: "提醒大家别被希望冲昏头，先把基本防护做完整。", scores: { sanguine: 0, choleric: 1, phlegmatic: 2, melancholic: 1 } },
            { title: "先读灯语和航迹", text: "通过航迹和灯语判断它到底想做什么。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "最后一艘逃生艇",
        scene: "甲板上只剩最后一艘可用逃生艇，推进器老化，必须有人手动控制姿态，其他人才能顺利脱离。",
        prompt: "如果这是你的朋友，TA 更像承担哪个位置？",
        options: [
            { title: "舱内安定器", text: "坐在最能和所有人对话的位置，负责把情绪压住。", scores: { sanguine: 2, choleric: 1, phlegmatic: 1, melancholic: 0 } },
            { title: "操纵位", text: "直接去操纵位，顶着抖动把艇甩出残骸区。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "舱门收尾", text: "留在舱门边，确认每个人都扣好安全锁再关门。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "导航复核", text: "守在导航终端，把每一下修正都算得尽量精确。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "碎片暴雨",
        scene: "逃生艇刚脱离母舰，碎片雨就像一整面墙压了过来。报警声和呼吸声狠狠干在一起。",
        prompt: "在这种最容易乱掉的三十秒里，TA 会把注意力放在哪里？",
        options: [
            { title: "不断报平安", text: "用最简短的话不断确认大家还在一起。", scores: { sanguine: 2, choleric: 1, phlegmatic: 1, melancholic: 0 } },
            { title: "狠狠干过去", text: "盯着前方缺口狠狠干，不给自己留犹豫时间。", scores: { sanguine: 1, choleric: 2, phlegmatic: 0, melancholic: 1 } },
            { title: "先压整体慌乱", text: "优先盯谁最容易出错，尽量把全艇节奏稳住。", scores: { sanguine: 0, choleric: 0, phlegmatic: 2, melancholic: 2 } },
            { title: "抓警报间隙修正", text: "用每一次警报间的空隙快速修航线和推力。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    },
    {
        chapter: "回收灯",
        scene: "终于，远处的回收灯一格一格亮起。救援艇放下磁索，你只剩最后一次机会决定全队如何靠上去。",
        prompt: "故事走到这里，TA 最后那一步最像哪一种？",
        options: [
            { title: "先把沟通接通", text: "先和救援艇建立清晰通话，让所有人知道终于到头了。", scores: { sanguine: 2, choleric: 0, phlegmatic: 1, melancholic: 1 } },
            { title: "先锁定生路", text: "抓住磁索窗口果断对接，把生路先钉死。", scores: { sanguine: 1, choleric: 2, phlegmatic: 1, melancholic: 0 } },
            { title: "先确认每个人位置", text: "先看所有人都在安全位，再按最稳的速度靠近。", scores: { sanguine: 1, choleric: 0, phlegmatic: 2, melancholic: 1 } },
            { title: "先复核角度和余推", text: "一边对接一边复核角度和余推，不想把最后一步浪费掉。", scores: { sanguine: 0, choleric: 1, phlegmatic: 1, melancholic: 2 } }
        ]
    }
];

const sceneDetails = [
    "休眠液还在耳后发冷，隔壁舱门已经被刚才那一下撞得轻微变形。要是第一步慢了，下一轮震动可能会把整排休眠舱一起卡死。",
    "你们是从半卡住的门缝里硬挤进来的，地上到处是甩出来的工具和氧气包。外面那阵持续的扭曲声提醒你，船体还在继续变形，装备挑错一次，后面就没得换。",
    "为了绕开破损区，你们只能钻进这条没来得及封锁的服务走廊。每一次火花爆开，墙上的应急箭头都会跟着闪一下，好像在倒数你们还能犹豫多久。",
    "冲过走廊以后，你们顺着破裂的扶手跌进舰桥，地面上还留着有人匆忙撤离时打翻的记录板。残讯反复循环，说明系统早就没人在手动值守了。",
    "舰桥到左舷的主路已经整段塌掉，你们只能借副通道绕。温室和药剂库都不是正常撤离路线，这也意味着每往前一步都更像在闯进事故核心。",
    "维护井里的重力忽轻忽重，说明船上的能源分配已经乱了套。那台机器人还卡在原地继续执行旧指令，像事故发生后没人来得及给它一个新命令。",
    "你们刚绕过机器人，通讯里就冒出那道断断续续的求救声，像是有人一直在尝试把自己从静电里捞出来。问题是，求救者的位置正好在你们主线之外。",
    "为了不断回头路，你们只能进这段垂直竖井。底下飘着的玻璃和工具每碰一下井壁，都会提醒你这里不是设计给逃生用的地方。",
    "你们刚踩上另一侧平台，整艘船就像被什么东西从外壳猛拍了一掌。反应堆温度开始乱跳，说明你们先前绕开的所有风险，正在从更深处追上来。",
    "货运舱原本是最稳的一段，现在却像被失重翻了一遍的仓库。那只漂流箱能留下来没撞碎，本身就像在赌你们这次还有一点运气。",
    "箱体一开，空气一下子静了。那些私人物品让事故第一次不再只是系统报错，而像是某些本来准备回家的人，真的停在了这里。",
    "你们为了继续找路，只能穿过研究舱。培养罐里的幽光把墙上的笔记照得忽明忽暗，好像写下这些字的人离开时连灯都没顾上关。",
    "研究舱尽头这道裂口像是把整片宇宙直接掀进了船里。可越壮观，就越说明这层外壳已经薄到没有第二次犯错的余地。",
    "你们离逃生甲板已经不远，导航系统却偏偏在这时恢复了一部分权限。机器给出的路线看上去高效，但在这种时候，越像捷径的东西越让人想多看一眼。",
    "进入盲区后，耳机里的空白大到能听见自己吞口水。偏偏那段坐标又在此刻出现，这让每一个选择都像在赌消息背后到底是人还是回声。",
    "逃生甲板的灯终于出现在前面，可那块被烧焦的信标面板提醒你们，最难的部分还没有结束。想要真的被看见，就得有人把自己先送进最窄、最危险的地方。",
    "信标刚亮，雷达就给了你们一个新的问题。那艘陌生飞船不像明确的救援，也不像直接的敌意，它只是沉默地停在你们能看见的距离里。",
    "甲板边缘只剩这最后一艘还能起飞的逃生艇，连固定架都已经被震松了半边。你们没有第二次试错机会，谁坐哪个位置都会直接影响能不能真的离开。",
    "逃生艇冲出母舰时，你们终于看见整片残骸带的全貌。那些碎片不是随机乱飞，而像一堵正在慢慢合拢的墙，你们只剩一次穿过去的机会。",
    "回收灯亮起的时候，大家终于第一次看见明确的终点。可越接近结束，越容易因为松一口气而出错，最后这几秒反而比前面更需要清醒。"
];

const sceneArtConfigs = [
    { backdrop: "pod", prop: "pods", hazard: "alarm", pose: "wake", accent: "#ff7a6b" },
    { backdrop: "armory", prop: "locker", hazard: "twist", pose: "scan", accent: "#f4b860" },
    { backdrop: "corridor", prop: "cable", hazard: "sparks", pose: "run", accent: "#ff7a6b" },
    { backdrop: "bridge", prop: "terminal", hazard: "glitch", pose: "point", accent: "#52c7c5" },
    { backdrop: "greenhouse", prop: "plants", hazard: "frost", pose: "think", accent: "#9aca63" },
    { backdrop: "maintenance", prop: "robot", hazard: "steam", pose: "wrench", accent: "#52c7c5" },
    { backdrop: "radio", prop: "signal", hazard: "static", pose: "listen", accent: "#52c7c5" },
    { backdrop: "shaft", prop: "debris", hazard: "glass", pose: "float", accent: "#f4b860" },
    { backdrop: "reactor", prop: "core", hazard: "flare", pose: "brace", accent: "#ff7a6b" },
    { backdrop: "cargo", prop: "crate", hazard: "drift", pose: "push", accent: "#f4b860" },
    { backdrop: "cargo", prop: "photo", hazard: "still", pose: "hold", accent: "#9aca63" },
    { backdrop: "lab", prop: "vats", hazard: "glow", pose: "read", accent: "#52c7c5" },
    { backdrop: "hull", prop: "ring", hazard: "vacuum", pose: "look", accent: "#f4b860" },
    { backdrop: "nav", prop: "route", hazard: "blind", pose: "decide", accent: "#52c7c5" },
    { backdrop: "blindzone", prop: "echo", hazard: "noise", pose: "listen", accent: "#9aca63" },
    { backdrop: "beacon", prop: "panel", hazard: "burn", pose: "crawl", accent: "#ff7a6b" },
    { backdrop: "radar", prop: "ship", hazard: "orbit", pose: "watch", accent: "#52c7c5" },
    { backdrop: "lifeboat", prop: "seat", hazard: "shake", pose: "pilot", accent: "#f4b860" },
    { backdrop: "debris", prop: "gap", hazard: "storm", pose: "drive", accent: "#ff7a6b" },
    { backdrop: "rescue", prop: "magnet", hazard: "beam", pose: "reach", accent: "#9aca63" }
];

function buildScores(sanguine, choleric, phlegmatic, melancholic) {
    return { sanguine, choleric, phlegmatic, melancholic };
}

function applyQuestionEnhancements() {
    questions.forEach((question, index) => {
        question.scene = `${question.scene} ${sceneDetails[index]}`;
        question.art = sceneArtConfigs[index];
    });

    const tunedOptions = [
        { q: 0, o: 0, text: "一边拍醒还没缓过来的同伴，一边用半安抚半玩笑的语气把大家的呼吸拉回同一个节奏。", scores: buildScores(2, 0, 2, 0) },
        { q: 6, o: 0, text: "立刻回话，先让对方知道自己没有被丢下，再慢慢把语速压稳。", scores: buildScores(2, 0, 2, 0) },
        { q: 7, o: 0, text: "先说点能让人重新喘过气的话，再把人一个个送过去，尽量不让任何人慌着失手。", scores: buildScores(2, 0, 2, 0) },
        { q: 10, o: 0, text: "先承认大家都被这张照片刺了一下，再用一句轻一点的话把空气撑住。", scores: buildScores(2, 0, 0, 2) },
        { q: 11, o: 0, text: "先注意到笔记里的慌乱语气，几乎能想象写下这些字的人当时手在发抖。", scores: buildScores(2, 0, 0, 2) },
        { q: 12, o: 0, text: "先被这片宇宙震住一下，然后本能地想把那种巨大的感觉说给身边的人听。", scores: buildScores(2, 0, 0, 2) },
        { q: 18, o: 0, text: "用最短的话不断确认每个人都还在、都还听得见，先把整艇人的节奏压回一条线上。", scores: buildScores(2, 0, 2, 0) },
        { q: 19, o: 0, text: "先和救援艇建立清晰通话，让所有人都知道终于真的有人接住你们了。", scores: buildScores(2, 0, 2, 0) },
        { q: 14, o: 3, text: "拿旧舱图、延迟和噪声一起比，宁可慢半拍，也要先确认那不是系统残响。", scores: buildScores(0, 1, 0, 3) },
        { q: 15, o: 3, text: "进去前先把线路读透，确认每一段搭桥都真能换来信号，而不是只是显得勇敢。", scores: buildScores(0, 1, 0, 3) }
    ];

    tunedOptions.forEach(({ q, o, text, scores }) => {
        questions[q].options[o].text = text;
        questions[q].options[o].scores = scores;
    });
}

applyQuestionEnhancements();

const state = {
    currentIndex: 0,
    selectedIndex: null,
    answers: [],
    resultSnapshot: null
};

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const introImage = document.querySelector("#intro-image");
const questionCounter = document.querySelector("#question-counter");
const chapterTitle = document.querySelector("#chapter-title");
const reactionText = document.querySelector("#reaction-text");
const sceneText = document.querySelector("#scene-text");
const questionText = document.querySelector("#question-text");
const sceneImage = document.querySelector("#scene-image");
const optionsWrap = document.querySelector("#options");
const progressFill = document.querySelector("#progress-fill");
const nextButton = document.querySelector("#next-button");
const selectionHint = document.querySelector("#selection-hint");
const resultName = document.querySelector("#result-name");
const resultSummary = document.querySelector("#result-summary");
const blendSummary = document.querySelector("#blend-summary");
const mixStats = document.querySelector("#mix-stats");
const scoreboard = document.querySelector("#scoreboard");
const roleCast = document.querySelector("#role-cast");
const resultDetail = document.querySelector("#result-detail");
const saveButton = document.querySelector("#save-button");
const restartButton = document.querySelector("#restart-button");

function formatPrompt(prompt) {
    return prompt
        .replace("如果这是你的朋友，", "")
        .replace(/TA /g, "你")
        .replace(/TA/g, "你");
}

function formatRoleCopy(copy) {
    return copy
        .replace(/TA\s+/g, "对方")
        .replace(/TA/g, "对方");
}

function mulberry32(seed) {
    let t = seed;

    return function random() {
        t += 0x6D2B79F5;
        let value = Math.imul(t ^ (t >>> 15), t | 1);
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
}

function pixel(ctx, x, y, w, h, color, cell = 4, ox = 0, oy = 0) {
    ctx.fillStyle = color;
    ctx.fillRect((ox + x) * cell, (oy + y) * cell, w * cell, h * cell);
}

function outlineBox(ctx, x, y, w, h, fill, stroke, cell = 4, ox = 0, oy = 0) {
    pixel(ctx, x, y, w, h, stroke, cell, ox, oy);
    pixel(ctx, x + 1, y + 1, w - 2, h - 2, fill, cell, ox, oy);
}

function rankScores(scores) {
    return [...humorOrder].sort((a, b) => scores[b] - scores[a]);
}

function createReactionLine(questionIndex) {
    if (questionIndex === 0) {
        return "";
    }

    const previousQuestion = questions[questionIndex - 1];
    const previousOption = previousQuestion.options[state.answers[questionIndex - 1]];
    const [dominant, secondary] = rankScores(previousOption.scores);
    const dominantOpeners = {
        sanguine: `上一幕你选了“${previousOption.title}”，你先把人和气氛重新拢回了现场。`,
        choleric: `上一幕你选了“${previousOption.title}”，局面被你硬生生往前推了一截。`,
        phlegmatic: `上一幕你选了“${previousOption.title}”，至少眼前这阵混乱没有继续扩大。`,
        melancholic: `上一幕你选了“${previousOption.title}”，你先从细节里摸清了一点真正的问题。`
    };
    const secondaryTails = {
        sanguine: "可那股想把人再拉紧一点的冲动还没散。",
        choleric: "代价是下一段路也被逼得更快、更窄。",
        phlegmatic: "所以你们还能带着一点节奏继续往下走。",
        melancholic: "只是你心里也更清楚后面恐怕不会轻松。"
    };

    return `${dominantOpeners[dominant]} ${secondaryTails[secondary]}`;
}

function ditherRect(ctx, x, y, w, h, base, alt, cell = 4, rate = 2) {
    for (let dx = 0; dx < w; dx += 1) {
        for (let dy = 0; dy < h; dy += 1) {
            const color = (dx + dy) % rate === 0 ? alt : base;
            pixel(ctx, x + dx, y + dy, 1, 1, color, cell);
        }
    }
}

function drawStars(ctx, random, width, height, cell = 4) {
    const colors = ["#f4efe6", "#52c7c5", "#f4b860", "#9aca63"];

    for (let index = 0; index < 64; index += 1) {
        const x = Math.floor(random() * width);
        const y = Math.floor(random() * height * 0.7);
        pixel(ctx, x, y, 1, 1, colors[index % colors.length], cell);
    }
}

function drawDisc(ctx, cx, cy, radius, fill, shade, cell = 4) {
    for (let x = -radius; x <= radius; x += 1) {
        for (let y = -radius; y <= radius; y += 1) {
            if (x * x + y * y <= radius * radius) {
                const color = x + y < 0 ? shade : fill;
                pixel(ctx, cx + x, cy + y, 1, 1, color, cell);
            }
        }
    }
}

function drawRidge(ctx, points, fill, shade, cell = 4, baseY = 50) {
    for (let index = 0; index < points.length - 1; index += 1) {
        const start = points[index];
        const end = points[index + 1];
        const span = Math.max(1, end.x - start.x);

        for (let step = 0; step <= span; step += 1) {
            const x = start.x + step;
            const ratio = step / span;
            const y = Math.round(start.y + (end.y - start.y) * ratio);
            const height = Math.max(0, baseY - y);

            if (height > 0) {
                pixel(ctx, x, y, 1, height, fill, cell);

                if (x % 2 === 0) {
                    pixel(ctx, x, y + 1, 1, Math.max(0, height - 1), shade, cell);
                }
            }
        }
    }
}

function drawWater(ctx, topY, colors, cell = 4) {
    const { base, shimmer, shadow } = colors;
    ditherRect(ctx, 0, topY, 80, 50 - topY, base, shadow, cell, 3);

    for (let line = topY + 2; line < 49; line += 3) {
        pixel(ctx, 8 + (line % 5), line, 52, 1, shimmer, cell);
        pixel(ctx, 64, line, 8, 1, shimmer, cell);
    }
}

function drawPines(ctx, startX, groundY, count, fill, shade, cell = 4) {
    for (let index = 0; index < count; index += 1) {
        const x = startX + index * 5;
        const height = 8 + (index % 4) * 3;

        pixel(ctx, x, groundY - height, 1, height, shade, cell);

        for (let spread = 0; spread < height; spread += 2) {
            const width = Math.max(1, Math.floor((height - spread) / 2));
            pixel(ctx, x - width, groundY - height + spread, width * 2 + 1, 1, fill, cell);
        }
    }
}

function drawBranches(ctx, side, fill, cell = 4) {
    if (side === "left" || side === "both") {
        pixel(ctx, 0, 14, 4, 36, fill, cell);
        pixel(ctx, 3, 18, 10, 1, fill, cell);
        pixel(ctx, 5, 22, 12, 1, fill, cell);
        pixel(ctx, 8, 28, 9, 1, fill, cell);
        pixel(ctx, 6, 34, 7, 1, fill, cell);
    }

    if (side === "right" || side === "both") {
        pixel(ctx, 74, 6, 6, 44, fill, cell);
        pixel(ctx, 62, 14, 14, 1, fill, cell);
        pixel(ctx, 60, 20, 16, 1, fill, cell);
        pixel(ctx, 64, 28, 10, 1, fill, cell);
        pixel(ctx, 66, 34, 8, 1, fill, cell);
    }
}

function drawMetalFrame(ctx, variant, fill, accent, cell = 4) {
    if (variant === "window") {
        outlineBox(ctx, 8, 6, 64, 34, "#0f1418", fill, cell);
        pixel(ctx, 39, 6, 2, 34, fill, cell);
        pixel(ctx, 8, 22, 64, 2, fill, cell);
        pixel(ctx, 10, 8, 60, 30, accent, cell);
    }

    if (variant === "corridor") {
        pixel(ctx, 0, 10, 80, 2, fill, cell);
        pixel(ctx, 0, 38, 80, 2, fill, cell);
        pixel(ctx, 10, 10, 2, 30, fill, cell);
        pixel(ctx, 68, 10, 2, 30, fill, cell);
        pixel(ctx, 18, 16, 44, 2, accent, cell);
        pixel(ctx, 22, 28, 36, 2, accent, cell);
    }

    if (variant === "catwalk") {
        pixel(ctx, 0, 36, 80, 3, fill, cell);
        pixel(ctx, 0, 32, 80, 1, accent, cell);
        pixel(ctx, 0, 40, 80, 10, "#0d0f10", cell);
    }
}

function drawAurora(ctx, colors, cell = 4) {
    const bands = [
        { x: 26, y: 0, w: 10, h: 24 },
        { x: 36, y: 0, w: 8, h: 28 },
        { x: 52, y: 0, w: 12, h: 26 }
    ];

    bands.forEach((band, index) => {
        ditherRect(ctx, band.x, band.y, band.w, band.h, colors[index % colors.length], colors[(index + 1) % colors.length], cell, 2);
    });
}

function drawHazardOverlay(ctx, art, cell = 4) {
    switch (art.hazard) {
        case "alarm":
            pixel(ctx, 2, 2, 14, 2, "#ff7a6b", cell);
            pixel(ctx, 64, 2, 14, 2, "#ff7a6b", cell);
            break;
        case "twist":
            pixel(ctx, 56, 14, 10, 1, "#f4b860", cell);
            pixel(ctx, 54, 18, 12, 1, "#7f4d3a", cell);
            pixel(ctx, 58, 22, 8, 1, "#f4b860", cell);
            break;
        case "sparks":
            [[44, 24], [46, 20], [49, 17], [52, 21], [55, 18], [58, 23]].forEach(([x, y], index) => {
                pixel(ctx, x, y, 1, 1, index % 2 === 0 ? "#f4efe6" : "#ffb86e", cell);
            });
            break;
        case "glitch":
            pixel(ctx, 48, 16, 16, 1, "#52c7c5", cell);
            pixel(ctx, 52, 19, 10, 1, "#f4efe6", cell);
            pixel(ctx, 46, 22, 18, 1, "#8970ff", cell);
            break;
        case "frost":
            [[52, 8], [58, 10], [62, 12], [66, 16], [54, 18], [60, 22], [64, 24]].forEach(([x, y]) => {
                pixel(ctx, x, y, 1, 1, "#f4efe6", cell);
            });
            break;
        case "steam":
            pixel(ctx, 54, 12, 6, 1, "#d7e1e6", cell);
            pixel(ctx, 56, 9, 5, 1, "#d7e1e6", cell);
            pixel(ctx, 59, 6, 3, 1, "#d7e1e6", cell);
            break;
        case "static":
            [[54, 12], [58, 15], [61, 18], [56, 21], [63, 24], [67, 19], [69, 14]].forEach(([x, y], index) => {
                pixel(ctx, x, y, 1, 1, index % 2 === 0 ? "#f4efe6" : "#52c7c5", cell);
            });
            break;
        case "glass":
            pixel(ctx, 48, 14, 1, 6, "#a8dbe3", cell);
            pixel(ctx, 52, 18, 1, 5, "#a8dbe3", cell);
            pixel(ctx, 55, 16, 1, 4, "#a8dbe3", cell);
            pixel(ctx, 47, 20, 10, 1, "#d9f2f4", cell);
            break;
        case "flare":
            ditherRect(ctx, 46, 14, 12, 10, "#ff7a6b", "#ffd493", cell, 2);
            break;
        case "drift":
            outlineBox(ctx, 58, 18, 8, 6, "#47382f", "#b79c73", cell);
            pixel(ctx, 52, 14, 2, 2, "#b79c73", cell);
            pixel(ctx, 68, 24, 2, 2, "#b79c73", cell);
            break;
        case "still":
            outlineBox(ctx, 58, 18, 10, 8, "#2a2e30", "#f4efe6", cell);
            pixel(ctx, 60, 20, 6, 2, "#9aca63", cell);
            pixel(ctx, 62, 18, 2, 1, "#f4b860", cell);
            break;
        case "glow":
            ditherRect(ctx, 54, 12, 12, 14, "#17323a", "#52c7c5", cell, 2);
            break;
        case "vacuum":
            pixel(ctx, 62, 8, 1, 16, "#f4efe6", cell);
            pixel(ctx, 58, 12, 8, 1, "#f4efe6", cell);
            pixel(ctx, 60, 18, 6, 1, "#f4efe6", cell);
            break;
        case "blind":
            ditherRect(ctx, 0, 0, 18, 50, "#03050a", "#081119", cell, 3);
            ditherRect(ctx, 62, 0, 18, 50, "#03050a", "#081119", cell, 3);
            break;
        case "noise":
            [[50, 12], [54, 15], [58, 18], [62, 21], [56, 24], [60, 27]].forEach(([x, y], index) => {
                pixel(ctx, x, y, 1, 1, index % 2 === 0 ? "#9aca63" : "#52c7c5", cell);
            });
            break;
        case "burn":
            pixel(ctx, 56, 14, 3, 16, "#ff7a6b", cell);
            pixel(ctx, 54, 20, 7, 1, "#ffd493", cell);
            pixel(ctx, 55, 25, 5, 1, "#ffb86e", cell);
            break;
        case "orbit":
            drawDisc(ctx, 64, 14, 3, "#9fb2ff", "#5563b0", cell);
            pixel(ctx, 59, 14, 10, 1, "#f4efe6", cell);
            break;
        case "shake":
            pixel(ctx, 8, 10, 10, 1, "#f4efe6", cell);
            pixel(ctx, 62, 12, 8, 1, "#f4efe6", cell);
            pixel(ctx, 12, 34, 12, 1, "#f4efe6", cell);
            break;
        case "storm":
            [[50, 10], [54, 14], [58, 18], [62, 22], [66, 26]].forEach(([x, y]) => {
                pixel(ctx, x, y, 4, 1, "#ff9377", cell);
            });
            break;
        case "beam":
            ditherRect(ctx, 54, 8, 8, 26, "#dff7d2", "#9aca63", cell, 2);
            break;
        default:
            break;
    }
}

function drawAstronaut(ctx, pose, accent, cell = 4, x = 10, y = 22) {
    const suit = "#e9ded0";
    const shade = "#b4a89b";
    const visor = accent;
    const dark = "#1d1b1d";

    pixel(ctx, x + 2, y, 6, 2, suit, cell);
    pixel(ctx, x + 1, y + 2, 8, 4, suit, cell);
    pixel(ctx, x + 2, y + 3, 6, 2, visor, cell);
    pixel(ctx, x, y + 3, 1, 3, dark, cell);
    pixel(ctx, x + 9, y + 3, 1, 3, dark, cell);
    pixel(ctx, x + 2, y + 6, 6, 6, suit, cell);
    pixel(ctx, x + 1, y + 6, 1, 5, shade, cell);
    pixel(ctx, x + 8, y + 6, 1, 5, shade, cell);
    pixel(ctx, x + 3, y + 7, 4, 2, accent, cell);
    pixel(ctx, x + 3, y + 12, 2, 4, suit, cell);
    pixel(ctx, x + 5, y + 12, 2, 4, suit, cell);
    pixel(ctx, x + 3, y + 16, 2, 2, dark, cell);
    pixel(ctx, x + 5, y + 16, 2, 2, dark, cell);
    pixel(ctx, x - 1, y + 7, 2, 5, suit, cell);
    pixel(ctx, x + 9, y + 7, 2, 5, suit, cell);

    if (pose === "wake" || pose === "point" || pose === "reach" || pose === "watch") {
        pixel(ctx, x + 10, y + 7, 3, 2, suit, cell);
        pixel(ctx, x + 11, y + 5, 2, 2, suit, cell);
    }

    if (pose === "run" || pose === "pilot" || pose === "drive" || pose === "crawl") {
        pixel(ctx, x - 3, y + 9, 2, 2, suit, cell);
        pixel(ctx, x + 10, y + 10, 3, 2, suit, cell);
    }

    if (pose === "listen" || pose === "read" || pose === "scan" || pose === "decide" || pose === "look") {
        pixel(ctx, x - 3, y + 6, 2, 3, suit, cell);
        pixel(ctx, x + 10, y + 6, 2, 3, suit, cell);
    }

    if (pose === "think") {
        pixel(ctx, x + 10, y + 4, 2, 3, suit, cell);
        pixel(ctx, x - 2, y + 8, 2, 4, suit, cell);
    }

    if (pose === "wrench") {
        pixel(ctx, x + 10, y + 8, 3, 2, suit, cell);
        pixel(ctx, x + 13, y + 7, 2, 1, dark, cell);
        pixel(ctx, x + 14, y + 8, 1, 2, dark, cell);
    }

    if (pose === "float") {
        pixel(ctx, x - 2, y + 10, 3, 2, suit, cell);
        pixel(ctx, x + 9, y + 4, 3, 2, suit, cell);
        pixel(ctx, x + 2, y + 16, 5, 1, dark, cell);
    }

    if (pose === "brace") {
        pixel(ctx, x - 3, y + 9, 3, 2, suit, cell);
        pixel(ctx, x + 10, y + 9, 3, 2, suit, cell);
        pixel(ctx, x + 2, y + 15, 2, 3, suit, cell);
        pixel(ctx, x + 6, y + 14, 2, 4, suit, cell);
    }

    if (pose === "push") {
        pixel(ctx, x + 10, y + 7, 4, 2, suit, cell);
        pixel(ctx, x + 12, y + 9, 2, 3, suit, cell);
    }

    if (pose === "hold") {
        outlineBox(ctx, x + 10, y + 8, 3, 3, dark, "#f4efe6", cell);
        pixel(ctx, x + 9, y + 8, 1, 3, suit, cell);
    }
}

function renderBackdropScene(ctx, art, random, cell = 4) {
    const palettes = {
        pod: { skyA: "#5eb4c6", skyB: "#cdefff", far: "#8dcfd9", mid: "#4e6874", dark: "#1a1c1f", accent: "#ffb1c1" },
        armory: { skyA: "#7f4d3a", skyB: "#f5c199", far: "#a78874", mid: "#625349", dark: "#161617", accent: "#f4b860" },
        corridor: { skyA: "#1d2130", skyB: "#6277a9", far: "#37415d", mid: "#262a34", dark: "#101114", accent: "#52c7c5" },
        bridge: { skyA: "#09040d", skyB: "#4c2e7a", far: "#6a4fb1", mid: "#322550", dark: "#09070c", accent: "#8970ff" },
        greenhouse: { skyA: "#1f574f", skyB: "#8fd1c6", far: "#6eb893", mid: "#315643", dark: "#121513", accent: "#9aca63" },
        maintenance: { skyA: "#10162f", skyB: "#433975", far: "#6856a7", mid: "#2a2f47", dark: "#090b0c", accent: "#52c7c5" },
        radio: { skyA: "#081323", skyB: "#345d79", far: "#6ec1cc", mid: "#203a45", dark: "#090b0d", accent: "#52c7c5" },
        shaft: { skyA: "#091016", skyB: "#284755", far: "#4b849a", mid: "#1e2d34", dark: "#090b0d", accent: "#f4efe6" },
        reactor: { skyA: "#2f0e12", skyB: "#ff9a73", far: "#ffce8f", mid: "#6c2b24", dark: "#14080a", accent: "#ff7a6b" },
        cargo: { skyA: "#1b1c22", skyB: "#8e6e53", far: "#b59a7b", mid: "#52453d", dark: "#101012", accent: "#f4b860" },
        lab: { skyA: "#081122", skyB: "#4978a2", far: "#9ec7d0", mid: "#334b66", dark: "#0a0c0d", accent: "#52c7c5" },
        hull: { skyA: "#160c1f", skyB: "#ffa087", far: "#ffd79f", mid: "#664268", dark: "#0c0810", accent: "#f4b860" },
        nav: { skyA: "#021015", skyB: "#173b4e", far: "#2a7484", mid: "#16303b", dark: "#07090c", accent: "#9aca63" },
        blindzone: { skyA: "#020814", skyB: "#0d1f35", far: "#143d5e", mid: "#0c1828", dark: "#040507", accent: "#52c7c5" },
        beacon: { skyA: "#1f0610", skyB: "#7d1b24", far: "#ff9d64", mid: "#4f161b", dark: "#080607", accent: "#ff7a6b" },
        radar: { skyA: "#04040b", skyB: "#292f63", far: "#5c73b7", mid: "#2d3151", dark: "#09070b", accent: "#f4efe6" },
        lifeboat: { skyA: "#2a0b14", skyB: "#ff9377", far: "#ffd69f", mid: "#694447", dark: "#09080c", accent: "#f4b860" },
        debris: { skyA: "#120710", skyB: "#7d2434", far: "#ff8c65", mid: "#532033", dark: "#09070b", accent: "#ff7a6b" },
        rescue: { skyA: "#a6d3e3", skyB: "#edf8ff", far: "#dce9f2", mid: "#758897", dark: "#171a1d", accent: "#9aca63" },
        intro: { skyA: "#07111d", skyB: "#2a556c", far: "#74b9c9", mid: "#2b4757", dark: "#090b0c", accent: "#52c7c5" }
    };
    const palette = palettes[art.backdrop] || palettes.intro;

    ditherRect(ctx, 0, 0, 80, 18, palette.skyA, palette.skyB, cell, 3);
    ditherRect(ctx, 0, 18, 80, 10, palette.skyB, palette.far, cell, 4);
    ditherRect(ctx, 0, 28, 80, 8, palette.far, palette.mid, cell, 3);

    if (["bridge", "hull", "nav", "blindzone", "radar", "debris", "rescue", "intro"].includes(art.backdrop)) {
        drawStars(ctx, random, 80, 50, cell);
    }

    let astroX = 12;
    let astroY = 22;

    switch (art.backdrop) {
        case "pod":
            drawDisc(ctx, 59, 10, 8, "#f4efe6", "#ffd7de", cell);
            drawRidge(ctx, [{ x: 0, y: 28 }, { x: 18, y: 19 }, { x: 30, y: 24 }, { x: 44, y: 16 }, { x: 60, y: 24 }, { x: 79, y: 18 }], "#31424e", "#1f2a31", cell, 50);
            drawMetalFrame(ctx, "window", "#1a1c1f", "#2a5462", cell);
            pixel(ctx, 18, 14, 8, 20, "#1e2328", cell);
            pixel(ctx, 28, 16, 8, 18, "#23292e", cell);
            drawBranches(ctx, "right", palette.dark, cell);
            astroX = 12;
            astroY = 22;
            break;
        case "armory":
            drawRidge(ctx, [{ x: 0, y: 30 }, { x: 20, y: 24 }, { x: 36, y: 28 }, { x: 52, y: 20 }, { x: 79, y: 26 }], "#4d4038", "#3a302a", cell, 50);
            drawMetalFrame(ctx, "catwalk", "#1b1d20", "#7f4d3a", cell);
            pixel(ctx, 52, 12, 4, 20, "#23282d", cell);
            pixel(ctx, 60, 10, 4, 22, "#23282d", cell);
            pixel(ctx, 68, 12, 4, 20, "#23282d", cell);
            drawBranches(ctx, "left", "#111214", cell);
            astroX = 16;
            astroY = 22;
            break;
        case "corridor":
            ditherRect(ctx, 0, 0, 80, 50, "#11151d", "#192434", cell, 5);
            drawMetalFrame(ctx, "corridor", "#0f1115", "#44546f", cell);
            pixel(ctx, 24, 18, 30, 1, "#f4efe6", cell);
            pixel(ctx, 28, 22, 22, 1, "#52c7c5", cell);
            pixel(ctx, 14, 34, 52, 3, "#16181b", cell);
            pixel(ctx, 44, 28, 10, 1, "#ff7a6b", cell);
            astroX = 10;
            astroY = 22;
            break;
        case "bridge":
            drawDisc(ctx, 62, 11, 8, "#6b4df0", "#34247a", cell);
            drawRidge(ctx, [{ x: 0, y: 24 }, { x: 18, y: 16 }, { x: 32, y: 22 }, { x: 49, y: 14 }, { x: 79, y: 18 }], "#3d2d63", "#251b41", cell, 50);
            drawWater(ctx, 28, { base: "#1d2240", shimmer: "#ffb58f", shadow: "#120d1f" }, cell);
            drawMetalFrame(ctx, "window", "#0f1015", "#2a2354", cell);
            drawBranches(ctx, "both", "#09070c", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "greenhouse":
            drawRidge(ctx, [{ x: 0, y: 24 }, { x: 18, y: 18 }, { x: 38, y: 23 }, { x: 56, y: 16 }, { x: 79, y: 20 }], "#3e5f4b", "#2a4336", cell, 50);
            drawWater(ctx, 30, { base: "#1e4f5d", shimmer: "#9ee0d6", shadow: "#14323a" }, cell);
            drawBranches(ctx, "right", "#121613", cell);
            drawPines(ctx, 44, 33, 6, "#8fcf8a", "#5f8f5d", cell);
            astroX = 14;
            astroY = 22;
            break;
        case "maintenance":
            drawDisc(ctx, 60, 10, 7, "#5b48a2", "#302855", cell);
            drawRidge(ctx, [{ x: 0, y: 26 }, { x: 20, y: 16 }, { x: 36, y: 27 }, { x: 50, y: 18 }, { x: 79, y: 22 }], "#2e3658", "#1c223d", cell, 50);
            pixel(ctx, 46, 8, 3, 32, "#1e2128", cell);
            pixel(ctx, 62, 4, 3, 36, "#1e2128", cell);
            pixel(ctx, 48, 24, 17, 1, "#52c7c5", cell);
            drawBranches(ctx, "left", "#090b0c", cell);
            astroX = 10;
            astroY = 22;
            break;
        case "radio":
            drawDisc(ctx, 55, 10, 9, "#8de0e6", "#4b7b80", cell);
            drawRidge(ctx, [{ x: 0, y: 29 }, { x: 16, y: 18 }, { x: 33, y: 24 }, { x: 58, y: 16 }, { x: 79, y: 21 }], "#21434e", "#173039", cell, 50);
            drawWater(ctx, 32, { base: "#163746", shimmer: "#bfeef0", shadow: "#0d1d26" }, cell);
            pixel(ctx, 60, 8, 1, 14, "#f4efe6", cell);
            pixel(ctx, 58, 10, 5, 1, "#52c7c5", cell);
            drawBranches(ctx, "right", "#090b0d", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "shaft":
            ditherRect(ctx, 0, 0, 80, 50, "#0a0e12", "#17323d", cell, 4);
            pixel(ctx, 16, 0, 2, 50, "#2a4754", cell);
            pixel(ctx, 64, 0, 2, 50, "#2a4754", cell);
            pixel(ctx, 0, 34, 80, 2, "#1d2e35", cell);
            pixel(ctx, 20, 14, 40, 1, "#a1cdd6", cell);
            pixel(ctx, 26, 20, 28, 1, "#52c7c5", cell);
            astroX = 20;
            astroY = 20;
            break;
        case "reactor":
            ditherRect(ctx, 0, 0, 80, 50, "#16080a", "#342024", cell, 4);
            drawDisc(ctx, 58, 9, 7, "#ffd493", "#ff9a73", cell);
            drawWater(ctx, 32, { base: "#42243a", shimmer: "#ffcc85", shadow: "#24111c" }, cell);
            drawBranches(ctx, "both", "#0b0708", cell);
            pixel(ctx, 46, 14, 10, 14, "#ff7a6b", cell);
            pixel(ctx, 50, 18, 2, 16, "#ffd493", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "cargo":
            drawRidge(ctx, [{ x: 0, y: 29 }, { x: 16, y: 20 }, { x: 35, y: 27 }, { x: 57, y: 17 }, { x: 79, y: 23 }], "#5b4a3f", "#3b3028", cell, 50);
            drawWater(ctx, 30, { base: "#3e3b3f", shimmer: "#d5bc97", shadow: "#242225" }, cell);
            drawBranches(ctx, "left", "#0c0d10", cell);
            outlineBox(ctx, 52, 22, 10, 8, "#47382f", "#b79c73", cell);
            outlineBox(ctx, 64, 18, 8, 6, "#47382f", "#b79c73", cell);
            astroX = 10;
            astroY = 22;
            break;
        case "lab":
            drawDisc(ctx, 54, 11, 8, "#c6e2ed", "#83a4be", cell);
            drawRidge(ctx, [{ x: 0, y: 26 }, { x: 20, y: 18 }, { x: 34, y: 24 }, { x: 50, y: 16 }, { x: 79, y: 20 }], "#4d6784", "#324357", cell, 50);
            drawWater(ctx, 31, { base: "#26455a", shimmer: "#d8eef4", shadow: "#162733" }, cell);
            outlineBox(ctx, 54, 12, 10, 18, "#17323a", "#52c7c5", cell);
            outlineBox(ctx, 66, 10, 8, 20, "#17323a", "#52c7c5", cell);
            drawBranches(ctx, "right", "#0c1012", cell);
            astroX = 10;
            astroY = 22;
            break;
        case "hull":
            drawDisc(ctx, 60, 11, 9, "#ffd0a3", "#f78f7a", cell);
            pixel(ctx, 48, 20, 24, 2, "#52c7c5", cell);
            drawRidge(ctx, [{ x: 0, y: 28 }, { x: 15, y: 16 }, { x: 26, y: 24 }, { x: 42, y: 14 }, { x: 58, y: 24 }, { x: 79, y: 18 }], "#5f3f62", "#35243a", cell, 50);
            drawWater(ctx, 30, { base: "#36254a", shimmer: "#ffbf8a", shadow: "#190f24" }, cell);
            drawBranches(ctx, "both", "#0b0810", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "nav":
            drawAurora(ctx, ["#2baf70", "#1d6a61", "#1a3852"], cell);
            drawRidge(ctx, [{ x: 0, y: 27 }, { x: 18, y: 18 }, { x: 34, y: 24 }, { x: 55, y: 15 }, { x: 79, y: 19 }], "#163b4a", "#0d242f", cell, 50);
            drawWater(ctx, 31, { base: "#0e2533", shimmer: "#6fc4be", shadow: "#081119" }, cell);
            drawBranches(ctx, "left", "#07090c", cell);
            pixel(ctx, 56, 22, 6, 2, "#9aca63", cell);
            astroX = 14;
            astroY = 22;
            break;
        case "blindzone":
            drawAurora(ctx, ["#144d4e", "#0d2e3a", "#0a1830"], cell);
            drawRidge(ctx, [{ x: 0, y: 29 }, { x: 17, y: 17 }, { x: 34, y: 25 }, { x: 53, y: 16 }, { x: 79, y: 21 }], "#10243a", "#0b1522", cell, 50);
            drawWater(ctx, 33, { base: "#0d1730", shimmer: "#2cc5cf", shadow: "#050914" }, cell);
            for (let step = 0; step < 14; step += 1) {
                pixel(ctx, 44 + step, 10 + (step % 4) * 3, 1, 1, "#52c7c5", cell);
            }
            drawBranches(ctx, "both", "#040507", cell);
            astroX = 10;
            astroY = 22;
            break;
        case "beacon":
            drawDisc(ctx, 58, 10, 8, "#ffcb85", "#ff7a6b", cell);
            drawRidge(ctx, [{ x: 0, y: 27 }, { x: 18, y: 19 }, { x: 34, y: 25 }, { x: 50, y: 16 }, { x: 79, y: 21 }], "#4d2326", "#2f1215", cell, 50);
            drawWater(ctx, 31, { base: "#2d1827", shimmer: "#ffb26f", shadow: "#13080f" }, cell);
            pixel(ctx, 54, 10, 3, 22, "#f4efe6", cell);
            pixel(ctx, 51, 30, 9, 2, "#ff7a6b", cell);
            drawBranches(ctx, "right", "#070607", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "radar":
            drawDisc(ctx, 61, 10, 8, "#7d7ef0", "#332d6c", cell);
            drawRidge(ctx, [{ x: 0, y: 28 }, { x: 22, y: 18 }, { x: 36, y: 25 }, { x: 52, y: 16 }, { x: 79, y: 20 }], "#2c315d", "#1b2140", cell, 50);
            drawWater(ctx, 31, { base: "#151b3a", shimmer: "#8ba8ff", shadow: "#090b16" }, cell);
            drawBranches(ctx, "both", "#07070b", cell);
            pixel(ctx, 54, 12, 10, 1, "#f4efe6", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "lifeboat":
            drawDisc(ctx, 61, 8, 8, "#ffd493", "#ff8d79", cell);
            drawRidge(ctx, [{ x: 0, y: 29 }, { x: 16, y: 21 }, { x: 32, y: 27 }, { x: 48, y: 16 }, { x: 79, y: 20 }], "#5e3f4b", "#392534", cell, 50);
            drawWater(ctx, 30, { base: "#2b2338", shimmer: "#ffbf8f", shadow: "#140e1a" }, cell);
            pixel(ctx, 46, 33, 24, 4, "#141519", cell);
            pixel(ctx, 52, 18, 10, 5, "#ffb86e", cell);
            drawBranches(ctx, "left", "#09090c", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "debris":
            drawDisc(ctx, 58, 8, 7, "#ffbf8a", "#ff6f63", cell);
            drawRidge(ctx, [{ x: 0, y: 26 }, { x: 18, y: 16 }, { x: 32, y: 27 }, { x: 48, y: 14 }, { x: 79, y: 18 }], "#56253b", "#2f1620", cell, 50);
            drawWater(ctx, 31, { base: "#25152b", shimmer: "#ff9377", shadow: "#0d070f" }, cell);
            pixel(ctx, 48, 8, 2, 2, "#ff7a6b", cell);
            pixel(ctx, 62, 14, 2, 2, "#ff7a6b", cell);
            pixel(ctx, 68, 24, 2, 1, "#f4efe6", cell);
            drawBranches(ctx, "both", "#09070b", cell);
            astroX = 12;
            astroY = 22;
            break;
        case "rescue":
            drawDisc(ctx, 58, 9, 8, "#f4efe6", "#d4e4f1", cell);
            drawRidge(ctx, [{ x: 0, y: 28 }, { x: 18, y: 18 }, { x: 35, y: 24 }, { x: 54, y: 16 }, { x: 79, y: 20 }], "#9db1bf", "#718391", cell, 50);
            drawWater(ctx, 31, { base: "#5c7489", shimmer: "#edf8ff", shadow: "#3c4c59" }, cell);
            pixel(ctx, 54, 8, 2, 22, "#f4efe6", cell);
            pixel(ctx, 52, 28, 8, 2, "#9aca63", cell);
            drawBranches(ctx, "right", "#171a1d", cell);
            astroX = 12;
            astroY = 22;
            break;
        default:
            drawDisc(ctx, 58, 10, 8, "#74b9c9", "#2a556c", cell);
            drawRidge(ctx, [{ x: 0, y: 28 }, { x: 18, y: 18 }, { x: 32, y: 24 }, { x: 52, y: 16 }, { x: 79, y: 21 }], "#2b4757", "#172630", cell, 50);
            drawWater(ctx, 31, { base: "#1b2a33", shimmer: "#9ee0e6", shadow: "#0d1215" }, cell);
            drawBranches(ctx, "both", "#090b0c", cell);
            astroX = 12;
            astroY = 22;
    }

    drawHazardOverlay(ctx, art, cell);
    drawAstronaut(ctx, art.pose, palette.accent, cell, astroX, astroY);
}

function createSceneImageData(art, seed) {
    const canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    const random = mulberry32(seed);

    ctx.fillStyle = "#0b0e10";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    renderBackdropScene(ctx, art, random, 4);

    return canvas.toDataURL("image/png");
}

function renderIntroArt() {
    introImage.src = createSceneImageData({ backdrop: "intro", prop: "ship", hazard: "glow", pose: "wake", accent: "#52c7c5" }, 7);
}

function showScreen(screen) {
    startScreen.hidden = screen !== "start";
    quizScreen.hidden = screen !== "quiz";
    resultScreen.hidden = screen !== "result";
}

function startQuiz() {
    state.currentIndex = 0;
    state.selectedIndex = null;
    state.answers = [];
    state.resultSnapshot = null;
    showScreen("quiz");
    renderQuestion();
}

function renderQuestion() {
    const question = questions[state.currentIndex];
    state.selectedIndex = null;
    const reaction = createReactionLine(state.currentIndex);

    questionCounter.textContent = `第 ${state.currentIndex + 1} / ${questions.length} 幕`;
    chapterTitle.textContent = question.chapter;
    sceneText.textContent = question.scene;
    questionText.textContent = formatPrompt(question.prompt);
    reactionText.hidden = !reaction;
    reactionText.textContent = reaction;
    sceneImage.alt = `${question.chapter} 的像素场景图`;
    sceneImage.src = createSceneImageData(question.art, state.currentIndex + 31);
    progressFill.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
    selectionHint.textContent = "先选一个动作，剧情才会往下走。";
    nextButton.disabled = true;
    nextButton.textContent = state.currentIndex === questions.length - 1 ? "查看体液结果" : "锁定这一步";

    optionsWrap.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option-card";
        button.innerHTML = `<strong>${option.title}</strong><span>${option.text}</span>`;
        button.addEventListener("click", () => selectOption(index));
        optionsWrap.appendChild(button);
    });
}

function selectOption(index) {
    state.selectedIndex = index;

    document.querySelectorAll(".option-card").forEach((button, buttonIndex) => {
        button.classList.toggle("selected", buttonIndex === index);
    });

    selectionHint.textContent = "这一步已经选好了。确认后剧情继续。";
    nextButton.disabled = false;
}

function nextStep() {
    if (state.selectedIndex === null) {
        return;
    }

    state.answers[state.currentIndex] = state.selectedIndex;

    if (state.currentIndex === questions.length - 1) {
        showResult();
        return;
    }

    state.currentIndex += 1;
    renderQuestion();
}

function calculateScores() {
    const totals = {
        sanguine: 0,
        choleric: 0,
        phlegmatic: 0,
        melancholic: 0
    };

    state.answers.forEach((answerIndex, questionIndex) => {
        const option = questions[questionIndex].options[answerIndex];
        humorOrder.forEach((key) => {
            totals[key] += option.scores[key];
        });
    });

    return totals;
}

function showResult() {
    const totals = calculateScores();
    const ranking = [...humorOrder].sort((a, b) => totals[b] - totals[a]);
    const primary = humorProfiles[ranking[0]];
    const secondary = humorProfiles[ranking[1]];
    const blendKey = `${ranking[0]}-${ranking[1]}`;
    const blendProfile = blendProfiles[blendKey];
    const matches = blendRoleMatches[blendKey];
    const totalPoints = Object.values(totals).reduce((sum, value) => sum + value, 0);
    const primaryPercent = Math.round((totals[ranking[0]] / totalPoints) * 100);
    const secondaryPercent = Math.round((totals[ranking[1]] / totalPoints) * 100);

    resultName.textContent = blendProfile.title;
    resultSummary.textContent = blendProfile.summary;
    blendSummary.textContent = `你的结果是 ${blendProfile.label}。主导体液决定你默认怎么发力，次要体液决定这种发力会更热、更稳、更深，还是更强硬。`;

    mixStats.innerHTML = `
        <div class="mix-stat">
            <strong>主导体液</strong>
            <span>${primary.label} ${primaryPercent}%</span>
            <p>${humorBlendNames[ranking[0]]}是你的第一反应，也是你最常被别人先感受到的部分。</p>
        </div>
        <div class="mix-stat">
            <strong>次要体液</strong>
            <span>${secondary.label} ${secondaryPercent}%</span>
            <p>${humorBlendNames[ranking[1]]}会给你的主类型染上一层明显底色，让你不只是单一的一种人。</p>
        </div>
    `;

    scoreboard.innerHTML = ranking
        .map((key) => {
            const profile = humorProfiles[key];
            const score = totals[key];
            const percent = Math.round((score / totalPoints) * 100);

            return `
                <div class="score-row">
                    <div class="score-row-head">
                        <strong>${profile.label}</strong>
                        <span>${score} 分 · ${percent}%</span>
                    </div>
                    <div class="score-track">
                        <div class="score-fill ${key}" style="width: ${percent}%;"></div>
                    </div>
                    <p class="score-note">${profile.short}</p>
                </div>
            `;
        })
        .join("");

    roleCast.innerHTML = `
        <p class="detail-line"><strong>适合在你身边的角色：</strong>下面这三种配置已经按你的混合型气质细化过，重点是补你的盲区，而不是复制另一个你。</p>
        ${matches.map(({ role, matchBlend, copy }) => {
            const label = blendProfiles[matchBlend].label;

            return `
                <div class="role-card">
                    <strong>${role} · ${label}</strong>
                    <p>${formatRoleCopy(copy)}</p>
                </div>
            `;
        }).join("")}
    `;

    resultDetail.innerHTML = `
        <p class="detail-line"><strong>逃生里的你：</strong>${blendProfile.action}</p>
        <p class="detail-line"><strong>别人靠近你的感受：</strong>${blendProfile.relationship}</p>
        <p class="detail-line"><strong>你适合的合作方式：</strong>${blendProfile.teamwork}</p>
    `;

    state.resultSnapshot = {
        totals,
        ranking,
        blendKey,
        blendProfile,
        primary,
        secondary,
        primaryPercent,
        secondaryPercent,
        matches
    };

    showScreen("result");
}

function wrapTextLines(ctx, text, maxWidth) {
    const lines = [];
    let current = "";

    for (const char of text) {
        const testLine = current + char;

        if (ctx.measureText(testLine).width > maxWidth && current) {
            lines.push(current);
            current = char;
        } else {
            current = testLine;
        }
    }

    if (current) {
        lines.push(current);
    }

    return lines;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, color, font) {
    ctx.font = font;
    ctx.fillStyle = color;
    const lines = wrapTextLines(ctx, text, maxWidth);

    lines.forEach((line, index) => {
        ctx.fillText(line, x, y + index * lineHeight);
    });

    return y + lines.length * lineHeight;
}

function drawPosterBox(ctx, x, y, w, h, fill, stroke) {
    ctx.fillStyle = stroke;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = fill;
    ctx.fillRect(x + 8, y + 8, w - 16, h - 16);
}

function saveResultImage() {
    if (!state.resultSnapshot) {
        return;
    }

    const snapshot = state.resultSnapshot;
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 2480;
    const ctx = canvas.getContext("2d");
    const random = mulberry32(2048);

    ctx.fillStyle = "#0b0e10";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < 120; index += 1) {
        const x = Math.floor(random() * canvas.width);
        const y = Math.floor(random() * canvas.height);
        const size = index % 5 === 0 ? 8 : 4;
        const colors = ["#f4efe6", "#52c7c5", "#f4b860", "#9aca63"];
        ctx.fillStyle = colors[index % colors.length];
        ctx.fillRect(x, y, size, size);
    }

    drawPosterBox(ctx, 60, 60, 1080, 240, "#141719", "#3b4036");
    drawPosterBox(ctx, 60, 340, 1080, 280, "#141719", "#3b4036");
    drawPosterBox(ctx, 60, 660, 1080, 240, "#141719", "#3b4036");
    drawPosterBox(ctx, 60, 940, 1080, 560, "#141719", "#3b4036");
    drawPosterBox(ctx, 60, 1540, 1080, 360, "#141719", "#3b4036");
    drawPosterBox(ctx, 60, 1940, 1080, 460, "#141719", "#3b4036");

    ctx.fillStyle = "#c8c1b3";
    ctx.font = "28px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText("失重逃生 · 四体液混合结果", 100, 130);
    ctx.fillStyle = "#f4b860";
    ctx.font = "bold 54px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText(snapshot.blendProfile.title, 100, 210);
    ctx.fillStyle = "#f4efe6";
    ctx.font = "26px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText(`主导体液 ${snapshot.primary.label} ${snapshot.primaryPercent}%  /  次要体液 ${snapshot.secondary.label} ${snapshot.secondaryPercent}%`, 100, 270);

    drawAstronaut(ctx, "reach", "#52c7c5", 8, 118, -8);

    let y = 390;
    y = drawWrappedText(ctx, snapshot.blendProfile.summary, 100, y, 960, 42, "#f4efe6", "28px 'Courier New', 'Microsoft YaHei', monospace");
    drawWrappedText(ctx, `你的结果是 ${snapshot.blendProfile.label}。主导体液决定你的默认发力方式，次要体液决定这种发力会更热、更稳、更深，还是更强硬。`, 100, y + 24, 960, 38, "#c8c1b3", "24px 'Courier New', 'Microsoft YaHei', monospace");

    ctx.fillStyle = "#f4b860";
    ctx.font = "bold 30px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText("主导 / 次要体液", 100, 720);
    drawPosterBox(ctx, 100, 760, 460, 100, "#101517", "#3b4036");
    drawPosterBox(ctx, 620, 760, 460, 100, "#101517", "#3b4036");
    ctx.fillStyle = "#f4efe6";
    ctx.font = "bold 34px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText(`${snapshot.primary.label} ${snapshot.primaryPercent}%`, 126, 824);
    ctx.fillText(`${snapshot.secondary.label} ${snapshot.secondaryPercent}%`, 646, 824);

    ctx.fillStyle = "#f4b860";
    ctx.font = "bold 30px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText("四体液占比", 100, 1000);

    snapshot.ranking.forEach((key, index) => {
        const profile = humorProfiles[key];
        const score = snapshot.totals[key];
        const percent = Math.round((score / Object.values(snapshot.totals).reduce((sum, value) => sum + value, 0)) * 100);
        const rowY = 1040 + index * 120;
        const colors = {
            sanguine: "#ff7a6b",
            choleric: "#f4b860",
            phlegmatic: "#52c7c5",
            melancholic: "#9aca63"
        };

        ctx.fillStyle = "#f4efe6";
        ctx.font = "26px 'Courier New', 'Microsoft YaHei', monospace";
        ctx.fillText(`${profile.label}  ${score} 分 · ${percent}%`, 100, rowY);
        ctx.fillStyle = "#2a2f31";
        ctx.fillRect(100, rowY + 20, 920, 28);
        ctx.fillStyle = colors[key];
        ctx.fillRect(100, rowY + 20, Math.max(18, Math.round(920 * percent / 100)), 28);
        ctx.fillStyle = "#c8c1b3";
        ctx.font = "20px 'Courier New', 'Microsoft YaHei', monospace";
        ctx.fillText(profile.short, 100, rowY + 84);
    });

    ctx.fillStyle = "#f4b860";
    ctx.font = "bold 30px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText("适合在你身边的角色", 100, 1600);

    snapshot.matches.forEach(({ role, matchBlend, copy }, index) => {
        const cardY = 1640 + index * 104;
        drawPosterBox(ctx, 100, cardY, 940, 88, "#101517", "#3b4036");
        ctx.fillStyle = "#f4b860";
        ctx.font = "bold 24px 'Courier New', 'Microsoft YaHei', monospace";
        ctx.fillText(`${role} · ${blendProfiles[matchBlend].label}`, 126, cardY + 34);
        drawWrappedText(ctx, formatRoleCopy(copy), 126, cardY + 64, 880, 28, "#c8c1b3", "18px 'Courier New', 'Microsoft YaHei', monospace");
    });

    ctx.fillStyle = "#f4b860";
    ctx.font = "bold 30px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText("你在故事里的样子", 100, 2000);
    let detailY = 2046;
    detailY = drawWrappedText(ctx, `逃生里的你：${snapshot.blendProfile.action}`, 100, detailY, 980, 32, "#f4efe6", "22px 'Courier New', 'Microsoft YaHei', monospace");
    detailY = drawWrappedText(ctx, `别人靠近你的感受：${snapshot.blendProfile.relationship}`, 100, detailY + 18, 980, 32, "#f4efe6", "22px 'Courier New', 'Microsoft YaHei', monospace");
    drawWrappedText(ctx, `你适合的合作方式：${snapshot.blendProfile.teamwork}`, 100, detailY + 18, 980, 32, "#f4efe6", "22px 'Courier New', 'Microsoft YaHei', monospace");

    ctx.fillStyle = "#c8c1b3";
    ctx.font = "20px 'Courier New', 'Microsoft YaHei', monospace";
    ctx.fillText("作者：C", 960, 2410);

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${snapshot.blendProfile.label}-结果.png`;
    link.click();
}

function restartQuiz() {
    state.currentIndex = 0;
    state.selectedIndex = null;
    state.answers = [];
    state.resultSnapshot = null;
    showScreen("start");
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextStep);
saveButton.addEventListener("click", saveResultImage);
restartButton.addEventListener("click", restartQuiz);
renderIntroArt();
showScreen("start");
