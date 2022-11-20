import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemRegisterForm from '../components/ItemRegisterForm';

const ItemRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = (
    itemName: string,
    price: number,
    description: string,
    file: File,
  ) => {
    const itemObject = {
      itemName: itemName,
      price: price,
      description: description,
    };

    const formData = new FormData();

    formData.append('file', file);
    formData.append('item', JSON.stringify(itemObject));

    axios
      .post('/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('등록되었습니다.');
        navigate(`/read/${res.data.itemId}`);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return <ItemRegisterForm onRegister={onRegister} />;
};

export default ItemRegisterContainer;
