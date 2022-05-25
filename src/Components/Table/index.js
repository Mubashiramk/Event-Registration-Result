import "./table.css";
import { Delete } from "../Delete";

export const Table = ({ data }) => {
  console.log(data, "Data in Table folder");
  function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
  if (data === undefined) {
    return <div>Data is loading</div>;
  } else {
    data.users.sort(custom_sort);

    return (
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.users.map((post, index) => (
                <tr key={index}>
                  <td>{post.firstName}</td>
                  <td>{post.lastName}</td>
                  <td>{post.email}</td>
                  <td>{post.date}</td>
                  <td>
                    {/* <button onClick={deleteStudent}>Delete</button> */}
                    <Delete item={post._id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
};
