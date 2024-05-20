// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_APP = "/yocket";

// ----------------------------------------------------------------------

export const PATH_APP = {
  root: ROOTS_APP,
  general: {
    app: path(ROOTS_APP, "/dashboard"),
    mainmap: path(ROOTS_APP, "/game"),
    details: path(ROOTS_APP, "/details"),
  },
};
