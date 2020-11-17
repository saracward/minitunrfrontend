import React, { useState } from "react";
const Form = (props) => {
  const [formData, setFormData] = useState(props.song);
  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/");
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Title</p>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <p>Artist</p>
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <p>Time</p>
      <input
        type="text"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <br />
      <br />
      <input className="addButton" type="submit" value="Add Song" />
    </form>
  );
};
export default Form;

// import React from "react";

// const Form = (props) => {
//   //STATE FOR THE FORM
//   const [formData, setFormData] = React.useState(props.song);

//   //FUNCTIONS
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent Form from Refreshing
//     props.handleSubmit(formData); // Submit to Parents desired function
//     // props.history.push("/songs"); //Push back to display page
//   };

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       Title:
//       <br />
//       <input
//         type="text"
//         name="title"
//         value={formData.title}
//         onChange={handleChange}
//       />
//       <br />
//       Artist:
//       <br />
//       <input
//         type="text"
//         name="artist"
//         value={formData.artist}
//         onChange={handleChange}
//       />
//       <br />
//       Time:
//       <br />
//       <input
//         type="numbers"
//         name="time"
//         value={formData.time}
//         onChange={handleChange}
//       />
//       <br />
//       <input type="submit" value="Add a Song" />
//     </form>
//   );
// };

// export default Form;
