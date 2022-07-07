
import * as api from '../api'

// Action Creators 
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
export const getPosts = () => async (dispatch) => {
    try {

        const { data } = await api.fetchPost();
        dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error.message)
    }
}        