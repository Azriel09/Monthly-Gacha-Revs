export function getLocalStorage() {
  const defaultGames = [1, 2, 3, 4];

  if (!localStorage.getItem("gameList")) {
    // If it doesn't exist, create and set the item
    localStorage.setItem("gameList", JSON.stringify(defaultGames));
  }
}

export function setLocalStorage() {
  setLocalStorage();
}
