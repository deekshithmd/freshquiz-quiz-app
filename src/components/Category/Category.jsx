import { Link } from "react-router-dom";
import { useData } from "../../contexts";
import { Loader } from "..";
import "./category.css";

export const Category = () => {
  const { data, loading } = useData();

  return (
    <div className="main">
      <h1>Select your category</h1>
      {!loading ? (
        <div className="quiz-category-container">
          {data.categories &&
            data.categories.map((category) => {
              return (
                <Link
                  to={`/rules/${category.id}`}
                  className="category-card link-style-none"
                  key={category._id}
                >
                  <div className="category-image">
                    <img src={category.image} alt={category.categoryName} />
                  </div>
                  <div className="category-info">
                    <h3 className="l-h-0">{category.categoryName}</h3>
                    <span className="text-md text-left">
                      {category.description}
                    </span>
                    <h3 className="l-h-0">{category.questions} Questions</h3>
                  </div>
                </Link>
              );
            })}
        </div>
      ) : (
        <Loader text="Loading..." />
      )}
    </div>
  );
};
