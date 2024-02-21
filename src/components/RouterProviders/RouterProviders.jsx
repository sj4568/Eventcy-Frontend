import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import Home from "../Home/Home"
import Tamplates from "../Tamplates/Tamplates"
import EventsForm from "../Events/HostEvents/EventsForm"
import SignUp from "../User/SignUp/SignUp"
import SignIn from "../User/Login/SignIn"
import PrivateEvents from "../Events/ManagePrivateEvents/PrivateEvents"
import UserPrivateRoutes from "../PrivateRoutes/UserPrivateRoutes"
import PublicEvents from "../Events/PublicEvents/PublicEvents"
import CreateEvent from "../Events/PublicEvents/EventContainer/CreateEvent/CreateEvent"
import ShowEvents from "../Events/PublicEvents/EventContainer/ShowEvents/ShowEvents"
import Checkout from "../Events/PublicEvents/Checkout/Checkout"
import GuestForm from "../Events/ManagePrivateEvents/PrivateEventsBottom/GuestForm/GuestForm"
import GuestUpdate from "../Events/ManagePrivateEvents/PrivateEventsBottom/GuestForm/GuestUpdate"
import Blog from "../Blogs/Blogs"
import BlogForm from "../Blogs/BlogForm/BlogFrom"
import Profile from "../User/Profile/Profile"
import UpdateUser from "../User/Profile/UpdateUser/UpdateUser"
import ContectForm from "../Contect/ContectForm"
import TempProfile from "../User/tempProfile/Profile"
import Mass from "../Events/PublicEvents/Checkout/CheckoutMass/Mass"
import SignUpMass from "../Events/PublicEvents/Checkout/CheckoutMass/SignUpmass"
import PageNotFound from "../PageNotFound/PageNotFound"
import Ticket from "../User/Profile/UserDetails/Conainer/Order/OrderContainer/Ticket/Ticket"

 const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Tamplates/>}>
            <Route index element={<Home/>}/>
            <Route path="/events" element={<UserPrivateRoutes/>}>
            <Route index element={<EventsForm/>}/>
            <Route path="/events/privateevent" element={<PrivateEvents/>}/>
            </Route>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
    
            <Route path="/" element={<UserPrivateRoutes />}>
            <Route path="/publicevents" element={<PublicEvents/>}/>
            <Route path="/createevent" element={<CreateEvent/>}/>
            <Route path="/showevent" element={<ShowEvents/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/addguest" element={<GuestForm/>}/>
            <Route path="/updateguest" element={<GuestUpdate/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/createblogs" element={<BlogForm/>}/>
            <Route path="/createblogs" element={<BlogForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateuser" element={<UpdateUser />} />
            <Route path="/mass" element={<Mass/>}/>
           
            <Route path="/user" element={<TempProfile/>}/>
            </Route>
             <Route path="/signupmass" element={<SignUpMass/>}/>
            <Route path="/contect" element={<ContectForm />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    )
)
export default routes