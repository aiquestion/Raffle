function saveSetting(raffle) {
   window.localStorage.setItem("RaffleStorage", JSON.stringify(raffle));
}
function loadSetting() {
   var content = window.localStorage.getItem("RaffleStorage");
   if (!content) return null;
   return JSON.parse(content);
}
