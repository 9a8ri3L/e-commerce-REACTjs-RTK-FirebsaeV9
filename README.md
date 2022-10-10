# ONLINEstore.

> e-commerce App

### Demo

You can find LIVE DEMO <a href="https://os.devgr.com" target="_blank">HERE</a>

Author - [@Gabriel](https://www.github.com/9a8ri3l)

### Credits:

- Home Page Photo - [unsplash.com](https://unsplash.com)
- API dummy/fake JSON data - [dummyjson.com](https://dummyjson.com)

### Screenshots

#### Desktop

> <img src="https://devgr.com/screenshots/ONLINEstore/os_03.png" width="340" >
> <img src="https://devgr.com/screenshots/ONLINEstore/os_04.png" width="340" >

#### Mobile

> <img src="https://devgr.com/screenshots/ONLINEstore/os_mob_01.png" width="170" >
> <img src="https://devgr.com/screenshots/ONLINEstore/os_mob_02.png" width="170" >
> <img src="https://devgr.com/screenshots/ONLINEstore/01/m-03.png" width="170" >
> <img src="https://devgr.com/screenshots/ONLINEstore/01/m-04.png" width="170" >

### Features

- Firebase V9 E-mail and password Auth.
- Firebase E-mail verification.
- Firebase Password Reset.
- Firebase Database shopping-cart | collections/docs
- Update shopping cart on login and on refresh page when more than one login session is established.
- Light/dark mode toggle.
- Local storage encryption.
- Friendly mobile responsive design.

### Installation

Clone the project

```bash
  git clone https://github.com/9a8ri3L/e-commerce-REACTjs-RTK-FirebsaeV9.git

```

Install Dependencies

For [npm](https://www.npmjs.com/)

```bash
  npm install
```

For [yarn](https://yarnpkg.com/cli/install)

```bash
  yarn install

```

### Environment Variables/Vite config file

To run this project, you will need to create and add the following environment variables to your `vite.config.js` file:

> - `Firebase_configuration`
> - `ENCRYPT_STORAGE`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate"
    })
  ],

  define: {
    "process.env": {
      REACT_APP_FIREBASE_API_KEY: xxxxxxx,
      REACT_APP_FIREBASE_AUTH_DOMAIN: xxxxxxx,
      REACT_APP_FIREBASE_DATABASE_URL: xxxxxxx,
      REACT_APP_FIREBASE_PROJECT_ID: xxxxxxx,
      REACT_APP_FIREBASE_STORAGE_BUCKET: xxxxxxx,
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID: xxxxxxx,
      REACT_APP_FIREBASE_APP_ID: xxxxxxx,
      REACT_APP_FIREBASE_MEASUREMENT_ID: xxxxxxx,
      REACT_APP_ENCRYPT_STORAGE: xxxxxxx
    }
  }
});
```

### Run

```
  npm run dev
```

or

```
  yarn dev
```

### Frameworks/Liberaries/Packages:

**Front-End:**

- [Reactjs](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux ToolKit](https://redux-toolkit.js.org/)
- [Styled-Components](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Vitejs](https://vitejs.dev/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Styled-Media-Query](https://github.com/morajabi/styled-media-query)
- [UUID](https://www.npmjs.com/package/uuid)
- [Encrypt-Storage](https://www.npmjs.com/package/encrypt-storage)

**Back-End:**

- [Firebase](https://firebase.google.com/)

### Feedback

If you have any feedback, please don't hesitate to contact me.

### Contributing

Contributions are always welcome!

### License [MIT](https://choosealicense.com/licenses/mit/)

(c) 2022 [Gabriel](https://devgr.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
