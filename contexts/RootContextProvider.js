import ContributorsContext from './ContributorsContext';

const providers = [
  ContributorsContext.Provider,
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
