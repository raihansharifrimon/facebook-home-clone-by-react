import React from "react";

function PostContents() {
  return (
    <div className="post-card__contents">
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sequi
        molestias sit deserunt fugiat, numquam aut? Maiores sunt ipsa nobis
        expedita dolore porro sequi aliquid dicta suscipit quis est harum minus
        voluptas quidem delectus tempora ullam praesentium mollitia ducimus
        fugiat debitis, velit labore? Tenetur minima at tempora expedita nam
        repudiandae.
      </p>
      <div className="post-card__contents-gallery">
        <div className="post-img">
          <img
            src="https://council.science/wp-content/uploads/2021/10/sci-glo-pub-good.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PostContents;
