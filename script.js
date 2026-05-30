const baseComments = [
  { user: "一只装修小白", text: "20 平客厅会不会太暗呀？我家层高也不高，怕压抑。", tag: "场景追问", like: 96, time: "2小时前", reply: "作者：我家也是 2.7m 层高，主灯选薄款会好很多，晚上再配一盏落地灯会更舒服。" },
  { user: "阿团不想踩坑", text: "求真实反馈，用了半年后会不会积灰很严重？不要广告，真的怕清洁麻烦。", tag: "信任判断", like: 88, time: "3小时前", reply: "作者：会有一点，但比复杂造型灯好清理很多。我觉得别选羽毛灯、分叉太多的灯。" },
  { user: "不想做功课", text: "预算 1000 左右有推荐吗？不想买太网红的，最好耐看一点。", tag: "决策需求", like: 73, time: "4小时前", reply: "住进风里：我可以单独写一篇 500 / 1000 / 3000 三个预算的选择思路。" },
  { user: "米粒在装修", text: "晚上开灯效果能不能多发几张？白天看着很好看，但我更关心晚上看电视会不会刺眼。", tag: "场景追问", like: 65, time: "昨天", reply: "展开 7 条回复：同想看夜间效果 / 色温多少呀 / 有没有频闪" },
  { user: "周末去宜家", text: "我家也是小客厅，最后发现灯不是越亮越好，色温真的很影响氛围。", tag: "长期反馈", like: 41, time: "昨天", reply: "作者：对！我现在主灯 4000K，氛围灯 3000K，会比全屋冷白舒服。" },
  { user: "小山竹", text: "看起来很美，但想知道是不是软广，能说下购买原因和缺点吗？", tag: "信任判断", like: 37, time: "昨天", reply: "" },
  { user: "空空也想家", text: "博主可以拍一下只开落地灯的效果吗？晚上看电视会不会刺眼。", tag: "内容需求", like: 31, time: "昨天", reply: "" },
];

const commentTemplates = [
  { user: "栗子小屋", text: "同样 20 平，我想知道只开主灯够不够亮，老人来住会不会觉得暗。", tag: "场景追问" },
  { user: "南瓜灯不亮", text: "这个色温晚上拍出来好温柔，实际肉眼会不会偏黄？", tag: "场景追问" },
  { user: "小户型研究员", text: "层高 2.6m 可以装这种吗？怕灯体太厚看着压。", tag: "场景追问" },
  { user: "番茄在装修", text: "能不能看看开电视时的灯光，不想屏幕反光。", tag: "场景追问" },
  { user: "阿灰", text: "有没有滤镜前后的对比呀，想看真实亮度。", tag: "信任判断" },
  { user: "不吃安利", text: "想确认是不是合作，缺点也可以讲讲吗？", tag: "信任判断" },
  { user: "真实体验党", text: "用了半年有没有频闪、异响或者遥控失灵的问题？", tag: "信任判断" },
  { user: "小鹿乱买", text: "求一个 800 到 1200 的选择范围，选择太多了。", tag: "决策需求" },
  { user: "预算卡住了", text: "主灯和落地灯哪个更值得先买？预算只能先上一个。", tag: "决策需求" },
  { user: "做功课好累", text: "可以按 500、1000、3000 分三个档位说吗？", tag: "决策需求" },
  { user: "芋泥啵啵", text: "想看晚上只开氛围灯的照片，最好有客厅全景。", tag: "内容需求" },
  { user: "半糖装修", text: "能不能出一期灯具清洁和避坑，家里灰真的多。", tag: "内容需求" },
  { user: "啾啾", text: "求灯的尺寸参数，想对比我家沙发墙宽度。", tag: "内容需求" },
  { user: "入住一年啦", text: "我家类似款一年后外壳有点泛黄，材质也要看。", tag: "长期反馈" },
  { user: "慢慢住", text: "小客厅真的别追求特别亮，分层开灯舒服很多。", tag: "长期反馈" },
  { user: "晚风客厅", text: "我家 3000K 氛围灯很好看，但看书还是要补台灯。", tag: "长期反馈" },
  { user: "阿橙爱收纳", text: "这个灯日常清洁麻烦吗？顶部会不会很容易落灰。", tag: "安装清洁" },
  { user: "装修别返工", text: "安装需要提前留线吗？普通电工能不能装。", tag: "安装清洁" },
  { user: "灯具参数党", text: "显指、瓦数和尺寸能不能列一下，想对照我家客厅。", tag: "参数对比" },
  { user: "圆圆在比价", text: "同款不同店差价挺大，怎么判断是不是一个型号？", tag: "参数对比" },
  { user: "家有小朋友", text: "孩子写作业在客厅，亮度够不够，会不会刺眼？", tag: "场景追问" },
  { user: "爸妈来住", text: "老人觉得暖光太暗，这种搭配适合三代同住吗？", tag: "场景追问" }
];

const generatedComments = Array.from({ length: 113 }, (_, index) => {
  const item = commentTemplates[index % commentTemplates.length];
  return {
    user: `${item.user}${index + 1}`,
    text: item.text,
    tag: item.tag,
    like: Math.max(2, 58 - (index % 47)),
    time: index < 24 ? "昨天" : `${Math.floor(index / 24) + 1}天前`,
    reply: ""
  };
});

const comments = [...baseComments, ...generatedComments];

const categories = {
  "场景追问": {
    summary: "用户主要在代入自家面积、层高、看电视和夜间使用场景。"
  },
  "信任判断": {
    summary: "用户关注是否真实、是否软广，以及博主有没有讲缺点。"
  },
  "决策需求": {
    summary: "用户希望把复杂选择压缩成预算档、优先级和购买判断。"
  },
  "内容需求": {
    summary: "用户在主动催更，希望看到夜间实拍、尺寸参数和后续选题。"
  },
  "长期反馈": {
    summary: "用户在补充入住后的真实体验，集中在耐用、色温和长期舒适度。"
  },
  "安装清洁": {
    summary: "用户担心落灰、留线、安装难度和后期维护成本。"
  },
  "参数对比": {
    summary: "用户想把瓦数、尺寸、显指和型号差异转化成可比较信息。"
  }
};

const guesses = [
  "小户型灯光避坑",
  "客厅灯预算",
  "入住半年反馈",
  "3000K 4000K",
  "客厅灯尺寸",
  "主灯落地灯搭配"
];
let aiEnabled = false;
let activeCategory = "场景追问";

const commentList = document.querySelector("#commentList");
const page = document.querySelector(".page");
const aiEntryRow = document.querySelector("#aiEntryRow");
const aiPanel = document.querySelector("#aiPanel");
const aiCards = document.querySelector("#aiCards");
const guessList = document.querySelector("#guessList");
const commentCount = document.querySelector("#commentCount");
const headCommentCount = document.querySelector("#headCommentCount");

function avatarText(name) {
  return name.slice(0, 1);
}

function scrollToComments(behavior = "smooth") {
  const commentHead = document.querySelector(".comment-head");
  page.scrollTo({
    top: commentHead.offsetTop - 56,
    behavior
  });
}

function landAtContentTop() {
  page.scrollTo({ top: 0, behavior: "auto" });
  requestAnimationFrame(() => page.scrollTo({ top: 0, behavior: "auto" }));
  setTimeout(() => page.scrollTo({ top: 0, behavior: "auto" }), 120);
}

function renderComments() {
  commentList.innerHTML = comments.map((comment) => `
    <article class="comment">
      <div class="comment-avatar">${avatarText(comment.user)}</div>
      <div class="comment-body">
        <div class="comment-name">${comment.user}</div>
        <div class="comment-text">${comment.text}</div>
        <div class="comment-actions"><span>${comment.time}</span><span>回复</span><span>♡ ${comment.like}</span></div>
        ${comment.reply ? `<div class="reply-box">${comment.reply}</div>` : ""}
      </div>
    </article>
  `).join("");
  const total = comments.length;
  commentCount.textContent = String(total);
  headCommentCount.textContent = String(total);
}

function renderTabs() {
  aiEntryRow.innerHTML = `
    ${Object.keys(categories).map((name) => `
      <button class="ai-option ${name === activeCategory ? "active" : ""}" data-category="${name}">${name}</button>
    `).join("")}
  `;

  aiEntryRow.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderAI();
    });
  });
}

function renderAI() {
  aiEntryRow.classList.remove("hidden");
  commentList.classList.add("hidden");
  renderTabs();
  aiPanel.classList.add("show");
  const data = categories[activeCategory];
  const matched = comments.filter((comment) => comment.tag === activeCategory).slice(0, 3);
  const categoryTotal = comments.filter((comment) => comment.tag === activeCategory).length;

  aiCards.innerHTML = `
    <article class="category-card">
      <div class="category-head">
        <strong>${activeCategory}</strong>
        <em>${categoryTotal} 条</em>
      </div>
      <p class="category-summary">${data.summary}</p>
      ${matched.map((comment) => `
        <div class="ai-comment">
          <div class="mini-avatar">${avatarText(comment.user)}</div>
          <div>
            <div class="ai-comment-name">${comment.user}</div>
            <div class="ai-comment-text">${comment.text}</div>
          </div>
        </div>
      `).join("")}
    </article>
  `;
  guessList.innerHTML = guesses.map((item) => `
    <button class="guess-card" type="button">${item}</button>
  `).join("");
}

function enableAI() {
  if (aiEnabled) {
    aiEnabled = false;
    aiEntryRow.classList.add("hidden");
    aiPanel.classList.remove("show");
    aiCards.innerHTML = "";
    guessList.innerHTML = "";
    commentList.classList.remove("hidden");
    scrollToComments();
    return;
  }

  aiEnabled = true;
  renderAI();
  aiPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#commentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#commentInput");
  const text = input.value.trim();
  if (!text) return;
  comments.unshift({
    user: "我",
    text,
    tag: "场景追问",
    like: 0,
    time: "刚刚",
    reply: ""
  });
  input.value = "";
  renderComments();
  if (aiEnabled) renderAI();
});

document.querySelector("#commentAction").addEventListener("click", () => {
  const input = document.querySelector("#commentInput");
  if (input.value.trim()) {
    document.querySelector("#commentForm").requestSubmit();
    return;
  }
  scrollToComments();
  input.focus();
});

document.querySelector("#commentInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#commentForm").requestSubmit();
  }
});

document.querySelector("#shareBtn").addEventListener("click", () => {
  const toast = document.querySelector("#toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1400);
});

document.querySelector("#openAi").addEventListener("click", enableAI);
renderComments();
landAtContentTop();
window.addEventListener("load", landAtContentTop);
window.addEventListener("pageshow", landAtContentTop);
