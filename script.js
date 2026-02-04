let state = JSON.parse(localStorage.getItem("graywickSave")) || {
  health: 100,
  sanity: 100,
  inventory: [],
  location: "Town Square",
  discoveredEndings: [],
  mapSeen: {}
};

const locations = [
  "Town Square","Church","School","Hospital","Forest",
  "Radio Tower","Motel","Lake","Suburbs","Underground"
];

const endings = [
  {id:1,title:"The Town Wins",text:"You stop questioning. Graywick continues forever."},
  {id:2,title:"The Voice Claims You",text:"It thanks you for listening."},
  {id:3,title:"Loop Acceptance",text:"You wake up on the same morning again."},
  {id:4,title:"The Witness",text:"You remember everything. No one believes you."},
  {id:5,title:"Radio Silence",text:"The tower broadcasts your name."},
  {id:6,title:"Buried Alive",text:"The town seals you underground."},
  {id:7,title:"False Escape",text:"The road bends back into town."},
  {id:8,title:"Sanity Zero",text:"You see the true map. It sees you back."},
  {id:9,title:"The Caretaker",text:"You maintain the loop now."},
  {id:10,title:"The Burned Church",text:"The bells ring without hands."},
  {id:11,title:"Hospital Reset",text:"Your chart lists cause of death: curiosity."},
  {id:12,title:"Lake Reflection",text:"The reflection doesn't blink."},
  {id:13,title:"Motel Check-Out",text:"You never checked in."},
  {id:14,title:"Forest Listening",text:"Trees whisper your childhood name."},
  {id:15,title:"Suburban Smile",text:"Everyone waves at the same time."},
  {id:16,title:"Underground Choir",text:"They sing your memories."},
  {id:17,title:"The Map Burns",text:"Fog never lifts again."},
  {id:18,title:"The Voice Lies",text:"You trusted it anyway."},
  {id:19,title:"Static Ending",text:"Everything degrades into noise."},
  {id:20,title:"The First Resident",text:"You arrive before the town existed."},
  {id:21,title:"Radio Host",text:"You announce missing persons."},
  {id:22,title:"Silent NPC",text:"They finally stop responding."},
  {id:23,title:"Mirror Collapse",text:"You split into iterations."},
  {id:24,title:"The School Bell",text:"It rings for nobody."},
  {id:25,title:"Locked Ward",text:"You are the long-term patient."},
  {id:26,title:"Forest Exit",text:"Only animals escape."},
  {id:27,title:"Tower Fall",text:"The signal continues without you."},
  {id:28,title:"Lost Save",text:"Your progress corrupts itself."},
  {id:29,title:"Broken Inventory",text:"Items remember you."},
  {id:30,title:"Health Zero",text:"Death is not an exit."},
  {id:31,title:"Sanity Overload",text:"Understanding destroys you."},
  {id:32,title:"The Archivist",text:"You catalog endings forever."},
  {id:33,title:"Watcher Ending",text:"Something else finishes the game."},
  {id:34,title:"NPC Awakening",text:"They ask why you control them."},
  {id:35,title:"The Glitch",text:"Reality tears visibly."},
  {id:36,title:"Fake Error",text:"SYSTEM FAILURE_7A"},
  {id:37,title:"The Reset Button",text:"You press it anyway."},
  {id:38,title:"Town Without You",text:"Everything improves."},
  {id:39,title:"Voice Silenced",text:"The town screams instead."},
  {id:40,title:"The End That Isn't",text:"This screen lies."},
  {id:41,title:"Cold Lake",text:"You sink into static."},
  {id:42,title:"School Loop",text:"Same lesson forever."},
  {id:43,title:"Forest Watcher",text:"Eyes open in bark."},
  {id:44,title:"Radio Numbers",text:"Coordinates spell your name."},
  {id:45,title:"Motel Room 0",text:"Time never passed here."},
  {id:46,title:"Underground Map",text:"Fog hides the truth."},
  {id:47,title:"Broken HUD",text:"Your stats lie now."},
  {id:48,title:"The Caretaker Dies",text:"The town decays."},
  {id:49,title:"The Voice Wins",text:"You obeyed."},
  {id:50,title:"Town Awakens",text:"Buildings breathe."},
  {id:51,title:"NPC Ending",text:"You were never real."},
  {id:52,title:"The Player Ending",text:"You realize this is a trap."},
  {id:53,title:"Developer Ending",text:"There are more endings."},
  {id:54,title:"File Corruption",text:"Save data screams."},
  {id:55,title:"Map Completion",text:"Knowing ruins it."},
  {id:56,title:"Observer Effect",text:"Looking changes it."},
  {id:57,title:"Last Resident",text:"Everyone else left."},
  {id:58,title:"No Choice Ending",text:"Buttons disappear."},
  {id:59,title:"The Real World",text:"Graywick follows you."},
  {id:60,title:"True Ending",text:"The town thanks you for finishing it."}
];

function saveGame() {
  localStorage.setItem("graywickSave", JSON.stringify(state));
}

function triggerEnding(id) {
  const ending = endings.find(e => e.id === id);
  if (!state.discoveredEndings.includes(id)) {
    state.discoveredEndings.push(id);
  }
  document.getElementById("storyText").innerText =
    ending.title + "\n\n" + ending.text;
  document.getElementById("choices").innerHTML = "";
  saveGame();
}

function sanityEffects() {
  if (state.sanity < 40) {
    document.body.classList.add("lowSanity");
    document.getElementById("voice").playbackRate = 0.7;
  }
  if (state.sanity < 20) {
    document.getElementById("fakeError").classList.remove("hidden");
    setTimeout(()=>document.getElementById("fakeError").classList.add("hidden"),800);
  }
}

sanityEffects();
