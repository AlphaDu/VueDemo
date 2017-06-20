function lowBigger (someapi) {
    return function(dispatch){
        return function (action) {
            console.log('low: before dispatch');
            dispatch(action);
            console.log('low: after dispatch' );
            return action;
        }
    }
}
let action ="add";
let mockStore = {
    state:0,
    dispatch:function (action) {
        this.state ++;
        return action;
    }.bind(this)
};


let middlewareApi = {

};