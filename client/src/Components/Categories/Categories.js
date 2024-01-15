// Categories.js
import React from "react";
import "./categories.css";

const Categories = ({ initialCategories, activeCategories, setActiveCategories }) => {
  const handleCategoryClick = (category) => {
    // Check if the category is already in the activeCategories array
    if (activeCategories.includes(category)) {
      // If it is, remove it
      setActiveCategories(activeCategories.filter((activeCategory) => activeCategory !== category));
    } else {
      // If it's not, add it
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
