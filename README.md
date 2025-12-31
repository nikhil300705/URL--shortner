## INTRODUCTION
URL-Shortner app to shorten very long urls, best for sending and increasing chances of retention in mind


## ✨ FEATURES
* Shorten URL
* Custom shortid generation
* Deployed on AWS EC2
* Using NGINX for reverse proxy and Certbot for automatic SSL certificate generation for HTTPS delivery
* Configured on custom .me domain


## 🛠 TECH STACK
**Frontend**
- React.js
- TailwindCSS
- Axios API

**Backend**
- Node.js
- Express.js
- Nodemon
- Express-rate-limitter
- Express-router
  

**Database**
- Mongoose
- MongoDB

**Deployment**
- AWS EC2
- NGINX
- .me Domain from Namecheap

**SSL Certificate**
- Certbot

## 🏗️ ARCHITECTURE OVERVIEW
<img width="831" height="263" alt="image" src="https://github.com/user-attachments/assets/14d2aff5-875d-4df4-b480-561d605f869b" />
     
<img width="1370" height="736" alt="image" src="https://github.com/user-attachments/assets/209f4358-0ee8-44ce-a7ed-a9f577666bea" />


## 🧑‍💻 LOCAL INSTALLATION & SETUP
> ⚠️ Make sure to set up the `.env` file.  
> .env file must contain **MONGODB_URI** and **PORT**  
> Kindly note : If you want to run on your own backend, then you will have to change the api calls in frontend to your custom api
```bash
cd backend        # Move to backend folder
npm install       # Install required dependencies
node index.js     # Start backend server on specified PORT in .env file (https://localhost:PORT)
 
cd ..             # Move back to root folder
cd frontend       # Move to frontend folder
npm install       # Install required dependencies
npm run dev       # Start frontend on port 5173 (https://localhost:5173)
```


## 📝 DESCRIPTION
- You can send url which needs to be shortned and it will be shortned
- If the url is already shortened, then you will a message alerting you about the same along with the shortened url
- To avoid abuse, currently their is an upper limit to number of requests per minute(10 requests/minute per IP)
- Copy the shortned url and you will be redirected to your original website


## 🔮 FUTURE SCOPES
- Using Redis for caching for improving response time
- Checking if the user is inputing random text or actual url
- Return number of clicks to the shortned url
- Implementing signin and signup feature for more security

