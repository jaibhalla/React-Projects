const navbarOpen = (state = false,action) =>{
    switch(action.type){
        case "OPEN_NAVBAR":
            return true
        case "CLOSE_NAVBAR":
            return false  
        default:
            return state
    }
}
export default navbarOpen