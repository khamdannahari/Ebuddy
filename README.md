# EBUDDY PTE. LTD. Technical Test

This monorepo contains both the backend and frontend applications for the technical test.

## Personality & Technical Questions

1. **What are the most difficult technical problems in your work experience you have encountered and how do you fix them?**

   - One of the most challenging technical problems I’ve encountered was developing a home screen widget using React Native. The widget required fetching data every 8 hours to stay updated, but since there was no proper library for widgets in React Native, I had to integrate Java with TypeScript to make it work. To handle background tasks for API fetching, I used WorkManager on Android, ensuring that the updates ran reliably in the background. The integration between React Native and native Android code required careful bridging and communication, especially for scheduling tasks without being killed by the system. By managing dependencies properly and optimizing task execution, I was able to make the widget function as expected. 🚀

2. **When you’re working on a project, how do you typically approach it from start to finish?**

   - When I work on a project, I usually go through these steps:
     1. Understand the requirements – I make sure I know what needs to be built and clarify any uncertainties.
     2. Plan & set up – I break the project into tasks, choose the right tools, and set up the development environment.
     3. Build & develop – I write clean, reusable code, integrate APIs, and manage state properly.
     4. Test & optimize – I check for bugs, improve performance, and make sure everything runs smoothly.
     5. Deploy & monitor – I launch the project, track its performance, and fix any issues that come up.
     6. Maintain & improve – I gather feedback, fix bugs, and make continuous improvements.
   - I like to keep things organized, efficient, and scalable while making sure the process stays smooth and enjoyable. 🚀

3. **How do you usually approach learning a new topic to absorb as much as possible?**

   - When learning a new topic, I take a hands-on approach to absorb as much as possible:
     1. Install & Set Up – I start by installing the necessary tools or frameworks to get familiar with them.
     2. Read Technical Articles – I explore resources from platforms like Dail.dev and LinkedIn to understand best practices and real-world use cases.
     3. Hands-on Practice – I experiment with the technology by building small projects or testing features in a sandbox environment.
   - This combination of theory + practice helps me learn efficiently and apply new knowledge quickly. 🚀

4. **“Consistency” vs “fast & efficient”. Choose one.**

   - I’d go with fast & efficient ⚡. Being consistent is great, but if I can achieve the same (or better) results faster and more efficiently, that’s a bigger win. Efficiency means working smart, optimizing processes, and adapting quickly—without unnecessary repetition. That said, consistency in quality matters. As long as the results stay reliable, I’d always prioritize speed and efficiency to move forward faster. 🚀

5. **Do you own any Apple products? Like IMac, Macbook, Ipad, Iphone, etc…**

   - Yes, MacBook. 💻

6. **What is your immediate availability to start this job?**
   - 2 weeks. ⏳

## Information

- The answer to technical question number 4 can be found in the `getUsersSortedPaginated` function in `userCollection.ts`.
- Use Turborepo to efficiently manage and run the monorepo.

## Structure

- `apps/backend-repo`: Express.js backend with Firebase
- `apps/frontend-repo`: Next.js frontend with React MUI
- `packages/shared`: Shared logic and entities

## Setup

### Private Key Variable

- Add the following variable at `apps/backend-repo/config/firebaseConfig.ts`:
  ```
  PRIVATE_KEY="YOUR_PRIVATE_KEY_HERE"
  ```

### Sample Private Key

```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD...
-----END PRIVATE KEY-----
```

## Running the Application

### Installing Dependencies

1. Run the following command in the root directory of the monorepo to install all dependencies:

   ```bash
   npm run install:all
   ```

### Running Backend and Frontend

1. Run the following command in the root directory of the monorepo to start the backend emulator and the frontend development server simultaneously:

   ```bash
   npm run start:all
   ```

## API Documentation

### Dummy User Login

To test the login functionality, you can use the following dummy user credentials:

- **Email:** kenny@gmail.com
- **Password:** kenny123

### Login

- **Endpoint:** `POST /login`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "success": true,
      "message": "Login successful",
      "data": {
        "customToken": "your-custom-token"
      }
    }
    ```
  - **Error (401):**
    ```json
    {
      "success": false,
      "message": "Login failed, check email/password",
      "error": "Detailed error message"
    }
    ```

### Fetch User Data

- **Endpoint:** `GET /fetch-user-data`
- **Headers:**
  - `Authorization: Bearer <your-token>`
- **Query Parameters:**
  - `lastDoc` (optional): JSON string of the last document for pagination
- **Response:**
  - **Success (200):**
    ```json
    {
      "success": true,
      "message": "Users fetched successfully",
      "data": {
        "users": [...],
        "lastDoc": {...},
        "hasMore": true
      }
    }
    ```
  - **Error (500):**
    ```json
    {
      "success": false,
      "message": "Error fetching user data",
      "error": "Detailed error message"
    }
    ```

### Update User Data

- **Endpoint:** `PUT /user`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <your-token>`
- **Request Body:**
  ```json
  {
    "id": "user-id",
    "name": "User Name",
    "totalAverageWeightRatings": 4.5,
    "numberOfRents": 10,
    "recentlyActive": 1
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "success": true,
      "message": "User data updated successfully"
    }
    ```
  - **Error (500):**
    ```json
    {
      "success": false,
      "message": "Error updating user data",
      "error": "Detailed error message"
    }
    ```

### Generate and Save Random Users

- **Endpoint:** `POST /generate-user-data`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <your-token>`
- **Request Body:**
  ```json
  {
    "count": 10
  }
  ```
- **Response:**
  - **Success (201):**
    ```json
    {
      "success": true,
      "message": "10 random users created successfully",
      "data": [...]
    }
    ```
  - **Error (500):**
    ```json
    {
      "success": false,
      "message": "Failed to create random users",
      "error": "Detailed error message"
    }
    ```
