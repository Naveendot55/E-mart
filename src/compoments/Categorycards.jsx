import Card from 'react-bootstrap/Card';

function Categorycards({ filename, categoryname, onClick }) {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const imgSrc = `${baseUrl}${filename}`;
  return (
    <Card
      className=" text-white"
      style={{ width:'250px', height:'250px', cursor: 'pointer' }}
      onClick={onClick}
    >
      <Card.Img src={imgSrc} alt={categoryname} />
      <Card.ImgOverlay style={{background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'end'}}>
        <Card.Title style={{fontSize:'36px',}}>{categoryname}</Card.Title>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  );
}

export default Categorycards;
