import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import useStyles from './styles';
import { createPost } from '../../actions/posts';


const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDeafault(); // cancel refreshFf on browser
        dispatch(createPost(postData));
        console.log("refresh prevented");
        return false;
        
    }

    const clear = () => {


    }
    //..post prevent to override the data
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6">Add new work</Typography>
                <TextField name="Location" variant="outlined" label="Location" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />s
                <TextField name="work's name" variant="outlined" label="work's name" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="Maintenance frequency" variant="outlined" label="Maintenance frequency" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /> </div> */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>

    );
}

export default Form;