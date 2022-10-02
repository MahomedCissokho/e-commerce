import './form-input.style.scss';

const FormInput = ({label, ...othersProps}) => {
    return (
        <div className="group" >
            <label> {label} </label>
            <input {...othersProps} />
        </div>

    )
}

export default FormInput;