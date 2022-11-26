import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ItemRead from '../components/ItemRead';
import { removeItemApi } from '../lib/api';
import { RootState } from '../modules';
import { fetchItem, FETCH_ITEM } from '../modules/item';

const ItemReadContainer = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const onRemove = async () => {
    try {
      await removeItemApi(itemId!);
      alert('삭제되었습니다.');
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(fetchItem(itemId!));
  }, [dispatch, itemId]);

  const { item, isLoading } = useSelector(({ item, loading }: RootState) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }));

  return (
    <ItemRead
      itemId={itemId}
      item={item}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default ItemReadContainer;
