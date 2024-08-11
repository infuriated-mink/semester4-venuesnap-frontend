# VenueSnap Frontend
---

# Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Main Files](#main-files)
   - [EditEvent.jsx](#editeventjsx)
   - [LandingPage.jsx](#landingpagejsx)
   - [axiosInstance.js](#axiosinstancejs)
   - [useFetchData.js](#usefetchdatajs)
   - [DeleteEvent.jsx](#deleteeventjsx)
5. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Deployment Steps](#deployment-steps)
6. [License](#license)
7. [Contact](#contact)

## Overview

The VenueSnap frontend is a React-based web application designed for managing events. It provides a user-friendly interface for creating, editing, and viewing events. The frontend is hosted on an AWS S3 bucket, allowing for scalable and cost-effective static website hosting.

## Features

- **Event Management**: Create, edit, and delete events.
- **Search Functionality**: Search for events by name.
- **Responsive Design**: Optimized for various screen sizes.

## Architecture

- **Frontend**: React.js application.
- **Hosting**: AWS S3 bucket for static website hosting.
- **API Communication**: Axios for HTTP requests to the backend.

## Main Files

1. **EditEvent.jsx**: 
   - Handles the editing of existing events.
   - Utilizes `useParams` to retrieve event ID from the URL.
   - Fetches event data using the `useFetchData` hook.
   - Validates and submits updated event data via an API call using Axios.

2. **LandingPage.jsx**: 
   - Displays a list of events.
   - Includes a search bar for filtering events by name.
   - Provides navigation to add new events or edit existing ones.
   - Uses the `useFetchData` hook to retrieve event data from the API.

3. **axiosInstance.js**: 
   - Configures Axios with a base URL and default headers for API requests.

4. **useFetchData.js**: 
   - Custom hook for fetching data from the API.
   - Manages loading and error states during data retrieval.

5. **DeleteEvent.jsx**: 
   - Component for deleting events.
   - Provides a button to remove events from the list.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- AWS account with access to S3

### Deployment Steps

1. **Install Dependencies**:
   - Navigate to the project directory.
   - Run the following command to install dependencies:
     ```bash
     npm install
     ```

2. **Build the Project**:
   - Run the following command to build the project for production:
     ```bash
     npm run build
     ```

3. **Deploy to S3**:
   - Create an S3 bucket and enable static website hosting.
   - Upload the contents of the `build` directory to the S3 bucket.

4. **Access the Application**:
   - Open a web browser and navigate to the S3 bucket URL to access the VenueSnap frontend.
  
## Contributors

- [Vanessa Rice](https://github.com/infuriated-mink)
- [Evan Harte](https://github.com/evanharte)
- [Dillon Regular](https://github.com/vapidsoup)
- [Ethan Miller](https://github.com/ethanmiller758)

## License

VenueSnap is licensed under the MIT License. See `LICENSE` for more information.

