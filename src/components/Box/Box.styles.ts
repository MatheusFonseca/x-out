const disabledBgStyle =
  'relative after:absolute after:w-full after:bg-gray after:h-full after:rounded-2xl after:bg-[rgb(0,0,0,0.25)] bg-white shadow-lg';

export const boxStyles = {
  bg: {
    default: {
      red: 'bg-white shadow-lg',
      yellow: 'bg-white shadow-lg',
      green: 'bg-white shadow-lg',
      blue: 'bg-white shadow-lg',
    },
    markedOff: {
      red: 'bg-white shadow-lg',
      yellow: 'bg-white shadow-lg',
      green: 'bg-white shadow-lg',
      blue: 'bg-white shadow-lg',
    },
    playedDown: {
      red: 'bg-red-dark',
      yellow: 'bg-yellow-dark',
      green: 'bg-green-dark',
      blue: 'bg-blue-dark',
    },
    disabled: {
      red: disabledBgStyle,
      yellow: disabledBgStyle,
      green: disabledBgStyle,
      blue: disabledBgStyle,
    },
  },
  number: {
    default: {
      red: 'text-red text-shadow-red-dark',
      yellow: 'text-yellow text-shadow-yellow-dark',
      green: 'text-green text-shadow-green-dark',
      blue: 'text-blue text-shadow-blue-dark',
    },
    markedOff: {
      red: 'text-red text-shadow-red-dark',
      yellow: 'text-yellow text-shadow-yellow-dark',
      green: 'text-green text-shadow-green-dark',
      blue: 'text-blue text-shadow-blue-dark',
    },
    playedDown: {
      red: 'text-white text-shadow-gray-light',
      yellow: 'text-white text-shadow-gray-light',
      green: 'text-white text-shadow-gray-light',
      blue: 'text-white text-shadow-gray-light',
    },
    disabled: {
      red: 'text-red text-shadow-red-dark',
      yellow: 'text-yellow text-shadow-yellow-dark',
      green: 'text-green text-shadow-green-dark',
      blue: 'text-blue text-shadow-blue-dark',
    },
  },
};
