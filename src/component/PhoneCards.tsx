const PhoneCards = (data: any) => {
    const { image, link, label } = data;
    return (
        <div style={{ margin: '10px' }}>
            <div style={{ padding: '20px', border: '1px solid silver' }}>
                <img width={100} src={image} alt={label} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <a href={link}>{label}</a>
            </div>
        </div>
    )
}
export default PhoneCards;