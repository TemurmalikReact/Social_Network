import classes from "./Paginator.module.css";
import { Fragment, useState } from "react";

const Paginator = ({page, count, totalCount, portionCount, onPageChange}) => {
  const pagesCount = Math.ceil(totalCount / count)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) pages.push(i) 
  const [portion, setPortion] = useState(1)

  const totalPortionCount = Math.ceil(pagesCount / portionCount)
  const leftCount = ( portion - 1 ) * portionCount + 1
  const rightCount = portion * portionCount
  
  const renderPageNumbers = () => pages
  .filter(f => f >= leftCount && f <= rightCount)
    .map(p => <span className={`${page === p && classes.selected} ${classes.pageNumber}`}
                  key={p} onClick={() => onPageChange(p) } > {p} </span> )

  return (
    <Fragment> 
      <button disabled={ portion === 1 && true } 
        onClick={() => setPortion(prev => prev - 1)}> Prev </button>
      { renderPageNumbers() } 
      <button disabled={ portion === totalPortionCount && true } 
        onClick={() => setPortion(prev => prev + 1)}> Next </button>
    </Fragment> 
  )
}

export default Paginator;
