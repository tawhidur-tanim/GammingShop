import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";

interface Filter {
  id: string | number;
  name: string;
}

interface Props {
  filters: Filter[];
  data: any[];
  onDelete: (name: any) => void;
}

const Table = ({ filters, data, onDelete }: Props) => {
  let temData = [...data];

  const onCatChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value == "-1") {
      temData = [...data];
      return;
    }

    temData = data.filter((x) => x.category == event.target.value);
  };
  return (
    <div className="mt-4">
      <div className="mb-3">
        <select
          className="form-control"
          onChange={onCatChange}
          defaultValue={-1}
        >
          <option value="-1">All Categories</option>
          {filters.map((x) => (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {temData.map((d) => {
            return (
              <tr key={d.description}>
                <td>{d.description}</td>
                <td>{d.amount}</td>
                <td>{filters.find((x) => x.id == d.category)?.name}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(d.description)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
