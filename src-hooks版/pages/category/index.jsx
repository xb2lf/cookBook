import React from 'react';
import { CategoryWrap } from './component/StyleCategory';
import { Search, MenuList } from '@components';
import { useGotoList, useCateChange } from './component';

const CateGory = (props) => {
  const { handleGotoList } = useGotoList();
  const {
    obj,
    cateType,
    cateAside,
    hanleClick,
    handleAsideClick,
  } = useCateChange();
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
