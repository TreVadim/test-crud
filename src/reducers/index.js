import * as constants from "../constants";

const initialData = {
    users: [],
    isLoading: true
};

export const reducer = (state = initialData, { type, payload }) => {
    switch (type) {
        case constants.GET_USERS_DONE: {
            return {
                ...state,
                isLoading: false,
                users: payload
            };
        }

        case constants.GET_USERS_FAIL: {
            return {
                ...state,
                isLoading: false
            }
        }

        default: {
            return state;
        }
    }
};