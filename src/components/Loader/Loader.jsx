import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="color-ring-wrapper"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
}
