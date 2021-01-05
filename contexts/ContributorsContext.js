import axios from 'axios';
import { useState, createContext, useEffect } from 'react';
import repos from '../public/data/repos.json';

const Context = createContext();

const Provider = (props) => {
  const [contributors, setContributors] = useState([]);

  /**
   * @returns {void}
   */
  function initialize() {
    fetchContributors();
  }

  /**
   * @returns {void}
   */
  async function fetchContributors() {
    try {
      const allContributorsFromRepos = await Promise.all(repos.map((repo) => {
        return fetchContributorsFromRepo(repo);
      }));

      const mergedContributors = Array.from(allContributorsFromRepos).flat().map((contributor) => {
        const {
          id,
          login,
          avatar_url,
          url,
        } = contributor;

        return {
          id,
          login,
          avatar_url,
          url
        };
      });

      const seen = new Set();

      const uniqueContributors = mergedContributors.filter((contributor) => {
        const duplicateItem = seen.has(contributor.id);
        seen.add(contributor.id);
        return !duplicateItem;
      });

      setContributors(uniqueContributors);

    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * @param {object} repo
   * @returns {array}
   */
  async function fetchContributorsFromRepo(repo) {
    try {
      const response = await axios.get(`${repo.url}/contributors`);
      return response.data;

    } catch (error) {
      return [];
    }
  }

  return (
    <Context.Provider value={{
      contributors,
      initialize,
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default {
  Context,
  Provider
}
