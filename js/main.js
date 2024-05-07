document.querySelector('#btnAddTenFriends').addEventListener('click', add10Friends);

/**
 * Creates and adds 10 'friend' div elements to the '#friendsList' element.
 */
function add10Friends() {
  for (let i = 0; i < 10; i++) {
    const friend = createFriend('Friend ' + i);
    document.querySelector('#friendsList').appendChild(friend);
  }
}

/**
 * Creates a new 'friend' div element with the given name.
 *
 * @param {string} friendName - The name of the friend.
 * @returns {HTMLDivElement} The newly created 'friend' div element.
 */
function createFriend(friendName) {
  const friend = document.createElement('div');
  friend.classList.add('friend');
  friend.textContent = friendName;
  return friend;
}

// Path: js/main.js