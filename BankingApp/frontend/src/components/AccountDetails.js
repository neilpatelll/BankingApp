import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AccountDetails() {
  let { id } = useParams();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    axios.get(`/api/accounts/${id}`)
      .then(response => setAccount(response.data))
      .catch(error => console.error('Error fetching account:', error));
  }, [id]);

  if (!account) return <div>Loading...</div>;

  return (
    <div>
      <h2>Account Details for Account {id}</h2>
      <p>Account Number: {account.accountNumber}</p>
      <p>Account Holder: {account.accountHolderName}</p>
      <p>Balance: ${account.balance}</p>
    </div>
  );
}

export default AccountDetails;
