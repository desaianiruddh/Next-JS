/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';

const Params = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <div sx={{ variant: 'containers.pageContent' }}>{params}</div>;
};

export default Params;
