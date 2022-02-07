export const WORDS_POOL = [
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'cat',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'plant',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'island',
  },
  {
    countryCode: 'vn',
    isUnicode: true,
    guessTime: null,
    extraGuessTime: 3,
    value: 'thuỷ',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'pitch',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'perfect',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'chunk',
  },
  {
    countryCode: 'vn',
    isUnicode: true,
    guessTime: null,
    extraGuessTime: 3,
    value: 'chống',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'dog',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'baggy',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'goal',
  },
  {
    countryCode: 'vn',
    isUnicode: true,
    guessTime: null,
    extraGuessTime: 3,
    value: 'làng',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'drink',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'ignore',
  },

  {
    countryCode: 'vn',
    isUnicode: true,
    guessTime: null,
    extraGuessTime: 3,
    value: 'trái',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'kingdom',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'trunk',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'bicycle',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'skill',
  },
  {
    countryCode: 'vn',
    isUnicode: true,
    guessTime: null,
    extraGuessTime: 3,
    value: 'kiến',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'original',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'dragon',
  },
  {
    countryCode: 'vn',
    isUnicode: true,
    guessTime: null,
    extraGuessTime: 3,
    value: 'sống',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'pleat',
  },
  {
    countryCode: 'us',
    isUnicode: false,
    guessTime: null,
    extraGuessTime: null,
    value: 'death',
  },
  {
    countryCode: 'vn',
    isUnicode: true,
    guessTime: null,
    extraGuessTime: 3,
    value: 'phải',
  },
];

export const SUCCESS_LEVEL = {
  EXCELLENT: 0.25,
  GOOD: 0.75,
  NICE: 1,
};

export const SUCCESS_MESSAGE = {
  EXCELLENT: ['Incredible!', 'How extraordinary you are!', 'Unbelievable!'],
  GOOD: ['Very good!', "That's right!", 'You are so talent!'],
  NICE: ['Nice!', 'Awesome!', 'Correct!'],
};
export const FAIL_MESSAGE = [
  'Bad luck!',
  "It's hard, right?",
  'Not your time!',
];

export const CORRECT_LEVEL = {
  INCORRECT: 0,
  ALMOST_CORRECT: 1,
  CORRECT: 2,
};

export const VIETNAMESE_REGEX =
  /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/s;
