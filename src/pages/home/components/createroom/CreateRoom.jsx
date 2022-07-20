import React from "react";
import { MdVideoCall } from "react-icons/md";
import Avatar from "../../../../common/avatar/Avatar";
import "./CreateRoom.scss";

function CreateRoom() {
  const users = [
    {
      id: 1,
      image: "https://cdn.vuetifyjs.com/images/john.jpg",
      online: true,
      link: "/user",
    },
    {
      id: 2,
      image: "https://cdn.vuetifyjs.com/images/john.jpg",
      online: true,
      link: "/user",
    },
    {
      id: 3,
      image: "https://cdn.vuetifyjs.com/images/john.jpg",
      online: true,
      link: "/user",
    },
    {
      id: 4,
      image: "https://cdn.vuetifyjs.com/images/john.jpg",
      online: false,
      link: "/user",
    },
  ];
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
