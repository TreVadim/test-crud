import axios from "axios";

import * as constants from "../constants";

const getUserDone = (payload) => ({ type: constants.GET_USERS_DONE, payload });
const getUserFail = () => ({ type: constants.GET_USERS_FAIL });

export const getUsers = () => (
    dispatch => (
        axios.get(constants.URL)
            .then(({ data }) => {
                dispatch(getUserDone(data));
            })
            .catch((error) => {
                dispatch(getUserFail());
            })
    )
);

export const getUserById = (id) => (
    dispatch => (
        axios.get(`${constants.URL}${id}/`)
            .then(({ data }) => {
                console.log("getById", data);
            })
            .catch((error) => {
                console.log("error", error);
            })
    )
);

export const createUser = () => (
    dispatch => {
        const data = {
            first_name: "Name",
            last_name: "Last Name",
            job: "Job",
            birth_date: "1993-12-18",
            gender: "male",
            is_active: false
        };

        return axios.post(constants.URL, data)
            .then((data) => {
                console.log("data", data);
            })
            .catch((error) => {
                console.error(error);
            })
    }
);

export const deleteUser = (id) => (
    dispatch => {
        return axios.delete(`${constants.URL}${id}/`)
            .then((data) => {
                console.log("delete", data);
            })
            .catch((error) => {
                console.error(error);
            })
    }
);

export const updateUser = (user) => (
    dispatch => {
        const data = {
            ...user,
            job: "updated job"
        };

        return axios.put(`${constants.URL}${user.id}/`, data)
            .then((data) => {
                console.log("update", data);
            })
            .catch((error) => {
                console.error(error);
            })
    }
);