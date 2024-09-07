declare const _default: {
    title: string;
    component: ({ title, children }: import("./types").PageProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        children: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const PageOne: {
    args: {
        title: string;
        children: string;
    };
};
export declare const PageTwo: {
    args: {
        title: string;
        children: string;
    };
};
