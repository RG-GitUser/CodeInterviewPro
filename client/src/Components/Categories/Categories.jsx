// Categories.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import solid star
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"; // Import regular star

import "./categories.css";

const Categories = ({ initialCategories, activeCategories, setActiveCategories }) => {
  const handleCategoryClick = (category) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter((activeCategory) => activeCategory !== category));
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        {initialCategories.map((category, index) => {
          const isActive = activeCategories.includes(category);
          const categoryClassName = isActive ? "category active" : "category";

          return (
            <div className={categoryClassName} key={index} onClick={() => handleCategoryClick(category)}>
              <p>{category}</p>
              <FontAwesomeIcon icon={isActive ? faStar : faStarRegular} className="star-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
