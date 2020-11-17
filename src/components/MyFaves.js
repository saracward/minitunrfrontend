import React from "react";

function MyFaves(props) {
  console.log("rendering my faves");
  return (
    <div>
      {props.faves.map((fave) => {
        return (
          <div>
            <h3>
              {fave.title} : {fave.artist} : {fave.time}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default MyFaves;
