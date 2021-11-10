import { useState } from "react";
import PhoneCards from "./PhoneCards";

const list = [{
    id: '123',
    label: 'Narzo',
    image: 'https://rukminim1.flixcart.com/flap/240/240/image/0f46b1ccbe7d0620.jpg?q=90',
    link: 'https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=7564&otracker=clp_metro_expandable_1_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_Q1PDG4YW86MF_wp3&fm=neo%2Fmerchandising&iid=M_d3e0d5c8-831f-4b2d-8923-9f67e751cd1a_3.Q1PDG4YW86MF&ppt=hp&ppn=homepage&ssid=azv3e2fkhc0000001636427520807'
}, {
    id: '124',
    label: 'Samsung',
    image: 'https://rukminim1.flixcart.com/flap/240/240/image/0f46b1ccbe7d0620.jpg?q=90',
    link: 'https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=7564&otracker=clp_metro_expandable_1_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_Q1PDG4YW86MF_wp3&fm=neo%2Fmerchandising&iid=M_d3e0d5c8-831f-4b2d-8923-9f67e751cd1a_3.Q1PDG4YW86MF&ppt=hp&ppn=homepage&ssid=azv3e2fkhc0000001636427520807'
}, {
    id: '125',
    label: 'Apple',
    image: 'https://rukminim1.flixcart.com/flap/240/240/image/0f46b1ccbe7d0620.jpg?q=90',
    link: 'https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=7564&otracker=clp_metro_expandable_1_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_Q1PDG4YW86MF_wp3&fm=neo%2Fmerchandising&iid=M_d3e0d5c8-831f-4b2d-8923-9f67e751cd1a_3.Q1PDG4YW86MF&ppt=hp&ppn=homepage&ssid=azv3e2fkhc0000001636427520807'
}, {
    id: '126',
    label: 'Google',
    image: 'https://rukminim1.flixcart.com/flap/240/240/image/0f46b1ccbe7d0620.jpg?q=90',
    link: 'https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=7564&otracker=clp_metro_expandable_1_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_Q1PDG4YW86MF_wp3&fm=neo%2Fmerchandising&iid=M_d3e0d5c8-831f-4b2d-8923-9f67e751cd1a_3.Q1PDG4YW86MF&ppt=hp&ppn=homepage&ssid=azv3e2fkhc0000001636427520807'
}, {
    id: '127',
    label: 'MI',
    image: 'https://rukminim1.flixcart.com/flap/240/240/image/0f46b1ccbe7d0620.jpg?q=90',
    link: 'https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3Drealme&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=7564&otracker=clp_metro_expandable_1_3.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_Q1PDG4YW86MF_wp3&fm=neo%2Fmerchandising&iid=M_d3e0d5c8-831f-4b2d-8923-9f67e751cd1a_3.Q1PDG4YW86MF&ppt=hp&ppn=homepage&ssid=azv3e2fkhc0000001636427520807'
},];
function ListRender() {
    // const
}
const usersList = [{
    name: 'Ankit Satonia',
    image: ''
}]
const HomePage = () => {
    const _renderList = () => {
        return list.map((item, index) => {
            return <PhoneCards key={item.id} label={item.label} image={item.image} link={item.link} />
        })
    }
    return (
        <>
            <div>Homepage element</div>
            <div style={{ display: 'flex' }}>
                {_renderList()}
            </div>
        </>
    )
}
export default HomePage;