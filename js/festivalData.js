// js/festivalData.js

const FES_DATA = [
  {
    floor: "B1階",
    stalls: [
      { name: "タピオカ販売", place: "家庭科室", group: "料理研究愛好会" },
      { name: "アライ神社喫茶", place: "美術室", group: "美術・アートクラフト部" , keywords: ["喫茶", "びじゅつ", "びじゅつしつ", "美術部", "アート", "b1"]},
      { name: "スタンド製作", place: "中学技術ルーム", group: "ものつくり部(建築班)" },
      { name: "活動紹介", place: "ものつくり系活動室①-②", group: "同上(自動車班)" },
      { name: "ミニSL乗車体験", place: "正門横・ミニSL工房", group: "同上(SL班)" },
      { name: "製作体験", place: "文理未来レクチャールーム", group: "同上(機械班)" }
    ]
  },
  {
    floor: "1階",
    stalls: [
      { name: "中学入試相談室", place: "中学自習室", group: "" },
      { name: "高校入試相談室", place: "コミュニケーションラボ", group: "" },
      { name: "休憩室", place: "1A会議室＆110-112-113-114", group: "" },
      { name: "図書委員会企画展示", place: "図書館", group: "図書委員会" },
      { name: "食品販売", place: "エレベーターホール", group: "後援会・東工会" },
      { name: "校内ラジオ", place: "放送ブース", group: "放送委員会" },
      { name: "ハンドクリーム作り", place: "生物室・屋上", group: "園芸養蜂部" },
      { name: "理科実験体験", place: "化学室", group: "サイエンス部" }
    ]
  },
  {
    floor: "2階",
    stalls: [
      { name: "日駒万博-日駒の秘密を探れ-", place: "201-202-203", group: "J1" },
      { name: "日駒万博-世界の秘密を探れ-", place: "204-205-206", group: "J2" },
      { name: "カジノ", place: "207", group: "J3D" },
      { name: "カジノ31", place: "208", group: "J3E" },
      { name: "カシムーランド", place: "209", group: "J3F" },
      { name: "お化け屋敷", place: "210", group: "J3G" },
      { name: "J3Cマニア", place: "211", group: "J3C" },
      { name: "お化け屋敷", place: "213", group: "J3B" },
      { name: "Aートピア", place: "215", group: "J3A" },
      { name: "ベビールーム", place: "216", group: "" },
      { name: "授乳室", place: "217", group: "" }
    ]
  },
  {
    floor: "3階",
    stalls: [
      { name: "ミッション・G・ポッシブル", place: "301", group: "2G" },
      { name: "Yummyなカジノ", place: "302", group: "2H" },
      { name: "カジノ", place: "303", group: "2L" },
      { name: "人形お化け屋敷", place: "304", group: "2M" },
      { name: "T番出口", place: "305", group: "2T" },
      { name: "活動紹介", place: "307", group: "マンガ研究部" },
      { name: "活動紹介", place: "308", group: "写真部" },
      { name: "制服リサイクル", place: "310", group: "後援会" },
      { name: "後援会バザー", place: "スチューデントホール", group: "後援会" },
      { name: "禊", place: "314", group: "5D" },
      { name: "森閑ノ道", place: "315", group: "5C" },
      { name: "Pirates of jungle", place: "316", group: "5B" },
      { name: "廃病院～日駒隔離病棟～", place: "317", group: "5A" },
      { name: "同窓会喫茶", place: "319", group: "東工日駒同窓会",description: "卒業生の皆さんがゆったりと交流できる空間です。飲み物やお菓子をご用意してお待ちしています。", image: "image/cafe1.jpg" },
      { name: "和風喫茶", place: "100周年記念ホール2階和室", group: "茶道部" },
      { name: "エスターバックス", place: "スチューデントホール", group: "2S" },
      { name: "いろはにぽてと", place: "スチューデントホール", group: "5C" },
      { name: "チョコっとバナナ", place: "スチューデントホール", group: "5D" },
      { name: "コマゼリヤ", place: "スチューデントホール", group: "料理愛好会" }
    ]
  },
  {
    floor: "4階",
    stalls: [
      { name: "近射体験", place: "401", group: "山岳部" },
      { name: "雪山別荘", place: "402", group: "スキー部" },
      { name: "釣って釣って釣りまくれ！", place: "403", group: "水泳部" },
      { name: "ストラックアウト", place: "404", group: "軟式庭球部" },
      { name: "Hit a target", place: "405", group: "バドミントン部" },
      { name: "クライミング体験", place: "406", group: "山岳部" },
      { name: "ストラックアウト", place: "407", group: "硬式テニス部" },
      { name: "初めてのゴルフ", place: "408", group: "ゴルフ部" },
      { name: "作品展示", place: "409", group: "模型・鉄道研究部(模型班)" },
      { name: "作品展示", place: "410", group: "模型・鉄道研究部(鉄道班)" },
      { name: "活動紹介", place: "415", group: "競技かるた部" },
      { name: "STAR・LINK ～SPACIA～", place: "416", group: "サイエンス部(天文班)" },
      { name: "ボドゲ海", place: "417", group: "ボードゲーム部" }
    ]
  },
  {
    floor: "その他",
    stalls: [
      { name: "コンサート", place: "アリーナ", group: "有志団体" }
    ]
  }
];

