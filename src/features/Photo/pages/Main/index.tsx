import React from "react";
import Banner from "../../../../components/Banner";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";
import { useSelector } from "react-redux";

MainPage.propTypes = {};

function MainPage(props: any) {
  const photos = useSelector((state: Object) => state.photos); // note type
  console.log(photos);
  return (
    <div>
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;
