import React from "react";
import MainButton from "../Components/shared/MainButton";
import { useState } from "react";

export default function AddCourseScreen() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  const onSaveHandler = () => {
    const data = {
      title,
      subtitle,
      description,
    };
    console.log(data);
  };
  return (
    <div className="p-4 w-full ">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">Basic Information</h3>
        <MainButton text={"Save"} onClick={onSaveHandler} />
      </div>
      <hr />
      <div className="mt-3 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="border border-black"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {title.length}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subTitle">Subtitle</label>
          <input
            id="subTitle"
            className="border border-black"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="border border-black"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
