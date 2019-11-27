import React from 'react';
import {connect} from "react-redux";
import './App.css';

import {getUsers, createUser, deleteUser, updateUser, getUserById} from "./actions";

class App extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const {isLoading, users, createUser, deleteUser, updateUser, getUserById} = this.props;

        if (isLoading) {
            return <div>Loading.....</div>
        }

        return (
            <div className="App">
                <p>Users:</p>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>birth_date</th>
                        <th>job</th>
                        <th>Is Active</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(item => (
                            <tr key={item.id}>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.gender}</td>
                                <td>{item.birth_date}</td>
                                <td>{item.job}</td>
                                <td>{item.is_active.toString()}</td>
                                <td>
                                    <button onClick={() => updateUser(item)}>Edit</button>
                                    <button onClick={() => deleteUser(item.id)}>Del</button>
                                    <button onClick={() => getUserById(item.id)}>Info</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <br/>
                <button onClick={createUser}>Create</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    isLoading: state.isLoading,
});

const mapDispatchToProps = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserById
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);