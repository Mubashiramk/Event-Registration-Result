import "./userData.css";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Table } from "../Table";
import { Image } from "../Image";
//
import { io } from "socket.io-client";

export const UserData = () => {
  const socket = io("http://localhost:4000");
  const [users, setUsers] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:4000/result")
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data, "data");
    return data;
  };

  // useEffect(() => {
  //   sendRequest()
  //     .then((data) => setUsers(data))
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {});
  // }, []);

  // useEffect(() => {
  //   const { isLoading, users } = useQuery("result", async () => {
  //     return await axios.get("http://localhost:4000/result");
  //   });
  // }, []);
  // setInterval(function () {
  //   useEffect(() => {
  //     sendRequest()
  //       .then((data) => setUsers(data))
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {});
  //   }, []);
  // }, 2000);

  //

  useEffect(() => {
    sendRequest()
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
    socket.on("hello", (data) => {
      sendRequest()
        .then((data) => setUsers(data))
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
      console.log(users, "success");
    });
  }, [socket]);

  return (
    <div>
      <Table data={users} />
      <Image />
    </div>
  );
};
