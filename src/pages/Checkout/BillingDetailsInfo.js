import React from "react"


const BillingDetailsInfo = () => {

    const style = {
        padding: "2px",
        margin: "5px",
        width: "250px"
    }
  return (
    <form style={{paddingTop: "25px", marginBottom: "25px"}}>
      <input style={style}
        name="name"
        label="Name"
        type="text"
        placeholder="Full Name"
        required
      />
      <input style={style}
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
      <input style={style}
        name="address"
        label="Address"
        type="text"
        placeholder="Address"
        required
      />
      <input style={style}
        name="city"
        label="City"
        type="text"
        placeholder="City"
        required
      />
      <input style={style}
        name="state"
        label="State"
        type="text"
        placeholder="State"
        required
      />
      <input style={style}
        name="zip"
        label="ZIP"
        type="text"
        placeholder="Zip Code"
        required
      />
    </form>
  );
};

export default BillingDetailsInfo;