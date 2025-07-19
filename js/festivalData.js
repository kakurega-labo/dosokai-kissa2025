// js/festivalData.js

const FES_DATA = [
  {
    floor: "B1階",
    stalls: [
      { name: "Fantasy Lagoon", place: "美術室", group: "美術・アートクラフト部" , keywords: ["ふぁんたじー", "びじゅつ", "びじゅつしつ", "美術部", "アート", "b1"]},
      { name: "活動紹介", place: "中学技術ルーム", group: "ものつくり部(建築班)" },
      { name: "活動紹介", place: "ものつくり系活動室①-②", group: "同上(自動車班)" },
      { name: "ミニSL乗車体験", place: "正門横・ミニSL工房", group: "同上(SL班)" },
      { name: "活動紹介", place: "文理未来レクチャールーム", group: "同上(機械班)" }
    ]
  },
  {
    floor: "1階",
    stalls: [
      { name: "中学入試相談室", place: "中学自習室", group: "" },
      { name: "高校入試相談室", place: "コミュニケーションラボ", group: "" },
      { name: "休憩室", place: "1A会議室＆110-112-113-114", group: "" },
      { name: "～貴方が誰かの名探偵～", place: "日駒図書館", group: "図書委員会" },
      { name: "食品販売", place: "エレベーターホール", group: "" },
      { name: "高校入試相談室", place: "コミュニケーションラボ", group: "" },
      { name: "高校入試相談室", place: "コミュニケーションラボ", group: "" }
    ]
  },
  {
    floor: "2階",
    stalls: [
      { name: "日駒観光案内所", place: "201-202-203", group: "J1" },
      { name: "日駒オリンピック", place: "204-205-206", group: "J2" },
      { name: "ちいフェス", place: "207", group: "J3A" },
      { name: "パイレーツオブキャビリヤン", place: "208", group: "J3B" },
      { name: "黄金の回転", place: "209", group: "J3C" },
      { name: "iD組えんにちing!", place: "210", group: "J3D" },
      { name: "直感出口", place: "212", group: "J3E" },
      { name: "目指せ一攫千金!", place: "213", group: "J3F" },
      { name: "ベビールーム", place: "216", group: "" },
      { name: "授乳室", place: "217", group: "" }
    ]
  },
  {
    floor: "3階",
    stalls: [
      { name: "あのコをさがせ", place: "301", group: "2R" },
      { name: "VS 2-P", place: "302", group: "2P" },
      { name: "メリーゴーランド", place: "303", group: "2Q" },
      { name: "カジNoo", place: "304", group: "2Q" },
      { name: "コマバーサルスタジオ・ジャパン(KSJ)", place: "305", group: "2M" },
      { name: "恐怖の館", place: "306", group: "2L" },
      { name: "スペースシューティング", place: "307", group: "5A" },
      { name: "冴火魂神社", place: "308", group: "5B" },
      { name: "休憩室", place: "309-310", group: "" },
      { name: "カジノ", place: "315", group: "2U" },
      { name: "エイリアン ウォーズ ～コミ=ヤマの逆襲～", place: "316", group: "2T" },
      { name: "■■病棟", place: "317", group: "2G" },
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
      { name: "クライミング体験", place: "401", group: "山岳部" },
      { name: "ストラックアウト", place: "402", group: "硬式テニス部" },
      { name: "写真展示", place: "403", group: "写真部" },
      { name: "Hit a target", place: "404", group: "バトミントン部" },
      { name: "活動紹介", place: "405", group: "フランス語愛好会" },
      { name: "活動紹介", place: "405", group: "数学愛好会" },
      { name: "ストラックアウト", place: "406", group: "軟式庭球部" },
      { name: "水を打ち込め！水鉄砲マスターへの道", place: "407", group: "水泳部" },
      { name: "雪山別荘", place: "408", group: "スキー部" },
      { name: "近射体験", place: "409", group: "アーチェリー部" },
      { name: "卓球ハンデゲーム", place: "410", group: "卓球部" },
      { name: "アメフトってどんなスポーツ？", place: "411", group: "アメフト部" },
      { name: "マン研くじ", place: "412", group: "マンガ研究部" },
      { name: "ボドゲ海", place: "413", group: "ボードゲーム部" },
      { name: "SPACIA", place: "414", group: "サイエンス部(天文班)" },
      { name: "遊三王", place: "415", group: "映画愛好会" },
      { name: "作品展示", place: "416", group: "模型・鉄道研究部(模型班)" },
      { name: "作品展示", place: "417", group: "模型・鉄道研究部(鉄道班)" }
    ]
  },
  {
    floor: "その他",
    stalls: [
      { name: "コンサート", place: "アリーナ", group: "有志団体" }
    ]
  }
];
