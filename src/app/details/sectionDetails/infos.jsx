import '../../App.css'


export const Infos = () => {
    return (
        <div className='infos_container'>
            <h1>Our simple and seamless modular products allow teams to shape and then reshape their work environment with ease.</h1>
            <a href="">GET IN TOUCH</a>
            <div className='infos'>
                <img src="https://cdn.shopify.com/s/files/1/0312/2737/9849/files/meeting-room-icon-cost-effective-v2.svg" alt="" />
                <h3>Cost-effective</h3>
                <p>At a fraction of the cost of traditional construction, our pre-fab office pods, phone booths and meeting rooms create additional space for focused work and collaboration without constant noise, debris and distraction.</p>
            </div>
            <div className='infos'>
                <img src="https://cdn.shopify.com/s/files/1/0312/2737/9849/files/meeting-room-icon-time-saving-v2.svg" alt="" />
                <h3>Time Saving</h3>
                <p>Thoughtful design ensures simple installation in a few hours or less. And, because our office pods are safety ensured, you’ll never have to spend time or money chasing after permits, contractors, and more.</p>
            </div>
            <div className='infos'>
                <img src="https://cdn.shopify.com/s/files/1/0312/2737/9849/files/meeting-room-icon-flexible-v2.svg" alt="" />
                <h3>Flexible</h3>
                <p>Unlike traditional construction, our<a href=""> purpose-built office pods are designed to adapt with your workspace</a> and can easily be positioned in various places throughout your office, or to an entirely new location.</p>
            </div>
        </div>
    )
}