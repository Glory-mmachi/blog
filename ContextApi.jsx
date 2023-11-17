import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [data, setData] = useState();
  const url = "https://glory-blog-api.vercel.app/";
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const responseData = await res.json();
      {
        responseData && setData(responseData);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeContext.Provider value={{ data }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
