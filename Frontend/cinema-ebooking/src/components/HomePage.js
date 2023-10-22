import CustomerHomePage from "./CustomerHomePage";
import AdminHomePage from "./AdminHomePage";

function HomePage(props) {
    return (
        <>
            {props.status === 'admin' && 
                <AdminHomePage user={props.user} setUser={props.setUser} moveiarray={props.moveiarray} userarray={props.userarray} promoarray={props.promoarray}/>
            }
            {props.status !== 'admin' &&
                <CustomerHomePage user={props.user} setUser={props.setUser} moveiarray={props.moveiarray} />
            }
        </>
    )
}

export default HomePage;