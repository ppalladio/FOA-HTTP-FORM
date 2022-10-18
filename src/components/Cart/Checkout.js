import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formIsValid, setFormIsValid] = useState({
        name: true,
        street: true,
        city: true,
        postal: true,
    }); //' state is an object

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChar(enteredPostal);

        setFormIsValid({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid,
        }); //' 'reset the states

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalIsValid &&
            enteredCityIsValid;

        if (!formIsValid) {
            return;
        }
        props.onCheckout({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity,
        });
    };

    const nameControlClasses = `${classes.control} ${
        formIsValid.name ? '' : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
        formIsValid.street ? '' : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
        formIsValid.city ? '' : classes.invalid
    }`;
    const postalControlClasses = `${classes.control} ${
        formIsValid.postal ? '' : classes.invalid
    }`;
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" id="name" />
                {!formIsValid.name && <p> Please enter a valid name</p>}
                {/* //.show error msg when the name key is false */}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formIsValid.street && <p> Please enter a valid street</p>}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!formIsValid.postal && (
                    <p> Please enter a valid postal (5 digits)</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formIsValid.city && <p> Please enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
