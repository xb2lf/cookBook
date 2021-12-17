import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import { NavWarp, ListWarp, SubTitle } from './component/StyleList';
import { animate } from '@components';
import { loadDatasAsync } from '@/pages/cookBook/model/actionCreator';

const List = (props) => {
  const { list } = useSelector(state => state.cookbook);
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();
  useEffect(() => {
    //解决刷新页面，Redux数据丢失问题
    if (list.length === 0) {
      dispatch(loadDatasAsync())
    }
  }, [list, dispatch]);
  const hanleClickLeft = useCallback(() => {
    history.push('/home', { from: '/list' });
  },
    [history],
  );
  const handleGotoDetail = useCallback((title, img) => {
    return () => {
      history.push('/detail', { listTitle: state && state.title, title, img, from: '/list' });
    }
  },
    [state, history],
  );
  return (
    <NavWarp>
      <NavBar
        mode="drak"
        icon={<Icon type="left" />}
        onLeftClick={hanleClickLeft}
      >{state && state.title}</NavBar>
      <ul>
        {
          list.map((li, i) => (
            <ListWarp
              width="0 0 1px 0"
              key={li.id + i}
              onClick={handleGotoDetail(li.title, li.img)}
            >
              <div>
                <img src={li.img} alt={li.title} />
              </div>
              <div>
                <h1>{li.title}</h1>
                <SubTitle>{li.ingredients}</SubTitle>
                <h3><span>{li.browse}</span>浏览 <span>{li.enshrine}</span>收藏</h3>
              </div>
            </ListWarp>
          ))
        }
      </ul>
    </NavWarp>
  )
};
export default animate(List)
