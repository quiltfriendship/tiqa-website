/*
=========================================================
 TIQA 公益活動資料
=========================================================

新增活動時，只要複製一組 { ... } 即可。

status：
  "current" = 進行中
  "ended"   = 已結束

published：
  true  = 前台顯示
  false = 暫不上架

image：
  圖片與 charity-data.js 放在同一個 /charity/ 資料夾，
  因此直接使用 "./檔名.jpg"。

content：
  可使用多個段落，每一段放一個字串。

links：
  可放多個外部連結。
=========================================================
*/

const charityData = [

  {
    id: "2020-friendly-bag",

    title: "友好安心袋｜拼布公益募集活動",

    date: "2020-12-15",

    dateText: "2020/12/15 截止收件",

    status: "ended",

    image: "./charity-bag.jpg",

    imageAlt: "友好安心袋拼布公益募集活動",

    summary:
      "台灣國際拼布友好會為發揚拼布友好餽贈及公益分享的精神，發起友好安心袋公益募集活動。",

    recipient:
      "財團法人天主教會花蓮教區附設救星教養院",

    content: [
      "拼布很重要的精神是友好餽贈及公益分享，一定有很多人有相同的經驗，很開心會做拼布手作的同時，還能將親手做的布作贈與給有需要的人，相信上一次參與圍兜兜募集的朋友都有相同的感受——內心充滿喜樂，感恩有人需要我們，感恩我們會的一點手藝能幫到別人！",

      "台灣國際拼布友好會為發揚拼布本有的精神，再一次發起公益募集活動，懇請所有拼布手作人一起來為【天主教會花蓮教區附設救星教養院】製作「友好安心袋」！",

      "【天主教會花蓮教區附設救星教養院】為住宿型教養機構，原活動資料記載當時有 57 名院生，女生 24 人、男生 33 人。服務對象為多重障礙、中度、重度及極重度障礙者：1、以台東縣市領有身心障礙手冊之 1～18 歲腦性麻痺兒童為主。2、學區內沒有啟智班可就讀的其他障礙類型兒童。3、家庭特殊狀況之身心障礙兒童。",

      "院址：台東市山西路一段207號｜電話：089-359284"
    ],

    links: [
      {
        label: "活動詳細說明",
        url: "https://www.facebook.com/Taiwanquilters/photos/a.616897881656376/3686549881357812/?type=1&theater"
      },
      {
        label: "公益募集作品展示",
        url: "https://www.facebook.com/pg/Taiwanquilters/photos/?tab=album&album_id=3705689316110535"
      },
      {
        label: "救星教養院官網",
        url: "http://www.star.org.tw/"
      },
      {
        label: "Facebook 粉絲頁",
        url: "https://www.facebook.com/starorg/"
      }
    ],

    sort: 20,

    published: true
  },


  {
    id: "protect-babies",

    title: "守護寶寶的希望，點亮孩子的未來",

    date: "",

    dateText: "",

    status: "ended",

    image: "./charity-baby.jpg",

    imageAlt: "守護寶寶的希望，點亮孩子的未來公益募集活動",

    summary:
      "由台灣國際拼布友好會與高雄市私立希恩之家共同辦理的公益募集活動。",

    recipient:
      "高雄市私立希恩之家",

    content: [
      "【守護寶寶的希望，點亮孩子的未來－公益募集活動】",

      "主辦單位：台灣國際拼布友好會、高雄市私立希恩之家",

      "勸募文號：高市社人團字第10844814300號"
    ],

    links: [
      {
        label: "查看活動紀錄",
        url: "https://www.facebook.com/pg/Taiwanquilters/photos/?tab=album&album_id=3450379404974862"
      }
    ],

    sort: 10,

    published: true
  }

];
