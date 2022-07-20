import React from "react";

function StoryCard({ story }) {
  return (
    <div className="story-card">
      <img
        src={story.image}
        alt={story.user.name}
        className="story-img"
      />
      <div
        className={
          story.unseen
            ? "story-card__owner-img unseen-story"
            : "story-card__owner-img"
        }>
        <img
          src={story.user.image}
          alt="Riyadul Houque"
        />
      </div>
      <h5 className="story-card__owner-name">{story.user.name}</h5>
    </div>
  );
}

export default StoryCard;
