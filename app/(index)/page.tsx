/// <reference types="next" />
/// <reference types="next/types/global" />

import { NextComponentType, GetServerSidePropsContext } from "next";
import { AppPropsType } from "next/dist/next-server/lib/utils";

type RenderPageResult = {
    /**
     * By default it renders with ReactDOM.EDUCTED_NODE_STREAM/
     */
    html: string;
    styles?: React.ReactElement[] | React.ReactFragment;
};

type enhanceComponent = (Component: NextComponentType) => any;

type RenderPage = (
    options?: ComponentsEnhancer
) => RenderPageResult | Promise<RenderPageResult>;

type ComponentsEnhancer = {
    enhanceApp?: (App: NextComponentType) => any;
    enhanceComponent?: enhanceComponent;
};

interface RenderProps {
    /**
     * Error message for rendering via renderError
     */
    err?: Error;
    /**
     * Path for current page
     */
    pathname: string;
    /**
     * Current query object
     */
    query: unknown;
    /**
     * Relative path to the build folder
     */
    asPath: string;
    /**
     * The document props (used for error handling)
     */
    AppTree: AppPropsType["AppTree"];
}

interface NextPageContext extends GetServerSidePropsContext, RenderProps {
    AppTree: AppPropsType["AppTree"];
    isFallback: boolean;
    defaultGetInitialProps(
        ctx: ComponentsEnhancer,
         App: ((props: any) => JSX.Element)
        AppTree: AppPropsType["AppTree"],
        componentsEnhancer:
            | ComponentsEnhancer
            | ((componentsEnhancer: ComponentsEnhancer) => ComponentsEnhancer),
        ctx: { renderPage: RenderPage }
    ): Promise<RenderPageResult>;

    /**
     * A function to render a React Component
     */
    renderPage(
        options?:
            | ComponentsEnhancer
            | ((componentsEnhancer: ComponentsEnhancer) => ComponentsEnhancer)
    ): Promise<RenderPageResult>;

    /**
     * By default renders via renderPage. If set, renders
     * via a custom catastrophical error handler
     */
    AppTree(
        Page: NextComponentType<NextPageContext>,
        { ...props }: RenderProps
    ): Promise<RenderPageResult>;
}

export default function Home() {
    return (
        <div className="container">
            <style jsx>{`
                #title {
                    color: #0070f3 !important;
                    text-decoration-line: underline !important;
                }
            `}</style>
            <h1 id="title" onClick={() => fetch("/clicked")}>
                About Page !!!!!!!!!
            </h1>
        </div>
    );
}