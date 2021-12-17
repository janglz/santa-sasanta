import React, { useState } from "react";
import Recipient from "./components/Recipient";
import IsWaiting from "./components/IsWaiting";
import WishList from "../WishList";

const RandomizerView = ({
  users,
  user,
  unregisteredUsers,
  status,
  recipient,
}) => {
  return (
    <div>
      {status.isUnregistered && <WishList />}
      {status.result && <Recipient recipient={recipient} />}
      {status.waiting && <IsWaiting unregisteredUsers={unregisteredUsers} />}
    </div>
  );
};

export default RandomizerView;
