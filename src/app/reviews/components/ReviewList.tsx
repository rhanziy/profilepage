'use client';
import ReviewComponent from './ReviewComponent';
import CustomPagination from '@/app/components/pagination/CustomPagination';
import usePagination from '@/app/components/pagination/usePagination';
import { IReview } from '@/app/types';
import * as styles from '../style/style.css';

export function ReviewList({
  reviews,
  totalCount,
  page,
}: {
  reviews: IReview[];
  totalCount: number;
  page: number;
}) {
  const { handlePageChange, pageCount } = usePagination(totalCount);

  if (!reviews || reviews.length === 0) {
    return (
      <div className={styles.emptyReviewContainer}>
        아직 작성된 후기가 없어요.
      </div>
    );
  }

  return (
    <>
      <div className={styles.reviewWrapper}>
        <ReviewComponent reviewList={reviews} />
      </div>
      <CustomPagination
        currentPage={page}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </>
  );
}
