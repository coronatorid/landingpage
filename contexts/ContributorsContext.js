import axios from 'axios';
import {useState, createContext, useEffect} from 'react';
import localStorageData from '../utils/localStorageData';

const storageKey = 'contributors';

const Context = createContext();

const Provider = (props) => {
  const [contributors, setContributors] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const repos = [
    {
      name: 'coronator',
      url: 'https://api.github.com/repos/coronatorid/coronator/contributors',
    },
    {
      name: 'landingpage',
      url: 'https://api.github.com/repos/coronatorid/landingpage/contributors',
    },
    {
      name: 'core-onator',
      url: 'https://api.github.com/repos/coronatorid/core-onator/contributors',
    },
    {
      name: 'contooling',
      url: 'https://api.github.com/repos/coronatorid/contooling/contributors',
    },
  ];

  useEffect(() => {
    if(isInitialized) {
      localStorageData.set(storageKey, contributors, (60 * 60 * 24));
    }
  }, [contributors]);

  useEffect(() => {
    if(!isInitialized) {
      const localData = localStorageData.get(storageKey);
      if(localData) {
        if(localData.length) {
          setContributors(localData);
        } else {
          fetchContributors();
        }
      } else {
        fetchContributors();
      }
    }
    setIsInitialized(true);
  }, []);

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
      const response = await axios.get(repo.url);
      return response.data;

    } catch (error) {
      return [];
    }
  }

  return (
    <Context.Provider value={{
      contributors
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default {
  Context,
  Provider
}
