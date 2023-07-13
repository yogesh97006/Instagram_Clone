import './HomePage.css'
import SideBar from '../SideBar/SideBar'
import TimeLine from '../TimeLine/TimeLine'

function HomePage(){
    return(
        <div className='HomePage'>
            <div className='SideBar__Nav'>
                <SideBar />
            </div>
            <div className='Time__Line'>
                <TimeLine />
            </div>
          
        </div>
    )
}

export default HomePage