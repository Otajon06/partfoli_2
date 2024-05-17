import '../../App.css'



export const CaruselPicture = () => {
    return(
        <div className="container_carysel_picture">
                            <div className='slide_wrapper'>
                            <div className='slider_nav'>
                                <a href="#slide-1"></a>
                                <a href="#slide-2"></a>
                                <a href="#slide-3"></a>
                                <a href="#slide-4"></a>
                            </div>
                            <div className='slide'>
                            <img id='slide-1' src='https://www.distrimar.ca/wp-content/uploads/2021/01/Focus-Room-scene.jpg' alt="" />
                            <img id='slide-2' src='https://www.distrimar.ca/wp-content/uploads/2021/01/Focus-room-pro-interior.jpg' alt="" />
                            <img id='slide-3' src='https://www.distrimar.ca/wp-content/uploads/2020/11/Cabine-acoustique-ROOM.jpg' alt="" />
                            <img id='slide-4' src='https://www.distrimar.ca/wp-content/uploads/2021/01/Focus-room-light-pro-scene-1.png' alt="" />
                        </div>
                            </div>
        </div>
    )
}