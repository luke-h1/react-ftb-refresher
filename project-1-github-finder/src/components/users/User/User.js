import React, { useEffect, useContext } from "react";
import Spinner from "../../layout/Spinner/Spinner";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import Repos from "../../repos/Repos/Repos";
import GithubContext from "../../../context/github/githubContext";
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

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
    company,
    hireable,
  } = user;
  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable: {"  "}
      {hireable ? (
        <FaCheck className="text-success" />
      ) : (
        <FaTimes className="text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="Github profile user"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <br />
                  Username: {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <br />
                  Company: {company}
                </>
              )}
            </li>
            <li>{blog && <>Website: {blog}</>}</li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">
          Public Repositories: {public_repos}
        </div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      {Repos && <Repos repos={repos} />}
    </>
  );
};

export default User;
