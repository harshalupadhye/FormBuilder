import React,{Component} from 'react';
import styles from './schemaInput.module.css';
import {formTake} from '../store/action/form'
import {connect} from 'react-redux';



class SchemaInput extends Component{
    state={
        schema:''
    }
    schemaInputHandler=(event)=>{
        this.setState({
            schema:event.target.value
        })
    }
    createForm=()=>{
        console.log("clicked")
        this.props.history.push("/Form")
        this.props.takeForm(this.state.schema)


    }
    render(){
        
        return(
            <div className={styles.body}>
                <h1>Please enter the Json Schema</h1>
                <p>Enter Fields and respective Validators for them</p>
                <textarea className={styles.textArea}placeholder="Enter your Schema" onChange={this.schemaInputHandler}></textarea>
                <br/>
                <button className={styles.button} onClick={this.createForm}>Create Form</button>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
           takeForm:(schema)=>dispatch(formTake(schema))
    }
}
export default connect(null,mapDispatchToProps)(SchemaInput);