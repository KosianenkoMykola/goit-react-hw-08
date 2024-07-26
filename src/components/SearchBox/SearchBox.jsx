import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";
import { MdPersonSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const id = useId()
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter)

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }

    return (
      <div className={css.container}>
        <label className={css.label} htmlFor={id}>Find contacts by name<MdPersonSearch className={css.searchIcon}/>
        </label>
        <input
        className={css.input}
          id={id}
          type="text"
          value={filter}
          onChange={handleChange}/>
      </div>
    );
}

