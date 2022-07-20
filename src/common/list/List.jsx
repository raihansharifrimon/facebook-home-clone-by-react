import React from "react";
import { Link } from "react-router-dom";
import "./List.scss";

function List({ list, title, isIconList }) {
  return (
    <div className="list">
      <h5 className="list__title">{title}</h5>

      <div className="list__items">
        {list.map((item) => (
          <ListItem key={item.id} isIconList={isIconList} title={item.title}>
            {item.avater ? (
              <img src={item.avater} alt={item.title} />
            ) : (
              item.icon
            )}
          </ListItem>
        ))}
      </div>
    </div>
  );
}

function ListItem({ children, title, isIconList }) {
  return (
    <div className="list-item">
      <Link to="/">
        {isIconList ? (
          <span className="icon">{children}</span>
        ) : (
          <div className="list-item__avater">{children}</div>
        )}
        <h5 className="list-item__title">{title}</h5>
      </Link>
    </div>
  );
}

export default List;
