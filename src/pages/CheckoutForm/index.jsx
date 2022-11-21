import "../CheckoutForm/CheckoutForm.css";

const index = () => {
  return (
    <form className="review-form">
      <h3 className="h3">Shipping Details</h3>
      <p className="p">Email Address</p>
      <input type="email" />
      <p className="p">Phone Number</p>
      <input type="phone" />
      <div>
        <div className="flex">
          <p className="p">First Name</p>
          <input type="text" />
        </div>
        <div className="flex">
          <p className="p">Last Name</p>
          <input type="text" />
        </div>
      </div>
      <p className="p">State</p>
      <input type="phone" />
      <p className="p">City</p>
      <input type="phone" />
      <p className="p">District</p>
      <input type="phone" />
      <p className="p">Note</p>
      <textarea></textarea>
      <p className="p">
        Please ensure details provided are correct. Acurate details will help us
        complete your order
      </p>
    </form>
  );
};

export default index;
