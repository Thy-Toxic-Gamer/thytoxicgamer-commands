const commands = [
  { command: "!tags", source: "Streamer.bot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Updates the stream tags used for discovery.", usage: "!tags <tags>" },
  { command: "!accountage", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Shows how old a viewer's Twitch account is.", usage: "!accountage [username]" },
  { command: "!blur", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Explains the OBS blur used to hide in-game chat when it gets too toxic.", usage: "!blur" },
  { command: "!chatstats", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Displays available chat activity statistics.", usage: "!chatstats" },
  { command: "!commands", aliases: ["!cmds"], source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the link to this complete command directory.", usage: "!commands" },
  { command: "!discord", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts an invite to  ⁅𝐓𝐡𝐲𝐓☣︎𝐱𝐢𝐜𝐆𝐚𝐦𝐞𝐫⁆ Discord community.", usage: "!discord" },
  { command: "!donate", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the StreamElements tip-page link.", usage: "!donate" },
  { command: "!drops", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Shares current Twitch Drops information.", usage: "!drops" },
  { command: "!followage", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Shows how long a viewer has followed the channel.", usage: "!followage [username]" },
  { command: "!game", source: "Streamer.bot", access: "Everyone", elevatedAccess: "Moderator", platform: ["Twitch"], status: "Active", description: "Shows the current game. Moderators can also update the category.", usage: "!game [game]" },
  { command: "!leaderboard", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the 𝐓☣︎𝐱𝐢c Tokens leaderboard link.", usage: "!leaderboard" },
  { command: "!lurk", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Lets chat know a viewer is lurking while supporting the stream.", usage: "!lurk" },
  { command: "!marker", source: "Streamer.bot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Creates a Twitch stream marker for easy editing later.", usage: "!marker" },
  { command: "!modhelp", source: "Streamer.bot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Displays the available moderator command help.", usage: "!modhelp" },
  { command: "!modview", source: "Streamer.bot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Posts the Twitch Moderator View link.", usage: "!modview" },
  { command: "!owned", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the link to ⁅𝐓𝐡𝐲𝐓☣︎𝐱𝐢𝐜𝐆𝐚𝐦𝐞𝐫⁆'s owned-game catalog.", usage: "!owned" },
  { command: "!pcsetup", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Shares information about the PC and streaming setup.", usage: "!pcsetup" },
  { command: "!playlist", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the link to the music playlist used for the stream.", usage: "!playlist" },
  { command: "!socials", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts ⁅𝐓𝐡𝐲𝐓☣︎𝐱𝐢𝐜𝐆𝐚𝐦𝐞𝐫⁆'s social platforms and content links.", usage: "!socials" },
  { command: "!song", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Shows information about the currently playing song.", usage: "!song" },
  { command: "!pcspecs", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Displays the gaming PC hardware, streaming gear, and peripherals.", usage: "!pcspecs" },
  { command: "!poll", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the public 𝐓☣︎𝐱𝐢c Poll Center link so viewers can vote in active polls.", usage: "!poll" },
  { command: "!pollpanel", source: "Streamer.bot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Sends a broadcaster or moderator a private, temporary link to the 𝐓☣︎𝐱𝐢c Poll Creator.", usage: "!pollpanel" },
  { command: "!requestgame", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the Game Request System link so viewers can request a game or view their status.", usage: "!requestgame" },
  { command: "!reviewrequest", source: "Streamer.bot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Posts the protected Staff Control link for reviewing and managing game requests.", usage: "!reviewrequest" },
  { command: "!title", source: "Streamer.bot", access: "Everyone", elevatedAccess: "Moderator", platform: ["Twitch"], status: "Active", description: "Shows the current title. Moderators can also update it.", usage: "!title [new title]" },
  { command: "!uptime", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Shows how long the current stream has been live.", usage: "!uptime" },
  { command: "!youtube", source: "Streamer.bot", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Posts the YouTube link for reruns and occasional livestreams.", usage: "!youtube" },
  { command: "!permit", source: "StreamElements", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Temporarily permits a viewer to post a link.", usage: "!permit <username>" },
  { command: "!ping", source: "StreamElements", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Checks whether the StreamElements chatbot is responding.", usage: "!ping" },
  { command: "!top", source: "StreamElements", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Displays the top viewers by 𝐓☣︎𝐱𝐢c Tokens or watch time.", usage: "!top [points|alltime|online|offline]" },
  { command: "!watchtime", source: "StreamElements", access: "Everyone", platform: ["Twitch"], status: "Active", description: "Shows a viewer's accumulated channel watch time.", usage: "!watchtime [username]" },
  { command: "!filters", source: "Nightbot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Manages Nightbot's spam-protection filters.", usage: "!filters <filter> [setting]" },
  { command: "!regulars", source: "Nightbot", access: "Moderator", platform: ["Twitch"], status: "Active", description: "Adds or removes viewers from Nightbot's regular-user list.", usage: "!regulars <add|delete> <username>" },
  { command: "/t warn", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Records a warning, creates a TTG-MOD case, and sends secure appeal information.", usage: "/t warn user:<member> reason:<reason>" },
  { command: "/t unwarn", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Reverses an active warning using its original case number.", usage: "/t unwarn user:<member> case_number:<case> reason:<reason>" },
  { command: "/t mute", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Temporarily mutes a member, creates a case, and sends secure appeal information.", usage: "/t mute user:<member> duration:<duration> reason:<reason>" },
  { command: "/t unmute", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Removes a timeout using the original mute case.", usage: "/t unmute user:<member> case_number:<case> reason:<reason>" },
  { command: "/t kick", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Kicks a member after creating an appeal-ready moderation case.", usage: "/t kick user:<member> reason:<reason>" },
  { command: "/t ban", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Bans a member after creating an appeal-ready moderation case.", usage: "/t ban user:<member> reason:<reason> [delete_history]" },
  { command: "/t unban", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Reverses an active ban using its original case number.", usage: "/t unban user_id:<member> case_number:<case> reason:<reason>" },
  { command: "/t appealreply", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Moderation", description: "Privately replies to a punished member through their case conversation.", usage: "/t appealreply message:<private reply> [case_number]" },
  { command: "/t cases", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Cases", description: "Searches recent ThyToxicBot cases, including a member's warnings.", usage: "/t cases [user] [action] [status] [search]" },
  { command: "/t caseinfo", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Cases", description: "Displays the member, action, status, reason, moderator, DM result, and date for a case.", usage: "/t caseinfo case_number:<case>" },
  { command: "/t caseupdate", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Cases", description: "Corrects the recorded reason on a moderation case.", usage: "/t caseupdate case_number:<case> reason:<corrected reason>" },
  { command: "/t caseclose", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Cases", description: "Closes a case and its private appeal conversation.", usage: "/t caseclose case_number:<case>" },
  { command: "/t staffnote", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Staff Notes", description: "Adds a private staff-only note about a member.", usage: "/t staffnote user:<member> note:<private note>" },
  { command: "/t notes", source: "ThyToxicBot", access: "Moderator", platform: ["Discord"], status: "Active", category: "Staff Notes", description: "Shows recent private staff notes about a member.", usage: "/t notes user:<member>" },
  { command: "/t lock", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Channels", description: "Locks a text or voice channel while preserving unrelated permission overrides.", usage: "/t lock [channel]" },
  { command: "/t unlock", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Channels", description: "Removes ThyToxicBot's text or voice lock while preserving other denied permissions.", usage: "/t unlock [channel]" },
  { command: "/t slowmode", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Channels", description: "Sets or disables a channel's Discord slow mode.", usage: "/t slowmode seconds:<0-21600> [channel]" },
  { command: "/t masskick", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Moderation", description: "Preview-first kick for up to five members with explicit confirmation.", usage: "/t masskick user1:<member> reason:<reason> [user2-user5] [confirmation_code]" },
  { command: "/t massban", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Moderation", description: "Preview-first ban for up to five members with explicit confirmation.", usage: "/t massban user1:<member> reason:<reason> [user2-user5] [confirmation_code]" },
  { command: "/t nameban", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Moderation", description: "Preview-first ban of up to five members matching a username, display name, or nickname.", usage: "/t nameban name:<text> reason:<reason> [confirmation_code]" },
  { command: "/t timeban", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Moderation", description: "Preview-first raid response for up to five recent joins, optionally filtered by account age.", usage: "/t timeban joined_within:<window> reason:<reason> [account_age] [confirmation_code]" },
  { command: "/t cleanup", source: "ThyToxicBot", access: "Admin", platform: ["Discord"], status: "Active", category: "Moderation", description: "Preview-first deletion of recent unpinned messages, optionally filtered to one member.", usage: "/t cleanup amount:<1-100> reason:<reason> [user] [confirmation_code]" },
  { command: "/t prune", source: "ThyToxicBot", access: "Owner", platform: ["Discord"], status: "Active", category: "Moderation", description: "Owner-only preview of inactive Members; refuses estimates above five.", usage: "/t prune days:<1|7|30> reason:<reason> [confirmation_code]" },
  ...sapphireCommands,
].map((item) => ({
  category: item.category || (item.source === "ThyToxicBot" ? "Moderation" : item.source === "Nightbot" ? "Moderation" : "Channel"),
  ...item,
})).filter((item) => item.status !== "Disabled");

const sources = ["All", "Streamer.bot", "StreamElements", "Sapphire", "Nightbot", "ThyToxicBot"];
const state = { source: "All", view: "public" };
const elements = {
  tabs: document.querySelector("#tabs"), list: document.querySelector("#command-list"), search: document.querySelector("#search"),
  platform: document.querySelector("#platform-filter"), access: document.querySelector("#access-filter"), category: document.querySelector("#category-filter"), status: document.querySelector("#status-filter"),
  summary: document.querySelector("#result-summary"), clear: document.querySelector("#clear-filters"), toast: document.querySelector("#copy-toast"),
  note: document.querySelector("#view-note"), viewButtons: [...document.querySelectorAll(".view-button")],
};

document.querySelector("#total-count").textContent = commands.filter((item) => item.status === "Active").length;
document.querySelector("#source-count").textContent = sources.length - 1;

[...new Set(commands.map((item) => item.category))].sort().forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  elements.category.append(option);
});

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function visibleForView(item) {
  if (state.view === "public") return item.access === "Everyone" && item.status === "Active";
  return item.access !== "Everyone" || Boolean(item.elevatedAccess);
}
function availableCommands() { return commands.filter(visibleForView); }

function renderTabs() {
  const available = availableCommands();
  elements.tabs.replaceChildren();
  sources.forEach((source) => {
    const count = source === "All" ? available.length : available.filter((item) => item.source === source).length;
    const button = makeElement("button", `tab${state.source === source ? " active" : ""}`);
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(state.source === source));
    button.append(makeElement("span", "tab-name", source), makeElement("span", "tab-count", count));
    button.addEventListener("click", () => { state.source = source; renderTabs(); renderCommands(); });
    elements.tabs.append(button);
  });
}

function matchesSearch(item, query) {
  if (!query) return true;
  return [item.command, ...(item.aliases || []), item.source, item.access, item.category, item.accessNote || "", ...item.platform, item.status, item.description, item.usage]
    .some((value) => value.toLowerCase().includes(query));
}

function getFilteredCommands() {
  const query = elements.search.value.trim().toLowerCase();
  return availableCommands()
    .filter((item) => state.source === "All" || item.source === state.source)
    .filter((item) => elements.platform.value === "All" || item.platform.includes(elements.platform.value))
    .filter((item) => elements.access.value === "All" || item.access === elements.access.value)
    .filter((item) => elements.category.value === "All" || item.category === elements.category.value)
    .filter((item) => elements.status.value === "All" || item.status === elements.status.value)
    .filter((item) => matchesSearch(item, query))
    .sort((a, b) => a.command.localeCompare(b.command));
}

function groupFor(item) {
  if (state.view === "staff" && item.elevatedAccess) return item.elevatedAccess;
  return ["Moderator", "Admin", "Owner"].includes(item.access) ? item.access : "Viewer";
}
function tag(text, className = "") { return makeElement("span", `meta-tag ${className}`.trim(), text); }

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

async function copyCommand(item, button) {
  try {
    await navigator.clipboard.writeText(item.usage || item.command);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = item.usage || item.command;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  button.textContent = "Copied";
  showToast(`${item.command} copied to clipboard`);
  window.setTimeout(() => { button.textContent = "Copy"; }, 1400);
}

function createCommandCard(item) {
  const card = makeElement("article", "command-card");
  const top = makeElement("div", "card-top");
  const identity = makeElement("div", "command-identity");
  const commandLine = makeElement("div", "command-line");
  commandLine.append(makeElement("code", "command-name", item.command));
  if (item.aliases?.length) commandLine.append(makeElement("span", "alias", `Alias ${item.aliases.join(", ")}`));
  identity.append(commandLine, makeElement("p", "command-description", item.description));
  const copy = makeElement("button", "copy-button", "Copy");
  copy.type = "button";
  copy.setAttribute("aria-label", `Copy usage for ${item.command}`);
  copy.addEventListener("click", () => copyCommand(item, copy));
  top.append(identity, copy);

  const usage = makeElement("div", "usage-row");
  usage.append(makeElement("span", "usage-label", "Usage"), makeElement("code", "usage-code", item.usage || item.command));
  const metadata = makeElement("div", "metadata");
  metadata.append(tag(item.source, `source-${item.source.toLowerCase().replaceAll(".", "").replaceAll(" ", "-")}`));
  item.platform.forEach((platform) => metadata.append(tag(platform, `platform-${platform.toLowerCase()}`)));
  const accessText = item.elevatedAccess ? `${item.access} · ${item.elevatedAccess} controls` : item.access;
  metadata.append(tag(accessText, `access-${item.access.toLowerCase()}`));
  metadata.append(tag(item.category, "category-tag"));
  if (item.accessNote) metadata.append(tag(item.accessNote, "access-note"));
  metadata.append(tag(item.status, `status-${item.status.toLowerCase()}`));
  card.append(top, usage, metadata);
  return card;
}

function renderCommands() {
  const filtered = getFilteredCommands();
  elements.list.replaceChildren();
  elements.summary.textContent = `${filtered.length} ${filtered.length === 1 ? "command" : "commands"} shown`;
  ["Viewer", "Moderator", "Admin", "Owner"].forEach((group) => {
    const groupCommands = filtered.filter((item) => groupFor(item) === group);
    if (!groupCommands.length) return;
    const section = makeElement("section", "command-group");
    const heading = makeElement("div", `group-heading group-${group.toLowerCase()}`);
    const headingCopy = makeElement("div");
    headingCopy.append(
      makeElement("h3", "", group === "Viewer" ? "Viewer commands" : `${group} commands`),
      makeElement("p", "", group === "Viewer" ? "Available to the community" : group === "Moderator" ? "Routine moderation and case communication" : group === "Admin" ? "Trusted high-impact and emergency tools" : "Owner-only protected controls"),
    );
    heading.append(headingCopy, makeElement("span", "group-count", groupCommands.length));
    const grid = makeElement("div", "command-grid");
    groupCommands.forEach((item) => grid.append(createCommandCard(item)));
    section.append(heading, grid);
    elements.list.append(section);
  });
  if (!filtered.length) {
    const empty = makeElement("div", "empty-state");
    const selectedSourceIsEmpty = state.source !== "All" && !availableCommands().some((item) => item.source === state.source);
    empty.append(
      makeElement("span", "", "☣"),
      makeElement("h3", "", selectedSourceIsEmpty ? `No ${state.source} commands yet` : "No command survived that search"),
      makeElement("p", "", selectedSourceIsEmpty ? "This source is reserved and ready for commands when they are added." : "Try another search term or clear the filters."),
    );
    elements.list.append(empty);
  }
}

function setView(view) {
  state.view = view;
  state.source = "All";
  elements.access.value = "All";
  elements.category.value = "All";
  elements.status.value = view === "public" ? "Active" : "All";
  elements.viewButtons.forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  elements.note.textContent = view === "public"
    ? "Public view contains only active commands available to everyone across every source tab."
    : "Staff view separates Moderator, Admin, and Owner tools, plus shared commands with elevated controls.";
  renderTabs();
  renderCommands();
}

function clearFilters() {
  state.source = "All";
  elements.search.value = "";
  elements.platform.value = "All";
  elements.access.value = "All";
  elements.category.value = "All";
  elements.status.value = state.view === "public" ? "Active" : "All";
  renderTabs();
  renderCommands();
  elements.search.focus();
}

elements.search.addEventListener("input", renderCommands);
[elements.platform, elements.access, elements.category, elements.status].forEach((select) => select.addEventListener("change", renderCommands));
elements.clear.addEventListener("click", clearFilters);
elements.viewButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelectorAll("[data-command-view]").forEach((link) => link.addEventListener("click", () => setView(link.dataset.commandView)));
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== elements.search) { event.preventDefault(); elements.search.focus(); }
  if (event.key === "Escape" && document.activeElement === elements.search) { elements.search.value = ""; elements.search.blur(); renderCommands(); }
});

renderTabs();
renderCommands();
