import React from "react";

function StoryCard({ unseen = true }) {
  return (
    <div className="story-card">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="Riyadul Houque"
        className="story-img"
      />
      <div
        className={
          unseen
            ? "story-card__owner-img unseen-story"
            : "story-card__owner-img"
        }>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="Riyadul Houque"
        />
      </div>
      <h5 className="story-card__owner-name">Riyadul Houque</h5>
    </div>
  );
}

export default StoryCard;
