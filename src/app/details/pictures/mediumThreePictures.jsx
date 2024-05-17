import '../../App.css'



export const MediumThreePictures = () => {
    return(
        <div className="container_medium_three_picture">
            <div>
                <img src='https://cdn.shopify.com/s/files/1/0312/2737/9849/files/ASSET_-_IMG_-_DIRECT_-_170221_1728x.jpg' alt="" />
                <div>
                    <h1>Direct to you.</h1>
                    <p>We make extra room in the budget without compromising quality by going direct to you. Seamless and no additional construction required.</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>We build with purpose.</h1>
                    <p>We’re not just building another room with four walls, we're <a href=""> building a more productive workspace</a>. We design with you in mind, looking at every detail as an opportunity to better enable a better working environment for everyone.</p>
                </div>
                <img src='https://cdn.shopify.com/s/files/1/0312/2737/9849/files/ASSET_-_IMG_-_PURPOSE_-_170221_1728x.jpg' alt="" />
            </div>
            <div>
                <img src='https://cdn.shopify.com/s/files/1/0312/2737/9849/files/ASSET_-_IMG_-_SUSTAINABLE_-_170221_1728x.jpg' alt="" />
                <div>
                    <h1>We design sustainably.</h1>
                    <p>From design to delivery, we strive to lessen our impact on the environment. Our office pods are engineered with recycled materials and replace multiple cycles of construction, minimizing noise and our footprint.</p>
                    <a href="">Learn More</a>
                </div>
            </div>
        </div>
    )
}