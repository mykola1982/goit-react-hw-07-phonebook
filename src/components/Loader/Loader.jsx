import { Watch } from 'react-loader-spinner';
import { BackdropLoader, StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <BackdropLoader>
      <StyledLoader>
        <Watch
          height="200"
          width="200"
          radius="48"
          color="#FF6600"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </StyledLoader>
    </BackdropLoader>
  );
};
