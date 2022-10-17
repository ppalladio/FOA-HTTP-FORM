import classes from './Checkout.module.css';

const Checkout = () => {
    return (
        <form className={classes.control}>
            <div>
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
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;
