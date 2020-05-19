const INITIAL_STATE = {
  theme: 'grass',
  color: 'green',
};

export default function theme(state = INITIAL_STATE, action = '') {
  switch (action.type) {
    case 'THEME':
      return getThemeFromString(action.theme);

    default:
      return state;
  }
}

const getThemeFromString = (theme) => {
  switch (theme) {
    case 'grass':
      return { theme: 'grass', color: 'green' };
    case 'fire':
      return { theme: 'fire', color: 'red' };
    case 'water':
      return { theme: 'water', color: 'blue' };
    case 'poison':
      return { theme: 'poison', color: 'violet' };
    default:
      return { theme: 'grass', color: 'green' };
  }
};
