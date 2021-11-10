import './card.css'
function Card(data: any) {
    const {name, image } = data;
    return (
        <>
        <div className="card-container">
            <div className="card-details">
                <div className="mute-container">
                    <img src="../../image/mute.png" alt="mute" className="mute-icon" />
                </div>
                <div>
                    <img className="user-image w-60"
                src={image}/>
                </div>
                <div>
                        <p className="user-name">{ name}</p>
                </div>
            </div>
        </div>            
        </>
    );
}

export default Card;