import RecipeCard from "@/components/atoms/RecipeCard";
import { Recipe } from "@/utils/sanity";

interface IRecipesListProps {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: IRecipesListProps) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};
export default RecipesList;
