import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'antd-mobile';
import { HotCateWrap, H1Container } from '../StyleCookBook';

const HotCate = (props) => {
  const [state, setState] = useState({
    hotCateList: [
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274449485771958079.jpg?x-oss-process=style/c320",
        "title": "黄瓜煎蛋三明治"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274434996781958079.jpg?x-oss-process=style/c320",
        "title": "卤鸡翅"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274427547048197577.jpg?x-oss-process=style/c320",
        "title": "番茄酸汤虾滑"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274423721481958079.jpg?x-oss-process=style/c320",
        "title": "蔓越莓土司布丁"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274421044138197577.jpg?x-oss-process=style/c320",
        "title": "家庭版酸菜鱼"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274420161058197577.jpg?x-oss-process=style/c320",
        "title": "清蒸黄鱼"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274401645111958079.jpg?x-oss-process=style/c320",
        "title": "莲子南瓜小米粥"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274395241471958079.jpg?x-oss-process=style/c320",
        "title": "杏干鲜奶油面包"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274394247248197577.jpg?x-oss-process=style/c320",
        "title": "红酒烩五花肉"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274393841008197577.jpg?x-oss-process=style/c320",
        "title": "青瓜炒鸡蛋"
      },
      {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274388077498197577.jpg?x-oss-process=style/c320",
        "title": "红烧肉"
      },
      /* {
        "img": "https://i3.meishichina.com/attachment/recipe/2021/07/28/2021072816274387694008197577.jpg?x-oss-process=style/c320",
        "title": "木瓜仙草冰"
      }, */
      {
        "img": "blank",
        "title": "更多..."
      }
    ],
    columnNum: 4,
  });
  const history = useHistory();
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 375) {
      setState({ columnNum: 3 });
    }
  }, [])
  const handleClick = useCallback(
    ({ title }) => {
      history.push('/list', { title, from: '/home' });
    },
    [history],
  )
  const { hotCateList, columnNum } = state;
  return (
    <HotCateWrap
      width="0 0 1px 0"
    >
      <H1Container>热门分类</H1Container>
      <div>
        <Grid data={hotCateList}
          columnNum={columnNum}
          hasLine={false}
          renderItem={dataItem => (
            <div className="grid-item">
              <img src={dataItem.img} alt="" />
              <div>
                <span>{dataItem.title}</span>
              </div>
            </div>
          )}
          onClick={handleClick}
        />
      </div>
    </HotCateWrap>
  )
};

export default HotCate
