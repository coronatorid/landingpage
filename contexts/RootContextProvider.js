import ContributorsContext from './ContributorsContext';
import IntendedRouteContext from './IntendedRouteContext';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';

const providers = [
  ContributorsContext.Provider,
  ThemeContext.Provider,
  UserContext.Provider,
  IntendedRouteContext.Provider,
];

const combineProviders = (components) => {
  return components.reduce(
    (Accumulated, Current) => {
      return (props) => {
        return (
          <Accumulated>
            <Current>
              {props.children}
            </Current>
          </Accumulated>
        )
      }
    },
    (props) => <> {props.children} </>
  );
}

export default combineProviders(providers);
