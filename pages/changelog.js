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

  const hardcodedChangelogData = [
    {
      type: 'new',
      dateString: 'October 27, 2020',
      list: [
        'Coronator now can detect people ',
        'Coronator now can lorem ',
        'Notification Email while doing blabla',
      ]
    },
    {
      type: 'improved',
      dateString: 'October 21, 2020',
      list: [
        'lorem ipsum dolor sir amet',
        'hey heo heo',
        'Notification Email while doing blabla',
      ]
    }
  ];

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
        <div className="container">
          <h2 className="mb-5">
            Changelog
          </h2>
          {
            changelogData.map((changelogItem) => {
              return (
                <div key={changelogItem.id} className="mb-5 border border-gray-200 p-5 rounded-md shadow-md">
                  <p className="text-lg font-semibold">
                    {moment(changelogItem.created_at).format('dddd, DD MMMM YYYY')}
                  </p>
                  <div className="mb-5">
                    <span className={badgeClass('')}>
                      {changelogItem.tag_name}
                    </span>
                  </div>
                  <div className="">
                    {
                      changelogItem.body ?
                        (
                            <ReactMarkdown>
                              {changelogItem.body}
                            </ReactMarkdown>
                        ) :
                        (
                          <>
                            ...
                          </>
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
