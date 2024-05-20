import PropTypes from "prop-types";

// utilsonents

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

InfoCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default function InfoCard({ info }) {
  //   console.log(info.data.main.temp);

  return (
    <>
      <div>Info</div>
    </>
  );
}
