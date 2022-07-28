import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type userDataType = {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
};
type authContextType = {
  isLoggedin: boolean;
  setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
  userData: undefined | userDataType;
  setUserData: React.Dispatch<React.SetStateAction<undefined>>;
};

const AuthContext = createContext<authContextType>({
  isLoggedin: false,
  setIsLoggedin: () => null,
  userData: { _id: 0, firstName: "", lastName: "", email: "" },
  setUserData: () => null,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    (() => {
      if (localStorage.getItem("login")) {
        setIsLoggedin(true);
        setUserData(JSON.parse(localStorage.getItem("user") || "{}"));
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedin, setIsLoggedin, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
