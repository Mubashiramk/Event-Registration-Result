import "./userData.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "../Table";
import { Image } from "../Image";

export const UserData = () => {
  const [users, setUsers] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get("http://ec2-3-73-79-235.eu-central-1.compute.amazonaws.com/result")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest()
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  return (
    <div>
      <Table data={users} />
      <Image />
    </div>
  );
};
