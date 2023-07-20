import { useNavigate } from "react-router";

const useHandleNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleNavigationWithObject = (path: string, value: string | object) => {
    navigate(path, { state: value });
  };
  return { handleNavigation, handleNavigationWithObject };
};

export default useHandleNavigation;
