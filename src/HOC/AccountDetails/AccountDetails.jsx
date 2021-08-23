import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";
import Address from "../../components/Address/Address";

import styles from "./AccountDetails.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setAccount, addAddress, addOrder } from "../../redux/user/userActions";
import { setCart } from "../../redux/cart/cartActions";

export default function AccountDetails() {
  const history = useHistory();

  const dispatch = useDispatch();
  const {
    cart,
    user: {
      account,
      //   orders,
      deliveryAddresses,
      selectedAddress,
      paymentMethod,
    },
  } = useSelector(state => state);

  // -----COMPONENT STATE------ \\

  const [activeForm, setActiveForm] = useState("phone");
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const [otpModal, setOtpModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    city: "",
    address: "",
  });

  let selectAddress = deliveryAddresses.filter(
    address => address.address === selectedAddress
  );

  // ------ FORM FUNCTIONS ------ \\

  const handlePhoneChange = e => {
    setValue(e.target.value);
  };

  const handleSubmitPhone = e => {
    e.preventDefault();
    if (value) {
      setOtpModal(true);
    }
  };

  const handleOtpChange = e => {
    setOtp(e);

    if (e.length === 4) {
      setOtpModal(false);
      dispatch(setAccount(value));
      setActiveForm("address");
    }
  };

  const handleAddressChange = e => {
    let name = e.target.name;
    setAddress({ ...address, [name]: e.target.value });
  };

  const handleSubmitAddress = e => {
    e.preventDefault();

    dispatch(addAddress(address));
    setAddressModal(false);
  };

  const handlePlaceOrder = () => {
    if (account && selectedAddress !== "" && paymentMethod.onDelivery) {
      dispatch(
        addOrder({
          orderID: `${(Math.random() + 1).toString(36).substring(7)}`,
          orderTime: `${new Date().toLocaleString()}`,
          items: cart,
          paymentMethod: paymentMethod,
          deliveryAddress: selectAddress[0],
        })
      );

      dispatch(setCart([]));
      history.push("/successful");
    }
  };

  return (
    <>
      <div className={styles.accountDetailsContainer}>
        <div
          className={`${styles.form} ${styles.phone} 
                ${
                  activeForm === "phone" && !account
                    ? styles.activeForm
                    : account
                    ? styles.finishedForm
                    : ""
                }`}>
          <span className={styles.numbering}>
            {!account ? "1" : <i className='fas fa-check'></i>}
          </span>
          <div className={styles.label}>
            <h2
              onClick={() => setActiveForm("phone")}
              className={styles.labelHeader}>
              Account
            </h2>
            <p className={styles.labelDesc}>
              {!account
                ? "To place your order, log in by entering your 10 digit mobile number"
                : "You are securely logged in"}
            </p>
          </div>
          <div className={`${styles.content}`}>
            <form>
              <p>Mobile Number</p>
              <div className={styles.input}>
                <input
                  type='tel'
                  value={value}
                  onChange={e => handlePhoneChange(e)}
                />
                <button onClick={e => handleSubmitPhone(e)}>Login</button>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`${styles.form} ${styles.address} 
                ${
                  activeForm === "address"
                    ? styles.activeForm
                    : selectedAddress !== ""
                    ? styles.finishedForm
                    : ""
                }`}>
          <span className={styles.numbering}>
            {selectedAddress === "" ? "2" : <i className='fas fa-check'></i>}
          </span>
          <div className={styles.label}>
            <div className={styles.addressLabel}>
              <h2
                onClick={() => setActiveForm("address")}
                className={styles.labelHeader}>
                Delivery address
              </h2>
              <p className={styles.labelDesc}>
                select your delivery address from the existing one or add a new
                one
              </p>
            </div>
            {selectedAddress !== "" && activeForm !== "address" ? (
              <>
                <button
                  onClick={() => setActiveForm("address")}
                  className={styles.changeAddress}>
                  Change Address
                </button>
                <p className={styles.selectedName}>{selectAddress[0].name}</p>
                <p
                  className={
                    styles.selectedDetails
                  }>{`${selectAddress[0].address} ${selectAddress[0].city}: ${selectAddress[0].mobile}`}</p>
              </>
            ) : (
              ""
            )}
          </div>
          <div className={`${styles.content}`}>
            {
              // loop through addresses, add last box to add extra
              deliveryAddresses.map(address => (
                <Address
                  key={address.mobile}
                  name={address.name}
                  mobile={address.mobile}
                  city={address.city}
                  address={address.address}
                />
              ))
            }
            <div
              onClick={() => setAddressModal(true)}
              className={styles.emptyAddress}>
              <p>
                <i className='fas fa-plus'></i>Add New Address
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.form} ${styles.payment}  
                ${activeForm === "payment" ? styles.activeForm : ""}`}>
          <span className={styles.numbering}>3</span>
          <div className={styles.label}>
            <h2
              onClick={() => setActiveForm("payment")}
              className={styles.labelHeader}>
              Payment
            </h2>
            <p className={styles.labelDesc}>Select your payment method</p>
          </div>
          <div className={`${styles.content}`}>
            <form>
              <input type='radio' id='delivery' name='payment' value='cash' />
              <label htmlFor='delivery'>Cash on delivery</label>
            </form>
            <button onClick={() => handlePlaceOrder()} className={styles.order}>
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}

      <div
        className={`${styles.verifyModalWrapper} ${
          otpModal ? styles.activate : ""
        }`}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h3>Verify your number</h3>
            <i
              onClick={() => setAddressModal(false)}
              className='fas fa-times'></i>
          </div>
          <div className={styles.verifyContent}>
            <p>Please enter verification code sent via SMS to {value}</p>
            <OtpInput
              value={otp}
              onChange={e => handleOtpChange(e)}
              placeholder='0000'
              numInputs={4}
              isInputNum={true}
              shouldAutoFocus={true}
              containerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
            />
            <p>Resend Code</p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.addressModalWrapper} ${
          addressModal ? styles.activate : ""
        }`}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h3>Add Address</h3>
            <i
              onClick={() => setAddressModal(false)}
              className='fas fa-times'></i>
          </div>
          <div className={styles.addAddressContent}>
            <form>
              <p>Name</p>
              <div className={styles.input}>
                <input
                  required
                  type='text'
                  name='name'
                  value={address.name}
                  onChange={e => handleAddressChange(e)}
                />
              </div>

              <p>Mobile Number</p>
              <div className={styles.input}>
                <input
                  required
                  type='tel'
                  name='mobile'
                  value={address.mobile}
                  onChange={e => handleAddressChange(e)}
                />
              </div>

              <p>City</p>
              <div className={styles.input}>
                <input
                  required
                  type='text'
                  name='city'
                  value={address.city}
                  onChange={e => handleAddressChange(e)}
                />
              </div>

              <p>Address</p>
              <textarea
                required
                name='address'
                value={address.address}
                onChange={e => handleAddressChange(e)}
                cols='30'
                rows='5'
                placeholder='eg. Kalema Apartments, Plot 00 Johnson Rd, Room 24B'
              />
              <button onClick={e => handleSubmitAddress(e)}>Add Address</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
