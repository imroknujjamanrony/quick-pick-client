import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

const AuthTab = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 mb-24 ">
     
       <Tabs>
        <div>
          <TabList className="flex gap-6 mb-4 ml-12">
          
          <Tab className="px-4 py-2 cursor-pointer text-gray-600 font-bold hover:text-black focus:outline-none react-tabs__tab ">
            Login
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer text-gray-600 font-bold hover:text-black focus:outline-none react-tabs__tab">
            Register
          </Tab>
          
        </TabList>
        </div>

        <TabPanel>
          <Login />
        </TabPanel>
        <TabPanel>
          <Register />
        </TabPanel>
      </Tabs>
     </div>

      
  
  );
};

export default AuthTab;
