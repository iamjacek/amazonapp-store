import React, { useState } from "react"
import CheckoutSteps from "../components/CheckoutSteps"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingAddress } from "../actions/cartActions"

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  if (!userInfo) {
    props.history.push("/signin")
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName)
  const [address, setAddress] = useState(shippingAddress.address)
  const [postCode, setPostCode] = useState(shippingAddress.postCode)
  const [city, setCity] = useState(shippingAddress.city)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveShippingAddress({ fullName, address, city, postCode, country })
    )
    props.history.push("/payment")
  }
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter shipping address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Post Code</label>
          <input
            type="text"
            id="postCode"
            placeholder="Enter post code"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={fullName}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label></label>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
