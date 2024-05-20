import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <div className="h-screen bg bg-white  dark:bg-gray-800">
      <Helmet>
        <title>{`${title} `}</title>
        {meta}
      </Helmet>

      <div
        ref={ref}
        {...other}
        className="max-w-screen-xl bg bg-white  dark:bg-gray-800"
      >
        {children}
      </div>
    </div>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
