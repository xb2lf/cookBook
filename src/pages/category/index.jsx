import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryWrap } from './component/StyleCategory';
import { Search, MenuList } from '@components';
import { useGotoList, useCateChange } from './component';
import { getDataAsyncSaga, changeCateAside } from './model/actionCreator';
const CateGory = (props) => {
  const dispatch = useDispatch();
  const { handleGotoList } = useGotoList();
  const {
    obj,
    cateType,
    cateAside,
    hanleClick,
    handleAsideClick,
  } = useCateChange();
  useEffect(() => {
    dispatch(getDataAsyncSaga());
    if (cateAside === '') {
      dispatch(changeCateAside(cateType === 'category' ? '热门' : '肉类'));
    }
  }, [dispatch, cateAside, cateType])

  return (
    <CategoryWrap>
      <nav>
        <ul>
          <li className={cateType === 'category' ? 'active' : ''} onClick={hanleClick('category')}>分类</li>
          <li className={cateType === 'material' ? 'active' : ''} onClick={hanleClick('material')}>食材</li>
          <li className={cateType === 'category' ? 'slide' : 'slide right'}></li>
        </ul>
      </nav>
      <main>
        <Search
          outerbg="#fff"
          innerbg="#efefef"
          hasborder={false}
          title="爱吃什么搜这里，如川菜"
        ></Search>
        <MenuList
          cate={obj}
          type={cateType}
          curCate={cateAside}
          asideClick={handleAsideClick}
          onGotoList={handleGotoList}
        ></MenuList>
      </main>
    </CategoryWrap>
  )
};

export default CateGory
