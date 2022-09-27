import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logUser = async() => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            It's signin Page
            <button onClick={logUser}>sign In With Google Popup</button>
        </div>
    )
}

export default SignIn;