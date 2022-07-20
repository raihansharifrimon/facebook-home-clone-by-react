import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import StoryCard from "./StoryCard";
import "./StoryList.scss";

function StoryList() {
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
      <StoryCard unseen={false} />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <button className="btn all-stories-btn">
        <HiOutlineArrowSmRight />
      </button>
    </div>
  );
}

export default StoryList;
