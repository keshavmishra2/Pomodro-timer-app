
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from '../Button/Pausebutton';
import PlayButton from '../Button/Playbutton';
import SettingButton from '../Button/Settingbutton';
const red = "#f54e4e";
//const green = "#4aec8c"
function Timer(){
    return (
        <div>
            <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({ 
            textColor: "#fff",
            pathColor : red,
            tailColor : "rgba(255, 255, 255, .2)",
            })} />
             <div style={{marginTop: "20px" }}>
                <PlayButton/>
                <PauseButton/>
            </div>
            <div style={{marginTop : "20PX"}}>
               <SettingButton/>
            </div>
        </div>
      
    )
}

export default Timer