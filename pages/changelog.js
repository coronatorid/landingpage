import axios from 'axios';
import {Fragment, useEffect, useState} from 'react';
import repos from '../public/data/repos.json';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const Changelog = (props) => {
  const [repo, setRepo] = useState(null);
  const [changelogData, setChangelogData] = useState([]);

  useEffect(() => {
    if(repo) {
      fetchData();
    }

  }, [repo]);

  useEffect(() => {
    const _repo = repos
      ? repos.find((item) => {
        return item.name == 'coronator';
      })
      : null;

    setRepo(_repo);

  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`${repo.url}/releases`);

      const _changelogData = response.data.map((item) => {
        const {
          id,
          name,
          tag_name,
          body,
          created_at
        } = item;

        return {
          id,
          name,
          tag_name,
          body,
          created_at
        };
      });

      setChangelogData([..._changelogData]);

    } catch (error) {
      console.log(error);
    }
  }

  /**
   * @returns {string}
   */
  function badgeClass(type = '') {
    let baseClass = 'inline-block px-3 py-1 font-semibold tracking-wider rounded-md';

    let colorClass = '';
    switch(type) {
      case 'new':
        colorClass = 'bg-green-500 text-white';
        break;

      case 'improved':
        colorClass = 'bg-blue-500 text-white';
        break;

      default:
        colorClass = 'bg-gray-500 text-gray-100';
        break;
    }

    return `${baseClass} ${colorClass}`;
  }

  return (
    <Fragment>
      <section className="section">
        <div className="container max-w-screen-md">
          <h2 className="mb-5">
            Changelog
          </h2>
          {
            changelogData.map((changelogItem) => {
              return (
                <div key={changelogItem.id} className="mb-5 border border-gray-200 p-5 rounded-md shadow-md">
                  <p className="text-2xl font-bold">
                    {changelogItem.tag_name}
                  </p>
                  <p className="font-semibold">
                    {changelogItem.name}
                  </p>
                  <p className="text-sm text-gray-700 mb-5">
                    {moment(changelogItem.created_at).format('dddd, DD MMMM YYYY')}
                  </p>
                  <div>
                    {
                      !changelogItem.body
                        || (
                            <ReactMarkdown>
                              {changelogItem.body}
                            </ReactMarkdown>
                        )
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </Fragment>
  )
}

export default Changelog
