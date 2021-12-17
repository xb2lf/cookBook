import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import { NavWarp } from './component/StyleDetail';
import { animate } from '@components';

@withRouter
@animate
class Detail extends Component {
  hanleClickLeft = () => {
    const state = this.props.location.state;
    const { history } = this.props;
    const from = state && state.from;
    const title = state && state.listTitle;
    history.push(from, { from: '/detail', title });
  };
  render() {
    const state = this.props.location.state;
    const title = state && state.title;
    const img = state && state.img;
    return (
      <NavWarp>
        <NavBar
          mode="drak"
          icon={<Icon type="left" />}
          onLeftClick={this.hanleClickLeft}
        >{title}</NavBar>
        <main>
          <div>
            <img src={img} alt={title} />
          </div>
          <div className="details">
            <h1>{title}</h1>
            <h3><span>33333333</span>浏览 <span>3333333</span>收藏</h3>
            <button>收藏</button>
          </div>
          <div className="experiences">
            <h1>心得</h1>
            <div className="article">
              <p>做菜和做其它事情一样，主要是实践。</p>
              <p>做菜，做饭看上去很简单，如果你有机会看高级厨师在那里操作，你怎麽看，怎么觉得简单，整个操作有条不紊。真的是干脆麻利的，也不觉得很难，但是其实不是那么回事，要知道，“功夫在戏外”一点儿都没错儿！</p>
              <p>记得，我第一次炒菜的时候，就把锅给摔了，锅把儿都掉了。再比如，往菜里放盐，看上去很简单的，其实也不是那么回事的，放了盐后，你怎么尝都不够咸，于是还继续放，等到你再尝的时候，是够咸了，但是等到菜完全熟了以后，菜已经很咸了。因为，不懂得，盐放到菜里后，需要解析的过程。因此，做菜绝对是实践的过程，看菜谱，看厨师操作，而自己不上手，永远不会炒出像样儿的，好吃的菜来。</p>
              <p>其实每个不同阶段的时期，我们都应该用心去发现生活中的一些美好所在，或许我这样的想法有点太简单！可生活中大大小小的烦恼都是因为我们自己的一种心情所出现的！做菜有时并不是那么的色香味俱全，但是怀着一种愉快的心情认真的做出来的食物是比它本事的味道更让人有胃口去尝试。</p>
            </div>
          </div>
        </main>
      </NavWarp>
    )
  }
}

export default Detail
