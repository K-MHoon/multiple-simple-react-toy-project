import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Item.module.css';

const ItemRegisterForm = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File>();

  const handleChangeItemName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setItemName(e.target.value);
    },
    [],
  );

  const handleChangePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(parseInt(e.target.value));
    },
    [],
  );

  const handleChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    [],
  );

  const handleChangeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
      }
    },
    [],
  );

  return (
    <div className={styles.centered}>
      <h2>상품 등록</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>상품명</td>
              <td>
                <input
                  type="text"
                  value={itemName}
                  onChange={handleChangeItemName}
                />
              </td>
            </tr>
            <tr>
              <td>상품가격</td>
              <td>
                <input type="text" value={price} onChange={handleChangePrice} />
                원
              </td>
            </tr>
            <tr>
              <td>상품파일</td>
              <td>
                <input type="file" onChange={handleChangeFile} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>상품설명</td>
              <td>
                <textarea
                  rows={5}
                  value={description}
                  onChange={handleChangeDescription}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.align_centered}>
          <button type="submit">등록</button>
          <Link to="/">취소</Link>
        </div>
      </form>
    </div>
  );
};

export default ItemRegisterForm;
