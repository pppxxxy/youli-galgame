const STORAGE_KEY = "youli_galgame_save_v1";
const ENDING_KEY = "youli_galgame_endings_v1";

const state = {
  currentNodeId: STORY.start,
  flags: {
    trust: 0,
    distance: 0,
    pressure: 0,
    honesty: 0,
    support: 0
  },
  visited: []
};

const els = {
  titleScreen: document.getElementById("title-screen"),
  gameScreen: document.getElementById("game-screen"),
  endingScreen: document.getElementById("ending-screen"),
  startBtn: document.getElementById("start-btn"),
  continueBtn: document.getElementById("continue-btn"),
  endingsBtn: document.getElementById("endings-btn"),
  backTitleBtn: document.getElementById("back-title-btn"),
  saveBtn: document.getElementById("save-btn"),
  endingBackBtn: document.getElementById("ending-back-btn"),
  chapterLabel: document.getElementById("chapter-label"),
  sceneTitle: document.getElementById("scene-title"),
  speaker: document.getElementById("speaker"),
  textBox: document.getElementById("text-box"),
  choices: document.getElementById("choices"),
  hint: document.getElementById("hint"),
  endingList: document.getElementById("ending-list")
};

function showScreen(screen) {
  [els.titleScreen, els.gameScreen, els.endingScreen].forEach((el) => el.classList.remove("active"));
  screen.classList.add("active");
}

function resetState() {
  state.currentNodeId = STORY.start;
  state.flags = { trust: 0, distance: 0, pressure: 0, honesty: 0, support: 0 };
  state.visited = [];
}

function getNode(id = state.currentNodeId) {
  return STORY.nodes[id];
}

function renderNode() {
  const node = getNode();
  if (!node) {
    showToast("剧情节点不存在");
    return;
  }

  if (node.routes) {
    const target = resolveRoute(node.routes);
    if (target) {
      state.currentNodeId = target;
      renderNode();
      return;
    }
  }

  if (!state.visited.includes(state.currentNodeId)) {
    state.visited.push(state.currentNodeId);
  }

  els.chapterLabel.textContent = node.chapter || "";
  els.sceneTitle.textContent = node.title || "";
  const baseText = node.text || "";
  els.textBox.textContent = node.showFlags ? `${baseText}\n\n【当前数值】${getFlagSummary()}` : baseText;

  if (node.speaker) {
    els.speaker.textContent = node.speaker;
    els.speaker.classList.remove("hidden");
  } else {
    els.speaker.classList.add("hidden");
  }

  if (node.unlockEnding) {
    unlockEnding(node.unlockEnding);
  }

  renderChoices(node);
  autosave();
}

function renderChoices(node) {
  els.choices.innerHTML = "";

  if (!node.choices || node.choices.length === 0) {
    els.choices.classList.add("hidden");
    els.hint.textContent = node.next ? "点击文字区域继续" : "Demo 已结束，可返回标题";
    return;
  }

  els.choices.classList.remove("hidden");
  els.hint.textContent = "选择你的行动";

  node.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      applyEffects(choice.effects);
      goTo(choice.next);
    });
    els.choices.appendChild(btn);
  });
}

function applyEffects(effects = {}) {
  Object.entries(effects).forEach(([key, value]) => {
    if (typeof state.flags[key] !== "number") state.flags[key] = 0;
    state.flags[key] += value;
  });
}

function resolveRoute(routes = []) {
  const flags = state.flags || {};

  for (const route of routes) {
    if (!route || !route.next) continue;
    if (!route.when || checkConditions(route.when, flags)) {
      return route.next;
    }
  }

  return null;
}

function checkConditions(conditions = {}, flags = {}) {
  return Object.entries(conditions).every(([key, expected]) => {
    const actual = Number(flags[key] || 0);

    if (typeof expected === "number") return actual >= expected;
    if (Array.isArray(expected)) return expected.includes(actual);

    if (expected && typeof expected === "object") {
      if (typeof expected.min === "number" && actual < expected.min) return false;
      if (typeof expected.max === "number" && actual > expected.max) return false;
      if (typeof expected.gt === "number" && actual <= expected.gt) return false;
      if (typeof expected.gte === "number" && actual < expected.gte) return false;
      if (typeof expected.lt === "number" && actual >= expected.lt) return false;
      if (typeof expected.lte === "number" && actual > expected.lte) return false;
      if (typeof expected.eq === "number" && actual !== expected.eq) return false;
      return true;
    }

    return Boolean(actual) === Boolean(expected);
  });
}

function getFlagSummary() {
  const f = state.flags || {};
  return [
    `trust=${f.trust || 0}`,
    `support=${f.support || 0}`,
    `honesty=${f.honesty || 0}`,
    `pressure=${f.pressure || 0}`,
    `distance=${f.distance || 0}`
  ].join(" / ");
}

function goTo(id) {
  if (!id) {
    showToast("第一版 Demo 已结束");
    return;
  }
  state.currentNodeId = id;
  renderNode();
}

function nextNode() {
  const node = getNode();
  if (!node || node.choices?.length) return;
  goTo(node.next);
}

function autosave() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function manualSave() {
  autosave();
  showToast("已存档");
}

function loadSave() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    showToast("没有可继续的存档");
    return false;
  }

  try {
    const data = JSON.parse(raw);
    state.currentNodeId = data.currentNodeId || STORY.start;
    state.flags = { ...state.flags, ...(data.flags || {}) };
    state.visited = Array.isArray(data.visited) ? data.visited : [];
    return true;
  } catch (error) {
    showToast("存档读取失败");
    return false;
  }
}

function getUnlockedEndings() {
  try {
    return JSON.parse(localStorage.getItem(ENDING_KEY)) || [];
  } catch {
    return [];
  }
}

function unlockEnding(endingId) {
  const endings = getUnlockedEndings();
  if (!endings.includes(endingId)) {
    endings.push(endingId);
    localStorage.setItem(ENDING_KEY, JSON.stringify(endings));
    showToast(`已解锁：${STORY.endings[endingId] || endingId}`);
  }
}

function renderEndingList() {
  const endings = getUnlockedEndings();
  els.endingList.innerHTML = "";

  if (endings.length === 0) {
    const li = document.createElement("li");
    li.textContent = "暂无已解锁结局。去完成一次 Demo 吧。";
    els.endingList.appendChild(li);
    return;
  }

  endings.forEach((id) => {
    const li = document.createElement("li");
    li.textContent = STORY.endings[id] || id;
    els.endingList.appendChild(li);
  });
}

function showToast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
}

els.startBtn.addEventListener("click", () => {
  resetState();
  showScreen(els.gameScreen);
  renderNode();
});

els.continueBtn.addEventListener("click", () => {
  if (loadSave()) {
    showScreen(els.gameScreen);
    renderNode();
  }
});

els.endingsBtn.addEventListener("click", () => {
  renderEndingList();
  showScreen(els.endingScreen);
});

els.endingBackBtn.addEventListener("click", () => showScreen(els.titleScreen));
els.backTitleBtn.addEventListener("click", () => showScreen(els.titleScreen));
els.saveBtn.addEventListener("click", manualSave);
els.textBox.addEventListener("click", nextNode);

window.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    if (els.gameScreen.classList.contains("active")) nextNode();
  }
});

(function init() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    els.continueBtn.style.opacity = "0.55";
  }
})();