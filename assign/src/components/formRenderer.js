import React,{Component} from 'react';
import {connect} from 'react-redux';
import styles from './formRenderer.module.css'

class FormRenderer extends Component{
    state={
        types:{
            elementType:'',
            type:'',
            placeholder:''
        },
        validator:{

        }

    }
    componentDidMount(){
        const element=JSON.parse(this.props.form)
        console.log(element)
       
   
    }
    
    render(){
        return(
            <div className={styles.body}>
            <h1>hello i am Form</h1>
            <h3>{this.props.form}</h3>
           
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        form:state.schema
    }

}

export default connect(mapStateToProps,null)(FormRenderer)