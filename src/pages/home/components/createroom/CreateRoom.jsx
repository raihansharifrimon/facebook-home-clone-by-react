import { useEffect, useState } from "react";
import { MdVideoCall } from "react-icons/md";
import Avatar from "../../../../common/avatar/Avatar";
import "./CreateRoom.scss";

function CreateRoom() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("./data/users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setUsers(myJson.users);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="create-room">
      <button className="btn create-room__btn">
        <span className="icon">
          <MdVideoCall />
        </span>
        Create Room
      </button>
      {users.map((user) => (
        <Avatar size={50} key={user.id} user={user} />
      ))}
    </div>
  );
}

export default CreateRoom;
