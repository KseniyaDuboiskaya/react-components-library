import * as react_jsx_runtime from 'react/jsx-runtime';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: ({ title, children }: PageProps) => react_jsx_runtime.JSX.Element;

export { Page };
