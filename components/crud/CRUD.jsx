import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const CRUD = () => {
    let createBtnRef = useRef()
    let [state, setState] = useState({
        username: "",
        password: "",
        id: uuidv4(),
        list:[],
    });
    //destructure
    let { username, password, id,list } = state;
    let handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    let handlesubmit = (e) => {
        e.preventDefault();
        let tempObj = {
            username: state.username,
            password: state.password,
            id: state.id,
        };
        createBtnRef.current.textContext == 'Update' ? createBtnRef.current.textContent= "Create" : createBtnRef.current.textContent= "Create"
        setState({
            username: "",
            password: "",
            id: uuidv4(),
            list: [...state.list, tempObj],
        });
    };

    let handleDelete = (id) => {
        let updatedList = state.list.filter((val) => {
            return val.id != id;
        });
        setState({ ...state, list: updatedList });
    };

    let handleUpdate = (id, e) => {
        let updatedList = state.list.filter((val) =>{
            return val.id != id;
        });
        createBtnRef.current.textContext == 'Update'
        let itemToUpdate = state.list.find((val)=>{
          return val.id == id;
        });

        setState({
            username: itemToUpdate.username,
            password: itemToUpdate.password,
            id: itemToUpdate.id,
            list: updatedList,
        });
    };

  return (
    <div>
        <form action="">
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="username"
            required
            />
            <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            required
            />
            <button onClick={handlesubmit} ref={createBtnRef}>Create</button>
        </form>

        <div className="d-flex flex-wrap">
            {Array.isArray(state.list) && state.list.length > 0 && state.list.map((val, i) => {
                return (
                    <div 
                    key={i}
                    className="w-auto m-2 bg-light p-3 border border-1 overflow-auto"
                    >
                        <h1>Username : {val.username}</h1>
                        <h1>Password : {val.password}</h1>
                        <p>id : {val.id}</p>
                        <button onClick={(e) => {
                            handleUpdate(val.id, e);
                        }}
                        className="px-5 mx-3 bg-success text-white border border-0 rounded-1 py-1"
                        >
                            Update
                        </button>

                        <button
                            onClick={(e) => {
                                handleDelete(val.id);
                            }}
                            className="px-5 mx-3 bg-danger text-white border border-0 rounded-1 py-1"
                            >
                                Delete
                            </button>
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default CRUD
