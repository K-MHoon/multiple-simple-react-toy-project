import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from '../components/ItemList';
import { RootState } from '../modules';
import { fetchItemList, FETCH_ITEM_LIST } from '../modules/item';

const ItemListContainer = () => {
  const dispatch = useDispatch();

  // 스토어 상태 조회
  const { items, isLoading } = useSelector(({ item, loading }: RootState) => ({
    items: item.items,
    isLoading: loading[FETCH_ITEM_LIST],
  }));

  // 마운트될 때 상품 목록 가져오기
  useEffect(() => {
    dispatch(fetchItemList());
  }, [dispatch]);

  return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;
