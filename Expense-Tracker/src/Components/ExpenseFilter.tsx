interface Props {
  categories: string[];
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelect }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
