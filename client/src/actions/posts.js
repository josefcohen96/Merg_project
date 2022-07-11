import * as api from '../api/index'

// Action Creators 
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
export const getPosts = () => async (dispatch) => {
    try {

      const { data } = await api.fetchPosts();
      dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
      console.log(error.message)
    }
}
export const createPost = (post) => async (dispatch) => {
  try {

    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
    console.log("1")
    
  } catch (error) {
    console.log(error.message);
  }
};