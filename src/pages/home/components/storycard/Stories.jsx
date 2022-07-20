import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "./Stories.scss";
import StoryCard from "./StoryCard";

function Stories() {
  const [stories, setStories] = useState([]);

  const getData = () => {
    fetch("./data/stories.json", {
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
        setStories(myJson.stories);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="story-list">
      <div className="story-create">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="Riyadul Houque"
          className="story-img"
        />
        <div className="create-story__info">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <h5 className="label">Create Story</h5>
        </div>
      </div>
      {stories &&
        stories.length > 0 &&
        stories.map((item) => <StoryCard key={item.id} story={item} />)}
      <button className="btn all-stories-btn">
        <HiOutlineArrowSmRight />
      </button>
    </div>
  );
}

export default Stories;
