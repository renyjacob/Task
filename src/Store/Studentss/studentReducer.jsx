import * as types from './studentType'

let initialState = {
  studentList: [],
  student: {},
  studentId:''
}

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SUCCESS:
      return {
        ...state,
        studentId: action.payload,
      };
    case types.ADD_FAILED:
      return {
        ...state,
      };
    case types.GET_ALL_SUCCESS:
      return {
        ...state,
        studentList: action.payload,
      };
    case types.GET_ALL_FAILED:
      return {
        ...state,
      };
    default:
      {
        return state;
      }
  }
};

export default studentReducer;