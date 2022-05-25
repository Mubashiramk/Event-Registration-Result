import "./delete.css";
import axios from "axios";

export const Delete = ({ item }) => {
  console.log(item);
  const deleteStudent = () => {
    axios
      .delete(
        "hhttp://ec2-3-73-79-235.eu-central-1.compute.amazonaws.com/result/delete-student/" +
          item
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
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
