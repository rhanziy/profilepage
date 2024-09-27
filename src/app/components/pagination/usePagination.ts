'use client';
import { fetchPageData } from '@/app/components/pagination/action';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const usePagination = <T>(table: string, totalItems: number) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemCountPerPage = 10;
  const pageCount = Math.ceil(totalItems / itemCountPerPage);
  const pageParam = Math.max(Number(searchParams.get('page')), 1);
  const currentPage = Math.min(pageParam, pageCount || 1);

  const [fetchData, setFetchData] = useState<T[]>([]);

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  useEffect(() => {
    if (pageParam > pageCount) {
      router.push(`?page=${pageCount}`);
    }
  }, [pageParam, pageCount]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const lists: T[] = await fetchPageData(
          table,
          totalItems,
          currentPage,
          itemCountPerPage,
        );
        setFetchData(lists);
      } catch (error) {
        console.error('Error fetching list', error);
      }
    };
    fetch();
  }, [table, currentPage, totalItems]);

  return {
    currentPage,
    handlePageChange,
    pageCount,
    fetchData,
  };
};

export default usePagination;
