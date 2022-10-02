import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            It's signin Page
            <button onClick={logUser}>sign In With Google Popup</button>
            <SignUp />
        </div>
    )
}

export default SignIn;