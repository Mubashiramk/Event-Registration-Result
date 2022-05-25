import "./userData.css";
import { useQuery } from "react-query";
import axios from "axios";
import { Table } from "../Table";
import { Image } from "../Image";

export const UserData = () => {
  const sendRequest = async () => {
    const res = await axios
      .get("http://ec2-3-73-79-235.eu-central-1.compute.amazonaws.com/result")
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

  const { isLoading, data } = useQuery("result", async () => {
    const { users } = await sendRequest();
    return users;
  });

  if (isLoading) {
    return <h2>loading....</h2>;
  }
  return (
    <div>
      <Table data={data} />
      <Image />
    </div>
  );
};
