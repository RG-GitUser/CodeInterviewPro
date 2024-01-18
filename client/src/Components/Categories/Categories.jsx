// Categories.js

import React from "react";
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
      <h1>Categories</h1>
      <div className="category-list">
        {initialCategories.map((category, index) => {
          const isActive = activeCategories.includes(category);
          const categoryClassName = isActive ? "category active" : "category";

          return (
            <div className={categoryClassName} key={index} onClick={() => handleCategoryClick(category)}>
              <p>{category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
