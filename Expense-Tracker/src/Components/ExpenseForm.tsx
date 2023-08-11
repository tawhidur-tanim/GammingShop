import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Table from "./Table";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be more than three characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1)
    .positive(),
  category: z.number({ invalid_type_error: "Category is required" }).positive(),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const [expenseList, setExpenseList] = useState<ExpenseFormData[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  const categories = [
    {
      name: "Groceries",
      id: 1,
    },
    {
      name: "Utilities",
      id: 2,
    },
    {
      name: "Entertainment",
      id: 3,
    },
  ];

  function Onsave(data: ExpenseFormData) {
    setExpenseList([...expenseList, { ...data }]);
  }

  return (
    <>
      <form onSubmit={handleSubmit(Onsave)}>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="Description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-label">
            Categories
          </label>
          <select
            {...register("category", { valueAsNumber: true })}
            id="Category"
            className="form-control"
          >
            <option value=""></option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Table
        data={expenseList}
        filters={categories}
        onDelete={(des) =>
          setExpenseList([...expenseList.filter((x) => x.description !== des)])
        }
      ></Table>
    </>
  );
};

export default ExpenseForm;
