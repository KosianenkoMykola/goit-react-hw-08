import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";
import { MdPersonSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const idName = useId()
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter)


  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }

    return (
      <div className={css.container}>
        <label className={css.label} htmlFor={idName}>Find contacts by name<MdPersonSearch className={css.searchIcon}/>
        </label>
        <input
        className={css.input}
          id={idName}
          type="text"
          value={nameFilter}
          onChange={handleChange}/>
      </div>
    );
}

