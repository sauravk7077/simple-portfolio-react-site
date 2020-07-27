import React from "react";

export default class FormGroup extends React.Component{
    state = {
        value: '',
        error: false
    }
    handleChange = (e)=>{
        if(this.props.type === 'email'){
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(e.target.value))
                this.error = true;
            else
                this.error = false;
        }
        this.setState(
            {
                value: e.target.value
            }
        );
    }
    render() {
        let {type, label} = this.props;
        return (
            <div className='form-group'>
                <label>{label}</label>
                {type === 'textarea' ? <textarea onChange={this.handleChange} value={this.value}></textarea> : <input onChange={this.handleChange} value={this.value} type={type}/>}
                {this.error?<p>Please enter correct {label.toLowerCase()}</p>:<br/>}
            </div>
        )
    }
}