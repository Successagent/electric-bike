import axios from "axios";
import { useState } from "react";
import Button from "../../Components/Button";
import "../CheckoutForm/CheckoutForm.css";

const index = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [secondAddress, setsecondAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [post, setPost] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const token = localStorage.getItem(token);

  const handleCreateNewCustomer = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      checkbox === false ||
      country === "" ||
      address === "" ||
      secondAddress === "" ||
      phone === "" ||
      post === "" ||
      email === "" ||
      state === "" ||
      city === "" ||
      company === ""
    ) {
      alert("Please fill out all input");
    } else if (
      firstName !== "" &&
      lastName !== "" &&
      checkbox === true &&
      country !== "" &&
      address !== "" &&
      secondAddress !== "" &&
      phone !== "" &&
      post !== "" &&
      email !== "" &&
      state !== "" &&
      city !== "" &&
      company !== ""
    ) {
      const customerAddress = await axios.post(
        "http://localhost:5000/address",
        {
          city,
          checkbox,
          company,
          country,
          state,
          firstName,
          lastName,
          phone,
          address,
          secondAddress,
          post,
          phone,
        },
        { headers: { token: token } }
      );
      if (customerAddress.status === 201) {
      }
    }
  };
  return (
    <form className="review-form" onSubmit={handleCreateNewCustomer}>
      <h3 className="h3">Shipping Details</h3>
      <p className="p">Email Address</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <p className="p">Phone Number</p>
      <input type="phone" onChange={(e) => setPhone(e.target.value)} />
      <div>
        <div className="flex">
          <p className="p">First Name</p>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="flex">
          <p className="p">Last Name</p>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
      <p className="p">Address</p>
      <input type="text" onChange={(e) => setAddress(e.target.value)} />
      <p className="p">Address 2</p>
      <input type="text" onChange={(e) => setsecondAddress(e.target.value)} />
      <div>
        <div>
          <p className="p">State</p>
          <input type="phone" onChange={(e) => setState(e.target.value)} />
        </div>
        <div>
          <p className="p">City</p>
          <input type="phone" onChange={(e) => setCity(e.target.value)} />
        </div>
      </div>
      <p className="p">Postal code</p>
      <input type="phone" onChange={(e) => setPost(e.target.value)} />
      <p className="p">Country</p>
      <input type="phone" onChange={(e) => setCountry(e.target.value)} />
      <p className="p">Company</p>
      <input type="phone" onChange={(e) => setCompany(e.target.value)} />
      <div className="flex">
        <p className="p">Status</p>
        <input
          type="checkbox"
          className="checkbox"
          onClick={() => setCheckbox(!checkbox)}
        />
      </div>
      <p className="p" id="address-last-p">
        Please ensure details provided are correct. Acurate details will help us
        complete your order
      </p>
      <Button title="Submit Address" />
    </form>
  );
};

export default index;
