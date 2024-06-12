import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { useAppContext } from "./contexts/AppContext";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import AddCompany from "./pages/AddCompany";
import AddInvestor from "./pages/AddInvestor";
import MyCompanies from "./pages/MyCompanies";
import MyInvestors from "./pages/MyInvestors";
import Company from "./pages/Company";
import Investor from "./pages/Investor";
import DetailCompany from "./pages/DetailCompany";
import DetailInvestor from "./pages/DetailInvestor";
import EditCompany from "./pages/EditCompany";
import EditInvestor from "./pages/EditInvestor";

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage/>
            </Layout>
          }
        />

        <Route
          path="/about-us"
          element={
            <Layout>
             <AboutUs/>
            </Layout>
          }
        />
        
        <Route
          path="/companies"
          element={
            <Layout>
              <Company/>
            </Layout>
          }
        />

        <Route
          path="/investors"
          element={
            <Layout>
              <Investor/>
            </Layout>
          }
        />

        <Route
          path="/company-detail/:companyId"
          element={
            <Layout>
              <DetailCompany/>
            </Layout>
          }
        />

        <Route
          path="/investor-detail/:investorId"
          element={
            <Layout>
              <DetailInvestor/>
            </Layout>
          }
        />

        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />

        {isLoggedIn && (
          <>
  
            <Route
              path="/add-company"
              element={
                <Layout>
                  <AddCompany/>
                </Layout>
              }
            />

            <Route
              path="/add-investor"
              element={
                <Layout>
                  <AddInvestor/>
                </Layout>
              }
            />

            <Route
              path="/edit-company/:companyId"
              element={
                <Layout>
                  <EditCompany/>
                </Layout>
              }
            />

            <Route
              path="/edit-investor/:investorId"
              element={
                <Layout>
                  <EditInvestor/>
                </Layout>
              }
            />

          <Route
              path="/my-companies"
              element={
                <Layout>
                  <MyCompanies/>
                </Layout>
              }
            />

            <Route
              path="/my-investors"
              element={
                <Layout>
                  <MyInvestors/>
                </Layout>
              }
            />

          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;