import "./userData.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "../Table";
import { Image } from "../Image";
import { io } from "socket.io-client";

export const UserData = () => {
  const socket = io("http://localhost:5000");
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [soc, setSoc] = useState(false);

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:4000/result")
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data, "data");
    return data;
  };

  useEffect(() => {
    sendRequest()
      .then((data) => setUsers(data.users))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
    socket.on("hello", (world) => {
      sendRequest()
        .then((data) => setUsers(data.users))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
      console.log(world);
    });
  }, [socket.on]);

  return (
    <div>
      <Table data={users} />
      <Image />
    </div>
  );
};
