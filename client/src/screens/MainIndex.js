

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
import TokenAccess from "../protected/tokenAccess";

function MainIndex(props) {

    console.log(process.env.PUBLIC_URL, "pppp")
    const { activekey } = props;
    return (
        <div className="main px-lg-4 px-md-4">
            {activekey !== "/chat-app" ? activekey === "/documentation" ? <PageHeader1 /> : <Header /> : ""}
            <div className="body d-flex py-lg-3 py-md-2">
                <Routes>
                    <Route path="/" element={<TokenAccess><HrDashboard /></TokenAccess>} />
                    <Route path="/hr-dashboard" element={<TokenAccess><HrDashboard /></TokenAccess>} />
                    <Route path="/project-dashboard" element={<TokenAccess><ProjectDashboard /></TokenAccess>} />

                    <Route exact path={`/projects`} element={<PermissionCheck allowedRole="Projects"> <Projects />  </PermissionCheck>} />
                    <Route exact path={`/tasks`} element={<PermissionCheck allowedRole='Tasks'> <Tasks /> </PermissionCheck>} />
                    <Route exact path={`/timesheet`} element={<PermissionCheck allowedRole='Timesheet'> <Timesheet /> </PermissionCheck>} />
                    <Route exact path={`/leaders`} element={<PermissionCheck allowedRole='Leaders'> <Leaders /> </PermissionCheck>} />
                    <Route path="/tickets-view" element={<TokenAccess><TicketsView /></TokenAccess>} />
                    <Route path="/tickets-detail" element={<TokenAccess><TicketsDetail /></TokenAccess>} />
                    <Route exact path={`/clients`} element={<PermissionCheck allowedRole='Clients'> <Clients /> </PermissionCheck>} />
                    <Route exact path={`/client-profile`} element={<PermissionCheck allowedRole='Client Profile'> <ClientProfile /> </PermissionCheck>} />
                    <Route exact path={`/members`} element={<PermissionCheck allowedRole='Members'> <Members /> </PermissionCheck>} />
                    <Route exact path={`/members-profile`} element={<TokenAccess><EmployeeProfile /></TokenAccess>} />
                    <Route exact path={`/holidays`} element={<PermissionCheck allowedRole='Holidays'> <Holidays /> </PermissionCheck>} />
                    <Route exact path={`/attendance-employees`} element={<TokenAccess><AttendanceEmployees /></TokenAccess>} />
                    <Route exact path={`/attendance`} element={<PermissionCheck allowedRole='Attendance'> <Attendance /> </PermissionCheck>} />


                    <Route path="/leave-request" element={<TokenAccess><LeaveRequest /></TokenAccess>} />
                    <Route path="/department" element={<TokenAccess><Departments /></TokenAccess>} />
                    <Route path="/invoices" element={<TokenAccess><Invoices /></TokenAccess>} />
                    <Route path="/payments" element={<TokenAccess><Payments /></TokenAccess>} />
                    <Route path="/expenses" element={<TokenAccess><Expenses /></TokenAccess>} />
                    <Route path="/employee-salary" element={<TokenAccess><Salaryslip /></TokenAccess>} />
                    <Route path="/calendar" element={<TokenAccess><Calendar /></TokenAccess>} />
                    <Route path="/chat-app" element={<TokenAccess><ChatApp /></TokenAccess>} />

                    {/* NEW ROUTES */}

                    <Route exact path={`/roles`} element={<PermissionCheck allowedRole='Roles'> <RolesList /> </PermissionCheck>} />
                    <Route exact path={`/users`} element={<PermissionCheck allowedRole='Users'> <UserList />  </PermissionCheck>} />

                    <Route exact path={`/apex-charts`} element={<ApexCharts />} />
                    <Route exact path={`/forms-example`} element={<FormsExample />} />
                    <Route exact path={`/table-example`} element={<TablesExample />} />
                    <Route exact path={`/reviews-page`} element={<ReviewsPage />} />
                    <Route exact path={`/icons`} element={<Icons />} />
                    <Route exact path={`/widgets`} element={<Widgets />} />
                    <Route exact path={`/ui-alerts`} element={<Alerts />} />
                    <Route exact path={`/ui-badge`} element={<Badges />} />
                    <Route exact path={`/ui-breadcrumb`} element={<Breadcrumb />} />
                    <Route exact path={`/ui-buttons`} element={<Buttons />} />
                    <Route exact path={`/ui-card`} element={<Cards />} />
                    <Route exact path={`/ui-carousel`} element={<Carousel />} />
                    <Route exact path={`/ui-collapse`} element={<Collapse />} />
                    <Route exact path={`/ui-dropdowns`} element={<Dropdowns />} />
                    <Route exact path={`/ui-listgroup`} element={<ListGroup />} />
                    <Route exact path={`/ui-modalui`} element={<ModalUI />} />
                    <Route exact path={`/ui-navsui`} element={<NavsUI />} />
                    <Route exact path={`/ui-navbarui`} element={<NavbarUI />} />
                    <Route exact path={`/ui-paginationui`} element={<PaginationUI />} />
                    <Route exact path={`/ui-popoversui`} element={<PopoversUI />} />
                    <Route exact path={`/ui-progressui`} element={<ProgressUI />} />
                    <Route exact path={`/ui-Scrollspyui`} element={<Scrollspy />} />
                    <Route exact path={`/ui-spinnersui`} element={<SpinnersUI />} />
                    <Route exact path={`/ui-toastsui`} element={<ToastsUI />} />
                    <Route exact path={`/stater-page`} element={<StaterPage />} />
                    <Route exact path={`/documentation`} element={<Documentation />} />
                    <Route exact path={`/changelog`} element={<Changelog />} />
                    <Route exact path={`/help`} element={<Help />} />
                </Routes>
            </div>
        </div>
    );
}

export default MainIndex;
