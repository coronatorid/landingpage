import React, { Fragment, useContext, useEffect, useState, useRef } from 'react';
import UserContext from '../contexts/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import IntendedRouteContext from '../contexts/IntendedRouteContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons';

const menus = [
  {
    headTitle: 'Cases',
    items: [
      {
        url: '/crew/cases/reported',
        title: 'Reported Cases'
      },
      {
        url: '/crew/cases/input',
        title: 'Input Cases'
      },
    ]
  },
  {
    headTitle: 'Users',
    items: [
      {
        url: '/crew/users',
        title: 'Users'
      }
    ]
  }
]

function UserDropdown(props) {
  return (
    <div className="absolute bg-white shadow-md rounded-lg w-32 overflow-hidden" style={{right: 0}}>
      <ul>
        <li className="block">
          <Link href="/crew/profile" >
            <a className="block p-2 dark:text-gray-700">
              Profile Crew
            </a>
          </Link>
        </li>
        <li className="block">
          <a onClick={props.handleLogout} className="block bg-red-500 text-gray-100 p-2 cursor-pointer hover:bg-red-700">
              Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

const CrewLayout = (props) => {
  const {url, setUrl} = useContext(IntendedRouteContext.Context);
  const {user, getUser} = useContext(UserContext.Context);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const menuRef = useRef(null);

  function menuClickHandler() {
    setShowMenu(false);
  }

  useEffect(() => {
    menuRef.current.addEventListener('click', menuClickHandler);
  }, []);

  function handleLogout() {
    Cookies.remove('accessToken');
    router.push('/');
  }

  return (
    <>
      <header className="flex w-full fixed h-16 bg-lightCoral justify-between px-5">
        <div className="flex lg:hidden items-center">
          <span onClick={() => setShowMenu(!showMenu)} className="block cursor-pointer">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </span>
        </div>
        <Link href="/crew">
          <a className="flex no-underline hover:no-underline">
            <div className="inline mx-1 col-start-1 my-auto">
              <img src="/icons/logo.png" alt="Coronator Logo" className="h-6 w-6" />
            </div>
            <div className="inline mx-1 my-auto col-start-1">
              <p className="text-gray-100 font-medium">Crewonator</p>
            </div>
          </a>
        </Link>
        <div className="flex flex-wrap items-center">
          <div className="relative" onMouseEnter={() => setShowUserDropdown(true)} onMouseLeave={() => setShowUserDropdown(false)}>
            <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} size="1x" className="text-gray-200" />
            </div>
            {
              showUserDropdown &&
                <UserDropdown
                  handleLogout={handleLogout}
                />
            }
          </div>
        </div>
      </header>
      <div className="content pt-16 grid grid-cols-12 gap-3 h-full">
        <div
          ref={menuRef}
          className={`
            navigation col-span-2  h-full bg-gray-100 dark:bg-gray-900 shadow-lg
            fixed
            ${showMenu ? 'block' : 'hidden'}
            lg:block lg:relative
          `}
          >
          {
            menus.map((menu, index) => {
              return (
                <div className="mb-3" key={index}>
                  <div className="block bg-gray-200 dark:bg-gray-700  text-gray-500 p-2">
                    {menu.headTitle}
                  </div>
                  <ul>
                    {
                      menu.items.map((item) => {
                        return (
                          <li className="block" key={item.url}>
                            <Link href={item.url}>
                              <a className="block p-3 font-semibold text-gray-800 hover:bg-lightCoral hover:text-white text-sm">
                                {item.title}
                              </a>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
        <div className="col-span-10 p-5">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default CrewLayout;
