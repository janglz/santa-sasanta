import React, { useState } from "react";
import RandomizerView from "./RandomizerView";

const Randomizer = ({ users, status, user, unregisteredUsers }) => {
  return (
    <RandomizerView
      users={users}
      user={user}
      status={status}
      unregisteredUsers={unregisteredUsers}
      recipient="Roman Banan"
    />
  );
};

export default Randomizer;
