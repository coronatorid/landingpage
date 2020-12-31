import { useState } from "react";

const Contributor = (props) => {
  const {contributor} = props;
  const [isNameVisible, setisNameVisible] = useState(false);

  return (
    <div key={contributor.login} className="relative cursor-pointer" onMouseOver={() => setisNameVisible(true)} onMouseLeave={() => setisNameVisible(false)}>
      <div className={
        `
          absolute bg-white shadow-lg px-3 py-2 border border-gray-300 rounded-lg
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
      <div className="m-3 w-24 flex flex-col items-center">
        <div className="h-20 w-20 rounded-md overflow-hidden shadow-lg">
          <img src={contributor.avatar_url} alt="contributor..." className="w-full h-full object-center object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default Contributor;
