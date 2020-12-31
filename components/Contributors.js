import {useContext, useEffect} from 'react';
import ContributorsContext from '../contexts/ContributorsContext';
import Contributor from '../components/Contributor';

const Contributors = (props) => {
  const {contributors, initialize} = useContext(ContributorsContext.Context);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      {
        !contributors.length
          || (
            <>
              <h2 className="text-center">
                Meet the Fighters
              </h2>
              <div className="container flex flex-wrap justify-center mb-10">
                {
                  contributors.map((contributor) => {
                    return (
                      <Contributor contributor={contributor} key={contributor.login} />
                    )
                  })
                }
              </div>
            </>
          )
      }
    </>
  )
}

export default Contributors;
