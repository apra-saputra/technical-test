# FRONTEND-TEST-GIPHY

## **TECHSTACK**
- Typescript
- Vite
- React
- Redux/toolkit
- tailwind
- axios
- sweetalert2
- react-loader-spinner

## **GETTING START**

### _Install the dependancies_

```
npm install
```

### _Create Variable & connect to api_

create a _.env_ file at the root of the project base on _.example.env_ 

- note : **create _secret.ts_ in _/src/stores_ to contain _.env_ due to error in local from _import.meta.env_ by vite**

#### _.env_ OR _secret.ts_
```
REACT_APP_API_URL = "https://api.giphy.com/v1/gifs"
API_KEY
```

### _Run in local_

```
npm run dev
```

## DEMO

- [Link On Firebase](https://frontend-reactts-giphy.web.app/)
