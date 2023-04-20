import React from 'react';
import { useSelector } from 'react-redux';
import './userProfile.css';
import { useState } from 'react';


const UserProfile = () => {
  const counter = useSelector(state => state.counter.counter);

  const [productsState, setProductsState] = useState(
    [
      { id: 1, name: "iPhone 13", price: 3000 },
      { id: 2, name: "iPhone 12", price: 3000 },
      { id: 3, name: "galaxy s20", price: 3000 }
    ]
  );


  return (
    <React.Fragment>
      <main className="profile">
        <h2>My User Profile</h2>
        <p>your current count is: {counter}</p>
        {/* {<Products products={productsState}></Products>} */}
      </main>
    </React.Fragment>

  );
};

export default UserProfile;
