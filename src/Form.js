import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class Form extends React.Component{
    render(){
        return(
            <div>
             <TextField
                label="Contact 1"
                 id="simple-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
            />
            <br></br>
            <TextField
                style={{marginTop:'10px'}}
                label="Phone Number"
                 id="simple-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
            />
            <br></br>
            <TextField
                style={{marginTop:'20px'}}
                label="Contact 2"
                 id="simple-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
            />
            <br></br>
            <TextField
                style={{marginTop:'10px'}}
                label="Phone Number"
                 id="simple-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
            />
        </div>
        );
    }
}

export default Form;