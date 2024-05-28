// import React from "react";
// import { Route } from "react-router-dom";
// import Header from "../components/common/Header";
// import Expenses from "./Accounts/Expenses";
// import Invoices from "./Accounts/Invoices";
// import Payments from "./Accounts/Payments";
// import HrDashboard from "./Dashboard/HrDashboard";
// import ProjectDashboard from "./Dashboard/ProjectDashboard";
// import Attendance from "./Employee/Attendance";
// import AttendanceEmployees from "./Employee/AttendanceEmployees";
// import Departments from "./Employee/Departments";
// import EmployeeProfile from "./Employee/EmployeeProfile";
// import Holidays from "./Employee/Holidays";
// import LeaveRequest from "./Employee/LeaveRequest";
// import Members from "./Employee/Members";
// import ClientProfile from "./Our Clients/ClientProfile";
// import Clients from "./Our Clients/Clients";
// import Salaryslip from "./Payroll/Salaryslip";
// import Leaders from "./Projects/Leaders";
// import Projects from "./Projects/Projects";
// import Tasks from "./Projects/Tasks";
// import Timesheet from "./Projects/Timesheet";
// import TicketsDetail from "./Tickets/TicketsDetail";
// import TicketsView from "./Tickets/TicketsView";
// import Alerts from "./UIComponents/Alerts";
// import Calendar from "./App/Calendar";
// import ChatApp from "./App/ChatApp";
// import ApexCharts from "./OtherPages/ApexCharts";
// import FormsExample from "./OtherPages/FormsExample";
// import TablesExample from "./OtherPages/TablesExample";
// import ReviewsPage from "./OtherPages/ReviewsPage";
// import Icons from "./OtherPages/Icons";
// import Widgets from "./OtherPages/Widgets";
// import Badges from "./UIComponents/Badges";
// import Breadcrumb from "./UIComponents/Breadcrumb";
// import Buttons from "./UIComponents/Buttons";
// import Cards from "./UIComponents/Cards";
// import Carousel from "./UIComponents/Carousel";
// import Collapse from "./UIComponents/Collapse";
// import Dropdowns from "./UIComponents/Dropdowns";
// import ListGroup from "./UIComponents/ListGroup";
// import ModalUI from "./UIComponents/ModalUI";
// import NavsUI from "./UIComponents/NavsUI";
// import NavbarUI from "./UIComponents/NavbarUI";
// import PaginationUI from "./UIComponents/PaginationUI";
// import PopoversUI from "./UIComponents/PopoversUI";
// import ProgressUI from "./UIComponents/ProgressUI";
// import Scrollspy from "./UIComponents/Scrollspy";
// import SpinnersUI from "./UIComponents/SpinnersUI";
// import ToastsUI from "./UIComponents/ToastsUI";
// import StaterPage from "./Stater/StaterPage";
// import PageHeader1 from "../components/common/PageHeader1";
// import Documentation from "./Documentation/Documentation";
// import Changelog from "./Changelog/Changelog";
// import Help from "./Dashboard/Help";
// import RolesList from "./Roles/RoleManagement";
// import UserList from "./User/UserList";
// import PermissionCheck from "../protected/permissionCheck";

// function MainIndex(props) {

//     const { activekey } = props;
//     return (
//         <div className="main px-lg-4 px-md-4">
//             {activekey !== "/chat-app" ? activekey === "/documentation" ? <PageHeader1 /> : <Header /> : ""}
//             <div className="body d-flex py-lg-3 py-md-2">
//                 <Route exact path={`${process.env.PUBLIC_URL}/`} component={HrDashboard} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/hr-dashboard`} component={HrDashboard} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/project-dashboard`} component={ProjectDashboard} />

//                 {/* <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/tasks`} component={Tasks} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/timesheet`} component={Timesheet} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/leaders`} component={Leaders} /> */}

//                 <PermissionCheck allowedRole="Projects"><Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects} /></PermissionCheck>
//                 <PermissionCheck allowedRole="Tasks"><Route exact path={`${process.env.PUBLIC_URL}/tasks`} component={Tasks} /></PermissionCheck>
//                 <PermissionCheck allowedRole="Timesheet"><Route exact path={`${process.env.PUBLIC_URL}/timesheet`} component={Timesheet} /></PermissionCheck>
//                 <PermissionCheck allowedRole="Leaders"><Route exact path={`${process.env.PUBLIC_URL}/leaders`} component={Leaders} /></PermissionCheck>

//                 <Route exact path={`${process.env.PUBLIC_URL}/tickets-view`} component={TicketsView} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/tickets-detail`} component={TicketsDetail} />

//                 {/* <Route exact path={`${process.env.PUBLIC_URL}/clients`} component={Clients} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/client-profile`} component={ClientProfile} /> */}

//                 <PermissionCheck allowedRole="Clients"><Route exact path={`${process.env.PUBLIC_URL}/clients`} component={Clients} /></PermissionCheck>
//                 <PermissionCheck allowedRole="Client Profile"><Route exact path={`${process.env.PUBLIC_URL}/client-profile`} component={ClientProfile} /></PermissionCheck>

//                 {/* <Route exact path={`${process.env.PUBLIC_URL}/members`} component={Members} /> */}
//                 <PermissionCheck allowedRole="Members"><Route exact path={`${process.env.PUBLIC_URL}/members`} component={Members} /></PermissionCheck>

//                 <Route exact path={`${process.env.PUBLIC_URL}/members-profile`} component={EmployeeProfile} />

//                 {/* <Route exact path={`${process.env.PUBLIC_URL}/holidays`} component={Holidays} /> */}
//                 <PermissionCheck allowedRole="Holidays"><Route exact path={`${process.env.PUBLIC_URL}/holidays`} component={Holidays} /></PermissionCheck>

//                 <Route exact path={`${process.env.PUBLIC_URL}/attendance-employees`} component={AttendanceEmployees} />

//                 <Route exact path={`${process.env.PUBLIC_URL}/attendance`} component={Attendance} />
//                 <PermissionCheck allowedRole="Attendance"><Route exact path={`${process.env.PUBLIC_URL}/attendence`} component={Attendance} /></PermissionCheck>


//                 <Route exact path={`${process.env.PUBLIC_URL}/leave-request`} component={LeaveRequest} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/department`} component={Departments} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/invoices`} component={Invoices} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/payments`} component={Payments} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/expenses`} component={Expenses} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/employee-salary`} component={Salaryslip} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/calander`} component={Calendar} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/chat-app`} component={ChatApp} />

//                 <Route exact path={`${process.env.PUBLIC_URL}/roles`} component={RolesList} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/users`} component={UserList} />

//                 <Route exact path={`${process.env.PUBLIC_URL}/apex-charts`} component={ApexCharts} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/forms-example`} component={FormsExample} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/table-example`} component={TablesExample} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/reviews-page`} component={ReviewsPage} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/icons`} component={Icons} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/widgets`} component={Widgets} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-alerts`} component={Alerts} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-badge`} component={Badges} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-breadcrumb`} component={Breadcrumb} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-buttons`} component={Buttons} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-card`} component={Cards} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-carousel`} component={Carousel} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-collapse`} component={Collapse} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-dropdowns`} component={Dropdowns} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-listgroup`} component={ListGroup} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-modalui`} component={ModalUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-navsui`} component={NavsUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-navbarui`} component={NavbarUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-paginationui`} component={PaginationUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-popoversui`} component={PopoversUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-progressui`} component={ProgressUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-Scrollspyui`} component={Scrollspy} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-spinnersui`} component={SpinnersUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/ui-toastsui`} component={ToastsUI} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/stater-page`} component={StaterPage} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/documentation`} component={Documentation} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/changelog`} component={Changelog} />
//                 <Route exact path={`${process.env.PUBLIC_URL}/help`} component={Help} />
//             </div>
//         </div>
//     )
// }


// export default MainIndex;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import Expenses from "./Accounts/Expenses";
import Invoices from "./Accounts/Invoices";
import Payments from "./Accounts/Payments";
import HrDashboard from "./Dashboard/HrDashboard";
import ProjectDashboard from "./Dashboard/ProjectDashboard";
import Attendance from "./Employee/Attendance";
import AttendanceEmployees from "./Employee/AttendanceEmployees";
import Departments from "./Employee/Departments";
import EmployeeProfile from "./Employee/EmployeeProfile";
import Holidays from "./Employee/Holidays";
import LeaveRequest from "./Employee/LeaveRequest";
import Members from "./Employee/Members";
import ClientProfile from "./Our Clients/ClientProfile";
import Clients from "./Our Clients/Clients";
import Salaryslip from "./Payroll/Salaryslip";
import Leaders from "./Projects/Leaders";
import Projects from "./Projects/Projects";
import Tasks from "./Projects/Tasks";
import Timesheet from "./Projects/Timesheet";
import TicketsDetail from "./Tickets/TicketsDetail";
import TicketsView from "./Tickets/TicketsView";
import Alerts from "./UIComponents/Alerts";
import Calendar from "./App/Calendar";
import ChatApp from "./App/ChatApp";
import ApexCharts from "./OtherPages/ApexCharts";
import FormsExample from "./OtherPages/FormsExample";
import TablesExample from "./OtherPages/TablesExample";
import ReviewsPage from "./OtherPages/ReviewsPage";
import Icons from "./OtherPages/Icons";
import Widgets from "./OtherPages/Widgets";
import Badges from "./UIComponents/Badges";
import Breadcrumb from "./UIComponents/Breadcrumb";
import Buttons from "./UIComponents/Buttons";
import Cards from "./UIComponents/Cards";
import Carousel from "./UIComponents/Carousel";
import Collapse from "./UIComponents/Collapse";
import Dropdowns from "./UIComponents/Dropdowns";
import ListGroup from "./UIComponents/ListGroup";
import ModalUI from "./UIComponents/ModalUI";
import NavsUI from "./UIComponents/NavsUI";
import NavbarUI from "./UIComponents/NavbarUI";
import PaginationUI from "./UIComponents/PaginationUI";
import PopoversUI from "./UIComponents/PopoversUI";
import ProgressUI from "./UIComponents/ProgressUI";
import Scrollspy from "./UIComponents/Scrollspy";
import SpinnersUI from "./UIComponents/SpinnersUI";
import ToastsUI from "./UIComponents/ToastsUI";
import StaterPage from "./Stater/StaterPage";
import PageHeader1 from "../components/common/PageHeader1";
import Documentation from "./Documentation/Documentation";
import Changelog from "./Changelog/Changelog";
import Help from "./Dashboard/Help";
import RolesList from "./Roles/RoleManagement";
import UserList from "./User/UserList";
import PermissionCheck from "../protected/permissionCheck";

function MainIndex(props) {

    console.log(process.env.PUBLIC_URL,"pppp")
    const { activekey } = props;
    return (
        <div className="main px-lg-4 px-md-4">
            {activekey !== "/chat-app" ? activekey === "/documentation" ? <PageHeader1 /> : <Header /> : ""}
            <div className="body d-flex py-lg-3 py-md-2">
                <Routes>
                <Route exact path={`/`} element={<HrDashboard/>} />
                <Route exact path='/hr-dashboard' element={<HrDashboard/>} />
                <Route exact path={`/project-dashboard`} element={<ProjectDashboard/>} />

               
                    <Route exact path={`/projects`} element={ <PermissionCheck allowedRole="Projects"> <Projects/>  </PermissionCheck>} />
               
                    <Route exact path={`/tasks`} element={<PermissionCheck allowedRole='Tasks'> <Tasks/> </PermissionCheck>} />
              
                
                    <Route exact path={`/timesheet`} element={<PermissionCheck allowedRole='Timesheet'> <Timesheet/> </PermissionCheck>} />
           
                
                    <Route exact path={`/leaders`} element={<PermissionCheck allowedRole='Leaders'> <Leaders/> </PermissionCheck>} />
              

                <Route exact path={`/tickets-view`} element={<TicketsView/>} />
                <Route exact path={`/tickets-detail`} element={<TicketsDetail/>} />

              
                    <Route exact path={`/clients`} element={<PermissionCheck allowedRole='Clients'> <Clients/> </PermissionCheck>} />
             
               
                    <Route exact path={`/client-profile`} element={<PermissionCheck allowedRole='Client Profile'> <ClientProfile/> </PermissionCheck>} />
              

              
                    <Route exact path={`/members`} element={<PermissionCheck allowedRole='Members'> <Members/> </PermissionCheck>} />
                

                <Route exact path={`/members-profile`} element={<EmployeeProfile/>} />

             
                    <Route exact path={`/holidays`} element={<PermissionCheck allowedRole='Holidays'> <Holidays/> </PermissionCheck>} />


                <Route exact path={`/attendance-employees`} element={<AttendanceEmployees/>} />

                    <Route exact path={`/attendance`} element={<PermissionCheck allowedRole='Attendance'> <Attendance/> </PermissionCheck>} />
             

                <Route exact path={`/leave-request`} element={<LeaveRequest/>} />
                <Route exact path={`/department`} element={<Departments/>} />
                <Route exact path={`/invoices`} element={<Invoices/>} />
                <Route exact path={`/payments`} element={<Payments/>} />
                <Route exact path={`/expenses`} element={<Expenses/>} />
                <Route exact path={`/employee-salary`} element={<Salaryslip/>} />
                <Route exact path={`/calander`} element={<Calendar/>} />
                <Route exact path={`/chat-app`} element={<ChatApp/>} />

                <Route exact path={`/roles`} element={<RolesList/>} />
                <Route exact path={`/users`} element={<UserList/>} />

                <Route exact path={`/apex-charts`} element={<ApexCharts/>} />
                <Route exact path={`/forms-example`} element={<FormsExample/>} />
                <Route exact path={`/table-example`} element={<TablesExample/>} />
                <Route exact path={`/reviews-page`} element={<ReviewsPage/>} />
                <Route exact path={`/icons`} element={<Icons/>} />
                <Route exact path={`/widgets`} element={<Widgets/>} />
                <Route exact path={`/ui-alerts`} element={<Alerts/>} />
                <Route exact path={`/ui-badge`} element={<Badges/>} />
                <Route exact path={`/ui-breadcrumb`} element={<Breadcrumb/>} />
                <Route exact path={`/ui-buttons`} element={<Buttons/>} />
                <Route exact path={`/ui-card`} element={<Cards/>} />
                <Route exact path={`/ui-carousel`} element={<Carousel/>} />
                <Route exact path={`/ui-collapse`} element={<Collapse/>} />
                <Route exact path={`/ui-dropdowns`} element={<Dropdowns/>} />
                <Route exact path={`/ui-listgroup`} element={<ListGroup/>} />
                <Route exact path={`/ui-modalui`} element={<ModalUI/>} />
                <Route exact path={`/ui-navsui`} element={<NavsUI/>} />
                <Route exact path={`/ui-navbarui`} element={<NavbarUI/>} />
                <Route exact path={`/ui-paginationui`} element={<PaginationUI/>} />
                <Route exact path={`/ui-popoversui`} element={<PopoversUI/>} />
                <Route exact path={`/ui-progressui`} element={<ProgressUI/>} />
                <Route exact path={`/ui-Scrollspyui`} element={<Scrollspy/>} />
                <Route exact path={`/ui-spinnersui`} element={<SpinnersUI/>} />
                <Route exact path={`/ui-toastsui`} element={<ToastsUI/>} />
                <Route exact path={`/stater-page`} element={<StaterPage/>} />
                <Route exact path={`/documentation`} element={<Documentation/>} />
                <Route exact path={`/changelog`} element={<Changelog/>} />
                <Route exact path={`/help`} element={<Help/>} />
                </Routes>
            </div>
        </div>
    );
}

export default MainIndex;
