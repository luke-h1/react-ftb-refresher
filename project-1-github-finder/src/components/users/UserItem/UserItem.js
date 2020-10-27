import React from "react";

class UserItem extends React.Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };
  render() {
    const {html_url, avatar_url, login} = this.state
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="Github Profile "
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className="btn btn-dark btn-sm my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
        </div>
      </div>
    );
  }
}
export default UserItem;
// on end of getting started with component state (1 min left)