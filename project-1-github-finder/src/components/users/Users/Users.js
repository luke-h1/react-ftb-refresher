import React, { useContext } from "react";
import UserItem from "../UserItem/UserItem";
import Spinner from "../../layout/Spinner/Spinner";
import GithubContext from "../../../context/github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {githubContext.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};

export default Users;
