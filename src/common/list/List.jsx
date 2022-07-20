import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import "./List.scss";

function List({ list, title }) {
  return (
    <div className="list">
      <h5 className="list__title">{title}</h5>

      <div className="list__items">
        {list &&
          list.length > 0 &&
          list.map((item) => <ListItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}

function ListItem({ title, item }) {
  return (
    <div className="list-item">
      <Link to="/">
        {item.icon ? (
          <span className="icon">{item.icon}</span>
        ) : (
          <Avatar user={item} size={40} isLink={false} />
        )}
        <h5 className="list-item__title">
          {item.icon ? item.title : item.name}
        </h5>
      </Link>
    </div>
  );
}

export default List;
