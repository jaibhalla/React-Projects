const queryHandler = (state = "Go to Home", action)=>{
    switch(action.type){
        case "QUERY_STORED":
            return action.payload
        case "NO_QUERY":
            return "Go to Home"
        default:
            return state
    }
}

export default queryHandler