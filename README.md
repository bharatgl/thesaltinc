# Single Page Application - Person Management System

This is a Single Page Application (SPA) called "Person Management System" built using React, a popular front-end JavaScript library. The application aims to manage a list of persons with features to add, view, update, and delete person records in a clean, efficient, and scalable manner. It consists of three main components: "Person-list," "Person-add," and "Person-home."



# Components

## 1. Person-list

The "Person-list" component displays a table with a list of all the persons in the system. It supports responsive design, ensuring a smooth user experience across different devices. The table is customizable and provides options to edit or delete individual person records.
![image](https://github.com/bharatgl/thesaltinc/assets/56772219/c0c9f5ca-c660-40ac-8baa-8117ee68c7a8)

## 2. Person-add

The "Person-add" component offers a form to add new persons to the system. The form fields include essential information like name, age, contact details, etc., and it validates user input to ensure data integrity. The form also adheres to responsive design principles, allowing users to add persons on various screen sizes.

![image](https://github.com/bharatgl/thesaltinc/assets/56772219/2ae4b1bb-5864-4792-86b6-5d17cc1b7146)




## 3. Person-home 


The "Person-home" component serves as the landing page of the application. It presents an animated background featuring an awe-inspiring view of the Earth, Moon, and stars, all dynamically rendered using React three fiber with threejs. This captivating visual experience enhances the overall user engagement and sets the stage for a delightful user journey. Additionally, the page includes a button labeled "Redirect to person list" to navigate users to the "Person-list" component seamlessly.
![image](https://github.com/bharatgl/thesaltinc/assets/56772219/66f83431-0de2-4fb3-a0f1-2e33ac60cbc7)


# Features

### CRUD Operations:

The application provides functionalities to Create, Read, Update, and Delete person records. Users can add new persons, view the list of existing persons, edit their information, and remove them from the system with ease.

### Animated Background:

The "Person-home" page is enriched with an animated background using CSS or the React three fiber plugin with threejs. This captivating visual element enhances the overall user experience.

### Responsive Design:

Both the form in "Person-add" and the table in "Person-list" are designed to be responsive, ensuring optimal usability on various devices, including desktops, tablets, and mobile phones.

# Installation and Usage

## Follow the steps below to set up and run the application locally:

### Prerequisites

1. Before proceeding, make sure you have the following installed on your machine:

2. Node.js (https://nodejs.org)
   npm (Node Package Manager, comes with Node.js)
3. Clone the Repository
   Start by cloning this repository to your local machine using the following command:

4. git clone https://github.com/your-username/person-management-system.git
   Install Dependencies
   Navigate to the project directory and install the necessary dependencies using npm:

5. cd person-management-system
   npm install
   Development Server
   To run the development server and see the application in action, use the following command:

6. npm run dev
   This will start the Vite development server, which automatically reloads the page whenever you make changes to the code.

7. Build for Production
   If you want to build the application for production, you can use the following command:

8. npm run build
   This will create an optimized production build in the dist directory.

9. Running the Production Build
   To serve the production build locally, you can use the following command:

10. npm run serve

#### This will start a server to serve the production build.
