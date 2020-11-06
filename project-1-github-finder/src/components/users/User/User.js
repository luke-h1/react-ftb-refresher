import React from "react";
import Spinner from "../../layout/Spinner/Spinner";
export class User extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
    } = this.props.user;
    return <div>User</div>;
  }
}
export default User;
