import * as types from './studentType';

export const addStudent = (payload) => {
    return{
        type : types.ADD,
        payload
    }
}
export const addStudentSuccess = (payload) => {
    return{
        type : types.ADD_SUCCESS,
        payload
    }
}

export const getAllStudent = (payload) => {
    return {
    type: types.GET_ALL, 
    payload
    };
  };
  
  export const getAllStudentSuccess = (payload) => {
    return {
    type: types.GET_ALL_SUCCESS,
    payload 
    };
  };

  