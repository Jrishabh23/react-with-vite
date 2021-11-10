import Card from "../card-layout/Card";

const list = [
    {
        name: 'Rishabh Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ankit Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Abhinav Makkar',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ranu Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Rishabh Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ankit Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Abhinav Makkar',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ranu Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Rishabh Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ankit Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Abhinav Makkar',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ranu Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Rishabh Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ankit Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Abhinav Makkar',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ranu Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Rishabh Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ankit Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Abhinav Makkar',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    },
    {
        name: 'Ranu Jain',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GigZWejDd3Ps1ZQN2spqfESrp0noJNz5fDt56vr2g=s96-c-rg-br100',
    }
];
function CardList() {
    const _listRender = () => {
        return list.map((item, index) => {
            return <Card key={index} name={item.name} image = {item.image} />
        })
    } 
    return (<>
        <div className='card-section'>
            {_listRender()}
        </div>    
    </>);
}

export default CardList;