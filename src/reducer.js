export const initialState = {
    user:  null,
    playlists: [],
    spotify: null,
    playing: false,
    item: null,
    //token: 'BQAywZcaflN2c8CxOomGN1VPFUXGtmqTNbkQPhUrEWFGIIVvBnU2E-Te5CRlvDCdauOf3qEPcX12ZYSqJ0Sc1F3YsO9cuxcSBpk6cx2ragcdXdoH2l2XC17ekymZJMCPnfPQ_JiKVGZtSWz1OpRLMfq3sBNgel5hkt1bRK4QYDCAo1cIsyY3bqjAWwLRmWYyivCQSMyiztI9m9E-b3B1_w'
};


const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,                    //to keep the current state  also
                user: action.user
            }
        case 'SET_TOKEN' :
            return{
                ...state,
                token: action.token
            }
            
        case 'SET_PLAYLISTS' :
            return{
                ...state,
                playlists: action.playlists,
            }
        
        case 'SET_DISCOVER_WEEKLY' :
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        
        case "SET_ITEM":                  //After video
                return {
                  ...state, 
                  item: action.item,
                };

        case "SET_PLAYING":                //After video
                return {
                  ...state,
                  playing: action.playing,
      };

        case "SET_SPOTIFY":                //After video
                return {
                  ...state,
                  spotify: action.spotify,
        };

        default: 
        return state;
    }
}


export default reducer;