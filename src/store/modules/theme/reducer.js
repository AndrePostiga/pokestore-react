export default function theme(state = '', action) {
  switch (action.type) {
    case 'THEME':
      return {
        theme: action.theme || 'grass', 
        color: getColorFromTheme(action.theme)
      }

    default:
      return state;
  }
}

const getColorFromTheme = (theme) => {
  switch (theme){
    case 'grass':
      return 'green'
    case 'fire':
      return 'red'
    case 'water':
      return 'blue'
    default:
      return 'green'
  }
}