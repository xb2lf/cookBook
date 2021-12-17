import React from 'react';
import { MenuWarp } from './component/StyleMenuList';
import PropTypes from 'prop-types';


const MenuList = (props) => {
  const { cate, type, curCate, asideClick, onGotoList } = props;
  return (
    <MenuWarp>
      <aside>
        <ul>
          {
            Object.keys(cate).length > 0 && Object.keys(cate[type]).map(value => {
              return (
                <li
                  className={curCate === value ? "active" : ''}
                  key={value}
                  onClick={() => asideClick(value)}
                ><span>{value}</span></li>
              )
            })
          }
        </ul>
      </aside>
      <section>
        <ul>
          {
            Object.keys(cate).length > 0 && cate[type][curCate].map(value => (
              <li key={value} onClick={onGotoList(value)}>{value}</li>
            ))
          }
        </ul>
      </section>
    </MenuWarp>
  )
};

MenuList.propTypes = {
  cate: PropTypes.object.isRequired,
  curCate: PropTypes.string.isRequired,
  asideClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default MenuList
