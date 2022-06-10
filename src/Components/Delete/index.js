import "./delete.css";
import axios from "axios";

export const Delete = ({ item }) => {
  // console.log(item);
  const deleteStudent = () => {
    axios
      .delete("http://localhost:4000/result/delete-student/" + item)
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <div>
      <button onClick={deleteStudent}>Delete</button>
    </div>
  );
};
