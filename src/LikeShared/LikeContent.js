import { Component } from "react";
import { LikeCard } from "./LikeCard";
import { posts } from "./likeData";

export class LikeContent extends Component {
  state = {
    showBlog: true,
    likeArr: posts,
  };

  likePost = (pos) => {
    const temp = this.state.likeArr;
    temp[pos].likeCount++; 
    this.setState({
        likeArr: temp 
    })
  };

  likePosts = this.state.likeArr.map((item, pos) => {
    return (
      <LikeCard
        key={item.id}
        title={item.title}
        description={item.description}
        likeCount={item.likeCount}
        likePost={() => this.likePost(pos)}
      />
    );
  });

  toggleLike = () => {
    this.setState(({ showBlog }) => {
      return {
        showBlog: !showBlog,
      };
    });
  };

  render() {
    console.log("render");
    return (
      <>
        <button onClick={this.toggleLike}>
          {this.state.showBlog ? "Скрыть блог" : "Показать блог"}
        </button>

        {this.state.showBlog ? (
          <>
            <h1>Simple Blog</h1>
            <div className="posts">{this.likePosts}</div>
          </>
        ) : null}
      </>
    );
  }
}
