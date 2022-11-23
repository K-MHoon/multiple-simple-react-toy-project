import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemRead from '../components/ItemRead';
import { RootState } from '../modules';
import { fetchItem, FETCH_ITEM } from '../modules/item';

const ItemReadContainer = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem(itemId!));
  }, [dispatch, itemId]);

  const { item, isLoading } = useSelector(({ item, loading }: RootState) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }));

  return <ItemRead itemId={itemId} item={item} isLoading={isLoading} />;
};

export default ItemReadContainer;
