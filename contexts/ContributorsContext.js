import axios from 'axios';
import {useState, createContext, useEffect} from 'react';

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
      localStorage.setItem(storageKey, JSON.stringify(contributors));
    }
  }, [contributors]);

  useEffect(() => {
    if(!isInitialized) {
      const localData = localStorage.getItem(storageKey);
      if(localData) {
        const data = JSON.parse(localData) || [];
        if(data.length) {
          setContributors(JSON.parse(localData));
        } else {
          fetchContributors();
        }
      } else {
        fetchContributors();
      }
    }
    setIsInitialized(true);
  }, []);

  async function fetchContributors() {
    try {
      const allContributorsFromRepos = await Promise.all(repos.map((repo) => {
        return fetchContributorsFromRepo(repo);
      }));

      const mergedContributors = Array.from(allContributorsFromRepos).flat();

      const seen = new Set();

      const uniqueContributorsByUsername = mergedContributors.filter((contributor) => {
        const duplicateItem = seen.has(contributor.id);
        seen.add(contributor.id);
        return !duplicateItem;
      });

      setContributors(uniqueContributorsByUsername);

    } catch (error) {
      console.log(error);
    }
  }

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
