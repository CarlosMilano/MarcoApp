import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddArticle = () => {
  const [author, setAuthor] = useState(""); // title 
  const [creationYear, setCreationYear] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [isInExhibition, setIsInExhibition] = useState("");

  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const routeAPI = "localhost:3005/obrasRA"

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("author", author);
    formData.append("creationYear", creationYear);
    formData.append("description", description);
    formData.append("imageName", fileName);
    formData.append("type", type);
    formData.append("isInExhibition", isInExhibition);

    setAuthor("");
    setCreationYear("");
    setDescription("");
	setType("");
	setIsInExhibition("");
    axios
      .post(routeAPI, formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddArticleContainer>
      <div className="container">
        <h1>Add New Article</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="author">Author Name</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              placeholder="Autor"
            />
          </div>
          <div className="form-group">
            <label htmlFor="creationYear">creationYear</label>
            <input
              type="text"
              name="creationYear"
              value={creationYear}
              onChange={(e) => setCreationYear(e.target.value)}
              className="form-control"
              placeholder="año de creacion"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="form-control"
              placeholder="Type"
            />
          </div>
          <div className="form-group">
            <label htmlFor="isInExhibition"> isInExhibition </label>
            <input
              type="text"
              value={isInExhibition}
              onChange={(e) => setIsInExhibition(e.target.value)}
              className="form-control"
              placeholder="Autor"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file"> imagen obraRA</label>
            <input
              type="file"
              filename="imageName"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post Article
          </button>
        </form>
      </div>
    </AddArticleContainer>
  );
};

export default AddArticle;

//MAIN CONTAINER
const AddArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;

  h1 {
    font-weight: 900;
    color: var(--dark-green);
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }

  .message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
  }
`;
