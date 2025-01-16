# React + Vite

## Running the Project Locally with `json-server`

To run this project on a local server with `json-server`, follow these steps:

1. **Clone the Repository**:

   ```sh
   git clone <repository-url>
   cd TanStackPractice
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Go to `src/my-api/data.json` File**:
   Cut the Tags data at the end of the file:

   ```json
   {
     "posts": [
       //Above data
     ],
     //Cut data From Below
     "tags": [
       "classic",
       "crime",
       "english",
       "fiction",
       "french",
       "history",
       "love",
       "magical",
       "mystery"
     ]
   }
   ```

4. **Run `json-server`**:

   ```sh
   json-server src/my-api/data.json --port 5000
   ```

5. **Again go to `src/my-api/data.json` File**:
   Now Paste the Tags data at the end of the file

   ```json
   {
     "posts": [
       //Above data
     ],
     //Paste Here
     "tags": [
       "classic",
       "crime",
       "english",
       "fiction",
       "french",
       "history",
       "love",
       "magical",
       "mystery"
     ]
   }
   ```

   The Json-Server will now have two different mock APIs

6. **Start the React Application**:
   ```sh
   npm run dev
   ```

Your React application should now be running on `http://localhost:5173` and `json-server` on `http://localhost:5000`.
