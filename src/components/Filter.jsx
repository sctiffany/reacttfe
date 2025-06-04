export function Filter({ setOrder }) {
  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <select
        name="filters"
        id="filters"
        className="selectFilter"
        onChange={handleChange}
      >
        Filtres
        <option value="" disabled selected hidden>
          Filtres
        </option>
        <option value="asc">Trier : 1 - 800</option>
        <option value="desc">Trier : 800 - 1</option>
      </select>
    </div>
  );
}
