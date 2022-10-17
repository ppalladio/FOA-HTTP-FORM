import classes from './Checkout.module.css';

const Checkout = (props) => {

    const confirmHandler = (e)=>{
        e.preventDefault()

    }
    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <lable htmlFor="name"> Your name </lable>
                <input type="text" id="name" />
            </div>
            <div>
                <lable htmlFor="street"> Street </lable>
                <input type="text" id="street" />
            </div>
            <div>
                <lable htmlFor="postal"> Postal </lable>
                <input type="text" id="postal" />
            </div>
            <div>
                <lable htmlFor="city"> City </lable>
                <input type="text" id="city" />
            </div>
            <button type='button' onClick={props.onCancel}> Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;
