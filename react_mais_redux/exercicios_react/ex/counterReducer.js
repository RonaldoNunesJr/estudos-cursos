const INITIAL_VALUE = { step: 1, number: 0 }

export default function (state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'INC':
            return { ...sate, number: state.number + state.step }
        case 'DEC':
            return { ...sate, number: state.number - state.step }
        case '': 
            return { ...sate, step: action.payload }
        default:
            return state
    }
}