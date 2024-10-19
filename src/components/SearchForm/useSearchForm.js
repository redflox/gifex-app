import { useReducer } from 'react'

const ACTIONS = {
    UPDATE_KEYWORD: 'update-keyword',
    UPDATE_RATING: 'update-rating',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }

        default:
            return state;
    }
}

const useSearchForm = ({initialKeyword, initialRating}) => {
    const [state, dispatch] = useReducer(reducer, {
        keyword: initialKeyword,
        rating: initialRating,
        times: 0
    })
    const { keyword, rating, times } = state
    return {
        keyword,
        rating,
        times,
        updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
    }
}

export default useSearchForm;