export function Filter() {
  return (
    <div>
      <select name="filters" id="filters" className="selectFilter">
        Filtres
        <option value="" disabled>
          Filtres
        </option>
        <option value="">Trier : A - Z</option>
        <option value="">Trier : Z - A</option>
      </select>
    </div>
  );
}
