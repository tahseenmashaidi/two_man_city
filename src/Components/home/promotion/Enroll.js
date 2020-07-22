import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import FormField from "../../ui/form_fields";
import {Validation} from "../../ui/mise";
import {firebasePromotion} from "../../../firebase";


class Enroll extends Component {
    state={
        fromError:false,
        formSuccess:'',
        formData:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                validationMessage:''
            }
        }
    };
    resetFormSuccess(type){
        const newFormData = {...this.state.formData};
        for (let key in  newFormData){
            newFormData[key].value='';
            newFormData[key].valid=false;
            newFormData[key].validationMessage=false
        }
        this.setState({
            formError:false,
            formData:newFormData,
            formSuccess: type ? "Congratulation" :"Already on the database"
        });
        this.successMessage();
    }
    successMessage(){
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            })
        },2000)
    }
    submitForm (event) {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;
        for (let key in this.state.formData){
            dataToSubmit[key]=this.state.formData[key].value;
            formIsValid=this.state.formData[key].valid && formIsValid;
        }
        if (formIsValid){
            firebasePromotion.orderByChild('email').equalTo(dataToSubmit.email).once("value")
                .then((snapshot)=>{
                   if (snapshot.val()===null){
                       firebasePromotion.push(dataToSubmit);
                       this.resetFormSuccess(true);
                   }else {
                       this.resetFormSuccess(false);
                   }
                });

        }else {
            this.setState({
                formError:true
            })
        }

    }

    updateForm(element){
        const newFormData = {...this.state.formData};
        const newElement = {...newFormData[element.id]};
        newElement.value = element.event.target.value;

        let validationData= Validation(newElement);
        newElement.valid = validationData[0];
        newElement.validationMessage= validationData[1];


        newFormData[element.id] = newElement;
        this.setState({
            formError:false,
            formData:newFormData
        })
    }
    render() {
        return (
            <Fade>
                <div className={"enroll_wrapper"}>
                    <form onSubmit={(event)=>this.submitForm(event)}>
                        <div className={"enroll_title"}>
                            Enter your email
                        </div>
                        <div className={"enroll_input"}>
                            <FormField
                                id={'email'}
                                formData={this.state.formData.email}
                                change={(element)=> this.updateForm(element)}
                            />
                            {this.state.formError ?
                                <div className={"error_label"}>Something is wrong, Try again  </div>
                                :null
                            }
                            <div className={"success_label"}>{this.state.formSuccess} </div>
                            <button onClick={(event)=>this.submitForm(event)}>Enroll</button>
                            <div className={"enroll_discl"}>"Hello" is a song by English singer-songwriter Adele, released on 23 October 2015 by XL  </div>
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;