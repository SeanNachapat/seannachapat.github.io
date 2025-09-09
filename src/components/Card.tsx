import React from "react";

export interface Card {
  title?: string;
  description?: string;
  imageUrl?: string;
  pageLink?: string;
  altText?: string;
  tags?: string[];
}

const Card: React.FC<Card> = ({
  title = "Default Name",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis justo. Mauris semper lacus id elit dignissim sagittis. Etiam vitae mauris vel ligula bibendum varius vel sed purus.",
  imageUrl = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
  pageLink = "#",
  altText,
  tags = ["Java", "C++", "Typescript"],
}) => {
  return (
    <a href={pageLink} target="_blank">
      <div className="bg-raisinBlack flex flex-col gap-1 bg-theme-secondary my-1 rounded-2xl hover:scale-105 transition-transform min-w-[26rem] max-w-[27rem] h-[28rem] cursor-pointer">
        <img
          className="flex rounded-t-2xl h-52 object-cover"
          src={imageUrl}
          alt={altText}
        ></img>
        <div className="px-4 py-2 flex flex-col h-full">
          <div className="flex flex-row pb-1">
            <a className="font-bold text-lg hover:font-extrabold hover:underline">
              {title}
            </a>
            <span className="material-symbols-outlined text-sm text-gray-400 px-2 pt-1">
              open_in_new
            </span>
          </div>
          <p className="text-sm text-gray-400 text-justify h-36">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto max-h-16 overflow-hidden">
            {tags.map((tag: string, index: number) => (
              <li key={index} className="flex bg-night p-1 rounded-lg">
                <span className="text-white text-sm font-light">{tag}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
