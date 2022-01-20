import { createContext, useContext, useMemo } from "react";
import { StringHashMap } from "./content-utils";

interface ContentContextValue {
  lang: (key: string) => string;
  content: StringHashMap;
}

const ContentContext = createContext<ContentContextValue>({
  lang: () => "",
  content: {},
});

interface ContentProviderProps {
  content: StringHashMap;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ content, children }) => {
  const value: ContentContextValue = useMemo(
    () => ({
      lang: (key) => {
        console.log("🚀 ~ file: content.tsx ~ line 21 ~ content", content);
        return content[key];
      },
      content,
    }),
    [content],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const context = useContext(ContentContext);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }

  return context;
};
