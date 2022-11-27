import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ItemModifyForm from '../components/ItemModifyForm';
import { fetchItem, FETCH_ITEM } from '../modules/item';
import { RootState } from '../modules';
import axios from 'axios';

const ItemModifyContainer = () => {
  const dispatch = useDispatch();
  const { item, isLoading } = useSelector(({ item, loading }: RootState) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }));
  const navigate = useNavigate();
  const { itemId } = useParams();

  useEffect(() => {
    dispatch(fetchItem(itemId!));
  }, [dispatch, itemId]);

  const onModify = (
    itemName: string,
    price: number,
    description: string,
    file?: File,
  ) => {
    const itemObject = {
      itemId: itemId,
      itemName: itemName,
      price: price,
      description: description,
    };

    const formData = new FormData();

    if (file) {
      formData.append('file', file);
    }
    formData.append('item', JSON.stringify(itemObject));

    axios
      .put('/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('수정되었습니다.');

        navigate('/read' + itemId);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  return (
    <ItemModifyForm item={item} isLoading={isLoading} onModify={onModify} />
  );
};

export default ItemModifyContainer;
