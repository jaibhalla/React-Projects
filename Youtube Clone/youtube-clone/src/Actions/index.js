export const openNavBar = () =>{
    return{
        type: "OPEN_NAVBAR"
    }
}

export const closeNavBar = () =>{
    return{
        type: "CLOSE_NAVBAR"
    }
}

export const storeQuery = (query) =>{
    return{
        type: "QUERY_STORED",
        payload: query
    }
}

export const noQuery = () =>{
    return{
        type: "NO_QUERY"
    }
}

export const submitQuery = (finalQuery) =>{
    return{
        type: "STORE_QUERY",
        payload: finalQuery
    }
}

export const findVideoList = (videoResults) =>{
    return{
        type: "FIND_VIDEO_LIST",
        payloadResult: videoResults
    }
}

