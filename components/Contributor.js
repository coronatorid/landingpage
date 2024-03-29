import PropTypes from 'prop-types';
import { useState } from "react";

const Contributor = (props) => {
  const {contributor} = props;
  const [isNameVisible, setisNameVisible] = useState(false);

  return (
    <div key={contributor.login} className="relative cursor-pointer" onMouseOver={() => setisNameVisible(true)} onMouseLeave={() => setisNameVisible(false)}>
      <div className={
        `
          absolute bg-white shadow-lg px-3 py-2 border border-gray-300 rounded-lg dark:text-gray-700
          ${isNameVisible || 'hidden'}
        `
      }
      style={{
        bottom: 0,
        left: '30%',
        zIndex: 2,
      }}>
        {contributor.login}
      </div>
      <a href={contributor.html_url} target="_blank">
        <div className="m-3 w-20 flex flex-col items-center">
          <div className="h-16 w-16 rounded-md overflow-hidden shadow-lg">
            <img src={contributor.avatar_url} alt="contributor..." className="w-full h-full object-center object-cover"/>
          </div>
        </div>
      </a>
    </div>
  )
}

Contributor.propTypes = {
  contributor: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
  })
}

export default Contributor;
