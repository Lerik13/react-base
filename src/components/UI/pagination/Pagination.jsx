import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import s from './Pagination.module.css'

const Pagination = ({totalPages, page, changePage}) => {
	const pagesArray = usePagination(totalPages)
	
	return (
		<div className={s.pageWrapper}>
			{pagesArray.map(p => 
				<span 
					onClick={() => changePage(p)}
					key={p} 
					className={p === page ? s.page+' '+s.pageCurrent : s.page}
				>
					{p}
				</span>
			)}
		</div>
	);
};

export default Pagination;