import React from 'react';
import { Top10Warp, SubTitle } from '../StyleCookBook';

const Top10 = (props) => {
  return (
    <Top10Warp>
      <h1>精品好菜</h1>
      <ul>
        {
          props.list.size > 0 && props.list.map(item => (
            <li key={item.id} onClick={props.onGotoDeatil(item.title, item.img)}>
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <div>
                <p>{item.title}</p>
                <SubTitle lineNum={1}><span>{item.browse}</span>浏览 <span>{item.enshrine}</span>收藏</SubTitle>
              </div>
            </li>
          ))
        }
      </ul>
    </Top10Warp>
  )
};

export default Top10
