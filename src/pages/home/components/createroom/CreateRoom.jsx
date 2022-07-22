import { MdVideoCall } from "react-icons/md";
import Avatar from "../../../../common/avatar/Avatar";
import useFetch from "../../../../hooks/useFetch";
import "./CreateRoom.scss";

function CreateRoom() {
  const [data] = useFetch("./data/users.json");
  const users = data.users;

  return (
    <div className="create-room">
      <button className="btn create-room__btn">
        <span className="icon">
          <MdVideoCall />
        </span>
        Create Room
      </button>
      {users &&
        users.length > 0 &&
        users.map((user) => <Avatar size={50} key={user.id} user={user} />)}
    </div>
  );
}

export default CreateRoom;
