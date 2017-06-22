const thunk = (middlewareApi) => dispatch => action =>{
    if(typeof action === 'function'){
        return action(middlewareApi);
    }
    return dispatch(action)
};