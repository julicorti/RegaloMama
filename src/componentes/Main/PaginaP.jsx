import '../Styles/Style.css' 
import reactPlayer from 'react-player';
import video from "../image/video.mp4"
import ReactPlayer from 'react-player';
const Pagina = () => {
  return (

     
    <div className="contenedor" >
   
    <div className='contenedor-cora'>
    <h1>Feliz dia de la madre</h1>
      <div className="corazon"></div>
        <ReactPlayer id="video" style={{marginTop: "30px"}} url={video}   controls={false} playing={true} />
      </div>
    </div>

  );
};
export default Pagina;
