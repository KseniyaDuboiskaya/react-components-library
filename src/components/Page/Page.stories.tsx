import Page from "./index";

export default {
    title: 'MyComponent/Page',
    component: Page,
    parameters: {
        layout: 'centered',
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            description: "The Title of the page",
            control: {
                type: "text"
            },
        },
        children: {
            description: "The children of the page",
            control: {
                type: "text"
            }

        }
    }
};

export const PageOne = {
    args: {
        title: "These is the page one title",
        children: "There are the page one children"
    }
};

export const PageTwo = {
    args: {
        title: "These is the page two title",
        children: "There are the page two children"
    }
};