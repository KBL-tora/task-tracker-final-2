 Overview
 
The frontend is intended to:

Allow users to register and log in

Store JWT tokens for authenticated sessions

Display a dashboard and task list

Communicate with the backend through api.js

Render components through React Router

At this stage, the application runs locally but displays a blank page. This appears to be caused by issues in the JavaScript structure, routing configuration, or component rendering order. These issues are noted for future debugging and improvement.

If the page renders blank, check:

Component imports

Router setup

File paths

Missing exports

Console errors in the browser

 API Integration
 
The frontend communicates with the backend using the base URL defined in api.js.
Make sure the backend is running before testing the frontend.

 Notes
 
This frontend is still in progress. The structure is in place, but rendering issues prevent the UI from displaying as intended. These issues are documented for transparency and future correction.

task-tracker-frontend/
│
src/
pages/

Login.jsx

Register.jsx

Dashboard.jsx

TaskList.jsx

components/

NavBar.jsx

TaskForm.jsx

api.js

App.jsx

main.jsx

public/

package.json
