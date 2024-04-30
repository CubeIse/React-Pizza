import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/Store";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const arr = [1, 2, 3];
  const { page } = useSelector((state: RootState) => state.filter);
  return (
    <ul className={styles.root}>{arr.map((item, index) => <li onClick={() => dispatch(setPage(item))} className={index + 1 === page ? styles.active : styles.disabled}>{item}</li>)}</ul>

  );
};

export default Pagination;
