const STORY = {
  start: "prologue_001",
  endings: {
    ending_demo: "Demo 结局：下把一起",
    ending_ch3: "Demo 3 结局：复诊日",
    ending_ch4: "Demo 4 结局：主号",
    ending_ch5: "Demo 5 结局：双人视频",
    ending_ch6: "Demo 6 结局：期末周",
    ending_ch7: "Demo 7 结局：现实撤离点",
    ending_ch8: "Demo 8 结局：试运行",
    ending_ch9: "Demo 9 结局：低频联系",
    ending_ch10: "Demo 10 结局：开学再见",
    ending_normal: "普通结局：观众席",
    ending_good: "好结局：撤离点",
    ending_true: "真结局：组队成功",
    ending_hidden: "隐藏结局：主号"
  },
  nodes: {
    prologue_001: {
      chapter: "序章",
      title: "那把枪的配法",
      text: "选修课的投影仪发出很轻的电流声。你坐在第三排，笔记本摊开，页面却停在上一节课的标题。",
      next: "prologue_002"
    },
    prologue_002: {
      chapter: "序章",
      title: "那把枪的配法",
      text: "前排靠窗的位置，有个男生把电脑屏幕压得很低。不是在看课件。",
      next: "prologue_003"
    },
    prologue_003: {
      chapter: "序章",
      title: "那把枪的配法",
      text: "屏幕上是一张配装表。枪管、握把、枪托，密密麻麻的参数叠在一起，像一份只有玩家才看得懂的病历。",
      next: "prologue_004"
    },
    prologue_004: {
      chapter: "序章",
      title: "那把枪的配法",
      text: "你一眼认出了那把枪。也一眼看出了问题。",
      next: "choice_first_words"
    },
    choice_first_words: {
      chapter: "序章",
      title: "那把枪的配法",
      text: "你要怎么开口？",
      choices: [
        {
          label: "【报点】“这枪别这么配，后坐力会飘。”",
          next: "route_direct_001",
          effects: { trust: 1, honesty: 1 }
        },
        {
          label: "【试探】“你也玩搜打撤？”",
          next: "route_soft_001",
          effects: { trust: 1, distance: 1 }
        },
        {
          label: "【静步】假装没看见。",
          next: "route_silent_001",
          effects: { pressure: -1 }
        }
      ]
    },
    route_direct_001: {
      chapter: "序章",
      title: "那把枪的配法",
      speaker: "你",
      text: "“这枪别这么配，后坐力会飘。”",
      next: "first_meet_001"
    },
    route_soft_001: {
      chapter: "序章",
      title: "那把枪的配法",
      speaker: "你",
      text: "“你也玩搜打撤？”",
      next: "first_meet_001"
    },
    route_silent_001: {
      chapter: "序章",
      title: "那把枪的配法",
      text: "你原本打算把这句话咽回去。可他把鼠标停在了一个明显不该选的配件上。",
      next: "route_silent_002"
    },
    route_silent_002: {
      chapter: "序章",
      title: "那把枪的配法",
      speaker: "你",
      text: "“……那个握把不太适合这套。”",
      next: "first_meet_001"
    },
    first_meet_001: {
      chapter: "第一章",
      title: "匹配",
      text: "前排的男生肩膀很轻地僵了一下。",
      next: "first_meet_002"
    },
    first_meet_002: {
      chapter: "第一章",
      title: "匹配",
      text: "他转过头。黑色中长发被随手用鲨鱼夹别在脑后，几缕碎发落在耳机旁边。眼下有熬夜后的青色。",
      next: "first_meet_003"
    },
    first_meet_003: {
      chapter: "第一章",
      title: "匹配",
      speaker: "忧黎",
      text: "“……你玩这个？”",
      next: "first_meet_004"
    },
    first_meet_004: {
      chapter: "第一章",
      title: "匹配",
      text: "他的声音比你想象中低一点，尾音有些沙，像一台运行太久却还没关机的电脑。",
      next: "choice_reply_youli"
    },
    choice_reply_youli: {
      chapter: "第一章",
      title: "匹配",
      text: "你看着他屏幕右下角的配装数据，忽然觉得这不像一次搭话，更像一次匹配成功。",
      choices: [
        {
          label: "【架枪】“玩。虽然不算厉害。”",
          next: "reply_not_good_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【舔包】“只会看参数，实战经常白给。”",
          next: "reply_funny_001",
          effects: { trust: 1, distance: 1 }
        },
        {
          label: "【撤离】“嗯。随便玩玩。”",
          next: "reply_safe_001",
          effects: { distance: 1 }
        }
      ]
    },
    reply_not_good_001: {
      chapter: "第一章",
      title: "匹配",
      speaker: "你",
      text: "“玩。虽然不算厉害。”",
      next: "youli_smile_001"
    },
    reply_funny_001: {
      chapter: "第一章",
      title: "匹配",
      speaker: "你",
      text: "“只会看参数，实战经常白给。”",
      next: "youli_smile_001"
    },
    reply_safe_001: {
      chapter: "第一章",
      title: "匹配",
      speaker: "你",
      text: "“嗯。随便玩玩。”",
      next: "youli_smile_001"
    },
    youli_smile_001: {
      chapter: "第一章",
      title: "匹配",
      text: "他愣了很久。然后笑了一下。",
      next: "youli_smile_002"
    },
    youli_smile_002: {
      chapter: "第一章",
      title: "匹配",
      text: "那个笑容很短，像训练场里一闪而过的命中提示。可你还是记住了。",
      next: "bili_001"
    },
    bili_001: {
      chapter: "第一章",
      title: "匹配",
      text: "第二周课间，你又看见他在论坛里写配装回复。字很少，信息密度却高得离谱。",
      next: "bili_002"
    },
    bili_002: {
      chapter: "第一章",
      title: "匹配",
      speaker: "忧黎",
      text: "“我有时候会做视频。”",
      next: "bili_003"
    },
    bili_003: {
      chapter: "第一章",
      title: "匹配",
      text: "他说完这句，像是后悔暴露了自己的出生点，立刻把电脑合上。",
      next: "bili_004"
    },
    bili_004: {
      chapter: "第一章",
      title: "匹配",
      speaker: "忧黎",
      text: "“B站。忧黎official。”",
      next: "bili_005"
    },
    bili_005: {
      chapter: "第一章",
      title: "匹配",
      text: "晚上，你打开B站搜索他的ID。",
      next: "bili_006"
    },
    bili_006: {
      chapter: "第一章",
      title: "匹配",
      text: "忧黎official。粉丝7032。分区：FPS搜打撤游戏。最新投稿：《新版本M4配装思路：别只看面板》。",
      next: "bili_007"
    },
    bili_007: {
      chapter: "第一章",
      title: "匹配",
      text: "视频里没有脸。只有游戏画面和他的声音。冷静，沙哑，语速不快，却把每一个选择都讲得清清楚楚。",
      next: "bili_008"
    },
    bili_008: {
      chapter: "第一章",
      title: "匹配",
      speaker: "忧黎",
      text: "“如果你不是很确定自己能不能压住，那就别硬压。先保证能撤。”",
      next: "bili_009"
    },
    bili_009: {
      chapter: "第一章",
      title: "匹配",
      text: "你把他的视频一条条看下去。最早那条播放量只有三百。",
      next: "bili_010"
    },
    bili_010: {
      chapter: "第一章",
      title: "匹配",
      text: "他自己发了一条弹幕：第一条视频。录了五遍。就这样吧。",
      next: "id_001"
    },
    id_001: {
      chapter: "第一章",
      title: "匹配",
      text: "你在简介最底部找到了他的玩家ID。",
      next: "id_002"
    },
    id_002: {
      chapter: "第一章",
      title: "匹配",
      text: "Li_QAQ。后面写着：组队可加。但我不厉害。",
      next: "choice_add_friend"
    },
    choice_add_friend: {
      chapter: "第一章",
      title: "匹配",
      text: "好友申请框停在屏幕中央。你要发送吗？",
      choices: [
        {
          label: "【发起组队】发送申请。备注：同班，懂一点配装。",
          next: "add_friend_001",
          effects: { trust: 1, honesty: 1, support: 1 }
        },
        {
          label: "【低调摸点】发送申请。不写备注。",
          next: "add_friend_002",
          effects: { distance: 1, support: 1 }
        }
      ]
    },
    add_friend_001: {
      chapter: "第一章",
      title: "匹配",
      text: "申请发送后的第七秒，系统提示亮了起来。",
      next: "add_friend_003"
    },
    add_friend_002: {
      chapter: "第一章",
      title: "匹配",
      text: "申请发送后的第十九秒，系统提示亮了起来。",
      next: "add_friend_003"
    },
    add_friend_003: {
      chapter: "第一章",
      title: "匹配",
      text: "Li_QAQ 已通过你的好友申请。",
      next: "team_001"
    },
    team_001: {
      chapter: "第一章",
      title: "匹配",
      speaker: "忧黎",
      text: "“下把一起？”",
      next: "team_002"
    },
    team_002: {
      chapter: "第一章",
      title: "匹配",
      text: "你盯着那四个字。心跳忽然快得像撤离倒计时只剩三十秒。",
      next: "team_003"
    },
    team_003: {
      chapter: "第一章",
      title: "匹配",
      speaker: "忧黎",
      text: "“我掩护你。”",
      next: "chapter2_001"
    },
    chapter2_001: {
      chapter: "第二章",
      title: "组队",
      text: "你点下同意组队的瞬间，耳机里传来一声很轻的电流音。队伍语音接通了。",
      next: "chapter2_002"
    },
    chapter2_002: {
      chapter: "第二章",
      title: "组队",
      speaker: "忧黎",
      text: "“能听见吗？”",
      next: "chapter2_003"
    },
    chapter2_003: {
      chapter: "第二章",
      title: "组队",
      text: "他的声音从耳机里传出来，比视频里更近。近到你甚至能听见他按键时短促的机械轴声。",
      next: "choice_voice_reply"
    },
    choice_voice_reply: {
      chapter: "第二章",
      title: "组队",
      text: "第一次队伍语音，你要怎么回应？",
      choices: [
        {
          label: "【正常报麦】“能听见。你声音还挺清楚的。”",
          next: "voice_clear_001",
          effects: { trust: 1, honesty: 1 }
        },
        {
          label: "【开个玩笑】“听见了，主播老师请带带。”",
          next: "voice_joke_001",
          effects: { trust: 1, distance: -1 }
        },
        {
          label: "【小声一点】“嗯，能。”",
          next: "voice_soft_001",
          effects: { pressure: -1, support: 1 }
        }
      ]
    },
    voice_clear_001: {
      chapter: "第二章",
      title: "组队",
      speaker: "忧黎",
      text: "“那就好。我有点怕麦炸。”",
      next: "voice_common_001"
    },
    voice_joke_001: {
      chapter: "第二章",
      title: "组队",
      speaker: "忧黎",
      text: "“别叫老师。”\n\n他顿了一下。\n\n“……会紧张。”",
      next: "voice_common_001"
    },
    voice_soft_001: {
      chapter: "第二章",
      title: "组队",
      speaker: "忧黎",
      text: "“不用那么小声。我听得到。”\n\n他像是怕你误会，又补了一句。\n\n“不是嫌你小声。”",
      next: "voice_common_001"
    },
    voice_common_001: {
      chapter: "第二章",
      title: "组队",
      text: "地图载入。昏黄的厂区灯光铺在地面上，远处枪声像坏掉的烟花，忽近忽远。",
      next: "voice_common_002"
    },
    voice_common_002: {
      chapter: "第二章",
      title: "组队",
      speaker: "忧黎",
      text: "“这把别贪。”\n\n“你跟我半个身位。有人我先架。”",
      next: "voice_common_003"
    },
    voice_common_003: {
      chapter: "第二章",
      title: "组队",
      text: "你以前也和别人组过队。那些声音通常很吵，催促、责怪、抢物资，像一队临时拼起来的陌生人。",
      next: "voice_common_004"
    },
    voice_common_004: {
      chapter: "第二章",
      title: "组队",
      text: "可忧黎不一样。他说话很少，每一句都像提前量过距离。",
      next: "factory_001"
    },
    factory_001: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“左边二楼有脚步。别上楼梯。”",
      next: "factory_002"
    },
    factory_002: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你刚要切枪，二楼窗口就闪过一截枪管。下一秒，忧黎开火。",
      next: "factory_003"
    },
    factory_003: {
      chapter: "第二章",
      title: "旧厂区",
      text: "短点射。压得很稳。对面的影子从窗口后消失，像被屏幕直接擦掉。",
      next: "factory_004"
    },
    factory_004: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“可以走。别看包。”",
      next: "choice_loot_or_follow"
    },
    choice_loot_or_follow: {
      chapter: "第二章",
      title: "旧厂区",
      text: "那个包就倒在楼下，离你只有几步。你要怎么办？",
      choices: [
        {
          label: "【听指挥】跟上忧黎，不看包。",
          next: "follow_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【贪一下】快速摸包，应该来得及。",
          next: "greed_001",
          effects: { pressure: 1, distance: 1 }
        },
        {
          label: "【问清楚】“为什么不能看？”",
          next: "ask_001",
          effects: { honesty: 1 }
        }
      ]
    },
    follow_001: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你忍住了。那一瞬间你的手指甚至已经放在交互键上，但你还是转身跟上他。",
      next: "follow_002"
    },
    follow_002: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“漂亮。”",
      next: "ambush_001"
    },
    greed_001: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你蹲下摸包。第一格是高级护甲，第二格是改满的枪。你的心跳刚提起来，耳机里忽然传来忧黎压低的声音。",
      next: "greed_002"
    },
    greed_002: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“别动。”",
      next: "ambush_001"
    },
    ask_001: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“因为他倒得太干净了。”\n\n“像诱饵。”",
      next: "ambush_001"
    },
    ambush_001: {
      chapter: "第二章",
      title: "旧厂区",
      text: "话音刚落，右侧铁皮墙后爆出一串枪声。你的屏幕猛地一震，血条瞬间压到红线。",
      next: "ambush_002"
    },
    ambush_002: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“趴下。看我标点。”",
      next: "ambush_003"
    },
    ambush_003: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你几乎是本能地按下趴伏。子弹擦过头顶，在耳机里炸出一串尖锐的噪声。",
      next: "ambush_004"
    },
    ambush_004: {
      chapter: "第二章",
      title: "旧厂区",
      text: "忧黎没有骂你，也没有慌。他只是换了一个角度，像把整张地图都在脑子里重新折了一遍。",
      next: "ambush_005"
    },
    ambush_005: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“三、二、一。”\n\n“跑。”",
      next: "run_001"
    },
    run_001: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你冲出掩体。左下角的倒计时、右上角的枪声提示、屏幕边缘的红雾，全都挤在一起。",
      next: "run_002"
    },
    run_002: {
      chapter: "第二章",
      title: "旧厂区",
      text: "然后你听见忧黎替你开枪。不是视频里那种隔着屏幕的冷静，而是离你很近、把退路一点点打出来的声音。",
      next: "run_003"
    },
    run_003: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“别回头。”",
      next: "safe_001"
    },
    safe_001: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你躲进仓库，终于打上止血。耳机里只剩你们两个人的呼吸声。",
      next: "safe_002"
    },
    safe_002: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "你",
      text: "“抱歉。”",
      next: "safe_003"
    },
    safe_003: {
      chapter: "第二章",
      title: "旧厂区",
      text: "忧黎沉默了几秒。你以为他会说“没事”，或者说“下次注意”。",
      next: "safe_004"
    },
    safe_004: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“不要先道歉。”\n\n“先确认自己还活着。”",
      next: "safe_005"
    },
    safe_005: {
      chapter: "第二章",
      title: "旧厂区",
      text: "这句话听起来像游戏建议。可你不知道为什么，忽然觉得它不像只是在说游戏。",
      next: "choice_after_rescue"
    },
    choice_after_rescue: {
      chapter: "第二章",
      title: "旧厂区",
      text: "仓库外还有脚步。你该说些什么？",
      choices: [
        {
          label: "【认真回应】“我还活着。谢谢你。”",
          next: "thanks_001",
          effects: { trust: 1, support: 1, honesty: 1 }
        },
        {
          label: "【缓和气氛】“活着，但差点把键盘抠穿。”",
          next: "keyboard_001",
          effects: { trust: 1, pressure: -1 }
        },
        {
          label: "【担心他】“你那边没事吧？”",
          next: "worry_001",
          effects: { support: 1, honesty: 1 }
        }
      ]
    },
    thanks_001: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“嗯。”\n\n他的声音低下去一点。\n\n“那就继续活着。”",
      next: "medicine_001"
    },
    keyboard_001: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“别抠键盘。”\n\n“贵。”\n\n他停了停。\n\n“手也贵。”",
      next: "medicine_001"
    },
    worry_001: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“我没事。”\n\n他说得很快。过了一会儿，又像补票一样补上。\n\n“谢谢。”",
      next: "medicine_001"
    },
    medicine_001: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你们在仓库角落短暂停下。忧黎那边忽然传来一声很轻的塑料瓶响。",
      next: "medicine_002"
    },
    medicine_002: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“等我十秒。”",
      next: "medicine_003"
    },
    medicine_003: {
      chapter: "第二章",
      title: "旧厂区",
      text: "他关了麦。十秒变成了二十秒。游戏里，角色安静地蹲在阴影里；游戏外，你听见自己的心跳慢慢降下来。",
      next: "medicine_004"
    },
    medicine_004: {
      chapter: "第二章",
      title: "旧厂区",
      speaker: "忧黎",
      text: "“回来了。”",
      next: "medicine_005"
    },
    medicine_005: {
      chapter: "第二章",
      title: "旧厂区",
      text: "你没有问他刚才做了什么。他也没有解释。只是下一句报点依旧准确，像一个人把自己重新校准。",
      next: "extract_001"
    },
    extract_001: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "撤离点刷新在地图另一侧。倒计时还剩七分钟。你们身上的物资不算多，但足够证明这把不是白来。",
      next: "extract_002"
    },
    extract_002: {
      chapter: "第二章",
      title: "撤离倒计时",
      speaker: "忧黎",
      text: "“走北线。”\n\n“那里脏，但能活。”",
      next: "extract_003"
    },
    extract_003: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "你们穿过废弃车棚。远处又有交火声，像有人把夜色撕开一道口子。",
      next: "extract_004"
    },
    extract_004: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "离撤离点还有一百米时，忧黎忽然停下。",
      next: "extract_005"
    },
    extract_005: {
      chapter: "第二章",
      title: "撤离倒计时",
      speaker: "忧黎",
      text: "“前面有人蹲。”",
      next: "choice_final_push"
    },
    choice_final_push: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "最后一段路，你要怎么配合他？",
      choices: [
        {
          label: "【听他指挥】“你说，我做。”",
          next: "final_trust_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【主动分担】“我丢烟，你先走。”",
          next: "final_share_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【害怕但坦白】“我有点慌，但我能跟。”",
          next: "final_honest_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    final_trust_001: {
      chapter: "第二章",
      title: "撤离倒计时",
      speaker: "忧黎",
      text: "“好。”\n\n“那我数三秒。”",
      next: "final_common_001"
    },
    final_share_001: {
      chapter: "第二章",
      title: "撤离倒计时",
      speaker: "忧黎",
      text: "“不用你先走。”\n\n“但烟可以丢。”",
      next: "final_common_001"
    },
    final_honest_001: {
      chapter: "第二章",
      title: "撤离倒计时",
      speaker: "忧黎",
      text: "“慌也没事。”\n\n“跟着我呼吸。”",
      next: "final_common_001"
    },
    final_common_001: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "烟雾弹滚出去，白色的雾铺开。你们同时冲进撤离区。脚步、枪声、倒计时，所有声音都贴在耳边。",
      next: "final_common_002"
    },
    final_common_002: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "五。四。三。",
      next: "final_common_003"
    },
    final_common_003: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "屏幕边缘再次泛红。你差一点就要下意识回头。",
      next: "final_common_004"
    },
    final_common_004: {
      chapter: "第二章",
      title: "撤离倒计时",
      speaker: "忧黎",
      text: "“看前面。”",
      next: "final_common_005"
    },
    final_common_005: {
      chapter: "第二章",
      title: "撤离倒计时",
      text: "二。一。撤离成功。",
      next: "after_game_001"
    },
    after_game_001: {
      chapter: "第二章",
      title: "谢谢组队",
      text: "结算界面弹出。你的收益不高，战绩也不漂亮。可你盯着“撤离成功”四个字，看了很久。",
      next: "after_game_002"
    },
    after_game_002: {
      chapter: "第二章",
      title: "谢谢组队",
      speaker: "忧黎",
      text: "“你刚才跟得很好。”",
      next: "after_game_003"
    },
    after_game_003: {
      chapter: "第二章",
      title: "谢谢组队",
      text: "这句话比任何稀有物资都更轻，却更难从背包里放下。",
      next: "after_game_004"
    },
    after_game_004: {
      chapter: "第二章",
      title: "谢谢组队",
      speaker: "你",
      text: "“下次还能一起吗？”",
      next: "after_game_005"
    },
    after_game_005: {
      chapter: "第二章",
      title: "谢谢组队",
      text: "队伍语音里安静了很久。久到你开始怀疑自己是不是越过了安全线。",
      next: "after_game_006"
    },
    after_game_006: {
      chapter: "第二章",
      title: "谢谢组队",
      speaker: "忧黎",
      text: "“可以。”\n\n“但我有时候状态不稳定。”",
      next: "after_game_007"
    },
    after_game_007: {
      chapter: "第二章",
      title: "谢谢组队",
      text: "他说这句话时没有卖惨，也没有解释。像是在告诉你一个需要提前知道的地图机制。",
      next: "choice_state_reply"
    },
    choice_state_reply: {
      chapter: "第二章",
      title: "谢谢组队",
      text: "你想认真回应他。",
      choices: [
        {
          label: "【边界感】“如果不想打，可以直接说。”",
          next: "state_boundary_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【坦诚】“我也不是每天都很稳定。”",
          next: "state_honest_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【陪伴】“那就状态好的时候打，状态不好就休息。”",
          next: "state_support_001",
          effects: { support: 2, pressure: -1 }
        }
      ]
    },
    state_boundary_001: {
      chapter: "第二章",
      title: "谢谢组队",
      speaker: "忧黎",
      text: "“……嗯。”\n\n“我会说。”",
      next: "night_msg_001"
    },
    state_honest_001: {
      chapter: "第二章",
      title: "谢谢组队",
      speaker: "忧黎",
      text: "“那我们别互相装满状态。”\n\n他说完，轻轻笑了一声。",
      next: "night_msg_001"
    },
    state_support_001: {
      chapter: "第二章",
      title: "谢谢组队",
      speaker: "忧黎",
      text: "“听起来很简单。”\n\n“但我可能需要练。”",
      next: "night_msg_001"
    },
    night_msg_001: {
      chapter: "第二章",
      title: "夜间消息",
      text: "那天晚上十一点四十七分，你准备关电脑时，收到了忧黎发来的消息。",
      next: "night_msg_002"
    },
    night_msg_002: {
      chapter: "第二章",
      title: "夜间消息",
      speaker: "忧黎",
      text: "“今天谢谢组队。”",
      next: "night_msg_003"
    },
    night_msg_003: {
      chapter: "第二章",
      title: "夜间消息",
      text: "三秒后，他又补了一句。",
      next: "night_msg_004"
    },
    night_msg_004: {
      chapter: "第二章",
      title: "夜间消息",
      speaker: "忧黎",
      text: "“不是客套。”",
      next: "night_msg_005"
    },
    night_msg_005: {
      chapter: "第二章",
      title: "夜间消息",
      text: "你看着那四个字，忽然想起撤离前他对你说的那句“看前面”。",
      next: "demo_end"
    },
    demo_end: {
      chapter: "第三章",
      title: "复诊日",
      text: "第二天上午，你在教学楼一层的自动贩卖机前看见了忧黎。",
      next: "clinic_001"
    },
    clinic_001: {
      chapter: "第三章",
      title: "复诊日",
      text: "他站在一排饮料前，黑色外套拉链拉到下巴，头发还是被鲨鱼夹松松别着。手里握着一瓶没拧开的矿泉水。",
      next: "clinic_002"
    },
    clinic_002: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“早。”",
      next: "clinic_003"
    },
    clinic_003: {
      chapter: "第三章",
      title: "复诊日",
      text: "他的声音比昨晚更哑一点。不是熬夜打游戏那种哑，而像是刚从一场没有观众的长跑里回来。",
      next: "choice_morning_reply"
    },
    choice_morning_reply: {
      chapter: "第三章",
      title: "复诊日",
      text: "你该怎么回应他？",
      choices: [
        {
          label: "【自然一点】“早。昨晚睡得怎么样？”",
          next: "morning_sleep_001",
          effects: { support: 1, honesty: 1 }
        },
        {
          label: "【轻松一点】“早，撤离点优秀指挥官。”",
          next: "morning_joke_001",
          effects: { trust: 1, pressure: -1 }
        },
        {
          label: "【只打招呼】“早。”",
          next: "morning_safe_001",
          effects: { distance: 1 }
        }
      ]
    },
    morning_sleep_001: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“睡了。”\n\n他停顿得很明显。\n\n“睡没睡好是另一个问题。”",
      next: "clinic_common_001"
    },
    morning_joke_001: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“这个称号听起来像会被队友举报。”\n\n他嘴角动了一下。至少不像完全没电。",
      next: "clinic_common_001"
    },
    morning_safe_001: {
      chapter: "第三章",
      title: "复诊日",
      text: "你们短暂地沉默。自动贩卖机的灯光照在他脸上，把他的眼下映得更白。",
      next: "clinic_common_001"
    },
    clinic_common_001: {
      chapter: "第三章",
      title: "复诊日",
      text: "你注意到他另一只手里捏着一张预约单。纸张被折过两次，边角已经有些发软。",
      next: "clinic_common_002"
    },
    clinic_common_002: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“我上午不去课了。”",
      next: "clinic_common_003"
    },
    clinic_common_003: {
      chapter: "第三章",
      title: "复诊日",
      text: "他说完，把预约单往袖口里藏了藏。这个动作很轻，却比昨晚任何一声枪响都更明显。",
      next: "choice_notice_paper"
    },
    choice_notice_paper: {
      chapter: "第三章",
      title: "复诊日",
      text: "你看见了那张预约单。你要怎么做？",
      choices: [
        {
          label: "【不追问】“好。那你路上注意安全。”",
          next: "paper_boundary_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【给选择权】“如果需要人陪，可以叫我。不需要也没关系。”",
          next: "paper_choice_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【直接担心】“你身体不舒服吗？”",
          next: "paper_worry_001",
          effects: { honesty: 1, pressure: 1 }
        }
      ]
    },
    paper_boundary_001: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“嗯。”\n\n他低头看了看矿泉水瓶。\n\n“你不问吗？”",
      next: "paper_boundary_002"
    },
    paper_boundary_002: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "你",
      text: "“你想说的时候再说。”",
      next: "paper_common_001"
    },
    paper_choice_001: {
      chapter: "第三章",
      title: "复诊日",
      text: "忧黎的手指在瓶盖上停了一下，像游戏里人物突然卡住的一帧。",
      next: "paper_choice_002"
    },
    paper_choice_002: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“你这句话很像安全屋。”",
      next: "paper_common_001"
    },
    paper_worry_001: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“不是身体。”\n\n他把视线移开。\n\n“也算身体。”",
      next: "paper_common_001"
    },
    paper_common_001: {
      chapter: "第三章",
      title: "复诊日",
      text: "他终于拧开矿泉水，喝了一小口。然后像下定决心一样，把预约单从袖口里拿出来。",
      next: "paper_common_002"
    },
    paper_common_002: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“复诊。”",
      next: "paper_common_003"
    },
    paper_common_003: {
      chapter: "第三章",
      title: "复诊日",
      text: "两个字落在你们之间，没有配乐，没有特写，也没有任何戏剧化的雷声。只是很普通的一张纸，很普通的一个上午。",
      next: "paper_common_004"
    },
    paper_common_004: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“不是第一次。也不是最后一次。”\n\n“我只是……今天不太想一个人去。”",
      next: "choice_go_clinic"
    },
    choice_go_clinic: {
      chapter: "第三章",
      title: "复诊日",
      text: "他没有直接说“陪我”。但你听懂了。",
      choices: [
        {
          label: "【陪他去】“我上午没重要课。一起走？”",
          next: "go_together_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【先确认】“你确定希望我去吗？”",
          next: "confirm_go_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【远程陪伴】“我可能不能进诊室，但可以在外面等你。”",
          next: "wait_outside_001",
          effects: { support: 2, pressure: -1 }
        }
      ]
    },
    go_together_001: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“你不用逃课。”",
      next: "go_together_002"
    },
    go_together_002: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "你",
      text: "“不是逃课。是路线调整。”",
      next: "clinic_way_001"
    },
    confirm_go_001: {
      chapter: "第三章",
      title: "复诊日",
      text: "忧黎沉默了一会儿，认真地点了点头。",
      next: "confirm_go_002"
    },
    confirm_go_002: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“嗯。希望。”",
      next: "clinic_way_001"
    },
    wait_outside_001: {
      chapter: "第三章",
      title: "复诊日",
      speaker: "忧黎",
      text: "“这样就够了。”\n\n他说。\n\n“真的。”",
      next: "clinic_way_001"
    },
    clinic_way_001: {
      chapter: "第三章",
      title: "去医院的路",
      text: "去医院的路上，你们没有聊游戏。公交车摇摇晃晃，窗外的城市像一张被雨水擦过的地图。",
      next: "clinic_way_002"
    },
    clinic_way_002: {
      chapter: "第三章",
      title: "去医院的路",
      speaker: "忧黎",
      text: "“我以前不太喜欢别人陪。”",
      next: "clinic_way_003"
    },
    clinic_way_003: {
      chapter: "第三章",
      title: "去医院的路",
      speaker: "你",
      text: "“为什么？”",
      next: "clinic_way_004"
    },
    clinic_way_004: {
      chapter: "第三章",
      title: "去医院的路",
      speaker: "忧黎",
      text: "“因为别人会想赢。”",
      next: "clinic_way_005"
    },
    clinic_way_005: {
      chapter: "第三章",
      title: "去医院的路",
      text: "你一时没听懂。",
      next: "clinic_way_006"
    },
    clinic_way_006: {
      chapter: "第三章",
      title: "去医院的路",
      speaker: "忧黎",
      text: "“想赢过我的低落，赢过我的失眠，赢过我的复诊记录。”\n\n“好像只要赢了，我就会变成一个正常掉落物。”",
      next: "clinic_way_007"
    },
    clinic_way_007: {
      chapter: "第三章",
      title: "去医院的路",
      text: "他说得很平静。但你知道，平静有时候不是没事，只是一个人把枪口压得很稳。",
      next: "choice_no_win"
    },
    choice_no_win: {
      chapter: "第三章",
      title: "去医院的路",
      text: "你想告诉他，你不是来赢的。",
      choices: [
        {
          label: "【并肩】“我不是来赢的。我是来排你旁边的。”",
          next: "no_win_side_001",
          effects: { trust: 1, support: 2 }
        },
        {
          label: "【诚实】“我可能也会做错，但我会学。”",
          next: "no_win_learn_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【轻声】“你不是掉落物。”",
          next: "no_win_notloot_001",
          effects: { trust: 1, honesty: 1 }
        }
      ]
    },
    no_win_side_001: {
      chapter: "第三章",
      title: "去医院的路",
      speaker: "忧黎",
      text: "“排我旁边？”\n\n他想了想。\n\n“那你要小心，我匹配时间很长。”",
      next: "hospital_001"
    },
    no_win_learn_001: {
      chapter: "第三章",
      title: "去医院的路",
      speaker: "忧黎",
      text: "“学费很贵。”\n\n“不是钱。”",
      next: "hospital_001"
    },
    no_win_notloot_001: {
      chapter: "第三章",
      title: "去医院的路",
      text: "忧黎看向窗外。玻璃上映出他很浅的表情。",
      next: "no_win_notloot_002"
    },
    no_win_notloot_002: {
      chapter: "第三章",
      title: "去医院的路",
      speaker: "忧黎",
      text: "“嗯。”\n\n“我知道。只是有时候会忘。”",
      next: "hospital_001"
    },
    hospital_001: {
      chapter: "第三章",
      title: "候诊区",
      text: "医院的候诊区比你想象中安静。叫号屏幕每隔一会儿跳动一次，像游戏里刷新任务。",
      next: "hospital_002"
    },
    hospital_002: {
      chapter: "第三章",
      title: "候诊区",
      text: "忧黎坐在你旁边，把预约单摊在膝盖上。你没有偷看诊断，也没有问药名。",
      next: "hospital_003"
    },
    hospital_003: {
      chapter: "第三章",
      title: "候诊区",
      speaker: "忧黎",
      text: "“其实我有点怕医生问我最近怎么样。”",
      next: "hospital_004"
    },
    hospital_004: {
      chapter: "第三章",
      title: "候诊区",
      speaker: "你",
      text: "“为什么？”",
      next: "hospital_005"
    },
    hospital_005: {
      chapter: "第三章",
      title: "候诊区",
      speaker: "忧黎",
      text: "“因为我不知道怎么回答。”\n\n“说好，好像骗人。说不好，又好像我这段时间什么都没做成。”",
      next: "choice_waiting_room"
    },
    choice_waiting_room: {
      chapter: "第三章",
      title: "候诊区",
      text: "你看见他的手指慢慢收紧。",
      choices: [
        {
          label: "【具体化】“可以说：有几天不好，但今天你来了。”",
          next: "waiting_specific_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【肯定】“来复诊本身就是在做事。”",
          next: "waiting_affirm_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【陪他沉默】什么都不说，只把矿泉水递给他。",
          next: "waiting_silence_001",
          effects: { pressure: -1, support: 1 }
        }
      ]
    },
    waiting_specific_001: {
      chapter: "第三章",
      title: "候诊区",
      speaker: "忧黎",
      text: "“有几天不好，但今天我来了。”\n\n他小声重复了一遍，像在给自己试麦。",
      next: "call_number_001"
    },
    waiting_affirm_001: {
      chapter: "第三章",
      title: "候诊区",
      text: "忧黎看着你，眼神有一点发愣。",
      next: "waiting_affirm_002"
    },
    waiting_affirm_002: {
      chapter: "第三章",
      title: "候诊区",
      speaker: "忧黎",
      text: "“你这个人……”\n\n“报点还挺准。”",
      next: "call_number_001"
    },
    waiting_silence_001: {
      chapter: "第三章",
      title: "候诊区",
      text: "他接过水，没有道谢。只是把肩膀慢慢放低了一点。",
      next: "call_number_001"
    },
    call_number_001: {
      chapter: "第三章",
      title: "候诊区",
      text: "屏幕上跳出他的号码。",
      next: "call_number_002"
    },
    call_number_002: {
      chapter: "第三章",
      title: "候诊区",
      speaker: "忧黎",
      text: "“我进去了。”",
      next: "call_number_003"
    },
    call_number_003: {
      chapter: "第三章",
      title: "候诊区",
      speaker: "你",
      text: "“我在外面。”",
      next: "call_number_004"
    },
    call_number_004: {
      chapter: "第三章",
      title: "候诊区",
      text: "他点点头，走进诊室。门关上的那一刻，你忽然意识到，陪伴有时候不是闯进去，而是在门外稳定地存在。",
      next: "outside_001"
    },
    outside_001: {
      chapter: "第三章",
      title: "门外",
      text: "你坐在候诊区，手机屏幕亮了一下。是B站推送。",
      next: "outside_002"
    },
    outside_002: {
      chapter: "第三章",
      title: "门外",
      text: "忧黎official 更新了动态。发布时间是昨晚两点十六分。",
      next: "outside_003"
    },
    outside_003: {
      chapter: "第三章",
      title: "门外",
      speaker: "忧黎official",
      text: "“有时候觉得自己像撤离失败的队友。谢谢今晚没有被放弃。”",
      next: "outside_004"
    },
    outside_004: {
      chapter: "第三章",
      title: "门外",
      text: "评论区已经有几十条回复。有人问他是不是遇到好队友了，有人发猫猫抱抱表情，也有人开玩笑说主播终于脱单了。",
      next: "outside_005"
    },
    outside_005: {
      chapter: "第三章",
      title: "门外",
      text: "你手指停在评论框上。这里是他的公开账号，也是他的私人缝隙。",
      next: "choice_bili_comment"
    },
    choice_bili_comment: {
      chapter: "第三章",
      title: "门外",
      text: "你要留言吗？",
      choices: [
        {
          label: "【不留言】不在公开区暴露自己。",
          next: "comment_none_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【普通粉丝】“主播加油，能撤就好。”",
          next: "comment_fan_001",
          effects: { distance: 1, support: 1 }
        },
        {
          label: "【暗号】“看前面。”",
          next: "comment_code_001",
          effects: { honesty: 1, trust: 1 }
        }
      ]
    },
    comment_none_001: {
      chapter: "第三章",
      title: "门外",
      text: "你关掉评论框。不是每一句想说的话都需要放到人群里。",
      next: "after_clinic_001"
    },
    comment_fan_001: {
      chapter: "第三章",
      title: "门外",
      text: "你发出评论。几秒后，评论区多了一条很普通的鼓励。普通到不会给他添麻烦。",
      next: "after_clinic_001"
    },
    comment_code_001: {
      chapter: "第三章",
      title: "门外",
      text: "你打下那三个字，又删掉，又重新打上。最后还是发了出去。",
      next: "comment_code_002"
    },
    comment_code_002: {
      chapter: "第三章",
      title: "门外",
      text: "它像一颗很小的烟雾弹，落在公开的评论区里，却只有你们知道白雾后面藏着什么。",
      next: "after_clinic_001"
    },
    after_clinic_001: {
      chapter: "第三章",
      title: "门外",
      text: "四十分钟后，诊室门打开。忧黎走出来，表情看不出轻松，也看不出糟糕。",
      next: "after_clinic_002"
    },
    after_clinic_002: {
      chapter: "第三章",
      title: "门外",
      speaker: "忧黎",
      text: "“调整了一点药。”\n\n“医生说，最近能维持作息就先维持作息。”",
      next: "after_clinic_003"
    },
    after_clinic_003: {
      chapter: "第三章",
      title: "门外",
      text: "他说得像在复述任务目标。你知道自己不需要评价它，不需要把它包装成励志故事。",
      next: "choice_after_doctor"
    },
    choice_after_doctor: {
      chapter: "第三章",
      title: "门外",
      text: "你应该怎么接住这句话？",
      choices: [
        {
          label: "【现实支持】“那今天先吃饭，再回去休息？”",
          next: "doctor_meal_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【尊重决定】“你想现在回学校，还是在这边坐一会儿？”",
          next: "doctor_choice_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【轻轻吐槽】“任务目标：吃饭、睡觉、别硬压。”",
          next: "doctor_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    doctor_meal_001: {
      chapter: "第三章",
      title: "门外",
      speaker: "忧黎",
      text: "“吃饭可以。”\n\n“但我想吃清淡一点的。”",
      next: "walk_back_001"
    },
    doctor_choice_001: {
      chapter: "第三章",
      title: "门外",
      speaker: "忧黎",
      text: "“坐一会儿。”\n\n他看向你。\n\n“十分钟。”",
      next: "walk_back_001"
    },
    doctor_joke_001: {
      chapter: "第三章",
      title: "门外",
      text: "忧黎很轻地笑了一下。",
      next: "doctor_joke_002"
    },
    doctor_joke_002: {
      chapter: "第三章",
      title: "门外",
      speaker: "忧黎",
      text: "“别硬压这个版本答案可以做一期视频。”",
      next: "walk_back_001"
    },
    walk_back_001: {
      chapter: "第三章",
      title: "回程",
      text: "回程时天色亮了一点。忧黎坐在靠窗的位置，手里拿着医院开的单子，没有再把它藏起来。",
      next: "walk_back_002"
    },
    walk_back_002: {
      chapter: "第三章",
      title: "回程",
      speaker: "忧黎",
      text: "“今天麻烦你了。”",
      next: "walk_back_003"
    },
    walk_back_003: {
      chapter: "第三章",
      title: "回程",
      speaker: "你",
      text: "“不是麻烦。”",
      next: "walk_back_004"
    },
    walk_back_004: {
      chapter: "第三章",
      title: "回程",
      speaker: "忧黎",
      text: "“那是什么？”",
      next: "choice_what_is_it"
    },
    choice_what_is_it: {
      chapter: "第三章",
      title: "回程",
      text: "不是麻烦。那这到底是什么？",
      choices: [
        {
          label: "【队友】“队友正常补位。”",
          next: "it_teammate_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【朋友】“朋友之间可以这样。”",
          next: "it_friend_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【还说不清】“我也还在想。”",
          next: "it_unsure_001",
          effects: { honesty: 2 }
        }
      ]
    },
    it_teammate_001: {
      chapter: "第三章",
      title: "回程",
      speaker: "忧黎",
      text: "“队友。”\n\n他重复了一遍。\n\n“这个词不错。”",
      next: "room_001"
    },
    it_friend_001: {
      chapter: "第三章",
      title: "回程",
      speaker: "忧黎",
      text: "“朋友……”\n\n他像是在给这个词调参数。\n\n“可以。”",
      next: "room_001"
    },
    it_unsure_001: {
      chapter: "第三章",
      title: "回程",
      speaker: "忧黎",
      text: "“那先别急着命名。”\n\n“有些东西命名太早，会紧张。”",
      next: "room_001"
    },
    room_001: {
      chapter: "第三章",
      title: "补光灯",
      text: "晚上，忧黎照常开了直播录素材。你没有进语音，只是挂在他的直播间里。",
      next: "room_002"
    },
    room_002: {
      chapter: "第三章",
      title: "补光灯",
      text: "他的画面依旧没有露脸。桌面边缘能看见一点暖色补光灯，和一只贴着创可贴的手。",
      next: "room_003"
    },
    room_003: {
      chapter: "第三章",
      title: "补光灯",
      speaker: "忧黎official",
      text: "“今天不打高强度。”\n\n“讲一把撤离路线。”",
      next: "room_004"
    },
    room_004: {
      chapter: "第三章",
      title: "补光灯",
      text: "弹幕有人问：主播今天声音怎么这么温柔？",
      next: "room_005"
    },
    room_005: {
      chapter: "第三章",
      title: "补光灯",
      text: "忧黎停顿了一下。你几乎能想象他垂下眼睛的样子。",
      next: "room_006"
    },
    room_006: {
      chapter: "第三章",
      title: "补光灯",
      speaker: "忧黎official",
      text: "“因为今天撤出来了。”",
      next: "room_007"
    },
    room_007: {
      chapter: "第三章",
      title: "补光灯",
      text: "你坐在屏幕另一端，忽然觉得这句话很轻，也很重。",
      next: "room_008"
    },
    room_008: {
      chapter: "第三章",
      title: "补光灯",
      text: "直播结束前，他照例说晚安。然后又多说了一句。",
      next: "room_009"
    },
    room_009: {
      chapter: "第三章",
      title: "补光灯",
      speaker: "忧黎official",
      text: "“如果你今天也只是勉强撤离，那也算撤离成功。”",
      next: "demo_end_002"
    },
    demo_end_002: {
      chapter: "Demo 3 完成",
      title: "复诊日",
      text: "第三版 Demo 到这里结束。忧黎没有被治愈，也没有被拯救；但今天，他不是一个人去复诊，也不是一个人撤离。",
      unlockEnding: "ending_ch3",
      next: "demo_end_003"
    },
    demo_end_003: {
      chapter: "第四章",
      title: "旧视频",
      text: "你原本以为，复诊日之后，一切会变得更容易一点。",
      next: "old_video_001"
    },
    old_video_001: {
      chapter: "第四章",
      title: "旧视频",
      text: "事实并不是。生活不会因为一次陪伴就自动调低难度，作息也不会因为一句晚安就恢复满血。",
      next: "old_video_002"
    },
    old_video_002: {
      chapter: "第四章",
      title: "旧视频",
      text: "接下来的几天，忧黎还是会发视频，还是会在课堂上坐在靠窗的位置，只是有时候回复很慢。",
      next: "old_video_003"
    },
    old_video_003: {
      chapter: "第四章",
      title: "旧视频",
      text: "慢到你发出“今晚打吗”之后，聊天框上方的“对方正在输入”出现又消失，像一盏反复接触不良的灯。",
      next: "old_video_004"
    },
    old_video_004: {
      chapter: "第四章",
      title: "旧视频",
      speaker: "忧黎",
      text: "“今天不打。”",
      next: "old_video_005"
    },
    old_video_005: {
      chapter: "第四章",
      title: "旧视频",
      text: "过了两分钟，他又发来一条。",
      next: "old_video_006"
    },
    old_video_006: {
      chapter: "第四章",
      title: "旧视频",
      speaker: "忧黎",
      text: "“不是不想和你打。”",
      next: "choice_no_game_reply"
    },
    choice_no_game_reply: {
      chapter: "第四章",
      title: "旧视频",
      text: "你盯着这句话。你知道它背后可能藏着很多没说出口的解释。",
      choices: [
        {
          label: "【稳住边界】“不用解释。你休息就好。”",
          next: "nogame_boundary_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【表达想念】“我知道。只是会有点想和你说话。”",
          next: "nogame_miss_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【换个方式】“不打也行，要不要只挂语音？”",
          next: "nogame_voice_001",
          effects: { support: 1, trust: 1 }
        }
      ]
    },
    nogame_boundary_001: {
      chapter: "第四章",
      title: "旧视频",
      speaker: "忧黎",
      text: "“嗯。”\n\n“谢谢你不把我当任务。”",
      next: "old_video_common_001"
    },
    nogame_miss_001: {
      chapter: "第四章",
      title: "旧视频",
      text: "聊天框安静了很久。你差点以为自己说得太直。",
      next: "nogame_miss_002"
    },
    nogame_miss_002: {
      chapter: "第四章",
      title: "旧视频",
      speaker: "忧黎",
      text: "“我也是。”\n\n“但我今天说话会很卡。”",
      next: "old_video_common_001"
    },
    nogame_voice_001: {
      chapter: "第四章",
      title: "旧视频",
      speaker: "忧黎",
      text: "“可以。”\n\n“但如果我不说话，不是挂你。”",
      next: "old_video_common_001"
    },
    old_video_common_001: {
      chapter: "第四章",
      title: "旧视频",
      text: "那晚，你没有和他开游戏。你打开了他的B站主页，从最早的视频一条条往后翻。",
      next: "old_video_common_002"
    },
    old_video_common_002: {
      chapter: "第四章",
      title: "旧视频",
      text: "第一个月，他的视频标题都很普通：配装思路、路线复盘、撤离点教学。播放量不高，弹幕也很少。",
      next: "old_video_common_003"
    },
    old_video_common_003: {
      chapter: "第四章",
      title: "旧视频",
      text: "直到你翻到一条已经隐藏在合集深处的视频。标题是：《不要硬压》。",
      next: "old_video_common_004"
    },
    old_video_common_004: {
      chapter: "第四章",
      title: "旧视频",
      text: "封面很简陋，只有游戏里的仓库门和一行白字：能撤就撤。",
      next: "old_video_common_005"
    },
    old_video_common_005: {
      chapter: "第四章",
      title: "旧视频",
      text: "你点开。视频开头沉默了整整七秒。然后是忧黎比现在更青涩、更低的声音。",
      next: "old_video_common_006"
    },
    old_video_common_006: {
      chapter: "第四章",
      title: "旧视频",
      speaker: "旧视频里的忧黎",
      text: "“这期不是教学。”\n\n“只是想说，如果状态不好，不要硬压。”",
      next: "old_video_common_007"
    },
    old_video_common_007: {
      chapter: "第四章",
      title: "旧视频",
      text: "画面里，他的角色没有进高价值区，只是在地图边缘绕了一圈，最后带着几件普通物资撤离。",
      next: "old_video_common_008"
    },
    old_video_common_008: {
      chapter: "第四章",
      title: "旧视频",
      speaker: "旧视频里的忧黎",
      text: "“有时候撤离成功不是因为赚了多少。”\n\n“是因为你明明很想倒在原地，但还是走到了出口。”",
      next: "old_video_common_009"
    },
    old_video_common_009: {
      chapter: "第四章",
      title: "旧视频",
      text: "你忽然明白，昨晚直播最后那句话并不是临时想到的。那是他很早以前就对自己说过的话。",
      next: "old_video_common_010"
    },
    old_video_common_010: {
      chapter: "第四章",
      title: "旧视频",
      text: "视频进度条走到最后，屏幕上弹出相关推荐。你却没有马上关掉。",
      next: "old_video_common_011"
    },
    old_video_common_011: {
      chapter: "第四章",
      title: "旧视频",
      text: "评论区最底部，有一条两年前的置顶评论。账号名不是忧黎official，而是另一个ID。",
      next: "main_id_001"
    },
    main_id_001: {
      chapter: "第四章",
      title: "主号",
      text: "Li_QAQ_main。",
      next: "main_id_002"
    },
    main_id_002: {
      chapter: "第四章",
      title: "主号",
      speaker: "Li_QAQ_main",
      text: "“如果哪天有人翻到这里，说明我至少留下了一条撤离路线。”",
      next: "main_id_003"
    },
    main_id_003: {
      chapter: "第四章",
      title: "主号",
      text: "你点进那个账号。主页几乎是空的，头像是一张灰色默认图，投稿为零，关注列表不可见。",
      next: "main_id_004"
    },
    main_id_004: {
      chapter: "第四章",
      title: "主号",
      text: "但动态栏里有几条很旧的文字。它们没有游戏术语，没有配装表，像一个人把最糟糕的夜晚折起来，塞进没人会看的角落。",
      next: "main_id_005"
    },
    main_id_005: {
      chapter: "第四章",
      title: "主号",
      text: "你意识到自己可能闯进了忧黎没有准备好给你看的房间。",
      next: "choice_main_account"
    },
    choice_main_account: {
      chapter: "第四章",
      title: "主号",
      text: "你要继续看吗？",
      choices: [
        {
          label: "【立刻退出】这是他的私人空间。",
          next: "main_exit_001",
          effects: { support: 2, trust: 1, pressure: -1 }
        },
        {
          label: "【只看置顶】只看最上面那条，确认没有危险信息。",
          next: "main_pin_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【继续下翻】你太担心他了，想知道更多。",
          next: "main_scroll_001",
          effects: { pressure: 2, distance: 1 }
        }
      ]
    },
    main_exit_001: {
      chapter: "第四章",
      title: "主号",
      text: "你退出了主页。屏幕回到旧视频的评论区，像从一扇门前安静地退后半步。",
      next: "main_exit_002"
    },
    main_exit_002: {
      chapter: "第四章",
      title: "主号",
      text: "担心没有消失，但你把它放在了边界之外。",
      next: "message_after_main_001"
    },
    main_pin_001: {
      chapter: "第四章",
      title: "主号",
      text: "你只看了置顶。那是一条很短的动态。",
      next: "main_pin_002"
    },
    main_pin_002: {
      chapter: "第四章",
      title: "主号",
      speaker: "Li_QAQ_main",
      text: "“如果状态很差，请先联系医生或者身边可信任的人。不要把互联网当急救箱。”",
      next: "main_pin_003"
    },
    main_pin_003: {
      chapter: "第四章",
      title: "主号",
      text: "你松了一口气，又因为这口气而有些难过。原来他早就知道怎么提醒别人，却未必总能提醒自己。",
      next: "message_after_main_001"
    },
    main_scroll_001: {
      chapter: "第四章",
      title: "主号",
      text: "你继续往下翻。每一条动态都很短，却像在深水里摸到一截冰冷的栏杆。",
      next: "main_scroll_002"
    },
    main_scroll_002: {
      chapter: "第四章",
      title: "主号",
      text: "越看，你越觉得自己不该继续。可担心像一种失控的自动寻路，把你往更深处带。",
      next: "main_scroll_003"
    },
    main_scroll_003: {
      chapter: "第四章",
      title: "主号",
      text: "直到你看见一条动态：\n\n“被关心有时候也很累。因为我会害怕自己不能回报。”",
      next: "main_scroll_004"
    },
    main_scroll_004: {
      chapter: "第四章",
      title: "主号",
      text: "你终于停下。不是因为看够了，而是因为这句话像一面镜子。",
      next: "message_after_main_001"
    },
    message_after_main_001: {
      chapter: "第四章",
      title: "未发送消息",
      text: "聊天软件里，忧黎的头像安静地停在列表顶端。你打开对话框，输入又删除。",
      next: "message_after_main_002"
    },
    message_after_main_002: {
      chapter: "第四章",
      title: "未发送消息",
      text: "你想问他：你还好吗？想问他：那个主号是你吗？想问他：我是不是知道得太多了？",
      next: "choice_send_message"
    },
    choice_send_message: {
      chapter: "第四章",
      title: "未发送消息",
      text: "最后，你决定发什么？",
      choices: [
        {
          label: "【普通问候】“今天早点睡。晚安。”",
          next: "send_goodnight_001",
          effects: { support: 1, pressure: -1 }
        },
        {
          label: "【诚实但不逼问】“我看了你很早的视频。有点想抱抱那时候的你。”",
          next: "send_oldvideo_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【直接摊牌】“Li_QAQ_main 是你吗？”",
          next: "send_main_001",
          effects: { honesty: 1, pressure: 2 }
        }
      ]
    },
    send_goodnight_001: {
      chapter: "第四章",
      title: "未发送消息",
      text: "你发出晚安。没有提旧视频，没有提主号。只是把一盏灯放在门外。",
      next: "reply_late_001"
    },
    send_oldvideo_001: {
      chapter: "第四章",
      title: "未发送消息",
      text: "消息发出后，你的心跳快了一点。它没有追问，却也没有假装什么都没发生。",
      next: "reply_late_001"
    },
    send_main_001: {
      chapter: "第四章",
      title: "未发送消息",
      text: "你发出问题。发送成功的瞬间，你就后悔得像踩响了不该碰的警报。",
      next: "reply_late_001"
    },
    reply_late_001: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "凌晨一点二十三分，手机震了一下。",
      next: "reply_late_002"
    },
    reply_late_002: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“我今天没睡着。”",
      next: "reply_late_003"
    },
    reply_late_003: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "你几乎立刻坐起来。窗外很安静，宿舍里只有空调运行的声音。",
      next: "reply_late_004"
    },
    reply_late_004: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“不是很危险的那种。”\n\n“只是脑子停不下来。”",
      next: "choice_late_reply"
    },
    choice_late_reply: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "你该怎么回复这个凌晨一点的忧黎？",
      choices: [
        {
          label: "【陪他落地】“我们先做一件很小的事：喝水，然后把灯调暗。”",
          next: "late_ground_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【确认安全】“你现在安全吗？身边有没有会伤到自己的东西？”",
          next: "late_safety_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【开语音】“要不要我陪你挂语音，不说话也行。”",
          next: "late_voice_001",
          effects: { trust: 1, support: 1 }
        }
      ]
    },
    late_ground_001: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“好。”\n\n三分钟后。\n\n“喝了。灯也关小了。”",
      next: "late_common_001"
    },
    late_safety_001: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "这句话发出去时，你很紧张。可你知道，比起害怕冒犯，确认安全更重要。",
      next: "late_safety_002"
    },
    late_safety_002: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“安全。”\n\n“我知道你为什么问。谢谢。”",
      next: "late_common_001"
    },
    late_voice_001: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "语音电话接通了。你们谁都没有先说话。",
      next: "late_voice_002"
    },
    late_voice_002: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“这样也可以。”\n\n“有人在就可以。”",
      next: "late_common_001"
    },
    late_common_001: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "你没有说“都会好起来的”。你只是陪他把这一小段夜路走完。",
      next: "late_common_002"
    },
    late_common_002: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“我有个以前的号。”",
      next: "late_common_003"
    },
    late_common_003: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "你的指尖停住。",
      next: "late_common_004"
    },
    late_common_004: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“不是秘密。”\n\n“只是我还没想好怎么给别人看。”",
      next: "choice_main_confess"
    },
    choice_main_confess: {
      chapter: "第四章",
      title: "凌晨回复",
      text: "你知道他在说什么。你要怎么回应？",
      choices: [
        {
          label: "【承认边界】“我可能看到了入口，但我会等你愿意带我进去。”",
          next: "confess_wait_001",
          effects: { trust: 2, support: 1 }
        },
        {
          label: "【道歉】“如果我看得太多了，对不起。”",
          next: "confess_sorry_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【坦率】“我会好奇，也会担心。但我不想用担心越界。”",
          next: "confess_honest_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    confess_wait_001: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“入口。”\n\n“这个说法好像副本。”\n\n他停了停。\n\n“那你先在门口等等我。”",
      next: "next_day_001"
    },
    confess_sorry_001: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“不用一直道歉。”\n\n“你不是敌人。”",
      next: "next_day_001"
    },
    confess_honest_001: {
      chapter: "第四章",
      title: "凌晨回复",
      speaker: "忧黎",
      text: "“担心也有边界。”\n\n“你能这么说，我会轻松一点。”",
      next: "next_day_001"
    },
    next_day_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "第二天下午，事情突然失控。",
      next: "next_day_002"
    },
    next_day_002: {
      chapter: "第四章",
      title: "掉马预警",
      text: "某个游戏论坛有人发帖：\n\n《忧黎official是不是以前那个Li_QAQ_main？声音太像了吧》",
      next: "next_day_003"
    },
    next_day_003: {
      chapter: "第四章",
      title: "掉马预警",
      text: "帖子被顶得很快。有人只是吃瓜，有人翻旧动态，有人把那些本该沉在角落里的句子截图搬出来。",
      next: "next_day_004"
    },
    next_day_004: {
      chapter: "第四章",
      title: "掉马预警",
      text: "你给忧黎发消息，没有回复。",
      next: "next_day_005"
    },
    next_day_005: {
      chapter: "第四章",
      title: "掉马预警",
      text: "十分钟后，他的B站动态更新了。",
      next: "next_day_006"
    },
    next_day_006: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎official",
      text: "“旧号是我。请不要继续搬旧动态。谢谢。”",
      next: "next_day_007"
    },
    next_day_007: {
      chapter: "第四章",
      title: "掉马预警",
      text: "这条动态很快被转发。你能想象他打下这些字时的表情：平静、僵硬、像一个人在枪声里努力换弹。",
      next: "choice_public_crisis"
    },
    choice_public_crisis: {
      chapter: "第四章",
      title: "掉马预警",
      text: "你能做的事情有限，但不是没有。",
      choices: [
        {
          label: "【私信他】“我在。你不用立刻处理所有人。”",
          next: "crisis_private_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【帮忙控评】在评论区提醒大家别搬旧动态。",
          next: "crisis_comment_001",
          effects: { support: 1, pressure: 1 }
        },
        {
          label: "【先问需求】“你希望我做什么？私下陪你，还是公开帮忙说话？”",
          next: "crisis_ask_001",
          effects: { honesty: 1, support: 2 }
        }
      ]
    },
    crisis_private_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "消息发出去后，过了很久，他回了一个句号。",
      next: "crisis_private_002"
    },
    crisis_private_002: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“。”\n\n“我看见了。”",
      next: "crisis_common_001"
    },
    crisis_comment_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "你在评论区发了提醒。有人赞同，也有人说你多管闲事。互联网的风向像毒圈，缩得又快又没有道理。",
      next: "crisis_common_001"
    },
    crisis_ask_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "这次他回复得很快。",
      next: "crisis_ask_002"
    },
    crisis_ask_002: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“私下。”\n\n“公开的声音太多了。”",
      next: "crisis_common_001"
    },
    crisis_common_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "傍晚，你在图书馆侧门见到忧黎。那里人少，风从楼缝里穿过去，带着一点潮湿的凉意。",
      next: "crisis_common_002"
    },
    crisis_common_002: {
      chapter: "第四章",
      title: "掉马预警",
      text: "他戴着口罩，鲨鱼夹没有夹稳，几缕黑发散下来。看见你时，他没有说话，只是把手机递给你看。",
      next: "crisis_common_003"
    },
    crisis_common_003: {
      chapter: "第四章",
      title: "掉马预警",
      text: "屏幕上是后台私信。红点多得像地图上密密麻麻的敌人标记。",
      next: "crisis_common_004"
    },
    crisis_common_004: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“我删不完。”",
      next: "choice_phone_help"
    },
    choice_phone_help: {
      chapter: "第四章",
      title: "掉马预警",
      text: "他把手机递过来。你要怎么帮他？",
      choices: [
        {
          label: "【保护隐私】“我不看内容。你可以先关私信通知。”",
          next: "phone_notify_001",
          effects: { trust: 2, support: 1 }
        },
        {
          label: "【一起处理】“我陪你筛，骂人的直接拉黑。”",
          next: "phone_filter_001",
          effects: { support: 2, pressure: 1 }
        },
        {
          label: "【交还选择权】“手机你拿着，我只告诉你怎么设置。”",
          next: "phone_choice_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    phone_notify_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "你没有接手机，只是一步步告诉他在哪里关闭私信通知。",
      next: "phone_notify_002"
    },
    phone_notify_002: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“原来可以先关声音。”",
      next: "phone_common_001"
    },
    phone_filter_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "你接过手机前先问了一句“可以吗”。他点头。你们坐在台阶上，把恶意私信一条条拉黑。",
      next: "phone_filter_002"
    },
    phone_filter_002: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“你拉黑得好果断。”",
      next: "phone_common_001"
    },
    phone_choice_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "他把手机重新握回手里。你坐在旁边，像组队时站在半个身位的位置。",
      next: "phone_choice_002"
    },
    phone_choice_002: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“这样我比较安心。”",
      next: "phone_common_001"
    },
    phone_common_001: {
      chapter: "第四章",
      title: "掉马预警",
      text: "通知终于安静下来。忧黎垂着头，长长地呼出一口气。",
      next: "phone_common_002"
    },
    phone_common_002: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“我不想让你看见那个号。”",
      next: "phone_common_003"
    },
    phone_common_003: {
      chapter: "第四章",
      title: "掉马预警",
      text: "你没有急着解释。因为解释有时候像烟雾弹，能遮住尴尬，也能遮住真正该看的东西。",
      next: "choice_seen_account"
    },
    choice_seen_account: {
      chapter: "第四章",
      title: "掉马预警",
      text: "关于旧号，你要怎么回应？",
      choices: [
        {
          label: "【坦白】“我看见了入口，但没有继续进去。”",
          next: "seen_entrance_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【保护他】“我不会把它当成认识你的捷径。”",
          next: "seen_protect_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【道歉】“对不起，我应该更早告诉你。”",
          next: "seen_sorry_001",
          effects: { honesty: 1, pressure: -1 }
        }
      ]
    },
    seen_entrance_001: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“那你现在还在门口吗？”",
      next: "seen_entrance_002"
    },
    seen_entrance_002: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "你",
      text: "“嗯。等你开门。”",
      next: "library_steps_001"
    },
    seen_protect_001: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“认识我的捷径……”\n\n“那条路其实很绕。”",
      next: "library_steps_001"
    },
    seen_sorry_001: {
      chapter: "第四章",
      title: "掉马预警",
      speaker: "忧黎",
      text: "“我也没有提前告诉你。”\n\n“我们扯平一点？”",
      next: "library_steps_001"
    },
    library_steps_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "图书馆外的灯一盏盏亮起来。忧黎坐在台阶上，终于把口罩拉下来一点。",
      next: "library_steps_002"
    },
    library_steps_002: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“我以前用那个号发过很多不太好的东西。”",
      next: "library_steps_003"
    },
    library_steps_003: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "你",
      text: "“不太好，是指会伤害别人吗？”",
      next: "library_steps_004"
    },
    library_steps_004: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“不是。”\n\n“是会让别人担心。”",
      next: "library_steps_005"
    },
    library_steps_005: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "你看着他的侧脸，忽然觉得他把“让别人担心”说得像一种罪名。",
      next: "choice_worry_is_not_crime"
    },
    choice_worry_is_not_crime: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "你想纠正他，又不想把话说得太重。",
      choices: [
        {
          label: "【温和纠正】“让人担心不是犯罪。”",
          next: "worry_not_crime_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【具体一点】“我担心你，不等于你做错了。”",
          next: "worry_not_fault_001",
          effects: { trust: 1, support: 2 }
        },
        {
          label: "【幽默一点】“真要判，也只能判你今晚必须吃饭。”",
          next: "worry_joke_001",
          effects: { pressure: -1, trust: 1 }
        }
      ]
    },
    worry_not_crime_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“可是会给别人添麻烦。”",
      next: "worry_common_001"
    },
    worry_not_fault_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "忧黎抬头看你。那一眼很短，却像确认你有没有真的这么想。",
      next: "worry_common_001"
    },
    worry_joke_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“这个判决有点重。”\n\n“但可以执行。”",
      next: "worry_common_001"
    },
    worry_common_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "你",
      text: "“麻烦是可以商量的。边界也是。”",
      next: "worry_common_002"
    },
    worry_common_002: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“那如果有一天，我又变得很麻烦呢？”",
      next: "choice_future_trouble"
    },
    choice_future_trouble: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "这个问题没有漂亮答案。你只能给出真实答案。",
      choices: [
        {
          label: "【真实】“我会累，也会需要休息。但我不会因为你需要帮助就讨厌你。”",
          next: "future_real_001",
          effects: { honesty: 2, trust: 2 }
        },
        {
          label: "【承诺边界】“我们可以提前约定：撑不住就找专业的人，不互相硬扛。”",
          next: "future_plan_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【队友比喻】“那就重新分工。不是一个人背满包跑全图。”",
          next: "future_team_001",
          effects: { trust: 1, support: 1 }
        }
      ]
    },
    future_real_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "忧黎安静地听完。你第一次觉得，诚实比安慰更像一把能用的枪。",
      next: "future_common_001"
    },
    future_plan_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“不互相硬扛。”\n\n“这个可以写进队规。”",
      next: "future_common_001"
    },
    future_team_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“那你别捡太多。”\n\n“我也会学着丢东西。”",
      next: "future_common_001"
    },
    future_common_001: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "那天晚上，你们没有解决所有问题。论坛帖子还在，私信红点还会回来，旧号也不会因为一句话就不再刺眼。",
      next: "future_common_002"
    },
    future_common_002: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "但忧黎把手机通知关掉，把口罩收进外套口袋，然后问你附近有没有粥店。",
      next: "future_common_003"
    },
    future_common_003: {
      chapter: "第四章",
      title: "图书馆台阶",
      speaker: "忧黎",
      text: "“判决不是要吃饭吗？”",
      next: "future_common_004"
    },
    future_common_004: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "你笑出来。风从台阶下吹过来，带着一点夜色里的凉。",
      next: "future_common_005"
    },
    future_common_005: {
      chapter: "第四章",
      title: "图书馆台阶",
      text: "忧黎站起身，走在你旁边。不是前面，也不是后面。是旁边。",
      next: "demo4_end_001"
    },
    demo4_end_001: {
      chapter: "Demo 4 完成",
      title: "主号",
      text: "第四版 Demo 到这里结束。你看见了忧黎的旧号，也看见了“关心”这件事真正需要的边界：不是闯入，不是拯救，而是在对方同意的距离里并肩。",
      unlockEnding: "ending_ch4",
      next: "demo4_end_002"
    },
    demo4_end_002: {
      chapter: "第五章",
      title: "双人视频",
      text: "掉马风波后的第三天，论坛热度终于降了一点。不是因为大家都懂得了边界，而是互联网有了新的热闹。",
      next: "video_pair_001"
    },
    video_pair_001: {
      chapter: "第五章",
      title: "双人视频",
      text: "忧黎的B站主页停更了四十八小时。粉丝群里有人担心，有人催更，也有人把他上一条动态反复截图分析。",
      next: "video_pair_002"
    },
    video_pair_002: {
      chapter: "第五章",
      title: "双人视频",
      text: "你没有去看那些分析。你只是每天给他发一条很普通的消息：吃饭了吗，睡了吗，今天风有点大。",
      next: "video_pair_003"
    },
    video_pair_003: {
      chapter: "第五章",
      title: "双人视频",
      speaker: "忧黎",
      text: "“我在剪视频。”",
      next: "video_pair_004"
    },
    video_pair_004: {
      chapter: "第五章",
      title: "双人视频",
      text: "这条消息在晚上八点零三分跳出来。后面跟着一张截图：剪辑软件的时间线密密麻麻，像一张被切碎又重新拼起来的地图。",
      next: "video_pair_005"
    },
    video_pair_005: {
      chapter: "第五章",
      title: "双人视频",
      speaker: "忧黎",
      text: "“想做一期关于组队边界的视频。”\n\n“不是卖惨，也不是回应所有人。”",
      next: "video_pair_006"
    },
    video_pair_006: {
      chapter: "第五章",
      title: "双人视频",
      speaker: "忧黎",
      text: "“只是觉得，应该有人讲一下：队友不是急救箱，也不是负重背包。”",
      next: "choice_video_first_reply"
    },
    choice_video_first_reply: {
      chapter: "第五章",
      title: "双人视频",
      text: "你看着这句话，心里忽然很安静。",
      choices: [
        {
          label: "【支持】“这个主题很好。你不用一次讲完。”",
          next: "video_support_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【参与】“如果需要，我可以帮你看脚本。”",
          next: "video_help_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【担心】“你确定现在做这个不会太累吗？”",
          next: "video_worry_001",
          effects: { honesty: 1, pressure: 1 }
        }
      ]
    },
    video_support_001: {
      chapter: "第五章",
      title: "双人视频",
      speaker: "忧黎",
      text: "“嗯。”\n\n“我想把它剪短一点。不要变成一小时心理讲座。”",
      next: "video_common_001"
    },
    video_help_001: {
      chapter: "第五章",
      title: "双人视频",
      speaker: "忧黎",
      text: "“可以。”\n\n他很快又补了一句。\n\n“但你只看你舒服看的部分。”",
      next: "video_common_001"
    },
    video_worry_001: {
      chapter: "第五章",
      title: "双人视频",
      speaker: "忧黎",
      text: "“会累。”\n\n“所以我想做得慢一点，也做得清楚一点。”",
      next: "video_common_001"
    },
    video_common_001: {
      chapter: "第五章",
      title: "脚本",
      text: "十分钟后，他发来一个在线文档链接。标题很朴素：《组队不是拯救》。",
      next: "script_doc_001"
    },
    script_doc_001: {
      chapter: "第五章",
      title: "脚本",
      text: "文档第一行写着：\n\n“本期不是教学视频。或者说，它教学的不是怎么赢，而是怎么不要把人当成必须赢下来的副本。”",
      next: "script_doc_002"
    },
    script_doc_002: {
      chapter: "第五章",
      title: "脚本",
      text: "你往下看。忧黎把脚本分成三段：确认边界、确认安全、确认自己也有退出权。",
      next: "script_doc_003"
    },
    script_doc_003: {
      chapter: "第五章",
      title: "脚本",
      text: "有些句子旁边被他标了红：太重。太说教。像装懂。删。",
      next: "script_doc_004"
    },
    script_doc_004: {
      chapter: "第五章",
      title: "脚本",
      text: "还有一处空白，被他留了很久。前面写着：这里需要一个真实的队友视角。",
      next: "script_doc_005"
    },
    script_doc_005: {
      chapter: "第五章",
      title: "脚本",
      speaker: "忧黎",
      text: "“你愿意录一小段吗？”\n\n“不露脸，不用真名。变声也可以。”",
      next: "choice_record_voice"
    },
    choice_record_voice: {
      chapter: "第五章",
      title: "脚本",
      text: "他邀请你成为视频的一部分。不是观众，不是评论区，而是真正的一部分。",
      choices: [
        {
          label: "【答应录音】“可以。我录队友视角。”",
          next: "record_yes_001",
          effects: { trust: 2, honesty: 1 }
        },
        {
          label: "【文字参与】“我可以写文字稿，但暂时不想出声。”",
          next: "record_text_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【先确认】“你是希望我帮忙，还是希望我也被看见？”",
          next: "record_confirm_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    record_yes_001: {
      chapter: "第五章",
      title: "脚本",
      speaker: "忧黎",
      text: "“好。”\n\n“我会把你的音轨放得很轻，不让它像被公开处刑。”",
      next: "record_common_001"
    },
    record_text_001: {
      chapter: "第五章",
      title: "脚本",
      speaker: "忧黎",
      text: "“可以。文字也很好。”\n\n“不是所有人都必须开麦。”",
      next: "record_common_001"
    },
    record_confirm_001: {
      chapter: "第五章",
      title: "脚本",
      text: "对面安静了一会儿。你能想象他在屏幕前认真读这句话的样子。",
      next: "record_confirm_002"
    },
    record_confirm_002: {
      chapter: "第五章",
      title: "脚本",
      speaker: "忧黎",
      text: "“都有。”\n\n“但如果你不想被看见，只帮忙也可以。”",
      next: "record_common_001"
    },
    record_common_001: {
      chapter: "第五章",
      title: "录音",
      text: "你坐在宿舍桌前，打开录音软件。屏幕上的红点亮起来，你忽然有点理解忧黎第一次投稿时的紧张。",
      next: "record_common_002"
    },
    record_common_002: {
      chapter: "第五章",
      title: "录音",
      text: "你录了三遍。第一遍太像背书，第二遍声音发抖，第三遍才稍微像你自己。",
      next: "record_common_003"
    },
    record_common_003: {
      chapter: "第五章",
      title: "录音",
      speaker: "你",
      text: "“我觉得好的队友不是永远满状态的人。”\n\n“是知道什么时候该说‘我不行了’，也知道对方说这句话时，不急着把它判成失败的人。”",
      next: "record_common_004"
    },
    record_common_004: {
      chapter: "第五章",
      title: "录音",
      text: "你把音频发过去。五分钟，十分钟，十五分钟。忧黎没有回复。",
      next: "record_common_005"
    },
    record_common_005: {
      chapter: "第五章",
      title: "录音",
      text: "你开始怀疑是不是太矫情。就在你准备撤回时，他发来一条语音。",
      next: "record_common_006"
    },
    record_common_006: {
      chapter: "第五章",
      title: "录音",
      speaker: "忧黎",
      text: "“别撤。”\n\n他的声音很低。\n\n“这段很好。”",
      next: "edit_room_001"
    },
    edit_room_001: {
      chapter: "第五章",
      title: "剪辑室",
      text: "周六下午，你去忧黎宿舍楼下的自习室找他。那里被他临时称为“剪辑室”，其实只有一张靠墙的桌子和两杯无糖茶。",
      next: "edit_room_002"
    },
    edit_room_002: {
      chapter: "第五章",
      title: "剪辑室",
      text: "他的电脑屏幕上，你的音轨被放在第二轨。第一轨是他的声音，第三轨是游戏画面。",
      next: "edit_room_003"
    },
    edit_room_003: {
      chapter: "第五章",
      title: "剪辑室",
      speaker: "忧黎",
      text: "“这里我想接你那句‘不急着判成失败’。”\n\n“然后画面切撤离成功。”",
      next: "edit_room_004"
    },
    edit_room_004: {
      chapter: "第五章",
      title: "剪辑室",
      text: "你看着时间线上的两个声音交错在一起，忽然觉得这很像另一种组队。一个人报点，一个人补位。",
      next: "choice_edit_suggestion"
    },
    choice_edit_suggestion: {
      chapter: "第五章",
      title: "剪辑室",
      text: "你想给这段视频提一点建议。",
      choices: [
        {
          label: "【结构建议】“开头先讲边界，后面再讲陪伴，会更稳。”",
          next: "edit_structure_001",
          effects: { support: 1, honesty: 1 }
        },
        {
          label: "【情绪建议】“这里可以留一点沉默，不用马上配音乐。”",
          next: "edit_silence_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【观众建议】“评论区可能会误解，简介里可以写清楚。”",
          next: "edit_viewer_001",
          effects: { honesty: 1, pressure: -1 }
        }
      ]
    },
    edit_structure_001: {
      chapter: "第五章",
      title: "剪辑室",
      speaker: "忧黎",
      text: "“先边界，后陪伴。”\n\n“像先进安全区，再摸包。”",
      next: "edit_common_001"
    },
    edit_silence_001: {
      chapter: "第五章",
      title: "剪辑室",
      text: "忧黎把音乐轨往后拖了两秒。那两秒沉默落下来，整段话反而有了呼吸。",
      next: "edit_common_001"
    },
    edit_viewer_001: {
      chapter: "第五章",
      title: "剪辑室",
      speaker: "忧黎",
      text: "“简介写清楚。”\n\n“对。免得大家把队友关系当万能药。”",
      next: "edit_common_001"
    },
    edit_common_001: {
      chapter: "第五章",
      title: "剪辑室",
      text: "你们改到傍晚。忧黎很少连续说这么多话，结束时他靠在椅背上，像一台终于完成渲染的电脑。",
      next: "edit_common_002"
    },
    edit_common_002: {
      chapter: "第五章",
      title: "剪辑室",
      speaker: "忧黎",
      text: "“我想把你的名字写进简介。”",
      next: "edit_common_003"
    },
    edit_common_003: {
      chapter: "第五章",
      title: "剪辑室",
      text: "你的心跳漏了一拍。公开的简介不是评论区暗号，那意味着所有人都会知道这期视频里有另一个人。",
      next: "choice_credit_name"
    },
    choice_credit_name: {
      chapter: "第五章",
      title: "剪辑室",
      text: "关于署名，你要怎么决定？",
      choices: [
        {
          label: "【匿名】“写‘一位队友’就好。”",
          next: "credit_anonymous_001",
          effects: { pressure: -1, support: 1 }
        },
        {
          label: "【半公开】“可以写我的游戏ID。”",
          next: "credit_gameid_001",
          effects: { trust: 1, honesty: 1 }
        },
        {
          label: "【反问】“你希望我以什么身份出现？”",
          next: "credit_identity_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    credit_anonymous_001: {
      chapter: "第五章",
      title: "剪辑室",
      speaker: "忧黎",
      text: "“好。”\n\n“匿名也不是退后。是选择合适的掩体。”",
      next: "credit_common_001"
    },
    credit_gameid_001: {
      chapter: "第五章",
      title: "剪辑室",
      speaker: "忧黎",
      text: "“我会只写ID。”\n\n“如果之后你不舒服，我们就改掉。”",
      next: "credit_common_001"
    },
    credit_identity_001: {
      chapter: "第五章",
      title: "剪辑室",
      text: "忧黎没有立刻回答。他低头看着时间线，指尖停在空格键上。",
      next: "credit_identity_002"
    },
    credit_identity_002: {
      chapter: "第五章",
      title: "剪辑室",
      speaker: "忧黎",
      text: "“队友。”\n\n“还有……很重要的人。”",
      next: "credit_common_001"
    },
    credit_common_001: {
      chapter: "第五章",
      title: "发布前",
      text: "视频定在晚上九点发布。标题最终改成：《组队不是拯救：边界、陪伴和撤离权》。",
      next: "publish_001"
    },
    publish_001: {
      chapter: "第五章",
      title: "发布前",
      text: "发布前十分钟，忧黎一直盯着投稿页面。鼠标停在“立即发布”按钮上，迟迟没有按下。",
      next: "publish_002"
    },
    publish_002: {
      chapter: "第五章",
      title: "发布前",
      speaker: "忧黎",
      text: "“如果他们还是只想看热闹呢？”",
      next: "choice_publish_fear"
    },
    choice_publish_fear: {
      chapter: "第五章",
      title: "发布前",
      text: "他问得很轻。这个问题没有绝对安全的答案。",
      choices: [
        {
          label: "【现实】“会有人看热闹。但也会有人真的听见。”",
          next: "fear_real_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【选择权】“你现在不发也可以，撤离权也包括这个。”",
          next: "fear_withdraw_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【并肩】“不管他们怎么说，我和你一起看评论。”",
          next: "fear_together_001",
          effects: { trust: 1, support: 2 }
        }
      ]
    },
    fear_real_001: {
      chapter: "第五章",
      title: "发布前",
      speaker: "忧黎",
      text: "“真的听见。”\n\n他重复了一遍。\n\n“那就够回本了。”",
      next: "publish_common_001"
    },
    fear_withdraw_001: {
      chapter: "第五章",
      title: "发布前",
      text: "忧黎的肩膀松了一点。他没有马上发，也没有马上退。只是把手从鼠标上拿开，喝了一口茶。",
      next: "publish_common_001"
    },
    fear_together_001: {
      chapter: "第五章",
      title: "发布前",
      speaker: "忧黎",
      text: "“你看评论会生气。”\n\n“但我好像会安心。”",
      next: "publish_common_001"
    },
    publish_common_001: {
      chapter: "第五章",
      title: "发布",
      text: "晚上九点整，视频发布。刷新页面的瞬间，播放量从0跳到17，再跳到42。",
      next: "publish_common_002"
    },
    publish_common_002: {
      chapter: "第五章",
      title: "发布",
      text: "第一条弹幕飘过：\n\n“来了。”",
      next: "publish_common_003"
    },
    publish_common_003: {
      chapter: "第五章",
      title: "发布",
      text: "第二条弹幕：\n\n“主播声音听起来好多了。”",
      next: "publish_common_004"
    },
    publish_common_004: {
      chapter: "第五章",
      title: "发布",
      text: "第三条弹幕停在你的音轨出现的地方：\n\n“这位队友说得好温柔。”",
      next: "publish_common_005"
    },
    publish_common_005: {
      chapter: "第五章",
      title: "发布",
      text: "你下意识看向忧黎。他也在看你，像偷偷确认这颗子弹有没有打中你。",
      next: "choice_comment_react"
    },
    choice_comment_react: {
      chapter: "第五章",
      title: "发布",
      text: "你的音轨被观众听见了。你要怎么反应？",
      choices: [
        {
          label: "【轻松】“他们说我温柔，看来麦克风有美化功能。”",
          next: "react_joke_001",
          effects: { pressure: -1, trust: 1 }
        },
        {
          label: "【坦白】“有点紧张，但不是后悔。”",
          next: "react_honest_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【看他】“你呢？你现在感觉怎么样？”",
          next: "react_you_001",
          effects: { support: 1, honesty: 1 }
        }
      ]
    },
    react_joke_001: {
      chapter: "第五章",
      title: "发布",
      speaker: "忧黎",
      text: "“没有。”\n\n“是你本来就这样。”",
      next: "comment_common_001"
    },
    react_honest_001: {
      chapter: "第五章",
      title: "发布",
      speaker: "忧黎",
      text: "“不后悔就好。”\n\n“紧张可以一起紧张。”",
      next: "comment_common_001"
    },
    react_you_001: {
      chapter: "第五章",
      title: "发布",
      speaker: "忧黎",
      text: "“像刚进撤离区。”\n\n“还没完全安全，但倒计时已经开始了。”",
      next: "comment_common_001"
    },
    comment_common_001: {
      chapter: "第五章",
      title: "评论区",
      text: "评论区慢慢堆起来。有夸视频的，有讲自己经历的，也有几条刺眼的阴阳怪气。",
      next: "comment_common_002"
    },
    comment_common_002: {
      chapter: "第五章",
      title: "评论区",
      text: "忧黎看见其中一条：“主播这是找了个情绪保姆？”",
      next: "comment_common_003"
    },
    comment_common_003: {
      chapter: "第五章",
      title: "评论区",
      text: "他的手指停了一下。你能感觉到，那句话没有造成暴击，却打断了他的换弹。",
      next: "choice_bad_comment"
    },
    choice_bad_comment: {
      chapter: "第五章",
      title: "评论区",
      text: "你想处理这条评论。",
      choices: [
        {
          label: "【不争论】“删掉就好，不用把每条恶意都打赢。”",
          next: "bad_delete_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【回应主题】“可以置顶一条：队友不是保姆。”",
          next: "bad_pin_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【保护自己】“今晚评论看到这里就停吧。”",
          next: "bad_stop_001",
          effects: { support: 2, trust: 1 }
        }
      ]
    },
    bad_delete_001: {
      chapter: "第五章",
      title: "评论区",
      text: "忧黎点了删除。动作很快，像终于学会不把每一个敌人都当主线任务。",
      next: "bad_common_001"
    },
    bad_pin_001: {
      chapter: "第五章",
      title: "评论区",
      speaker: "忧黎",
      text: "“队友不是保姆。”\n\n“这句可以放简介第二行。”",
      next: "bad_common_001"
    },
    bad_stop_001: {
      chapter: "第五章",
      title: "评论区",
      text: "你合上电脑前，忧黎没有阻止。屏幕暗下去，你们的脸从反光里退出来。",
      next: "bad_common_001"
    },
    bad_common_001: {
      chapter: "第五章",
      title: "评论区",
      text: "晚上十点半，视频播放量破了一千。弹幕里有人写：\n\n“谢谢，今天我也决定先撤离。”",
      next: "bad_common_002"
    },
    bad_common_002: {
      chapter: "第五章",
      title: "评论区",
      text: "忧黎看着那条弹幕，眼睛很久没有移开。",
      next: "bad_common_003"
    },
    bad_common_003: {
      chapter: "第五章",
      title: "评论区",
      speaker: "忧黎",
      text: "“有人听见了。”",
      next: "after_publish_001"
    },
    after_publish_001: {
      chapter: "第五章",
      title: "发布之后",
      text: "你们走出自习室时，校园里已经很安静。路灯把影子拉长，又在拐角处慢慢叠到一起。",
      next: "after_publish_002"
    },
    after_publish_002: {
      chapter: "第五章",
      title: "发布之后",
      speaker: "忧黎",
      text: "“今天谢谢你。”",
      next: "after_publish_003"
    },
    after_publish_003: {
      chapter: "第五章",
      title: "发布之后",
      speaker: "你",
      text: "“你今天已经谢了很多次。”",
      next: "after_publish_004"
    },
    after_publish_004: {
      chapter: "第五章",
      title: "发布之后",
      speaker: "忧黎",
      text: "“因为我还没找到别的说法。”",
      next: "after_publish_005"
    },
    after_publish_005: {
      chapter: "第五章",
      title: "发布之后",
      text: "他停在路灯下。补光灯不在这里，摄像头也不在这里。没有观众，没有弹幕，只有你们两个人。",
      next: "choice_other_words"
    },
    choice_other_words: {
      chapter: "第五章",
      title: "发布之后",
      text: "你想帮他找到一个别的说法。",
      choices: [
        {
          label: "【慢慢来】“找不到也没关系，可以先欠着。”",
          next: "words_owe_001",
          effects: { pressure: -1, support: 1 }
        },
        {
          label: "【靠近一点】“也可以不用谢，用下次一起吃饭代替。”",
          next: "words_meal_001",
          effects: { trust: 1, honesty: 1 }
        },
        {
          label: "【认真】“如果你想说的是‘我需要你’，也可以。”",
          next: "words_need_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    words_owe_001: {
      chapter: "第五章",
      title: "发布之后",
      speaker: "忧黎",
      text: "“欠着。”\n\n“那我会记账。”",
      next: "words_common_001"
    },
    words_meal_001: {
      chapter: "第五章",
      title: "发布之后",
      speaker: "忧黎",
      text: "“你这是把感谢兑换成饭票。”\n\n“但可以。”",
      next: "words_common_001"
    },
    words_need_001: {
      chapter: "第五章",
      title: "发布之后",
      text: "忧黎的呼吸顿了一下。那句话太直，像夜色里忽然亮起的手电。",
      next: "words_need_002"
    },
    words_need_002: {
      chapter: "第五章",
      title: "发布之后",
      speaker: "忧黎",
      text: "“我不太会说需要。”\n\n“但我今天……确实希望你在。”",
      next: "words_common_001"
    },
    words_common_001: {
      chapter: "第五章",
      title: "发布之后",
      text: "手机又震了一下。忧黎低头看了一眼，是视频后台的新提醒。",
      next: "words_common_002"
    },
    words_common_002: {
      chapter: "第五章",
      title: "发布之后",
      text: "他没有点开。只是把手机倒扣进掌心。",
      next: "words_common_003"
    },
    words_common_003: {
      chapter: "第五章",
      title: "发布之后",
      speaker: "忧黎",
      text: "“今晚先不看了。”\n\n“我想把注意力留给现实。”",
      next: "words_common_004"
    },
    words_common_004: {
      chapter: "第五章",
      title: "发布之后",
      text: "现实是路灯、晚风、你的脚步声，还有忧黎走在你身边时，终于不再急着确认身后有没有追兵。",
      next: "demo5_end_001"
    },
    demo5_end_001: {
      chapter: "Demo 5 完成",
      title: "双人视频",
      text: "第五版 Demo 到这里结束。你们第一次共同完成了一期视频，也第一次把“并肩”从游戏语音、医院候诊区和图书馆台阶，带到了更多人面前。",
      unlockEnding: "ending_ch5",
      next: "demo5_end_002"
    },
    demo5_end_002: {
      chapter: "第六章",
      title: "期末周",
      text: "期末周来的时候，校园像突然被压缩进一张倒计时表。每个人都在赶ddl，连风吹过教学楼走廊都像在催交作业。",
      next: "exam_week_001"
    },
    exam_week_001: {
      chapter: "第六章",
      title: "期末周",
      text: "双人视频的播放量还在涨。它没有爆火到改变世界，但足够让忧黎的后台多出很多长长的私信。",
      next: "exam_week_002"
    },
    exam_week_002: {
      chapter: "第六章",
      title: "期末周",
      text: "有人感谢他，有人讲自己的故事，也有人把全部重量都放到他的评论区，像把背包装满石头递给一个刚学会休息的人。",
      next: "exam_week_003"
    },
    exam_week_003: {
      chapter: "第六章",
      title: "期末周",
      speaker: "忧黎",
      text: "“我好像有点接不住。”",
      next: "exam_week_004"
    },
    exam_week_004: {
      chapter: "第六章",
      title: "期末周",
      text: "这条消息发来时，你正坐在图书馆三楼，面前摊着复习资料。荧光笔划到一半，颜色停在纸页上，像一条没撤出去的路线。",
      next: "choice_heavy_messages"
    },
    choice_heavy_messages: {
      chapter: "第六章",
      title: "期末周",
      text: "你该怎么回应他“接不住”的感觉？",
      choices: [
        {
          label: "【边界提醒】“接不住就先放下。评论区不是你的急救责任。”",
          next: "heavy_boundary_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【一起分担】“要不要我陪你把私信分类，只看必要的？”",
          next: "heavy_sort_001",
          effects: { support: 1, trust: 1 }
        },
        {
          label: "【确认状态】“你现在是累，还是已经开始不安全了？”",
          next: "heavy_safe_001",
          effects: { honesty: 2, support: 1 }
        }
      ]
    },
    heavy_boundary_001: {
      chapter: "第六章",
      title: "期末周",
      speaker: "忧黎",
      text: "“不是我的急救责任。”\n\n“这句我应该贴在显示器边上。”",
      next: "heavy_common_001"
    },
    heavy_sort_001: {
      chapter: "第六章",
      title: "期末周",
      speaker: "忧黎",
      text: "“可以。”\n\n“但今晚先不分类。我怕越分越醒。”",
      next: "heavy_common_001"
    },
    heavy_safe_001: {
      chapter: "第六章",
      title: "期末周",
      text: "你把这句话发出去的时候，手指有点僵。可你已经知道，真正的温柔不是避开危险词。",
      next: "heavy_safe_002"
    },
    heavy_safe_002: {
      chapter: "第六章",
      title: "期末周",
      speaker: "忧黎",
      text: "“累。”\n\n“还安全。”\n\n“谢谢你问得这么直接。”",
      next: "heavy_common_001"
    },
    heavy_common_001: {
      chapter: "第六章",
      title: "期末周",
      text: "你看向桌上的复习资料。明天有一门闭卷，你还剩三章没背。",
      next: "heavy_common_002"
    },
    heavy_common_002: {
      chapter: "第六章",
      title: "期末周",
      text: "而忧黎那边，消息框又变成了“对方正在输入”。你忽然意识到，你也开始接不住了。",
      next: "choice_your_boundary"
    },
    choice_your_boundary: {
      chapter: "第六章",
      title: "你的边界",
      text: "你需要在陪他和照顾自己之间做选择。",
      choices: [
        {
          label: "【诚实说明】“我也在复习，今晚可能只能陪你到十一点。”",
          next: "your_boundary_time_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【硬撑】“没事，你说，我在。”",
          next: "your_boundary_over_001",
          effects: { support: 1, pressure: 2 }
        },
        {
          label: "【共同约定】“我们都先做一小时自己的事，一小时后报平安？”",
          next: "your_boundary_plan_001",
          effects: { support: 2, pressure: -1 }
        }
      ]
    },
    your_boundary_time_001: {
      chapter: "第六章",
      title: "你的边界",
      speaker: "忧黎",
      text: "“好。”\n\n“十一点是撤离倒计时。”",
      next: "boundary_common_001"
    },
    your_boundary_over_001: {
      chapter: "第六章",
      title: "你的边界",
      text: "你发出这句话时很真心。但真心有时候也会变成过载提示，只是你暂时没看见。",
      next: "boundary_common_001"
    },
    your_boundary_plan_001: {
      chapter: "第六章",
      title: "你的边界",
      speaker: "忧黎",
      text: "“一小时后报平安。”\n\n“像双排各自搜一栋楼。”",
      next: "boundary_common_001"
    },
    boundary_common_001: {
      chapter: "第六章",
      title: "你的边界",
      text: "那天晚上，你背完了两章。第三章只背了一半。忧黎在十一点前发来消息：",
      next: "boundary_common_002"
    },
    boundary_common_002: {
      chapter: "第六章",
      title: "你的边界",
      speaker: "忧黎",
      text: "“我关后台了。”\n\n“去洗漱。”",
      next: "boundary_common_003"
    },
    boundary_common_003: {
      chapter: "第六章",
      title: "你的边界",
      text: "你回了一个猫猫点头表情。然后盯着书页上密密麻麻的知识点，突然笑了一下。原来你们都在练习撤离。",
      next: "silent_days_001"
    },
    silent_days_001: {
      chapter: "第六章",
      title: "停更",
      text: "接下来的几天，忧黎没有更新。主页最后一条视频停在《组队不是拯救》，像一扇半开的门。",
      next: "silent_days_002"
    },
    silent_days_002: {
      chapter: "第六章",
      title: "停更",
      text: "你们的聊天也变少了。不是疏远，而是每个人都被期末周按进了自己的地图。",
      next: "silent_days_003"
    },
    silent_days_003: {
      chapter: "第六章",
      title: "停更",
      text: "直到周四晚上，忧黎突然发来一张照片。",
      next: "silent_days_004"
    },
    silent_days_004: {
      chapter: "第六章",
      title: "停更",
      text: "照片里是他的桌面：药盒、复习资料、没喝完的水，还有一张写着“停更说明”的草稿纸。",
      next: "silent_days_005"
    },
    silent_days_005: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“我想发停更。”\n\n“但又怕他们觉得我又出事了。”",
      next: "choice_hiatus_notice"
    },
    choice_hiatus_notice: {
      chapter: "第六章",
      title: "停更",
      text: "你想帮他写停更说明。",
      choices: [
        {
          label: "【简短版】“期末复习，暂缓更新。大家也早点休息。”",
          next: "hiatus_short_001",
          effects: { pressure: -1, support: 1 }
        },
        {
          label: "【边界版】“近期不回复私信，但谢谢大家。紧急情况请找专业渠道。”",
          next: "hiatus_boundary_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【真实版】“状态一般，但安全。期末后回来。”",
          next: "hiatus_real_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    hiatus_short_001: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“这个像正常大学生。”\n\n“我努力扮演一下。”",
      next: "hiatus_common_001"
    },
    hiatus_boundary_001: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“不回复私信。”\n\n“写出来好像会轻一点。”",
      next: "hiatus_common_001"
    },
    hiatus_real_001: {
      chapter: "第六章",
      title: "停更",
      text: "忧黎把“安全”两个字圈了出来。",
      next: "hiatus_real_002"
    },
    hiatus_real_002: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“这个可以写。”\n\n“我也想让你看见。”",
      next: "hiatus_common_001"
    },
    hiatus_common_001: {
      chapter: "第六章",
      title: "停更",
      text: "最终，他发了一条很短的动态：\n\n“期末周暂缓更新。近期不回复私信。安全，勿担心。大家也注意休息。”",
      next: "hiatus_common_002"
    },
    hiatus_common_002: {
      chapter: "第六章",
      title: "停更",
      text: "评论区比你想象中平静。有人说考试加油，有人发猫猫睡觉，也有人说：主播终于学会请假了。",
      next: "hiatus_common_003"
    },
    hiatus_common_003: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“学会请假。”\n\n“这也算技能点吗？”",
      next: "choice_skill_point"
    },
    choice_skill_point: {
      chapter: "第六章",
      title: "停更",
      text: "你想怎么回答这个问题？",
      choices: [
        {
          label: "【肯定】“算，而且是高级技能。”",
          next: "skill_yes_001",
          effects: { support: 1, trust: 1 }
        },
        {
          label: "【玩梗】“隐藏成就：主播主动撤离。”",
          next: "skill_joke_001",
          effects: { pressure: -1, trust: 1 }
        },
        {
          label: "【认真】“能说‘我现在不行’，很难也很重要。”",
          next: "skill_serious_001",
          effects: { honesty: 1, support: 2 }
        }
      ]
    },
    skill_yes_001: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“高级技能。”\n\n“那我熟练度还很低。”",
      next: "exam_day_001"
    },
    skill_joke_001: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“成就图标应该是一只趴着的猫。”",
      next: "exam_day_001"
    },
    skill_serious_001: {
      chapter: "第六章",
      title: "停更",
      text: "忧黎隔了很久才回复。",
      next: "skill_serious_002"
    },
    skill_serious_002: {
      chapter: "第六章",
      title: "停更",
      speaker: "忧黎",
      text: "“那我今天说了。”\n\n“我现在不行，但我还在。”",
      next: "exam_day_001"
    },
    exam_day_001: {
      chapter: "第六章",
      title: "考试日",
      text: "第一门考试那天，天空灰得像没加载完成的贴图。你在考场门口遇见忧黎。",
      next: "exam_day_002"
    },
    exam_day_002: {
      chapter: "第六章",
      title: "考试日",
      text: "他手里拿着透明笔袋，黑色外套拉链没拉好，鲨鱼夹今天换成了深蓝色。",
      next: "exam_day_003"
    },
    exam_day_003: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“我昨晚睡了四个小时。”",
      next: "exam_day_004"
    },
    exam_day_004: {
      chapter: "第六章",
      title: "考试日",
      text: "他说这句话时没有求安慰，只像是在报一个客观数值。",
      next: "choice_before_exam"
    },
    choice_before_exam: {
      chapter: "第六章",
      title: "考试日",
      text: "距离进考场还有五分钟。你要说什么？",
      choices: [
        {
          label: "【现实鼓励】“四小时也能打完这局，先把会的拿下。”",
          next: "before_exam_real_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【照顾身体】“考完先吃饭，不要直接回去睡死。”",
          next: "before_exam_body_001",
          effects: { support: 1, pressure: -1 }
        },
        {
          label: "【并肩】“我也紧张。一起进场？”",
          next: "before_exam_side_001",
          effects: { honesty: 1, trust: 1 }
        }
      ]
    },
    before_exam_real_001: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“先把会的拿下。”\n\n“这个指挥我听。”",
      next: "exam_common_001"
    },
    before_exam_body_001: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“你现在像我的作息插件。”\n\n“但这个提醒有效。”",
      next: "exam_common_001"
    },
    before_exam_side_001: {
      chapter: "第六章",
      title: "考试日",
      text: "忧黎看了你一眼，点点头。",
      next: "before_exam_side_002"
    },
    before_exam_side_002: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“一起进。”",
      next: "exam_common_001"
    },
    exam_common_001: {
      chapter: "第六章",
      title: "考试日",
      text: "考试铃响起。你们被分到不同排。你坐下时，余光看见忧黎低头写名字，动作很稳。",
      next: "exam_common_002"
    },
    exam_common_002: {
      chapter: "第六章",
      title: "考试日",
      text: "两个小时后，你走出考场，脑子像被榨干的海绵。忧黎站在楼梯口，手里攥着准考证。",
      next: "exam_common_003"
    },
    exam_common_003: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“应该能过。”",
      next: "exam_common_004"
    },
    exam_common_004: {
      chapter: "第六章",
      title: "考试日",
      text: "他说“能过”的时候，眼睛却没有跟着亮起来。",
      next: "choice_after_exam_mood"
    },
    choice_after_exam_mood: {
      chapter: "第六章",
      title: "考试日",
      text: "你察觉到他状态不太对。",
      choices: [
        {
          label: "【不追问】“那先吃饭。别在楼梯口复盘人生。”",
          next: "after_exam_meal_001",
          effects: { pressure: -1, support: 1 }
        },
        {
          label: "【轻问】“听起来过了，但你不是很开心？”",
          next: "after_exam_ask_001",
          effects: { honesty: 1, trust: 1 }
        },
        {
          label: "【陪着】“我可以陪你走一段，不说考试。”",
          next: "after_exam_walk_001",
          effects: { support: 2, trust: 1 }
        }
      ]
    },
    after_exam_meal_001: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“复盘人生这个行为听起来很危险。”\n\n“走，吃饭。”",
      next: "after_exam_common_001"
    },
    after_exam_ask_001: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“嗯。”\n\n“像撤出来了，但包里没东西。”",
      next: "after_exam_common_001"
    },
    after_exam_walk_001: {
      chapter: "第六章",
      title: "考试日",
      text: "忧黎没有说谢谢，只是把脚步慢下来，和你并排。",
      next: "after_exam_common_001"
    },
    after_exam_common_001: {
      chapter: "第六章",
      title: "考试日",
      text: "你们去了食堂最角落的位置。午饭是热汤面，味道普通，但足够把人从考场边缘拉回现实。",
      next: "after_exam_common_002"
    },
    after_exam_common_002: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“我以前一到期末就会觉得，自己所有进度都清零了。”",
      next: "after_exam_common_003"
    },
    after_exam_common_003: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“视频也好，复诊也好，能睡着的那几天也好。”\n\n“好像一张卷子就能证明：你看，还是不行。”",
      next: "choice_progress_not_zero"
    },
    choice_progress_not_zero: {
      chapter: "第六章",
      title: "考试日",
      text: "你想告诉他，进度没有清零。",
      choices: [
        {
          label: "【具体证据】“你请假了，关后台了，也来考试了。这些都不是零。”",
          next: "progress_proof_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【接受波动】“状态掉下去，不等于之前的努力不存在。”",
          next: "progress_wave_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【共同感】“我也会这样。像一紧张就忘记自己其实走过路。”",
          next: "progress_together_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    progress_proof_001: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“证据链完整。”\n\n“你像在给我写判决书。”",
      next: "progress_common_001"
    },
    progress_wave_001: {
      chapter: "第六章",
      title: "考试日",
      text: "忧黎低头喝了一口汤，热气把他的眼镜边缘熏得有点雾。",
      next: "progress_wave_002"
    },
    progress_wave_002: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“那我现在是掉帧。”\n\n“不是删档。”",
      next: "progress_common_001"
    },
    progress_together_001: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“你也会？”\n\n他看着你。\n\n“那我们两个记性都不太好。”",
      next: "progress_common_001"
    },
    progress_common_001: {
      chapter: "第六章",
      title: "考试日",
      text: "午饭后，你们在食堂门口分别。下一门考试还在两天后。忧黎说他想回去睡一觉。",
      next: "progress_common_002"
    },
    progress_common_002: {
      chapter: "第六章",
      title: "考试日",
      speaker: "忧黎",
      text: "“如果我睡到晚上，不是失联。”\n\n“是系统维护。”",
      next: "night_before_last_001"
    },
    night_before_last_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "最后一门考试前夜，你复习到十一点半。手机始终很安静。",
      next: "night_before_last_002"
    },
    night_before_last_002: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "十二点零七分，忧黎发来消息。",
      next: "night_before_last_003"
    },
    night_before_last_003: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“我睡不着。”",
      next: "night_before_last_004"
    },
    night_before_last_004: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "你盯着屏幕。明天你也要考试。你很困，脑子里像塞满了公式和未读消息。",
      next: "choice_last_night"
    },
    choice_last_night: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "这是一个很难的夜晚。",
      choices: [
        {
          label: "【短时陪伴】“我陪你十分钟，然后我们都关机躺下。”",
          next: "last_short_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【安全确认】“先确认：你现在安全，对吗？”",
          next: "last_safe_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【硬撑通宵】“我不睡了，陪你到困。”",
          next: "last_overnight_001",
          effects: { support: 1, pressure: 3, distance: 1 }
        }
      ]
    },
    last_short_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“十分钟可以。”\n\n“不要因为我通宵。”",
      next: "last_common_001"
    },
    last_safe_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“安全。”\n\n“只是焦虑，很吵。”",
      next: "last_common_001"
    },
    last_overnight_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "这句话刚发出去，你就知道它不太对。你是在陪他，也是在逃避自己明天的考试。",
      next: "last_overnight_002"
    },
    last_overnight_002: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“不行。”\n\n“你明天也考试。”\n\n“队友不能互相拖进毒圈。”",
      next: "last_common_001"
    },
    last_common_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "你们没有聊很深的话。只是一起做了一个很笨的睡前流程：喝水，关灯，把手机放远一点。",
      next: "last_common_002"
    },
    last_common_002: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“如果明天考砸了呢？”",
      next: "choice_if_fail_exam"
    },
    choice_if_fail_exam: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "你闭着眼睛，听见自己也有点害怕。",
      choices: [
        {
          label: "【现实】“那就补救。挂科不是人生结局。”",
          next: "fail_real_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【温柔】“先别让明天的结果偷走今晚的睡眠。”",
          next: "fail_sleep_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【同行】“那我也陪你一起面对。不是替你考，是一起面对。”",
          next: "fail_side_001",
          effects: { trust: 2, honesty: 1 }
        }
      ]
    },
    fail_real_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“挂科不是人生结局。”\n\n“这句比鸡汤有用。”",
      next: "sleep_end_001"
    },
    fail_sleep_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“偷睡眠。”\n\n“明天的结果像小偷。”",
      next: "sleep_end_001"
    },
    fail_side_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "语音那头安静了很久。久到你以为他睡着了。",
      next: "fail_side_002"
    },
    fail_side_002: {
      chapter: "第六章",
      title: "最后一门前夜",
      speaker: "忧黎",
      text: "“不是替我考。”\n\n“这句也很好。”",
      next: "sleep_end_001"
    },
    sleep_end_001: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "十二点二十一分，你们互道晚安。手机屏幕暗下去，宿舍天花板在黑暗里变得模糊。",
      next: "sleep_end_002"
    },
    sleep_end_002: {
      chapter: "第六章",
      title: "最后一门前夜",
      text: "你没有立刻睡着。但你也没有再打开手机。某种意义上，这已经是一场胜利。",
      next: "after_exam_final_001"
    },
    after_exam_final_001: {
      chapter: "第六章",
      title: "期末结束",
      text: "最后一门考试结束时，阳光终于从云层里露出来。你走出考场，看见忧黎站在树荫下。",
      next: "after_exam_final_002"
    },
    after_exam_final_002: {
      chapter: "第六章",
      title: "期末结束",
      speaker: "忧黎",
      text: "“考完了。”",
      next: "after_exam_final_003"
    },
    after_exam_final_003: {
      chapter: "第六章",
      title: "期末结束",
      text: "他说这三个字的时候，像终于从一个很长的撤离点里走出来。没有欢呼，没有大胜，只是还站着。",
      next: "after_exam_final_004"
    },
    after_exam_final_004: {
      chapter: "第六章",
      title: "期末结束",
      speaker: "忧黎",
      text: "“我想去一个地方。”",
      next: "after_exam_final_005"
    },
    after_exam_final_005: {
      chapter: "第六章",
      title: "期末结束",
      text: "你问哪里。忧黎把手机递过来，屏幕上是一张游戏地图截图。红圈标在撤离点。",
      next: "after_exam_final_006"
    },
    after_exam_final_006: {
      chapter: "第六章",
      title: "期末结束",
      speaker: "忧黎",
      text: "“现实里也有个地方。”\n\n“我以前状态很差的时候，会去那里坐一会儿。”",
      next: "after_exam_final_007"
    },
    after_exam_final_007: {
      chapter: "第六章",
      title: "期末结束",
      text: "他没有说完，但你知道，这可能就是下一段路的入口。",
      next: "demo6_end_001"
    },
    demo6_end_001: {
      chapter: "Demo 6 完成",
      title: "期末周",
      text: "第六版 Demo 到这里结束。你们没有把期末周打成漂亮的胜仗，但学会了更重要的事：陪伴不是通宵硬撑，关心也需要撤离权。",
      unlockEnding: "ending_ch6",
      next: "demo6_end_002"
    },
    demo6_end_002: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "忧黎说的地方不在地图上。它在学校西门外，穿过一条卖烤冷面和柠檬茶的小街，再沿着河堤往前走七分钟。",
      next: "real_extract_001"
    },
    real_extract_001: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "期末结束后的校园突然变得松散。有人拉着行李箱回家，有人约饭，有人在朋友圈宣布自己已经恢复出厂设置。",
      next: "real_extract_002"
    },
    real_extract_002: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "你和忧黎没有立刻庆祝。你们只是并排走着，脚步慢得像不太确定考完试之后该怎么使用自由。",
      next: "real_extract_003"
    },
    real_extract_003: {
      chapter: "第七章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“以前我会在这里坐到很晚。”\n\n“不是想做什么，只是觉得宿舍太吵，教室太亮。”",
      next: "real_extract_004"
    },
    real_extract_004: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "河堤边有一排旧长椅。油漆被晒得发白，椅背上刻着看不清的名字。风从水面吹来，带着一点潮湿的味道。",
      next: "real_extract_005"
    },
    real_extract_005: {
      chapter: "第七章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“游戏里的撤离点有倒计时。”\n\n“这里没有。”",
      next: "choice_first_bench"
    },
    choice_first_bench: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "你们站在长椅前。忧黎没有马上坐下。",
      choices: [
        {
          label: "【陪他坐下】“那我们自己定一个，坐二十分钟。”",
          next: "bench_timer_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【询问规则】“你以前来这里的时候，会做什么？”",
          next: "bench_rule_001",
          effects: { honesty: 1, trust: 1 }
        },
        {
          label: "【轻松一点】“现实撤离点还缺个补给箱。”",
          next: "bench_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    bench_timer_001: {
      chapter: "第七章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“二十分钟。”\n\n“听起来很安全。”",
      next: "bench_common_001"
    },
    bench_rule_001: {
      chapter: "第七章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“数路灯。”\n\n“数到第十七盏，再决定要不要回去。”",
      next: "bench_common_001"
    },
    bench_joke_001: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "忧黎看了看你手里刚买的柠檬茶。",
      next: "bench_joke_002"
    },
    bench_joke_002: {
      chapter: "第七章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“补给箱已经刷新了。”",
      next: "bench_common_001"
    },
    bench_common_001: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "你们坐下。长椅比想象中凉，河面反射着傍晚的光，像一条被拉长的进度条。",
      next: "bench_common_002"
    },
    bench_common_002: {
      chapter: "第七章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“我第一次来这里，是大一上学期。”",
      next: "bench_common_003"
    },
    bench_common_003: {
      chapter: "第七章",
      title: "现实撤离点",
      text: "他的声音很平稳，但你能听出那种平稳是练出来的。像一把枪被拆开擦过很多遍，终于不再卡壳。",
      next: "bench_common_004"
    },
    bench_common_004: {
      chapter: "第七章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“那时候我还没发视频，也没有主号。”\n\n“只是觉得每天都像在错误地图里出生。”",
      next: "choice_old_pain"
    },
    choice_old_pain: {
      chapter: "第七章",
      title: "旧地图",
      text: "忧黎提起了很早以前的自己。你想怎样接住这段话？",
      choices: [
        {
          label: "【不抢救】“我听着。你不用讲得很完整。”",
          next: "old_listen_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【确认现在】“那现在呢？这里还是错误地图吗？”",
          next: "old_now_001",
          effects: { honesty: 2 }
        },
        {
          label: "【分享自己】“我也有过觉得世界不太对劲的时候。”",
          next: "old_share_001",
          effects: { honesty: 1, trust: 1 }
        }
      ]
    },
    old_listen_001: {
      chapter: "第七章",
      title: "旧地图",
      speaker: "忧黎",
      text: "“嗯。”\n\n“那我讲一点点。”",
      next: "old_common_001"
    },
    old_now_001: {
      chapter: "第七章",
      title: "旧地图",
      text: "忧黎看向河面。水声把这个问题推远了一点，又送回来。",
      next: "old_now_002"
    },
    old_now_002: {
      chapter: "第七章",
      title: "旧地图",
      speaker: "忧黎",
      text: "“不是。”\n\n“现在像同一张地图，但我终于知道撤离点在哪。”",
      next: "old_common_001"
    },
    old_share_001: {
      chapter: "第七章",
      title: "旧地图",
      text: "你说得不多。只是把某些很普通、但曾经压得你喘不过气的瞬间告诉他。",
      next: "old_share_002"
    },
    old_share_002: {
      chapter: "第七章",
      title: "旧地图",
      speaker: "忧黎",
      text: "“原来你也会。”\n\n“我以前总觉得你比我稳定很多。”",
      next: "old_common_001"
    },
    old_common_001: {
      chapter: "第七章",
      title: "旧地图",
      text: "忧黎说，大一那年他有很长一段时间不敢回消息。不是不想回，而是每个对话框都像一扇需要立刻推开的门。",
      next: "old_common_002"
    },
    old_common_002: {
      chapter: "第七章",
      title: "旧地图",
      speaker: "忧黎",
      text: "“我那时候最怕别人说：你怎么又这样。”",
      next: "old_common_003"
    },
    old_common_003: {
      chapter: "第七章",
      title: "旧地图",
      text: "他顿了顿，像把那句话从喉咙里拆下来。",
      next: "old_common_004"
    },
    old_common_004: {
      chapter: "第七章",
      title: "旧地图",
      speaker: "忧黎",
      text: "“后来我就开始装正常。”\n\n“装着装着，连自己都不知道什么时候该停。”",
      next: "choice_normal_mask"
    },
    choice_normal_mask: {
      chapter: "第七章",
      title: "正常面具",
      text: "你想回应他的“装正常”。",
      choices: [
        {
          label: "【承认疲惫】“装正常很累。你现在可以不用装。”",
          next: "mask_tired_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【边界清晰】“但不用装，不等于你要把所有伤口都摊开。”",
          next: "mask_boundary_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【轻轻玩笑】“那现在申请下线正常人皮肤？”",
          next: "mask_joke_001",
          effects: { pressure: -1, trust: 1 }
        }
      ]
    },
    mask_tired_001: {
      chapter: "第七章",
      title: "正常面具",
      speaker: "忧黎",
      text: "“不用装。”\n\n他重复这三个字，像在确认它们有没有陷阱。",
      next: "mask_common_001"
    },
    mask_boundary_001: {
      chapter: "第七章",
      title: "正常面具",
      speaker: "忧黎",
      text: "“嗯。”\n\n“可以不装，也可以不公开处刑自己。”",
      next: "mask_common_001"
    },
    mask_joke_001: {
      chapter: "第七章",
      title: "正常面具",
      speaker: "忧黎",
      text: "“皮肤卸载失败。”\n\n“但可以降低透明度。”",
      next: "mask_common_001"
    },
    mask_common_001: {
      chapter: "第七章",
      title: "正常面具",
      text: "天色慢慢暗下来。河对岸的灯一盏盏亮起，像你们在第六章前夜说过的安全确认。",
      next: "mask_common_002"
    },
    mask_common_002: {
      chapter: "第七章",
      title: "正常面具",
      speaker: "忧黎",
      text: "“其实我今天带你来，不只是想告诉你这里。”",
      next: "mask_common_003"
    },
    mask_common_003: {
      chapter: "第七章",
      title: "正常面具",
      text: "你的心跳像被系统提示音轻轻敲了一下。",
      next: "mask_common_004"
    },
    mask_common_004: {
      chapter: "第七章",
      title: "正常面具",
      speaker: "忧黎",
      text: "“我想确认一件事。”",
      next: "choice_confirm_thing"
    },
    choice_confirm_thing: {
      chapter: "第七章",
      title: "确认",
      text: "忧黎看着你。这个瞬间不像告白，更像准备进入一片没有攻略的新区域。",
      choices: [
        {
          label: "【给空间】“你可以慢慢确认，我不催你。”",
          next: "confirm_space_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【认真面对】“你说，我会认真听。”",
          next: "confirm_serious_001",
          effects: { honesty: 1, trust: 1 }
        },
        {
          label: "【先确认边界】“如果这件事说出口会让你太累，也可以停。”",
          next: "confirm_boundary_001",
          effects: { support: 1, honesty: 2 }
        }
      ]
    },
    confirm_space_001: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“你越不催，我越想说。”\n\n“这很不讲道理。”",
      next: "confirm_common_001"
    },
    confirm_serious_001: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“你一直都很认真。”\n\n“有时候认真得像在给我打补丁。”",
      next: "confirm_common_001"
    },
    confirm_boundary_001: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“我知道。”\n\n“所以我先说一点。如果说不下去，我会停。”",
      next: "confirm_common_001"
    },
    confirm_common_001: {
      chapter: "第七章",
      title: "确认",
      text: "忧黎低头看着自己的手。指尖在柠檬茶杯壁上轻轻摩挲，水珠顺着塑料杯滑下来。",
      next: "confirm_common_002"
    },
    confirm_common_002: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“我以前以为，喜欢一个人就是把对方拖进自己的问题里。”",
      next: "confirm_common_003"
    },
    confirm_common_003: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“所以我不太敢喜欢谁。”\n\n“也不太敢承认自己需要谁。”",
      next: "confirm_common_004"
    },
    confirm_common_004: {
      chapter: "第七章",
      title: "确认",
      text: "风把河面吹皱。你没有插话。你怕任何一句太快的回应，都会让他刚刚搭好的句子散开。",
      next: "confirm_common_005"
    },
    confirm_common_005: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“但是这段时间，我发现不是这样。”\n\n“你没有替我打完所有局，也没有要求我一直赢。”",
      next: "confirm_common_006"
    },
    confirm_common_006: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“你只是……在我需要撤的时候，提醒我撤离点还在。”",
      next: "choice_before_confession"
    },
    choice_before_confession: {
      chapter: "第七章",
      title: "确认",
      text: "你意识到他接下来想说什么。你要怎么做？",
      choices: [
        {
          label: "【安静等待】什么都不抢先说，只等他把话说完。",
          next: "before_conf_wait_001",
          effects: { trust: 2, support: 1 }
        },
        {
          label: "【轻声回应】“我也不是一直很稳，但我想和你一起学。”",
          next: "before_conf_learn_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【紧张玩笑】“这个气氛是不是要弹成就了？”",
          next: "before_conf_joke_001",
          effects: { pressure: -1, trust: 1 }
        }
      ]
    },
    before_conf_wait_001: {
      chapter: "第七章",
      title: "确认",
      text: "你没有说话。沉默没有变成压力，反而像一块干净的空地。",
      next: "confession_half_001"
    },
    before_conf_learn_001: {
      chapter: "第七章",
      title: "确认",
      text: "忧黎抬眼看你。那句话像给他的犹豫装上了一个很小的扶手。",
      next: "confession_half_001"
    },
    before_conf_joke_001: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“别打断系统播片。”\n\n他说完自己也笑了一下，紧张反而松了。",
      next: "confession_half_001"
    },
    confession_half_001: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“我喜欢和你待在一起。”",
      next: "confession_half_002"
    },
    confession_half_002: {
      chapter: "第七章",
      title: "确认",
      text: "这句话很轻，却比任何弹幕都清楚。",
      next: "confession_half_003"
    },
    confession_half_003: {
      chapter: "第七章",
      title: "确认",
      speaker: "忧黎",
      text: "“但我还不确定自己能不能把‘喜欢’说得很健康。”\n\n“我怕它会变成压力。”",
      next: "choice_like_boundary"
    },
    choice_like_boundary: {
      chapter: "第七章",
      title: "喜欢的边界",
      text: "忧黎没有把告白变成索取。他把担心也一并交给你看。",
      choices: [
        {
          label: "【边界式回应】“那我们可以先不急着定义关系，先定义边界。”",
          next: "like_define_boundary_001",
          effects: { honesty: 2, support: 2 }
        },
        {
          label: "【温柔回应】“喜欢本身不是压力，不说清楚才会变成压力。”",
          next: "like_tender_001",
          effects: { trust: 2, honesty: 1 }
        },
        {
          label: "【也说喜欢】“我也喜欢和你待在一起。”",
          next: "like_reply_001",
          effects: { trust: 2, support: 1 }
        }
      ]
    },
    like_define_boundary_001: {
      chapter: "第七章",
      title: "喜欢的边界",
      speaker: "忧黎",
      text: "“先定义边界。”\n\n“这个听起来不像告白现场，像战术会议。”",
      next: "like_common_001"
    },
    like_tender_001: {
      chapter: "第七章",
      title: "喜欢的边界",
      text: "忧黎把这句话在心里过了一遍。你几乎能看见他给它标注重点。",
      next: "like_tender_002"
    },
    like_tender_002: {
      chapter: "第七章",
      title: "喜欢的边界",
      speaker: "忧黎",
      text: "“那我现在是在说清楚。”\n\n“虽然说得很慢。”",
      next: "like_common_001"
    },
    like_reply_001: {
      chapter: "第七章",
      title: "喜欢的边界",
      text: "忧黎的眼睛微微睁大。那不是惊讶，更像一颗迟到很久的信号弹终于升起来。",
      next: "like_reply_002"
    },
    like_reply_002: {
      chapter: "第七章",
      title: "喜欢的边界",
      speaker: "忧黎",
      text: "“……收到。”\n\n“这次我不撤回。”",
      next: "like_common_001"
    },
    like_common_001: {
      chapter: "第七章",
      title: "喜欢的边界",
      text: "你们认真讨论了很久。听起来一点也不浪漫：什么时候可以打电话，什么时候需要自己消化，状态不好时怎么说安全。",
      next: "like_common_002"
    },
    like_common_002: {
      chapter: "第七章",
      title: "喜欢的边界",
      text: "但也许这就是你们能给出的浪漫。不是把对方拉进风暴中心，而是在风暴边缘一起画安全线。",
      next: "like_common_003"
    },
    like_common_003: {
      chapter: "第七章",
      title: "喜欢的边界",
      speaker: "忧黎",
      text: "“我还有一个请求。”",
      next: "choice_request"
    },
    choice_request: {
      chapter: "第七章",
      title: "请求",
      text: "他的语气变得有点认真。",
      choices: [
        {
          label: "【听他说】“你说。”",
          next: "request_listen_001",
          effects: { trust: 1 }
        },
        {
          label: "【先声明】“如果我做不到，我会诚实说做不到。”",
          next: "request_honest_001",
          effects: { honesty: 2 }
        },
        {
          label: "【轻松接住】“请求已进入审核流程。”",
          next: "request_joke_001",
          effects: { pressure: -1 }
        }
      ]
    },
    request_listen_001: {
      chapter: "第七章",
      title: "请求",
      speaker: "忧黎",
      text: "“下次我说‘我不行了’的时候，不要把它当成麻烦。”",
      next: "request_common_001"
    },
    request_honest_001: {
      chapter: "第七章",
      title: "请求",
      speaker: "忧黎",
      text: "“好。”\n\n“那我也诚实说。”",
      next: "request_listen_001"
    },
    request_joke_001: {
      chapter: "第七章",
      title: "请求",
      speaker: "忧黎",
      text: "“审核材料有点长。”\n\n“但我尽量压缩。”",
      next: "request_listen_001"
    },
    request_common_001: {
      chapter: "第七章",
      title: "请求",
      speaker: "忧黎",
      text: "“也不要立刻冲过来救我。”\n\n“先问我需要什么。”",
      next: "request_common_002"
    },
    request_common_002: {
      chapter: "第七章",
      title: "请求",
      text: "这不像电视剧里的告白台词。可它比任何“永远陪你”都更具体，也更难。",
      next: "choice_promise"
    },
    choice_promise: {
      chapter: "第七章",
      title: "请求",
      text: "你要如何回应这个请求？",
      choices: [
        {
          label: "【具体承诺】“我会先问：你需要陪伴、建议，还是空间。”",
          next: "promise_specific_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【互相承诺】“那你也要问我，不要默认我永远有余力。”",
          next: "promise_mutual_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【温柔承诺】“我会努力记住，你不是麻烦。”",
          next: "promise_tender_001",
          effects: { trust: 2, support: 1 }
        }
      ]
    },
    promise_specific_001: {
      chapter: "第七章",
      title: "请求",
      speaker: "忧黎",
      text: "“陪伴、建议、空间。”\n\n“这个菜单很好。”",
      next: "promise_common_001"
    },
    promise_mutual_001: {
      chapter: "第七章",
      title: "请求",
      text: "忧黎点头，表情比刚才更郑重。",
      next: "promise_mutual_002"
    },
    promise_mutual_002: {
      chapter: "第七章",
      title: "请求",
      speaker: "忧黎",
      text: "“成交。”\n\n“队友也要看自己的血条。”",
      next: "promise_common_001"
    },
    promise_tender_001: {
      chapter: "第七章",
      title: "请求",
      speaker: "忧黎",
      text: "“嗯。”\n\n“我也会努力记住。”",
      next: "promise_common_001"
    },
    promise_common_001: {
      chapter: "第七章",
      title: "请求",
      text: "夜色完全落下来。你们起身时，长椅上还残留着一点体温，很快又被风带走。",
      next: "return_walk_001"
    },
    return_walk_001: {
      chapter: "第七章",
      title: "返程",
      text: "回学校的路上，忧黎没有戴口罩。路边小店的灯照在他脸上，你忽然发现他今天一直没有躲开你的视线。",
      next: "return_walk_002"
    },
    return_walk_002: {
      chapter: "第七章",
      title: "返程",
      speaker: "忧黎",
      text: "“我想把这里拍成下一期视频的结尾。”",
      next: "return_walk_003"
    },
    return_walk_003: {
      chapter: "第七章",
      title: "返程",
      text: "你愣了一下。现实撤离点，视频结尾，喜欢的边界。所有东西像被轻轻串在一起。",
      next: "choice_next_video"
    },
    choice_next_video: {
      chapter: "第七章",
      title: "返程",
      text: "你对下一期视频有什么想法？",
      choices: [
        {
          label: "【保护隐私】“可以拍河面，不拍具体位置。”",
          next: "next_video_privacy_001",
          effects: { honesty: 1, support: 2 }
        },
        {
          label: "【保留生活】“也可以不拍。有些地方只属于现实。”",
          next: "next_video_real_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【共同创作】“如果要拍，我们一起想文案。”",
          next: "next_video_together_001",
          effects: { trust: 1, support: 1 }
        }
      ]
    },
    next_video_privacy_001: {
      chapter: "第七章",
      title: "返程",
      speaker: "忧黎",
      text: "“不暴露位置。”\n\n“对。撤离点不能被刷怪。”",
      next: "next_video_common_001"
    },
    next_video_real_001: {
      chapter: "第七章",
      title: "返程",
      text: "忧黎想了想，轻轻点头。",
      next: "next_video_real_002"
    },
    next_video_real_002: {
      chapter: "第七章",
      title: "返程",
      speaker: "忧黎",
      text: "“有些地方只属于现实。”\n\n“这句也可以当文案，但不发出去。”",
      next: "next_video_common_001"
    },
    next_video_together_001: {
      chapter: "第七章",
      title: "返程",
      speaker: "忧黎",
      text: "“又是双人视频？”\n\n“那这次你可以当总策划。”",
      next: "next_video_common_001"
    },
    next_video_common_001: {
      chapter: "第七章",
      title: "返程",
      text: "走到西门时，手机弹出一条成绩通知。不是最终成绩，只是一门平时分录入提醒。你和忧黎同时看向屏幕，又同时笑了。",
      next: "next_video_common_002"
    },
    next_video_common_002: {
      chapter: "第七章",
      title: "返程",
      speaker: "忧黎",
      text: "“现实副本还没结算完。”",
      next: "next_video_common_003"
    },
    next_video_common_003: {
      chapter: "第七章",
      title: "返程",
      text: "但这一次，你们没有急着查。风吹过校门口，夜色像一张温柔的读档界面。",
      next: "demo7_end_001"
    },
    demo7_end_001: {
      chapter: "Demo 7 完成",
      title: "现实撤离点",
      text: "第七版 Demo 到这里结束。忧黎把现实里的撤离点告诉了你，也把“喜欢”说成了一次关于边界、请求和互相照看的战术会议。",
      unlockEnding: "ending_ch7",
      next: "demo7_end_002"
    },
    demo7_end_002: {
      chapter: "第八章",
      title: "试运行",
      text: "第二天醒来时，你第一反应不是查成绩，也不是看群消息，而是想起河堤边那句“我喜欢和你待在一起”。",
      next: "trial_001"
    },
    trial_001: {
      chapter: "第八章",
      title: "试运行",
      text: "它没有像烟花一样炸开。它更像一枚很小的定位标，安静地插在你们共同的地图上。",
      next: "trial_002"
    },
    trial_002: {
      chapter: "第八章",
      title: "试运行",
      text: "早上九点十六分，忧黎发来消息。",
      next: "trial_003"
    },
    trial_003: {
      chapter: "第八章",
      title: "试运行",
      speaker: "忧黎",
      text: "“早。”\n\n“昨天那个……算不算进入试运行阶段？”",
      next: "choice_trial_name"
    },
    choice_trial_name: {
      chapter: "第八章",
      title: "试运行",
      text: "你盯着“试运行阶段”几个字，忽然有点想笑。",
      choices: [
        {
          label: "【接受命名】“算。关系版本号 0.1 beta。”",
          next: "trial_beta_001",
          effects: { trust: 1, pressure: -1 }
        },
        {
          label: "【认真定义】“算，但我们可以慢慢调参数。”",
          next: "trial_param_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【确认感受】“你这样命名会比较安心吗？”",
          next: "trial_safe_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    trial_beta_001: {
      chapter: "第八章",
      title: "试运行",
      speaker: "忧黎",
      text: "“0.1 beta。”\n\n“那我先不提交崩溃报告。”",
      next: "trial_common_001"
    },
    trial_param_001: {
      chapter: "第八章",
      title: "试运行",
      speaker: "忧黎",
      text: "“慢慢调参数。”\n\n“听起来比一键确认健康。”",
      next: "trial_common_001"
    },
    trial_safe_001: {
      chapter: "第八章",
      title: "试运行",
      text: "对面停了一会儿。",
      next: "trial_safe_002"
    },
    trial_safe_002: {
      chapter: "第八章",
      title: "试运行",
      speaker: "忧黎",
      text: "“会。”\n\n“命名之后，我就知道它不是无限责任。”",
      next: "trial_common_001"
    },
    trial_common_001: {
      chapter: "第八章",
      title: "试运行",
      text: "你们没有立刻换情侣头像，也没有发朋友圈。试运行第一天的正式内容，是互相发送今日安排。",
      next: "schedule_001"
    },
    schedule_001: {
      chapter: "第八章",
      title: "今日安排",
      speaker: "忧黎",
      text: "“上午收拾宿舍。下午剪一点素材。晚上可能打两把。”",
      next: "schedule_002"
    },
    schedule_002: {
      chapter: "第八章",
      title: "今日安排",
      text: "你也把自己的安排发过去：洗衣服，整理复习资料，等成绩，顺便把冰箱里快过期的酸奶解决掉。",
      next: "schedule_003"
    },
    schedule_003: {
      chapter: "第八章",
      title: "今日安排",
      speaker: "忧黎",
      text: "“酸奶比成绩更紧急。”",
      next: "choice_first_day_contact"
    },
    choice_first_day_contact: {
      chapter: "第八章",
      title: "今日安排",
      text: "试运行第一天，你们需要决定联系频率。",
      choices: [
        {
          label: "【低频安全】“白天各忙各的，晚上再聊？”",
          next: "contact_low_001",
          effects: { pressure: -1, support: 1 }
        },
        {
          label: "【自然流动】“不用规定太死，想发就发，不回也不用紧张。”",
          next: "contact_free_001",
          effects: { trust: 1, honesty: 1 }
        },
        {
          label: "【高频试探】“那我可以随时给你发消息吗？”",
          next: "contact_high_001",
          effects: { trust: 1, pressure: 1 }
        }
      ]
    },
    contact_low_001: {
      chapter: "第八章",
      title: "今日安排",
      speaker: "忧黎",
      text: "“晚上再聊可以。”\n\n“白天我也想练习不盯手机。”",
      next: "contact_common_001"
    },
    contact_free_001: {
      chapter: "第八章",
      title: "今日安排",
      speaker: "忧黎",
      text: "“想发就发，不回也不用紧张。”\n\n“这个规则我需要背一下。”",
      next: "contact_common_001"
    },
    contact_high_001: {
      chapter: "第八章",
      title: "今日安排",
      text: "忧黎没有马上答应，也没有拒绝。",
      next: "contact_high_002"
    },
    contact_high_002: {
      chapter: "第八章",
      title: "今日安排",
      speaker: "忧黎",
      text: "“可以发。”\n\n“但如果我没回，不代表我后悔昨天。”",
      next: "contact_common_001"
    },
    contact_common_001: {
      chapter: "第八章",
      title: "今日安排",
      text: "上午很快过去。你把复习资料装进文件夹，发现自己竟然真的能在不盯手机的情况下做完一件事。",
      next: "score_notice_001"
    },
    score_notice_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "下午两点四十三分，教务系统推送了第一门成绩。班级群瞬间炸开，表情包像空投一样密集落下。",
      next: "score_notice_002"
    },
    score_notice_002: {
      chapter: "第八章",
      title: "成绩结算",
      text: "你点开成绩。过了。不高，但过了。你松了口气，第一时间想告诉忧黎。",
      next: "score_notice_003"
    },
    score_notice_003: {
      chapter: "第八章",
      title: "成绩结算",
      text: "可他的头像旁边没有红点。你想起早上的约定：不回也不用紧张。",
      next: "choice_score_share"
    },
    choice_score_share: {
      chapter: "第八章",
      title: "成绩结算",
      text: "你要怎么分享这个成绩？",
      choices: [
        {
          label: "【轻量分享】发一句：“过了，现实副本暂时撤离。”",
          next: "score_light_001",
          effects: { pressure: -1, trust: 1 }
        },
        {
          label: "【不急着发】先自己庆祝一下，晚上再说。",
          next: "score_later_001",
          effects: { support: 1, pressure: -1 }
        },
        {
          label: "【想要回应】发：“我过了！你看到回我一下。”",
          next: "score_need_001",
          effects: { honesty: 1, pressure: 1 }
        }
      ]
    },
    score_light_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "消息发出去后，你把手机倒扣在桌上。像把一枚信号弹发向天空，然后允许它慢慢落地。",
      next: "score_common_001"
    },
    score_later_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "你去楼下买了一根烤肠，郑重地把它当作庆功宴。塑料袋很烫，风很大，快乐很小但确实存在。",
      next: "score_common_001"
    },
    score_need_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "你发完才意识到，这句话里有一点急。不是错误，只是你也在学习怎么表达需要。",
      next: "score_common_001"
    },
    score_common_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "半小时后，忧黎回复了。",
      next: "score_common_002"
    },
    score_common_002: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“恭喜撤离。”\n\n“我刚才在洗床单。手机不在手边。”",
      next: "score_common_003"
    },
    score_common_003: {
      chapter: "第八章",
      title: "成绩结算",
      text: "这句解释很普通，却让你忽然明白：试运行不是要求对方秒回，而是给普通生活留出位置。",
      next: "score_common_004"
    },
    score_common_004: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“我的还没出。”\n\n“有点像撤离倒计时卡住了。”",
      next: "choice_wait_score"
    },
    choice_wait_score: {
      chapter: "第八章",
      title: "成绩结算",
      text: "忧黎还在等成绩。你想怎么陪他等？",
      choices: [
        {
          label: "【转移注意】“先别刷教务，去把床单晾了。”",
          next: "wait_laundry_001",
          effects: { support: 1, pressure: -1 }
        },
        {
          label: "【一起面对】“出了再看。无论结果怎样，我们一起想下一步。”",
          next: "wait_together_001",
          effects: { trust: 2, support: 1 }
        },
        {
          label: "【现实边界】“我陪你等，但我不会替成绩负责。”",
          next: "wait_boundary_001",
          effects: { honesty: 2, support: 1 }
        }
      ]
    },
    wait_laundry_001: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“收到。”\n\n“床单先撤离到阳台。”",
      next: "wait_common_001"
    },
    wait_together_001: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“下一步。”\n\n“这个词比结果友好。”",
      next: "wait_common_001"
    },
    wait_boundary_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "忧黎隔了一会儿才回复。",
      next: "wait_boundary_002"
    },
    wait_boundary_002: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“嗯。”\n\n“我也不想把成绩挂到你身上。”",
      next: "wait_common_001"
    },
    wait_common_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "傍晚，忧黎的成绩出了。擦线过。截图里那个数字危险得像只差一秒的撤离成功。",
      next: "wait_common_002"
    },
    wait_common_002: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“活了。”",
      next: "wait_common_003"
    },
    wait_common_003: {
      chapter: "第八章",
      title: "成绩结算",
      text: "你几乎能想象他在屏幕前长出一口气的样子。",
      next: "choice_pass_react"
    },
    choice_pass_react: {
      chapter: "第八章",
      title: "成绩结算",
      text: "你想怎么回应他的擦线通过？",
      choices: [
        {
          label: "【庆祝】“撤离成功就是成功，别嫌包穷。”",
          next: "pass_celebrate_001",
          effects: { trust: 1, pressure: -1 }
        },
        {
          label: "【复盘但不审判】“之后如果要复盘，我们可以只复盘方法，不复盘人格。”",
          next: "pass_review_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【约饭】“今晚吃点好的？庆祝两个残血撤离。”",
          next: "pass_meal_001",
          effects: { trust: 1, support: 1 }
        }
      ]
    },
    pass_celebrate_001: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“包穷但人活。”\n\n“这句适合写进人生攻略。”",
      next: "pass_common_001"
    },
    pass_review_001: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“不复盘人格。”\n\n“好。人格先不进结算界面。”",
      next: "pass_common_001"
    },
    pass_meal_001: {
      chapter: "第八章",
      title: "成绩结算",
      speaker: "忧黎",
      text: "“残血撤离套餐。”\n\n“听起来应该有热汤。”",
      next: "pass_common_001"
    },
    pass_common_001: {
      chapter: "第八章",
      title: "成绩结算",
      text: "你们最终约在学校东门的小面馆。热气从碗里冒出来，忧黎把一次性筷子掰得很整齐。",
      next: "summer_001"
    },
    summer_001: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“我后天回家。”",
      next: "summer_002"
    },
    summer_002: {
      chapter: "第八章",
      title: "暑假前",
      text: "筷子停在半空。你知道暑假会来，但它真正坐到你们桌边时，还是显得有点突然。",
      next: "summer_003"
    },
    summer_003: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“家里不太方便打电话。也不太方便……解释我现在在试运行什么。”",
      next: "choice_summer_distance"
    },
    choice_summer_distance: {
      chapter: "第八章",
      title: "暑假前",
      text: "暑假意味着物理距离，也意味着新的边界。",
      choices: [
        {
          label: "【远程计划】“那我们定一个低压力联系表？”",
          next: "summer_plan_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【承认失落】“我会有点舍不得，但我不想把它变成你的负担。”",
          next: "summer_miss_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【不确定】“距离会不会让试运行失败？”",
          next: "summer_fear_001",
          effects: { honesty: 1, pressure: 1 }
        }
      ]
    },
    summer_plan_001: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“低压力联系表。”\n\n“比如每天一个安全确认，每周一次语音？”",
      next: "summer_common_001"
    },
    summer_miss_001: {
      chapter: "第八章",
      title: "暑假前",
      text: "忧黎抬头看你，眼神很安静。",
      next: "summer_miss_002"
    },
    summer_miss_002: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“我也会。”\n\n“舍不得不是负担。一直憋着才会变成负重。”",
      next: "summer_common_001"
    },
    summer_fear_001: {
      chapter: "第八章",
      title: "暑假前",
      text: "你问出口后，心里反而轻了一点。恐惧被说出来，就不再像藏在草丛里的敌人。",
      next: "summer_fear_002"
    },
    summer_fear_002: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“可能会变难。”\n\n“但失败不应该只由距离决定。”",
      next: "summer_common_001"
    },
    summer_common_001: {
      chapter: "第八章",
      title: "暑假前",
      text: "你们在小面馆的纸巾上写了一份很不像恋爱约定的约定。",
      next: "summer_common_002"
    },
    summer_common_002: {
      chapter: "第八章",
      title: "暑假前",
      text: "一，每天可以只发一句“安全”。二，不舒服时允许延迟回复。三，想要陪伴、建议或空间，要尽量说清。四，任何人都可以申请暂停。",
      next: "summer_common_003"
    },
    summer_common_003: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“这张纸巾看起来像协议。”",
      next: "choice_paper_agreement"
    },
    choice_paper_agreement: {
      chapter: "第八章",
      title: "暑假前",
      text: "你看着纸巾上的四条约定。",
      choices: [
        {
          label: "【郑重】“协议也可以很浪漫。”",
          next: "paper_romantic_001",
          effects: { trust: 1, honesty: 1 }
        },
        {
          label: "【玩笑】“恋爱服务条款，点击即表示同意。”",
          next: "paper_terms_001",
          effects: { pressure: -1, trust: 1 }
        },
        {
          label: "【补充】“再加一条：开心的事也要说，不只报安全。”",
          next: "paper_happy_001",
          effects: { support: 1, honesty: 1 }
        }
      ]
    },
    paper_romantic_001: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“那我们的浪漫字体有点丑。”\n\n“但我喜欢。”",
      next: "paper_common_001"
    },
    paper_terms_001: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“不同意也不能卸载。”\n\n“最多回滚版本。”",
      next: "paper_common_001"
    },
    paper_happy_001: {
      chapter: "第八章",
      title: "暑假前",
      text: "忧黎认真把第五条写上。",
      next: "paper_happy_002"
    },
    paper_happy_002: {
      chapter: "第八章",
      title: "暑假前",
      speaker: "忧黎",
      text: "“开心的事也要说。”\n\n“这个我不太熟，但可以练。”",
      next: "paper_common_001"
    },
    paper_common_001: {
      chapter: "第八章",
      title: "暑假前",
      text: "吃完面后，忧黎把那张纸巾叠好，夹进手机壳里。动作郑重得像收起一张稀有地图。",
      next: "video_end_001"
    },
    video_end_001: {
      chapter: "第八章",
      title: "新视频",
      text: "第二天，忧黎发布了期末后的第一条动态。没有河堤照片，也没有具体地点。只有一张游戏撤离成功的截图。",
      next: "video_end_002"
    },
    video_end_002: {
      chapter: "第八章",
      title: "新视频",
      speaker: "忧黎",
      text: "“期末结束。活着。之后会慢慢恢复更新。”\n\n“最近学到一件事：撤离不是逃跑，是为了下一局还能进队。”",
      next: "video_end_003"
    },
    video_end_003: {
      chapter: "第八章",
      title: "新视频",
      text: "评论区有人问：那个队友还在吗？",
      next: "choice_public_teammate"
    },
    choice_public_teammate: {
      chapter: "第八章",
      title: "新视频",
      text: "忧黎把这条评论截图发给你，问：“要回吗？”",
      choices: [
        {
          label: "【低调】“不用回。现实队友不用给评论区打卡。”",
          next: "public_low_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【简单回应】“可以回：还在。”",
          next: "public_still_001",
          effects: { trust: 2 }
        },
        {
          label: "【边界回应】“可以回：队友有自己的生活，勿扰。”",
          next: "public_boundary_001",
          effects: { honesty: 2, support: 1 }
        }
      ]
    },
    public_low_001: {
      chapter: "第八章",
      title: "新视频",
      speaker: "忧黎",
      text: "“现实队友不用打卡。”\n\n“这句我想置顶在脑子里。”",
      next: "public_common_001"
    },
    public_still_001: {
      chapter: "第八章",
      title: "新视频",
      text: "忧黎回了两个字：还在。没有更多解释，却足够让那条评论下面安静下来。",
      next: "public_common_001"
    },
    public_boundary_001: {
      chapter: "第八章",
      title: "新视频",
      speaker: "忧黎",
      text: "“勿扰。”\n\n“有点凶，但我喜欢。”",
      next: "public_common_001"
    },
    public_common_001: {
      chapter: "第八章",
      title: "新视频",
      text: "晚上，你们久违地一起上线。游戏大厅音乐响起，熟悉得像一条重新接上的线路。",
      next: "game_trial_001"
    },
    game_trial_001: {
      chapter: "第八章",
      title: "试运行第一局",
      speaker: "忧黎",
      text: "“今天不冲高收益。”\n\n“只打一局安全撤离。”",
      next: "game_trial_002"
    },
    game_trial_002: {
      chapter: "第八章",
      title: "试运行第一局",
      text: "你点下准备。屏幕进入匹配，倒计时转动，像把你们从现实协议带回最初相遇的地方。",
      next: "choice_game_role"
    },
    choice_game_role: {
      chapter: "第八章",
      title: "试运行第一局",
      text: "这一局，你想怎么打？",
      choices: [
        {
          label: "【稳扎稳打】“我跟你半个身位，先活着。”",
          next: "role_safe_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【主动分担】“这次我架后点，你不用一直看我。”",
          next: "role_share_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【坦白状态】“我今天有点兴奋，可能会贪，提醒我。”",
          next: "role_honest_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    role_safe_001: {
      chapter: "第八章",
      title: "试运行第一局",
      speaker: "忧黎",
      text: "“先活着。”\n\n“试运行核心目标。”",
      next: "game_common_001"
    },
    role_share_001: {
      chapter: "第八章",
      title: "试运行第一局",
      speaker: "忧黎",
      text: "“好。”\n\n“那我练习不一直回头确认。”",
      next: "game_common_001"
    },
    role_honest_001: {
      chapter: "第八章",
      title: "试运行第一局",
      speaker: "忧黎",
      text: "“收到。”\n\n“发现你舔包上头，我会物理报点。”",
      next: "game_common_001"
    },
    game_common_001: {
      chapter: "第八章",
      title: "试运行第一局",
      text: "这一局没有惊险的极限反杀。你们避开了主战区，搜了两个普通仓库，路上还因为一只突然窜出的野猫NPC同时停步。",
      next: "game_common_002"
    },
    game_common_002: {
      chapter: "第八章",
      title: "试运行第一局",
      speaker: "忧黎",
      text: "“猫。”",
      next: "game_common_003"
    },
    game_common_003: {
      chapter: "第八章",
      title: "试运行第一局",
      speaker: "你",
      text: "“看见了。它比我们富。”",
      next: "game_common_004"
    },
    game_common_004: {
      chapter: "第八章",
      title: "试运行第一局",
      text: "撤离成功时，你们的背包依旧很穷。可结算界面上，两个人都活着。",
      next: "game_common_005"
    },
    game_common_005: {
      chapter: "第八章",
      title: "试运行第一局",
      speaker: "忧黎",
      text: "“成功。”\n\n“0.1 beta 没崩。”",
      next: "demo8_end_001"
    },
    demo8_end_001: {
      chapter: "Demo 8 完成",
      title: "试运行",
      text: "第八版 Demo 到这里结束。你们没有急着把关系写成标准答案，而是用成绩、暑假、动态和一局很穷的撤离，完成了试运行的第一轮测试。",
      unlockEnding: "ending_ch8",
      next: "demo8_end_002"
    },
    demo8_end_002: {
      chapter: "第九章",
      title: "低频联系",
      text: "暑假真正开始后，时间变得很奇怪。没有课表，没有晚自习，也没有能在食堂门口偶遇忧黎的路线。",
      next: "remote_001"
    },
    remote_001: {
      chapter: "第九章",
      title: "低频联系",
      text: "你们按纸巾协议执行了三天。每天一句“安全”，偶尔多发一张照片：你拍晚霞，他拍家里阳台上快晒化的拖鞋。",
      next: "remote_002"
    },
    remote_002: {
      chapter: "第九章",
      title: "低频联系",
      speaker: "忧黎",
      text: "“拖鞋也在撤离。”",
      next: "remote_003"
    },
    remote_003: {
      chapter: "第九章",
      title: "低频联系",
      text: "你笑了很久。那时候你觉得远程相处好像也没有那么难。只要有规则，有回应，有一点点笨拙的幽默，距离就不会变成敌人。",
      next: "remote_004"
    },
    remote_004: {
      chapter: "第九章",
      title: "低频联系",
      text: "直到第四天晚上，忧黎没有发“安全”。",
      next: "remote_005"
    },
    remote_005: {
      chapter: "第九章",
      title: "低频联系",
      text: "九点、十点、十一点。聊天框安静得像一张没有刷新的地图。你知道协议里写了“允许延迟回复”，但知道和做到是两回事。",
      next: "choice_no_safe"
    },
    choice_no_safe: {
      chapter: "第九章",
      title: "未读",
      text: "忧黎今晚没有报安全。你要怎么做？",
      choices: [
        {
          label: "【按协议】发一句：“看到后回个安全就好，不急。”",
          next: "nosafe_protocol_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【诚实表达】“我有点担心，但我会先等你。”",
          next: "nosafe_honest_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【焦急连发】连续发几条消息确认他在不在。",
          next: "nosafe_spam_001",
          effects: { pressure: 3, distance: 1 }
        }
      ]
    },
    nosafe_protocol_001: {
      chapter: "第九章",
      title: "未读",
      text: "你把消息发出去，然后强迫自己去洗澡。水声盖住手机提示音，也盖住你脑子里不断弹出的坏结局。",
      next: "nosafe_common_001"
    },
    nosafe_honest_001: {
      chapter: "第九章",
      title: "未读",
      text: "你没有把担心伪装成完全成熟。你只是把它放在句子里，又给它留了边界。",
      next: "nosafe_common_001"
    },
    nosafe_spam_001: {
      chapter: "第九章",
      title: "未读",
      text: "第一条是担心，第二条是解释，第三条开始你自己也看出有点慌。屏幕亮着，像一盏太刺眼的灯。",
      next: "nosafe_common_001"
    },
    nosafe_common_001: {
      chapter: "第九章",
      title: "未读",
      text: "凌晨零点二十六分，忧黎回复了。",
      next: "nosafe_common_002"
    },
    nosafe_common_002: {
      chapter: "第九章",
      title: "未读",
      speaker: "忧黎",
      text: "“安全。”\n\n“抱歉，家里有点事，手机不在身边。”",
      next: "nosafe_common_003"
    },
    nosafe_common_003: {
      chapter: "第九章",
      title: "未读",
      text: "你看见“安全”两个字，身体里的某根弦才终于慢慢松下来。可松下来之后，剩下的是一点委屈。",
      next: "choice_after_safe"
    },
    choice_after_safe: {
      chapter: "第九章",
      title: "安全之后",
      text: "他已经报了安全。你要怎么回应自己的委屈？",
      choices: [
        {
          label: "【等明天谈】“收到。你先休息，我们明天再说。”",
          next: "after_safe_tomorrow_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【现在说清】“我松了口气，但也有点委屈。”",
          next: "after_safe_clear_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【压回去】“没事。”",
          next: "after_safe_suppress_001",
          effects: { distance: 2, pressure: 1 }
        }
      ]
    },
    after_safe_tomorrow_001: {
      chapter: "第九章",
      title: "安全之后",
      speaker: "忧黎",
      text: "“好。”\n\n“明天我认真说。”",
      next: "morning_call_001"
    },
    after_safe_clear_001: {
      chapter: "第九章",
      title: "安全之后",
      text: "你发出去后有点后悔。但很快，忧黎回复了。",
      next: "after_safe_clear_002"
    },
    after_safe_clear_002: {
      chapter: "第九章",
      title: "安全之后",
      speaker: "忧黎",
      text: "“你可以委屈。”\n\n“我不是故意消失，但你可以有反应。”",
      next: "morning_call_001"
    },
    after_safe_suppress_001: {
      chapter: "第九章",
      title: "安全之后",
      text: "你发了“没事”，却盯着这两个字看了很久。它们太轻，轻到装不下今晚真正发生过的事。",
      next: "morning_call_001"
    },
    morning_call_001: {
      chapter: "第九章",
      title: "第二天语音",
      text: "第二天上午，忧黎申请了一次语音。不是你催的，是他主动发来的：",
      next: "morning_call_002"
    },
    morning_call_002: {
      chapter: "第九章",
      title: "第二天语音",
      speaker: "忧黎",
      text: "“我现在方便说十五分钟。”\n\n“可以吗？”",
      next: "choice_call_start"
    },
    choice_call_start: {
      chapter: "第九章",
      title: "第二天语音",
      text: "十五分钟。一个很具体的时间。",
      choices: [
        {
          label: "【接受】“可以，十五分钟后我们都去做自己的事。”",
          next: "call_accept_001",
          effects: { support: 1, pressure: -1 }
        },
        {
          label: "【先确认】“你现在说这些会不会太累？”",
          next: "call_check_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【想延长】“十五分钟够吗？我怕说不完。”",
          next: "call_extend_001",
          effects: { honesty: 1, pressure: 1 }
        }
      ]
    },
    call_accept_001: {
      chapter: "第九章",
      title: "第二天语音",
      speaker: "忧黎",
      text: "“好。”\n\n“有结束时间，我反而敢开始。”",
      next: "call_common_001"
    },
    call_check_001: {
      chapter: "第九章",
      title: "第二天语音",
      speaker: "忧黎",
      text: "“会累一点。”\n\n“但不说会更卡。”",
      next: "call_common_001"
    },
    call_extend_001: {
      chapter: "第九章",
      title: "第二天语音",
      speaker: "忧黎",
      text: "“说不完就下次。”\n\n“我们不是一次性副本。”",
      next: "call_common_001"
    },
    call_common_001: {
      chapter: "第九章",
      title: "第二天语音",
      text: "语音接通。忧黎那边有很轻的风扇声，还有远处电视新闻的声音。他把麦克风离近了一点。",
      next: "call_common_002"
    },
    call_common_002: {
      chapter: "第九章",
      title: "第二天语音",
      speaker: "忧黎",
      text: "“昨天不是故意不报安全。”\n\n“家里临时来了亲戚，我手机被放在客厅充电，房间里一直有人。”",
      next: "call_common_003"
    },
    call_common_003: {
      chapter: "第九章",
      title: "第二天语音",
      speaker: "忧黎",
      text: "“我不想在他们面前解释，为什么我要给一个人发‘安全’。”",
      next: "choice_family_pressure"
    },
    choice_family_pressure: {
      chapter: "第九章",
      title: "家庭地图",
      text: "你第一次更清楚地看见：暑假不是休息区，它也有自己的怪。",
      choices: [
        {
          label: "【理解但不消失】“我理解不方便，但我们需要备用方案。”",
          next: "family_backup_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【安抚】“没关系，你不是故意的就好。”",
          next: "family_comfort_001",
          effects: { support: 1, pressure: -1 }
        },
        {
          label: "【说出需求】“我不需要你解释给他们听，但我需要知道你还安全。”",
          next: "family_need_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    family_backup_001: {
      chapter: "第九章",
      title: "家庭地图",
      speaker: "忧黎",
      text: "“备用方案。”\n\n“对，不能只有一条撤离路线。”",
      next: "family_common_001"
    },
    family_comfort_001: {
      chapter: "第九章",
      title: "家庭地图",
      speaker: "忧黎",
      text: "“嗯。”\n\n“但不能每次都靠你说没关系。”",
      next: "family_common_001"
    },
    family_need_001: {
      chapter: "第九章",
      title: "家庭地图",
      text: "忧黎安静了几秒。你听见他很轻地吸了一口气。",
      next: "family_need_002"
    },
    family_need_002: {
      chapter: "第九章",
      title: "家庭地图",
      speaker: "忧黎",
      text: "“我知道。”\n\n“这个需求合理。”",
      next: "family_common_001"
    },
    family_common_001: {
      chapter: "第九章",
      title: "家庭地图",
      text: "你们一起修改了纸巾协议的远程版：如果不能发“安全”，可以发一个句号；如果连句号也不能发，第二天主动说明。",
      next: "family_common_002"
    },
    family_common_002: {
      chapter: "第九章",
      title: "家庭地图",
      speaker: "忧黎",
      text: "“句号像最低配信号弹。”",
      next: "dot_001"
    },
    dot_001: {
      chapter: "第九章",
      title: "句号",
      text: "接下来的几天，忧黎真的发过几次句号。一个孤零零的“。”落在聊天框里，看起来很冷，但你知道它的意思。",
      next: "dot_002"
    },
    dot_002: {
      chapter: "第九章",
      title: "句号",
      text: "安全。暂时不方便。明天会说。",
      next: "dot_003"
    },
    dot_003: {
      chapter: "第九章",
      title: "句号",
      text: "你也开始练习在收到句号后不追问。可某个晚上，你突然发现自己很想听见他的声音，而不是一个标点。",
      next: "choice_dot_night"
    },
    choice_dot_night: {
      chapter: "第九章",
      title: "句号",
      text: "今天只有一个句号。你有点想他。",
      choices: [
        {
          label: "【尊重信号】回一个“收到”，明天再说。",
          next: "dot_receive_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【表达想念】“收到。我有点想你，明天方便时再听你说。”",
          next: "dot_miss_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【索要语音】“能不能现在出来说两句？”",
          next: "dot_call_001",
          effects: { pressure: 2, distance: 1 }
        }
      ]
    },
    dot_receive_001: {
      chapter: "第九章",
      title: "句号",
      text: "你回了“收到”。屏幕很快暗下去。想念没有消失，但它没有变成追击。",
      next: "dot_common_001"
    },
    dot_miss_001: {
      chapter: "第九章",
      title: "句号",
      text: "你把想念发出去，也把“明天方便时”一起发出去。它们站在同一句话里，像两个人并排走路。",
      next: "dot_common_001"
    },
    dot_call_001: {
      chapter: "第九章",
      title: "句号",
      text: "消息发出去后很久没有回复。你知道他可能真的不方便，可等待还是变得更难了。",
      next: "dot_common_001"
    },
    dot_common_001: {
      chapter: "第九章",
      title: "句号",
      text: "第二天中午，忧黎发来一张照片。照片里是一碗很普通的绿豆汤，旁边还有一只橘猫的尾巴。",
      next: "dot_common_002"
    },
    dot_common_002: {
      chapter: "第九章",
      title: "句号",
      speaker: "忧黎",
      text: "“昨天不方便。”\n\n“今天补一个开心的事：楼下猫抢镜。”",
      next: "dot_common_003"
    },
    dot_common_003: {
      chapter: "第九章",
      title: "句号",
      text: "你看着那条橘色尾巴，忽然意识到你们真的在执行第五条：开心的事也要说。",
      next: "video_remote_001"
    },
    video_remote_001: {
      chapter: "第九章",
      title: "远程剪辑",
      text: "七月中旬，忧黎开始剪新视频。因为家里不方便录音，他只能趁下午没人时低声补几句旁白。",
      next: "video_remote_002"
    },
    video_remote_002: {
      chapter: "第九章",
      title: "远程剪辑",
      speaker: "忧黎",
      text: "“我想做一期远程组队。”\n\n“不是教程。更像记录。”",
      next: "choice_remote_video"
    },
    choice_remote_video: {
      chapter: "第九章",
      title: "远程剪辑",
      text: "他把粗剪发给你。里面有游戏撤离，也有动态里那句“撤离不是逃跑”。",
      choices: [
        {
          label: "【保护边界】“可以记录，但不要把我们的协议讲得太具体。”",
          next: "remote_video_boundary_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【肯定表达】“这期很温柔，而且没有卖惨。”",
          next: "remote_video_praise_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【提出参与】“要不要我帮你写结尾字幕？”",
          next: "remote_video_join_001",
          effects: { trust: 1, support: 1 }
        }
      ]
    },
    remote_video_boundary_001: {
      chapter: "第九章",
      title: "远程剪辑",
      speaker: "忧黎",
      text: "“对。”\n\n“现实协议不进公共背包。”",
      next: "remote_video_common_001"
    },
    remote_video_praise_001: {
      chapter: "第九章",
      title: "远程剪辑",
      speaker: "忧黎",
      text: "“没有卖惨。”\n\n“这个评价我很想截图收藏。”",
      next: "remote_video_common_001"
    },
    remote_video_join_001: {
      chapter: "第九章",
      title: "远程剪辑",
      speaker: "忧黎",
      text: "“总策划回归。”\n\n“可以。帮我把太中二的句子删掉。”",
      next: "remote_video_common_001"
    },
    remote_video_common_001: {
      chapter: "第九章",
      title: "远程剪辑",
      text: "视频结尾最后定成一句很短的话：\n\n“低频联系不是掉线，有些队友会在地图另一边继续活着。”",
      next: "lowfreq_crisis_001"
    },
    lowfreq_crisis_001: {
      chapter: "第九章",
      title: "低频危机",
      text: "视频发布后反响不错。可现实没有因此变得稳定。月底，忧黎的消息又明显变少。",
      next: "lowfreq_crisis_002"
    },
    lowfreq_crisis_002: {
      chapter: "第九章",
      title: "低频危机",
      text: "这一次，不是一天。是三天里只有两个句号，一张模糊的晚饭照片，和一句“有点累”。",
      next: "lowfreq_crisis_003"
    },
    lowfreq_crisis_003: {
      chapter: "第九章",
      title: "低频危机",
      text: "你开始怀疑：试运行是不是正在静悄悄地失败？",
      next: "choice_crisis_response"
    },
    choice_crisis_response: {
      chapter: "第九章",
      title: "低频危机",
      text: "你需要面对这段低频联系。",
      choices: [
        {
          label: "【发起复盘】“我们找个方便的时间复盘一下联系频率？”",
          next: "crisis_review_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【给空间】“你最近很累的话，我们可以暂时降频，但别完全失联。”",
          next: "crisis_space_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【直接质问】“你是不是不想继续了？”",
          next: "crisis_question_001",
          effects: { pressure: 3, distance: 1 }
        }
      ]
    },
    crisis_review_001: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“可以。”\n\n“我也觉得需要复盘，不然会一直掉包。”",
      next: "crisis_common_001"
    },
    crisis_space_001: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“降频可以。”\n\n“完全失联不行。我知道。”",
      next: "crisis_common_001"
    },
    crisis_question_001: {
      chapter: "第九章",
      title: "低频危机",
      text: "这句话很锋利。你不是想伤他，只是害怕先被丢下。",
      next: "crisis_question_002"
    },
    crisis_question_002: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“不是。”\n\n“但我现在解释会很乱。晚上可以吗？”",
      next: "crisis_common_001"
    },
    crisis_common_001: {
      chapter: "第九章",
      title: "低频危机",
      text: "那天晚上，你们开了一次很短的语音。忧黎说，家里的氛围让他一直处在低电量状态。",
      next: "crisis_common_002"
    },
    crisis_common_002: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“我不是不想联系你。”\n\n“是我一想到要解释自己为什么累，就更累。”",
      next: "choice_explain_tired"
    },
    choice_explain_tired: {
      chapter: "第九章",
      title: "低频危机",
      text: "你终于听见了低频背后的原因。",
      choices: [
        {
          label: "【降低解释成本】“那以后可以只说：低电量。不用解释原因。”",
          next: "explain_lowbattery_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【关系确认】“我会害怕，但我不想让你为了安抚我透支。”",
          next: "explain_fear_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【共同修订】“我们把协议再改一次，适配暑假困难模式。”",
          next: "explain_rewrite_001",
          effects: { support: 1, honesty: 1, trust: 1 }
        }
      ]
    },
    explain_lowbattery_001: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“低电量。”\n\n“这个比‘我又不行了’好发。”",
      next: "explain_common_001"
    },
    explain_fear_001: {
      chapter: "第九章",
      title: "低频危机",
      text: "忧黎没有马上说话。你听见耳机里很轻的呼吸声。",
      next: "explain_fear_002"
    },
    explain_fear_002: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“你可以害怕。”\n\n“我也可以不透支。”\n\n“这两件事能同时存在，对吧？”",
      next: "explain_common_001"
    },
    explain_rewrite_001: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“暑假困难模式。”\n\n“建议削弱家庭环境这个怪。”",
      next: "explain_common_001"
    },
    explain_common_001: {
      chapter: "第九章",
      title: "低频危机",
      text: "最终，远程协议又多了两条：低电量时可以只发“低电量”；连续两天低电量后，第三天至少报一次安全或申请暂停。",
      next: "explain_common_002"
    },
    explain_common_002: {
      chapter: "第九章",
      title: "低频危机",
      speaker: "忧黎",
      text: "“试运行补丁 0.2。”\n\n“修复了低频联系导致双方脑内刷怪的问题。”",
      next: "august_001"
    },
    august_001: {
      chapter: "第九章",
      title: "八月",
      text: "八月的风热得像服务器散热失败。你们的联系依然不算高频，但逐渐有了节奏。",
      next: "august_002"
    },
    august_002: {
      chapter: "第九章",
      title: "八月",
      text: "有时是一句“低电量”，有时是一张猫，有时是凌晨发来的三行剪辑吐槽。你开始能分清：少说话不等于少在意。",
      next: "august_003"
    },
    august_003: {
      chapter: "第九章",
      title: "八月",
      speaker: "忧黎",
      text: "“我订了返校票。”\n\n“二十八号到。”",
      next: "choice_return_ticket"
    },
    choice_return_ticket: {
      chapter: "第九章",
      title: "返校票",
      text: "你看着这条消息，忽然感觉暑假的地图尽头出现了撤离点。",
      choices: [
        {
          label: "【自然期待】“那到时候见。”",
          next: "ticket_natural_001",
          effects: { trust: 1, pressure: -1 }
        },
        {
          label: "【表达想念】“我很想见你。”",
          next: "ticket_miss_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【具体安排】“我去接你？如果你想自己缓一下也可以。”",
          next: "ticket_pick_001",
          effects: { support: 2, honesty: 1 }
        }
      ]
    },
    ticket_natural_001: {
      chapter: "第九章",
      title: "返校票",
      speaker: "忧黎",
      text: "“嗯。”\n\n“到时候见。”",
      next: "ticket_common_001"
    },
    ticket_miss_001: {
      chapter: "第九章",
      title: "返校票",
      text: "对面显示正在输入，又消失，又再次出现。",
      next: "ticket_miss_002"
    },
    ticket_miss_002: {
      chapter: "第九章",
      title: "返校票",
      speaker: "忧黎",
      text: "“我也是。”\n\n“这句我打了三遍。”",
      next: "ticket_common_001"
    },
    ticket_pick_001: {
      chapter: "第九章",
      title: "返校票",
      speaker: "忧黎",
      text: "“可以接。”\n\n“但我刚下车可能很皱。”",
      next: "ticket_common_001"
    },
    ticket_common_001: {
      chapter: "第九章",
      title: "返校票",
      text: "那天晚上，忧黎发来一张新的游戏截图。两个人物站在地图边缘，远处是撤离点的绿光。",
      next: "ticket_common_002"
    },
    ticket_common_002: {
      chapter: "第九章",
      title: "返校票",
      speaker: "忧黎",
      text: "“等开学。”\n\n“我们再排一局现实。”",
      next: "demo9_end_001"
    },
    demo9_end_001: {
      chapter: "Demo 9 完成",
      title: "低频联系",
      text: "第九版 Demo 到这里结束。你们经历了远程低频、未读焦虑、家庭地图和协议补丁，终于学会：联系变少不一定是掉线，有时只是队友在另一边艰难保活。",
      unlockEnding: "ending_ch9",
      next: "demo9_end_002"
    },
    demo9_end_002: {
      chapter: "第十章",
      title: "开学再见",
      text: "二十八号那天，天气预报说有阵雨。你出门前看了三次手机，又看了三次窗外，像在确认一张即将刷新的地图。",
      next: "reunion_001"
    },
    reunion_001: {
      chapter: "第十章",
      title: "开学再见",
      text: "高铁站的人很多。行李箱滚轮声、广播声、孩子的哭声混在一起，比任何游戏大厅都吵。",
      next: "reunion_002"
    },
    reunion_002: {
      chapter: "第十章",
      title: "开学再见",
      text: "你站在出站口旁边，手里捏着一瓶矿泉水。瓶身上的水珠慢慢滑下来，像你迟迟没有说出口的紧张。",
      next: "reunion_003"
    },
    reunion_003: {
      chapter: "第十章",
      title: "开学再见",
      text: "然后你看见了忧黎。黑色口罩，灰色外套，头发被鲨鱼夹随意别着，背着一个有点鼓的双肩包。",
      next: "reunion_004"
    },
    reunion_004: {
      chapter: "第十章",
      title: "开学再见",
      text: "他比视频和语音里更真实。也更疲惫。像从一个很长的副本里走出来，装备没掉，但耐久快见底。",
      next: "reunion_005"
    },
    reunion_005: {
      chapter: "第十章",
      title: "开学再见",
      speaker: "忧黎",
      text: "“我到了。”",
      next: "choice_station_first"
    },
    choice_station_first: {
      chapter: "第十章",
      title: "出站口",
      text: "你们隔着半步距离。暑假的所有句号、低电量和想念，都挤在这一秒里。",
      choices: [
        {
          label: "【给水】把矿泉水递给他：“先补给。”",
          next: "station_water_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【表达想念】“欢迎回来。我很想你。”",
          next: "station_miss_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【轻松一点】“现实副本出站成功。”",
          next: "station_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    station_water_001: {
      chapter: "第十章",
      title: "出站口",
      text: "忧黎接过水，拧瓶盖时手指有点慢。你没有催。",
      next: "station_water_002"
    },
    station_water_002: {
      chapter: "第十章",
      title: "出站口",
      speaker: "忧黎",
      text: "“补给收到。”\n\n“谢谢。”",
      next: "station_common_001"
    },
    station_miss_001: {
      chapter: "第十章",
      title: "出站口",
      text: "忧黎的眼睛微微睁大，像这句话比广播声更准确地击中了他。",
      next: "station_miss_002"
    },
    station_miss_002: {
      chapter: "第十章",
      title: "出站口",
      speaker: "忧黎",
      text: "“我也是。”\n\n“现在可以当面说，不用打三遍。”",
      next: "station_common_001"
    },
    station_joke_001: {
      chapter: "第十章",
      title: "出站口",
      speaker: "忧黎",
      text: "“差点被人流卡位。”\n\n“但撤出来了。”",
      next: "station_common_001"
    },
    station_common_001: {
      chapter: "第十章",
      title: "出站口",
      text: "你们一起往外走。雨还没落下来，空气却已经带着潮味。忧黎的行李箱轮子有一只不太听话，歪歪扭扭地响。",
      next: "station_common_002"
    },
    station_common_002: {
      chapter: "第十章",
      title: "出站口",
      speaker: "忧黎",
      text: "“它暑假也低电量。”",
      next: "choice_luggage"
    },
    choice_luggage: {
      chapter: "第十章",
      title: "行李箱",
      text: "那只行李箱轮子一路抗议。你想怎么做？",
      choices: [
        {
          label: "【帮他拉】“我来吧，你背包已经够重了。”",
          next: "luggage_help_001",
          effects: { support: 2 }
        },
        {
          label: "【先询问】“要我帮你拉一会儿吗？”",
          next: "luggage_ask_001",
          effects: { honesty: 1, support: 1 }
        },
        {
          label: "【并肩吐槽】“它需要试运行补丁 0.3。”",
          next: "luggage_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    luggage_help_001: {
      chapter: "第十章",
      title: "行李箱",
      text: "你伸手接过行李箱。忧黎没有立刻松手，而是看了你一眼。",
      next: "luggage_help_002"
    },
    luggage_help_002: {
      chapter: "第十章",
      title: "行李箱",
      speaker: "忧黎",
      text: "“下次先问。”\n\n他声音不重，又补了一句。\n\n“但这次谢谢。”",
      next: "luggage_common_001"
    },
    luggage_ask_001: {
      chapter: "第十章",
      title: "行李箱",
      speaker: "忧黎",
      text: "“可以。”\n\n“申请通过。”",
      next: "luggage_common_001"
    },
    luggage_joke_001: {
      chapter: "第十章",
      title: "行李箱",
      speaker: "忧黎",
      text: "“补丁内容：减少无意义噪音。”\n\n“顺便修复主人返校焦虑。”",
      next: "luggage_common_001"
    },
    luggage_common_001: {
      chapter: "第十章",
      title: "行李箱",
      text: "公交车来得很慢。你们站在站牌下，偶尔说一句话，更多时候只是看着车流。面对面之后，沉默变得和语音里不太一样。",
      next: "bus_001"
    },
    bus_001: {
      chapter: "第十章",
      title: "返校路上",
      text: "车上没有并排座。你们隔着过道站着，扶手摇晃，手机屏幕偶尔亮起又暗下去。",
      next: "bus_002"
    },
    bus_002: {
      chapter: "第十章",
      title: "返校路上",
      speaker: "忧黎",
      text: "“我在车上想过，见面会不会很尴尬。”",
      next: "choice_reunion_awkw"
    },
    choice_reunion_awkw: {
      chapter: "第十章",
      title: "返校路上",
      text: "忧黎说出了你也有点担心的事。",
      choices: [
        {
          label: "【承认】“有一点。但尴尬也可以慢慢加载。”",
          next: "awkward_admit_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【安抚】“现在这样就挺好，不用急着恢复满状态。”",
          next: "awkward_comfort_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【开玩笑】“尴尬说明我们不是 AI 自动对话。”",
          next: "awkward_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    awkward_admit_001: {
      chapter: "第十章",
      title: "返校路上",
      speaker: "忧黎",
      text: "“慢慢加载。”\n\n“那不要强制跳过加载动画。”",
      next: "bus_common_001"
    },
    awkward_comfort_001: {
      chapter: "第十章",
      title: "返校路上",
      speaker: "忧黎",
      text: "“嗯。”\n\n“我现在大概 63%。”",
      next: "bus_common_001"
    },
    awkward_joke_001: {
      chapter: "第十章",
      title: "返校路上",
      speaker: "忧黎",
      text: "“那我通过图灵测试了。”\n\n“虽然很困。”",
      next: "bus_common_001"
    },
    bus_common_001: {
      chapter: "第十章",
      title: "返校路上",
      text: "公交车驶过河堤。你认出那是第七章里现实撤离点的方向。忧黎也看见了，却没有立刻说话。",
      next: "bus_common_002"
    },
    bus_common_002: {
      chapter: "第十章",
      title: "返校路上",
      speaker: "忧黎",
      text: "“等我放完行李，能不能去那里一趟？”",
      next: "choice_go_extract_again"
    },
    choice_go_extract_again: {
      chapter: "第十章",
      title: "再去撤离点",
      text: "忧黎想回到那个现实里的撤离点。",
      choices: [
        {
          label: "【答应】“好。今天不赶时间。”",
          next: "extract_again_yes_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【确认体力】“可以，但你先休息一下，我们不急。”",
          next: "extract_again_rest_001",
          effects: { honesty: 1, support: 2 }
        },
        {
          label: "【表达期待】“我也想去。”",
          next: "extract_again_want_001",
          effects: { trust: 2, honesty: 1 }
        }
      ]
    },
    extract_again_yes_001: {
      chapter: "第十章",
      title: "再去撤离点",
      speaker: "忧黎",
      text: "“不赶时间。”\n\n“这四个字暑假里很稀有。”",
      next: "dorm_001"
    },
    extract_again_rest_001: {
      chapter: "第十章",
      title: "再去撤离点",
      speaker: "忧黎",
      text: "“好。”\n\n“先把行李怪清掉。”",
      next: "dorm_001"
    },
    extract_again_want_001: {
      chapter: "第十章",
      title: "再去撤离点",
      text: "忧黎看向窗外，耳尖被公交车窗反射出的光照得很浅。",
      next: "extract_again_want_002"
    },
    extract_again_want_002: {
      chapter: "第十章",
      title: "再去撤离点",
      speaker: "忧黎",
      text: "“那就一起去。”",
      next: "dorm_001"
    },
    dorm_001: {
      chapter: "第十章",
      title: "宿舍楼下",
      text: "忧黎把行李放回宿舍。你在楼下等他。开学前的校园还没完全醒，人少，树影很长。",
      next: "dorm_002"
    },
    dorm_002: {
      chapter: "第十章",
      title: "宿舍楼下",
      text: "十七分钟后，他重新下来，外套换成了更轻的衬衫，口罩摘了，眼下的疲惫还在，但整个人像终于从家里的地图切回了学校。",
      next: "extract_point_001"
    },
    extract_point_001: {
      chapter: "第十章",
      title: "现实撤离点",
      text: "你们又到了河堤。长椅还在那里，油漆依旧发白，像一份没有被清档的旧存档。",
      next: "extract_point_002"
    },
    extract_point_002: {
      chapter: "第十章",
      title: "现实撤离点",
      speaker: "忧黎",
      text: "“我暑假有几次很想说，不试了。”",
      next: "extract_point_003"
    },
    extract_point_003: {
      chapter: "第十章",
      title: "现实撤离点",
      text: "这句话并不轻。但他说出来的时候，没有躲开你的眼睛。",
      next: "choice_almost_quit"
    },
    choice_almost_quit: {
      chapter: "第十章",
      title: "差点退出",
      text: "忧黎说，他暑假有几次差点想退出试运行。",
      choices: [
        {
          label: "【接住】“你现在告诉我了，这很重要。”",
          next: "quit_accept_001",
          effects: { support: 2, trust: 1 }
        },
        {
          label: "【诚实】“听到这句我会难过，但我也想知道真实的你。”",
          next: "quit_honest_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【询问】“那是什么让你没有退出？”",
          next: "quit_ask_001",
          effects: { honesty: 1, support: 1 }
        }
      ]
    },
    quit_accept_001: {
      chapter: "第十章",
      title: "差点退出",
      speaker: "忧黎",
      text: "“重要。”\n\n“我以前会把这种想法直接删掉，然后假装没有。”",
      next: "quit_common_001"
    },
    quit_honest_001: {
      chapter: "第十章",
      title: "差点退出",
      speaker: "忧黎",
      text: "“难过也可以。”\n\n“真实不应该只给你看好看的部分。”",
      next: "quit_common_001"
    },
    quit_ask_001: {
      chapter: "第十章",
      title: "差点退出",
      text: "忧黎低头看着长椅边的一片叶子。",
      next: "quit_ask_002"
    },
    quit_ask_002: {
      chapter: "第十章",
      title: "差点退出",
      speaker: "忧黎",
      text: "“因为你没有把低频当成扣分项。”\n\n“也因为我想知道，开学之后我们会不会好一点。”",
      next: "quit_common_001"
    },
    quit_common_001: {
      chapter: "第十章",
      title: "差点退出",
      text: "忧黎坐到长椅上，双手搭在膝盖上。他没有像第七章那样紧绷，但也没有完全放松。",
      next: "quit_common_002"
    },
    quit_common_002: {
      chapter: "第十章",
      title: "差点退出",
      speaker: "忧黎",
      text: "“我想把试运行结束掉。”",
      next: "quit_common_003"
    },
    quit_common_003: {
      chapter: "第十章",
      title: "差点退出",
      text: "你的心跳猛地一沉。下一秒，他又补了一句。",
      next: "quit_common_004"
    },
    quit_common_004: {
      chapter: "第十章",
      title: "差点退出",
      speaker: "忧黎",
      text: "“不是分开。”\n\n“是不要再叫试运行了。”",
      next: "choice_formal_relation"
    },
    choice_formal_relation: {
      chapter: "第十章",
      title: "正式关系",
      text: "风从河面吹来。你们终于到了这个问题前面。",
      choices: [
        {
          label: "【确认关系】“那我们正式组队吧。”",
          next: "formal_team_001",
          effects: { trust: 2, support: 1 }
        },
        {
          label: "【慢但明确】“我愿意。但我们还是保留暂停和边界。”",
          next: "formal_boundary_001",
          effects: { honesty: 2, support: 2 }
        },
        {
          label: "【坦白紧张】“我很开心，也有点害怕。”",
          next: "formal_scared_001",
          effects: { honesty: 2, trust: 1 }
        }
      ]
    },
    formal_team_001: {
      chapter: "第十章",
      title: "正式关系",
      text: "忧黎先是愣住，然后很慢地笑了一下。那个笑容不再像命中提示，而像终于读完了一条很长的系统公告。",
      next: "formal_team_002"
    },
    formal_team_002: {
      chapter: "第十章",
      title: "正式关系",
      speaker: "忧黎",
      text: "“正式组队。”\n\n“好。”",
      next: "formal_common_001"
    },
    formal_boundary_001: {
      chapter: "第十章",
      title: "正式关系",
      speaker: "忧黎",
      text: "“保留暂停和边界。”\n\n“这个不是降温，是防炸服。”",
      next: "formal_common_001"
    },
    formal_scared_001: {
      chapter: "第十章",
      title: "正式关系",
      speaker: "忧黎",
      text: "“我也是。”\n\n“开心和害怕可以同时存在。”",
      next: "formal_common_001"
    },
    formal_common_001: {
      chapter: "第十章",
      title: "正式关系",
      text: "你们没有拥抱得很戏剧化。只是肩膀轻轻碰到一起，又没有立刻躲开。这个距离比任何宣言都更具体。",
      next: "formal_common_002"
    },
    formal_common_002: {
      chapter: "第十章",
      title: "正式关系",
      speaker: "忧黎",
      text: "“那纸巾协议还有效吗？”",
      next: "choice_agreement_keep"
    },
    choice_agreement_keep: {
      chapter: "第十章",
      title: "正式关系",
      text: "你们曾经写在纸巾上的协议，现在要不要继续保留？",
      choices: [
        {
          label: "【保留】“有效。正式关系也需要撤离路线。”",
          next: "agreement_keep_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【升级】“有效，但可以升级成正式版。”",
          next: "agreement_upgrade_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【玩笑】“有效期自动续费，暂不支持退款。”",
          next: "agreement_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    agreement_keep_001: {
      chapter: "第十章",
      title: "正式关系",
      speaker: "忧黎",
      text: "“正式关系也需要撤离路线。”\n\n“这句很像我们的校训。”",
      next: "agreement_common_001"
    },
    agreement_upgrade_001: {
      chapter: "第十章",
      title: "正式关系",
      speaker: "忧黎",
      text: "“正式版。”\n\n“那我要加一条：线下见面时可以申请牵手，但要等审核。”",
      next: "agreement_common_001"
    },
    agreement_joke_001: {
      chapter: "第十章",
      title: "正式关系",
      speaker: "忧黎",
      text: "“霸王条款。”\n\n“但我暂时不投诉。”",
      next: "agreement_common_001"
    },
    agreement_common_001: {
      chapter: "第十章",
      title: "正式关系",
      text: "夕阳落在河面上。你们拿出手机，把远程协议改成新的名字：正式组队协议。",
      next: "hand_001"
    },
    hand_001: {
      chapter: "第十章",
      title: "牵手申请",
      speaker: "忧黎",
      text: "“我现在可以申请一件事吗？”",
      next: "hand_002"
    },
    hand_002: {
      chapter: "第十章",
      title: "牵手申请",
      text: "你大概猜到了，但还是认真看着他。",
      next: "choice_hand"
    },
    choice_hand: {
      chapter: "第十章",
      title: "牵手申请",
      text: "忧黎没有直接伸手。他在等你的回应。",
      choices: [
        {
          label: "【同意】“申请通过。”",
          next: "hand_yes_001",
          effects: { trust: 2, pressure: -1 }
        },
        {
          label: "【慢一点】“可以，但慢一点。”",
          next: "hand_slow_001",
          effects: { honesty: 2, support: 1 }
        },
        {
          label: "【调侃】“请提交详细申请材料。”",
          next: "hand_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    hand_yes_001: {
      chapter: "第十章",
      title: "牵手申请",
      text: "忧黎把手伸过来。指尖先碰到你的指尖，像一次很轻的连接测试。然后你们慢慢扣住。",
      next: "hand_common_001"
    },
    hand_slow_001: {
      chapter: "第十章",
      title: "牵手申请",
      speaker: "忧黎",
      text: "“慢一点。”\n\n“收到。”",
      next: "hand_slow_002"
    },
    hand_slow_002: {
      chapter: "第十章",
      title: "牵手申请",
      text: "他先把手背放在长椅上，等你自己靠过去。这个过程慢得有点笨拙，却让人安心。",
      next: "hand_common_001"
    },
    hand_joke_001: {
      chapter: "第十章",
      title: "牵手申请",
      speaker: "忧黎",
      text: "“申请理由：想确认正式组队手感。”\n\n“风险评估：可能心率上升。”",
      next: "hand_yes_001"
    },
    hand_common_001: {
      chapter: "第十章",
      title: "牵手申请",
      text: "他的手比你想象中凉一点。你没有握得很紧，只是让他知道，如果想松开，也可以松开。",
      next: "hand_common_002"
    },
    hand_common_002: {
      chapter: "第十章",
      title: "牵手申请",
      speaker: "忧黎",
      text: "“我现在有点紧张。”",
      next: "choice_hand_response"
    },
    choice_hand_response: {
      chapter: "第十章",
      title: "牵手申请",
      text: "你感到他的指尖微微用力。",
      choices: [
        {
          label: "【陪他紧张】“我也是。我们可以一起紧张。”",
          next: "hand_response_same_001",
          effects: { honesty: 2, trust: 1 }
        },
        {
          label: "【给撤离权】“如果不舒服，随时可以松开。”",
          next: "hand_response_exit_001",
          effects: { support: 2, pressure: -1 }
        },
        {
          label: "【轻松吐槽】“正式组队第一项测试：牵手延迟。”",
          next: "hand_response_joke_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    hand_response_same_001: {
      chapter: "第十章",
      title: "牵手申请",
      speaker: "忧黎",
      text: "“一起紧张。”\n\n“那就不算我一个人掉帧。”",
      next: "night_game_001"
    },
    hand_response_exit_001: {
      chapter: "第十章",
      title: "牵手申请",
      speaker: "忧黎",
      text: "“知道。”\n\n“但我现在不想松。”",
      next: "night_game_001"
    },
    hand_response_joke_001: {
      chapter: "第十章",
      title: "牵手申请",
      speaker: "忧黎",
      text: "“当前延迟：心跳过高，网络良好。”",
      next: "night_game_001"
    },
    night_game_001: {
      chapter: "第十章",
      title: "开学第一局",
      text: "晚上，你们回到宿舍后上线。开学第一局，忧黎没有开直播，也没有录素材。",
      next: "night_game_002"
    },
    night_game_002: {
      chapter: "第十章",
      title: "开学第一局",
      speaker: "忧黎",
      text: "“今天只打给我们自己看。”",
      next: "night_game_003"
    },
    night_game_003: {
      chapter: "第十章",
      title: "开学第一局",
      text: "地图加载。你们出生在最初那张旧厂区地图。灯光昏黄，枪声很远，一切像回到第一局，又不像第一局。",
      next: "choice_first_formal_game"
    },
    choice_first_formal_game: {
      chapter: "第十章",
      title: "开学第一局",
      text: "正式组队后的第一局，你要说什么？",
      choices: [
        {
          label: "【默契】“这把别贪。先活着。”",
          next: "formal_game_alive_001",
          effects: { trust: 1, support: 1 }
        },
        {
          label: "【承诺】“我看后点，你看前面。”",
          next: "formal_game_back_001",
          effects: { support: 2, honesty: 1 }
        },
        {
          label: "【玩笑】“正式关系第一局，猫会不会来验收？”",
          next: "formal_game_cat_001",
          effects: { trust: 1, pressure: -1 }
        }
      ]
    },
    formal_game_alive_001: {
      chapter: "第十章",
      title: "开学第一局",
      speaker: "忧黎",
      text: "“先活着。”\n\n“老规矩，新队伍。”",
      next: "formal_game_common_001"
    },
    formal_game_back_001: {
      chapter: "第十章",
      title: "开学第一局",
      speaker: "忧黎",
      text: "“好。”\n\n“我看前面，你也别忘了看自己血条。”",
      next: "formal_game_common_001"
    },
    formal_game_cat_001: {
      chapter: "第十章",
      title: "开学第一局",
      speaker: "忧黎",
      text: "“如果它还比我们富，我会举报经济系统。”",
      next: "formal_game_common_001"
    },
    formal_game_common_001: {
      chapter: "第十章",
      title: "开学第一局",
      text: "这一局打得不算完美。你们绕路绕错一次，烟雾弹丢歪一次，忧黎还因为打喷嚏漏听了一秒脚步。",
      next: "formal_game_common_002"
    },
    formal_game_common_002: {
      chapter: "第十章",
      title: "开学第一局",
      text: "但你们没有互相责怪。错误被报点、补枪和笑声接住，像生活里那些不够漂亮的瞬间。",
      next: "formal_game_common_003"
    },
    formal_game_common_003: {
      chapter: "第十章",
      title: "开学第一局",
      text: "撤离倒计时开始。五，四，三，二，一。",
      next: "formal_game_common_004"
    },
    formal_game_common_004: {
      chapter: "第十章",
      title: "开学第一局",
      text: "撤离成功。",
      next: "formal_game_common_005"
    },
    formal_game_common_005: {
      chapter: "第十章",
      title: "开学第一局",
      speaker: "忧黎",
      text: "“开学第一局，通过。”",
      next: "demo10_end_001"
    },
    demo10_end_001: {
      chapter: "Demo 10 完成",
      title: "开学再见",
      text: "第十版 Demo 到这里结束。你们在出站口重逢，在现实撤离点结束试运行，又把纸巾协议升级成正式组队协议。正式结局分歧即将开启。",
      unlockEnding: "ending_ch10",
      next: "demo10_end_002"
    },
    demo10_end_002: {
      chapter: "最终章",
      title: "结局判定",
      text: "开学第一局结束后，你没有立刻退出游戏。结算界面停在屏幕上，像一面安静的镜子，把一路走来的选择全部映出来。",
      next: "ending_gate_001"
    },
    ending_gate_001: {
      chapter: "最终章",
      title: "结局判定",
      text: "从第一句报点，到复诊日；从主号视频，到期末前夜；从现实撤离点，到暑假的句号和低电量。你们不是靠某一次选择走到这里的。",
      next: "ending_gate_002"
    },
    ending_gate_002: {
      chapter: "最终章",
      title: "结局判定",
      text: "关系不像游戏结算，只看击杀、收益和撤离。它更像一张长线地图：信任、支持、诚实、压力和距离，都在地图上留下了脚印。",
      showFlags: true,
      next: "ending_route_check"
    },
    ending_route_check: {
      chapter: "最终章",
      title: "结局判定",
      text: "系统正在根据你的累计选择判定最终结局……",
      routes: [
        {
          when: { trust: { min: 30 }, support: { min: 28 }, honesty: { min: 24 }, pressure: { max: 7 }, distance: { max: 7 } },
          next: "hidden_001"
        },
        {
          when: { trust: { min: 25 }, support: { min: 24 }, honesty: { min: 19 }, pressure: { max: 10 }, distance: { max: 10 } },
          next: "true_001"
        },
        {
          when: { trust: { min: 18 }, support: { min: 18 }, honesty: { min: 14 }, pressure: { max: 14 }, distance: { max: 14 } },
          next: "good_001"
        },
        {
          next: "normal_001"
        }
      ]
    },
    normal_001: {
      chapter: "普通结局",
      title: "观众席",
      text: "开学后的日子重新拥挤起来。课表、社团、作业和更新计划把时间切成很多小块，你和忧黎仍然会聊天，但频率慢慢降了下来。",
      next: "normal_002"
    },
    normal_002: {
      chapter: "普通结局",
      title: "观众席",
      text: "这不是谁突然背叛了谁。只是有些话没有及时说清，有些担心被压成“没事”，有些想靠近的瞬间又被距离轻轻推远。",
      next: "normal_003"
    },
    normal_003: {
      chapter: "普通结局",
      title: "观众席",
      speaker: "忧黎",
      text: "“我最近可能会把更新频率调回来。”\n\n“之前欠了太多。”",
      next: "normal_004"
    },
    normal_004: {
      chapter: "普通结局",
      title: "观众席",
      text: "你说好。你们没有争吵，也没有正式分开。只是那份正式组队协议被放进聊天记录深处，像一张曾经很重要的地图。",
      next: "normal_005"
    },
    normal_005: {
      chapter: "普通结局",
      title: "观众席",
      text: "后来，你在B站首页刷到忧黎的新视频。标题是：《新赛季撤离路线整理：别把所有风险都算成收益》。",
      next: "normal_006"
    },
    normal_006: {
      chapter: "普通结局",
      title: "观众席",
      text: "他的声音依旧冷静，语速不快，报点清楚。评论区有人说主播终于满血回来了。你看着那条评论，停了很久。",
      next: "normal_007"
    },
    normal_007: {
      chapter: "普通结局",
      title: "观众席",
      speaker: "忧黎",
      text: "“如果你不是很确定自己能不能压住，那就别硬压。先保证能撤。”",
      next: "normal_008"
    },
    normal_008: {
      chapter: "普通结局",
      title: "观众席",
      text: "你忽然想起你们第一天认识时，他也是这样说的。原来有些人会在你的生命里停留一段路，教会你看见撤离点，然后继续走向自己的地图。",
      next: "normal_009"
    },
    normal_009: {
      chapter: "普通结局",
      title: "观众席",
      text: "你给视频点了赞，没有留言。屏幕暗下去时，你在倒影里看见自己。你已经不再是那个只会盯着结算界面的人了。",
      next: "normal_end"
    },
    normal_end: {
      chapter: "普通结局",
      title: "观众席",
      text: "普通结局：观众席。\n\n你们没有成为最终队友，但你仍然见证过他从低电量里慢慢站起来。观众席不是失败，它只是另一种温柔的距离。",
      unlockEnding: "ending_normal",
      next: null
    },
    good_001: {
      chapter: "好结局",
      title: "撤离点",
      text: "正式组队之后，你们没有立刻变成传说中的完美情侣。该卡壳的时候还是会卡壳，该低电量的时候还是会低电量。",
      next: "good_002"
    },
    good_002: {
      chapter: "好结局",
      title: "撤离点",
      text: "但你们逐渐学会了一件事：关系里的撤离，不是把对方丢下，而是在情绪快要爆炸前，先把自己从危险区带出来。",
      next: "good_003"
    },
    good_003: {
      chapter: "好结局",
      title: "撤离点",
      text: "有一天晚上，忧黎主动发来消息。",
      next: "good_004"
    },
    good_004: {
      chapter: "好结局",
      title: "撤离点",
      speaker: "忧黎",
      text: "“低电量。”\n\n“但不是坏掉。”",
      next: "good_005"
    },
    good_005: {
      chapter: "好结局",
      title: "撤离点",
      text: "你没有追问一串为什么，也没有立刻冲到他宿舍楼下。你只是按协议问他：需要陪伴、建议，还是空间？",
      next: "good_006"
    },
    good_006: {
      chapter: "好结局",
      title: "撤离点",
      speaker: "忧黎",
      text: "“陪伴。”\n\n“但不用讲话。”",
      next: "good_007"
    },
    good_007: {
      chapter: "好结局",
      title: "撤离点",
      text: "于是你们开着语音，各自做自己的事。你写作业，他剪视频。耳机里只有键盘声、鼠标声和偶尔很轻的呼吸声。",
      next: "good_008"
    },
    good_008: {
      chapter: "好结局",
      title: "撤离点",
      text: "这不像热烈的恋爱片段，却很像你们。你们没有把对方当成药，也没有把关系当成万能急救包。你们只是共享了一块安全区。",
      next: "good_009"
    },
    good_009: {
      chapter: "好结局",
      title: "撤离点",
      speaker: "忧黎",
      text: "“我以前以为撤离点只能一个人用。”\n\n“现在发现，两个人也可以排队。”",
      next: "good_010"
    },
    good_010: {
      chapter: "好结局",
      title: "撤离点",
      text: "你笑了。屏幕里的文档还没写完，现实里的路也还很长。但至少今晚，你们都在安全区里。",
      next: "good_end"
    },
    good_end: {
      chapter: "好结局",
      title: "撤离点",
      text: "好结局：撤离点。\n\n你们学会了在靠近和撤离之间找到节奏。不是永远满血，也不是永远并肩冲锋，但你们知道安全线在哪里。",
      unlockEnding: "ending_good",
      next: null
    },
    true_001: {
      chapter: "真结局",
      title: "组队成功",
      text: "十一月的校园开始降温。银杏叶落在路边，像一地被系统发放的金色物资。忧黎的新视频播放量破了他个人记录。",
      next: "true_002"
    },
    true_002: {
      chapter: "真结局",
      title: "组队成功",
      text: "评论区热闹得像战区，有人催更，有人考古，有人问：主播最近是不是状态很好？声音听起来轻了很多。",
      next: "true_003"
    },
    true_003: {
      chapter: "真结局",
      title: "组队成功",
      speaker: "忧黎",
      text: "“他们说我声音轻了。”\n\n“我自己没听出来。”",
      next: "true_004"
    },
    true_004: {
      chapter: "真结局",
      title: "组队成功",
      text: "你们坐在现实撤离点的长椅上。这里已经从秘密基地变成了固定刷新点：状态不好时来，状态好时也来。",
      next: "true_005"
    },
    true_005: {
      chapter: "真结局",
      title: "组队成功",
      speaker: "你",
      text: "“可能是因为你现在不用一直压枪。”",
      next: "true_006"
    },
    true_006: {
      chapter: "真结局",
      title: "组队成功",
      text: "忧黎愣了一下，然后低头笑了。风吹起他耳边的碎发，鲨鱼夹懒洋洋地固定着一小束黑发。",
      next: "true_007"
    },
    true_007: {
      chapter: "真结局",
      title: "组队成功",
      speaker: "忧黎",
      text: "“也不是完全不用压。”\n\n“只是有人会提醒我，后坐力不是人格缺陷。”",
      next: "true_008"
    },
    true_008: {
      chapter: "真结局",
      title: "组队成功",
      text: "你们一起把正式组队协议又改了一版。它已经不像最初那么紧张，甚至多了几条很生活化的内容。",
      next: "true_009"
    },
    true_009: {
      chapter: "真结局",
      title: "组队成功",
      text: "比如：考试周禁止互相熬夜证明爱意。比如：吵架时可以申请暂停，但不能用消失惩罚对方。比如：看到猫要拍照。",
      next: "true_010"
    },
    true_010: {
      chapter: "真结局",
      title: "组队成功",
      speaker: "忧黎",
      text: "“最后一条很重要。”",
      next: "true_011"
    },
    true_011: {
      chapter: "真结局",
      title: "组队成功",
      text: "晚上，你们久违地双排。那只据说比你们富的野猫NPC再次出现，忧黎沉默两秒，非常认真地给它标了点。",
      next: "true_012"
    },
    true_012: {
      chapter: "真结局",
      title: "组队成功",
      speaker: "忧黎",
      text: "“高价值目标。”",
      next: "true_013"
    },
    true_013: {
      chapter: "真结局",
      title: "组队成功",
      text: "你笑得差点错过脚步声。忧黎补枪，你丢烟。你们没有打出多么完美的操作，却把每一个失误都接住了。",
      next: "true_014"
    },
    true_014: {
      chapter: "真结局",
      title: "组队成功",
      text: "撤离成功。结算界面上收益普通，战绩普通，但队伍状态显示：两人存活。",
      next: "true_015"
    },
    true_015: {
      chapter: "真结局",
      title: "组队成功",
      speaker: "忧黎",
      text: "“下把一起？”",
      next: "true_016"
    },
    true_016: {
      chapter: "真结局",
      title: "组队成功",
      text: "这句话曾经是故事的开始。现在它不再像试探，而像一个可以被日常反复确认的约定。",
      next: "true_end"
    },
    true_end: {
      chapter: "真结局",
      title: "组队成功",
      text: "真结局：组队成功。\n\n你们没有把彼此修好，而是学会了怎样一起活着、一起复盘、一起撤离，也一起进入下一局。",
      unlockEnding: "ending_true",
      next: null
    },
    hidden_001: {
      chapter: "隐藏结局",
      title: "主号",
      text: "十二月，忧黎说想做一件事。语气很轻，却比任何一次投稿前都认真。",
      next: "hidden_002"
    },
    hidden_002: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“我想发一个不是攻略的视频。”\n\n“也不是卖惨。”",
      next: "hidden_003"
    },
    hidden_003: {
      chapter: "隐藏结局",
      title: "主号",
      text: "他把脚本发给你。标题暂定：《主号》。没有露脸，没有具体隐私，只有游戏画面、现实河面的空镜，和他自己的声音。",
      next: "hidden_004"
    },
    hidden_004: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“以前我总觉得，主号必须看起来稳定、强、会报点，不能掉线，不能低电量。”",
      next: "hidden_005"
    },
    hidden_005: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“所以我把很多东西都放到小号里。情绪、复诊、害怕、喜欢谁。”",
      next: "hidden_006"
    },
    hidden_006: {
      chapter: "隐藏结局",
      title: "主号",
      text: "你看到这里，心里很轻地动了一下。你知道他不是要把伤口展示给所有人看，他只是终于不再把真实的自己全都藏进离线状态。",
      next: "hidden_007"
    },
    hidden_007: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“后来有人告诉我，可以不装正常，也可以不公开处刑自己。”\n\n“可以有边界地诚实。”",
      next: "hidden_008"
    },
    hidden_008: {
      chapter: "隐藏结局",
      title: "主号",
      text: "视频最后，是一段游戏结算。你们没有开麦，只在队伍文字里打了两句。",
      next: "hidden_009"
    },
    hidden_009: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "你",
      text: "“看前面。”",
      next: "hidden_010"
    },
    hidden_010: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“嗯。”\n\n“也看你。”",
      next: "hidden_011"
    },
    hidden_011: {
      chapter: "隐藏结局",
      title: "主号",
      text: "视频发布那天，评论区安静了很久，然后慢慢出现很多很长的留言。有人说谢谢，有人说自己也在低电量，有人说原来撤离不是逃跑。",
      next: "hidden_012"
    },
    hidden_012: {
      chapter: "隐藏结局",
      title: "主号",
      text: "忧黎没有逐条回复。他只是置顶了一句话。",
      next: "hidden_013"
    },
    hidden_013: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“谢谢你们看见。但请先照顾自己的血条。”",
      next: "hidden_014"
    },
    hidden_014: {
      chapter: "隐藏结局",
      title: "主号",
      text: "晚上，你们去现实撤离点。长椅还是那张长椅，风还是从河面吹来。忧黎把手机递给你，屏幕上是视频后台。",
      next: "hidden_015"
    },
    hidden_015: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“我有点害怕。”\n\n“但不是后悔。”",
      next: "hidden_016"
    },
    hidden_016: {
      chapter: "隐藏结局",
      title: "主号",
      text: "你握住他的手。这一次，他没有先申请，但你知道他在等你，也知道他随时可以松开。",
      next: "hidden_017"
    },
    hidden_017: {
      chapter: "隐藏结局",
      title: "主号",
      speaker: "忧黎",
      text: "“我以前以为主号是给别人看的。”\n\n“现在觉得，主号应该是我自己也能登录的那个。”",
      next: "hidden_018"
    },
    hidden_018: {
      chapter: "隐藏结局",
      title: "主号",
      text: "河面上的灯光被风吹散，又慢慢聚回来。你们并肩坐着，没有急着说下一句话。世界没有因此完美，但至少此刻，它允许两个人真实地在线。",
      next: "hidden_end"
    },
    hidden_end: {
      chapter: "隐藏结局",
      title: "主号",
      text: "隐藏结局：主号。\n\n忧黎没有成为无坚不摧的人。他只是终于把真实的自己，从小号转回主号。而你在他的好友列表里，也在他的现实地图上。",
      unlockEnding: "ending_hidden",
      next: null
    }
  }
};