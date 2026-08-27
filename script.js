const commands = [
  ["!tags","Streamer.bot","Moderator","Updates the stream tags used for discovery.","!tags <tags>"],
  ["!accountage","Streamer.bot","Everyone","Shows how old a viewer's Twitch account is.","!accountage [username]"],
  ["!blur","Streamer.bot","Everyone","Explains the OBS blur used to hide in-game chat when it gets too toxic."],
  ["!chatstats","Streamer.bot","Everyone","Displays available chat activity statistics."],
  ["!commands","Streamer.bot","Everyone","Posts the link to this complete command directory.","Alias: !cmds"],
  ["!discord","Streamer.bot","Everyone","Posts an invite to the ThyToxicGamer Discord community."],
  ["!donate","Streamer.bot","Everyone","Posts the StreamElements tip-page link."],
  ["!drops","Streamer.bot","Everyone","Shares current Twitch Drops information."],
  ["!followage","Streamer.bot","Everyone","Shows how long a viewer has followed the channel.","!followage [username]"],
  ["!game","Streamer.bot","Everyone / Moderator","Shows the current game; moderators can update the category.","!game [game]"],
  ["!leaderboard","Streamer.bot","Everyone","Posts the Toxic Tokens leaderboard link."],
  ["!lurk","Streamer.bot","Everyone","Lets chat know a viewer is lurking while supporting the stream."],
  ["!marker","Streamer.bot","Moderator","Creates a Twitch stream marker for easy editing later."],
  ["!modhelp","Streamer.bot","Moderator","Displays the available moderator command help."],
  ["!modview","Streamer.bot","Moderator","Posts the Twitch Moderator View link."],
  ["!ownedgames","Streamer.bot","Everyone","Posts the link to ThyToxicGamer's owned-game catalog."],
  ["!pcsetup","Streamer.bot","Everyone","Shares information about the PC and streaming setup."],
  ["!playlist","Streamer.bot","Everyone","Posts the link to the music playlist used for the stream."],
  ["!socials","Streamer.bot","Everyone","Posts ThyToxicGamer's social platforms and content links."],
  ["!song","Streamer.bot","Everyone","Shows information about the currently playing song."],
  ["!pcspecs","Streamer.bot","Everyone","Displays the gaming PC hardware, streaming gear, and peripherals."],
  ["!poll","Streamer.bot","Everyone","Posts the public Toxic Poll Center link so viewers can vote in active polls."],
  ["!pollpanel","Streamer.bot","Moderator","Sends the broadcaster or a moderator a private, temporary link to the Toxic Poll Creator."],
  ["!title","Streamer.bot","Everyone / Moderator","Shows the current title; moderators can update it.","!title [new title]"],
  ["!uptime","Streamer.bot","Everyone","Shows how long the current stream has been live."],
  ["!youtube","Streamer.bot","Everyone","Posts the YouTube link for reruns and occasional livestreams."],
  ["!permit","StreamElements","Moderator","Temporarily permits a viewer to post a link.","!permit <username>"],
  ["!ping","StreamElements","Moderator","Checks whether the StreamElements chatbot is responding."],
  ["!top","StreamElements","Everyone","Displays the top viewers by Toxic Tokens or watch time.","!top [points|alltime|online|offline]"],
  ["!watchtime","StreamElements","Everyone","Shows a viewer's accumulated channel watch time.","!watchtime [username]"],
  ["!filters","Nightbot","Moderator","Manages Nightbot's spam-protection filters.","!filters <filter> [setting]"],
  ["!regulars","Nightbot","Moderator","Adds or removes viewers from Nightbot's regular-user list.","!regulars <add|delete> <username>"],
].map(([command, platform, permission, description, usage = ""]) => ({ command, platform, permission, description, usage }));

const filterNames = ["All", "Streamer.bot", "StreamElements", "Nightbot"];
const tabs = document.querySelector("#tabs");
const list = document.querySelector("#command-list");
const search = document.querySelector("#search");
const totalCount = document.querySelector("#total-count");
let activeFilter = "All";

totalCount.textContent = commands.length;

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderTabs() {
  tabs.replaceChildren();
  filterNames.forEach((name) => {
    const count = name === "All" ? commands.length : commands.filter((item) => item.platform === name).length;
    const button = makeElement("button", `tab${activeFilter === name ? " active" : ""}`, `${name} `);
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(activeFilter === name));
    button.append(makeElement("span", "", count));
    button.addEventListener("click", () => { activeFilter = name; renderTabs(); renderCommands(); });
    tabs.append(button);
  });
}

function renderCommands() {
  const query = search.value.trim().toLowerCase();
  const groupOrder = { "Everyone": 0, "Moderator": 1, "Super Moderator": 2 };
  const permissionGroup = (permission) => permission === "Super Moderator" ? "Super Moderator" : permission === "Moderator" ? "Moderator" : "Everyone";
  const filtered = commands.filter((item) => {
    const platformMatch = activeFilter === "All" || item.platform === activeFilter;
    const textMatch = !query || Object.values(item).some((value) => value.toLowerCase().includes(query));
    return platformMatch && textMatch;
  }).sort((a, b) => {
    const groupDifference = groupOrder[permissionGroup(a.permission)] - groupOrder[permissionGroup(b.permission)];
    return groupDifference || a.command.localeCompare(b.command);
  });

  list.replaceChildren();
  let currentGroup = "";
  filtered.forEach((item) => {
    const group = permissionGroup(item.permission);
    if (group !== currentGroup) {
      currentGroup = group;
      const title = group === "Moderator" ? "Moderator Commands" : group === "Super Moderator" ? "Super Moderator Commands" : "Everyone Commands";
      const heading = makeElement("div", `permission-group permission-group-${group.toLowerCase().replace(" ", "-")}`);
      heading.append(makeElement("h2", "", title), makeElement("span", "", filtered.filter((command) => permissionGroup(command.permission) === group).length));
      list.append(heading);
    }
    const row = makeElement("article", "command-row");
    const name = makeElement("div", "command-name");
    name.append(makeElement("code", "", item.command));
    if (item.usage) name.append(makeElement("small", "", item.usage));
    const platformClass = item.platform.toLowerCase().replace(".", "").replace("stream", "stream-");
    const permissionClass = item.permission.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-");
    row.append(name, makeElement("span", `platform platform-${platformClass}`, item.platform), makeElement("span", `permission permission-${permissionClass}`, item.permission), makeElement("p", "", item.description));
    list.append(row);
  });

  if (!filtered.length) {
    const empty = makeElement("div", "empty-state");
    empty.append(makeElement("span", "", "☣"), makeElement("h2", "", "No command survived that search."), makeElement("p", "", "Try another command name, bot, or permission."));
    list.append(empty);
  }
}

search.addEventListener("input", renderCommands);
renderTabs();
renderCommands();
