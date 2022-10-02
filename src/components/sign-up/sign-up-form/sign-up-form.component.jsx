import { useState } from "react";
import { createUserWithEmailAndPasswordAuth, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";

const formFieldsInit = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(formFieldsInit);
    const { displayName, email, password, confirmPassword } = formFields;

    const valueInput = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => setFormFields(formFieldsInit);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirmPassword don\'t match');
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPasswordAuth(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use')
                alert(" This email is already in use !");
            else if(error.code === 'auth/weak-password')   
                alert("Password should be at least 6 characters") ;
            else    
            console.error("user creation failed ! " + error.message);
        }
    }
    return (
        <div>
            <h1>Sign Up with Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput required label="Display Name" type='text' onChange={valueInput} name='displayName' value={displayName} />
                <FormInput label="Email" required type='email' onChange={valueInput} name='email' value={email} />
                <FormInput label="Password" required type='password' onChange={valueInput} name='password' value={password} />
                <FormInput label="Confirm Password" required type='password' onChange={valueInput} name='confirmPassword' value={confirmPassword} />
                <FormInput type='submit' value='Sign Up' />
            </form>
        </div>
    )
}

export default SignUp;