const intialState = {
    done: false,
    query:"Nothing",
    queryData: []
}

const videoListCalculation = (state = intialState, action) =>{
    if(action.type === "STORE_QUERY"){
        state = {
            done: false,
            query: action.payload,
        }
    }
    else if(action.type === "FIND_VIDEO_LIST"){
        state = {
            done: true,
            queryData: action.payloadResult
        }
    }

    
    return state
}

export default videoListCalculation